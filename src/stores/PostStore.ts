import { ref } from "vue"
import { defineStore } from "pinia"
import { useRouter } from 'vue-router'
import postApi from "../api/postApit"
import { Post } from "../interfaces/Post"

export const usePostStore = defineStore('posts', () => {

    const router = useRouter()

    // State
    const posts = ref<Post[]>([])
    const postsState = ref<Post[]>([])
    // Actions
    const getAllPosts = async () => {
        const  { data }  = await postApi.get('/posts')
        posts.value = [ ...postsState.value.reverse(), ...data.reverse(), ]
    }

    const createPost = async (post: Post) => {
        /* Important: resource will not be really updated on the server but it will be faked as if. (Mensage de jsonplaceholder)*/
        /* El console.log es para ver la response respuest que si funciona */
        const { data } = await postApi.post( '/posts', post )
        console.log( data)
        posts.value.push( { ...post} )
        postsState.value.push( { ...post} )
        router.push({ name: 'home'})

    }

    const detelePost = (postId: number ) => {
        posts.value = posts.value.filter(post => post.id !== postId)
    }

    const getPostById = (postId: number) => {
        const data = posts.value.find( post => post.id === postId)
        const post = {...data}
        return post
    }

    // Getters
    return {
        posts,
        postsState,
        getAllPosts,
        createPost,
        detelePost,
        getPostById
    } 
 })
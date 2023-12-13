<script setup lang="ts">
import { reactive } from 'vue';
import { useRoute } from 'vue-router';
import { Post } from '@/interfaces/Post';
import { usePostStore } from '@/stores/PostStore';

const postStore = usePostStore()
const route = useRoute();

console.log( +route.params.id )

/* Genereamos un user Id random del 1 al 10 */
const randomUserId = () => { 
  return Math.floor(Math.random() * 10 + 1)
}

const post = reactive<Post>({
    title: '',
    body: '',
    userId: randomUserId(),
    id: Date.now()
})

const postById = postStore.getPostById( +route.params.id )
console.log(postById.title)

</script>
<template>
    <div class="form-container">
        <form @submit.prevent="postStore.createPost(post)">
            <label for="postTitle">Título del Post</label>
            <input v-if="Object.keys(postById).length === 0" type="text" id="postTitle" name="postTitle" v-model="post.title" placeholder="Titulo del Post" required>
            <input v-else type="text" id="postTitle" name="postTitle" v-model="postById.title" placeholder="Titulo del Post" required>

            <label for="postBody">Cuerpo del Post</label>
            <textarea v-if="Object.keys(postById).length === 0" id="postBody" name="postBody" rows="4" v-model="post.body" placeholder="Cuerpo del Post" required ></textarea>
            <textarea v-else id="postBody" name="postBody" rows="4" v-model="postById.body" placeholder="Cuerpo del Post" required ></textarea>

            <input type="submit" value="Guardar Cambios">
        </form>
    </div>
</template>
<style scoped>
body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
        }

        .form-container {
            width: 600px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            padding: 20px;
            margin: 20px;
        }

        form {
            display: flex;
            flex-direction: column;
        }

        label {
            font-size: 16px;
            margin-bottom: 8px;
        }

        input, textarea {
            padding: 10px;
            margin-bottom: 16px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }

        input[type="submit"] {
            background-color: #4caf50;
            color: #fff;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        input[type="submit"]:hover {
            background-color: #45a049;
        }
</style>
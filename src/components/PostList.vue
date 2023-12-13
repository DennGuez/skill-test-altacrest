<script setup lang="ts">
import { usePostStore } from '../stores/PostStore';
const postStore = usePostStore()
postStore.getAllPosts()
 
</script>

<template>
    <div v-for="post in postStore.posts" :key="post.id" class="post">
        <h1 class="post-title">{{  post.title }}</h1>
        <p class="post-body">{{ post.body }}</p>
        <div>
            <button style="margin-right: 20px;"><RouterLink :to="{
                name: 'update-post',
                params: { id: post.id }
            }">
                Edit
            </RouterLink></button>
            <button @click="postStore.detelePost(post.id)">Delete</button>
        </div>
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

        .post {
            max-width: 600px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            padding: 20px;
            margin: 20px;
        }

        .post-title {
            font-size: 24px;
            font-weight: bold;
            color: #333;
            margin-bottom: 10px;
        }

        .post-body {
            font-size: 16px;
            color: #555;
        }

</style>

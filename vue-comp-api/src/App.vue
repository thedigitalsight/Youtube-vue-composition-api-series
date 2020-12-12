<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl mb-4">Tag Component</h1>
    <div class="mb-8 mt-2">
      <router-link to="/tag-input-1" class="text-indigo-300 mr-4" active-class="text-indigo-500">Tag Input 1</router-link>
      <router-link to="/tag-input-2" class="text-indigo-300 mr-4" active-class="text-indigo-500">Tag Input 2</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
}
</script>

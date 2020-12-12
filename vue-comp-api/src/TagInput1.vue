<template>
    <div class="tag-input flex flex-wrap border border-grey-500 rounded-lg overflow-hidden max-w-3xl">
      <div class="tag bg-indigo-400 m-2 px-2 py-1 rounded-md tag text-white mr-0" v-for="tag in tags" :key="tag">
        <span class="mr-2">{{ tag }}</span>
        <button class="focus:outline-none" @click="removeTag(tag)">&times;</button>
      </div>
      <input v-model="tagInput" type="text" class="flex-grow outline-none p-2" placeholder="Add new tag..." @keyup.enter="addTag(tagInput)">
      <button class="p-1 m-2 hover:underline focus:outline-none" @click="clearAllTags" v-show="tags.length">&times; clear all</button>
    </div>
</template>

<script>
import useTag from './useTag';

export default {
  setup() {
    const {tags, tagInput, addTag, removeTag, clearAllTags} = useTag();

    return {
      // useTag
      tags,
      tagInput,
      addTag,
      removeTag,
      clearAllTags,
    }
  }
}
</script>

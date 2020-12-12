<template>
    <input type="text" v-model="tagInput" class="px-4 py-2 border-2 border-grey-500 rounded-lg outline-none focus:border-indigo-400 block" placeholder="Add new tag..." @keyup.enter="addTag(tagInput)">

    <button class="focus:outline-none text-gray-400 hover:underline mt-2" @click="removeTag(tag)" v-show="tags.length">Remove All Tags</button>

    <ul class="list-disc list-inside mt-4">
      <li v-for="tag in tags" :key="tag" class="">
        <span class="mr-3">{{ tag }}</span>
        <button class="focus:outline-none text-gray-400 hover:underline" @click="removeTag(tag)">remove</button>
      </li>
    </ul>
</template>

<script>
import useTag from './useTag';

export default {
  setup() {
    const {tags, tagInput, addTag, removeTag,clearAllTags} = useTag();

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

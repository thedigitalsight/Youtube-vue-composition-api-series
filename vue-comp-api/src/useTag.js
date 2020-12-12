import { ref } from 'vue'

export default function useTag() {
  const tags = ref([])
  const tagInput = ref('')

  const addTag = value => {

    const tag = value.trim()

    // If value is falsy => Don't do anything
    if (!tag || tags.value.includes(tag)) return


    // If value is already in tag list => don't repeat
    if (tags.value.findIndex(t => t === tag) > -1) return

    // If input value is valid add it to tag list
    tags.value.push(tag)

    // Clear tag input
    tagInput.value = ''
  }

  const removeTag = value => {
    const tagIndex = tags.value.findIndex(t => t === value)
    tags.value.splice(tagIndex, 1)
  }

  const clearAllTags = () => {
    tags.value = []
  }

  return {
    tags,
    tagInput,
    addTag,
    removeTag,
    clearAllTags,
  }
}

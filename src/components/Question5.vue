<template>
  <div class="container">
    <div v-for="(char, index) in string" :key="index" :class="getClass(char)">
      {{ char }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      string: '11123111aaa',
    };
  },
  methods: {
    getClass(char) {
      return char === 'a' ? 'char-wrap' : 'char';
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
}

.char,
.char-wrap {
  padding: 5px;
}

.char-wrap {
  flex-wrap: nowrap;
}
</style>

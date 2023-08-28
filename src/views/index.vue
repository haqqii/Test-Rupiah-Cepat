<template>
  <div class="vuejs-example">
    <h2>Apa itu Vue.js?</h2>
    <p>{{ answer }}</p>
    <pre>{{ example }}</pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      answer: 'Vue.js adalah sebuah kerangka kerja JavaScript yang digunakan untuk membangun antarmuka pengguna.',
      example: `const app = Vue.createApp({
  data() {
    return {
      message: 'Halo dari Vue.js!'
    };
  }
});

app.mount('#app');`
    };
  }
};
</script>

<style scoped>
.vuejs-example {
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
}
</style>

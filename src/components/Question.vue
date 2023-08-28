<template>
  <div class="question">
    <h2>{{ question }}</h2>
    <p>{{ answer }}</p>
    <div class="example">
      <h3>Example:</h3>
      <pre>{{ example }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  props: ['question', 'answer', 'example']
};
</script>

<style scoped>
.question {
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #ccc;
}

h2 {
  margin-top: 0;
}

.example {
  margin-top: 10px;
}

pre {
  background-color: #f9f9f9;
  padding: 10px;
  border-radius: 4px;
  overflow: auto;
}
</style>

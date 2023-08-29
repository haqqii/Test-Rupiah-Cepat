<template>
  <div class="question">
    <h2>{{ number }}</h2>
    <p>{{ question }}</p>
    <h3>Answer:</h3>
    <div class="example" v-if="isCode">
      <pre>{{ answer }}</pre>
    </div>
    <div v-else>
      <p v-html="answerT"></p>
    </div>
    <pre>{{opsional}}</pre>
  </div>
</template>

<script>
export default {
  props: ['number', 'question', 'answerT', 'answer', 'opsional'],
  computed: {
    isCode() {
      return this.answer !== undefined;
    },
  },
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

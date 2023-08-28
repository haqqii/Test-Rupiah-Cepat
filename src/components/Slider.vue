<template>
  <div class="slider">
    <div class="slides" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <img v-for="(image, index) in images" :key="index" :src="image" alt="Image">
    </div>
    <button @click="prevSlide" class="prevBtn">Previous</button>
    <button @click="nextSlide" class="nextBtn">Next</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: ['image1.jpg', 'image2.jpg', 'image3.jpg'],
      currentIndex: 0
    };
  },
  methods: {
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }
  }
};
</script>

<style scoped>
.slider {
  position: relative;
  width: 80%;
  margin: 0 auto;
  overflow: hidden;
}

.slides {
  display: flex;
  transition: transform 0.3s ease-in-out;
}

.slides img {
  width: 100%;
  height: auto;
}

.prevBtn,
.nextBtn {
  padding: 5px 10px;
  font-size: 16px;
  margin-top: 10px;
}
</style>

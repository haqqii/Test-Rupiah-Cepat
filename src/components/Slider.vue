<template>
  <div class="slider">
    <div class="slider-container" :style="{ transform: `translateX(-${currentIndex * 500}px)` }">
      <img v-for="(image, index) in images" :key="index" :src="image" :alt="'Image ' + (index + 1)">
    </div>
    <button @click="goToPrevImage">Previous</button>
    <button @click="goToNextImage">Next</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      images: ['image1.jpg', 'image2.jpg', 'image3.jpg']
    };
  },
  methods: {
    goToNextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    goToPrevImage() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    }
  },
  mounted() {
    this.interval = setInterval(this.goToNextImage, 3000);
    this.$el.addEventListener('click', () => {
      clearInterval(this.interval);
    });
  },
  beforeDestroy() {
    clearInterval(this.interval);
  }
};
</script>

<style scoped>
.slider {
  width: 500px;
  overflow: hidden;
}

.slider-container {
  display: flex;
  transition: transform 0.3s ease-in-out;
}

.slider-container img {
  width: 500px;
  height: auto;
}

button {
  margin-top: 10px;
}
</style>

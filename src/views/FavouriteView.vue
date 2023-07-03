<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { type Movie } from '../types/app';
const movies = ref([] as Movie[])
const loading = ref(false as boolean)

onMounted(() => {
  loading.value = true;
  movies.value = JSON.parse(localStorage.getItem('movie') as string);
  loading.value = false;
})


const removeToFavourite = (movie: Movie) => {
  const temp = JSON.parse(localStorage.getItem('movie') as string);
  if (temp && temp.length) {
    const id = movie.imdbID;
    const res = temp.findIndex((movie: Movie) => movie.imdbID === id);
    if (res != -1) {
      temp.splice(res, 1);
      localStorage.setItem('movie', JSON.stringify(temp));
      movies.value = temp;
    }
  }
};

const getImageUrl = (mov:number) => {
  return new URL(`../assets/images/${mov}.jpeg`, import.meta.url).href
}

</script>

<template>
  <div>
    <section class="text-gray-600 body-font heroImage">
      <div class="container px-5 py-12 mx-auto">
        <div class="flex flex-col text-center w-full">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">My Favourites</h1>
          <router-link to="/" class="m-auto">
            <button
              id="homeBtn"
              class="text-white bg-amber-900 border-0 py-2 px-5 focus:outline-none hover:bg-amber-900 rounded rounded-l-none flex text-center"
            >
              Home
            </button>
          </router-link>
        </div>
      </div>
    </section>
    <section v-if="movies && movies.length" class="text-gray-600 body-font">
      <div class="px-8 py-12 mx-auto flex flex-wrap sm:px-4 gap-8">
        <div
          v-for="(movie, idx) in movies"
          :key="idx"
          class="p-4 lg:w-[23%] md:w-[47%] w-full movie gap-2"
        >
          <div class="block relative h-60 w-full rounded overflow-hidden">
            <img
              alt="ecommerce"
              class="object-cover object-center w-full h-full block"
              :src="getImageUrl(idx+1)"
            />
          </div>
          <div class="w-full">
            <h3 class="movie-title text-gray-900 tracking-widest title-font mb-1 font-semibold">{{ movie.Title }}</h3>
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <div class="flex items-center">
                  <div class="w-5">
                    <svg
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 122.88 122.88"
                      style="enable-background: new 0 0 122.88 122.88"
                      xml:space="preserve"
                    >
                      <g>
                        <path
                          class="st0"
                          d="M18.43,0h86.02c10.18,0,18.43,8.25,18.43,18.43v86.02c0,10.18-8.25,18.43-18.43,18.43H18.43 C8.25,122.88,0,114.63,0,104.45l0-86.02C0,8.25,8.25,0,18.43,0L18.43,0z"
                        />
                        <path
                          d="M24.96,78.72V44.16h-9.6v34.56H24.96L24.96,78.72z M45.36,44.16L43.2,60.24L42,51.6l-1.2-7.44l-12,0v34.56h8.16v-22.8 l3.36,22.8h6l3.12-23.28v23.28h8.16V44.16H45.36L45.36,44.16z M61.44,78.72V44.16h14.88c3.6,0,6.24,2.64,6.24,6v22.56 c0,3.36-2.64,6-6.24,6H61.44L61.44,78.72z M72.72,50.4l-2.16-0.24v22.56c1.2,0,2.16-0.24,2.4-0.72c0.48-0.48,0.48-1.92,0.48-4.32 V54.24v-2.88L72.72,50.4L72.72,50.4L72.72,50.4z M100.56,52.8h0.72c3.36,0,6.24,2.64,6.24,6v13.92c0,3.36-2.88,6-6.24,6l-0.72,0 c-1.92,0-3.84-0.96-5.04-2.64l-0.48,2.16H86.4V44.16h9.12V55.2C96.72,53.76,98.64,52.8,100.56,52.8L100.56,52.8z M98.64,69.6v-8.16 L98.4,58.8c-0.24-0.48-0.96-0.72-1.44-0.72c-0.48,0-1.2,0.24-1.44,0.72v13.68c0.24,0.48,0.96,0.72,1.44,0.72 c0.48,0,1.44-0.24,1.44-0.72L98.64,69.6L98.64,69.6z"
                        />
                      </g>
                    </svg>
                  </div>
                  <div class="ml-1">
                    {{ movie.imdbID }}
                  </div>
                </div>
                <div class="flex items-center">
                  <div class="w-5">
                    <svg
                      id="Layer_1"
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 122.88 118.34"
                    >
                      <path
                        class="cls-1"
                        d="M95.53,63.65A27.35,27.35,0,1,1,68.19,91,27.35,27.35,0,0,1,95.53,63.65ZM71.59,4.05c0-2.23,2.21-4,4.94-4s4.94,1.82,4.94,4.05V22.9c0,2.24-2.21,4.05-4.94,4.05s-4.94-1.81-4.94-4.05V4.05Zm-44.26,0c0-2.23,2.21-4,4.94-4s4.95,1.82,4.95,4.05V22.9C37.22,25.14,35,27,32.27,27s-4.94-1.81-4.94-4.05V4.05ZM48,77.66H60A38,38,0,0,0,57.62,91c0,.87,0,1.74.09,2.6H48a1.88,1.88,0,0,1-1.87-1.87V79.53A1.88,1.88,0,0,1,48,77.66ZM77.6,51.71H92.27a1.89,1.89,0,0,1,1.81,1.4,37.76,37.76,0,0,0-18.35,5.55V53.57a1.87,1.87,0,0,1,1.87-1.86ZM48,51.71H62.68a1.87,1.87,0,0,1,1.87,1.86V65.78a1.89,1.89,0,0,1-1.87,1.87H48a1.88,1.88,0,0,1-1.87-1.87V53.57A1.88,1.88,0,0,1,48,51.71Zm-29.58,0H33.1A1.87,1.87,0,0,1,35,53.57V65.78a1.89,1.89,0,0,1-1.87,1.87H18.43a1.87,1.87,0,0,1-1.87-1.87V53.57a1.87,1.87,0,0,1,1.87-1.86Zm0,25.95H33.1A1.87,1.87,0,0,1,35,79.53v12.2A1.89,1.89,0,0,1,33.1,93.6H18.43a1.87,1.87,0,0,1-1.87-1.87V79.53a1.87,1.87,0,0,1,1.87-1.87Zm45.48,34.26H10.24A10.28,10.28,0,0,1,0,101.68V20.54A10.29,10.29,0,0,1,10.24,10.3h9.44V22.9a11.24,11.24,0,0,0,4.26,8.75,13.25,13.25,0,0,0,16.67,0,11.24,11.24,0,0,0,4.26-8.75V10.3H63.94V22.9a11.23,11.23,0,0,0,4.25,8.75,13.26,13.26,0,0,0,16.68,0,11.26,11.26,0,0,0,4.25-8.75V10.3H99a10.28,10.28,0,0,1,10.24,10.24V55.63a38.34,38.34,0,0,0-4.37-1.4V39.94H4.37V99.5a8.08,8.08,0,0,0,8.05,8h49a40.11,40.11,0,0,0,2.5,4.37ZM91.74,77.23h3.34a1.12,1.12,0,0,1,1.12,1.12V91.23H108a1.12,1.12,0,0,1,1.12,1.11v3.35A1.12,1.12,0,0,1,108,96.8H90.63V78.35a1.12,1.12,0,0,1,1.11-1.12Zm3.79-7.37A21.14,21.14,0,1,1,74.4,91,21.13,21.13,0,0,1,95.53,69.86Z"
                      />
                    </svg>
                  </div>
                  <div class="ml-1">{{ movie.Year }}</div>
                </div>
              </div>
              <div class="overflow-hidden p-5 w-[60px] cursor-pointer" @click="removeToFavourite(movie)" id="favButton" title="Add to Favourites">
                <svg
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 122.88 107.39"
                >
                  <path
                    class="cls-2"
                    d="M60.83,17.18c8-8.35,13.62-15.57,26-17C110-2.46,131.27,21.26,119.57,44.61c-3.33,6.65-10.11,14.56-17.61,22.32-8.23,8.52-17.34,16.87-23.72,23.2l-17.4,17.26L46.46,93.55C29.16,76.89,1,55.92,0,29.94-.63,11.74,13.73.08,30.25.29c14.76.2,21,7.54,30.58,16.89Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section v-if="!loading && movies.length == 0">
      <div class="overflow-hidden p-2 w-64 m-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
          viewBox="0 0 86 107.5"
          version="1.1"
        >
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
            <g
              sketch:type="MSLayerGroup"
              transform="translate(21.000000, 18.000000)"
              fill="#000000"
            >
              <path
                d="M38,19.5 L14.3,19.5 L35.8,10.9 C38.4,9.9 39.6,7 38.6,4.4 L38.3,3.6 C37.5,1.7 35.7,0.5 33.7,0.5 C33.1,0.5 32.4,0.6 31.9,0.9 L3.1,12.4 C1.9,12.9 0.9,13.8 0.4,15.1 C-0.1,16.3 -0.1,17.7 0.3,18.9 L0.6,19.7 C1,20.8 1.8,21.6 2.7,22.1 C2.3,22.8 2,23.7 2,24.5 L2,41.3 C2,44.1 4.2,46.3 7,46.3 L38.1,46.3 C40.9,46.3 43.1,44.1 43.1,41.3 L43.1,24.5 C43,21.8 40.8,19.5 38,19.5 L38,19.5 Z M40,24.5 L40,27.2 L32.1,27.2 L36.8,22.5 L36.8,22.5 L38.1,22.5 C39.1,22.5 40,23.4 40,24.5 L40,24.5 Z M22.5,27.2 L27.2,22.5 L27.2,22.5 L32.6,22.5 L27.9,27.2 L22.5,27.2 L22.5,27.2 Z M12.8,27.2 L17.5,22.5 L17.5,22.5 L22.9,22.5 L18.2,27.2 L12.8,27.2 L12.8,27.2 Z M5,27.2 L5,24.5 C5,23.7 5.5,23 6.2,22.7 C6.3,22.7 6.5,22.6 6.6,22.6 L7,22.6 L13.3,22.6 L8.6,27.3 L5,27.3 L5,27.2 Z M15.7,15.7 L9.5,13.1 L14.5,11.1 L20.8,13.8 L15.8,15.8 L15.7,15.7 L15.7,15.7 Z M23.5,7.5 L29.8,10.2 L24.8,12.2 C24.8,12.2 24.7,12.2 24.7,12.1 L18.5,9.4 L23.5,7.5 L23.5,7.5 Z M33,3.7 C33.2,3.6 33.5,3.6 33.7,3.6 C34.5,3.6 35.3,4.1 35.6,4.9 L35.9,5.7 C36.3,6.7 35.8,7.9 34.8,8.3 L33.7,8.7 C33.7,8.7 33.6,8.7 33.6,8.6 L27.4,6 L33,3.7 L33,3.7 Z M4.2,15.2 L5.6,14.6 L11.9,17.3 L6.1,19.6 C5.9,19.6 5.8,19.7 5.6,19.7 L5.3,19.7 C4.5,19.7 3.7,19.2 3.4,18.4 L3.1,17.6 C2.6,16.7 3.1,15.6 4.2,15.2 L4.2,15.2 Z M38,43.3 L7,43.3 C5.9,43.3 5,42.4 5,41.3 L5,30.2 L40.1,30.2 L40.1,41.3 C40,42.4 39.1,43.3 38,43.3 L38,43.3 Z"
                sketch:type="MSShapeGroup"
              />
              <path
                d="M35.2,35.6 L9.2,35.6 C8.4,35.6 7.7,36.3 7.7,37.1 C7.7,37.9 8.4,38.6 9.2,38.6 L35.2,38.6 C36,38.6 36.7,37.9 36.7,37.1 C36.7,36.3 36,35.6 35.2,35.6 L35.2,35.6 Z"
                sketch:type="MSShapeGroup"
              />
            </g>
          </g>
        </svg>
      </div>
      <h3 class="text-2xl font-semibold -mt-28 mx-auto text-center">No Favourite Movies found</h3>
    </section>
    <h3 v-if="loading" class="text-2xl font-semibold py-24 text-center">Loading ....</h3>
  </div>
</template>

<style lang="scss" scoped>
.heroImage {
  display: flex;
  flex-direction: column;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.35),
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.35)
    ),
    url('../assets/images/home-bg.jpg') top left / cover no-repeat;
}
.movie {
  align-items: flex-start;
  border: 1px solid rgba(26, 26, 26, 0.1);
  border-radius: 12px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 24px;
  position: relative;
}
.st0 {
  fill: #f5c518;
}
.cls-1 {
  fill-rule: evenodd;
}
.cls-2 {
  fill: #ed1b24;
  fill-rule: evenodd;
}
.cls-3 {
  fill: #dfdcdc;
  fill-rule: evenodd;
}
</style>

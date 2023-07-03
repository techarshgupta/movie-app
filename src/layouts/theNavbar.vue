
<script setup lang="ts">
import { computed, ref } from 'vue'
const showLogOut = ref(false)
const getUserName = computed(() => {
  return 'HG'
})
</script>

<template>
  <div class="flex justify-between select-none bg-white shadow-xl h-16">
    <div class="flex">
      <div class="overflow-hidden p-2 -mt-2 w-20">
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
    </div>
    <div class="flex justify-around items-center mx-4">
      <router-link to="/favourite" class="m-auto overflow-hidden p-6 w-20" id="favLink">
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 122.88 107.39"
        >
          <path
            class="cls-1"
            d="M60.83,17.18c8-8.35,13.62-15.57,26-17C110-2.46,131.27,21.26,119.57,44.61c-3.33,6.65-10.11,14.56-17.61,22.32-8.23,8.52-17.34,16.87-23.72,23.2l-17.4,17.26L46.46,93.55C29.16,76.89,1,55.92,0,29.94-.63,11.74,13.73.08,30.25.29c14.76.2,21,7.54,30.58,16.89Z"
          />
        </svg>
      </router-link>
      <div class="flex cursor-pointer items-center relative">
        <div
          v-if="showLogOut"
          @click="showLogOut = false"
          class="fixed inset-0 bg-black opacity-5 h-full w-full cursor-default z-10"
        ></div>
        <span
          class="relative z-20 flex justify-center font-semibold items-center bg-black text-white w-9 h-9 ml-1 rounded-full"
          @click="showLogOut = !showLogOut"
        >
          {{ getUserName }}
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cls-1 {
  fill: #ed1b24;
  fill-rule: evenodd;
}
</style>

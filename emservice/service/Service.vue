<template>
  <div
    class="service"
    @mouseleave="leaveFn"
    :style="{
      right: `${right}px`,
      bottom: `${bottom}px`,
    }"
  >
    <div class="service-wrap">
      <img class="service-head" src="./assets/img/head.png" alt="客服头像">
      <ul class="service-list service-iconlist" :class="{
        ['service-iconlist-on']: status
      }">
        <li class="service-wrap-item" @mouseenter="enterFn(0)" @click="clickFn" v-if="serviceStatus">
          <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <path :d="path[0]"></path>
          </svg>
        </li>
        <li class="service-wrap-item" @mouseenter="enterFn(1)" v-if="telStatus">
          <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <path :d="path[1]"></path>
          </svg>
        </li>
        <li class="service-wrap-item" @mouseenter="enterFn(2)" v-if="helpStatus">
          <svg width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <path :d="path[2]"></path>
          </svg>
        </li>
      </ul>
    </div>
    <div class="service-wrap-content" v-show="status">
      <div class="service-wrap-content-phone" v-show="index === 1">
        <div class="service-wrap-content-phone-title">客服电话</div>
        <a href="tel:400-063-0260" class="service-wrap-content-phone-tel">400-063-0260</a>
      </div>
      <div class="service-wrap-content-problem" v-show="index === 2">
        <ul class="service-list">
          <li class="service-wrap-content-problem-item"
          v-for="(item, i) in datas" :key="i">
            <a :href="item[fieldNames.link]" :target="target">{{item[fieldNames.link_desc]}}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import path from './path';

export default {
  name: 'WService',
  data() {
    return {
      path,
      status: false,
      index: -1,
    };
  },
  props: {
    fieldNames: {
      type: Object,
      default: () => ({
        link_desc: 'link_desc',
        link: 'link',
      }),
    },
    datas: {
      type: Array,
      default: () => ([]),
    },
    target: {
      type: String,
      default: '_blank',
    },
    helpStatus: Boolean,
    serviceStatus: Boolean,
    telStatus: Boolean,
    right: {
      type: Number,
      default: 32,
    },
    bottom: {
      type: Number,
      default: 100,
    },
  },
  methods: {
    clickFn() {
      window.qimoChatClick();
    },
    enterFn(index) {
      this.index = index;
      this.status = index > 0;
    },
    leaveFn() {
      this.status = false;
      this.index = -1;
    },
  },
};
</script>

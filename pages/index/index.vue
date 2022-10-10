<template>
  <div class="p-4">
    <h1 class="text-center text-2xl font-bold my-4">{{detail.title}}</h1>
    <div class="text-center">日期：{{useDateFormat(detail.updateTime, 'YYYY-MM-DD HH:mm:ss')}} 阅读：{{detail.viewCount}}</div>
    <div class="flex items-center justify-center space-x-8 my-10">
      <NuxtLink class="btn btn-blue" to="/about">关于我们</NuxtLink>
      <button class="btn btn-green" @click="changeId">下一篇</button>
    </div>
    <div v-html="detail.content"></div>
  </div>
</template>
<script lang="ts" setup>
import { useDateFormat } from '@vueuse/core'
const params = reactive({
  id:8
})
const { data: detail, refresh } = await useHttp('/article/detail', { params })
const changeId = () => {
  params.id+=1
  refresh()
}
useHead({
  title: '首页',
  titleTemplate:()=>detail.value?.title,
  meta: [
    // computer getter syntax  
    { name: 'description', content:detail.value?.summary  },
  ],
})
</script>
<style lang=""></style>

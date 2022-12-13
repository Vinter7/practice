<script setup>
const whole = [
  'bg-gradient-to-br',
  'from-pink-300',
  'via-purple-300',
  'to-indigo-400',
  'h-screen',
]
const container = [
  'w-80',
  'h-60',
  'shadow-lg',
  'bg-white',
  'relative',
  'top-40',
  'm-auto',
  'rounded-xl',
]
const title = ['font-semibold', 'text-xl', 'pt-3', 'px-5']
const input = [
  'block',
  'px-3',
  'py-1',
  'w-full',
  'border',
  'rounded',
  'border-solid',
  'border-gray-300',
  'focus:border-indigo-600',
  'focus:outline-none',
]
</script>

<template>
  <div :class="whole">
    <div :class="container">
      <div class="h-12 overflow-hidden">
        <p :class="title">用户登录</p>
      </div>
      <hr />
      <div class="w-64 mx-auto mt-3">
        <label>用户名：</label>
        <input type="text" :class="input" placeholder="username" />
        <label>密码：</label>
        <input
          type="password"
          :class="input"
          placeholder="password"
        />
      </div>
      <div class="flex justify-between w-40 mx-auto pt-5">
        <button
          class="border border-2 border-indigo-600 text-indigo-600 w-16 h-8 rounded-md"
        >
          注 册
        </button>
        <button class="bg-indigo-600 text-white w-16 h-8 rounded-md">
          登 录
        </button>
      </div>
    </div>
  </div>
</template>

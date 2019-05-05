// Menuitem
   <style lang="stylus" scoped>
    .item {
        margin: 10px 0;
        padding: 0 10px;
        border-radius: 4px;
        list-style: none;
        background: skyblue;
        color: #fff;
    }
    </style>

<template>
  <li class="item">
    <slot />
  </li>
</template>

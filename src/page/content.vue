<template>
    <div>
        <p>content</p>
        <div class="about">
            <div class="test-less">测试less</div>
            <div class="test-scss">测试scss</div>
            <div class="test-sass">测试sass</div>
            <div class="test-stylus">测试stylus</div>
        </div>
        <div class="stylus_t">stylus</div>
        <div class="sass_t">sass</div>
    </div>
</template>
<script>
export default {
  components: {}
}
</script>
<style lang="less">
    @color: #00f;
    .test-less {
        color: @color;
    }
</style>
<style lang="scss">
    $color: #0ff;
    .test-scss {
        color: $color;
    }
</style>
<style lang="sass">
    @import "../style/sass/main.sass";
    $color: green
    .test-sass
        color: $color    
</style>
<style lang="stylus">
    @import "../style/stylus/main";
    color = #f00;
    .test-stylus {
        color: color;
    }
</style>
<template>
    <div>
        <!-- 左右滑动功能 -->
        <div class="scroll-wrap">
            <div class="ul-wrap">
                <div class="li-item"></div>
            </div>
        </div>
        <!-- 具体的示例 属性方法等 https://blog.csdn.net/DreamJie123/article/details/88345492 -->
        <div class="marquee-width-300" style="width: 200px;"> 
            <marquee>测试横向滚动</marquee>
        </div>

    </div>
</template>
<script>
export default {
    props: {
        data: {
            arrs: {
                type: Array, default: () => []
            },
            Booleans: {
                type: Boolean, default: false
            },
            obj: {
                type: Object, default: () => ({})
            },
            num: {
                type: Number, default: 0
            },
            str: {
                type: String, default: '',
            }
        }
    },
    methods: {
        // 数组方法总结
    },
    mounted() {

    }
}
</script>
<style lang="less" scoped>
.ul-wrap{
    width: 400px;
    height: 200px;
    border: 1px solid #333;
    font-size: var(--FS40px);
}
</style>
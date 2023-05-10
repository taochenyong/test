<!--
 * @Descripttion: 
 * @version: 
 * @Author: taocy
 * @Date: 2022-02-23 15:20:18
 * @LastEditors: taocy
 * @LastEditTime: 2022-03-03 10:37:55
-->
<template>
  <div class="f-chart-wrap" :class="[selfClass]">
    <div class="chart-container" :style="`height: ${boxHeight}px;width: ${boxWidth}px;`">
      <div class="svg-circle-layout">
        <svg width="100%" height="100%" style="pointer-events: auto" version="1.1">
          <circle v-for="(item, svgIndex) in svgRing" :key="svgIndex" @click="mouseoverFn(svgIndex + 1)" :cx="item.cx" :cy="item.cy" :r="item.radius" stroke="black" stroke-width="0" fill="rgba(0,0,0, 0)"/>
        </svg>

        <div v-for="(parentItem, parIndex) in tempArr" :key="parIndex">
          <div class="tuopu-item" v-for="item in parentItem" :key="item.name" :class="[item.is_active === 1 && item.isNumber > 0 ? 'cursor-pointer' : '', `items-position${parIndex}`]"
            :style="`position: absolute; top: ${item.x}px; left: ${item.y}px`" @click="onClickDown(item)"
          >
            <i class="number-total" v-if="item.isNumber !== '' && item.isNumber > 0">{{ item.isNumber }}</i>
            <i class="icon-type" :style="`backgroundImage: url(${item.icon_url})`"></i>
            <div class="title-sys">{{ item.name }}</div>
          </div>
        </div>

        <div class="qf-triangle">
            <div slot="dimensionContent"></div>
          <div>
            <span
              :class="[{grey: currentIndex && currentIndex != nameIndex + 1}, 'margin-left-' + nameIndex]"
              v-for="(svgRing, nameIndex) in svgRing"
              :key="nameIndex">{{svgRing.name}}</span>
            <i v-for="(item, iIndex) in (svgRing.length - 1)" :class="[`i${iIndex}`]" :key="item.name"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dataSource from './lib/four.js'
export default {
  name: "fourChart",
  data() {
    return {
      currentIndex: '',
      tempArr: [],
      svgRing: []
    };
  },
  props: {
    boxHeight: {type: String, default: '1038'},
    boxWidth: {type: String, default: '1038'},
    selfClass: {type: String, default: ''},
    svgRings: {type: Array, default: () => []},
    icons: {type: Array, default: () => ({})},
    positions: {type: Object, default: () => ({})},
    apiData: {type: Object, default: () => ({})},
    oneIcon: {type: Number, default: 0}
  },
  methods: {
    mouseoverFn(num) {
        this.currentIndex = num
        // 抛出遮罩层处理逻辑
        this.$emit('maskFlag', {type: 'mouseoverFn', value: num})
    },
    mouseoutFn() {
        this.currentIndex = ''
        this.$emit('maskFlag', {type: 'mouseoutFn', value: num})
    },
    onClickDown(item) {
        this.$emit('clickDown', item)
    }
  },
  mounted() {
    document.addEventListener('click', (e) => {
       if(e.target.className === 'f-chart-wrap') {
        this.$emit('maskFlag', {type: 'clearFn', value: false})
       }
    })
  },
  created() {
    let apiData, icons, positions
    apiData = dataSource.sourceData
    icons = dataSource.configData.icon
    positions = dataSource.configData.positionData
    this.svgRing = dataSource.configData.svgRing

    this.tempArr = Object.values(apiData)
    let tempPointArr = Object.values(positions)

    this.tempArr.forEach((apiItem, apiIndex) => {
        tempPointArr.forEach((positionItem, positionIndex) => {
            if(apiIndex == positionIndex) {
                apiItem.forEach((aiItem, aiIndex) => {
                    this.$set(aiItem, "x", positionItem[aiIndex].x);
                    this.$set(aiItem, "y", positionItem[aiIndex].y);

                    // 处理icon逻辑
                    if(aiItem.is_active == 1) {
                        this.$set(aiItem, "icon_url", icons && icons.currentIcon && icons && icons.currentIcon[aiItem.icon]);
                    } else {
                        this.$set(aiItem, "icon_url", icons && icons.defaultIcon && icons && icons.defaultIcon[aiItem.icon]);
                    }
                })
            }
        })
    })
  }
};
</script>

<style lang="less">
.f-chart-wrap {
  width: 100%;
  height: 100%;
  background: #333;
  .chart-container {
    margin: 52px auto 0;
    background: url(../assets/tuopu-bg.svg) no-repeat;

    .svg-circle-layout {
      position: relative;
      width: 100%;
      height: 100%;

      .tuopu-item {
        // height: 80px;
        .icon-type {
          position: absolute;
          margin-left: -25px;
          left: 50%;
          top: -44px;
          // transform:translate(50%,50%);
          display: inline-block;
          width: 50px;
          height: 51px;
        }
        .title-sys {
          padding: 0 10px;
          height: 34px;
          line-height: 34px;
          font-size: 18px;
          color: #fff;
          background-image: linear-gradient(
            0deg,
            rgba(25, 119, 176, 0.9) 0%,
            rgba(6, 54, 109, 0.9) 100%
          );
          box-shadow: inset 0px 0px 4px 0px #5dc4ff;
          border-radius: 2px;
          border: solid 1px rgba(93, 196, 255, 0.58);
          white-space: nowrap;
        }
        .number-total {
          position: absolute;
          top: -49px;
          left: 50%;
          z-index: 9;
          width: 20px;
          height: 20px;
          line-height: 20px;
          text-align: center;
          background: url(../assets/sihuan-number-red-bg.svg)
            no-repeat;
        }
      }
      .cursor-pointer {
        cursor: pointer;
      }

      .qf-triangle {
        padding-left: 70px;
        position: absolute;
        top: 49%;
        left: -51px;
        margin-top: -91px;
        width: 608px;
        height: 195px;
        line-height: 200px;
        background: url(../assets/qf-triangle.svg) no-repeat;
        pointer-events: none;
        span,
        i {
          display: inline-block;
          vertical-align: middle;
        }
        span {
          font-size: 18px;
          color: #fff;
        }
        .grey {
          color: rgba(255, 255, 255, 0.5);
        }
        .margin-left-1{
            margin-left: 71px
        }
        .margin-left-2{
            margin-left: 98px
        }
        .margin-left-3{
            margin-left: 97px
        }
        i {
          position: absolute;
          margin-top: -4px;
          top: 50%;
          right: 447px;
          width: 9px;
          height: 16px;
          background: url(../assets//tp-jt.svg) no-repeat;
        }
        .i2 {
          right: 185px;
        }
        .i1 {
          right: 317px;
        }
      }
    }
  }
}
</style>

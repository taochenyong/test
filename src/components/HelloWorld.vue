<!--
 * @Descripttion: 
 * @version: 
 * @Author: taocy
 * @Date: 2022-02-23 15:20:18
 * @LastEditors: taocy
 * @LastEditTime: 2022-03-03 10:37:55
-->
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <span @click="screenShot">截图</span>
    <div style="width: 100px"></div>
    <div class="style-ts">测试数据；</div>
    <div ref="list" class="scrool-style">
        <p v-for="(item, index) in 100" :key="index">{{ item }}</p>
    </div>
  </div>
</template>

<script>
import html2canvas from 'html2canvas'
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      msgs: 'val后加',
      obj: {
        list: {
          insList: {
            name: ''
          }
        }
      }
    };
  },
  computed: {
    setSourceData() {
      return this.insList
    }
  },
  methods: {
    //截图
    screenShot() {
      //获取页面dom
      //这里的html标签是获取页面最大的dom元素；根据实际业务场景自行更改
      const el = document.querySelector('html');
      html2canvas(el, {allowTaint: true}).then((canvas)=> {
        //document.body.appendChild(canvas)  页面布局会乱
        //转换base64
        const capture = canvas.toDataURL('image/png');
        //下载浏览器弹出下载信息的属性
        const saveInfo = {
         //导出文件格式自己定义，我这里用的是时间作为文件名
          'download': `全屏.png`,
          // 'download': moment().format("YYYY-MM-DD HH:mm:ss")+`.png`,
          'href': capture
        };
        //下载，浏览器弹出下载文件提示
         this.downloadFile(saveInfo);
      
        //调用保存接口 如果需要后台保存，放开注释
     /*   uploadImage({capture:capture}).then(res => {
          if (res.code == 200) {
            this.$message.success("截取成功！")
          }
        });*/
      })
    },

   //下载截图
    downloadFile(saveInfo) {
      const element = document.createElement('a');
      element.style.display = 'none';
      for (const key in saveInfo) {
        element.setAttribute(key, saveInfo[key]);
      }
      document.body.appendChild(element);
      element.click();
      setTimeout(() => {
        document.body.removeChild(element);
      }, 300)
    },

  },
  mounted() {
    // 默认数据置顶方法
    this.$nextTick(() => {
      const list = this.$refs.list
      const item = list.children[34]
      list.scrollTop = item.offsetTop - list.offsetTop
      console.log(item.offsetTop, 'item.offsetTop', list.offsetTop)
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
  width: 200px;
  background: red;
}
a {
  color: #42b983;
}

.wrap {
  width: 200px;
  height: 60px;
  overflow: hidden;
}
.child {
  background: red;
}
.bg-wrap {
  /* width: 500px; */
  background: #333;
}
/* .stibizviscomponents-charts-columnForMultipleInfo li{
  width: 300px!important;
} */

.scrool-style{
  height: 500px;
  overflow-y: scroll;
}


.style-ts{
  width: 400px;
	height: 235px;
	background-color: rgba(3, 19, 45, 0.3);
	box-shadow: inset 0px 0px 32px 0px 
		rgba(14, 119, 210, 0.58), 
		inset 0px 0px 4px 4px 
		rgba(15, 24, 41, 0.78);
	border-style: solid;
	border-width: 2px;
	border-image-source: linear-gradient(180deg, 
		#3ba0ff 8%, 
		#01558f 5%, 
		#01558f 11%, 
		#01558f 39%, 
		#3ba0ff 42%, 
		#01558f 45%, 
		#00497b 55%, 
		#3ba0ff 58%, 
		#00497b 61%, 
		#01558f 89%, 
		#3ba0ff 92%, 
		#01558f 95%);
	border-image-slice: 1;
}
</style>

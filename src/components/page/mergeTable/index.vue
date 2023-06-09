<template>
  <div class="">
    <table class="mergeTable-box">
      <thead>
        <tr>
          <th v-for="(item, index) in columns" :key="index" :style="`width: ${item.width}px;`">{{ item.title}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in data" :key="index">
          <td v-for="key in columns" :key="key.name" @click="handerClick(item, key)">
            <div v-if="Array.isArray(item[key.key])" class="td-row-wrap">
              <div v-for="(ins, inx) in item[key.key]" :key="inx" class="td-row-item">
                <div v-for="sub in subColumns" :key="sub.value" :style="`display: inline-block; width: 345px;`" class="td-row-item-td">
                  {{ ins[sub.value] }}
                </div>
              </div>
            </div>
            <div v-else>{{ item[key.key] }}</div>
        </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  props: {
    subColumns: {
      type: Array,
      default: () => [
        {value: 'name'},
        {value: 'level'},
      ]
    },
    columns: {
      type: Array,
      default: () => [
        { title: "时间", key: "time", width: 350},
        { title: "单位名称", key: "name", methods: true, width: 350},
        { title: "文件名称", key: "fileList", width: 350},
        { title: "文件密级", key: "", width: 350 }
      ]
    },
    data: {
      type: Array,
      default: () => [
      {
          time: "2023-02-13",
          name: "名称1",
          fileList: [
            { name: "文件名称1", level: "1" },
            { name: "文件名称2", level: "1" },
            { name: "文件名称3", level: "1" },
            { name: "文件名称4", level: "1" },
          ],
        },
        {
          time: "2023-02-13",
          name: "名称2",
          fileList: [
            { name: "文件名称21", level: "1" },
            { name: "文件名称22", level: "1" },
            { name: "文件名称23", level: "1" },
          ],
        },
        {
          time: "2023-02-13",
          name: "名称3",
          fileList: [{ name: "文件名称31", level: "1" }],
        },
        {
          time: "2023-02-13",
          name: "名称4",
          fileList: [{ name: "文件名称41", level: "1" }],
        },
        {
          time: "2023-02-13",
          name: "名称5",
          fileList: [{ name: "文件名称51", level: "1" }],
        },
        {
          time: "2023-02-13",
          name: "名称6",
          fileList: [
            { name: "文件名称61", level: "1" },
            { name: "文件名称62", level: "1" },
          ],
        },
      ]
    }
  },
  mounted() {},
  computed: {
    setData() {
        this.data.forEach((item, index) => {
            item.fileList.forEach(ins => {
                arrs[ins] = {}
                arrs[ins].time = item.time,
                arrs[ins].name = item.name,
                arrs[ins].fileName = ins.name,
                arrs[ins].fileLevel = ins.level
            })
           console.log('arrs', arrs)
        })
    }
  },
  methods: {
    handerClick(parentRow, colItem) {
      
      console.log(parentRow, colItem, 'colItem==colItem', parentRow[colItem.key])
      if(Array.isArray(parentRow[colItem.key])) {
        console.log('22222数组时候执行')
      }
    },
  },
  data() {
    return {
    };
  },
};
</script>
<style lang="less" scoped>
.curs-point{
    cursor: pointer;
}
.mergeTable-box{
  border: 1px solid #333;
  border-collapse: collapse;

  thead{
    th{
      border: 1px solid #333;
    }
  }
  tbody{
    td{
      border: 1px solid #333;
    }
  }
}
</style>
<!-- <template>
  <div class="el-table-b">
    <el-table
      :data="tableData"
      :span-method="arraySpanMethod"
      border
      style="width: 100%">
      <el-table-column
      v-for="(th, key) in tableColumns" :key="key" :prop="th.prop"
        :label="th.label"
        width="180">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      tableColumns: [
        {label: '名称', prop: 'id'},
        {label: '数字1', prop: 'amount1'},
        {label: '数字2', prop: 'amount2'},
        {label: '数字3', prop: 'amount3'},
      ],
      tableData: [{
          id: '12987122',
          name: '王小虎',
          amount1: '234',
          amount2: '3.2',
          amount3: 10
        }, {
          id: '12987123',
          name: '王小虎',
          amount1: '165',
          amount2: '4.43',
          amount3: 12
        }, {
          id: '12987124',
          name: '王小虎',
          amount1: '324',
          amount2: '1.9',
          amount3: 9
        }, {
          id: '12987125',
          name: '王小虎',
          amount1: '621',
          amount2: '2.2',
          amount3: 17
        }, {
          id: '12987126',
          name: '王小虎',
          amount1: '539',
          amount2: '4.1',
          amount3: 15
        }]
    };
  },
  methods: {
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      console.log(row, column, rowIndex, columnIndex, 'arraySpan==node')
        if (rowIndex % 2 === 0) {
          if (columnIndex === 0) {
            return [1, 2];
          } else if (columnIndex === 1) {
            return [0, 0];
          }
        }
      },

      objectSpanMethod({ row, column, rowIndex, columnIndex }) {
        if (columnIndex === 0) {
          if (rowIndex % 2 === 0) {
            return {
              rowspan: 2,
              colspan: 1
            };
          } else {
            return {
              rowspan: 0,
              colspan: 0
            };
          }
        }
      }
  }
};
</script> -->
<!-- 
  在这个示例中，我们使用了一个包含两个数组的data对象来存储表格的列和行数据。每个列都有一个label、colspan和rowspan属性，分别指定列的名称、合并的列数和合并的行数。每个单元格都有一个value、colspan和rowspan属性，分别指定单元格的值、合并的列数和合并的行数。

在模板中，我们使用v-for指令来遍历columns数组生成表格的表头，使用v-for指令遍历rows数组生成表格的内容行。通过动态绑定colspan和rowspan属性，实现了单元格的合并效果。
 -->
<template>
  <table>
    <thead>
      <tr>
        <th v-for="column,columnInx  in columns" :colspan="column.colspan" :rowspan="column.rowspan" :key="columnInx">
          {{ column.label }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
        <td v-for="(cell, cellIndex) in row" :rowspan="cell.rowspan" :colspan="cell.colspan" :key="cellIndex">
          {{ cell.value }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        { label: 'Name', colspan: 1, rowspan: 2 },
        { label: 'Age', colspan: 1, rowspan: 2 },
        { label: 'Address', colspan: 2, rowspan: 1 },
      ],
      rows: [
        [
          { value: 'John', rowspan: 2, colspan: 1 },
          { value: '25', rowspan: 2, colspan: 1 },
          { value: 'Street 1', rowspan: 1, colspan: 1 },
          { value: 'City 1', rowspan: 1, colspan: 1 },
        ],
        [
          { value: 'Jane', rowspan: 1, colspan: 1 },
          { value: '30', rowspan: 1, colspan: 1 },
          { value: 'Street 2', rowspan: 1, colspan: 1 },
          { value: 'City 2', rowspan: 1, colspan: 1 },
        ],
      ],
    };
  },
};
</script>
<style lang="less" scoped>
table{
  border: 1px solid #333;
  border-collapse: collapse;
}
</style>
<template>
  <div>
    <p>通过调用 exportCsv 函数可以直接将表格导出为 .cvs 格式的文件；</p>

    <button class="btn" @click="exportCsvEvent">默认导出</button>
    <vxe-table
      ref="xTable1"
      highlight-hover-row
      height="400"
      :data.sync="tableData">
      <vxe-table-column type="index" width="60"></vxe-table-column>
      <vxe-table-column prop="name" label="Name"></vxe-table-column>
      <vxe-table-column prop="sex" label="Sex"></vxe-table-column>
      <vxe-table-column prop="age" label="Age" sortable></vxe-table-column>
      <vxe-table-column prop="address" label="Address" show-overflow></vxe-table-column>
    </vxe-table>

    <p>配置 columnFilterMethod 参数过滤指定列</p>

    <button class="btn" @click="exportCsvEvent2">导出指定列 [name,sex]</button>
    <vxe-table
      ref="xTable2"
      highlight-hover-row
      height="400"
      :data.sync="tableData">
      <vxe-table-column type="index" width="60"></vxe-table-column>
      <vxe-table-column prop="name" label="Name"></vxe-table-column>
      <vxe-table-column prop="sex" label="Sex"></vxe-table-column>
      <vxe-table-column prop="age" label="Age" sortable></vxe-table-column>
      <vxe-table-column prop="address" label="Address" show-overflow></vxe-table-column>
    </vxe-table>

    <p>配置 dataFilterMethod 参数过滤指定行</p>

    <button class="btn" @click="exportCsvEvent3">导出指定第10-20行</button>
    <vxe-table
      ref="xTable3"
      highlight-hover-row
      height="400"
      :data.sync="tableData">
      <vxe-table-column type="index" width="60"></vxe-table-column>
      <vxe-table-column prop="name" label="Name"></vxe-table-column>
      <vxe-table-column prop="sex" label="Sex"></vxe-table-column>
      <vxe-table-column prop="age" label="Age" sortable></vxe-table-column>
      <vxe-table-column prop="address" label="Address" show-overflow></vxe-table-column>
    </vxe-table>

    <p>不导出表头，指定文件名，导出源数据,格式化数据</p>

    <button class="btn" @click="exportCsvEvent4">完整配置</button>
    <vxe-table
      ref="xTable4"
      highlight-hover-row
      height="400"
      :data.sync="tableData">
      <vxe-table-column type="index" width="60"></vxe-table-column>
      <vxe-table-column prop="name" label="Name"></vxe-table-column>
      <vxe-table-column prop="sex" label="Sex"></vxe-table-column>
      <vxe-table-column prop="age" label="Age" sortable></vxe-table-column>
      <vxe-table-column prop="address" label="Address" show-overflow></vxe-table-column>
    </vxe-table>
  </div>
</template>

<script>
import XEUtils from 'xe-utils'

export default {
  data () {
    return {
      tableData: []
    }
  },
  created () {
    let list = window.MOCK_DATA_LIST.slice(0, 50)
    this.tableData = list
  },
  methods: {
    exportCsvEvent () {
      this.$refs.xTable1.exportCsv()
    },
    exportCsvEvent2 () {
      this.$refs.xTable2.exportCsv({
        columnFilterMethod: column => ['name', 'sex'].includes(column.property)
      })
    },
    exportCsvEvent3 () {
      this.$refs.xTable3.exportCsv({
        dataFilterMethod: (row, rowIndex) => rowIndex >= 9 && rowIndex < 20
      })
    },
    exportCsvEvent4 () {
      this.$refs.xTable1.exportCsv({
        filename: '自定义文件名.cvs',
        original: true,
        isHeader: false,
        data: this.tableData.map(row => {
          row.date = XEUtils.toDateString(row.date, 'yyyy-MM-dd')
          return row
        })
      })
    }
  }
}
</script>

<template>
  <div>
    <p>数据代理、固定列、服务端排序、服务端筛选、服务端分页</p>

    <vxe-grid
      ref="xGrid"
      border
      height="548"
      :page-config="{pageSize: 10}"
      :columns="tableColumn"
      :proxy-config="tableProxy"
      @sort-change="sortChangeEvent"
      @filter-change="filterChangeEvent"></vxe-grid>

    <p class="demo-code">显示代码</p>

    <pre>
      <code class="xml">{{ demoCodes[0] }}</code>
      <code class="javascript">{{ demoCodes[1] }}</code>
    </pre>
  </div>
</template>

<script>
import XEAjax from 'xe-ajax'
import hljs from 'highlight.js'

export default {
  data () {
    return {
      formData: {
        sort: '',
        order: ''
      },
      tableProxy: {
        ajax: {
          query: ({ page }) => XEAjax.getJSON(`/api/user/page/list/${page.pageSize}/${page.currentPage}`, this.formData)
        }
      },
      tableColumn: [
        { type: 'selection', width: 50, fixed: 'left' },
        { type: 'index', width: 60, fixed: 'left' },
        { prop: 'id', label: 'ID', width: 100, sortable: 'custom' },
        { prop: 'name', label: 'Name', width: 300, sortable: 'custom' },
        { prop: 'nickname', label: 'Nickname', sortable: 'custom', width: 300 },
        { prop: 'age', label: 'Age', sortable: 'custom', width: 100 },
        {
          prop: 'role',
          label: 'Role',
          sortable: 'custom',
          width: 200,
          filters: [
            { label: '前端', value: '前端' },
            { label: '后端', value: '后端' },
            { label: '测试', value: '测试' }
          ],
          filterMultiple: false,
          filterMethod: 'custom'
        },
        { prop: 'describe', label: 'Describe', width: 300, showOverflow: true }
      ],
      demoCodes: [
        `
        <vxe-grid
          border
          height="548"
          :loading="loading"
          :pages="tablePage"
          :columns="tableColumn"
          :data.sync="tableData"
          @sort-change="sortChangeEvent"
          @filter-change="filterChangeEvent"
          @current-page-change="handleCurrentChange"
          @page-size-change="handleSizeChange"></vxe-grid>
        `,
        `
        export default {
          data () {
            return {
              formData: {
                sort: '',
                order: ''
              },
              tableProxy: {
                ajax: {
                  query: ({ page }) => XEAjax.getJSON(\`/api/user/page/list/\${page.pageSize}/\${page.currentPage}\`, this.formData)
                }
              },
              tableColumn: [
                { type: 'selection', width: 50, fixed: 'left' },
                { type: 'index', width: 60, fixed: 'left' },
                { prop: 'id', label: 'ID', width: 100, sortable: 'custom' },
                { prop: 'name', label: 'Name', width: 300, sortable: 'custom' },
                { prop: 'nickname', label: 'Nickname', sortable: 'custom', width: 300 },
                { prop: 'age', label: 'Age', sortable: 'custom', width: 100 },
                {
                  prop: 'role',
                  label: 'Role',
                  sortable: 'custom',
                  width: 200,
                  filters: [
                    { label: '前端', value: '前端' },
                    { label: '后端', value: '后端' },
                    { label: '测试', value: '测试' }
                  ],
                  filterMultiple: false,
                  filterMethod: 'custom'
                },
                { prop: 'describe', label: 'Describe', width: 300, showOverflow: true }
              ]
            }
          },
          methods: {
            sortChangeEvent ({ column, prop, order }) {
              this.formData.sort = prop
              this.formData.order = order
              // 重新查询
              this.$refs.xGrid.commitProxy('query')
            },
            filterChangeEvent ({ column, prop, values }) {
              this.formData = {
                [prop]: values[0]
              }
              // 重新加载，恢复初始状态
              this.$refs.xGrid.commitProxy('reload')
            }
          }
        }
        `
      ]
    }
  },
  mounted () {
    Array.from(this.$el.querySelectorAll('pre code')).forEach((block) => {
      hljs.highlightBlock(block)
    })
  },
  methods: {
    sortChangeEvent ({ column, prop, order }) {
      this.formData.sort = prop
      this.formData.order = order
      // 重新查询
      this.$refs.xGrid.commitProxy('query')
    },
    filterChangeEvent ({ column, prop, values }) {
      this.formData = {
        [prop]: values[0]
      }
      // 重新加载，恢复初始状态
      this.$refs.xGrid.commitProxy('reload')
    }
  }
}
</script>

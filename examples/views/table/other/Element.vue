<template>
  <div>
    <p>自定义渲染 element-ui 组件，使用插槽 edit slot</p>

    <vxe-table
      border
      show-all-overflow
      show-footer
      class="vxe-table-element"
      height="600"
      :loading="loading"
      :data.sync="tableData"
      :footer-method="footerMethod"
      :edit-config="{key: 'id', trigger: 'click', mode: 'cell'}">
      <vxe-table-column type="selection" width="60" fixed="left"></vxe-table-column>
      <vxe-table-column type="index" width="80" fixed="left">
        <template v-slot:header="{ column }">
          <span>序号</span>
          <i class="el-icon-question"></i>
        </template>
      </vxe-table-column>
      <vxe-table-column prop="name" label="ElInput" min-width="140" :edit-render="{type: 'default'}">
        <template v-slot:edit="{ row }">
          <el-input v-model="row.name"></el-input>
        </template>
      </vxe-table-column>
      <vxe-table-column prop="age" label="ElInputNumber"  width="160" :edit-render="{type: 'default'}">
        <template v-slot:header="{ column }">
          <span>{{ column.label }}</span>
          <i class="el-icon-warning"></i>
        </template>
        <template v-slot:edit="{ row }">
          <el-input-number v-model="row.age" :max="35" :min="18"></el-input-number>
        </template>
      </vxe-table-column>
      <vxe-table-column prop="sex" label="ElSelect" width="140" :edit-render="{type: 'default'}">
        <template v-slot:edit="{ row }">
          <el-select v-model="row.sex">
            <el-option v-for="item in sexList" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </template>
        <template v-slot="{ row }">{{ getSelectLabel(row.sex, sexList) }}</template>
      </vxe-table-column>
      <vxe-table-column prop="region" label="ElCascader" width="200" :edit-render="{type: 'default'}">
        <template v-slot:edit="{ row }">
          <el-cascader v-model="row.region" :options="regionList"></el-cascader>
        </template>
        <template v-slot="{ row }">{{ getCascaderLabel(row.region, regionList) }}</template>
      </vxe-table-column>
      <vxe-table-column prop="date" label="ElDatePicker" width="200" :edit-render="{type: 'default'}">
        <template v-slot:edit="{ row }">
          <el-date-picker v-model="row.date" type="date" format="yyyy/MM/dd"></el-date-picker>
        </template>
        <template v-slot="{ row }">{{ formatDate(row.date, 'yyyy/MM/dd') }}</template>
      </vxe-table-column>
      <vxe-table-column prop="date1" label="ElDatePicker" width="220" :edit-render="{type: 'default'}">
        <template v-slot:edit="{ row }">
          <el-date-picker v-model="row.date1" type="datetime" format="yyyy-MM-dd HH:mm:ss"></el-date-picker>
        </template>
        <template v-slot="{ row }">{{ formatDate(row.date1, 'yyyy-MM-dd HH:mm:ss') }}</template>
      </vxe-table-column>
      <vxe-table-column prop="date2" label="ElTimePicker" width="200" :edit-render="{type: 'default'}">
        <template v-slot:edit="{ row }">
          <el-time-select v-model="row.date2" :picker-options="{start: '08:30', step: '00:15', end: '18:30'}">
        </el-time-select>
        </template>
      </vxe-table-column>
      <vxe-table-column prop="rate" label="ElRate" width="200" :edit-render="{type: 'visible'}">
        <template v-slot:edit="{ row }">
          <el-rate v-model="row.rate"></el-rate>
        </template>
      </vxe-table-column>
      <vxe-table-column prop="flag" label="ElSwitch" width="100" fixed="right" :edit-render="{type: 'visible'}">
        <template v-slot:edit="{ row }">
          <el-switch v-model="row.flag"></el-switch>
        </template>
      </vxe-table-column>
    </vxe-table>

    <p class="demo-code">显示代码</p>

    <pre>
      <code class="xml">{{ demoCodes[0] }}</code>
      <code class="javascript">{{ demoCodes[1] }}</code>
    </pre>
  </div>
</template>

<script>
import XEUtils from 'xe-utils'
import XEAjax from 'xe-ajax'
import hljs from 'highlight.js'

export default {
  data () {
    return {
      loading: false,
      tableData: [],
      sexList: [],
      regionList: [],
      demoCodes: [
        `
        <vxe-table
          border
          show-all-overflow
          show-footer
          class="vxe-table-element"
          height="600"
          :loading="loading"
          :data.sync="tableData"
          :footer-method="footerMethod"
          :edit-config="{key: 'id', trigger: 'click', mode: 'cell'}">
          <vxe-table-column type="selection" width="60" fixed="left"></vxe-table-column>
          <vxe-table-column type="index" width="80" fixed="left">
            <template v-slot:header="{ column }">
              <span>序号</span>
              <i class="el-icon-question"></i>
            </template>
          </vxe-table-column>
          <vxe-table-column prop="name" label="ElInput" min-width="140" :edit-render="{type: 'default'}">
            <template v-slot:edit="{ row }">
              <el-input v-model="row.name"></el-input>
            </template>
          </vxe-table-column>
          <vxe-table-column prop="age" label="ElInputNumber"  width="160" :edit-render="{type: 'default'}">
            <template v-slot:header="{ column }">
              <span>{{ column.label }}</span>
              <i class="el-icon-warning"></i>
            </template>
            <template v-slot:edit="{ row }">
              <el-input-number v-model="row.age" :max="35" :min="18"></el-input-number>
            </template>
          </vxe-table-column>
          <vxe-table-column prop="sex" label="ElSelect" width="140" :edit-render="{type: 'default'}">
            <template v-slot:edit="{ row }">
              <el-select v-model="row.sex">
                <el-option v-for="item in sexList" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </template>
            <template v-slot="{ row }">{{ getSelectLabel(row.sex, sexList) }}</template>
          </vxe-table-column>
          <vxe-table-column prop="region" label="ElCascader" width="200" :edit-render="{type: 'default'}">
            <template v-slot:edit="{ row }">
              <el-cascader v-model="row.region" :options="regionList"></el-cascader>
            </template>
            <template v-slot="{ row }">{{ getCascaderLabel(row.region, regionList) }}</template>
          </vxe-table-column>
          <vxe-table-column prop="date" label="ElDatePicker" width="200" :edit-render="{type: 'default'}">
            <template v-slot:edit="{ row }">
              <el-date-picker v-model="row.date" type="date" format="yyyy/MM/dd"></el-date-picker>
            </template>
            <template v-slot="{ row }">{{ formatDate(row.date, 'yyyy/MM/dd') }}</template>
          </vxe-table-column>
          <vxe-table-column prop="date1" label="ElDatePicker" width="220" :edit-render="{type: 'default'}">
            <template v-slot:edit="{ row }">
              <el-date-picker v-model="row.date1" type="datetime" format="yyyy-MM-dd HH:mm:ss"></el-date-picker>
            </template>
            <template v-slot="{ row }">{{ formatDate(row.date1, 'yyyy-MM-dd HH:mm:ss') }}</template>
          </vxe-table-column>
          <vxe-table-column prop="date2" label="ElTimePicker" width="200" :edit-render="{type: 'default'}">
            <template v-slot:edit="{ row }">
              <el-time-select v-model="row.date2" :picker-options="{start: '08:30', step: '00:15', end: '18:30'}">
            </el-time-select>
            </template>
          </vxe-table-column>
          <vxe-table-column prop="rate" label="ElRate" width="200" :edit-render="{type: 'visible'}">
            <template v-slot:edit="{ row }">
              <el-rate v-model="row.rate"></el-rate>
            </template>
          </vxe-table-column>
          <vxe-table-column prop="flag" label="ElSwitch" width="100" fixed="right" :edit-render="{type: 'visible'}">
            <template v-slot:edit="{ row }">
              <el-switch v-model="row.flag"></el-switch>
            </template>
          </vxe-table-column>
        </vxe-table>
        `,
        `
        export default {
          data () {
            return {
              loading: false,
              tableData: [],
              sexList: [],
              regionList: []
            }
          },
          created () {
            this.tableData = window.MOCK_DATA_LIST.slice(0, 100)
          }
        }
        `
      ]
    }
  },
  created () {
    this.loading = true
    setTimeout(() => {
      let list = window.MOCK_DATA_LIST.slice(0, 100)
      this.tableData = list
      this.loading = false
    }, 500)
    this.findSexList()
    this.findRegionList()
  },
  mounted () {
    Array.from(this.$el.querySelectorAll('pre code')).forEach((block) => {
      hljs.highlightBlock(block)
    })
  },
  methods: {
    findSexList () {
      return XEAjax.doGet('/api/conf/sex/list').then(({ data }) => {
        this.sexList = data
        return data
      })
    },
    findRegionList () {
      return XEAjax.doGet('/api/conf/region/list').then(({ data }) => {
        this.regionList = data
        return data
      })
    },
    formatDate (value, format) {
      return XEUtils.toDateString(value, format)
    },
    getSelectLabel (value, list, valueProp = 'value', labelProp = 'label') {
      let item = XEUtils.find(list, item => item[valueProp] === value)
      return item ? item[labelProp] : null
    },
    getCascaderLabel (value, list) {
      let values = value || []
      let labels = []
      let matchCascaderData = function (index, list) {
        let val = values[index]
        if (list && values.length > index) {
          list.forEach(item => {
            if (item.value === val) {
              labels.push(item.label)
              matchCascaderData(++index, item.children)
            }
          })
        }
      }
      matchCascaderData(0, list)
      return labels.join(' / ')
    },
    footerMethod ({ columns, data }) {
      return [
        columns.map((column, columnIndex) => {
          if (columnIndex === 0) {
            return '平均'
          }
          if (['age', 'rate'].includes(column.property)) {
            return XEUtils.mean(data, column.property)
          }
          return '-'
        }),
        columns.map((column, columnIndex) => {
          if (columnIndex === 0) {
            return '和值'
          }
          if (['age', 'rate'].includes(column.property)) {
            return XEUtils.sum(data, column.property)
          }
          return '-'
        })
      ]
    }
  }
}
</script>

<style>
/*注意：需要自行实现 element-ui 需要覆盖以下样式*/
/* .vxe-table-element .vxe-cell > .el-input,
.vxe-table-element .vxe-cell > .el-input-number,
.vxe-table-element .vxe-cell > .el-select,
.vxe-table-element .vxe-cell > .el-cascader,
.vxe-table-element .vxe-cell > .el-date-editor {
  width: 100%;
} */
</style>

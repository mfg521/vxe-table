const apis = [
  {
    name: 'Props',
    desc: '参数',
    type: '',
    enum: '',
    defVal: '',
    list: [
      {
        name: 'toolbar',
        desc: '工具栏配置',
        type: 'Object',
        enum: '',
        defVal: '',
        list: [
          {
            name: 'size',
            desc: '尺寸',
            type: 'String',
            enum: 'medium,small,mini',
            defVal: '',
            list: []
          },
          {
            name: 'buttons',
            desc: '按钮列表',
            type: 'Array',
            enum: '',
            defVal: '',
            list: [
              {
                name: 'code',
                desc: '按钮编码',
                type: 'String',
                enum: '',
                defVal: '',
                list: [
                  {
                    name: 'reload',
                    desc: '刷新数据，会重置分页；触发 ajax.query 方法',
                    type: '',
                    enum: '',
                    defVal: '',
                    list: []
                  },
                  {
                    name: 'query',
                    desc: '刷新数据；触发 ajax.query 方法',
                    type: '',
                    enum: '',
                    defVal: '',
                    list: []
                  },
                  {
                    name: 'insert',
                    desc: '新增数据',
                    type: '',
                    enum: '',
                    defVal: '',
                    list: []
                  },
                  {
                    name: 'insert_actived',
                    desc: '新增数据并且默认激活第一个可编辑的单元格',
                    type: '',
                    enum: '',
                    defVal: '',
                    list: []
                  },
                  {
                    name: 'delete_pending',
                    desc: '将选中的数据标记或取消删除',
                    type: '',
                    enum: '',
                    defVal: '',
                    list: []
                  },
                  {
                    name: 'delete_selection',
                    desc: '删除选中行；触发 ajax.delete 方法',
                    type: '',
                    enum: '',
                    defVal: '',
                    list: []
                  },
                  {
                    name: 'delete_rows',
                    desc: '移除选中行',
                    type: '',
                    enum: '',
                    defVal: '',
                    list: []
                  },
                  {
                    name: 'save',
                    desc: '保存数据；；触发 ajax.save 方法',
                    type: '',
                    enum: '',
                    defVal: '',
                    list: []
                  },
                  {
                    name: 'export',
                    desc: '导出数据',
                    type: '',
                    enum: '',
                    defVal: '',
                    list: []
                  }
                ]
              },
              {
                name: 'name',
                desc: '显示名称',
                type: 'String',
                enum: '',
                defVal: '',
                list: []
              }
            ]
          },
          {
            name: 'setting',
            desc: '显示列个性化设置按钮',
            type: 'Boolean,Object',
            enum: '',
            defVal: '',
            list: [
              {
                name: 'trigger',
                desc: '触发方式',
                type: 'String',
                enum: 'manual,click,hover',
                defVal: 'click',
                list: []
              },
              {
                name: 'immediate',
                desc: '列勾选之后是否实时同步',
                type: 'Boolean',
                enum: '',
                defVal: 'false',
                list: []
              }
            ]
          }
        ]
      },
      {
        name: 'page-config',
        desc: '分页配置项',
        type: 'Object',
        enum: '',
        defVal: '',
        list: [
          {
            name: 'size',
            desc: '尺寸',
            type: 'String',
            enum: 'medium,small,mini',
            defVal: '',
            list: []
          },
          {
            name: 'current-page',
            desc: '当前页',
            type: 'Number',
            enum: '',
            defVal: '1',
            list: []
          },
          {
            name: 'page-size',
            desc: '每页大小',
            type: 'Number',
            enum: '',
            defVal: '10',
            list: []
          },
          {
            name: 'total',
            desc: '总条数',
            type: 'Number',
            enum: '',
            defVal: '0',
            list: []
          },
          {
            name: 'pager-count',
            desc: '显示页码按钮的数量',
            type: 'Number',
            enum: '',
            defVal: '7',
            list: []
          },
          {
            name: 'page-sizes',
            desc: '每页大小选项列表',
            type: 'Array',
            enum: '',
            defVal: '[10,15,20,50,100]',
            list: []
          },
          {
            name: 'background',
            desc: '带背景颜色',
            type: 'Boolean',
            enum: '',
            defVal: 'false',
            list: []
          }
        ]
      },
      {
        name: 'proxy-config',
        desc: '数据代理配置项',
        type: 'Object',
        enum: '',
        defVal: '',
        list: [
          {
            name: 'autoLoad',
            desc: '是否自动加载查询数据',
            type: 'Boolean',
            enum: '',
            defVal: 'true',
            list: []
          },
          {
            name: 'props',
            desc: '获取的属性配置',
            type: 'Object',
            enum: '',
            defVal: '',
            list: [
              {
                name: 'data',
                desc: '响应结果中获取数据列表的属性',
                type: 'String',
                enum: '',
                defVal: 'result',
                list: []
              },
              {
                name: 'page',
                desc: '响应结果中获取分页的属性',
                type: 'String',
                enum: '',
                defVal: 'page.total',
                list: []
              }
            ]
          },
          {
            name: 'ajax',
            desc: '数据响应配置',
            type: 'Object',
            enum: '',
            defVal: '',
            list: [
              {
                name: 'query',
                desc: '查询方法 Function({ page })，默认处理的数据结构 {page: {total: 0}, result: []}',
                type: 'Promise',
                enum: '',
                defVal: '',
                list: []
              },
              {
                name: 'delete',
                desc: '删除方法 Function({ body })，提交的参数 { removeRecords }',
                type: 'Promise',
                enum: '',
                defVal: '',
                list: []
              },
              {
                name: 'save',
                desc: '保存方法 Function({ body })，提交的参数 { insertRecords, updateRecords, removeRecords, pendingRecords}',
                type: 'Promise',
                enum: '',
                defVal: '',
                list: []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: 'Slots',
    desc: '插槽',
    type: '',
    enum: '',
    defVal: '',
    list: []
  },
  {
    name: 'Events',
    desc: '事件',
    type: '',
    enum: '',
    defVal: '',
    list: [
      {
        name: 'current-page-change',
        desc: '当前页发生改变时会触发该事件',
        type: '',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'page-size-change',
        desc: '每页大小发生改变时会触发该事件',
        type: '',
        enum: '',
        defVal: '',
        list: []
      }
    ]
  },
  {
    name: 'Methods',
    desc: '方法',
    type: '',
    enum: '',
    defVal: '',
    list: [
      {
        name: 'commitProxy(code)',
        desc: '提交给代理去处理数据',
        type: '',
        enum: 'reload,query,delete,save',
        defVal: '',
        list: []
      }
    ]
  }
]

export default apis

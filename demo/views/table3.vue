<template>
  <u-table ref="tableRef" :table="table" max-height="800" @sort-change="sortChange"></u-table>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue'
import { TableApi } from '~/components'
import { Time } from '~/util'

defineOptions({
  name: 'assets'
})

const table = reactive<TableApi>({
  sort: 'custom',
  type: 'page',
  size: 2,
  columns: [
    {
      label: '序号',
      width: 60,
      type: 'index'
    },
    {
      label: '名称',
      prop: 'name',
      width: 100,
      overflow: true,
      sort: null
    },
    {
      label: '标签',
      prop: 'tag',
      width: 100,
      align: 'center',
      component: {
        name: 'el-tag',
        options: [
          { type: 'primary', label: 'Tag 1' },
          { type: 'success', label: 'Tag 2' },
          { type: 'info', label: 'Tag 3' },
          { type: 'warning', label: 'Tag 4' },
          { type: 'danger', label: 'Tag 5' }
        ]
      }
    },
    {
      label: '日期',
      prop: 'date',
      headerAlign: 'left',
      align: 'center',
      width: 180,
      sort: 'desc'
    },
    {
      label: '地址',
      align: 'center',
      prop: 'address'
    }
  ],
  data: []
})
const tableRef = ref()

function sortChange(val: any) {
  console.log(val)
}

const data = [
  {
    id: 1,
    date: '2016-05-02',
    name: 'wangxiaohu',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    id: 2,
    date: '2016-05-04',
    name: 'wangxiaohu',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    id: 3,
    date: '2016-05-01',
    name: 'wangxiaohu',
    address: 'No. 189, Grove St, Los Angeles',
    children: [
      {
        id: 31,
        date: '2016-05-01',
        name: 'wangxiaohu',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        id: 32,
        date: '2016-05-01',
        name: 'wangxiaohu',
        address: 'No. 189, Grove St, Los Angeles',
      }
    ]
  },
  {
    id: 4,
    date: '2016-05-03',
    name: 'wangxiaohu',
    address: 'No. 189, Grove St, Los Angeles',
  }
]

table.data = data
</script>

<style lang="scss" scoped></style>

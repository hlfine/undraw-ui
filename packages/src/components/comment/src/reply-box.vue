<template>
  <div v-if="data.length > 0" class="reply-box">
    <div class="reply-list">
      <ContentBox v-for="(reply, index) in data.list" :id="id" :key="index" :data="reply" reply></ContentBox>
      <div v-if="data.length > (replyShowSize || 3)" class="fetch-more">
        <span v-if="state.loading">{{ $u('comment.more.loading')}}</span>
        <div v-else>
          <div v-if="!state.over">
            <span class="fetch-more-comment select-none" @click="replyMore">
              {{ $u('comment.more.prefixTotal')}}{{ data.total }}{{ $u('comment.more.suffixTotal')}}
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="">
                <path
                  data-v-d6f79dbc=""
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.99976 7.93206L10.0656 3.86619C10.1633 3.76856 10.3215 3.76856 10.4192 3.86619L10.7727 4.21975C10.8704 4.31738 10.8704 4.47567 10.7727 4.5733L6.35331 8.99272C6.15805 9.18798 5.84147 9.18798 5.6462 8.99272L1.22679 4.5733C1.12916 4.47567 1.12916 4.31738 1.22679 4.21975L1.58034 3.86619C1.67797 3.76856 1.83626 3.76856 1.93389 3.86619L5.99976 7.93206Z"
                ></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div v-if="state.over && page" class="fetch-more">
        <el-pagination
          small
          hide-on-single-page
          layout="total, prev, pager, next"
          :total="data.total"
          :current-page="state.currentPage"
          :page-size="state.pageSize"
          @current-change="currentChange"
          @size-change="sizeChange"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, reactive, watch } from 'vue'
import { translate as $u, } from 'undraw-ui'
import { ElPagination } from 'element-plus'
import ContentBox from './content-box.vue'
import { CommentFunApi, ReplyApi, ConfigApi } from '~/components'

interface Props {
  data?: ReplyApi | null
  id: string
}

const props = defineProps<Props>()
const state = reactive({
  loading: false,
  over: false,
  currentPage: 1,
  pageSize: 5
})

const { comments, replyShowSize, page } = inject('config') as ConfigApi
const { replyPage } = inject('comment-fun') as CommentFunApi

// 分页操作
const data = computed(() => {
  let data = {
    total: 0,
    length: 0,
    list: [] as any[]
  }
  if (props.data) {
    let length = props.data.list.length
    data = {
      total: props.data.total,
      length: length,
      list: props.data.list
    }
  }
  if (!state.over) {
    let tmp = data.list.slice(0, replyShowSize)
    data.list = tmp
  }
  if (page) {
    data.list = data.list.slice(0, state.pageSize)
  }
  return data
})

watch(
  () => props.data?.total,
  val => {
    if (val) {
      let totalPage = Math.ceil(val / state.pageSize)
      if (state.currentPage > totalPage) {
        changePage(totalPage)
      }
    }
  }
)

const replyMore = () => {
  state.over = true
}

const finish = (val: any) => {
  comments.forEach(e => {
    if (e.id == props.id) {
      if (e.reply) {
        e.reply = val
      }
    }
  })
}

/**
 * 改变当前页数
 * @param val
 */
const changePage = (val: number) => {
  state.currentPage = val
  replyPage({ current: val, size: state.pageSize, parentId: props.id, finish: reply => finish(reply)})
}

const currentChange = (val: number) => {
  changePage(val)
}

const sizeChange = (val: number) => {
  state.pageSize = val
  replyPage({ current: val, size: state.pageSize, parentId: props.id, finish: reply => finish(reply)})
}
</script>

<style lang="scss" scoped>
@use '../style/reply-box.scss';
</style>

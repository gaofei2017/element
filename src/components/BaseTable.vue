<template>
<div>
    <div class="table">
        <el-table
        :data="tableData"
        border
        stripe
        style="width: 100%"
        max-height="550">
        <el-table-column
        type="selection"
        width="55">
        </el-table-column>
        <template v-for="item in rowHeader">
            <el-table-column
            align="center"
            :key="item.prop"
            :prop="item.prop"
            :label="item.label"
            :sortable="item.sortable ? item.sortable : false"
            :fixed="item.fixed ? item.fixed : false"
            :width="item.width?item.width:''">
            </el-table-column>
        </template>
        <el-table-column
        fixed="right"
        label="操作"
        >
        <template slot-scope="scope">
            <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            type="text"
            size="small">
            
            </el-button>
        </template>
        </el-table-column>
    </el-table>
    </div>
    <div class="page">
        <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
        </el-pagination>
    </div>
</div>
</template>

<script>
  export default {
    props:{
        tableData:{
            type:Array,
            default:() => {
                return [];
            }
        },
        rowHeader:{
            type:Array,
            default:() => {
                return [];
            }
        },
        total:{
            type:Number,
            default:() => {
                return 100
            }
        },
        currentPage:{
            type:Number,
            default:() => {
                return 1
            }
        }
    },
    methods: {
      handleSizeChange(size) {
          this.$emit('handleSizeChange', size)
      },
      handleCurrentChange(page) {
          this.$emit('handleCurrentChange', page)
      }
    },
    data() {
      return {
        
      }
    }
  }
</script>
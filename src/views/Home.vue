<template>
  <div class="block">
    <BaseTable :tableData="tableData" :rowHeader="rowHeader"></BaseTable>
  </div>
  
</template>
<script>
import BaseTable  from '@/components/BaseTable'

  export default {
    data() {
      return {
        rowHeader:[
          {
            prop:'date',label: '时间'
          },{
            prop:'name',label: '姓名'
          },{
            prop:'province',label: '省份'
          },{
            prop:'city',label: '城市'
          },{
            prop:'address',label: '地址',width:400
          },
        ],
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
        }]
      };
      
    },
    components:{
      BaseTable
    },
    mounted(){
      console.log('--------', this.$children)
      // const trimLowerCaseAndSplit = this.compose(this.trim, this.lowerCase, this.split)
      const trimLowerCaseAndSplit = this.compose([this.trim, this.lowerCase, this.split])
      console.log(trimLowerCaseAndSplit(" a,B,C ")) // ["a", "b", "c"]
    },
    methods:{
       lowerCase(input) {
        return input && typeof input === "string" ? input.toLowerCase() : input;
      },

      upperCase(input) {
        return input && typeof input === "string" ? input.toUpperCase() : input;
      },

      trim(input) {
        return typeof input === "string" ? input.trim() : input;
      },

      split(input, delimiter = ",") {
        return typeof input === "string" ? input.split(delimiter) : input;
      },

      // compose(...funcs) {
      //   return function (x) {
      //     return funcs.reduce(function (arg, fn) {
      //       return fn(arg);
      //     }, x);
      //   };
      // },
      compose(middleware) {
        return function (context, next) {
          let index = -1;
          return dispatch(0);
          function dispatch(i) {
            if (i <= index)
              return Promise.reject(new Error("next() called multiple times"));
            index = i;
            let fn = middleware[i];
            if (i === middleware.length) fn = next;
            if (!fn) return Promise.resolve();
            try {
              return Promise.resolve(fn(context, dispatch.bind(null, i + 1)));
            } catch (err) {
              return Promise.reject(err);
            }
          }
        };
}
    }
  };
</script>
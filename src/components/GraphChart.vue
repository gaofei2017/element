<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
// import resize from './mixins/resize'

export default {
  // mixins: [resize],
  props: {
    id: {
      type: String,
      default: 'chart'
    },
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '350px'
    },
    autoResize: {
      type: Boolean,
      default: true
    },
    chartData: {
      type: Object,
      default:{},
      required: false,
    }
  },
  data() {
    return {
      chart: null
    }
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.setOptions(val)
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')
      // this.setOptions(this.chartData)
      this.setOptions({
        expectedData:[220, 182, 191, 134, 150, 120, 110],
        actualData:[20, 82, 191, 14, 150, 12, 110]
      })
    },
    setOptions({ expectedData, actualData } = {}) {
      let self = this
      let data = {
              nodes: [{
                id: '01',
                name: '山东泰开\n电力设备有限公司',
                category: 0
              }, {
                id: '02',
                name: '山东线圈\n类设备有限公司',
                category: 0
              }, {
                id: '03',
                name: 'B级',
                category: 1
              }, {
                id: '04',
                name: 'DB22123',
                category: 1
              }, {
                id: '05',
                name: 'ID31345',
                category: 1
              }, {
                id: '06',
                name: 'ID23142',
                category: 1
              }, {
                id: '07',
                name: '李四',
                category: 1
              }, {
                id: '08',
                name: '王五',
                category: 1
              }, {
                id: '09',
                name: 'A级',
                category: 1
              }, {
                id: '010',
                name: '合格率',
                category: 2
              }, {
                id: '011',
                name: '暂停中标',
                category: 2
              }, {
                id: '012',
                name: '存在不良',
                category: 2
              }, {
                id: '013',
                name: '6个月',
                category: 3
              }, {
                id: '014',
                name: '2020年',
                category: 3
              }, {
                id: '015',
                name: '暂停',
                category: 3
              }, {
                id: '016',
                name: '质量',
                category: 4
              }, {
                id: '017',
                name: '35KV变压器',
                category: 4
              }],
              
              links: [ {
                source: '02',
                target: '03',
                name: '',
                class: ''
              }, {
                source: '02',
                target: '王志明',
                name: '',
                class: ''
              }, {
                source: '02',
                target: '04',
                name: '',
                class: ''
              }, {
                source: '02',
                target: '06',
                name: '',
                class: ''
              }, {
                source: '02',
                target: '07',
                name: '',
                class: ''
              }, {
                source: '02',
                target: '08',
                name: '',
                class: ''
              }, {
                source: '01',
                target: '09',
                name: '',
                class: ''
              }, {
                source: '01',
                target: '05',
                name: '',
                class: ''
              }, {
                source: '05',
                target: '010',
                name: '',
                class: ''
              }, {
                source: '06',
                target: '011',
                name: '',
                class: ''
              }, {
                source: '06',
                target: '012',
                name: '',
                class: ''
              }, {
                source: '012',
                target: '014',
                name: '',
                class: ''
              }, {
                source: '012',
                target: '015',
                name: '',
                class: ''
              }, {
                source: '012',
                target: '013',
                name: '',
                class: ''
              }, {
                source: '05',
                target: '016',
                name: '',
                class: 'common'
              }, {
                source: '010',
                target: '017',
                name: '',
                class: 'common'
              },{
                source: '011',
                target: '017',
                name: '',
                class: 'common'
              }, {
                source: '06',
                target: '016',
                name: '',
                class: 'common'
              },]
            }

            const color1 = '#1AC39F';
            const color2 = '#97D8AB';
            const color3 = '#FFAF74';
            const color4 = '#FFF0E5';
            const color5 = '#F17373';

            const color01 = '#1A9E86';
            const color02 = '#6BBC86';
            const color03 = '#F67342';
            const color04 = '#FF9A74';
            const color05 = '#E65050';
            data.nodes.forEach(node => {
              if (node.category === 0) {
                node.symbolSize = 87;
                node.itemStyle = {
                  color: color1,
                  borderColor : color01,
                };
              } else if (node.category === 1) {
                node.symbolSize = 63;
                node.itemStyle = {
                  color: color2,
                  borderColor : color02,
                };
              } else if (node.category === 2) {
                node.symbolSize = 50;
                node.itemStyle = {
                  color: color3,
                  borderColor : color03,
                };
              } else if (node.category === 3) {
                node.symbolSize = 45;
                node.itemStyle = {
                  color: color4,
                  borderColor : color04,
                };
                node.label = {
                  color: '#F67D3E',
                };
              } else if (node.category === 4) {
                node.symbolSize = 53;
                node.itemStyle = {
                  borderColor : color05,
                };
              }
            });

            data.links.forEach(link => {
              link.label = {
                align: 'center',
                fontSize: 12
              };
              link.lineStyle = {
                  color: '#AEAEAE'
                }
             if (link.class == 'common') {
                link.lineStyle = {
                  color: '#EB5B5B'
                }
              }
            });

            let categories = [{
                name: '供应商名称',
                itemStyle: {
                    color: color1
                }
              },
              {
                name: '供应商基本信息',
                itemStyle: {
                    color: color2
                }
            },{
                name: '供应商某个不良行为的一级详情信息',
                itemStyle: {
                    color: color3
                }
              },
              {
                name: '供应商某个不良行为的二级详情信息',
                itemStyle: {
                    color: color4
                }
            },
              {
                name: '存在关联关系的信息',
                itemStyle: {
                    color: color5
                }
            }]
          this.chart.setOption({
              title: {
                text: '',
              },
              // legend: [{
              //   // selectedMode: 'single',
              //   data: categories.map(x => x.name),
              //   // icon: 'circle'
              // }],
              series: [{
                type: 'graph',
                layout: 'force',
                symbolSize: 58,
                draggable: true,
                roam: true,
                focusNodeAdjacency: true,
                categories: categories,
                symbol:'circle',//关系图节点标记的图形。ECharts 提供的标记类型包括 'circle'(圆形), 'rect'（矩形）, 'roundRect'（圆角矩形）, 'triangle'（三角形）, 'diamond'（菱形）, 'pin'（大头针）, 'arrow'（箭头）  也可以通过 'image://url' 设置为图片，其中 url 为图片的链接。'path:// 这种方式可以任意改变颜色并且抗锯齿
                edgeSymbol: ['', 'circle'],
                // edgeSymbolSize: [80, 10],
                edgeLabel: {
                  normal: {
                    show: true,
                    textStyle: {
                      fontSize: 12
                    },
                    
                    formatter(x) {
                      return x.data.name;
                    }
                  }
                },
                itemStyle : {//===============图形样式，有 normal 和 emphasis 两个状态。normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
                        normal : { //默认样式
                            label : {
                                show : true
                            },
                            borderType : 'solid', //图形描边类型，默认为实线，支持 'solid'（实线）, 'dashed'(虚线), 'dotted'（点线）。
                            // borderColor : '#000', //设置图形边框为淡金色,透明度为0.4
                            borderWidth : 1, //图形的描边线宽。为 0 时无描边。
                            opacity : 1
                        // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。默认0.5

                        },
                        emphasis : {//高亮状态

                        }
                    },
                label : { //=============图形上的文本标签
                        normal : {
                            show : true,//是否显示标签。
                            // position : 'inside',//标签的位置。['50%', '50%'] [x,y]
                            textStyle : { //标签的字体样式
                                color : '#fff', //字体颜色
                                fontStyle : 'normal',//文字字体的风格 'normal'标准 'italic'斜体 'oblique' 倾斜
                                // fontWeight : 'bolder',//'normal'标准'bold'粗的'bolder'更粗的'lighter'更细的或100 | 200 | 300 | 400...
                                // fontFamily : 'sans-serif', //文字的字体系列
                                fontSize : 12, //字体大小
                            }
                        },
                        emphasis : {//高亮状态

                        }
                    },
                force: {
                  repulsion: 2000,
                  edgeLength: 120
                },
                data: data.nodes,
                links: data.links
              }]
      })

      this.chart.resize()
      this.chart.off('click')
      this.chart.on('click', function(params){
        console.log(params)
        if(params.dataType == 'node') {
          let parentId =  null
          let isDel =  false
          data.links.forEach((v) => {
            if (v.target == params.data.id) {
              parentId =  v.source
            }
          })
          if(self.ids.toString().indexOf(params.data.id) < 0) {
            self.ids.push(params.data.id)
            isDel = false
          } else {
            isDel = true
          }
          self.$emit('getData', {
              params:params.data,
              graphData: data,
              parentId:parentId,
              isDel: isDel
          })
        }
      })
    },
    showLoading() {
      this.chart.showLoading({
        text: '正在加载...',
        spinnerRadiu:20,
        zlevel: 99
      })
    },
    hideLoading(){
      this.chart.hideLoading()
    },
    clearChart(){
      this.chart.clear()
    }
  }
}
</script>

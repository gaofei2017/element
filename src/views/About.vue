<template>
  <div>
    <div class="chart">
      <div>
        <LineChart :id="'lineChart'" :width="'300px'" :height="'300px'"></LineChart>
      </div>
      <div>
        <BarChart :id="'barChart'" :width="'300px'" :height="'300px'"></BarChart>
      </div>
      <div>
        <PieChart :id="'barChart'" :width="'300px'" :height="'300px'"></PieChart>
      </div>
      <div>
        <RaddarChart :id="'barChart'" :width="'300px'" :height="'300px'"></RaddarChart>
      </div>
    </div>
    <div class="chart">
      <div>
        <MixChart :id="'lineChart'" :width="'300px'" :height="'300px'"></MixChart>
      </div>
      <div>
        <ScatterChart :id="'barChart'" :width="'300px'" :height="'300px'"></ScatterChart>
      </div>
      <div>
        <GraphChart :id="'barChart'" :width="'300px'" :height="'300px'"></GraphChart>
      </div>
      <div>
        <!-- <RaddarChart :id="'barChart'" :width="'300px'" :height="'300px'"></RaddarChart> -->
      </div>
    </div>
  </div>
  
</template>
<script>
import LineChart  from '@/components/LineChart'
import BarChart  from '@/components/BarChart'
import PieChart  from '@/components/PieChart'
import RaddarChart  from '@/components/RaddarChart'
import MixChart  from '@/components/MixChart'
import ScatterChart  from '@/components/ScatterChart'
import GraphChart  from '@/components/GraphChart'
  export default {
    data() {
      return {
   
      };
    },
    components:{
      LineChart,
      BarChart,
      PieChart,
      RaddarChart,
      MixChart,
      ScatterChart,
      GraphChart
    },
    methods: {
      
    },
    mounted() {
    }
  }
</script>
<style scoped>
.chart{
  width: 300px;
  height: 300px;
  border:1px solid #ccc;
  display: flex;
}
.chart >  div{
  flex: 1;
}
</style>

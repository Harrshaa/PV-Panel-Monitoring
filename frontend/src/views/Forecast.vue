<template>
    <div>
        <HeaderComp/>
            <div class="container">
                <div class="row">
                    <div class="col-6" style="margin-top:20vh">
                        <weather/>
                    </div>
                    <div class="col-6" style="margin-top:20vh">
                        
                        <table class=" table table-bordered ">
                            <div><h4>Today</h4></div>
                            <tr>
                                <td scope="col">Location</td>
                                <td>{{location}} </td>
                            </tr>
                            <tr>
                                <td scope="col">Data & Time</td>
                                <td>{{time}} </td>
                            </tr>
                            <tr>
                                <td scope="col">UV Index</td>
                                <td>{{UV_index}} </td>
                            </tr>
                            <tr>
                                <td scope="col">Cloud Index</td>
                                <td>{{cloud_index}} </td>
                            </tr>
                            <tr>
                                <td scope="col">Temparature</td>
                                <td>{{temp}} celsius </td>
                            </tr>
                        </table>

                        <table class=" table table-bordered ">
                            <div><h4>Tomorrow</h4></div>
                            <tr>
                                <td scope="col">Location</td>
                                <td>{{location}} </td>
                            </tr>
                            <tr>
                                <td scope="col">Data</td>
                                <td>{{tomorrow.date}} </td>
                            </tr>
                            <tr>
                                <td scope="col">Sunrise</td>
                                <td>{{astro.sunrise}} </td>
                            </tr>
                            <tr>
                                <td scope="col">Sunset</td>
                                <td>{{astro.sunset}} </td>
                            </tr>
                            <tr>
                                <td scope="col">Max Temparature</td>
                                <td>{{day.maxtemp_c}} celsius </td>
                            </tr>
                            <tr>
                                <td scope="col">Min Temparature</td>
                                <td>{{day.mintemp_c}} celsius </td>
                            </tr>
                            <tr>
                                <td scope="col">Avg Temparature</td>
                                <td>{{day.avgtemp_c}} celsius </td>
                            </tr>
                        </table>

                    </div>
                </div>
                
            </div>


        <FooterComp/>
        
    </div>
</template>

<script>
import HeaderComp from "../components/HeaderComp.vue"
import FooterComp from "../components/FooterComp.vue"
import weather from "../components/WeatherChart.vue"


export default {
  name: 'HomeView',
  components: {
   HeaderComp,FooterComp,weather
  },
  data(){
    return {
        location:"",
        temp:"",
        UV_index:"",
        cloud_index:"",
        time:"",
        tomorrow:"",
        astro:"",
        day:""
    }
  },
  mounted(){

    let data=JSON.parse(localStorage.getItem('weatherData'));
    console.log((data))
    console.log((data.location.name))

    this.location=data.location.name;
    this.time=data.location.localtime;
    console.log((this.time));
    this.cloud_index=data.current.cloud;
    console.log((this.cloud_index))
    this.UV_index=data.current.uv
    this.temp=data.current.temp_c
    this.tomorrow=data.forecast.forecastday[1]
    console.log((this.tomorrow))
    this.astro=JSON.stringify(this.tomorrow.astro)
    this.astro=JSON.parse(this.astro)
    this.day=JSON.stringify(this.tomorrow.day)
    this.day=JSON.parse(this.day)

  }
}

</script>

<style scoped>
.main{
    margin-top:10vh;
    display: flex;
    justify-content:center;
    align-items: center;
}
</style>
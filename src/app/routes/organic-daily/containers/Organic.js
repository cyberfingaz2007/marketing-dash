/**
 * Created by cyberfingaz2007 on 9/10/17.
 */

 /**
  * Created by griga on 11/30/15.
  */

 import React from 'react'

 import request from 'then-request'
 import {Stats, BigBreadcrumbs, WidgetGrid, JarvisWidget}  from '../../../components'

 import ChartJsGraph from '../../../components/graphs/chartjs/ChartJsGraph'
 import FlotChart from '../../../components/graphs/flot/FlotChart'

 export default class Organic extends React.Component {
   state = {};

   componentWillMount() {
     request('GET', 'assets/api/graphs/flot.json', {json: true}).done((res)=> {
       this.setState(JSON.parse(res.getBody()));
     })
   }

   render() {
     return (
       <div id="content">
         <div className="row">
           <BigBreadcrumbs items={['App Organic Daily', 'Organic Data']}
                           className="col-xs-12 col-sm-7 col-md-7 col-lg-4"/>
           <Stats />
         </div>
         <WidgetGrid>
           <div className="row">
             <article className="col-sm-12">

               <JarvisWidget
                 togglebutton={false}
                 editbutton={false}
                 fullscreenbutton={false}
                 colorbutton={false}
                 deletebutton={false}>
                 <header>
                   <span className="widget-icon"> <i className="fa fa-bar-chart-o"/> </span>
                   <h2>Organic Daily Chart</h2>
                 </header>
                 {/* widget div*/}
                 <div>
                   {/* widget content */}
                   <div className="widget-body no-padding">
                     <flot-bar-chart data="barChartData"/>
                     <FlotChart data={this.state.barChartData}
                                options={barChartDemoOptions}/>
                   </div>
                   {/* end widget content */}
                 </div>
                 {/* end widget div */}
               </JarvisWidget>

             </article>
           </div>
           <div className="row">
             <article className="col-sm-12 col-md-12 col-lg-12">
               <JarvisWidget editbutton={false}>
                 <header>
                   <span className="widget-icon"> <i className="fa fa-table"/> </span>
                   <h2>Daily Data in Tables</h2>
                 </header>
                 <div>
                   <div className="widget-body">
                     <ChartJsGraph type="line" data={this.state['line-chart']}/>
                   </div>
                 </div>
               </JarvisWidget>
             </article>
           </div>
         </WidgetGrid>
       </div>
     )
   }
 }

 const colors = {
   "chartBorderColor": "#efefef",
   "chartGridColor": "#DDD",
   "charMain": "#E24913",
   "chartSecond": "#6595b4",
   "chartThird": "#FF9F01",
   "chartFourth": "#7e9d3a",
   "chartFifth": "#BD362F",
   "chartMono": "#000"
 };

 const barChartDemoOptions = {
   colors: [colors.chartSecond, colors.chartFourth, "#666", "#BBB"],
   grid: {
     show: true,
     hoverable: true,
     clickable: true,
     tickColor: colors.chartBorderColor,
     borderWidth: 0,
     borderColor: colors.chartBorderColor
   },
   legend: true,
   tooltip: true,
   tooltipOpts: {
     content: "<b>%x</b> = <span>%y</span>",
     defaultTheme: false
   }
 };

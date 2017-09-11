/**
 * Created by cyberfingaz2007 on 9/10/17.
 */

 /**
  * Created by griga on 11/30/15.
  */

 import React from 'react'

 import request from 'then-request'
 import {Stats, BigBreadcrumbs, WidgetGrid, JarvisWidget}  from '../../../components'

 import Datatable from '../../../components/tables/Datatable'

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
                   <div className="widget-body no-padding">
                     <Datatable options={{
                    ajax: 'assets/api/tables/datatables.filters.json',
                    columns: [{data: "name"}, {data: "position"}, {data: "office"}, {data: "age"}, {data: "date"}, {data: "salary"}]
                  }}
                  filter={true} className="table table-striped table-bordered" width="100%">
                  <thead>
                  <tr>
                    <th className="hasinput" style={{width: "17%"}}><input type="text"
                                                                           className="form-control"
                                                                           placeholder="Filter Name"/>
                    </th>
                    <th className="hasinput" style={{width: '18%'}}>
                      <div className="input-group"><input className="form-control"
                                                          placeholder="Filter Position"
                                                          type="text"/> <span
                        className="input-group-addon"> <span className="onoffswitch"> <input
                        type="checkbox" name="start_interval" className="onoffswitch-checkbox"
                        id="st3"/> <label className="onoffswitch-label" htmlFor="st3"> <span
                        className="onoffswitch-inner" data-swchon-text="YES"
                        data-swchoff-text="NO"/> <span className="onoffswitch-switch"/> </label> </span> </span>
                      </div>
                    </th>
                    <th className="hasinput" style={{width: '16%'}}><input type="text"
                                                                           className="form-control"
                                                                           placeholder="Filter Office"/>
                    </th>
                    <th className="hasinput" style={{width: '17%'}}><input type="text"
                                                                           className="form-control"
                                                                           placeholder="Filter Age"/>
                    </th>
                    <th className="hasinput icon-addon"><input id="dateselect_filter" type="text"
                                                               placeholder="Filter Date"
                                                               className="form-control datepicker"
                                                               data-dateformat="yy/mm/dd"/> <label
                      htmlFor="dateselect_filter"
                      className="glyphicon glyphicon-calendar no-margin padding-top-15"
                      rel="tooltip" title="" data-original-title="Filter Date"/>
                    </th>
                    <th className="hasinput" style={{width: '16%'}}>
                      <input type="text" className="form-control"
                             placeholder="Filter Salary"/>
                    </th>
                  </tr>
                  <tr>
                    <th data-class="expand">Name</th>
                    <th>Position</th>
                    <th data-hide="phone">Office</th>
                    <th data-hide="phone">Age</th>
                    <th data-hide="phone,tablet">Start date</th>
                    <th data-hide="phone,tablet">Salary</th>
                  </tr>
                  </thead>
                </Datatable>
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

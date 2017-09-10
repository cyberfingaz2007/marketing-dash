/**
 * Created by griga on 11/30/15.
 */

import React from 'react'

import WidgetGrid from '../../../components/widgets/WidgetGrid'
import JarvisWidget  from '../../../components/widgets/JarvisWidget'


export default class Home extends React.Component {
  render() {
    return (
      <div id="content">
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
                  <h2><strong>Dashboard</strong></h2>
                </header>
                {/* widget div*/}
                <div>
                  {/* widget content */}
                  <div className="widget-body">
                    <h2>Welcome To the Marketing Dashboard</h2>
                  </div>
                  {/* end widget content */}
                </div>
                {/* end widget div */}
              </JarvisWidget>
            </article>
          </div>
          
        </WidgetGrid>
      </div>
    )
  }
}

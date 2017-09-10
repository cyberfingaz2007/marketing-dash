export default {
  component: require('../../components/common/Layout').default,

  childRoutes: [
    {
      path: 'organic-daily',
      getComponent(nextState, cb){
        System.import('./containers/Organic').then((m)=> {
          cb(null, m.default)
        })
      }
    },
  ]

};

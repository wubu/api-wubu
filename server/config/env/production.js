'use strict';

// 生产环境配置
// =================================
module.exports = {
  port:     process.env.PORT || 8800,
  //生产环境mongodb配置
  mongo: {
    uri: 'mongodb://172.20.7.33/julianblog'
    // ,
    // options: {
    //   user:'user',          //生产环境用户名
    //   pass:'pass'           //生产环境密码
    // }
  },
  //生产环境redis配置
  redis: {
    db: 1
  },
  //生产环境cookie是否需要domain视具体情况而定.
  session:{
  	cookie:  {domain:'.wubu.red',maxAge: 60000*5}
  }
};

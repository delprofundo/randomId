/*
 *  Harness that allows the execution of the generator.js module.
 *  author: delProfundo (bruno@hypermedia.tech)
 *  date: 17 August 2016
 */
(function(){
  "use strict";
  //load Generator function
  var Generator = require('./generator');

  //passed in callback
  function callback(err, result){
    console.log(result);
  };
  //call function
  Generator.generateId(callback)

})();

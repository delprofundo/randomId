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

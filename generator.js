(function(){
  "use strict";

   exports.generateId = function generateId(cb){
    var millis =  (new Date).getTime();

    var test = millis.toString();
    cb (null, test.substr(3, 10));
  }
})();

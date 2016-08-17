(function(){
  "use strict";

   exports.generateId = function generateId(cb){
    var millis =  (new Date).getTime();

    var millis_str = millis.toString();
    cb (null, millis_str.substr(3, 10));
  }
})();

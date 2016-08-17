/*
 *  Random 10 digit number generator. outputs string.
 *  based on epoch. very simple, there is a small amount of collision overtime
 *  author: delProfundo (bruno@hypermedia.tech)
 *  date: 17 August 2016
 */

(function(){
  "use strict";

   exports.generateId = function generateId(cb){
    var millis =  (((new Date).getTime()).toString()).substr(3, 10);

    cb(null, millis);
  }
})();

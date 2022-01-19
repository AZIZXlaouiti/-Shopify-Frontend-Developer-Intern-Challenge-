const $ = require('jquery')
function date(){
    let d = new Date("Sun Apr 24 2022 15:24:09 GMT-0400 (Eastern Daylight Time)");
    let str = $.datepicker.formatDate('yy-mm-dd', d);
    console.log(str)
}
module.exports = date
exports.handler = function(event, context) {
    require('dotenv').load();
    console.log("lambda function called");
    console.log(JSON.stringify(event));
    context.done("success");

}
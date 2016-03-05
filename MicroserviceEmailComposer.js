exports.handler = function(event, context) {
  var apiRequest, getLambdaEventData, async, dynamodbRequest, _, composeBulkEmail, records, eventHandler;

    getLambdaEventData = require('./src/getLambdaEventData');
    
    dynamodbRequest = require('./src/dynamodbRequests');
    async = require('async');
    _ = require('lodash');

composeBulkEmail = function(record, callback) {
        async.waterfall([
                function getEventType(next) {

                    EventType = getLambdaEventData.getEventName(record, next);
                    eventHandler.handleEventType(EventType, record, next, callback);

                }, function getEmailType( record , next) {

                    EmailType = getLambdaEventData.getEmailType(record, next);
                    eventHandler.handleEmailType(EmailType, record, next, callback);

                }, function getUserData(record, next) {

                    
                }, function getEmailQueueObject(response, record, next) {

                   
                }, function putRecordForSkipValueInDynamoDB(EmailContentObjects, skip, next) {

                   
                }, function putRowsInDynamoDB(EmailContentObjects, next) {

                   
                } ], function(err) {
                if (err) {
                    console.error(
                        err
                    );
                    callback(err);
                } else {
                    callback();
                }
            }
        );
    }
    records = getLambdaEventData.getEventRecords(event);
    async.forEachOfSeries(records, function(record, key, callback) {
        composeBulkEmail(record, callback);
    }, function(err) {
        if (err) {
            context.done(err);
        } else {
            context.done(null, "success");
        }
    });

}
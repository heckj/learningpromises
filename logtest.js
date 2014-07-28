(function() {
    var util = require('util');
    var renlog = require('renasar-logging');
    var logger = renlog.loggerFactory();
    //var logger = require('winston')

    //logger.transports.console.level = 'crit'

    console.log("THE LOGGER")
    console.log(util.inspect(logger));


    console.log("SENDING LOG MSGS");
    logger.emerg("emerg");
    logger.alert("alert");
    logger.crit("crit");
    logger.error("error");
    logger.warning("warning");
    logger.notice("notice");
    logger.info("info");
    logger.debug("debug");

    console.log("NULL SEND")
    logger.emerg(null);
    logger.emerg(undefined);

    logger.log('debug', "what");
    logger.log('debug', "what", {is: "there", hey: [1,2,3]});
    logger.debug("what", {is: "there", hey: [1,2,3]});
}());

/**
 * Home brewed FPd AOP/DI framework
*/

module.exports.aop = {}
module.exports.aop.proxy_factory = require('./aop/proxy_factory')

module.exports.di = require('./di')

module.exports.aop_di_helper = require('./aop_di_helper')

module.exports.error_handling_strategy = require('./error_handling_strategy')

module.exports.advice = {
    params_validator: require('./advice/params_validator')
}

module.exports.aspects_factories = {
    params_freezer_factory: require('./aspects_factories/params_freezer_factory'),
    params_validator_factory: require('./aspects_factories/params_validator_factory'),
    error_handler_factory: require('./aspects_factories/error_handler_factory')
}

// Module ID: 1588
// Function ID: 17715
// Name: logToConsole
// Dependencies: [1587]

// Module 1588 (logToConsole)
const global = arg0;
const require = arg1;
const dependencyMap = arg6;
let obj = { warn: 1, [1]: "warn", error: 2, [2]: "error" };
let closure_4 = { code: "function logToConsole_Pnpm_loggerTs1(data){switch(data.level){case'warn':console.warn(data.message.content);break;case'error':case'fatal':case'syntax':console.error(data.message.content);break;}}" };
const tmp2 = (() => {
  function logToConsole(level) {
    level = level.level;
    if ("warn" === level) {
      const _console2 = console;
      console.warn(level.message.content);
    } else {
      const _console = console;
      console.error(level.message.content);
    }
  }
  logToConsole.__closure = {};
  logToConsole.__workletHash = 4297880609329;
  logToConsole.__initData = closure_4;
  return logToConsole;
})();
let closure_5 = tmp2;
obj = { logFunction: tmp2, level: obj.warn, strict: true };
let closure_7 = { code: "function formatMessage_Pnpm_loggerTs2(message){return\"[Reanimated] \"+message;}" };
let closure_8 = (() => {
  function formatMessage(arg0) {
    return "[Reanimated] " + arg0;
  }
  formatMessage.__closure = {};
  formatMessage.__workletHash = 4586683970876;
  formatMessage.__initData = closure_7;
  return formatMessage;
})();
let closure_9 = { code: "function createLog_Pnpm_loggerTs3(level,message){const{formatMessage}=this.__closure;const formattedMessage=formatMessage(message);return{level:level,message:{content:formattedMessage,substitutions:[]},category:formattedMessage,componentStack:[],componentStackType:null,stack:new Error().stack};}" };
let closure_10 = (() => {
  function createLog(level) {
    const tmp = outer1_8(arg1);
    const obj = { level, message: { content: tmp, substitutions: [] }, category: tmp, componentStack: [], componentStackType: null };
    const error = new Error();
    obj.stack = error.stack;
    return obj;
  }
  createLog.__closure = { formatMessage: closure_8 };
  createLog.__workletHash = 5107313473751;
  createLog.__initData = closure_9;
  return createLog;
})();
let closure_11 = { code: "function registerLoggerConfig_Pnpm_loggerTs4(config){global.__reanimatedLoggerConfig=config;}" };
const tmp3 = (() => {
  function registerLoggerConfig(DEFAULT_LOGGER_CONFIG) {
    outer1_0.__reanimatedLoggerConfig = DEFAULT_LOGGER_CONFIG;
  }
  registerLoggerConfig.__closure = {};
  registerLoggerConfig.__workletHash = 1484852907300;
  registerLoggerConfig.__initData = closure_11;
  return registerLoggerConfig;
})();
let closure_12 = tmp3;
let closure_13 = { code: "function replaceLoggerImplementation_Pnpm_loggerTs5(logFunction){const{registerLoggerConfig}=this.__closure;registerLoggerConfig({...global.__reanimatedLoggerConfig,logFunction:logFunction});}" };
let closure_14 = { code: "function updateLoggerConfig_Pnpm_loggerTs6(options){const{registerLoggerConfig,DEFAULT_LOGGER_CONFIG}=this.__closure;var _options$level,_options$strict;registerLoggerConfig({...global.__reanimatedLoggerConfig,level:(_options$level=options===null||options===void 0?void 0:options.level)!==null&&_options$level!==void 0?_options$level:DEFAULT_LOGGER_CONFIG.level,strict:(_options$strict=options===null||options===void 0?void 0:options.strict)!==null&&_options$strict!==void 0?_options$strict:DEFAULT_LOGGER_CONFIG.strict});}" };
let closure_15 = { code: "function handleLog_Pnpm_loggerTs7(level,message,options){const{LogLevel,DOCS_REFERENCE,createLog}=this.__closure;const config=global.__reanimatedLoggerConfig;if(options.strict&&!config.strict||LogLevel[level]<config.level){return;}if(options.strict){message+=\"\\n\\n\"+DOCS_REFERENCE;}config.logFunction(createLog(level,message));}" };
const tmp4 = (() => {
  function replaceLoggerImplementation(pnpm_initializersTs2) {
    outer1_12(Object.assign({}, outer1_0.__reanimatedLoggerConfig, { logFunction: pnpm_initializersTs2 }));
  }
  replaceLoggerImplementation.__closure = { registerLoggerConfig: closure_12 };
  replaceLoggerImplementation.__workletHash = 9450518662656;
  replaceLoggerImplementation.__initData = closure_13;
  return replaceLoggerImplementation;
})();
const tmp6 = (() => {
  function handleLog(arg0, arg1, strict) {
    const __reanimatedLoggerConfig = outer1_0.__reanimatedLoggerConfig;
    let tmp = strict.strict && !__reanimatedLoggerConfig.strict;
    if (!tmp) {
      tmp = outer1_3[arg0] < __reanimatedLoggerConfig.level;
    }
    if (!tmp) {
      let sum = arg1;
      if (strict.strict) {
        const _HermesInternal = HermesInternal;
        sum = arg1 + "\n\n" + "If you don't want to see this message, you can disable the `strict` mode. Refer to:\nhttps://docs.swmansion.com/react-native-reanimated/docs/debugging/logger-configuration for more details.";
      }
      __reanimatedLoggerConfig.logFunction(outer1_10(arg0, sum));
    }
  }
  obj = { LogLevel: obj, DOCS_REFERENCE: "If you don't want to see this message, you can disable the `strict` mode. Refer to:\nhttps://docs.swmansion.com/react-native-reanimated/docs/debugging/logger-configuration for more details.", createLog: closure_10 };
  handleLog.__closure = obj;
  handleLog.__workletHash = 5113579927044;
  handleLog.__initData = closure_15;
  return handleLog;
})();
let closure_16 = tmp6;
function warn(arg0) {
  if (arguments.length > 1) {
    tmp("warn", arg0, {});
  }
}
warn.__closure = { handleLog: tmp6 };
warn.__workletHash = 13521870617115;
warn.__initData = { code: "function warn_Pnpm_loggerTs8(message,options={}){const{handleLog}=this.__closure;handleLog('warn',message,options);}" };
function error(arg0) {
  if (arguments.length > 1) {
    tmp("error", arg0, {});
  }
}
error.__closure = { handleLog: tmp6 };
error.__workletHash = 10275432056698;
error.__initData = { code: "function error_Pnpm_loggerTs9(message,options={}){const{handleLog}=this.__closure;handleLog('error',message,options);}" };
arg5.LogLevel = obj;
arg5.DEFAULT_LOGGER_CONFIG = obj;
arg5.logToLogBoxAndConsole = function logToLogBoxAndConsole(arg0) {
  require(1587) /* noop */.addLogBoxLog(arg0);
  const obj = require(1587) /* noop */;
};
arg5.registerLoggerConfig = tmp3;
arg5.replaceLoggerImplementation = tmp4;
arg5.updateLoggerConfig = (() => {
  function updateLoggerConfig(level) {
    const obj = {};
    level = undefined;
    if (null != level) {
      level = level.level;
    }
    if (null == level) {
      level = outer1_6.level;
    }
    obj.level = level;
    let strict;
    if (null != level) {
      strict = level.strict;
    }
    if (null == strict) {
      strict = outer1_6.strict;
    }
    obj.strict = strict;
    outer1_12(Object.assign({}, outer1_0.__reanimatedLoggerConfig, obj));
  }
  obj = { registerLoggerConfig: closure_12, DEFAULT_LOGGER_CONFIG: obj };
  updateLoggerConfig.__closure = obj;
  updateLoggerConfig.__workletHash = 14435084623184;
  updateLoggerConfig.__initData = closure_14;
  return updateLoggerConfig;
})();
arg5.logger = { warn, error };

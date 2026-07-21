// Module ID: 1584
// Function ID: 17677
// Name: overrideLogFunctionImplementation
// Dependencies: []
// Exports: initializeUIRuntime

// Module 1584 (overrideLogFunctionImplementation)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = arg1(dependencyMap[1]).isJest();
const obj = arg1(dependencyMap[1]);
const shouldBeUseWebResult = arg1(dependencyMap[1]).shouldBeUseWeb();
const obj2 = arg1(dependencyMap[1]);
let closure_6 = arg1(dependencyMap[1]).isChromeDebugger();
let closure_7 = { code: "function overrideLogFunctionImplementation_Pnpm_initializersTs1(){const{replaceLoggerImplementation,runOnJS,logToLogBoxAndConsole}=this.__closure;replaceLoggerImplementation(function(data){'worklet';runOnJS(logToLogBoxAndConsole)(data);});}" };
let closure_8 = { code: "function pnpm_initializersTs2(data){const{runOnJS,logToLogBoxAndConsole}=this.__closure;runOnJS(logToLogBoxAndConsole)(data);}" };
const tmp3 = () => {
  function overrideLogFunctionImplementation() {
    let obj = callback(closure_2[2]);
    /* worklet (recovered source) */ function pnpm_initializersTs2(data){const{runOnJS,logToLogBoxAndConsole}=this.__closure;runOnJS(logToLogBoxAndConsole)(data);}
    obj = { runOnJS: callback(closure_2[3]).runOnJS, logToLogBoxAndConsole: callback(closure_2[2]).logToLogBoxAndConsole };
    pnpm_initializersTs2.__closure = obj;
    pnpm_initializersTs2.__workletHash = 10834450741065;
    pnpm_initializersTs2.__initData = closure_8;
    const result = obj.replaceLoggerImplementation(pnpm_initializersTs2);
  }
  overrideLogFunctionImplementation.__closure = { replaceLoggerImplementation: arg1(dependencyMap[2]).replaceLoggerImplementation, runOnJS: arg1(dependencyMap[3]).runOnJS, logToLogBoxAndConsole: arg1(dependencyMap[2]).logToLogBoxAndConsole };
  overrideLogFunctionImplementation.__workletHash = 17079079828449;
  overrideLogFunctionImplementation.__initData = closure_7;
  return overrideLogFunctionImplementation;
}();
const obj3 = arg1(dependencyMap[1]);
arg1(dependencyMap[2]).registerLoggerConfig(arg1(dependencyMap[2]).DEFAULT_LOGGER_CONFIG);
tmp3();
if (shouldBeUseWebResult) {
  global._WORKLET = false;
  const _console = console;
  global._log = console.log;
  global._getAnimationTimestamp = () => performance.now();
} else {
  arg1(dependencyMap[3]).executeOnUIRuntimeSync(arg1(dependencyMap[4]).registerReanimatedError)();
  const obj5 = arg1(dependencyMap[3]);
  const result = arg1(dependencyMap[3]).executeOnUIRuntimeSync(arg1(dependencyMap[2]).registerLoggerConfig);
  result(arg1(dependencyMap[2]).DEFAULT_LOGGER_CONFIG);
  const obj6 = arg1(dependencyMap[3]);
  arg1(dependencyMap[3]).executeOnUIRuntimeSync(tmp3)();
  const obj7 = arg1(dependencyMap[3]);
}
let closure_9 = { code: "function callGuardDEV_Pnpm_initializersTs3(fn,...args){try{return fn(...args);}catch(e){if(global.__ErrorUtils){global.__ErrorUtils.reportFatalError(e);}else{throw e;}}}" };
const tmp10 = () => {
  function callGuardDEV(apply) {
    const length = arguments.length;
    let num = 0;
    if (length > 1) {
      num = length - 1;
    }
    const array = new Array(num);
    for (let num2 = 1; num2 < length; num2 = num2 + 1) {
      let tmp3 = array;
      tmp2[num2 - 1] = arguments[num2];
    }
    return apply.apply(undefined, array);
  }
  callGuardDEV.__closure = {};
  callGuardDEV.__workletHash = 4198243943606;
  callGuardDEV.__initData = closure_9;
  return callGuardDEV;
}();
let closure_11 = { code: "function setupCallGuard_Pnpm_initializersTs4(){const{callGuardDEV,runOnJS,reportFatalErrorOnJS}=this.__closure;global.__callGuardDEV=callGuardDEV;global.__ErrorUtils={reportFatalError:function(error){runOnJS(reportFatalErrorOnJS)({message:error.message,stack:error.stack});}};}" };
const tmp11 = () => {
  function setupCallGuard() {
    closure_0.__callGuardDEV = closure_10;
    closure_0.__ErrorUtils = {
      reportFatalError(message) {
        let obj = callback(closure_2[3]);
        obj = { message: message.message, stack: message.stack };
        obj.runOnJS(callback(closure_2[4]).reportFatalErrorOnJS)(obj);
      }
    };
  }
  setupCallGuard.__closure = { callGuardDEV: tmp10, runOnJS: arg1(dependencyMap[3]).runOnJS, reportFatalErrorOnJS: arg1(dependencyMap[4]).reportFatalErrorOnJS };
  setupCallGuard.__workletHash = 14948004486848;
  setupCallGuard.__initData = closure_11;
  return setupCallGuard;
}();
let closure_13 = function createMemorySafeCapturableConsole() {
  const entries = Object.entries(console);
  return Object.fromEntries(entries.map((arg0) => {
    const tmp = callback(arg0, 2);
    const tmp2 = tmp[1];
    function methodWrapper() {
      return tmp2(...arguments);
    }
    if (tmp2.name) {
      const _Object = Object;
      const obj = { value: tmp2.name, writable: false };
      Object.defineProperty(methodWrapper, "name", obj);
    }
    const items = [tmp[0], methodWrapper];
    return items;
  }));
}();
let closure_14 = { code: "function setupConsole_Pnpm_initializersTs5(){const{IS_CHROME_DEBUGGER,runOnJS,capturableConsole}=this.__closure;if(!IS_CHROME_DEBUGGER){global.console={assert:runOnJS(capturableConsole.assert),debug:runOnJS(capturableConsole.debug),log:runOnJS(capturableConsole.log),warn:runOnJS(capturableConsole.warn),error:runOnJS(capturableConsole.error),info:runOnJS(capturableConsole.info)};}}" };
const tmp12 = () => {
  function setupConsole() {
    if (!closure_6) {
      const obj = { assert: callback(closure_2[3]).runOnJS(closure_13.assert) };
      const obj2 = callback(closure_2[3]);
      obj.debug = callback(closure_2[3]).runOnJS(closure_13.debug);
      const obj3 = callback(closure_2[3]);
      obj.log = callback(closure_2[3]).runOnJS(closure_13.log);
      const obj4 = callback(closure_2[3]);
      obj.warn = callback(closure_2[3]).runOnJS(closure_13.warn);
      const obj5 = callback(closure_2[3]);
      obj.error = callback(closure_2[3]).runOnJS(closure_13.error);
      const obj6 = callback(closure_2[3]);
      obj.info = callback(closure_2[3]).runOnJS(closure_13.info);
      closure_0.console = obj;
      const obj7 = callback(closure_2[3]);
    }
  }
  setupConsole.__closure = { IS_CHROME_DEBUGGER: closure_6, runOnJS: arg1(dependencyMap[3]).runOnJS, capturableConsole: closure_13 };
  setupConsole.__workletHash = 1380126086828;
  setupConsole.__initData = closure_14;
  return setupConsole;
}();
let closure_16 = { code: "function setupRequestAnimationFrame_Pnpm_initializersTs6(){const{callMicrotasks}=this.__closure;const nativeRequestAnimationFrame=global.requestAnimationFrame;let animationFrameCallbacks=[];let flushRequested=false;global.__flushAnimationFrame=function(frameTimestamp){const currentCallbacks=animationFrameCallbacks;animationFrameCallbacks=[];currentCallbacks.forEach(function(f){return f(frameTimestamp);});callMicrotasks();};global.requestAnimationFrame=function(callback){animationFrameCallbacks.push(callback);if(!flushRequested){flushRequested=true;nativeRequestAnimationFrame(function(timestamp){flushRequested=false;global.__frameTimestamp=timestamp;global.__flushAnimationFrame(timestamp);global.__frameTimestamp=undefined;});}return-1;};}" };
let closure_17 = () => {
  function setupRequestAnimationFrame() {
    const requestAnimationFrame = requestAnimationFrame.requestAnimationFrame;
    let closure_1 = [];
    let closure_2 = false;
    requestAnimationFrame.__flushAnimationFrame = (arg0) => {
      const requestAnimationFrame = arg0;
      const arr = [];
      const item = arr.forEach((arg0) => arg0(arg0));
      arr(closure_2[3]).callMicrotasks();
    };
    requestAnimationFrame.requestAnimationFrame = (arg0) => {
      if (!closure_2) {
        closure_2 = true;
        requestAnimationFrame((__frameTimestamp) => {
          let closure_2 = false;
          closure_0.__frameTimestamp = __frameTimestamp;
          const result = closure_0.__flushAnimationFrame(__frameTimestamp);
          closure_0.__frameTimestamp = undefined;
        });
      }
      return -1;
    };
  }
  setupRequestAnimationFrame.__closure = { callMicrotasks: arg1(dependencyMap[3]).callMicrotasks };
  setupRequestAnimationFrame.__workletHash = 14722266205784;
  setupRequestAnimationFrame.__initData = closure_16;
  return setupRequestAnimationFrame;
}();
let closure_18 = { code: "function pnpm_initializersTs7(){const{setupCallGuard,setupConsole,SHOULD_BE_USE_WEB,setupMicrotasks,setupRequestAnimationFrame}=this.__closure;setupCallGuard();setupConsole();if(!SHOULD_BE_USE_WEB){setupMicrotasks();setupRequestAnimationFrame();}global.lastUpdateFrameTimeByTag={};global.lastUpdateByTag={};}" };

export const callGuardDEV = tmp10;
export const setupCallGuard = tmp11;
export const setupConsole = tmp12;
export const initializeUIRuntime = function initializeUIRuntime(ReanimatedModule) {
  let obj = arg1(dependencyMap[1]);
  if (!obj.isWeb()) {
    if (ReanimatedModule) {
      if (closure_4) {
        const _globalThis = globalThis;
        globalThis.requestAnimationFrame = arg1(dependencyMap[5]).mockedRequestAnimationFrame;
      }
      /* worklet (recovered source) */ function pnpm_initializersTs7(){const{setupCallGuard,setupConsole,SHOULD_BE_USE_WEB,setupMicrotasks,setupRequestAnimationFrame}=this.__closure;setupCallGuard();setupConsole();if(!SHOULD_BE_USE_WEB){setupMicrotasks();setupRequestAnimationFrame();}global.lastUpdateFrameTimeByTag={};global.lastUpdateByTag={};}
      obj = { setupCallGuard: arg1, setupConsole: dependencyMap, SHOULD_BE_USE_WEB: shouldBeUseWebResult, setupMicrotasks: arg1(dependencyMap[3]).setupMicrotasks, setupRequestAnimationFrame: closure_17 };
      pnpm_initializersTs7.__closure = obj;
      pnpm_initializersTs7.__workletHash = 2162023783290;
      pnpm_initializersTs7.__initData = closure_18;
      arg1(dependencyMap[3]).runOnUIImmediately(pnpm_initializersTs7)();
      const obj2 = arg1(dependencyMap[3]);
    } else {
      const _Error = Error;
      const error = new Error("[Reanimated] Reanimated is trying to initialize the UI runtime without a valid ReanimatedModule");
      throw error;
    }
  }
};

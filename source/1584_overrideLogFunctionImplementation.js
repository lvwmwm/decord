// Module ID: 1584
// Function ID: 17679
// Name: overrideLogFunctionImplementation
// Dependencies: [57, 1585, 1586, 1589, 1593, 1597]
// Exports: initializeUIRuntime

// Module 1584 (overrideLogFunctionImplementation)
import _slicedToArray from "_slicedToArray";
import isJest from "isJest";
import isJest from "isJest";
import isJest from "isJest";
import noop from "noop";

const require = arg1;
isJest = isJest.isJest();
isJest = isJest.shouldBeUseWeb();
isJest = isJest.isChromeDebugger();
let closure_7 = { code: "function overrideLogFunctionImplementation_Pnpm_initializersTs1(){const{replaceLoggerImplementation,runOnJS,logToLogBoxAndConsole}=this.__closure;replaceLoggerImplementation(function(data){'worklet';runOnJS(logToLogBoxAndConsole)(data);});}" };
let closure_8 = { code: "function pnpm_initializersTs2(data){const{runOnJS,logToLogBoxAndConsole}=this.__closure;runOnJS(logToLogBoxAndConsole)(data);}" };
let tmp3 = (() => {
  function overrideLogFunctionImplementation() {
    let obj = outer1_1(outer1_2[2]);
    /* worklet (recovered source) */ function pnpm_initializersTs2(data){const{runOnJS,logToLogBoxAndConsole}=this.__closure;runOnJS(logToLogBoxAndConsole)(data);}
    obj = { runOnJS: outer1_1(outer1_2[3]).runOnJS, logToLogBoxAndConsole: outer1_1(outer1_2[2]).logToLogBoxAndConsole };
    pnpm_initializersTs2.__closure = obj;
    pnpm_initializersTs2.__workletHash = 10834450741065;
    pnpm_initializersTs2.__initData = outer1_8;
    const result = obj.replaceLoggerImplementation(pnpm_initializersTs2);
  }
  overrideLogFunctionImplementation.__closure = { replaceLoggerImplementation: require(1586) /* noop */.replaceLoggerImplementation, runOnJS: require(1589) /* runWorkletOnJS */.runOnJS, logToLogBoxAndConsole: require(1586) /* noop */.logToLogBoxAndConsole };
  overrideLogFunctionImplementation.__workletHash = 17079079828449;
  overrideLogFunctionImplementation.__initData = closure_7;
  return overrideLogFunctionImplementation;
})();
noop.registerLoggerConfig(require("noop").DEFAULT_LOGGER_CONFIG);
tmp3();
if (isJest) {
  global._WORKLET = false;
  const _console = console;
  global._log = console.log;
  global._getAnimationTimestamp = () => performance.now();
} else {
  require("runWorkletOnJS").executeOnUIRuntimeSync(require("processStack").registerReanimatedError)();
  let obj5 = require("runWorkletOnJS");
  let result = require("runWorkletOnJS").executeOnUIRuntimeSync(require("noop").registerLoggerConfig);
  result(require("noop").DEFAULT_LOGGER_CONFIG);
  let obj6 = require("runWorkletOnJS");
  require("runWorkletOnJS").executeOnUIRuntimeSync(tmp3)();
  let obj7 = require("runWorkletOnJS");
}
let closure_9 = { code: "function callGuardDEV_Pnpm_initializersTs3(fn,...args){try{return fn(...args);}catch(e){if(global.__ErrorUtils){global.__ErrorUtils.reportFatalError(e);}else{throw e;}}}" };
const tmp10 = (() => {
  export function callGuardDEV(apply) {
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
})();
let closure_10 = tmp10;
let closure_11 = { code: "function setupCallGuard_Pnpm_initializersTs4(){const{callGuardDEV,runOnJS,reportFatalErrorOnJS}=this.__closure;global.__callGuardDEV=callGuardDEV;global.__ErrorUtils={reportFatalError:function(error){runOnJS(reportFatalErrorOnJS)({message:error.message,stack:error.stack});}};}" };
const tmp11 = (() => {
  export function setupCallGuard() {
    outer1_0.__callGuardDEV = outer1_10;
    outer1_0.__ErrorUtils = {
      reportFatalError(message) {
        let obj = outer2_1(outer2_2[3]);
        obj = { message: message.message, stack: message.stack };
        obj.runOnJS(outer2_1(outer2_2[4]).reportFatalErrorOnJS)(obj);
      }
    };
  }
  setupCallGuard.__closure = { callGuardDEV: closure_10, runOnJS: require(1589) /* runWorkletOnJS */.runOnJS, reportFatalErrorOnJS: require(1593) /* processStack */.reportFatalErrorOnJS };
  setupCallGuard.__workletHash = 14948004486848;
  setupCallGuard.__initData = closure_11;
  return setupCallGuard;
})();
let closure_12 = tmp11;
let closure_13 = (function createMemorySafeCapturableConsole() {
  const entries = Object.entries(console);
  return Object.fromEntries(entries.map((arg0) => {
    const tmp = outer1_3(arg0, 2);
    let closure_0 = tmp2;
    function methodWrapper() {
      return tmp2(...arguments);
    }
    if (tmp[1].name) {
      const _Object = Object;
      const obj = { value: tmp2.name, writable: false };
      Object.defineProperty(methodWrapper, "name", obj);
    }
    const items = [tmp[0], methodWrapper];
    return items;
  }));
})();
let closure_14 = { code: "function setupConsole_Pnpm_initializersTs5(){const{IS_CHROME_DEBUGGER,runOnJS,capturableConsole}=this.__closure;if(!IS_CHROME_DEBUGGER){global.console={assert:runOnJS(capturableConsole.assert),debug:runOnJS(capturableConsole.debug),log:runOnJS(capturableConsole.log),warn:runOnJS(capturableConsole.warn),error:runOnJS(capturableConsole.error),info:runOnJS(capturableConsole.info)};}}" };
const tmp12 = (() => {
  export function setupConsole() {
    if (!outer1_6) {
      const obj = { assert: outer1_1(outer1_2[3]).runOnJS(outer1_13.assert) };
      const obj2 = outer1_1(outer1_2[3]);
      obj.debug = outer1_1(outer1_2[3]).runOnJS(outer1_13.debug);
      const obj3 = outer1_1(outer1_2[3]);
      obj.log = outer1_1(outer1_2[3]).runOnJS(outer1_13.log);
      const obj4 = outer1_1(outer1_2[3]);
      obj.warn = outer1_1(outer1_2[3]).runOnJS(outer1_13.warn);
      const obj5 = outer1_1(outer1_2[3]);
      obj.error = outer1_1(outer1_2[3]).runOnJS(outer1_13.error);
      const obj6 = outer1_1(outer1_2[3]);
      obj.info = outer1_1(outer1_2[3]).runOnJS(outer1_13.info);
      outer1_0.console = obj;
      const obj7 = outer1_1(outer1_2[3]);
    }
  }
  setupConsole.__closure = { IS_CHROME_DEBUGGER: isJest, runOnJS: require(1589) /* runWorkletOnJS */.runOnJS, capturableConsole: closure_13 };
  setupConsole.__workletHash = 1380126086828;
  setupConsole.__initData = closure_14;
  return setupConsole;
})();
let closure_15 = tmp12;
let closure_16 = { code: "function setupRequestAnimationFrame_Pnpm_initializersTs6(){const{callMicrotasks}=this.__closure;const nativeRequestAnimationFrame=global.requestAnimationFrame;let animationFrameCallbacks=[];let flushRequested=false;global.__flushAnimationFrame=function(frameTimestamp){const currentCallbacks=animationFrameCallbacks;animationFrameCallbacks=[];currentCallbacks.forEach(function(f){return f(frameTimestamp);});callMicrotasks();};global.requestAnimationFrame=function(callback){animationFrameCallbacks.push(callback);if(!flushRequested){flushRequested=true;nativeRequestAnimationFrame(function(timestamp){flushRequested=false;global.__frameTimestamp=timestamp;global.__flushAnimationFrame(timestamp);global.__frameTimestamp=undefined;});}return-1;};}" };
let closure_17 = (() => {
  function setupRequestAnimationFrame() {
    const requestAnimationFrame = outer1_0.requestAnimationFrame;
    let closure_1 = [];
    let c2 = false;
    outer1_0.__flushAnimationFrame = (arg0) => {
      let closure_0 = arg0;
      const item = [].forEach((arg0) => arg0(closure_0));
      outer2_1(outer2_2[3]).callMicrotasks();
    };
    outer1_0.requestAnimationFrame = (arg0) => {
      if (!c2) {
        c2 = true;
        requestAnimationFrame((__frameTimestamp) => {
          let c2 = false;
          outer3_0.__frameTimestamp = __frameTimestamp;
          const result = outer3_0.__flushAnimationFrame(__frameTimestamp);
          outer3_0.__frameTimestamp = undefined;
        });
      }
      return -1;
    };
  }
  setupRequestAnimationFrame.__closure = { callMicrotasks: require(1589) /* runWorkletOnJS */.callMicrotasks };
  setupRequestAnimationFrame.__workletHash = 14722266205784;
  setupRequestAnimationFrame.__initData = closure_16;
  return setupRequestAnimationFrame;
})();
let closure_18 = { code: "function pnpm_initializersTs7(){const{setupCallGuard,setupConsole,SHOULD_BE_USE_WEB,setupMicrotasks,setupRequestAnimationFrame}=this.__closure;setupCallGuard();setupConsole();if(!SHOULD_BE_USE_WEB){setupMicrotasks();setupRequestAnimationFrame();}global.lastUpdateFrameTimeByTag={};global.lastUpdateByTag={};}" };

export const initializeUIRuntime = function initializeUIRuntime(ReanimatedModule) {
  let obj = require(1585) /* isJest */;
  if (!obj.isWeb()) {
    if (ReanimatedModule) {
      if (isJest) {
        const _globalThis = globalThis;
        globalThis.requestAnimationFrame = require(1597) /* mockedRequestAnimationFrame */.mockedRequestAnimationFrame;
      }
      /* worklet (recovered source) */ function pnpm_initializersTs7(){const{setupCallGuard,setupConsole,SHOULD_BE_USE_WEB,setupMicrotasks,setupRequestAnimationFrame}=this.__closure;setupCallGuard();setupConsole();if(!SHOULD_BE_USE_WEB){setupMicrotasks();setupRequestAnimationFrame();}global.lastUpdateFrameTimeByTag={};global.lastUpdateByTag={};}
      obj = { setupCallGuard: closure_12, setupConsole: closure_15, SHOULD_BE_USE_WEB: isJest, setupMicrotasks: require(1589) /* runWorkletOnJS */.setupMicrotasks, setupRequestAnimationFrame: closure_17 };
      pnpm_initializersTs7.__closure = obj;
      pnpm_initializersTs7.__workletHash = 2162023783290;
      pnpm_initializersTs7.__initData = closure_18;
      require(1589) /* runWorkletOnJS */.runOnUIImmediately(pnpm_initializersTs7)();
      const obj2 = require(1589) /* runWorkletOnJS */;
    } else {
      const _Error = Error;
      const error = new Error("[Reanimated] Reanimated is trying to initialize the UI runtime without a valid ReanimatedModule");
      throw error;
    }
  }
};

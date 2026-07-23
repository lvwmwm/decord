// Module ID: 1757
// Function ID: 19639
// Name: dispatchCommandFabric
// Dependencies: [1586, 1585]

// Module 1757 (dispatchCommandFabric)
import isJest from "isJest";
import isJest from "isJest";

let closure_3 = { code: "function dispatchCommandFabric_Pnpm_dispatchCommandTs1(animatedRef,commandName,args=[]){const{logger}=this.__closure;if(!_WORKLET){return;}const shadowNodeWrapper=animatedRef();if(!shadowNodeWrapper){logger.warn(\"Tried to dispatch command \\\"\"+commandName+\"\\\" with an uninitialized ref. Make sure to pass the animated ref to the component before using it.\");return;}global._dispatchCommandFabric(shadowNodeWrapper,commandName,args);}" };
let closure_4 = { code: "function dispatchCommandPaper_Pnpm_dispatchCommandTs2(animatedRef,commandName,args=[]){const{logger}=this.__closure;if(!_WORKLET){return;}const viewTag=animatedRef();if(viewTag<0){logger.warn(\"Tried to dispatch command \\\"\"+commandName+\"\\\" with an uninitialized ref. Make sure to pass the animated ref to the component before using it.\");return;}global._dispatchCommandPaper(viewTag,commandName,args);}" };
let tmp3 = (() => {
  function dispatchCommandPaper(arg0, arg1) {
    if (arguments.length > 2) {
      if (globalThis._WORKLET) {
        const tmp4 = arg0();
        if (tmp4 < 0) {
          const logger = outer1_1(outer1_2[0]).logger;
          const _HermesInternal = HermesInternal;
          logger.warn("Tried to dispatch command \"" + arg1 + "\" with an uninitialized ref. Make sure to pass the animated ref to the component before using it.");
        } else {
          const result = outer1_0._dispatchCommandPaper(tmp4, arg1, []);
        }
      }
    }
  }
  dispatchCommandPaper.__closure = { logger: require(1586) /* noop */.logger };
  dispatchCommandPaper.__workletHash = 16962176072769;
  dispatchCommandPaper.__initData = closure_4;
  return dispatchCommandPaper;
})();
isJest = isJest.shouldBeUseWeb();
if (isJest) {
  if (isJest.isJest()) {
    function dispatchCommandJest() {
      const logger = require(1586) /* noop */.logger;
      logger.warn("dispatchCommand() is not supported with Jest.");
    }
  } else {
    const _module2 = require("isJest");
    dispatchCommandJest = _module2.isChromeDebugger() ? (function dispatchCommandChromeDebugger() {
      const logger = require(1586) /* noop */.logger;
      logger.warn("dispatchCommand() is not supported with Chrome Debugger.");
    }) : (function dispatchCommandDefault() {
      const logger = require(1586) /* noop */.logger;
      logger.warn("dispatchCommand() is not supported on this configuration.");
    });
  }
} else {
  if (isJest.isFabric()) {
    tmp3 = tmp2;
  }
  exports.dispatchCommand = tmp3;
}

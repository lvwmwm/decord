// Module ID: 1757
// Function ID: 19638
// Name: dispatchCommandFabric
// Dependencies: []

// Module 1757 (dispatchCommandFabric)
let closure_3 = { code: "function dispatchCommandFabric_Pnpm_dispatchCommandTs1(animatedRef,commandName,args=[]){const{logger}=this.__closure;if(!_WORKLET){return;}const shadowNodeWrapper=animatedRef();if(!shadowNodeWrapper){logger.warn(\"Tried to dispatch command \\\"\"+commandName+\"\\\" with an uninitialized ref. Make sure to pass the animated ref to the component before using it.\");return;}global._dispatchCommandFabric(shadowNodeWrapper,commandName,args);}" };
let closure_4 = { code: "function dispatchCommandPaper_Pnpm_dispatchCommandTs2(animatedRef,commandName,args=[]){const{logger}=this.__closure;if(!_WORKLET){return;}const viewTag=animatedRef();if(viewTag<0){logger.warn(\"Tried to dispatch command \\\"\"+commandName+\"\\\" with an uninitialized ref. Make sure to pass the animated ref to the component before using it.\");return;}global._dispatchCommandPaper(viewTag,commandName,args);}" };
let tmp3 = () => {
  function dispatchCommandPaper(arg0, arg1) {
    if (arguments.length > 2) {
      if (globalThis._WORKLET) {
        const tmp4 = arg0();
        if (tmp4 < 0) {
          const logger = callback(closure_2[0]).logger;
          const _HermesInternal = HermesInternal;
          logger.warn("Tried to dispatch command \"" + arg1 + "\" with an uninitialized ref. Make sure to pass the animated ref to the component before using it.");
        } else {
          const result = closure_0._dispatchCommandPaper(tmp4, arg1, []);
        }
      }
    }
  }
  dispatchCommandPaper.__closure = { logger: require(dependencyMap[0]).logger };
  dispatchCommandPaper.__workletHash = 16962176072769;
  dispatchCommandPaper.__initData = closure_4;
  return dispatchCommandPaper;
}();
const _module = require(dependencyMap[1]);
const tmp2 = () => {
  function dispatchCommandFabric(arg0, arg1) {
    if (arguments.length > 2) {
      if (globalThis._WORKLET) {
        const tmp4 = arg0();
        if (tmp4) {
          const result = closure_0._dispatchCommandFabric(tmp4, arg1, []);
        } else {
          const logger = callback(closure_2[0]).logger;
          const _HermesInternal = HermesInternal;
          logger.warn("Tried to dispatch command \"" + arg1 + "\" with an uninitialized ref. Make sure to pass the animated ref to the component before using it.");
        }
      }
    }
  }
  dispatchCommandFabric.__closure = { logger: require(dependencyMap[0]).logger };
  dispatchCommandFabric.__workletHash = 9994297174981;
  dispatchCommandFabric.__initData = closure_3;
  return dispatchCommandFabric;
}();
const _module1 = require(dependencyMap[1]);
if (shouldBeUseWebResult) {
  if (_module1.isJest()) {
    function dispatchCommandJest() {
      const logger = require(dependencyMap[0]).logger;
      logger.warn("dispatchCommand() is not supported with Jest.");
    }
  } else {
    const _module2 = require(dependencyMap[1]);
    dispatchCommandJest = _module2.isChromeDebugger() ? function dispatchCommandChromeDebugger() {
      const logger = require(dependencyMap[0]).logger;
      logger.warn("dispatchCommand() is not supported with Chrome Debugger.");
    } : function dispatchCommandDefault() {
      const logger = require(dependencyMap[0]).logger;
      logger.warn("dispatchCommand() is not supported on this configuration.");
    };
  }
} else {
  if (_module1.isFabric()) {
    tmp3 = tmp2;
  }
  exports.dispatchCommand = tmp3;
}

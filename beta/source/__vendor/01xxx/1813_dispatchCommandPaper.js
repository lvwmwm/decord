// Module ID: 1813
// Function ID: 1814
// Name: dispatchCommandPaper
// Dependencies: [1642, 1641]
// Exports: dispatchCommand

// Module 1813 (dispatchCommandPaper)
import react_native from "react-native" /* 1642 */;
import module_1641_mod from "module_1641" /* 1641 */;

function dispatchCommandFabric(fn, arg1) {
  let items = arg2;
  if (arg2 === undefined) {
    items = [];
  }
  if (globalThis._WORKLET) {
    const tmp3 = fn();
    if (tmp3) {
      const result = global._dispatchCommandFabric(tmp3, arg1, items);
    } else {
      const logger = react_native.logger;
      const _HermesInternal = HermesInternal;
      logger.warn("Tried to dispatch command \"" + arg1 + "\" with an uninitialized ref. Make sure to pass the animated ref to the component before using it.");
    }
  }
}
dispatchCommandFabric.__closure = { logger: react_native.logger };
dispatchCommandFabric.__workletHash = 9994297174981;
dispatchCommandFabric.__initData = { code: "function dispatchCommandFabric_Pnpm_dispatchCommandTs1(animatedRef,commandName,args=[]){const{logger}=this.__closure;if(!_WORKLET){return;}const shadowNodeWrapper=animatedRef();if(!shadowNodeWrapper){logger.warn(\"Tried to dispatch command \\\"\"+commandName+\"\\\" with an uninitialized ref. Make sure to pass the animated ref to the component before using it.\");return;}global._dispatchCommandFabric(shadowNodeWrapper,commandName,args);}" };
function dispatchCommandPaper(fn, arg1) {
  let items = arg2;
  if (arg2 === undefined) {
    items = [];
  }
  if (globalThis._WORKLET) {
    const tmp3 = fn();
    if (tmp3 < 0) {
      const logger = react_native.logger;
      const _HermesInternal = HermesInternal;
      logger.warn("Tried to dispatch command \"" + arg1 + "\" with an uninitialized ref. Make sure to pass the animated ref to the component before using it.");
    } else {
      const result = global._dispatchCommandPaper(tmp3, arg1, items);
    }
  }
}
({ logger: react_native.logger });
dispatchCommandPaper.__closure = { logger: react_native.logger };
dispatchCommandPaper.__workletHash = 16962176072769;
dispatchCommandPaper.__initData = { code: "function dispatchCommandPaper_Pnpm_dispatchCommandTs2(animatedRef,commandName,args=[]){const{logger}=this.__closure;if(!_WORKLET){return;}const viewTag=animatedRef();if(viewTag<0){logger.warn(\"Tried to dispatch command \\\"\"+commandName+\"\\\" with an uninitialized ref. Make sure to pass the animated ref to the component before using it.\");return;}global._dispatchCommandPaper(viewTag,commandName,args);}" };
({ logger: react_native.logger });
let module_1641 = module_1641_mod;
module_1641.shouldBeUseWeb();
module_1641 = module_1641_mod;
if (module_1641) {
  let dispatchCommandJest;
  if (module_1641.isJest()) {
    dispatchCommandJest = function dispatchCommandJest() {
      const logger = react_native.logger;
      logger.warn("dispatchCommand() is not supported with Jest.");
    };
  } else {
    const _module2 = module_1641;
    dispatchCommandJest = _module2.isChromeDebugger() ? (function dispatchCommandChromeDebugger() {
      const logger = react_native.logger;
      logger.warn("dispatchCommand() is not supported with Chrome Debugger.");
    }) : (function dispatchCommandDefault() {
      const logger = react_native.logger;
      logger.warn("dispatchCommand() is not supported on this configuration.");
    });
  }
  dispatchCommandPaper = dispatchCommandJest;
} else if (module_1641.isFabric()) {
  dispatchCommandPaper = dispatchCommandFabric;
}

export const dispatchCommand = dispatchCommandPaper;

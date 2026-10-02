// Module ID: 1819
// Function ID: 1820
// Name: dispatchCommandPaper
// Dependencies: [1648, 1647]
// Exports: dispatchCommand

// Module 1819 (dispatchCommandPaper)
import react_native from "react-native" /* 1648 */;
import module_1647_mod from "module_1647" /* 1647 */;

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
let module_1647 = module_1647_mod;
module_1647.shouldBeUseWeb();
module_1647 = module_1647_mod;
if (module_1647) {
  let dispatchCommandJest;
  if (module_1647.isJest()) {
    dispatchCommandJest = function dispatchCommandJest() {
      const logger = react_native.logger;
      logger.warn("dispatchCommand() is not supported with Jest.");
    };
  } else {
    const _module2 = module_1647;
    dispatchCommandJest = _module2.isChromeDebugger() ? (function dispatchCommandChromeDebugger() {
      const logger = react_native.logger;
      logger.warn("dispatchCommand() is not supported with Chrome Debugger.");
    }) : (function dispatchCommandDefault() {
      const logger = react_native.logger;
      logger.warn("dispatchCommand() is not supported on this configuration.");
    });
  }
  dispatchCommandPaper = dispatchCommandJest;
} else if (module_1647.isFabric()) {
  dispatchCommandPaper = dispatchCommandFabric;
}

export const dispatchCommand = dispatchCommandPaper;

// Module ID: 1829
// Function ID: 1830
// Dependencies: [1654, 1653]
// Exports: setGestureState

// Module 1829
import react_native from "react-native" /* 1654 */;
import module_1653 from "module_1653" /* 1653 */;

function setGestureStateNative(arg0, arg1) {
  if (globalThis._WORKLET) {
    global._setGestureState(arg0, arg1);
  } else {
    const logger = react_native.logger;
    logger.warn("You can not use setGestureState in non-worklet function.");
  }
}
setGestureStateNative.__closure = { logger: react_native.logger };
setGestureStateNative.__workletHash = 13301434022691;
setGestureStateNative.__initData = { code: "function setGestureStateNative_Pnpm_setGestureStateTs1(handlerTag,newState){const{logger}=this.__closure;if(!_WORKLET){logger.warn('You can not use setGestureState in non-worklet function.');return;}global._setGestureState(handlerTag,newState);}" };
({ logger: react_native.logger });
if (module_1653.shouldBeUseWeb()) {
  let setGestureStateJest;
  const _module1 = module_1653;
  if (_module1.isJest()) {
    setGestureStateJest = function setGestureStateJest() {
      const logger = react_native.logger;
      logger.warn("setGestureState() cannot be used with Jest.");
    };
  } else {
    const _module2 = module_1653;
    setGestureStateJest = _module2.isChromeDebugger() ? (function setGestureStateChromeDebugger() {
      const logger = react_native.logger;
      logger.warn("setGestureState() cannot be used with Chrome Debugger.");
    }) : (function setGestureStateDefault() {
      const logger = react_native.logger;
      logger.warn("setGestureState() is not supported on this configuration.");
    });
  }
  setGestureStateNative = setGestureStateJest;
}

export const setGestureState = setGestureStateNative;

// Module ID: 1761
// Function ID: 19666
// Name: setGestureStateNative
// Dependencies: [1586, 1585]

// Module 1761 (setGestureStateNative)
import isJest from "isJest";

let closure_3 = { code: "function setGestureStateNative_Pnpm_setGestureStateTs1(handlerTag,newState){const{logger}=this.__closure;if(!_WORKLET){logger.warn('You can not use setGestureState in non-worklet function.');return;}global._setGestureState(handlerTag,newState);}" };
if (!isJest.shouldBeUseWeb()) {
  exports.setGestureState = tmp2;
} else {
  const _module1 = require("isJest");
  if (_module1.isJest()) {
    function setGestureStateJest() {
      const logger = require(1586) /* noop */.logger;
      logger.warn("setGestureState() cannot be used with Jest.");
    }
  } else {
    const _module2 = require("isJest");
    setGestureStateJest = _module2.isChromeDebugger() ? (function setGestureStateChromeDebugger() {
      const logger = require(1586) /* noop */.logger;
      logger.warn("setGestureState() cannot be used with Chrome Debugger.");
    }) : (function setGestureStateDefault() {
      const logger = require(1586) /* noop */.logger;
      logger.warn("setGestureState() is not supported on this configuration.");
    });
  }
}

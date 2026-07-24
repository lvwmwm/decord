// Module ID: 1762
// Function ID: 19673
// Name: setNativePropsFabric
// Dependencies: [1586, 1625, 1585]

// Module 1762 (setNativePropsFabric)
import isJest from "isJest";
import isJest from "isJest";

let closure_3 = { code: "function setNativePropsFabric_Pnpm_setNativePropsTs1(animatedRef,updates){const{logger,processColorsInProps}=this.__closure;if(!_WORKLET){logger.warn('setNativeProps() can only be used on the UI runtime.');return;}const shadowNodeWrapper=animatedRef();processColorsInProps(updates);global._updatePropsFabric([{shadowNodeWrapper:shadowNodeWrapper,updates:updates}]);}" };
let closure_4 = { code: "function setNativePropsPaper_Pnpm_setNativePropsTs2(animatedRef,updates){const{logger,processColorsInProps}=this.__closure;var _viewName$value,_viewName;if(!_WORKLET){logger.warn('setNativeProps() can only be used on the UI runtime.');return;}const tag=animatedRef();const name=(_viewName$value=(_viewName=animatedRef.viewName)===null||_viewName===void 0?void 0:_viewName.value)!==null&&_viewName$value!==void 0?_viewName$value:null;processColorsInProps(updates);global._updatePropsPaper([{tag:tag,name:name,updates:updates}]);}" };
let tmp3 = (() => {
  function setNativePropsPaper(viewName, updates) {
    if (globalThis._WORKLET) {
      let value;
      if (null != viewName.viewName) {
        value = iter.value;
      }
      let tmp7 = null;
      if (null != value) {
        tmp7 = value;
      }
      let obj = outer1_1(outer1_2[1]);
      obj.processColorsInProps(updates);
      obj = { tag: viewName(), name: tmp7, updates };
      const items = [obj];
      outer1_0._updatePropsPaper(items);
      const tmp4 = viewName();
    } else {
      const logger = outer1_1(outer1_2[0]).logger;
      logger.warn("setNativeProps() can only be used on the UI runtime.");
    }
  }
  setNativePropsPaper.__closure = { logger: require(1586) /* noop */.logger, processColorsInProps: require(1625) /* call */.processColorsInProps };
  setNativePropsPaper.__workletHash = 9895881337862;
  setNativePropsPaper.__initData = closure_4;
  return setNativePropsPaper;
})();
isJest = isJest.shouldBeUseWeb();
if (isJest) {
  if (isJest.isJest()) {
    function setNativePropsJest() {
      const logger = require(1586) /* noop */.logger;
      logger.warn("setNativeProps() is not supported with Jest.");
    }
  } else {
    const _module2 = require("isJest");
    setNativePropsJest = _module2.isChromeDebugger() ? (function setNativePropsChromeDebugger() {
      const logger = require(1586) /* noop */.logger;
      logger.warn("setNativeProps() is not supported with Chrome Debugger.");
    }) : (function setNativePropsDefault() {
      const logger = require(1586) /* noop */.logger;
      logger.warn("setNativeProps() is not supported on this configuration.");
    });
  }
} else {
  if (isJest.isFabric()) {
    tmp3 = tmp2;
  }
  exports.setNativeProps = tmp3;
}

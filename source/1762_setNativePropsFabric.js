// Module ID: 1762
// Function ID: 19671
// Name: setNativePropsFabric
// Dependencies: []

// Module 1762 (setNativePropsFabric)
let closure_3 = { code: "function setNativePropsFabric_Pnpm_setNativePropsTs1(animatedRef,updates){const{logger,processColorsInProps}=this.__closure;if(!_WORKLET){logger.warn('setNativeProps() can only be used on the UI runtime.');return;}const shadowNodeWrapper=animatedRef();processColorsInProps(updates);global._updatePropsFabric([{shadowNodeWrapper:shadowNodeWrapper,updates:updates}]);}" };
let closure_4 = { code: "function setNativePropsPaper_Pnpm_setNativePropsTs2(animatedRef,updates){const{logger,processColorsInProps}=this.__closure;var _viewName$value,_viewName;if(!_WORKLET){logger.warn('setNativeProps() can only be used on the UI runtime.');return;}const tag=animatedRef();const name=(_viewName$value=(_viewName=animatedRef.viewName)===null||_viewName===void 0?void 0:_viewName.value)!==null&&_viewName$value!==void 0?_viewName$value:null;processColorsInProps(updates);global._updatePropsPaper([{tag:tag,name:name,updates:updates}]);}" };
let tmp3 = () => {
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
      let obj = callback(closure_2[1]);
      obj.processColorsInProps(updates);
      obj = { tag: viewName(), name: tmp7, updates };
      const items = [obj];
      closure_0._updatePropsPaper(items);
      const tmp4 = viewName();
    } else {
      const logger = callback(closure_2[0]).logger;
      logger.warn("setNativeProps() can only be used on the UI runtime.");
    }
  }
  setNativePropsPaper.__closure = { logger: require(dependencyMap[0]).logger, processColorsInProps: require(dependencyMap[1]).processColorsInProps };
  setNativePropsPaper.__workletHash = 9895881337862;
  setNativePropsPaper.__initData = closure_4;
  return setNativePropsPaper;
}();
const _module = require(dependencyMap[2]);
const tmp2 = () => {
  function setNativePropsFabric(arg0, updates) {
    if (globalThis._WORKLET) {
      let obj = callback(closure_2[1]);
      obj.processColorsInProps(updates);
      obj = { shadowNodeWrapper: arg0(), updates };
      const items = [obj];
      closure_0._updatePropsFabric(items);
      const tmp5 = arg0();
    } else {
      const logger = callback(closure_2[0]).logger;
      logger.warn("setNativeProps() can only be used on the UI runtime.");
    }
  }
  setNativePropsFabric.__closure = { logger: require(dependencyMap[0]).logger, processColorsInProps: require(dependencyMap[1]).processColorsInProps };
  setNativePropsFabric.__workletHash = 13825557000530;
  setNativePropsFabric.__initData = closure_3;
  return setNativePropsFabric;
}();
const _module1 = require(dependencyMap[2]);
if (shouldBeUseWebResult) {
  if (_module1.isJest()) {
    function setNativePropsJest() {
      const logger = require(dependencyMap[0]).logger;
      logger.warn("setNativeProps() is not supported with Jest.");
    }
  } else {
    const _module2 = require(dependencyMap[2]);
    setNativePropsJest = _module2.isChromeDebugger() ? function setNativePropsChromeDebugger() {
      const logger = require(dependencyMap[0]).logger;
      logger.warn("setNativeProps() is not supported with Chrome Debugger.");
    } : function setNativePropsDefault() {
      const logger = require(dependencyMap[0]).logger;
      logger.warn("setNativeProps() is not supported on this configuration.");
    };
  }
} else {
  if (_module1.isFabric()) {
    tmp3 = tmp2;
  }
  exports.setNativeProps = tmp3;
}

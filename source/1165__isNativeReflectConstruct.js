// Module ID: 1165
// Function ID: 13259
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 31, 27, 978, 973]
// Exports: getRNSentryOnDrawReporter

// Module 1165 (_isNativeReflectConstruct)
import getActivityIndicator from "get ActivityIndicator";
import isHermesEnabled from "isHermesEnabled";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";

let UIManager;
let closure_8;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
({ UIManager, View: closure_8 } = get_ActivityIndicator);
let hasViewManagerConfigResult = !tmp4;
if (!!UIManager.hasViewManagerConfig) {
  hasViewManagerConfigResult = UIManager.hasViewManagerConfig("RNSentryOnDrawReporter");
}
let closure_11 = ((Component) => {
  class RNSentryOnDrawReporterNoop {
    constructor() {
      self = this;
      tmp = outer1_2(this, RNSentryOnDrawReporterNoop);
      obj = outer1_5(RNSentryOnDrawReporterNoop);
      tmp2 = outer1_4;
      if (outer1_12()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(RNSentryOnDrawReporterNoop, Component);
  const items = [
    {
      key: "render",
      value: function render() {
        return <outer1_8 {......Object.assign({}, this.props)} />;
      }
    }
  ];
  return callback(RNSentryOnDrawReporterNoop, items);
})(importAllResult.Component);

export const nativeComponentExists = hasViewManagerConfigResult;
export const getRNSentryOnDrawReporter = function getRNSentryOnDrawReporter() {
  if (result) {
    return result;
  } else {
    if (!obj.isExpoGo()) {
      if (closure_10) {
        const ReactNative = require(973) /* reactNativeVersion */.ReactNativeLibraries.ReactNative;
        let prop;
        if (null !== ReactNative) {
          if (undefined !== ReactNative) {
            prop = ReactNative.requireNativeComponent;
          }
        }
        if (prop) {
          const ReactNative2 = require(973) /* reactNativeVersion */.ReactNativeLibraries.ReactNative;
          result = ReactNative2.requireNativeComponent("RNSentryOnDrawReporter");
        }
      }
    }
    result = closure_11;
    obj = require(978) /* isHermesEnabled */;
  }
};

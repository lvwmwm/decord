// Module ID: 1066
// Function ID: 1067
// Name: nativeComponentExists
// Dependencies: [41, 42, 93, 95, 98, 19, 17, 879, 874]
// Exports: getRNSentryOnDrawReporter

// Module 1066 (nativeComponentExists)
import _mod879 from "module_879" /* 879 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;

let result;

let UIManager;
let metroRequire;
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
({ UIManager, View: metroRequire } = react_native);
const RNSentryOnDrawReporter = "RNSentryOnDrawReporter";
const tmp6 = UIManager.hasViewManagerConfig && UIManager.hasViewManagerConfig("RNSentryOnDrawReporter");
let closure_10 = tmp6;
class RNSentryOnDrawReporterNoop {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, RNSentryOnDrawReporterNoop);
    const obj = _getPrototypeOf(RNSentryOnDrawReporterNoop);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c3;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
_inherits(RNSentryOnDrawReporterNoop, react.Component);
const entry = {
  key: "render",
  value: function render() {
    return <metroRequire {...Object.assign({}, this.props)} />;
  }
};
const items = [entry];
let closure_11 = _createClass(RNSentryOnDrawReporterNoop, items);

export const nativeComponentExists = tmp6;
export const getRNSentryOnDrawReporter = () => {
  let tmp = result;
  if (!tmp) {
    const obj = _mod879;
    if (!obj.isExpoGo()) {
      const tmp4 = closure_10;
      if (tmp4) {
        const ReactNative = tmp2(874).ReactNativeLibraries.ReactNative;
        let prop;
        if (null !== ReactNative) {
          if (undefined !== ReactNative) {
            prop = ReactNative.requireNativeComponent;
          }
        }
        if (prop) {
          const ReactNative2 = tmp2(874).ReactNativeLibraries.ReactNative;
          result = ReactNative2.requireNativeComponent(RNSentryOnDrawReporter);
        }
        tmp = result;
      }
    }
    result = closure_11;
  }
  return tmp;
};

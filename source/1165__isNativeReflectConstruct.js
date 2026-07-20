// Module ID: 1165
// Function ID: 13253
// Name: _isNativeReflectConstruct
// Dependencies: []
// Exports: getRNSentryOnDrawReporter

// Module 1165 (_isNativeReflectConstruct)
let UIManager;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
const importAllResult = importAll(dependencyMap[5]);
({ UIManager, View: closure_8 } = arg1(dependencyMap[6]));
let hasViewManagerConfigResult = !tmp4;
if (!!UIManager.hasViewManagerConfig) {
  hasViewManagerConfigResult = UIManager.hasViewManagerConfig("RNSentryOnDrawReporter");
}
let closure_11 = (Component) => {
  class RNSentryOnDrawReporterNoop {
    constructor() {
      self = this;
      tmp = closure_2(this, RNSentryOnDrawReporterNoop);
      obj = closure_5(RNSentryOnDrawReporterNoop);
      tmp2 = closure_4;
      if (closure_12()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = RNSentryOnDrawReporterNoop;
  callback2(RNSentryOnDrawReporterNoop, Component);
  const items = [
    {
      key: "render",
      value: function render() {
        return <closure_8 {......Object.assign({}, this.props)} />;
      }
    }
  ];
  return callback(RNSentryOnDrawReporterNoop, items);
}(importAllResult.Component);

export const nativeComponentExists = hasViewManagerConfigResult;
export const getRNSentryOnDrawReporter = function getRNSentryOnDrawReporter() {
  if (result) {
    return result;
  } else {
    if (!obj.isExpoGo()) {
      if (hasViewManagerConfigResult) {
        const ReactNative = arg1(dependencyMap[8]).ReactNativeLibraries.ReactNative;
        let prop;
        if (null !== ReactNative) {
          if (undefined !== ReactNative) {
            prop = ReactNative.requireNativeComponent;
          }
        }
        if (prop) {
          const ReactNative2 = arg1(dependencyMap[8]).ReactNativeLibraries.ReactNative;
          let result = ReactNative2.requireNativeComponent("RNSentryOnDrawReporter");
        }
      }
    }
    result = closure_11;
    const obj = arg1(dependencyMap[7]);
  }
};

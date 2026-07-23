// Module ID: 42
// Function ID: 1296
// Name: get
// Dependencies: [31, 43, 45, 107, 44, 111, 46]
// Exports: getWithFallback_DEPRECATED, setRuntimeConfigProvider, unstable_hasStaticViewConfig

// Module 42 (get)
import "result";

const require = arg1;
function get(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  importAll(43).register(arg0, () => {
    let native;
    let verify;
    let tmp;
    if (null != outer1_5) {
      tmp = outer1_5(RNBridgeless);
    }
    if (null == tmp) {
      const obj = { native: !RNBridgeless.RN$Bridgeless, verify: false };
      tmp = obj;
    }
    ({ native, verify } = tmp);
    if (native) {
      let viewConfig = outer1_2(outer1_4[2])(RNBridgeless);
      if (null == viewConfig) {
        viewConfig = callback(outer1_4[3]).createViewConfig(callback());
        const obj3 = callback(outer1_4[3]);
      }
      let viewConfig1 = viewConfig;
    } else {
      viewConfig1 = callback(outer1_4[3]).createViewConfig(callback());
      if (null == viewConfig1) {
        viewConfig1 = outer1_2(outer1_4[2])(RNBridgeless);
      }
      const obj2 = callback(outer1_4[3]);
    }
    outer1_2(outer1_4[4])(null != viewConfig1, "NativeComponentRegistry.get: both static and native view config are missing for native component \"%s\".", RNBridgeless);
    if (verify) {
      let tmp20 = viewConfig1;
      if (!native) {
        tmp20 = outer1_2(outer1_4[2])(RNBridgeless);
      }
      if (null == tmp20) {
        return viewConfig1;
      } else {
        let viewConfig2 = viewConfig1;
        if (native) {
          viewConfig2 = callback(outer1_4[3]).createViewConfig(callback());
          const obj4 = callback(outer1_4[3]);
        }
        const validateResult = outer1_3(outer1_4[5]).validate(RNBridgeless, tmp20, viewConfig2);
        if ("invalid" === validateResult.type) {
          const _console = console;
          console.error(outer1_3(outer1_4[5]).stringifyValidationResult(RNBridgeless, validateResult));
          const obj6 = outer1_3(outer1_4[5]);
        }
        const obj5 = outer1_3(outer1_4[5]);
      }
    }
    return viewConfig1;
  });
  return arg0;
}

export function setRuntimeConfigProvider(arg0) {
  if (undefined === closure_5) {
    closure_5 = arg0;
  }
}
export { get };
export const getWithFallback_DEPRECATED = function getWithFallback_DEPRECATED(arg0, arg1) {
  if (null == callback) {
    class FallbackNativeComponent {
      constructor(arg0) {
        return null;
      }
    }
    importDefault(44)(null == callback, "Unexpected invocation!");
    if (null != obj.getViewManagerConfig(arg0)) {
      get(arg0, arg1);
      return arg0;
    }
    obj = importDefault(46);
  } else if (null != callback(arg0)) {
    get(arg0, arg1);
    return arg0;
  }
  class FallbackNativeComponent {
    constructor(arg0) {
      return null;
    }
  }
  FallbackNativeComponent.displayName = "Fallback(" + arg0 + ")";
  return FallbackNativeComponent;
};
export const unstable_hasStaticViewConfig = function unstable_hasStaticViewConfig(arg0) {
  let tmp;
  if (null != callback) {
    tmp = callback(arg0);
  }
  if (null == tmp) {
    const obj = { native: true };
    tmp = obj;
  }
  return !tmp.native;
};

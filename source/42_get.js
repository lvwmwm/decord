// Module ID: 42
// Function ID: 1296
// Name: get
// Dependencies: []
// Exports: getWithFallback_DEPRECATED, setRuntimeConfigProvider, unstable_hasStaticViewConfig

// Module 42 (get)
function get(arg0, arg1) {
  const global = arg0;
  importAll(dependencyMap[1]).register(arg0, () => {
    let native;
    let verify;
    let tmp;
    if (null != callback3) {
      tmp = callback3(arg0);
    }
    if (null == tmp) {
      const obj = { native: !arg0.RN$Bridgeless, verify: false };
      tmp = obj;
    }
    ({ native, verify } = tmp);
    if (native) {
      let viewConfig = callback(closure_4[2])(arg0);
      if (null == viewConfig) {
        viewConfig = arg1(closure_4[3]).createViewConfig(arg1());
        const obj3 = arg1(closure_4[3]);
      }
      let viewConfig1 = viewConfig;
    } else {
      viewConfig1 = arg1(closure_4[3]).createViewConfig(arg1());
      if (null == viewConfig1) {
        viewConfig1 = callback(closure_4[2])(arg0);
      }
      const obj2 = arg1(closure_4[3]);
    }
    callback(closure_4[4])(null != viewConfig1, "NativeComponentRegistry.get: both static and native view config are missing for native component \"%s\".", arg0);
    if (verify) {
      let tmp20 = viewConfig1;
      if (!native) {
        tmp20 = callback(closure_4[2])(arg0);
      }
      if (null == tmp20) {
        return viewConfig1;
      } else {
        let viewConfig2 = viewConfig1;
        if (native) {
          viewConfig2 = arg1(closure_4[3]).createViewConfig(arg1());
          const obj4 = arg1(closure_4[3]);
        }
        const validateResult = callback2(closure_4[5]).validate(arg0, tmp20, viewConfig2);
        if ("invalid" === validateResult.type) {
          const _console = console;
          console.error(callback2(closure_4[5]).stringifyValidationResult(arg0, validateResult));
          const obj6 = callback2(closure_4[5]);
        }
        const obj5 = callback2(closure_4[5]);
      }
    }
    return viewConfig1;
  });
  return arg0;
}
importAll(dependencyMap[0]);

export function setRuntimeConfigProvider(arg0) {

}
export { get };
export const getWithFallback_DEPRECATED = function getWithFallback_DEPRECATED(arg0, arg1) {
  if (null == callback) {
    class FallbackNativeComponent {
      constructor(arg0) {
        return null;
      }
    }
    importDefault(dependencyMap[4])(null == callback, "Unexpected invocation!");
    if (null != obj.getViewManagerConfig(arg0)) {
      get(arg0, arg1);
      return arg0;
    }
    const obj = importDefault(dependencyMap[6]);
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

// Module ID: 65
// Function ID: 66
// Dependencies: [19, 66, 67, 103, 38, 107, 68]
// Exports: get, getWithFallback_DEPRECATED, setRuntimeConfigProvider, unstable_hasStaticViewConfig

// Module 65
import _modDef38 from "module_38" /* 38 */;
import customBubblingEventTypesAll from "customBubblingEventTypes" /* 66 */;
import getNativeComponentAttributesDefault from "getNativeComponentAttributes" /* 67 */;
import react from "react" /* 19 */;

const require = globalThis.__r;
let hasOwnProperty;


export function setRuntimeConfigProvider(arg0) {
  if (undefined === hasOwnProperty) {
    hasOwnProperty = arg0;
  }
}
export const get = function get(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  const obj = customBubblingEventTypesAll;
  obj.register(arg0, () => {
    let native;
    let tmp6;
    let verify;
    let viewConfig1;
    let tmpResult;
    if (closure_2_5 != null) {
      tmpResult = tmp(RNBridgeless);
    }
    if (tmpResult == null) {
      tmpResult = { native: !RNBridgeless.RN$Bridgeless, verify: false };
      const obj = { native: !RNBridgeless.RN$Bridgeless, verify: false };
    }
    ({ native, verify } = tmpResult);
    if (native) {
      let viewConfig = getNativeComponentAttributesDefault(RNBridgeless);
      if (viewConfig == null) {
        const obj3 = closure_1(dependencyMap[3]);
        viewConfig = obj3.createViewConfig(closure_1());
      }
      viewConfig1 = viewConfig;
      tmp6 = tmp12;
    } else {
      tmp6 = dependencyMap;
      const obj2 = closure_1(dependencyMap[3]);
      viewConfig1 = obj2.createViewConfig(closure_1());
      if (viewConfig1 == null) {
        viewConfig1 = require("getNativeComponentAttributes")(RNBridgeless);
      }
    }
    require("module_38")(null != viewConfig1, "NativeComponentRegistry.get: both static and native view config are missing for native component \"%s\".", RNBridgeless);
    const tmp17 = importDefault;
    if (verify) {
      let tmp20 = viewConfig1;
      if (!native) {
        tmp20 = tmp17(tmp6[2])(tmp18);
      }
      if (null == tmp20) {
        return viewConfig1;
      } else {
        let viewConfig2 = viewConfig1;
        if (native) {
          const obj4 = closure_1(tmp6[3]);
          viewConfig2 = obj4.createViewConfig(closure_1());
        }
        const obj5 = require("module_107");
        const validateResult = obj5.validate(RNBridgeless, tmp20, viewConfig2);
        const tmp24 = importAll;
        if ("invalid" === validateResult.type) {
          const _console = console;
          const tmp24Result = tmp24(tmp6[5]);
          error(tmp24Result.stringifyValidationResult(RNBridgeless, validateResult));
        }
      }
    }
    return viewConfig1;
  });
  return arg0;
};
export const getWithFallback_DEPRECATED = function getWithFallback_DEPRECATED(arg0, arg1) {
  let obj2;
  if (null == closure_5) {
    let tmp6 = dependencyMap;
    _modDef38(null == closure_5, "Unexpected invocation!");
    class FallbackNativeComponent {
      constructor(arg0) {
        return null;
      }
    }
    if (null != obj2.getViewManagerConfig(arg0)) {
      let closure_0 = arg0;
      let closure_1 = arg1;
      let obj3 = customBubblingEventTypesAll;
      obj3.register(arg0, () => {
        let native;
        let tmp6;
        let verify;
        let viewConfig1;
        let tmpResult;
        if (closure_2_5 != null) {
          tmpResult = tmp(RNBridgeless);
        }
        if (tmpResult == null) {
          tmpResult = { native: !RNBridgeless.RN$Bridgeless, verify: false };
          const obj = { native: !RNBridgeless.RN$Bridgeless, verify: false };
        }
        ({ native, verify } = tmpResult);
        if (native) {
          let viewConfig = getNativeComponentAttributesDefault(RNBridgeless);
          if (viewConfig == null) {
            const obj3 = closure_1(dependencyMap[3]);
            viewConfig = obj3.createViewConfig(closure_1());
          }
          viewConfig1 = viewConfig;
          tmp6 = tmp12;
        } else {
          tmp6 = dependencyMap;
          const obj2 = closure_1(dependencyMap[3]);
          viewConfig1 = obj2.createViewConfig(closure_1());
          if (viewConfig1 == null) {
            viewConfig1 = require("getNativeComponentAttributes")(RNBridgeless);
          }
        }
        require("module_38")(null != viewConfig1, "NativeComponentRegistry.get: both static and native view config are missing for native component \"%s\".", RNBridgeless);
        const tmp17 = importDefault;
        if (verify) {
          let tmp20 = viewConfig1;
          if (!native) {
            tmp20 = tmp17(tmp6[2])(tmp18);
          }
          if (null == tmp20) {
            return viewConfig1;
          } else {
            let viewConfig2 = viewConfig1;
            if (native) {
              const obj4 = closure_1(tmp6[3]);
              viewConfig2 = obj4.createViewConfig(closure_1());
            }
            const obj5 = require("module_107");
            const validateResult = obj5.validate(RNBridgeless, tmp20, viewConfig2);
            const tmp24 = importAll;
            if ("invalid" === validateResult.type) {
              const _console = console;
              const tmp24Result = tmp24(tmp6[5]);
              error(tmp24Result.stringifyValidationResult(RNBridgeless, validateResult));
            }
          }
        }
        return viewConfig1;
      });
      return arg0;
    }
  } else {
    const tmp = closure_5;
    if (null != closure_5(arg0)) {
      closure_0 = arg0;
      closure_1 = arg1;
      let obj = customBubblingEventTypesAll;
      obj.register(arg0, () => {
        let native;
        let tmp6;
        let verify;
        let viewConfig1;
        let tmpResult;
        if (closure_2_5 != null) {
          tmpResult = tmp(RNBridgeless);
        }
        if (tmpResult == null) {
          tmpResult = { native: !RNBridgeless.RN$Bridgeless, verify: false };
          const obj = { native: !RNBridgeless.RN$Bridgeless, verify: false };
        }
        ({ native, verify } = tmpResult);
        if (native) {
          let viewConfig = getNativeComponentAttributesDefault(RNBridgeless);
          if (viewConfig == null) {
            const obj3 = closure_1(dependencyMap[3]);
            viewConfig = obj3.createViewConfig(closure_1());
          }
          viewConfig1 = viewConfig;
          tmp6 = tmp12;
        } else {
          tmp6 = dependencyMap;
          const obj2 = closure_1(dependencyMap[3]);
          viewConfig1 = obj2.createViewConfig(closure_1());
          if (viewConfig1 == null) {
            viewConfig1 = require("getNativeComponentAttributes")(RNBridgeless);
          }
        }
        require("module_38")(null != viewConfig1, "NativeComponentRegistry.get: both static and native view config are missing for native component \"%s\".", RNBridgeless);
        const tmp17 = importDefault;
        if (verify) {
          let tmp20 = viewConfig1;
          if (!native) {
            tmp20 = tmp17(tmp6[2])(tmp18);
          }
          if (null == tmp20) {
            return viewConfig1;
          } else {
            let viewConfig2 = viewConfig1;
            if (native) {
              const obj4 = closure_1(tmp6[3]);
              viewConfig2 = obj4.createViewConfig(closure_1());
            }
            const obj5 = require("module_107");
            const validateResult = obj5.validate(RNBridgeless, tmp20, viewConfig2);
            const tmp24 = importAll;
            if ("invalid" === validateResult.type) {
              const _console = console;
              const tmp24Result = tmp24(tmp6[5]);
              error(tmp24Result.stringifyValidationResult(RNBridgeless, validateResult));
            }
          }
        }
        return viewConfig1;
      });
      class FallbackNativeComponent {
        constructor(arg0) {
          return null;
        }
      }
    }
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
  let obj;
  if (hasOwnProperty != null) {
    obj = tmp(arg0);
  }
  if (obj == null) {
    obj = { native: true };
  }
  return !obj.native;
};

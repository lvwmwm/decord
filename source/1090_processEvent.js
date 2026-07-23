// Module ID: 1090
// Function ID: 12504
// Name: processEvent
// Dependencies: [978]

// Module 1090 (processEvent)
const require = arg1;
const dependencyMap = arg6;
function processEvent(exception, originalException) {
  originalException = undefined;
  if (null != originalException) {
    originalException = originalException.originalException;
  }
  if (originalException) {
    let originalException1;
    if (null != originalException) {
      originalException1 = originalException.originalException;
    }
  }
  let obj = { turbo_module: require(978) /* isHermesEnabled */.isTurboModuleEnabled() };
  const obj2 = require(978) /* isHermesEnabled */;
  obj.fabric = require(978) /* isHermesEnabled */.isFabricEnabled();
  const obj3 = require(978) /* isHermesEnabled */;
  obj.react_native_version = require(978) /* isHermesEnabled */.getReactNativeVersion();
  const obj4 = require(978) /* isHermesEnabled */;
  obj.expo = require(978) /* isHermesEnabled */.isExpo();
  const obj5 = require(978) /* isHermesEnabled */;
  if (obj6.isHermesEnabled()) {
    obj.js_engine = "hermes";
    const hermesVersion = require(978) /* isHermesEnabled */.getHermesVersion();
    if (hermesVersion) {
      obj.hermes_version = hermesVersion;
    }
    exception = exception.exception;
    let items;
    if (null !== exception) {
      if (undefined !== exception) {
        items = exception.values;
      }
    }
    if (!items) {
      const threads = exception.threads;
      let values;
      if (null !== threads) {
        if (undefined !== threads) {
          values = threads.values;
        }
      }
      items = values;
    }
    if (!items) {
      items = [];
    }
    const iter = items[Symbol.iterator]();
    const nextResult = iter.next();
    let flag = false;
    while (iter !== undefined) {
      let stacktrace = nextResult.stacktrace;
      let tmp11 = stacktrace;
      let frames;
      if (null !== stacktrace) {
        let tmp13 = stacktrace;
        if (undefined !== tmp11) {
          let tmp14 = stacktrace;
          frames = tmp11.frames;
        }
      }
      items = frames;
      if (!frames) {
        items = [];
      }
      let tmp15 = items;
      let tmp16 = items;
      for (const item10063 of items) {
        if (undefined === item10063.platform) {
          let tmp18 = item10063;
          if (1 === tmp17.lineno) {
            nextResult.return();
            iter.return();
            flag = true;
            break label0;
          }
          obj.hermes_debug_info = !flag;
          let tmp19 = __exception;
          nextResult.return();
          throw tmp19;
        }
        continue;
      }
      continue;
    }
    const obj7 = require(978) /* isHermesEnabled */;
  } else {
    let jsEngine;
    if (null != tmp2) {
      jsEngine = tmp2.jsEngine;
    }
    if (jsEngine) {
      obj.js_engine = tmp2.jsEngine;
    }
    if ("hermes" === obj.js_engine) {
      const _Object = Object;
      obj = { hermes: true };
      exception.tags = Object.assign(obj, exception.tags);
    }
    let componentStack;
    if (null != tmp2) {
      componentStack = tmp2.componentStack;
    }
    if (componentStack) {
      obj.component_stack = tmp2.componentStack;
    }
    const expoGoVersion = require(978) /* isHermesEnabled */.getExpoGoVersion();
    if (expoGoVersion) {
      obj.expo_go_version = expoGoVersion;
    }
    const obj10 = require(978) /* isHermesEnabled */;
    const expoSdkVersion = require(978) /* isHermesEnabled */.getExpoSdkVersion();
    if (expoSdkVersion) {
      obj.expo_sdk_version = expoSdkVersion;
    }
    const _Object2 = Object;
    obj = {};
    obj.react_native_context = obj;
    exception.contexts = Object.assign(obj, exception.contexts);
    return exception;
  }
}
arg5.reactNativeInfoIntegration = function reactNativeInfoIntegration() {
  return {
    name: "ReactNativeInfo",
    setupOnce() {

    },
    processEvent
  };
};

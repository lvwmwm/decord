// Module ID: 973
// Function ID: 10478
// Name: reactNativeVersion
// Dependencies: [27, 184, 974, 975, 170, 126]

// Module 973 (reactNativeVersion)
import get_ActivityIndicator from "get ActivityIndicator";

let AppRegistry;
let Platform;
let TurboModuleRegistry;
obj = { Devtools: obj, Promise: require("finally"), Utilities: obj };
obj = {
  parseErrorStack(defaultResult1) {
    const obj = require(184) /* parseErrorStack */;
    if (obj.default) {
      if ("function" === typeof obj.default) {
        let defaultResult = obj.default(defaultResult1);
      }
      return defaultResult;
    }
    defaultResult = obj(defaultResult1);
  },
  symbolicateStackTrace(defaultResult1, defaultResult2) {
    const obj = require(974) /* _symbolicateStackTrace */;
    if (obj.default) {
      if ("function" === typeof obj.default) {
        let defaultResult = obj.default(defaultResult1, defaultResult2);
      }
      return defaultResult;
    }
    defaultResult = obj(defaultResult1, defaultResult2);
  },
  getDevServer() {
    const obj = require(975) /* getDevServer */;
    if (obj.default) {
      if ("function" === typeof obj.default) {
        let defaultResult = obj.default();
      }
      return defaultResult;
    }
    defaultResult = obj();
  }
};
({ AppRegistry, Platform, TurboModuleRegistry } = get_ActivityIndicator);
obj = {
  polyfillGlobal(arg0, arg1) {
    require(126) /* polyfillObjectProperty */.polyfillGlobal(arg0, arg1);
  }
};
const obj1 = {};
const constants = Platform.constants;
let reactNativeVersion;
if (null !== constants) {
  if (undefined !== constants) {
    reactNativeVersion = constants.reactNativeVersion;
  }
}
obj1.version = reactNativeVersion;
obj.ReactNativeVersion = obj1;
obj.TurboModuleRegistry = TurboModuleRegistry;
obj.AppRegistry = AppRegistry;
obj.ReactNative = {
  requireNativeComponent(arg0) {
    return require(27) /* get ActivityIndicator */.requireNativeComponent(arg0);
  }
};

export const ReactNativeLibraries = obj;

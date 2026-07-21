// Module ID: 973
// Function ID: 10476
// Name: reactNativeVersion
// Dependencies: []

// Module 973 (reactNativeVersion)
let AppRegistry;
let Platform;
let TurboModuleRegistry;
const _module = require(dependencyMap[0]);
let obj = { Devtools: obj, Promise: require(dependencyMap[4]), Utilities: obj };
obj = {
  parseErrorStack(defaultResult1) {
    const obj = require(dependencyMap[1]);
    if (obj.default) {
      if ("function" === typeof obj.default) {
        let defaultResult = obj.default(defaultResult1);
      }
      return defaultResult;
    }
    defaultResult = obj(defaultResult1);
  },
  symbolicateStackTrace(defaultResult1, defaultResult2) {
    const obj = require(dependencyMap[2]);
    if (obj.default) {
      if ("function" === typeof obj.default) {
        let defaultResult = obj.default(defaultResult1, defaultResult2);
      }
      return defaultResult;
    }
    defaultResult = obj(defaultResult1, defaultResult2);
  },
  getDevServer() {
    const obj = require(dependencyMap[3]);
    if (obj.default) {
      if ("function" === typeof obj.default) {
        let defaultResult = obj.default();
      }
      return defaultResult;
    }
    defaultResult = obj();
  }
};
({ AppRegistry, Platform, TurboModuleRegistry } = _module);
obj = {
  polyfillGlobal(arg0, arg1) {
    require(dependencyMap[5]).polyfillGlobal(arg0, arg1);
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
    return require(dependencyMap[0]).requireNativeComponent(arg0);
  }
};

export const ReactNativeLibraries = obj;

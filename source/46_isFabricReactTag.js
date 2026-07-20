// Module ID: 46
// Function ID: 1314
// Name: isFabricReactTag
// Dependencies: []

// Module 46 (isFabricReactTag)
function isFabricReactTag(arg0) {
  return arg0 % 2 === 0;
}
if (true === global.RN$Bridgeless) {
  let _default = require(dependencyMap[0]).default;
} else {
  _default = require(dependencyMap[1]).default;
}

export default Object.assign({}, _default, {
  measure(arg0, arg1) {
    if (isFabricReactTag(arg0)) {
      const tmp5 = importDefault(dependencyMap[2]);
      const tmp5Result = tmp5(require(dependencyMap[3]).getFabricUIManager());
      const result = tmp5Result.findShadowNodeByTag_DEPRECATED(arg0);
      if (result) {
        tmp5Result.measure(result, arg1);
      } else {
        const _console = console;
        const _HermesInternal = HermesInternal;
        console.warn("measure cannot find view with tag #" + arg0);
        arg1();
      }
      const obj = require(dependencyMap[3]);
    } else {
      _default.measure(arg0, arg1);
    }
  },
  measureInWindow(arg0, arg1) {
    if (isFabricReactTag(arg0)) {
      const tmp5 = importDefault(dependencyMap[2]);
      const tmp5Result = tmp5(require(dependencyMap[3]).getFabricUIManager());
      const result = tmp5Result.findShadowNodeByTag_DEPRECATED(arg0);
      if (result) {
        tmp5Result.measureInWindow(result, arg1);
      } else {
        const _console = console;
        const _HermesInternal = HermesInternal;
        console.warn("measure cannot find view with tag #" + arg0);
        arg1();
      }
      const obj = require(dependencyMap[3]);
    } else {
      _default.measureInWindow(arg0, arg1);
    }
  },
  measureLayout(arg0, arg1, arg2, arg3) {
    if (isFabricReactTag(arg0)) {
      const tmp10 = importDefault(dependencyMap[2]);
      const tmp10Result = tmp10(require(dependencyMap[3]).getFabricUIManager());
      const result = tmp10Result.findShadowNodeByTag_DEPRECATED(arg0);
      const result1 = tmp10Result.findShadowNodeByTag_DEPRECATED(arg1);
      if (result) {
        if (result1) {
          tmp10Result.measureLayout(result, result1, arg2, arg3);
        }
      }
    } else {
      _default.measureLayout(arg0, arg1, arg2, arg3);
    }
  },
  measureLayoutRelativeToParent(arg0, arg1, arg2) {
    const require = arg2;
    if (isFabricReactTag(arg0)) {
      const _console = console;
      console.warn("RCTUIManager.measureLayoutRelativeToParent method is deprecated and it will not be implemented in newer versions of RN (Fabric) - T47686450");
      const tmp8 = importDefault(dependencyMap[2]);
      const tmp8Result = tmp8(require(dependencyMap[3]).getFabricUIManager());
      const result = tmp8Result.findShadowNodeByTag_DEPRECATED(arg0);
      if (result) {
        tmp8Result.measure(result, (arg0, arg1, arg2, arg3, arg4, arg5) => {
          arg2(arg0, arg1, arg2, arg3);
        });
      }
      const obj = require(dependencyMap[3]);
    } else {
      const result1 = _default.measureLayoutRelativeToParent(arg0, arg1, arg2);
    }
  },
  dispatchViewManagerCommand(arg0, arg1, items) {
    if ("number" !== typeof arg0) {
      const _Error = Error;
      const error = new Error("dispatchViewManagerCommand: found null reactTag");
      throw error;
    } else if (isFabricReactTag(arg0)) {
      const tmp5 = importDefault(dependencyMap[2]);
      const tmp5Result = tmp5(require(dependencyMap[3]).getFabricUIManager());
      const result = tmp5Result.findShadowNodeByTag_DEPRECATED(arg0);
      if (result) {
        const _HermesInternal = HermesInternal;
        tmp5Result.dispatchCommand(result, "" + arg1, items);
      }
      const obj = require(dependencyMap[3]);
    } else {
      const result1 = _default.dispatchViewManagerCommand(arg0, arg1, items);
    }
  }
});

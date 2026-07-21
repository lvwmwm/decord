// Module ID: 348
// Function ID: 5178
// Name: set
// Dependencies: []

// Module 348 (set)
if (null != importDefault(dependencyMap[0])) {
  let importDefaultResult = importDefault(dependencyMap[0]);
} else {
  importDefaultResult = importDefault(dependencyMap[1]);
}
let closure_5 = 1;
let closure_6 = 1;
const set = new Set();
let closure_8 = false;
let closure_9 = [];
let closure_10 = [];
let prop;
if (null != importDefaultResult) {
  prop = importDefaultResult.queueAndExecuteBatchedOperations;
}
let result = null != prop;
if (result) {
  result = importAll(dependencyMap[2]).animatedShouldUseSingleOp();
  const importAllResult = importAll(dependencyMap[2]);
}
let closure_12 = null;
let closure_13 = {};
let closure_14 = {};
let closure_15 = null;
let closure_16 = null;
let result1 = importAll(dependencyMap[2]).animatedShouldSignalBatch();
if (!result1) {
  result1 = importAll(dependencyMap[2]).cxxNativeAnimatedEnabled();
  const importAllResult2 = importAll(dependencyMap[2]);
}
let closure_18 = function createNativeOperations() {
  const items = ["<string:1554778658>", "<string:3212272570>", "<string:421773180>", "<string:139773281>", "<string:2198351846>", "<string:1641053163>", "<string:1520194279>", "<string:3780286422>", "<string:1634839973>", "<string:3991294699>", "<string:3344041221>", "<string:2204221743>", "<string:839067987>", "<string:1630540692>", "<string:4159722215>", "<string:425802501>", "<string:3786280530>", "<string:4269883813>", "<string:3880845313>", "<string:2880520666>", "<string:1582366721>"];
  const importDefault = items;
  const obj = {};
  const importAll = obj;
  if (result) {
    let num2 = 0;
    let closure_2 = 0;
    if (0 < items.length) {
      do {
        let tmp2 = function _loop() {
          let closure_0 = closure_2 + 1;
          obj[closure_0[closure_2]] = () => {
            const length = arguments.length;
            const array = new Array(length);
            for (let num = 0; num < length; num = num + 1) {
              array[num] = arguments[num];
            }
            const push = navigation.push;
            const items = [closure_0];
            push.apply(navigation, items.concat(array));
            if (closure_17) {
              const _clearImmediate = clearImmediate;
              clearImmediate(immediate);
              const _setImmediate = setImmediate;
              const immediate = setImmediate(flushQueue.flushQueue);
            }
          };
        }();
        num2 = num2 + 1;
        closure_2 = num2;
      } while (num2 < length2);
    }
  } else {
    let num = 0;
    let closure_3 = 0;
    if (0 < items.length) {
      do {
        let tmp = function _loop2() {
          const items = tmp;
          obj[items[closure_3]] = () => {
            const length = arguments.length;
            const array = new Array(length);
            for (let num = 0; num < length; num = num + 1) {
              array[num] = arguments[num];
            }
            const obj = array(closure_2[3])(closure_4)[closure_0];
            if (!closure_8) {
              if (0 === arr.length) {
                if (closure_17) {
                  let arr = arr.push(() => obj.apply(undefined, array));
                  const _clearImmediate = clearImmediate;
                  clearImmediate(immediate);
                  const _setImmediate = setImmediate;
                  const immediate = setImmediate(flushQueue.flushQueue);
                } else {
                  obj.apply(undefined, array);
                }
              }
            }
            arr = arr.push(() => obj.apply(undefined, array));
          };
        }();
        num = num + 1;
        closure_3 = num;
      } while (num < length);
    }
  }
  return obj;
}();
let obj = {
  getValue: result ? (arg0, arg1) => {
    if (arg1) {
      closure_13[arg0] = arg1;
    }
    const value = store.getValue(arg0);
  } : (arg0, arg1) => {
    const value = store.getValue(arg0, arg1);
  },
  setWaitingForIdentifier(combined) {
    if (!result1) {
      set.add(combined);
      let closure_8 = true;
      const obj = importAll(dependencyMap[2]);
      if (tmp6) {
        const _clearImmediate = clearImmediate;
        clearImmediate(closure_12);
      }
      const tmp6 = importAll(dependencyMap[2]).animatedShouldDebounceQueueFlush() && closure_12;
    }
  },
  unsetWaitingForIdentifier(combined) {
    if (!result1) {
      set.delete(combined);
      if (0 === set.size) {
        let closure_8 = false;
        obj.disableQueue();
      }
    }
  },
  disableQueue() {
    importDefault(dependencyMap[4])(importDefaultResult, "Native animated module is not available");
    const obj = importAll(dependencyMap[2]);
    if (obj.animatedShouldDebounceQueueFlush()) {
      const _clearImmediate = clearImmediate;
      clearImmediate(immediate);
      const _setImmediate = setImmediate;
      const immediate = setImmediate(obj.flushQueue);
    } else {
      obj.flushQueue();
    }
  },
  flushQueue: result ? () => {
    importDefault(dependencyMap[4])(importDefaultResult, "Native animated module is not available");
    let closure_12 = null;
    if (0 !== length.length) {
      function ensureGlobalEventEmitterListeners() {
        let closure_15 = callback(closure_2[5]).addListener("onNativeAnimatedModuleGetValue", (value) => {
          if (closure_13[value.tag]) {
            tmp(value.value);
            delete r0[r1];
          }
        });
        const obj = callback(closure_2[5]);
        let closure_16 = callback(closure_2[5]).addListener("onNativeAnimatedModuleAnimationFinished", (arg0) => {
          let tmp = arg0;
          if (!Array.isArray(arg0)) {
            const items = [arg0];
            tmp = items;
          }
          for (const item10013 of tmp) {
            let animationId = item10013.animationId;
            let tmp3 = animationId;
            let tmp4 = closure_14;
            let tmp5 = closure_14[animationId];
            if (tmp5) {
              let tmp7 = tmp5;
              let tmp8 = item10013;
              let tmp6Result = tmp6(tmp2);
              let tmp10 = closure_14;
              let tmp11 = animationId;
              delete r8[r7];
            }
          }
        });
      }();
      let tmp4 = null == importDefaultResult;
      if (!tmp4) {
        tmp4 = null == importDefaultResult.queueAndExecuteBatchedOperations;
      }
      if (!tmp4) {
        const result = importDefaultResult.queueAndExecuteBatchedOperations(length);
      }
      length.length = 0;
    }
  } : () => {
    importDefault(dependencyMap[4])(importDefaultResult, "Native animated module is not available");
    let closure_12 = null;
    if (0 !== closure_9.length) {
      let tmp3 = null == importDefaultResult;
      if (!tmp3) {
        tmp3 = null == importDefaultResult.startOperationBatch;
      }
      if (!tmp3) {
        importDefaultResult.startOperationBatch();
      }
      for (let num = 0; num < length; num = num + 1) {
        let tmp7 = closure_9;
        let tmp8 = closure_9[num]();
      }
      closure_9.length = 0;
      let tmp11 = null == importDefaultResult;
      if (!tmp11) {
        tmp11 = null == importDefaultResult.finishOperationBatch;
      }
      if (!tmp11) {
        importDefaultResult.finishOperationBatch();
      }
      const length = closure_9.length;
    }
  },
  createAnimatedNode(newNodeTag, __getNativeConfigResult) {
    const animatedNode = store.createAnimatedNode(newNodeTag, __getNativeConfigResult);
  },
  updateAnimatedNodeConfig(arg0, self) {
    if (null != store.updateAnimatedNodeConfig) {
      const result = store.updateAnimatedNodeConfig(arg0, self);
    }
  },
  startListeningToAnimatedNodeValue(__getNativeTagResult) {
    const result = store.startListeningToAnimatedNodeValue(__getNativeTagResult);
  },
  stopListeningToAnimatedNodeValue(__getNativeTagResult) {
    const result = store.stopListeningToAnimatedNodeValue(__getNativeTagResult);
  },
  connectAnimatedNodes(arg0, arg1) {
    store.connectAnimatedNodes(arg0, arg1);
  },
  disconnectAnimatedNodes(arg0, arg1) {
    const result = store.disconnectAnimatedNodes(arg0, arg1);
  },
  startAnimatingNode: result ? (arg0, arg1, arg2, arg3) => {
    if (arg3) {
      closure_14[arg0] = arg3;
    }
    store.startAnimatingNode(arg0, arg1, arg2);
  } : (arg0, arg1, arg2, arg3) => {
    store.startAnimatingNode(arg0, arg1, arg2, arg3);
  },
  stopAnimation(arg0) {
    store.stopAnimation(arg0);
  },
  setAnimatedNodeValue(self, _startingValue) {
    store.setAnimatedNodeValue(self, _startingValue);
  },
  setAnimatedNodeOffset(self, _offset) {
    const result = store.setAnimatedNodeOffset(self, _offset);
  },
  flattenAnimatedNodeOffset(self) {
    const result = store.flattenAnimatedNodeOffset(self);
  },
  extractAnimatedNodeOffset(self) {
    const result = store.extractAnimatedNodeOffset(self);
  },
  connectAnimatedNodeToView(self, findNodeHandleResult) {
    const result = store.connectAnimatedNodeToView(self, findNodeHandleResult);
  },
  disconnectAnimatedNodeFromView(self, connectedViewTag) {
    const result = store.disconnectAnimatedNodeFromView(self, connectedViewTag);
  },
  restoreDefaultValues(self) {
    if (null != store.restoreDefaultValues) {
      store.restoreDefaultValues(self);
    }
  },
  dropAnimatedNode(__nativeTag) {
    store.dropAnimatedNode(__nativeTag);
  },
  addAnimatedEventToView(findNodeHandleResult, arg1, arg2) {
    const result = store.addAnimatedEventToView(findNodeHandleResult, arg1, arg2);
  },
  removeAnimatedEventFromView(closure_4, closure_0, animatedValueTag) {
    const result = store.removeAnimatedEventFromView(closure_4, closure_0, animatedValueTag);
  }
};
let closure_20 = false;
obj = {
  API: obj,
  generateNewNodeTag() {
    let closure_5 = tmp + 1;
    return +closure_5;
  },
  generateNewAnimationId() {
    let closure_6 = tmp + 1;
    return +closure_6;
  },
  assertNativeAnimatedModule() {
    importDefault(dependencyMap[4])(importDefaultResult, "Native animated module is not available");
  },
  shouldUseNativeDriver(useNativeDriver) {
    if (null == useNativeDriver.useNativeDriver) {
      const _console = console;
      console.warn("Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`");
    }
    if (true === useNativeDriver.useNativeDriver) {
      if (!importDefaultResult) {
        let flag = false;
        if (!closure_20) {
          const _console2 = console;
          console.warn("Animated: `useNativeDriver` is not supported because the native animated module is missing. Falling back to JS-based animation. To resolve this, add `RCTAnimation` module to this app, or remove `useNativeDriver`. Make sure to run `bundle exec pod install` first. Read more about autolinking: https://github.com/react-native-community/cli/blob/master/docs/autolinking.md");
          closure_20 = true;
          flag = false;
        }
      }
      return flag;
    }
    flag = useNativeDriver.useNativeDriver || false;
  },
  shouldSignalBatch: result1,
  transformDataType(str) {
    if ("string" !== typeof str) {
      return str;
    } else if (str.endsWith("deg")) {
      const _parseFloat2 = parseFloat;
      const _Math = Math;
      let result = (parseFloat(str) || 0) * Math.PI / 180;
      const tmp5 = parseFloat(str) || 0;
    } else {
      result = str;
      if (str.endsWith("rad")) {
        const _parseFloat = parseFloat;
        result = parseFloat(str) || 0;
        const tmp3 = parseFloat(str) || 0;
      }
    }
  }
};
Object.defineProperty(obj, "nativeEventEmitter", {
  get: () => {
    if (!tmp3) {
      let tmp3 = importDefault(dependencyMap[6]);
      const prototype = tmp3.prototype;
      tmp3 = new tmp3(null);
    }
    return tmp3;
  },
  set: undefined
});

export default obj;

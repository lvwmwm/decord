// Module ID: 348
// Function ID: 5178
// Name: set
// Dependencies: [349, 352, 79, 48, 44, 101, 209]

// Module 348 (set)
if (null != require("shouldUseTurboAnimatedModule")) {
  let importDefaultResult = require("shouldUseTurboAnimatedModule");
} else {
  importDefaultResult = require("shouldUseTurboAnimatedModule");
}
let c5 = 1;
let c6 = 1;
const set = new Set();
let c8 = false;
let closure_9 = [];
let closure_10 = [];
let prop;
if (null != importDefaultResult) {
  prop = importDefaultResult.queueAndExecuteBatchedOperations;
}
let result = null != prop;
if (result) {
  result = require("javaScriptFlagGetter").animatedShouldUseSingleOp();
  const importAllResult = require("javaScriptFlagGetter");
}
let c12 = null;
let closure_13 = {};
let closure_14 = {};
let c15 = null;
let c16 = null;
let result1 = require("javaScriptFlagGetter").animatedShouldSignalBatch();
if (!result1) {
  result1 = require("javaScriptFlagGetter").cxxNativeAnimatedEnabled();
  const importAllResult2 = require("javaScriptFlagGetter");
}
let closure_18 = (function createNativeOperations() {
  let items = ["createAnimatedNode", "updateAnimatedNodeConfig", "getValue", "startListeningToAnimatedNodeValue", "stopListeningToAnimatedNodeValue", "connectAnimatedNodes", "disconnectAnimatedNodes", "startAnimatingNode", "stopAnimation", "setAnimatedNodeValue", "setAnimatedNodeOffset", "flattenAnimatedNodeOffset", "extractAnimatedNodeOffset", "connectAnimatedNodeToView", "disconnectAnimatedNodeFromView", "restoreDefaultValues", "dropAnimatedNode", "addAnimatedEventToView", "removeAnimatedEventFromView", "addListener", "removeListener"];
  let obj = {};
  if (closure_11) {
    let num2 = 0;
    let c2 = 0;
    if (0 < items.length) {
      do {
        let tmp2 = (function _loop() {
          let items = c2 + 1;
          obj[items[c2]] = () => {
            const length = arguments.length;
            const array = new Array(length);
            for (let num = 0; num < length; num = num + 1) {
              array[num] = arguments[num];
            }
            const push = outer2_10.push;
            const items = [closure_0];
            push.apply(outer2_10, items.concat(array));
            if (outer2_17) {
              const _clearImmediate = clearImmediate;
              clearImmediate(outer2_12);
              const _setImmediate = setImmediate;
              outer2_12 = setImmediate(outer2_19.flushQueue);
            }
          };
        })();
        num2 = num2 + 1;
        c2 = num2;
      } while (num2 < length2);
    }
  } else {
    let num = 0;
    let c3 = 0;
    if (0 < items.length) {
      do {
        let tmp = (function _loop2() {
          const items = tmp;
          obj[items[c3]] = () => {
            const length = arguments.length;
            const array = new Array(length);
            for (let num = 0; num < length; num = num + 1) {
              array[num] = arguments[num];
            }
            const obj = items(table[3])(outer2_4)[array];
            if (!outer2_8) {
              if (0 === outer2_9.length) {
                if (outer2_17) {
                  outer2_9.push(() => obj.apply(undefined, array));
                  const _clearImmediate = clearImmediate;
                  clearImmediate(outer2_12);
                  const _setImmediate = setImmediate;
                  outer2_12 = setImmediate(outer2_19.flushQueue);
                } else {
                  obj.apply(undefined, array);
                }
              }
            }
            outer2_9.push(() => obj.apply(undefined, array));
          };
        })();
        num = num + 1;
        c3 = num;
      } while (num < length);
    }
  }
  return obj;
})();
let obj = {
  getValue: result ? ((arg0, arg1) => {
    if (arg1) {
      closure_13[arg0] = arg1;
    }
    const value = store.getValue(arg0);
  }) : ((arg0, arg1) => {
    const value = store.getValue(arg0, arg1);
  }),
  setWaitingForIdentifier(combined) {
    if (!result1) {
      set.add(combined);
      let c8 = true;
      const obj = importAll(79);
      if (tmp6) {
        const _clearImmediate = clearImmediate;
        clearImmediate(c12);
      }
      tmp6 = importAll(79).animatedShouldDebounceQueueFlush() && c12;
    }
  },
  unsetWaitingForIdentifier(combined) {
    if (!result1) {
      set.delete(combined);
      if (0 === set.size) {
        let c8 = false;
        obj.disableQueue();
      }
    }
  },
  disableQueue() {
    importDefault(44)(closure_4, "Native animated module is not available");
    const obj = importAll(79);
    if (obj.animatedShouldDebounceQueueFlush()) {
      const _clearImmediate = clearImmediate;
      clearImmediate(immediate);
      const _setImmediate = setImmediate;
      immediate = setImmediate(obj.flushQueue);
    } else {
      obj.flushQueue();
    }
  },
  flushQueue: result ? (() => {
    importDefault(44)(importDefaultResult, "Native animated module is not available");
    let c12 = null;
    if (0 !== length.length) {
      (function ensureGlobalEventEmitterListeners() {
        const outer1_15 = outer1_0(outer1_2[5]).addListener("onNativeAnimatedModuleGetValue", (value) => {
          if (outer2_13[value.tag]) {
            tmp3(value.value);
            delete tmp[tmp2];
          }
        });
        const obj = outer1_0(outer1_2[5]);
        const outer1_16 = outer1_0(outer1_2[5]).addListener("onNativeAnimatedModuleAnimationFinished", (arg0) => {
          let tmp3 = arg0;
          if (!Array.isArray(arg0)) {
            const items = [arg0];
            tmp3 = items;
          }
          for (const item10013 of tmp3) {
            let animationId = item10013.animationId;
            let tmp5 = animationId;
            let tmp6 = outer2_14;
            let tmp7 = outer2_14[animationId];
            if (tmp7) {
              let tmp9 = tmp7;
              let tmp10 = item10013;
              let tmp8Result = tmp8(tmp4);
              let tmp12 = outer2_14;
              let tmp13 = animationId;
              delete tmp2[tmp];
            }
            continue;
          }
        });
      })();
      let tmp4 = null == importDefaultResult;
      if (!tmp4) {
        tmp4 = null == importDefaultResult.queueAndExecuteBatchedOperations;
      }
      if (!tmp4) {
        const result = importDefaultResult.queueAndExecuteBatchedOperations(length);
      }
      length.length = 0;
    }
  }) : (() => {
    importDefault(44)(importDefaultResult, "Native animated module is not available");
    let c12 = null;
    if (0 !== lib.length) {
      let tmp3 = null == importDefaultResult;
      if (!tmp3) {
        tmp3 = null == importDefaultResult.startOperationBatch;
      }
      if (!tmp3) {
        importDefaultResult.startOperationBatch();
      }
      for (let num = 0; num < length; num = num + 1) {
        let tmp7 = lib;
        let tmp8 = lib[num]();
      }
      lib.length = 0;
      let tmp11 = null == importDefaultResult;
      if (!tmp11) {
        tmp11 = null == importDefaultResult.finishOperationBatch;
      }
      if (!tmp11) {
        importDefaultResult.finishOperationBatch();
      }
      length = lib.length;
    }
  }),
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
  stopListeningToAnimatedNodeValue(closure_1) {
    const result = store.stopListeningToAnimatedNodeValue(closure_1);
  },
  connectAnimatedNodes(arg0, arg1) {
    store.connectAnimatedNodes(arg0, arg1);
  },
  disconnectAnimatedNodes(arg0, arg1) {
    const result = store.disconnectAnimatedNodes(arg0, arg1);
  },
  startAnimatingNode: result ? ((arg0, arg1, arg2, arg3) => {
    if (arg3) {
      closure_14[arg0] = arg3;
    }
    store.startAnimatingNode(arg0, arg1, arg2);
  }) : ((arg0, arg1, arg2, arg3) => {
    store.startAnimatingNode(arg0, arg1, arg2, arg3);
  }),
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
  addAnimatedEventToView(closure_4, closure_0, arg2) {
    const result = store.addAnimatedEventToView(closure_4, closure_0, arg2);
  },
  removeAnimatedEventFromView(outer1_4, outer1_0, animatedValueTag) {
    const result = store.removeAnimatedEventFromView(outer1_4, outer1_0, animatedValueTag);
  }
};
let c20 = false;
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
    importDefault(44)(closure_4, "Native animated module is not available");
  },
  shouldUseNativeDriver(useNativeDriver) {
    if (null == useNativeDriver.useNativeDriver) {
      const _console = console;
      console.warn("Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`");
    }
    if (true === useNativeDriver.useNativeDriver) {
      if (!closure_4) {
        let flag = false;
        if (!c20) {
          const _console2 = console;
          console.warn("Animated: `useNativeDriver` is not supported because the native animated module is missing. Falling back to JS-based animation. To resolve this, add `RCTAnimation` module to this app, or remove `useNativeDriver`. Make sure to run `bundle exec pod install` first. Read more about autolinking: https://github.com/react-native-community/cli/blob/master/docs/autolinking.md");
          c20 = true;
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
    if (!closure_3) {
      let tmp3 = importDefault(209);
      const prototype = tmp3.prototype;
      tmp3 = new tmp3(null);
      closure_3 = tmp3;
    }
    return closure_3;
  },
  set: undefined
});

export default obj;

// Module ID: 5508
// Function ID: 5509
// Dependencies: [19, 5442, 5424, 5509, 5491, 5466, 5451, 5423]
// Exports: useGesture

// Module 5508
import handlerIDToTag from "handlerIDToTag" /* 5423 */;
import selectProperties from "selectProperties" /* 5451 */;
import NativeProxy2 from "NativeProxy" /* 5466 */;
import _mod5491 from "module_5491" /* 5491 */;
import react from "react" /* 19 */;

const require = globalThis.__r;
let _require, c0, dependencyMap;

let c2;
let c3;
({ useEffect: c2, useMemo: c3 } = react);

export function useGesture(Fling, clonedAndRemappedConfig) {
  let config;
  let jsEventHandler;
  let type;
  _require = Fling;
  dependencyMap = clonedAndRemappedConfig;
  let tmp = jsEventHandler;
  const tmp2 = jsEventHandler(() => {
    const obj = type(config[1]);
    return obj.getNextHandlerTag();
  }, []);
  const handlerTag = tmp2;
  if (clonedAndRemappedConfig.disableReanimated !== jsEventHandler(() => config.disableReanimated, [])) {
    const _Error2 = Error;
    let obj2 = require("tagMessage");
    const self3 = this;
    const self4 = this;
    const error = new Error(obj2.tagMessage("The \"disableReanimated\" property must not be changed after the handler is created."));
    throw error;
  } else {
    let obj3 = require("module_5509");
    const gestureCallbacks = obj3.useGestureCallbacks(tmp2, clonedAndRemappedConfig);
    jsEventHandler = gestureCallbacks.jsEventHandler;
    const reanimatedEventHandler = gestureCallbacks.reanimatedEventHandler;
    const animatedEventHandler = gestureCallbacks.animatedEventHandler;
    const tmp16 = _require;
    if (clonedAndRemappedConfig.shouldUseReanimatedDetector) {
      if (!reanimatedEventHandler) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const tmp16Result = tmp16(5424);
        const error1 = new Error(tmp16Result.tagMessage("Failed to create reanimated event handlers."));
        throw error1;
      }
    }
    const items = [tmp2, , , ];
    ({ simultaneousWith: arr[1], requireToFail: arr[2], block: arr[3] } = clonedAndRemappedConfig);
    const tmpResult = tmp(() => {
      const obj = _mod5491;
      const obj2 = { simultaneousWith: config.simultaneousWith, requireToFail: config.requireToFail, block: config.block };
      return obj.prepareRelations(obj2, handlerTag);
    }, items);
    const gestureRelations = tmpResult;
    const items1 = [tmp2, Fling, clonedAndRemappedConfig, jsEventHandler, reanimatedEventHandler, animatedEventHandler, tmpResult];
    const tmpResult2 = tmp(() => {
      let obj2;
      const obj = { handlerTag, type, config, detectorCallbacks: obj2, gestureRelations };
      obj2 = { jsEventHandler, animatedEventHandler, reanimatedEventHandler };
      Object.defineProperties(obj, { type: { enumerable: false }, config: { enumerable: false }, detectorCallbacks: { enumerable: false }, gestureRelations: { enumerable: false } });
      return obj;
    }, items1);
    let closure_7 = tmpResult2;
    const items2 = [Fling, tmp2];
    handlerTag(() => {
      let NativeProxy = NativeProxy2.NativeProxy;
      NativeProxy.createGestureHandler(type, handlerTag, {});
      let obj = selectProperties;
      let result = obj.scheduleFlushOperations();
      return () => {
        const NativeProxy = type(config[5]).NativeProxy;
        NativeProxy.dropGestureHandler(handlerTag);
        const obj = type(config[6]);
        const result = obj.scheduleFlushOperations();
      };
    }, items2);
    const items3 = [tmp2, clonedAndRemappedConfig, Fling, tmpResult2];
    handlerTag(() => {
      let obj = type(config[4]);
      const result = obj.prepareConfigForNativeSide(c0, config);
      const NativeProxy = type(config[5]).NativeProxy;
      const result1 = NativeProxy.setGestureHandlerConfig(closure_2, result);
      c0 = false;
      let obj2 = type(config[6]);
      const result2 = obj2.scheduleOperationToBeFlushed(() => {
        const tmp = c0;
        if (!tmp) {
          const obj = _mod5491;
          obj.bindSharedValues(config, handlerTag);
        }
      });
      const obj3 = type(config[6]);
      const result3 = obj3.scheduleFlushOperations();
      const obj4 = type(config[7]);
      obj4.registerGesture(closure_2, closure_7);
      return () => {
        c0 = true;
        const obj = _mod5491;
        obj.unbindSharedValues(config, handlerTag);
        const obj2 = handlerIDToTag;
        obj2.unregisterGesture(handlerTag);
      };
    }, items3);
    return tmpResult2;
  }
}

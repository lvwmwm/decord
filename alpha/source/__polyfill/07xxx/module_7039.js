// Module ID: 7039
// Function ID: 7040
// Dependencies: [32, 19, 7040, 7051, 7042, 7055, 7026]
// Exports: useJSResponderHandler

// Module 7039
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 7051 */;
import _mod7055 from "module_7055" /* 7055 */;
import _slicedToArray from "module_32" /* 32 */;

const require = globalThis.__r;

require = fn;
function isSupportedGesture(gestures) {
  if (obj.isComposedGesture(gestures)) {
    gestures = gestures.gestures;
    return gestures.some(isSupportedGesture);
  } else {
    const type = gestures.type;
    if (tmp(7042).SingleGestureName.Tap !== type) {
      if (tmp(7042).SingleGestureName.LongPress !== type) {
        if (tmp(7042).SingleGestureName.Fling !== type) {
          if (tmp(7042).SingleGestureName.Native !== type) {
            if (tmp(7042).SingleGestureName.Hover !== type) {
              return false;
            }
          }
        }
      }
    }
    return true;
  }
  obj = DEFAULT_PROPS_TRANSFORMER;
}
const noop = fn(19);
({ use: c3, useCallback: closure_4, useEffect: hasOwnProperty, useRef: metroRequire, useState: closure_7 } = noop);
let closure_8 = fn(7040).SHARED_VALUE_OFFSET + 0.5;
let closure_10 = { code: "function pnpm_useJSResponderHandlerTs1(sharedValues,id,notify){const{runOnJS}=this.__closure;const listener=runOnJS(notify);for(const sharedValue of sharedValues){sharedValue.addListener(id,listener);}}" };
let closure_11 = { code: "function pnpm_useJSResponderHandlerTs2(sharedValues,id){for(const sharedValue of sharedValues){sharedValue.removeListener(id);}}" };

export const useJSResponderHandler = function useJSResponderHandler(gesture) {
  _require = gesture;
  let tmp = closure_3(require("module_7055").JSResponderContext);
  dependencyMap = tmp;
  const tmp2 = _slicedToArray(closure_7(0), 2);
  _slicedToArray = tmp2[1];
  const tmp3 = closure_6(null);
  closure_3 = tmp3;
  if (null === tmp3.current) {
    closure_8 = tmp5 + 1;
    tmp3.current = +closure_8;
  }
  const items = [gesture];
  closure_5(() => {
    const Reanimated = gesture(7026).Reanimated;
    const enabledSharedValues = gesture(7040).getEnabledSharedValues(Reanimated);
    if (undefined !== Reanimated) {
      if (0 !== enabledSharedValues.length) {
        const current = runOnJS.current;
        if (null !== current) {
          runOnJS = Reanimated.runOnJS;
          const fn = function o(arg0, arg1, arg2) {
            const iter = arg0[Symbol.iterator]();
            const tmp = runOnJS(arg2);
            while (iter !== undefined) {
              let addListenerResult = nextResult.addListener(arg1, tmp);
              continue;
            }
          };
          const obj2 = { runOnJS };
          fn.__closure = obj2;
          fn.__workletHash = 3030529712101;
          fn.__initData = __initData;
          const fn2 = function l(arg0, arg1) {
            const iter = arg0[Symbol.iterator]();
            while (iter !== undefined) {
              let removeListenerResult = nextResult.removeListener(arg1);
              continue;
            }
          };
          fn2.__closure = {};
          fn2.__workletHash = 3663767498079;
          fn2.__initData = __initData2;
          Reanimated.runOnUI(fn)(enabledSharedValues, current, () => {
            current((arg0) => arg0 + 1);
          });
          return () => {
            Reanimated.runOnUI(fn2)(enabledSharedValues, current);
          };
        }
      }
    }
  }, items);
  const items1 = [tmp2[0], gesture];
  const tmp7 = closure_4(() => {
    let some = closure_0;
    const isGestureEnabledResult = DEFAULT_PROPS_TRANSFORMER.isGestureEnabled(closure_0);
    if (!isGestureEnabledResult) {
      return isGestureEnabledResult;
    } else {
      if (tmpResult.isComposedGesture(some)) {
        const gestures = some.gestures;
        some = gestures.some;
        let flag = some(isSupportedGesture);
      } else {
        const type = some.type;
        if (tmp(7042).SingleGestureName.Tap !== type) {
          if (tmp(7042).SingleGestureName.LongPress !== type) {
            if (tmp(7042).SingleGestureName.Fling !== type) {
              if (tmp(7042).SingleGestureName.Native !== type) {
                flag = false;
              }
            }
          }
        }
        flag = true;
      }
      tmpResult = tmp(7051);
    }
  }, items1);
  closure_4 = tmp7;
  const items2 = [tmp, tmp7];
  let handleStartShouldSetResponder = closure_4(() => {
    if (closure_4()) {
      const result = _mod7055.updateResponderEventValue(closure_1, true);
    }
    return false;
  }, items2);
  if (null == tmp) {
    handleStartShouldSetResponder = () => false;
  }
  return { handleStartShouldSetResponder };
};

// Module ID: 5482
// Function ID: 5483
// Name: useJSResponderHandler
// Dependencies: [32, 19, 5483, 5494, 5485, 5498, 5469]
// Exports: useJSResponderHandler

// Module 5482 (useJSResponderHandler)
import reanimatedUtils from "reanimatedUtils" /* 5483 */;
import ComposedGestureName from "ComposedGestureName" /* 5485 */;
import _mod5494 from "module_5494" /* 5494 */;
import _mod5498 from "module_5498" /* 5498 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;

const require = globalThis.__r;
let _require, closure_3, dependencyMap;

let c3;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
function isSupportedGesture(gestures) {
  const obj = _mod5494;
  if (obj.isComposedGesture(gestures)) {
    gestures = gestures.gestures;
    return gestures.some(isSupportedGesture);
  } else {
    const type = gestures.type;
    if (ComposedGestureName.SingleGestureName.Tap !== type) {
      if (ComposedGestureName.SingleGestureName.LongPress !== type) {
        if (ComposedGestureName.SingleGestureName.Fling !== type) {
          if (ComposedGestureName.SingleGestureName.Native !== type) {
            if (ComposedGestureName.SingleGestureName.Hover !== type) {
              return false;
            }
          }
        }
      }
    }
    return true;
  }
}
({ use: c3, useCallback: closure_4, useEffect: hasOwnProperty, useRef: metroRequire, useState: metroImportDefault } = react);
let closure_8 = reanimatedUtils.SHARED_VALUE_OFFSET + 0.5;
let closure_10 = { code: "(function pnpm_useJSResponderHandlerTs1(sharedValues,id,notify){let[runOnJS]=this.__closure;const listener=runOnJS(notify);for(const sharedValue of sharedValues){sharedValue.addListener(id,listener);}})" };
let closure_11 = { code: "(function pnpm_useJSResponderHandlerTs2(sharedValues,id){for(const sharedValue of sharedValues){sharedValue.removeListener(id);}})" };

export function useJSResponderHandler(gesture) {
  let closure_1;
  let closure_2;
  let first;
  _require = gesture;
  let tmp = closure_3(require("module_5498").JSResponderContext);
  dependencyMap = tmp;
  [first, _slicedToArray] = closure_7(0);
  const tmp4 = closure_6(null);
  closure_3 = tmp4;
  if (null === tmp4.current) {
    const tmp5 = closure_8;
    const tmp6 = +closure_8;
    closure_8 = tmp6 + 1;
    tmp4.current = tmp6;
  }
  let items = [gesture];
  closure_5(() => {
    let pnpm_useJSResponderHandlerTs2;
    let tmp5;
    let tmp6;
    let tmp9;
    const Reanimated = gesture(closure_1[6]).Reanimated;
    const obj = gesture(closure_1[2]);
    const enabledSharedValues = obj.getEnabledSharedValues(Reanimated);
    if (undefined !== Reanimated) {
      if (0 !== enabledSharedValues.length) {
        let tmp = pnpm_useJSResponderHandlerTs2;
        const current = pnpm_useJSResponderHandlerTs2.current;
        if (null !== current) {
          const items = [closure_1_10, Reanimated.runOnJS];
          let c0;
          [tmp5, tmp6] = items;
          function pnpm_useJSResponderHandlerTs1(arg0, arg1, arg2) {
            const tmp = _undefined(arg2);
            const iter = arg0[Symbol.iterator]();
            const nextResult = iter.next();
            while (iter !== undefined) {
              let addListenerResult = nextResult.addListener(arg1, tmp);
              continue;
            }
          }
          const items1 = [tmp6];
          pnpm_useJSResponderHandlerTs1.__closure = items1;
          pnpm_useJSResponderHandlerTs1.__workletHash = 6888092440636;
          pnpm_useJSResponderHandlerTs1.__initData = tmp5;
          const items2 = [closure_1_11];
          [tmp9] = items2;
          pnpm_useJSResponderHandlerTs2 = function pnpm_useJSResponderHandlerTs2(arg0, arg1) {
            const iter = arg0[Symbol.iterator]();
            const nextResult = iter.next();
            while (iter !== undefined) {
              let removeListenerResult = nextResult.removeListener(arg1);
              continue;
            }
          };
          pnpm_useJSResponderHandlerTs2.__workletHash = 6527390642238;
          pnpm_useJSResponderHandlerTs2.__initData = tmp9;
          Reanimated.runOnUI(pnpm_useJSResponderHandlerTs1)(enabledSharedValues, current, () => {
            current((arg0) => arg0 + 1);
          });
          return () => {
            Reanimated.runOnUI(pnpm_useJSResponderHandlerTs2)(enabledSharedValues, current);
          };
        }
      }
    }
  }, items);
  let items1 = [first, gesture];
  const tmp8 = closure_4(() => {
    const obj = _mod5494;
    let isGestureEnabledResult = obj.isGestureEnabled(gesture);
    if (isGestureEnabledResult) {
      let flag;
      const tmpResult = _mod5494;
      if (tmpResult.isComposedGesture(gesture)) {
        const gestures = tmp3.gestures;
        flag = gestures.some(isSupportedGesture);
      } else {
        const type = tmp3.type;
        if (ComposedGestureName.SingleGestureName.Tap !== type) {
          if (ComposedGestureName.SingleGestureName.LongPress !== type) {
            if (ComposedGestureName.SingleGestureName.Fling !== type) {
              if (ComposedGestureName.SingleGestureName.Native !== type) {
                flag = false;
              }
            }
          }
        }
        flag = true;
      }
      isGestureEnabledResult = flag;
    }
    return isGestureEnabledResult;
  }, items1);
  closure_4 = tmp8;
  let items2 = [tmp, tmp8];
  let handleStartShouldSetResponder = closure_4(() => {
    if (closure_4()) {
      const obj = _mod5498;
      const result = obj.updateResponderEventValue(closure_1, true);
    }
    return false;
  }, items2);
  if (null == tmp) {
    handleStartShouldSetResponder = () => false;
  }
  return { handleStartShouldSetResponder };
}

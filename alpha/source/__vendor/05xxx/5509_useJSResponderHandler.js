// Module ID: 5509
// Function ID: 5510
// Name: useJSResponderHandler
// Dependencies: [32, 19, 5510, 5521, 5512, 5525, 5494]
// Exports: useJSResponderHandler

// Module 5509 (useJSResponderHandler)
import reanimatedUtils from "reanimatedUtils" /* 5510 */;
import ComposedGestureName from "ComposedGestureName" /* 5512 */;
import _mod5521 from "module_5521" /* 5521 */;
import JSResponderContext from "JSResponderContext" /* 5525 */;
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
  const obj = _mod5521;
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
let closure_10 = { code: "(function pnpm_useJSResponderHandlerTs1(sharedValues,id,notify){let[scheduleOnRN]=this.__closure;const listener=function(){scheduleOnRN(notify);};for(const sharedValue of sharedValues){sharedValue.addListener(id,listener);}})" };
let closure_11 = { code: "(function pnpm_useJSResponderHandlerTs2(sharedValues,id){for(const sharedValue of sharedValues){sharedValue.removeListener(id);}})" };

export function useJSResponderHandler(gesture) {
  let closure_1;
  let closure_2;
  let first;
  _require = gesture;
  const tmp = closure_3(require("JSResponderContext").JSResponderContext);
  dependencyMap = tmp;
  [first, _slicedToArray] = closure_7(0);
  const tmp4 = closure_6(null);
  closure_3 = tmp4;
  if (null === tmp4.current) {
    closure_8 = tmp6 + 1;
    tmp4.current = +closure_8;
  }
  let items = [gesture];
  const tmp7 = closure_5(() => {
    let enabledSharedValues;
    let pnpm_useJSResponderHandlerTs2;
    let tmp11;
    let tmp7;
    let tmp8;
    const obj = gesture(closure_1[2]);
    enabledSharedValues = obj.getEnabledSharedValues(enabledSharedValues);
    if (undefined !== gesture(closure_1[6]).Worklets) {
      if (0 !== enabledSharedValues.length) {
        const current = pnpm_useJSResponderHandlerTs2.current;
        if (null !== current) {
          const scheduleOnUI = tmp(tmp2[6]).Worklets.scheduleOnUI;
          const items = [closure_1_10, tmp(closure_1[6]).Worklets.scheduleOnRN];
          let c0;
          [tmp7, tmp8] = items;
          function pnpm_useJSResponderHandlerTs1(arg0, arg1, arg2) {
            let closure_0 = arg2;
            function listener() {
              c0(closure_0);
            }
            const iter = arg0[Symbol.iterator]();
            const nextResult = iter.next();
            while (iter !== undefined) {
              let addListenerResult = nextResult.addListener(arg1, listener);
              continue;
            }
          }
          const items1 = [tmp8];
          pnpm_useJSResponderHandlerTs1.__closure = items1;
          pnpm_useJSResponderHandlerTs1.__workletHash = 10347236777826;
          pnpm_useJSResponderHandlerTs1.__initData = tmp7;
          const items2 = [closure_1_11];
          [tmp11] = items2;
          pnpm_useJSResponderHandlerTs2 = function pnpm_useJSResponderHandlerTs2(arg0, arg1) {
            const iter = arg0[Symbol.iterator]();
            const nextResult = iter.next();
            while (iter !== undefined) {
              let removeListenerResult = nextResult.removeListener(arg1);
              continue;
            }
          };
          pnpm_useJSResponderHandlerTs2.__workletHash = 6527390642238;
          pnpm_useJSResponderHandlerTs2.__initData = tmp11;
          scheduleOnUI(pnpm_useJSResponderHandlerTs1, enabledSharedValues, current, () => {
            scheduleOnUI((arg0) => arg0 + 1);
          });
          return () => {
            scheduleOnUI(pnpm_useJSResponderHandlerTs2, enabledSharedValues, current);
          };
        }
      }
    }
  }, items);
  let items1 = [first, gesture];
  const tmp8 = closure_4(() => {
    const obj = _mod5521;
    let isGestureEnabledResult = obj.isGestureEnabled(gesture);
    if (isGestureEnabledResult) {
      let flag;
      const tmpResult = _mod5521;
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
      const obj = JSResponderContext;
      const result = obj.updateResponderEventValue(closure_1, true);
    }
    return false;
  }, items2);
  if (null == tmp) {
    handleStartShouldSetResponder = () => false;
  }
  return { handleStartShouldSetResponder };
}

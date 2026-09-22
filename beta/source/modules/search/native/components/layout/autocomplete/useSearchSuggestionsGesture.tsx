// Module ID: 17099
// Function ID: 17100
// Name: useSearchSuggestionsGesture
// Dependencies: [19, 558, 568, 4497, 12486, 1616, 1368, 6891, 2]

// Module 17099 (useSearchSuggestionsGesture)
import LegacyBaseButton from "LegacyBaseButton" /* 6891 */;
import SearchPlatformUtilsDefault from "SearchPlatformUtils" /* 12486 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
function inBoundingBox(arg0, left, arg2) {
  const first = arg0.allTouches[0];
  let tmp2 = null != first;
  if (tmp2) {
    let tmp4 = left.left < first.absoluteX && first.absoluteX < left.right;
    if (tmp4) {
      tmp4 = left.top < first.absoluteY + arg2;
    }
    if (tmp4) {
      tmp4 = first.absoluteY + arg2 < left.bottom;
    }
    tmp2 = tmp4;
  }
  return tmp2;
}
inBoundingBox.__closure = {};
inBoundingBox.__workletHash = 14606221606756;
inBoundingBox.__initData = { code: "function inBoundingBox_useSearchSuggestionsGestureTsx1(e,coordinates,safeAreaTop){const touch=e.allTouches[0];if(touch==null)return false;return coordinates.left<touch.absoluteX&&touch.absoluteX<coordinates.right&&coordinates.top<touch.absoluteY+safeAreaTop&&touch.absoluteY+safeAreaTop<coordinates.bottom;}" };
const __initData = { code: "function useSearchSuggestionsGestureTsx2(e,manager){const{coordinates,inBoundingBox,safeAreaTop,dismissed}=this.__closure;manager.fail();const _coordinates=coordinates.get();if(_coordinates==null||inBoundingBox(e,_coordinates,safeAreaTop)){return;}dismissed.set(true);}" };
let closure_6 = { code: "function useSearchSuggestionsGestureTsx3(e,manager){const{coordinates,inBoundingBox,safeAreaTop,dismissed}=this.__closure;manager.fail();const _coordinates=coordinates.get();if(_coordinates==null||inBoundingBox(e,_coordinates,safeAreaTop))return;dismissed.set(true);}" };
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/components/layout/autocomplete/useSearchSuggestionsGesture.tsx");

export const useSearchSuggestionsGesture = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(24);
  const obj = require("c");
  const sharedValue = require("ReanimatedRexport").useSharedValue(false);
  const obj2 = require("ReanimatedRexport");
  sharedValue1 = require("ReanimatedRexport").useSharedValue(null);
  if (cResult[0] !== sharedValue) {
    const fn = function n(arg0, arg1) {
      if (arg0 !== arg1) {
        const result = sharedValue.set(false);
      }
    };
    cResult[0] = sharedValue;
    cResult[1] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  noop = tmp6;
  if (cResult[2] === arg0) {
    if (cResult[3] === tmp6) {
      let tmp7 = cResult[4];
    }
    if (cResult[5] === sharedValue) {
      if (cResult[6] === arg0) {
        if (cResult[7] === tmp6) {
          let tmp8 = cResult[8];
        }
        const effect = noop.useEffect(tmp7, tmp8);
        const top = sharedValue(tmp2[5])().top;
        if (cResult[9] !== top) {
          let num6 = 0;
          if (tmpResult.isAndroid()) {
            num6 = top;
          }
          cResult[9] = top;
          cResult[10] = num6;
          let tmp12 = num6;
          tmpResult = tmp(tmp2[6]);
        } else {
          tmp12 = cResult[10];
        }
        inBoundingBox = tmp12;
        if (cResult[11] === sharedValue1) {
          if (cResult[12] === sharedValue) {
            if (cResult[13] === tmp12) {
              let tmp13 = cResult[14];
            }
            if (cResult[15] !== sharedValue1) {
              class B {
                constructor(arg0) {
                  result = closure_2.set(arg0);
                  return;
                }
              }
              cResult[15] = sharedValue1;
              cResult[16] = B;
            } else {
              class B {
                constructor(arg0) {
                  result = closure_2.set(arg0);
                  return;
                }
              }
            }
            if (cResult[17] !== sharedValue) {
              class A {
                constructor() {
                  result = closure_1.set(true);
                  return;
                }
              }
              cResult[17] = sharedValue;
              cResult[18] = A;
            } else {
              class A {
                constructor() {
                  result = closure_1.set(true);
                  return;
                }
              }
            }
            if (cResult[19] === sharedValue) {
              class A {
                constructor() {
                  result = closure_1.set(true);
                  return;
                }
              }
            }
            const obj4 = { gesture: tmp13, dismissed: sharedValue, onLayoutMeasure: tmp17, setDismissed: tmp18 };
            cResult[19] = sharedValue;
            class T {
              constructor(arg0, arg1) {
                failResult = arg1.fail();
                rect = closure_2.get();
                tmp2 = null == rect;
                if (!tmp2) {
                  tmp3 = inBoundingBox;
                  tmp4 = closure_4;
                  if (typeof inBoundingBox === "function") {
                    tmp5 = arg0;
                    first = arg0.allTouches[0];
                    tmp7 = null != first;
                    if (tmp7) {
                      tmp8 = rect.left < first.absoluteX && first.absoluteX < rect.right && rect.top < first.absoluteY + tmp4 && first.absoluteY + tmp4 < rect.bottom;
                      tmp7 = tmp8;
                    }
                    tmp2 = tmp7;
                  } else {
                    str = "Trying to call a non-function";
                    throw new TypeError("Trying to call a non-function");
                  }
                }
                if (!tmp2) {
                  tmp9 = closure_1;
                  flag = true;
                  result = closure_1.set(true);
                }
                return;
              }
            }
            cResult[21] = tmp17;
            cResult[22] = tmp18;
            cResult[23] = obj4;
          }
        }
        const Gesture = tmp(tmp2[7]).Gesture;
        const ManualResult = Gesture.Manual();
        class T {
          constructor(arg0, arg1) {
            failResult = arg1.fail();
            rect = closure_2.get();
            tmp2 = null == rect;
            if (!tmp2) {
              tmp3 = inBoundingBox;
              tmp4 = closure_4;
              if (typeof inBoundingBox === "function") {
                tmp5 = arg0;
                first = arg0.allTouches[0];
                tmp7 = null != first;
                if (tmp7) {
                  tmp8 = rect.left < first.absoluteX && first.absoluteX < rect.right && rect.top < first.absoluteY + tmp4 && first.absoluteY + tmp4 < rect.bottom;
                  tmp7 = tmp8;
                }
                tmp2 = tmp7;
              } else {
                str = "Trying to call a non-function";
                throw new TypeError("Trying to call a non-function");
              }
            }
            if (!tmp2) {
              tmp9 = closure_1;
              flag = true;
              result = closure_1.set(true);
            }
            return;
          }
        }
        const obj5 = { coordinates: sharedValue1, inBoundingBox, safeAreaTop: tmp12, dismissed: sharedValue };
        T.__closure = obj5;
        T.__workletHash = 267606191335;
        T.__initData = __initData;
        const onTouchesDownResult = Gesture.Manual().manualActivation(true).onTouchesDown(T);
        cResult[11] = sharedValue1;
        cResult[12] = sharedValue;
        cResult[13] = tmp12;
        cResult[14] = onTouchesDownResult;
        tmp13 = onTouchesDownResult;
        const manualActivationResult = Gesture.Manual().manualActivation(true);
      }
    }
    const items = [sharedValue, arg0, tmp6];
    cResult[5] = sharedValue;
    cResult[6] = arg0;
    cResult[7] = tmp6;
    cResult[8] = items;
    tmp8 = items;
  }
  const fn2 = function f() {
    return SearchPlatformUtilsDefault.subscribeTextInputValue(closure_0, closure_3);
  };
  cResult[2] = arg0;
  cResult[3] = tmp6;
  cResult[4] = fn2;
  tmp7 = fn2;
}) : ((arg0) => {
  _require = arg0;
  const sharedValue = require("ReanimatedRexport").useSharedValue(false);
  const obj = require("ReanimatedRexport");
  sharedValue1 = require("ReanimatedRexport").useSharedValue(null);
  const items = [sharedValue];
  callback = callback.useCallback((arg0, arg1) => {
    if (arg0 !== arg1) {
      const result = sharedValue.set(false);
    }
  }, items);
  const items1 = [sharedValue, arg0, callback];
  const effect = callback.useEffect(() => SearchPlatformUtilsDefault.subscribeTextInputValue(closure_0, callback), items1);
  const obj2 = require("ReanimatedRexport");
  let num = 0;
  if (obj4.isAndroid()) {
    num = sharedValue(sharedValue1[5])().top;
  }
  const items2 = [sharedValue1, num, sharedValue];
  const memo = obj3.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const ManualResult = Gesture.Manual();
    const fn = function e(arg0, fail) {
      fail.fail();
      const rect = sharedValue1.get();
      let tmp2 = null == rect;
      if (!tmp2) {
        if (typeof num === "function") {
          const first = arg0.allTouches[0];
          let tmp7 = null != first;
          if (tmp7) {
            tmp7 = rect.left < first.absoluteX && first.absoluteX < rect.right && rect.top < first.absoluteY + tmp4 && first.absoluteY + tmp4 < rect.bottom;
            const tmp8 = rect.left < first.absoluteX && first.absoluteX < rect.right && rect.top < first.absoluteY + tmp4 && first.absoluteY + tmp4 < rect.bottom;
          }
          tmp2 = tmp7;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      if (!tmp2) {
        const result = sharedValue.set(true);
      }
    };
    fn.__closure = { coordinates: sharedValue1, inBoundingBox, safeAreaTop: num, dismissed: sharedValue };
    fn.__workletHash = 14454535520224;
    fn.__initData = __initData;
    return Gesture.Manual().manualActivation(true).onTouchesDown(fn);
  }, items2);
  const items3 = [sharedValue1];
  const callback1 = obj3.useCallback((arg0) => {
    const result = sharedValue1.set(arg0);
  }, items3);
  const items4 = [sharedValue];
  const callback2 = obj3.useCallback(() => {
    const result = sharedValue.set(true);
  }, items4);
  const items5 = [sharedValue, callback2, memo, callback1];
  return callback.useMemo(() => ({ gesture: memo, dismissed: sharedValue, onLayoutMeasure: callback1, setDismissed: callback2 }), items5);
});

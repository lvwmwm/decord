// Module ID: 5483
// Function ID: 5484
// Name: reanimatedUtils
// Dependencies: [32, 5470, 5469, 5484, 5493]
// Exports: bindSharedValues, hasWorkletEventHandlers, maybeUnpackValue, unbindSharedValues

// Module 5483 (reanimatedUtils)
import reanimatedWrapper from "reanimatedWrapper" /* 5469 */;
import NativeProxy from "NativeProxy" /* 5470 */;
import allowedNativeProps from "allowedNativeProps" /* 5484 */;
import _mod5493 from "module_5493" /* 5493 */;
import _slicedToArray from "_slicedToArray" /* 32 */;

const require = globalThis.__r;
let _require, dependencyMap;

let tmp2;
let tmp3;
let tmp4;
let items = [{ code: "(function hash_Pnpm_reanimatedUtilsTs1(str){const len=str.length;let h=5381;for(let i=0;i<len;i++){h=h*33^str.charCodeAt(i);}return h>>>0;})" }];
[tmp2] = items;
function hash(str) {
  let num = 5381;
  let num2 = 0;
  let num3 = 5381;
  if (0 < str.length) {
    do {
      num = 33 * num ^ str.charCodeAt(num2);
      num2 = num2 + 1;
      num3 = num;
    } while (num2 < str.length);
  }
  return num3 >>> 0;
}
hash.__workletHash = 16019670961817;
hash.__initData = tmp2;
let c4 = 1.618;
let closure_5 = NativeProxy.NativeProxy.updateGestureHandlerConfig;
let closure_6 = { code: "(function pnpm_reanimatedUtilsTs2(sharedValue,configKey){let[hash,baseListenerId,updateGestureHandlerConfig,handlerTag,shouldUseReanimatedDetector]=this.__closure;const keyHash=hash(configKey);const listenerId=baseListenerId+keyHash;sharedValue.addListener(listenerId,function(value){updateGestureHandlerConfig(handlerTag,configKey==='runOnJS'?{dispatchesReanimatedEvents:shouldUseReanimatedDetector&&!value}:{[configKey]:value});});})" };
let closure_7 = { code: "(function pnpm_reanimatedUtilsTs3(){let[maybeSharedValue,listenerId]=this.__closure;maybeSharedValue.removeListener(listenerId);})" };
let items1 = [{ code: "(function maybeUnpackValue_Pnpm_reanimatedUtilsTs4(v){let[Reanimated]=this.__closure;var _Reanimated;return(_Reanimated=Reanimated)!==null&&_Reanimated!==void 0&&_Reanimated.isSharedValue(v)?v.value:v;})" }, reanimatedWrapper.Reanimated];
let c0;
[tmp3, tmp4] = items1;
function maybeUnpackValue(activeOffsetX) {
  let isSharedValueResult;
  const obj = c0;
  if (c0 != null) {
    isSharedValueResult = obj.isSharedValue(activeOffsetX);
  }
  let value = activeOffsetX;
  if (isSharedValueResult) {
    value = activeOffsetX.value;
  }
  return value;
}
const items2 = [tmp4];
maybeUnpackValue.__closure = items2;
maybeUnpackValue.__workletHash = 12365350526152;
maybeUnpackValue.__initData = tmp3;
function getEnabledSharedValues(Reanimated) {
  if (undefined === reanimatedWrapper.Reanimated) {
    return [];
  } else {
    const tmpResult = _mod5493;
    if (tmpResult.isComposedGesture(Reanimated)) {
      const gestures = Reanimated.gestures;
      return gestures.flatMap(getEnabledSharedValues);
    } else {
      let items1;
      const enabled = Reanimated.config.enabled;
      Reanimated = tmp(5469).Reanimated;
      if (Reanimated.isSharedValue(enabled)) {
        const items = [enabled];
        items1 = items;
      } else {
        items1 = [];
      }
      return items1;
    }
  }
}

export const SHARED_VALUE_OFFSET = 1.618;
export function bindSharedValues(shouldUseReanimatedDetector, arg1) {
  let tmp2;
  let tmp6;
  let tmp7;
  function pnpm_reanimatedUtilsTs2Factory(items) {
    let tmp;
    let tmp2;
    let tmp3;
    let tmp4;
    let tmp5;
    let tmp6;
    [tmp, tmp2, tmp3, tmp4, tmp5, tmp6] = items;
    function pnpm_reanimatedUtilsTs2(addListener, arg1) {
      let closure_0 = arg1;
      addListener.addListener(closure_1 + closure_0(arg1), (arg0) => {
        let obj;
        let tmp4;
        const tmp = closure_2_2;
        const tmp2 = closure_2_3;
        if ("runOnJS" === closure_0) {
          const obj2 = { dispatchesReanimatedEvents: tmp4 };
          obj = obj2;
          tmp4 = closure_2_4 && !arg0;
        } else {
          obj = {};
          obj[tmp3] = arg0;
        }
        tmp(tmp2, obj);
      });
    }
    items = [tmp2, tmp3, tmp4, tmp5, tmp6];
    pnpm_reanimatedUtilsTs2.__closure = items;
    pnpm_reanimatedUtilsTs2.__workletHash = 57681744503;
    pnpm_reanimatedUtilsTs2.__initData = tmp;
    return pnpm_reanimatedUtilsTs2;
  }
  if (undefined !== reanimatedWrapper.Reanimated) {
    let items = [closure_6, hash, arg1 + c4, closure_5, arg1, shouldUseReanimatedDetector.shouldUseReanimatedDetector];
    const _Object = Object;
    const tmp24 = pnpm_reanimatedUtilsTs2Factory(items);
    const entries = Object.entries(shouldUseReanimatedDetector);
    const tmp28 = entries[Symbol.iterator]();
    let tmp = entries;
    const tmp3 = tmp28;
    while (tmp28 !== undefined) {
      let tmp4 = _slicedToArray;
      let tmp5 = _slicedToArray(tmp2, 2);
      [tmp6, tmp7] = tmp5;
      let tmp8 = tmp7;
      let tmp10 = require;
      let Reanimated = reanimatedWrapper.Reanimated;
      if (Reanimated.isSharedValue(tmp7)) {
        let Reanimated2 = tmp10(5469).Reanimated;
        let tmp17 = Reanimated2.runOnUI(tmp24)(tmp8, tmp6);
      }
      continue;
    }
  }
}
export function unbindSharedValues(arg0, arg1) {
  let closure_0;
  let closure_1;
  if (undefined !== require("reanimatedWrapper").Reanimated) {
    _require = arg1 + c4;
    const _Object = Object;
    function _loop(iter) {
      let tmp7;
      let tmp8;
      let tmp9;
      const Reanimated = reanimatedWrapper.Reanimated;
      if (Reanimated.isSharedValue(iter)) {
        if (typeof hash === "function") {
          let num3 = 5381;
          let num6 = 0;
          let num7 = 5381;
          if (0 < closure_1.length) {
            do {
              num3 = 33 * num3 ^ arr.charCodeAt(num6);
              num6 = num6 + 1;
              num7 = num3;
            } while (num6 < closure_1.length);
          }
          const Reanimated2 = reanimatedWrapper.Reanimated;
          const items = [closure_7, iter, closure_0 + (num7 >>> 0)];
          let c0;
          let c1;
          [tmp7, tmp8, tmp9] = items;
          function pnpm_reanimatedUtilsTs3() {
            _undefined.removeListener(c1);
          }
          const items1 = [tmp8, tmp9];
          pnpm_reanimatedUtilsTs3.__closure = items1;
          pnpm_reanimatedUtilsTs3.__workletHash = 1558258493200;
          pnpm_reanimatedUtilsTs3.__initData = tmp7;
          Reanimated2.runOnUI(pnpm_reanimatedUtilsTs3)();
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        return 1;
      }
    }
    const entries = Object.entries(arg0);
    const tmp7 = entries[Symbol.iterator]();
    const tmp8 = entries;
    while (tmp7 !== undefined) {
      let tmp12 = _slicedToArray(tmp9, 2);
      dependencyMap = tmp12[0];
      let _loopResult = _loop(tmp12[1]);
      continue;
    }
  }
}
export function hasWorkletEventHandlers(useAnimated) {
  const iter = allowedNativeProps.HandlerCallbacks[Symbol.iterator]();
  while (iter !== undefined) {
    let tmp = useAnimated[iter.next()];
    if (typeof tmp === "function") {
      if ("__workletHash" in tmp2) {
        iter.return();
        let flag = true;
        return true;
      }
    }
    continue;
  }
  return false;
}
export { maybeUnpackValue };
export { getEnabledSharedValues };

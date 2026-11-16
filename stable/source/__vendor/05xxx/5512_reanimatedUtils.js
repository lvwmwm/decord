// Module ID: 5512
// Function ID: 5513
// Name: reanimatedUtils
// Dependencies: [32, 5498, 5496, 5484, 5513, 5522]
// Exports: bindSharedValues, hasWorkletEventHandlers, maybeUnpackValue, unbindSharedValues

// Module 5512 (reanimatedUtils)
import reanimatedWrapper from "reanimatedWrapper" /* 5496 */;
import NativeProxy from "NativeProxy" /* 5498 */;
import allowedNativeProps from "allowedNativeProps" /* 5513 */;
import _mod5522 from "module_5522" /* 5522 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;

let dependencyMap;

let tmp2;
let tmp3;
let tmp4;
let tmp6;
let tmp7;
const HIT_SLOP_LEFT_IDX = tmp2(5484);
let _slicedToArray = _slicedToArray_mod;
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
let items1 = [{ code: "(function splitSingleOffset_Pnpm_reanimatedUtilsTs2(value){let[UNREACHABLE_OFFSET]=this.__closure;return value<0?[value,UNREACHABLE_OFFSET]:[-UNREACHABLE_OFFSET,value];})" }, 1000000000];
[tmp3, tmp4] = items1;
function splitSingleOffset(value) {
  let items1;
  if (value < 0) {
    const items = [value, c0];
    items1 = items;
  } else {
    items1 = [-c0, value];
  }
  return items1;
}
const items2 = [tmp4];
splitSingleOffset.__closure = items2;
splitSingleOffset.__workletHash = 12128382883520;
splitSingleOffset.__initData = tmp3;
const set = new Set(["activeOffsetX", "activeOffsetY", "failOffsetX", "failOffsetY"]);
let closure_7 = NativeProxy.NativeProxy.updateGestureHandlerConfig;
let closure_8 = { code: "(function pnpm_reanimatedUtilsTs3(sharedValue,configKey){let[hash,baseListenerId,updateGestureHandlerConfig,handlerTag,shouldUseReanimatedDetector,normalizeHitSlop,PAN_OFFSET_KEYS,splitSingleOffset]=this.__closure;const keyHash=hash(configKey);const listenerId=baseListenerId+keyHash;const sendUpdate=function(value){if(configKey==='runOnJS'){updateGestureHandlerConfig(handlerTag,{dispatchesReanimatedEvents:shouldUseReanimatedDetector&&!value});return;}if(configKey==='hitSlop'){updateGestureHandlerConfig(handlerTag,{hitSlop:normalizeHitSlop(value)});return;}if(PAN_OFFSET_KEYS.has(configKey)){const[start,end]=splitSingleOffset(value);updateGestureHandlerConfig(handlerTag,{[configKey+\"Start\"]:start,[configKey+\"End\"]:end});return;}updateGestureHandlerConfig(handlerTag,{[configKey]:value});};sharedValue.addListener(listenerId,sendUpdate);sendUpdate(sharedValue.value);})" };
let closure_9 = { code: "(function pnpm_reanimatedUtilsTs4(){let[maybeSharedValue,listenerId]=this.__closure;maybeSharedValue.removeListener(listenerId);})" };
const items3 = [{ code: "(function maybeUnpackValue_Pnpm_reanimatedUtilsTs5(v){let[Reanimated]=this.__closure;var _Reanimated;return(_Reanimated=Reanimated)!==null&&_Reanimated!==void 0&&_Reanimated.isSharedValue(v)?v.value:v;})" }, reanimatedWrapper.Reanimated];
let c0;
[tmp6, tmp7] = items3;
function maybeUnpackValue(enabled) {
  let isSharedValueResult;
  const obj = c0;
  if (c0 != null) {
    isSharedValueResult = obj.isSharedValue(enabled);
  }
  let value = enabled;
  if (isSharedValueResult) {
    value = enabled.value;
  }
  return value;
}
const items4 = [tmp7];
maybeUnpackValue.__closure = items4;
maybeUnpackValue.__workletHash = 7965287535657;
maybeUnpackValue.__initData = tmp6;
function getEnabledSharedValues(enabledSharedValues) {
  if (undefined === reanimatedWrapper.Reanimated) {
    return [];
  } else {
    const tmpResult = _mod5522;
    if (tmpResult.isComposedGesture(enabledSharedValues)) {
      const gestures = enabledSharedValues.gestures;
      return gestures.flatMap(getEnabledSharedValues);
    } else {
      let items1;
      const enabled = enabledSharedValues.config.enabled;
      const Reanimated = tmp(5496).Reanimated;
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
export { splitSingleOffset };
export function bindSharedValues(shouldUseReanimatedDetector, arg1) {
  let scheduleOnUI;
  let tmp10;
  let tmp11;
  function pnpm_reanimatedUtilsTs3Factory(items) {
    let tmp;
    let tmp2;
    let tmp3;
    let tmp4;
    let tmp5;
    let tmp6;
    let tmp7;
    let tmp8;
    let tmp9;
    [tmp, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9] = items;
    function pnpm_reanimatedUtilsTs3(addListener, arg1) {
      let closure_0 = arg1;
      function sendUpdate(value) {
        let tmp17;
        let tmp18;
        if ("runOnJS" !== closure_0) {
          if ("hitSlop" !== closure_0) {
            if (set.has(closure_0)) {
              const obj2 = {};
              const _HermesInternal = HermesInternal;
              [tmp17, tmp18] = closure_2_7(value);
              obj2["" + closure_0 + "Start"] = tmp17;
              const _HermesInternal2 = HermesInternal;
              obj2["" + closure_0 + "End"] = tmp18;
              _slicedToArray(closure_2_7(value), 2);
              closure_2_2(closure_2_3, obj2);
            } else {
              const obj3 = {};
              obj3[closure_0] = value;
              closure_2_2(closure_2_3, obj3);
            }
          } else {
            const obj4 = { hitSlop: closure_2_5(value) };
            closure_2_2(closure_2_3, obj4);
          }
        } else {
          let tmp4 = closure_2_4;
          const tmp2 = closure_2_2;
          const tmp3 = closure_2_3;
          if (closure_2_4) {
            tmp4 = !value;
          }
          const obj = { dispatchesReanimatedEvents: tmp4 };
          tmp2(tmp3, obj);
        }
      }
      addListener.addListener(closure_1 + closure_0(arg1), sendUpdate);
      sendUpdate(addListener.value);
    }
    items = [tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9];
    pnpm_reanimatedUtilsTs3.__closure = items;
    pnpm_reanimatedUtilsTs3.__workletHash = 1738246081333;
    pnpm_reanimatedUtilsTs3.__initData = tmp;
    return pnpm_reanimatedUtilsTs3;
  }
  const tmp = require;
  let tmp2 = require;
  let tmp3 = dependencyMap;
  let tmp4 = dependencyMap;
  const Worklets = reanimatedWrapper.Worklets;
  if (Worklets != null) {
    scheduleOnUI = Worklets.scheduleOnUI;
  }
  if (undefined !== reanimatedWrapper.Reanimated) {
    if (undefined !== scheduleOnUI) {
      let items = [closure_8, hash, arg1 + c4, closure_7, arg1, shouldUseReanimatedDetector.shouldUseReanimatedDetector, HIT_SLOP_LEFT_IDX.normalizeHitSlop, set, splitSingleOffset];
      const _Object = Object;
      const tmp30 = pnpm_reanimatedUtilsTs3Factory(items);
      const entries = Object.entries(shouldUseReanimatedDetector);
      const tmp34 = entries[Symbol.iterator]();
      const tmp5 = entries;
      const tmp7 = tmp34;
      while (tmp34 !== undefined) {
        let tmp8 = _slicedToArray;
        let tmp9 = _slicedToArray(tmp6, 2);
        [tmp10, tmp11] = tmp9;
        let tmp12 = tmp11;
        let Reanimated = reanimatedWrapper.Reanimated;
        if (Reanimated.isSharedValue(tmp11)) {
          let tmp17 = tmp11;
          let tmp18 = tmp10;
          let scheduleOnUIResult = scheduleOnUI(tmp30, tmp12, tmp10);
        }
        continue;
      }
    }
  }
}
export function unbindSharedValues(arg0, arg1) {
  let closure_1;
  let closure_2;
  let scheduleOnUI;
  const Worklets = scheduleOnUI(5496).Worklets;
  const tmp = scheduleOnUI;
  scheduleOnUI = undefined;
  if (Worklets != null) {
    scheduleOnUI = Worklets.scheduleOnUI;
  }
  if (undefined !== tmp(5496).Reanimated) {
    if (undefined !== scheduleOnUI) {
      const tmp5 = arg1;
      const tmp6 = c4;
      dependencyMap = arg1 + c4;
      const tmp7 = globalThis;
      const _Object = Object;
      function _loop(iter) {
        let tmp5;
        let tmp6;
        let tmp7;
        const Reanimated = reanimatedWrapper.Reanimated;
        if (Reanimated.isSharedValue(iter)) {
          if (typeof hash === "function") {
            let num3 = 5381;
            let num6 = 0;
            let num7 = 5381;
            if (0 < closure_2.length) {
              do {
                num3 = 33 * num3 ^ arr.charCodeAt(num6);
                num6 = num6 + 1;
                num7 = num3;
              } while (num6 < closure_2.length);
            }
            const items = [closure_9, iter, closure_1 + (num7 >>> 0)];
            [tmp5, tmp6, tmp7] = items;
            function pnpm_reanimatedUtilsTs4() {
              closure_1_0.removeListener(closure_1_1);
            }
            const items1 = [tmp6, tmp7];
            pnpm_reanimatedUtilsTs4.__closure = items1;
            pnpm_reanimatedUtilsTs4.__workletHash = 13009472633559;
            pnpm_reanimatedUtilsTs4.__initData = tmp5;
            scheduleOnUI(pnpm_reanimatedUtilsTs4);
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          return 1;
        }
      }
      const entries = Object.entries(arg0);
      const tmp10 = entries[Symbol.iterator]();
      while (tmp10 !== undefined) {
        let tmp15 = _slicedToArray(tmp12, 2);
        _slicedToArray = tmp15[0];
        let _loopResult = _loop(tmp15[1]);
        continue;
      }
    }
  }
}
export function hasWorkletEventHandlers(disableReanimated) {
  const iter = allowedNativeProps.HandlerCallbacks[Symbol.iterator]();
  while (iter !== undefined) {
    let tmp = disableReanimated[iter.next()];
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

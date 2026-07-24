// Module ID: 1735
// Function ID: 19453
// Name: useAnimatedReaction
// Dependencies: [65, 31, 1734, 1585, 1626]
// Exports: useAnimatedReaction

// Module 1735 (useAnimatedReaction)
import _toConsumableArray from "_toConsumableArray";
import { useEffect } from "result";

const require = arg1;
let closure_4 = { code: "function pnpm_useAnimatedReactionTs1(){const{prepare,react,previous}=this.__closure;const input=prepare();react(input,previous.value);previous.value=input;}" };

export const useAnimatedReaction = function useAnimatedReaction(fn, fn2, items1) {
  let combined = items1;
  const _require = fn;
  const dependencyMap = fn2;
  let _toConsumableArray = _require(1734).useSharedValue(null);
  let __closure = fn.__closure;
  if (null == __closure) {
    __closure = {};
  }
  const values = Object.values(__closure);
  combined = values;
  const obj = _require(1734);
  let length = _require(1585).shouldBeUseWeb() && !values.length;
  if (length) {
    length = null != combined;
    const arr3 = combined;
  }
  if (length) {
    length = arr3.length;
  }
  if (undefined === combined) {
    const items = [];
    let __closure1 = fn.__closure;
    if (null == __closure1) {
      __closure1 = {};
    }
    let __closure2 = fn2.__closure;
    if (null == __closure2) {
      __closure2 = {};
    }
    items1 = [fn.__workletHash, fn2.__workletHash];
    combined = items.concat(_toConsumableArray(Object.values(__closure1)), _toConsumableArray(Object.values(__closure2)), items1);
    const tmp2 = _toConsumableArray;
    const tmp2Result = _toConsumableArray(Object.values(__closure1));
    const tmp4 = _toConsumableArray;
  } else {
    combined.push(fn.__workletHash, fn2.__workletHash);
  }
  combined(() => {
    /* worklet (recovered source) */ function pnpm_useAnimatedReactionTs1(){const{prepare,react,previous}=this.__closure;const input=prepare();react(input,previous.value);previous.value=input;}
    pnpm_useAnimatedReactionTs1.__closure = { prepare: callback, react: table, previous: _toConsumableArray };
    pnpm_useAnimatedReactionTs1.__workletHash = 3026350450260;
    pnpm_useAnimatedReactionTs1.__initData = outer1_4;
    callback = callback(table[4]).startMapper(pnpm_useAnimatedReactionTs1, combined);
    return () => {
      callback(table[4]).stopMapper(callback);
    };
  }, combined);
};

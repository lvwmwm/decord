// Module ID: 1893
// Function ID: 1894
// Name: useAnimatedReactionCommon
// Dependencies: [19, 1891, 1827]
// Exports: useAnimatedReactionBase

// Module 1893 (useAnimatedReactionCommon)
import react from "react" /* 19 */;
import startMapper from "startMapper" /* 1827 */;

const require = globalThis.__r;
let _require, closure_0, dependencyMap;

let useEffect = react.useEffect;
let closure_3 = { code: "(function pnpm_useAnimatedReactionCommonTs1(){let[prepare,react,previous]=this.__closure;const input=prepare();react(input,previous.value);previous.value=input;})" };

export function useAnimatedReactionBase(__closure, __closure2, arg2, __closure3) {
  let items1;
  _require = __closure;
  dependencyMap = __closure2;
  useEffect = __closure;
  let obj = require("module_1891");
  closure_3 = obj.useSharedValue(null);
  if (undefined === arg2) {
    __closure = __closure.__closure;
    if (__closure == null) {
      __closure = [];
    }
    let items = [, ];
    let __closure1 = __closure2.__closure;
    const arraySpreadResult = HermesBuiltin.arraySpread(items, __closure, 0);
    if (__closure1 == null) {
      __closure1 = [];
    }
    const arraySpreadResult3 = HermesBuiltin.arraySpread(items, __closure1, arraySpreadResult);
    items[arraySpreadResult3] = __closure.__workletHash;
    items[arraySpreadResult3 + 1] = __closure2.__workletHash;
    items1 = items;
  } else {
    items1 = [, ];
    const tmp2 = items1;
    const tmp3 = arg2;
    const arraySpreadResult4 = HermesBuiltin.arraySpread(items1, arg2, 0);
    items1[arraySpreadResult4] = __closure.__workletHash;
    items1[arraySpreadResult4 + 1] = __closure2.__workletHash;
  }
  useEffect(() => {
    let tmp;
    let tmp2;
    let tmp3;
    let tmp4;
    const items = [closure_3, closure_0, __closure2, closure_3];
    [tmp, tmp2, tmp3, tmp4] = items;
    function pnpm_useAnimatedReactionCommonTs1() {
      const tmp = closure_1_0();
      closure_1_1(tmp, value.value);
      value.value = tmp;
    }
    const items1 = [tmp2, tmp3, tmp4];
    pnpm_useAnimatedReactionCommonTs1.__closure = items1;
    pnpm_useAnimatedReactionCommonTs1.__workletHash = 15168030966528;
    pnpm_useAnimatedReactionCommonTs1.__initData = tmp;
    let obj = startMapper;
    closure_0 = obj.startMapper(pnpm_useAnimatedReactionCommonTs1, __closure);
    return () => {
      const obj = __closure(__closure2[2]);
      obj.stopMapper(closure_0);
    };
  }, items1);
}

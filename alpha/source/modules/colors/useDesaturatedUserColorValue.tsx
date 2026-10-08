// Module ID: 14748
// Function ID: 14749
// Name: useDesaturatedUserColorValue
// Dependencies: [19, 5079, 558, 576, 504, 7262, 1103, 2]

// Module 14748 (useDesaturatedUserColorValue)
import react from "react" /* 19 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1103 */;
import _modDef7262 from "module_7262" /* 7262 */;
import AccessibilityStore from "AccessibilityStore" /* 5079 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const useMemo = react.useMemo;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useDesaturatedUserColorValue(color) {
  let h;
  let l;
  let s;
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(9);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function l() {
      let num = 1;
      if (AccessibilityStore.desaturateUserColors) {
        num = AccessibilityStore.saturation;
      }
      return num;
    };
    let num = 0;
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === color) {
    let tmp8;
    let tmp9;
    if (cResult[3] === stateFromStores) {
      tmp8 = cResult[4];
      tmp9 = cResult[5];
    }
    if (cResult[6] === tmp8) {
      let tmp14;
      if (cResult[7] === tmp9) {
        tmp14 = cResult[8];
      }
      return tmp14;
    }
    const obj2 = { hex: tmp8, hsl: tmp9 };
    cResult[6] = tmp8;
    cResult[7] = tmp9;
    cResult[8] = obj2;
    tmp14 = obj2;
  }
  const tmp10 = _modDef7262;
  const tmpResult2 = utils_ColorUtils;
  const tmp10Result = tmp10(tmpResult2.int2hex(color));
  ({ h, s, l } = tmp10Result.toHsl());
  const obj3 = { h, s: s * stateFromStores, l };
  tmp10Result.toHsl();
  const obj6 = _modDef7262(obj3);
  const toHexStringResult = obj6.toHexString();
  const toHslStringResult = obj6.toHslString();
  cResult[2] = color;
  cResult[3] = stateFromStores;
  cResult[4] = toHexStringResult;
  cResult[5] = toHslStringResult;
  tmp9 = toHslStringResult;
  tmp8 = toHexStringResult;
}) : (function useDesaturatedUserColorValue(arg0) {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let num = 1;
    if (AccessibilityStore.desaturateUserColors) {
      num = AccessibilityStore.saturation;
    }
    return num;
  });
  const items1 = [arg0, stateFromStores];
  return useMemo(() => {
    let h;
    let l;
    let s;
    const tmp = _modDef7262;
    const obj = utils_ColorUtils;
    const tmpResult = tmp(obj.int2hex(closure_0));
    ({ h, s, l } = tmpResult.toHsl());
    const obj2 = { h, s: s * stateFromStores, l };
    tmpResult.toHsl();
    const obj4 = _modDef7262(obj2);
    const obj3 = { hex: obj4.toHexString(), hsl: obj4.toHslString() };
    return obj3;
  }, items1);
});
const result = size.fileFinishedImporting("modules/colors/useDesaturatedUserColorValue.tsx");

export default tmp2;

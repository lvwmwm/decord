// Module ID: 16503
// Function ID: 16504
// Name: useDesaturatedUserColorValue
// Dependencies: [19, 5010, 504, 7723, 1091, 2]
// Exports: default

// Module 16503 (useDesaturatedUserColorValue)
import react from "react" /* 19 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1091 */;
import _modDef7723 from "module_7723" /* 7723 */;
import AccessibilityStore from "AccessibilityStore" /* 5010 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const useMemo = react.useMemo;
const result = size.fileFinishedImporting("modules/colors/useDesaturatedUserColorValue.tsx");

export default function useDesaturatedUserColorValue(arg0) {
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
    const tmp = _modDef7723;
    const obj = utils_ColorUtils;
    const tmpResult = tmp(obj.int2hex(closure_0));
    ({ h, s, l } = tmpResult.toHsl());
    const obj2 = { h, s: s * stateFromStores, l };
    tmpResult.toHsl();
    const obj4 = _modDef7723(obj2);
    const obj3 = { hex: obj4.toHexString(), hsl: obj4.toHslString() };
    return obj3;
  }, items1);
};

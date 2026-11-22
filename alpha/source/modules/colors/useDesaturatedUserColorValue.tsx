// Module ID: 15948
// Function ID: 15949
// Name: useDesaturatedUserColorValue
// Dependencies: [19, 4914, 504, 8085, 1089, 2]
// Exports: default

// Module 15948 (useDesaturatedUserColorValue)
import react from "react" /* 19 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1089 */;
import _modDef8085 from "module_8085" /* 8085 */;
import AccessibilityStore from "AccessibilityStore" /* 4914 */;
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
    const tmp = _modDef8085;
    const obj = utils_ColorUtils;
    const tmpResult = tmp(obj.int2hex(closure_0));
    ({ h, s, l } = tmpResult.toHsl());
    const obj2 = { h, s: s * stateFromStores, l };
    tmpResult.toHsl();
    const obj4 = _modDef8085(obj2);
    const obj3 = { hex: obj4.toHexString(), hsl: obj4.toHslString() };
    return obj3;
  }, items1);
};

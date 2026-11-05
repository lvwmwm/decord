// Module ID: 16816
// Function ID: 16817
// Name: useDesaturatedUserColorValue
// Dependencies: [19, 5144, 504, 7875, 1090, 2]
// Exports: default

// Module 16816 (useDesaturatedUserColorValue)
import react from "react" /* 19 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1090 */;
import _modDef7875 from "module_7875" /* 7875 */;
import AccessibilityStore from "AccessibilityStore" /* 5144 */;
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
    const tmp = _modDef7875;
    const obj = utils_ColorUtils;
    const tmpResult = tmp(obj.int2hex(closure_0));
    ({ h, s, l } = tmpResult.toHsl());
    const obj2 = { h, s: s * stateFromStores, l };
    tmpResult.toHsl();
    const obj4 = _modDef7875(obj2);
    const obj3 = { hex: obj4.toHexString(), hsl: obj4.toHslString() };
    return obj3;
  }, items1);
};

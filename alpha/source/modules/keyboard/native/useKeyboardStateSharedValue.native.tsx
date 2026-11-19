// Module ID: 12810
// Function ID: 12811
// Name: useKeyboardStateSharedValue
// Dependencies: [1498, 1655, 5368, 2023, 4979, 11692, 2]
// Exports: default, getKeyboardStateWorklet

// Module 12810 (useKeyboardStateSharedValue)
import updateSharedValueIfChangedDefault from "updateSharedValueIfChanged" /* 11692 */;
import subscribeToKeyboardUIStore from "subscribeToKeyboardUIStore" /* 1498 */;
import module_1655 from "module_1655" /* 1655 */;
import useCustomKeyboardHeight_mod from "useCustomKeyboardHeight" /* 5368 */;
import useSystemKeyboardHeight_mod from "useSystemKeyboardHeight" /* 2023 */;
import useKeyboardType_mod from "useKeyboardType" /* 4979 */;
import size from "module_2" /* 2 */;

let tmp6;
let tmp7;
let useCustomKeyboardHeight;
let useKeyboardType;
let useSystemKeyboardHeight;
const makeMutable = module_1655.makeMutable;
const obj = { customKeyboardHeight: useCustomKeyboardHeight.getCustomKeyboardHeight(), keyboardHeight: useSystemKeyboardHeight.getSystemKeyboardHeight(), keyboardType: useKeyboardType.getKeyboardType() };
useCustomKeyboardHeight = useCustomKeyboardHeight_mod;
useSystemKeyboardHeight = useSystemKeyboardHeight_mod;
useKeyboardType = useKeyboardType_mod;
const mutable = makeMutable(obj);
subscribeToKeyboardUIStore((arg0) => {
  let customKeyboardHeight;
  let keyboardHeight;
  let keyboardType;
  ({ customKeyboardHeight, keyboardHeight, keyboardType } = arg0);
  updateSharedValueIfChangedDefault(mutable, { customKeyboardHeight, keyboardHeight, keyboardType });
});
const items = [{ code: "(function getKeyboardStateWorklet_useKeyboardStateSharedValueNativeTsx1(){let[keyboardStateSharedValue]=this.__closure;return keyboardStateSharedValue.get();})" }, mutable];
let c0;
[tmp6, tmp7] = items;
function getKeyboardStateWorklet() {
  return _undefined.get();
}
const items1 = [tmp7];
getKeyboardStateWorklet.__closure = items1;
getKeyboardStateWorklet.__workletHash = 13066878289972;
getKeyboardStateWorklet.__initData = tmp6;
const result = size.fileFinishedImporting("modules/keyboard/native/useKeyboardStateSharedValue.native.tsx");

export default function useKeyboardStateSharedValue() {
  return mutable;
};
export { getKeyboardStateWorklet };

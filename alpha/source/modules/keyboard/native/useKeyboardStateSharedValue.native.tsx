// Module ID: 13003
// Function ID: 13004
// Name: useKeyboardStateSharedValue
// Dependencies: [1497, 1654, 5619, 2022, 5230, 11794, 2]
// Exports: default, getKeyboardStateWorklet

// Module 13003 (useKeyboardStateSharedValue)
import updateSharedValueIfChangedDefault from "updateSharedValueIfChanged" /* 11794 */;
import subscribeToKeyboardUIStore from "subscribeToKeyboardUIStore" /* 1497 */;
import module_1654 from "module_1654" /* 1654 */;
import useCustomKeyboardHeight_mod from "useCustomKeyboardHeight" /* 5619 */;
import useSystemKeyboardHeight_mod from "useSystemKeyboardHeight" /* 2022 */;
import useKeyboardType_mod from "useKeyboardType" /* 5230 */;
import size from "module_2" /* 2 */;

let tmp6;
let tmp7;
let useCustomKeyboardHeight;
let useKeyboardType;
let useSystemKeyboardHeight;
const makeMutable = module_1654.makeMutable;
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

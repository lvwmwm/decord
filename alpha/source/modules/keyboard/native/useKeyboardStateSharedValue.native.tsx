// Module ID: 13039
// Function ID: 13040
// Name: useKeyboardStateSharedValue
// Dependencies: [1495, 1652, 5748, 2020, 5335, 11423, 2]
// Exports: default, getKeyboardStateWorklet

// Module 13039 (useKeyboardStateSharedValue)
import updateSharedValueIfChangedDefault from "updateSharedValueIfChanged" /* 11423 */;
import subscribeToKeyboardUIStore from "subscribeToKeyboardUIStore" /* 1495 */;
import module_1652 from "module_1652" /* 1652 */;
import useCustomKeyboardHeight_mod from "useCustomKeyboardHeight" /* 5748 */;
import useSystemKeyboardHeight_mod from "useSystemKeyboardHeight" /* 2020 */;
import useKeyboardType_mod from "useKeyboardType" /* 5335 */;
import size from "module_2" /* 2 */;

let tmp6;
let tmp7;
let useCustomKeyboardHeight;
let useKeyboardType;
let useSystemKeyboardHeight;
const makeMutable = module_1652.makeMutable;
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

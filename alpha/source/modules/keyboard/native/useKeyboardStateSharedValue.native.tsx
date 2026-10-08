// Module ID: 11725
// Function ID: 11726
// Name: useKeyboardStateSharedValue
// Dependencies: [1498, 4810, 6659, 1896, 4947, 10352, 2]
// Exports: default, getKeyboardStateWorklet

// Module 11725 (useKeyboardStateSharedValue)
import updateSharedValueIfChangedDefault from "updateSharedValueIfChanged" /* 10352 */;
import subscribeToKeyboardUIStore from "subscribeToKeyboardUIStore" /* 1498 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4810 */;
import useCustomKeyboardHeight_mod from "useCustomKeyboardHeight" /* 6659 */;
import useSystemKeyboardHeight_mod from "useSystemKeyboardHeight" /* 1896 */;
import useKeyboardType_mod from "useKeyboardType" /* 4947 */;
import size from "module_2" /* 2 */;

let useCustomKeyboardHeight;
let useKeyboardType;
let useSystemKeyboardHeight;
const makeMutable = ReanimatedRexport.makeMutable;
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
function getKeyboardStateWorklet() {
  return mutable.get();
}
getKeyboardStateWorklet.__closure = { keyboardStateSharedValue: mutable };
getKeyboardStateWorklet.__workletHash = 1081829024717;
getKeyboardStateWorklet.__initData = { code: "function getKeyboardStateWorklet_useKeyboardStateSharedValueNativeTsx1(){const{keyboardStateSharedValue}=this.__closure;return keyboardStateSharedValue.get();}" };
const result = size.fileFinishedImporting("modules/keyboard/native/useKeyboardStateSharedValue.native.tsx");

export default function useKeyboardStateSharedValue() {
  return mutable;
};
export { getKeyboardStateWorklet };

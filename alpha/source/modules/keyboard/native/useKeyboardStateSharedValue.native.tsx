// Module ID: 12775
// Function ID: 12776
// Name: useKeyboardStateSharedValue
// Dependencies: [1494, 5090, 5605, 1892, 5204, 11208, 2]
// Exports: default, getKeyboardStateWorklet

// Module 12775 (useKeyboardStateSharedValue)
import updateSharedValueIfChangedDefault from "updateSharedValueIfChanged" /* 11208 */;
import subscribeToKeyboardUIStore from "subscribeToKeyboardUIStore" /* 1494 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5090 */;
import useCustomKeyboardHeight_mod from "useCustomKeyboardHeight" /* 5605 */;
import useSystemKeyboardHeight_mod from "useSystemKeyboardHeight" /* 1892 */;
import useKeyboardType_mod from "useKeyboardType" /* 5204 */;
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

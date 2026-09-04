// Module ID: 11964
// Function ID: 11965
// Name: mutable
// Dependencies: [1494, 4218, 5534, 1893, 4345, 11286, 2]
// Exports: default, getKeyboardStateWorklet

// Module 11964 (mutable)
import uDefault from "u" /* 11286 */;
import module_4218 from "module_4218" /* 4218 */;
import useCustomKeyboardHeight from "useCustomKeyboardHeight" /* 5534 */;
import useSystemKeyboardHeight from "useSystemKeyboardHeight" /* 1893 */;
import useKeyboardType from "useKeyboardType" /* 4345 */;
import importDefaultResult from "subscribeToKeyboardUIStore" /* 1494 */;

module_4218 = { customKeyboardHeight: null, keyboardHeight: null, keyboardType: null };
module_4218[0] = useCustomKeyboardHeight.getCustomKeyboardHeight();
module_4218[1] = useSystemKeyboardHeight.getSystemKeyboardHeight();
module_4218[2] = useKeyboardType.getKeyboardType();
module_4218 = module_4218.makeMutable(module_4218);
importDefaultResult((arg0) => {
  ({ customKeyboardHeight, keyboardHeight, keyboardType } = arg0);
  uDefault(module_4218, { customKeyboardHeight, keyboardHeight, keyboardType });
});
function getKeyboardStateWorklet() {
  return module_4218.get();
}
getKeyboardStateWorklet.__closure = { keyboardStateSharedValue: module_4218 };
getKeyboardStateWorklet.__workletHash = 1081829024717;
getKeyboardStateWorklet.__initData = { code: "function getKeyboardStateWorklet_useKeyboardStateSharedValueNativeTsx1(){const{keyboardStateSharedValue}=this.__closure;return keyboardStateSharedValue.get();}" };
const result = require("set").fileFinishedImporting("modules/keyboard/native/useKeyboardStateSharedValue.native.tsx");

export default function useKeyboardStateSharedValue() {
  return module_4218;
};
export { getKeyboardStateWorklet };

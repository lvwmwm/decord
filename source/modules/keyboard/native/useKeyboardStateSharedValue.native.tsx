// Module ID: 11433
// Function ID: 11434
// Name: mutable
// Dependencies: [1495, 4083, 5411, 1894, 4209, 10377, 2]
// Exports: default, getKeyboardStateWorklet

// Module 11433 (mutable)
import module_4083 from "module_4083";
import useCustomKeyboardHeight from "useCustomKeyboardHeight";
import useSystemKeyboardHeight from "useSystemKeyboardHeight";
import useKeyboardType from "useKeyboardType";
import importDefaultResult from "subscribeToKeyboardUIStore";

module_4083 = { customKeyboardHeight: null, keyboardHeight: null, keyboardType: null };
module_4083[0] = useCustomKeyboardHeight.getCustomKeyboardHeight();
module_4083[1] = useSystemKeyboardHeight.getSystemKeyboardHeight();
module_4083[2] = useKeyboardType.getKeyboardType();
module_4083 = module_4083.makeMutable(module_4083);
require("subscribeToKeyboardUIStore")((arg0) => {
  let customKeyboardHeight;
  let keyboardHeight;
  let keyboardType;
  ({ customKeyboardHeight, keyboardHeight, keyboardType } = arg0);
  importDefault(10377)(module_4083, { customKeyboardHeight, keyboardHeight, keyboardType });
});
function getKeyboardStateWorklet() {
  return module_4083.get();
}
getKeyboardStateWorklet.__closure = { keyboardStateSharedValue: module_4083 };
getKeyboardStateWorklet.__workletHash = 1081829024717;
getKeyboardStateWorklet.__initData = { code: "function getKeyboardStateWorklet_useKeyboardStateSharedValueNativeTsx1(){const{keyboardStateSharedValue}=this.__closure;return keyboardStateSharedValue.get();}" };
const result = require("useCustomKeyboardHeight").fileFinishedImporting("modules/keyboard/native/useKeyboardStateSharedValue.native.tsx");

export default function useKeyboardStateSharedValue() {
  return module_4083;
};
export { getKeyboardStateWorklet };

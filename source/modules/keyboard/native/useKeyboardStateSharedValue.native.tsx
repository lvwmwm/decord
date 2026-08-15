// Module ID: 11154
// Function ID: 11155
// Name: mutable
// Dependencies: [1496, 4115, 5444, 1895, 4239, 10561, 2]
// Exports: default, getKeyboardStateWorklet

// Module 11154 (mutable)
import module_4115 from "module_4115";
import useCustomKeyboardHeight from "useCustomKeyboardHeight";
import useSystemKeyboardHeight from "useSystemKeyboardHeight";
import useKeyboardType from "useKeyboardType";
import importDefaultResult from "subscribeToKeyboardUIStore";

module_4115 = { customKeyboardHeight: null, keyboardHeight: null, keyboardType: null };
module_4115[0] = useCustomKeyboardHeight.getCustomKeyboardHeight();
module_4115[1] = useSystemKeyboardHeight.getSystemKeyboardHeight();
module_4115[2] = useKeyboardType.getKeyboardType();
module_4115 = module_4115.makeMutable(module_4115);
require("subscribeToKeyboardUIStore")((arg0) => {
  let customKeyboardHeight;
  let keyboardHeight;
  let keyboardType;
  ({ customKeyboardHeight, keyboardHeight, keyboardType } = arg0);
  importDefault(10561)(module_4115, { customKeyboardHeight, keyboardHeight, keyboardType });
});
function getKeyboardStateWorklet() {
  return module_4115.get();
}
getKeyboardStateWorklet.__closure = { keyboardStateSharedValue: module_4115 };
getKeyboardStateWorklet.__workletHash = 1081829024717;
getKeyboardStateWorklet.__initData = { code: "function getKeyboardStateWorklet_useKeyboardStateSharedValueNativeTsx1(){const{keyboardStateSharedValue}=this.__closure;return keyboardStateSharedValue.get();}" };
const result = require("useCustomKeyboardHeight").fileFinishedImporting("modules/keyboard/native/useKeyboardStateSharedValue.native.tsx");

export default function useKeyboardStateSharedValue() {
  return module_4115;
};
export { getKeyboardStateWorklet };

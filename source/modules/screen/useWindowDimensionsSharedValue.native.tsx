// Module ID: 15072
// Function ID: 15073
// Name: mutable
// Dependencies: [4042, 1493, 11379, 10336, 2]
// Exports: default, getWindowDimensionsWorklet

// Module 15072 (mutable)
import module_4042 from "module_4042";
import useWindowDimensions from "useWindowDimensions";
import module_4042 from "module_4042";
import useWindowDimensions from "useWindowDimensions";

let obj = {};
const merged = Object.assign(useWindowDimensions.getWindowDimensions());
const mutable = module_4042.makeMutable(obj);
obj = {};
const merged1 = Object.assign(useWindowDimensions.getWindowDimensions({ ignoreKeyboard: true }));
const mutable1 = module_4042.makeMutable(obj);
require("subscribeToWindowDimensions")((arg0, arg1) => {
  importDefault(10336)(mutable, arg0);
  importDefault(10336)(mutable1, arg1);
});
function getWindowDimensionsWorklet(arg0) {
  let ignoreKeyboard;
  if (arg0 != null) {
    ignoreKeyboard = tmp.ignoreKeyboard;
  }
  if (true === ignoreKeyboard) {
    let value = mutable1.get();
  } else {
    value = mutable.get();
  }
  return value;
}
getWindowDimensionsWorklet.__closure = { windowDimensionsSharedValueIgnoringKeyboard: mutable1, windowDimensionsSharedValue: mutable };
getWindowDimensionsWorklet.__workletHash = 17271034964949;
getWindowDimensionsWorklet.__initData = { code: "function getWindowDimensionsWorklet_useWindowDimensionsSharedValueNativeTsx1(params=undefined){const{windowDimensionsSharedValueIgnoringKeyboard,windowDimensionsSharedValue}=this.__closure;return(params===null||params===void 0?void 0:params.ignoreKeyboard)===true?windowDimensionsSharedValueIgnoringKeyboard.get():windowDimensionsSharedValue.get();}" };
const result = require("subscribeToWindowDimensions").fileFinishedImporting("modules/screen/useWindowDimensionsSharedValue.native.tsx");

export default function useWindowDimensionsSharedValue() {
  let ignoreKeyboard;
  if (arg0 != null) {
    ignoreKeyboard = tmp.ignoreKeyboard;
  }
  return true === ignoreKeyboard ? mutable1 : mutable;
};
export { getWindowDimensionsWorklet };

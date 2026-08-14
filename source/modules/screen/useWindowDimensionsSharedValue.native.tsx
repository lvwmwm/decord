// Module ID: 11442
// Function ID: 11443
// Name: mutable
// Dependencies: [4083, 1493, 11443, 10303, 2]
// Exports: default, getWindowDimensionsWorklet

// Module 11442 (mutable)
import module_4083 from "module_4083";
import useWindowDimensions from "useWindowDimensions";
import module_4083 from "module_4083";
import useWindowDimensions from "useWindowDimensions";

let obj = {};
const merged = Object.assign(useWindowDimensions.getWindowDimensions());
const mutable = module_4083.makeMutable(obj);
obj = {};
const merged1 = Object.assign(useWindowDimensions.getWindowDimensions({ ignoreKeyboard: true }));
const mutable1 = module_4083.makeMutable(obj);
require("subscribeToWindowDimensions")((arg0, arg1) => {
  importDefault(10303)(mutable, arg0);
  importDefault(10303)(mutable1, arg1);
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

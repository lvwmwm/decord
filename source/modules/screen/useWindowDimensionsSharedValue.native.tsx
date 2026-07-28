// Module ID: 14813
// Function ID: 112764
// Name: getWindowDimensionsWorklet
// Dependencies: [4026, 1450, 11136, 10020, 2]
// Exports: default

// Module 14813 (getWindowDimensionsWorklet)
import module_4026 from "module_4026";
import useWindowDimensions from "useWindowDimensions";
import module_4026 from "module_4026";
import useWindowDimensions from "useWindowDimensions";

let obj = {};
const merged = Object.assign(useWindowDimensions.getWindowDimensions());
let closure_2 = module_4026.makeMutable(obj);
obj = {};
const merged1 = Object.assign(useWindowDimensions.getWindowDimensions({ ignoreKeyboard: true }));
let closure_3 = module_4026.makeMutable(obj);
require("subscribeToWindowDimensions")((arg0, arg1) => {
  importDefault(10020)(closure_2, arg0);
  importDefault(10020)(closure_3, arg1);
});
let closure_4 = { code: "function getWindowDimensionsWorklet_useWindowDimensionsSharedValueNativeTsx1(params=undefined){const{windowDimensionsSharedValueIgnoringKeyboard,windowDimensionsSharedValue}=this.__closure;return(params===null||params===void 0?void 0:params.ignoreKeyboard)===true?windowDimensionsSharedValueIgnoringKeyboard.get():windowDimensionsSharedValue.get();}" };
const tmp5 = (() => {
  export function getWindowDimensionsWorklet(arg0) {
    let ignoreKeyboard;
    if (null != arg0) {
      ignoreKeyboard = tmp.ignoreKeyboard;
    }
    if (true === ignoreKeyboard) {
      let value = outer1_3.get();
    } else {
      value = outer1_2.get();
    }
    return value;
  }
  getWindowDimensionsWorklet.__closure = { windowDimensionsSharedValueIgnoringKeyboard: closure_3, windowDimensionsSharedValue: closure_2 };
  getWindowDimensionsWorklet.__workletHash = 17271034964949;
  getWindowDimensionsWorklet.__initData = closure_4;
  return getWindowDimensionsWorklet;
})();
const result = require("subscribeToWindowDimensions").fileFinishedImporting("modules/screen/useWindowDimensionsSharedValue.native.tsx");

export default function useWindowDimensionsSharedValue() {
  let ignoreKeyboard;
  if (null != arg0) {
    ignoreKeyboard = tmp.ignoreKeyboard;
  }
  return true === ignoreKeyboard ? closure_3 : closure_2;
};

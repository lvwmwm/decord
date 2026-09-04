// Module ID: 11965
// Function ID: 11966
// Name: mutable
// Dependencies: [4218, 1492, 11966, 11286, 2]
// Exports: default, getWindowDimensionsWorklet

// Module 11965 (mutable)
import set from "set" /* 2 */;
import uDefault from "u" /* 11286 */;
import subscribeToWindowDimensionsDefault from "subscribeToWindowDimensions" /* 11966 */;
import module_4218 from "module_4218" /* 4218 */;
import useWindowDimensions from "useWindowDimensions" /* 1492 */;

let obj = {};
const merged = Object.assign(useWindowDimensions.getWindowDimensions());
const mutable = module_4218.makeMutable(obj);
obj = {};
const merged1 = Object.assign(useWindowDimensions.getWindowDimensions({ ignoreKeyboard: true }));
const mutable1 = module_4218.makeMutable(obj);
subscribeToWindowDimensionsDefault((arg0, arg1) => {
  uDefault(mutable, arg0);
  uDefault(mutable1, arg1);
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
const result = set.fileFinishedImporting("modules/screen/useWindowDimensionsSharedValue.native.tsx");

export default function useWindowDimensionsSharedValue() {
  let ignoreKeyboard;
  if (arg0 != null) {
    ignoreKeyboard = tmp.ignoreKeyboard;
  }
  return true === ignoreKeyboard ? mutable1 : mutable;
};
export { getWindowDimensionsWorklet };

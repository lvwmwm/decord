// Module ID: 11515
// Function ID: 11516
// Name: useWindowDimensionsSharedValue
// Dependencies: [4566, 1479, 11516, 10896, 2]
// Exports: default, getWindowDimensionsWorklet

// Module 11515 (useWindowDimensionsSharedValue)
import updateSharedValueIfChangedDefault from "updateSharedValueIfChanged" /* 10896 */;
import subscribeToWindowDimensionsDefault from "subscribeToWindowDimensions" /* 11516 */;
import ReanimatedRexport_mod from "ReanimatedRexport" /* 4566 */;
import useWindowDimensions_mod from "useWindowDimensions" /* 1479 */;
import size from "module_2" /* 2 */;

let ReanimatedRexport = ReanimatedRexport_mod;
const makeMutable = ReanimatedRexport.makeMutable;
const obj = {};
let useWindowDimensions = useWindowDimensions_mod;
const merged = Object.assign(useWindowDimensions.getWindowDimensions());
const mutable = makeMutable(obj);
ReanimatedRexport = ReanimatedRexport_mod;
const makeMutable2 = ReanimatedRexport.makeMutable;
const obj2 = {};
useWindowDimensions = useWindowDimensions_mod;
const merged1 = Object.assign(useWindowDimensions.getWindowDimensions({ ignoreKeyboard: true }));
const mutable2 = makeMutable2(obj2);
subscribeToWindowDimensionsDefault((arg0, arg1) => {
  updateSharedValueIfChangedDefault(mutable, arg0);
  updateSharedValueIfChangedDefault(mutable2, arg1);
});
function getWindowDimensionsWorklet(arg0) {
  let value;
  let ignoreKeyboard;
  if (arg0 != null) {
    ignoreKeyboard = tmp.ignoreKeyboard;
  }
  if (true === ignoreKeyboard) {
    value = mutable2.get();
  } else {
    value = mutable.get();
  }
  return value;
}
getWindowDimensionsWorklet.__closure = { windowDimensionsSharedValueIgnoringKeyboard: mutable2, windowDimensionsSharedValue: mutable };
getWindowDimensionsWorklet.__workletHash = 17271034964949;
getWindowDimensionsWorklet.__initData = { code: "function getWindowDimensionsWorklet_useWindowDimensionsSharedValueNativeTsx1(params=undefined){const{windowDimensionsSharedValueIgnoringKeyboard,windowDimensionsSharedValue}=this.__closure;return(params===null||params===void 0?void 0:params.ignoreKeyboard)===true?windowDimensionsSharedValueIgnoringKeyboard.get():windowDimensionsSharedValue.get();}" };
const result = size.fileFinishedImporting("modules/screen/useWindowDimensionsSharedValue.native.tsx");

export default function useWindowDimensionsSharedValue() {
  let ignoreKeyboard;
  if (arg0 != null) {
    ignoreKeyboard = tmp.ignoreKeyboard;
  }
  return true === ignoreKeyboard ? mutable2 : mutable;
};
export { getWindowDimensionsWorklet };

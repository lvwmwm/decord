// Module ID: 13005
// Function ID: 13006
// Name: useWindowDimensionsSharedValue
// Dependencies: [1652, 1493, 13006, 11385, 2]
// Exports: default, getWindowDimensionsWorklet

// Module 13005 (useWindowDimensionsSharedValue)
import updateSharedValueIfChangedDefault from "updateSharedValueIfChanged" /* 11385 */;
import subscribeToWindowDimensionsDefault from "subscribeToWindowDimensions" /* 13006 */;
import module_1652_mod from "module_1652" /* 1652 */;
import useWindowDimensions_mod from "useWindowDimensions" /* 1493 */;
import size from "module_2" /* 2 */;

let tmp10;
let tmp11;
let tmp9;
let module_1652 = module_1652_mod;
const makeMutable = module_1652.makeMutable;
const obj = {};
let useWindowDimensions = useWindowDimensions_mod;
const merged = Object.assign(useWindowDimensions.getWindowDimensions());
const mutable = makeMutable(obj);
module_1652 = module_1652_mod;
const makeMutable2 = module_1652.makeMutable;
const obj2 = {};
useWindowDimensions = useWindowDimensions_mod;
const merged1 = Object.assign(useWindowDimensions.getWindowDimensions({ ignoreKeyboard: true }));
const mutable2 = makeMutable2(obj2);
subscribeToWindowDimensionsDefault((arg0, arg1) => {
  updateSharedValueIfChangedDefault(mutable, arg0);
  updateSharedValueIfChangedDefault(mutable2, arg1);
});
const items = [{ code: "(function getWindowDimensionsWorklet_useWindowDimensionsSharedValueNativeTsx1(params=undefined){let[windowDimensionsSharedValueIgnoringKeyboard,windowDimensionsSharedValue]=this.__closure;return(params===null||params===void 0?void 0:params.ignoreKeyboard)===true?windowDimensionsSharedValueIgnoringKeyboard.get():windowDimensionsSharedValue.get();})" }, mutable2, mutable];
let c0;
let c1;
[tmp9, tmp10, tmp11] = items;
function getWindowDimensionsWorklet() {
  let value;
  let ignoreKeyboard;
  if (arg0 != null) {
    ignoreKeyboard = tmp.ignoreKeyboard;
  }
  if (true === ignoreKeyboard) {
    value = _undefined.get();
  } else {
    value = _undefined2.get();
  }
  return value;
}
const items1 = [tmp10, tmp11];
getWindowDimensionsWorklet.__closure = items1;
getWindowDimensionsWorklet.__workletHash = 2245429898348;
getWindowDimensionsWorklet.__initData = tmp9;
const result = size.fileFinishedImporting("modules/screen/useWindowDimensionsSharedValue.native.tsx");

export default function useWindowDimensionsSharedValue() {
  let ignoreKeyboard;
  if (arg0 != null) {
    ignoreKeyboard = tmp.ignoreKeyboard;
  }
  return true === ignoreKeyboard ? mutable2 : mutable;
};
export { getWindowDimensionsWorklet };

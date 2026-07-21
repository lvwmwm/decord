// Module ID: 14587
// Function ID: 109930
// Name: getWindowDimensionsWorklet
// Dependencies: []
// Exports: default

// Module 14587 (getWindowDimensionsWorklet)
const _module = require(dependencyMap[0]);
let obj = {};
const _module1 = require(dependencyMap[1]);
const merged = Object.assign(_module1.getWindowDimensions());
let closure_2 = _module.makeMutable(obj);
const _module2 = require(dependencyMap[0]);
obj = {};
const _module3 = require(dependencyMap[1]);
const merged1 = Object.assign(_module3.getWindowDimensions({ ignoreKeyboard: true }));
let closure_3 = _module2.makeMutable(obj);
importDefault(dependencyMap[2])((arg0, arg1) => {
  importDefault(dependencyMap[3])(closure_2, arg0);
  importDefault(dependencyMap[3])(closure_3, arg1);
});
let closure_4 = { code: "function getWindowDimensionsWorklet_useWindowDimensionsSharedValueNativeTsx1(params=undefined){const{windowDimensionsSharedValueIgnoringKeyboard,windowDimensionsSharedValue}=this.__closure;return(params===null||params===void 0?void 0:params.ignoreKeyboard)===true?windowDimensionsSharedValueIgnoringKeyboard.get():windowDimensionsSharedValue.get();}" };
const _module4 = require(dependencyMap[4]);
const result = _module4.fileFinishedImporting("modules/screen/useWindowDimensionsSharedValue.native.tsx");

export default function useWindowDimensionsSharedValue() {
  let ignoreKeyboard;
  if (null != arg0) {
    ignoreKeyboard = tmp.ignoreKeyboard;
  }
  return true === ignoreKeyboard ? closure_3 : closure_2;
};
export const getWindowDimensionsWorklet = () => {
  function getWindowDimensionsWorklet(arg0) {
    let ignoreKeyboard;
    if (null != arg0) {
      ignoreKeyboard = tmp.ignoreKeyboard;
    }
    if (true === ignoreKeyboard) {
      let value = closure_3.get();
    } else {
      value = closure_2.get();
    }
    return value;
  }
  getWindowDimensionsWorklet.__closure = { windowDimensionsSharedValueIgnoringKeyboard: closure_3, windowDimensionsSharedValue: closure_2 };
  getWindowDimensionsWorklet.__workletHash = 17271034964949;
  getWindowDimensionsWorklet.__initData = closure_4;
  return getWindowDimensionsWorklet;
}();

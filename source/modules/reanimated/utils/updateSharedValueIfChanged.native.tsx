// Module ID: 10019
// Function ID: 77444
// Name: u
// Dependencies: [3991, 2]

// Module 10019 (u)
let fn = function u(get) {
  if (globalThis._WORKLET) {
    const value = get.get();
    let obj = {};
    const merged = Object.assign(value);
    const merged1 = Object.assign(arg1);
    for (const key10025 in obj) {
      let tmp14 = key10025;
      if (value[key10025] === obj[key10025]) {
        continue;
      } else {
        let result = arg0.set(obj);
        break;
      }
      break;
    }
  } else {
    obj = require(3991);
    obj.runOnUI(fn)(get, arg1);
  }
};
let obj = { runOnUI: require("module_3991").runOnUI, updateSharedValueIfChanged: undefined };
fn.__closure = obj;
fn.__workletHash = 6367316923455;
fn.__initData = { code: "function updateSharedValueIfChangedNativeTsx2(sharedValue,value){const{runOnUI,updateSharedValueIfChanged}=this.__closure;if(!_WORKLET){runOnUI(updateSharedValueIfChanged)(sharedValue,value);}else{const _sharedValue=sharedValue.get();const newValue={..._sharedValue,...value};for(const key in newValue){if(_sharedValue[key]!==newValue[key]){sharedValue.set(newValue);break;}}}}" };
obj = { runOnUI: require("module_3991").runOnUI };
fn.__closure = obj;
fn.__workletHash = 13662114226774;
fn.__initData = { code: "function updateSharedValueIfChanged_updateSharedValueIfChangedNativeTsx1(sharedValue,value){const updateSharedValueIfChanged_updateSharedValueIfChangedNativeTsx1=this._recur;const{runOnUI}=this.__closure;if(!_WORKLET){runOnUI(updateSharedValueIfChanged_updateSharedValueIfChangedNativeTsx1)(sharedValue,value);}else{const _sharedValue=sharedValue.get();const newValue={..._sharedValue,...value};for(const key in newValue){if(_sharedValue[key]!==newValue[key]){sharedValue.set(newValue);break;}}}}" };
let closure_3 = { code: "function updateSharedValueArrayIfChanged_updateSharedValueIfChangedNativeTsx3(sharedValue,value){const updateSharedValueArrayIfChanged_updateSharedValueIfChangedNativeTsx3=this._recur;const{runOnUI}=this.__closure;if(!_WORKLET){runOnUI(updateSharedValueArrayIfChanged_updateSharedValueIfChangedNativeTsx3)(sharedValue,value);}else{const _sharedValue=sharedValue.get();if(_sharedValue.length!==value.length){sharedValue.set(value);}for(let i=0;i<value.length;i++){if(_sharedValue[i]!==value[i]){sharedValue.set(value);}}}}" };
let closure_4 = { code: "function updateSharedValueIfChangedNativeTsx4(sharedValue,value){const{runOnUI,updateSharedValueArrayIfChanged}=this.__closure;if(!_WORKLET){runOnUI(updateSharedValueArrayIfChanged)(sharedValue,value);}else{const _sharedValue=sharedValue.get();if(_sharedValue.length!==value.length){sharedValue.set(value);}for(let i=0;i<value.length;i++){if(_sharedValue[i]!==value[i]){sharedValue.set(value);}}}}" };
const tmp2 = (() => {
  const fn = function u(get) {
    if (globalThis._WORKLET) {
      const value = get.get();
      if (value.length !== arg1.length) {
        const result = get.set(arg1);
      }
      for (let num2 = 0; num2 < arg1.length; num2 = num2 + 1) {
        if (value[num2] !== arg1[num2]) {
          let result1 = get.set(arg1);
        }
      }
    } else {
      fn(outer1_1[0]).runOnUI(fn)(get, arg1);
      const obj = fn(outer1_1[0]);
    }
  };
  let obj = { runOnUI: fn(3991).runOnUI, updateSharedValueArrayIfChanged: undefined };
  fn.__closure = obj;
  fn.__workletHash = 10682766507787;
  fn.__initData = closure_4;
  obj = { runOnUI: fn(3991).runOnUI };
  fn.__closure = obj;
  fn.__workletHash = 13887777879519;
  fn.__initData = closure_3;
  return fn;
})();
let result = require("set").fileFinishedImporting("modules/reanimated/utils/updateSharedValueIfChanged.native.tsx");

export default fn;
export const updateSharedValueArrayIfChanged = tmp2;

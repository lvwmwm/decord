// Module ID: 1935
// Function ID: 1936
// Name: resolveTransformSlot
// Dependencies: [32]
// Exports: animateTransformToValues, pickTransformValues, resolveTransformSlot, resolveTransformValue

// Module 1935 (resolveTransformSlot)
import _slicedToArray from "_slicedToArray" /* 32 */;

let tmp2;
let tmp3;
let tmp4;
let tmp5;
let tmp6;
let tmp7;
let tmp8;
const items = [{ code: "(function resolveTransformSlot_Pnpm_utilsTs1(entry,index,values){var _ref,_values,_values$transform;const[key,defaultValue]=Object.entries(entry)[0];const value=(_ref=(_values=values===null||values===void 0?void 0:values[key])!==null&&_values!==void 0?_values:values===null||values===void 0||(_values$transform=values.transform)===null||_values$transform===void 0||(_values$transform=_values$transform[index])===null||_values$transform===void 0?void 0:_values$transform[key])!==null&&_ref!==void 0?_ref:defaultValue;return{key:key,value:value};})" }];
[tmp2] = items;
function resolveTransformSlot(arg0, arg1, targetValues) {
  let first;
  let tmp3;
  let tmp4;
  [first, tmp3] = Object.entries(arg0)[0];
  const entry = { key: first, value: tmp4 };
  tmp4 = undefined;
  if (targetValues != null) {
    tmp4 = targetValues[first];
  }
  if (tmp4 == null) {
    let tmp5;
    if (targetValues != null) {
      const transform = targetValues.transform;
      if (transform != null) {
        if (transform[arg1] != null) {
          tmp5 = tmp7[first];
        }
      }
    }
    tmp4 = tmp5;
  }
  if (tmp4 == null) {
    tmp4 = tmp3;
  }
  return entry;
}
resolveTransformSlot.__workletHash = 8600046602339;
resolveTransformSlot.__initData = tmp2;
const items1 = [{ code: "(function resolveTransformValue_Pnpm_utilsTs2(entry,index,values){let[resolveTransformSlot]=this.__closure;return resolveTransformSlot(entry,index,values).value;})" }, resolveTransformSlot];
[tmp3, tmp4] = items1;
function resolveTransformValue(arg0, arg1, arg2) {
  return _undefined(arg0, arg1, arg2).value;
}
const items2 = [tmp4];
resolveTransformValue.__closure = items2;
resolveTransformValue.__workletHash = 11922144251680;
resolveTransformValue.__initData = tmp3;
const items3 = [{ code: "(function pickTransformValues_Pnpm_utilsTs3(defaults,values){let[resolveTransformSlot]=this.__closure;return defaults.map(function(entry,index){const{key:key,value:value}=resolveTransformSlot(entry,index,values);return{[key]:value};});})" }, resolveTransformSlot];
[tmp5, tmp6] = items3;
function pickTransformValues(arr, arg1) {
  let closure_0 = arg1;
  return arr.map((item, index) => {
    const iter = c0(item, index, closure_0);
    return { [iter.key]: iter.value };
  });
}
const items4 = [tmp6];
pickTransformValues.__closure = items4;
pickTransformValues.__workletHash = 10539171784218;
pickTransformValues.__initData = tmp5;
const items5 = [{ code: "(function animateTransformToValues_Pnpm_utilsTs4(defaults,values,[animation,config],delayFunction,delay){let[resolveTransformSlot]=this.__closure;return defaults.map(function(entry,index){const{key:key,value:value}=resolveTransformSlot(entry,index,values);return{[key]:delayFunction(delay,animation(value,config))};});})" }, resolveTransformSlot];
let c0;
[tmp7, tmp8] = items5;
function animateTransformToValues(arr, arg1, arg2, arg3, arg4) {
  let closure_1;
  let nextResult;
  let nextResult1;
  let closure_0 = arg1;
  [closure_1, ] = arg2;
  let closure_3 = arg3;
  let closure_4 = arg4;
  return arr.map((item, index) => {
    const iter = c0(item, index, closure_0);
    const obj = { [key]: closure_3(closure_4, nextResult(iter.value, nextResult1)) };
    return obj;
  });
}
const items6 = [tmp8];
animateTransformToValues.__closure = items6;
animateTransformToValues.__workletHash = 492971438186;
animateTransformToValues.__initData = tmp7;

export { resolveTransformSlot };
export { resolveTransformValue };
export { pickTransformValues };
export { animateTransformToValues };

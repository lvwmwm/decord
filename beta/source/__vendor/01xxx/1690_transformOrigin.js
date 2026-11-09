// Module ID: 1690
// Function ID: 1691
// Name: transformOrigin
// Dependencies: []
// Exports: processTransformOrigin

// Module 1690 (transformOrigin)
let hasOwnProperty;

let pnpm_transformOriginTs2;
let pnpm_transformOriginTs3;
let tmp10;
let tmp11;
let tmp12;
let tmp13;
let tmp14;
let tmp15;
let tmp16;
let tmp17;
let tmp18;
let tmp19;
let tmp2;
let tmp3;
let tmp4;
let tmp5;
let tmp6;
let tmp7;
let tmp8;
let tmp9;
const rect = { left: 0, center: "50%", right: "100%" };
const rect1 = { top: 0, center: "50%", bottom: "100%" };
let items = [{ code: "(function getAllowedValues_Pnpm_transformOriginTs1(axis,isArray){let[HORIZONTAL_CONVERSIONS,VERTICAL_CONVERSIONS]=this.__closure;const allowed=[];if(isArray){allowed.push('numbers');}else{allowed.push('numbers with px unit');}allowed.push('percentages');let keywords=[];switch(axis){case'x':keywords=Object.keys(HORIZONTAL_CONVERSIONS);break;case'y':keywords=Object.keys(VERTICAL_CONVERSIONS);break;}if(keywords.length){allowed.push(\"keywords (\"+keywords.join(', ')+\")\");}allowed[allowed.length-1]=\"or \"+allowed[allowed.length-1];return allowed.join(', ');})" }, rect, rect1];
[tmp2, tmp3, tmp4] = items;
function getAllowedValues(arg0, arg1) {
  let keys;
  const items = [];
  const push = items.push;
  const tmp = arg1;
  if (tmp) {
    push("numbers");
  } else {
    push("numbers with px unit");
  }
  items.push("percentages");
  if ("x" === arg0) {
    const _Object2 = Object;
    keys = Object.keys(c0);
  } else {
    keys = [];
    if ("y" === arg0) {
      const _Object = Object;
      keys = Object.keys(c1);
    }
  }
  if (keys.length) {
    const _HermesInternal = HermesInternal;
    items.push("keywords (" + keys.join(", ") + ")");
  }
  const diff = items.length - 1;
  items[diff] = "or " + items[items.length - 1];
  return items.join(", ");
}
let items1 = [tmp3, tmp4];
getAllowedValues.__closure = items1;
getAllowedValues.__workletHash = 16372008677436;
getAllowedValues.__initData = tmp2;
const items2 = [{ code: "(function pnpm_transformOriginTs2(value){return\"Invalid transformOrigin: \"+JSON.stringify(value)+\". Expected 1-3 values.\";})" }];
[tmp5] = items2;
const obj = { invalidTransformOrigin: pnpm_transformOriginTs2, invalidValue: pnpm_transformOriginTs3 };
pnpm_transformOriginTs2 = function pnpm_transformOriginTs2(arg0) {
  return "Invalid transformOrigin: " + JSON.stringify(arg0) + ". Expected 1-3 values.";
};
pnpm_transformOriginTs2.__workletHash = 12318349369709;
pnpm_transformOriginTs2.__initData = tmp5;
const items3 = [{ code: "(function pnpm_transformOriginTs3(value,axis,origin,isArray){let[getAllowedValues]=this.__closure;return\"Invalid value \\\"\"+value+\"\\\" for the \"+axis+\"-axis in transformOrigin \"+JSON.stringify(origin)+\". Allowed values: \"+getAllowedValues(axis,isArray)+\".\";})" }, getAllowedValues];
[tmp6, tmp7] = items3;
pnpm_transformOriginTs3 = function pnpm_transformOriginTs3(arg0, arg1, arg2, arg3) {
  const json = JSON.stringify(arg2);
  return "Invalid value \"" + arg0 + "\" for the " + arg1 + "-axis in transformOrigin " + json + ". Allowed values: " + _undefined(arg1, arg3) + ".";
};
const items4 = [tmp7];
pnpm_transformOriginTs3.__closure = items4;
pnpm_transformOriginTs3.__workletHash = 5048846349923;
pnpm_transformOriginTs3.__initData = tmp6;
const items5 = [{ code: "(function maybeSwapComponents_Pnpm_transformOriginTs4(components){let[VERTICAL_CONVERSIONS,HORIZONTAL_CONVERSIONS]=this.__closure;if(Object.prototype.hasOwnProperty.call(VERTICAL_CONVERSIONS,components[0])&&(components[1]===undefined||Object.prototype.hasOwnProperty.call(HORIZONTAL_CONVERSIONS,components[1]))){const copy=[...components];[copy[0],copy[1]]=[copy[1],copy[0]];return copy;}return components;})" }, rect1, rect];
[tmp8, tmp9, tmp10] = items5;
function maybeSwapComponents(arg0) {
  hasOwnProperty = Object.prototype.hasOwnProperty;
  if (hasOwnProperty.call(c0, arg0[0])) {
    if (undefined !== arg0[1]) {
      const _Object = Object;
      const hasOwnProperty2 = Object.prototype.hasOwnProperty;
    }
    const items = [];
    HermesBuiltin.arraySpread(items, arg0, 0);
    const items1 = [, ];
    [arr2[1], arr2[0]] = items;
    items[0] = items1[0];
    items[1] = items1[1];
    return items;
  }
  return arg0;
}
const items6 = [tmp9, tmp10];
maybeSwapComponents.__closure = items6;
maybeSwapComponents.__workletHash = 1025039578605;
maybeSwapComponents.__initData = tmp8;
const items7 = [{ code: "(function parseValue_Pnpm_transformOriginTs5(value,allowPercentages,customParse,getError,keywordConversions){if(typeof value==='number'){return value;}if(keywordConversions&&Object.prototype.hasOwnProperty.call(keywordConversions,value)){return keywordConversions[value];}if(allowPercentages&&value.endsWith('%')){const num=parseFloat(value);if(num===0){return 0;}if(!isNaN(num)){return num+\"%\";}}const parsed=customParse(value);if(parsed===null){throw new Error(\"[Reanimated] \"+getError());}return parsed;})" }];
[tmp11] = items7;
function parseValue(num, arg1, fn, fn2, arg4) {
  if (typeof num === "number") {
    return num;
  } else {
    const tmp12 = arg4;
    if (tmp12) {
      const _Object = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      if (hasOwnProperty.call(arg4, num)) {
        return arg4[num];
      }
    }
    const tmp2 = arg1;
    if (tmp2) {
      if (num.endsWith("%")) {
        const _parseFloat = parseFloat;
        const parsed = parseFloat(num);
        if (0 === parsed) {
          return 0;
        } else {
          const _isNaN = isNaN;
          if (!isNaN(parsed)) {
            const _HermesInternal = HermesInternal;
            return "" + parsed + "%";
          }
        }
      }
    }
    const tmp6 = fn(num);
    if (null === tmp6) {
      const _Error = Error;
      const _HermesInternal2 = HermesInternal;
      const self = this;
      const self2 = this;
      const error = new Error("[Reanimated] " + fn2());
      throw error;
    } else {
      return tmp6;
    }
  }
}
parseValue.__workletHash = 9665217514367;
parseValue.__initData = tmp11;
const items8 = [{ code: "(function parsePx_Pnpm_transformOriginTs6(component){if(component.endsWith('px')||component==='0'){const num=parseFloat(component);if(!isNaN(num)){return num;}}return null;})" }];
[tmp12] = items8;
function parsePx(str) {
  if (str.endsWith("px")) {
    const _parseFloat = parseFloat;
    const parsed = parseFloat(str);
    const _isNaN = isNaN;
    if (!isNaN(parsed)) {
      return parsed;
    }
  }
  return null;
}
parsePx.__workletHash = 3767372639537;
parsePx.__initData = tmp12;
const items9 = [{ code: "(function pnpm_transformOriginTs7(value){let[parsePx,ERROR_MESSAGES,maybeSwapComponents,parseValue,HORIZONTAL_CONVERSIONS,VERTICAL_CONVERSIONS]=this.__closure;var _components$,_components$2,_components$3;const isArray=Array.isArray(value);let components=typeof value==='string'?value.split(/\\s+/):value;const customParse=isArray?function(){return null;}:parsePx;if(components.length<1||components.length>3){throw new Error(\"[Reanimated] \"+ERROR_MESSAGES.invalidTransformOrigin(value));}components=maybeSwapComponents(components);return[parseValue((_components$=components[0])!==null&&_components$!==void 0?_components$:'50%',true,customParse,function(){return ERROR_MESSAGES.invalidValue(components[0],'x',value,isArray);},HORIZONTAL_CONVERSIONS),parseValue((_components$2=components[1])!==null&&_components$2!==void 0?_components$2:'50%',true,customParse,function(){return ERROR_MESSAGES.invalidValue(components[1],'y',value,isArray);},VERTICAL_CONVERSIONS),parseValue((_components$3=components[2])!==null&&_components$3!==void 0?_components$3:0,false,customParse,function(){return ERROR_MESSAGES.invalidValue(components[2],'z',value,isArray);})];})" }, parsePx, obj, maybeSwapComponents, parseValue, rect, rect1];
let c0;
let c1;
let c2;
let c3;
let c4;
let c5;
[tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19] = items9;
function pnpm_transformOriginTs7(str) {
  let fn;
  let closure_0 = str;
  const isArray = Array.isArray(str);
  let parts = str;
  if (typeof str === "string") {
    parts = str.split(/\s+/);
  }
  if (isArray) {
    fn = () => null;
  } else {
    fn = closure_0;
  }
  if (parts.length >= 1) {
    if (parts.length <= 3) {
      const tmp12 = parts(parts);
      parts = tmp12;
      str = tmp12[0];
      if (str == null) {
        str = "50%";
      }
      const items = [_undefined(str, true, fn, () => isArray.invalidValue(parts[0], "x", str, isArray), c4), , ];
      let str2 = tmp12[1];
      if (str2 == null) {
        str2 = "50%";
      }
      items[1] = _undefined(str2, true, fn, () => isArray.invalidValue(parts[1], "y", str, isArray), c5);
      let num = tmp12[2];
      if (num == null) {
        num = 0;
      }
      items[2] = _undefined(num, false, fn, () => isArray.invalidValue(parts[2], "z", str, isArray));
      return items;
    }
  }
  const error = new Error("[Reanimated] " + isArray.invalidTransformOrigin(str));
  throw error;
}
const items10 = [tmp14, tmp15, tmp16, tmp17, tmp18, tmp19];
pnpm_transformOriginTs7.__closure = items10;
pnpm_transformOriginTs7.__workletHash = 9922296706760;
pnpm_transformOriginTs7.__initData = tmp13;

export const ERROR_MESSAGES = obj;
export const processTransformOrigin = pnpm_transformOriginTs7;

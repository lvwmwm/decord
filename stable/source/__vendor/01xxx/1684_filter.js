// Module ID: 1684
// Function ID: 1685
// Name: filter
// Dependencies: [32, 1677, 1676, 1679, 1675]
// Exports: processFilter

// Module 1684 (filter)
import convertPropertyToArray from "convertPropertyToArray" /* 1675 */;
import guards from "guards" /* 1676 */;
import CSS_NUMBER_PATTERN from "CSS_NUMBER_PATTERN" /* 1677 */;
import colors from "colors" /* 1679 */;
import _slicedToArray from "_slicedToArray" /* 32 */;

let invalidFilter;
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
let tmp20;
let tmp21;
let tmp22;
let tmp23;
let tmp24;
let tmp25;
let tmp26;
let tmp27;
let tmp28;
let tmp29;
let tmp3;
let tmp30;
let tmp31;
let tmp4;
let tmp5;
let tmp6;
let tmp7;
let tmp8;
let tmp9;
const regExp = new RegExp("^(" + CSS_NUMBER_PATTERN.CSS_NUMBER_PATTERN + ")([a-z%]*)$");
let items = [{ code: "(function pnpm_filterTs1(value){const{numberValue:numberValue,unit:unit}=value;if(numberValue!==0&&unit!=='deg'&&unit!=='rad'){return null;}return unit==='rad'?180*numberValue/Math.PI:numberValue;})" }];
[tmp3] = items;
function pnpm_filterTs1(arg0) {
  let numberValue;
  let unit;
  ({ numberValue, unit } = arg0);
  if (0 !== numberValue) {
    let tmp;
    if ("deg" !== unit) {
      tmp = null;
    }
    return tmp;
  }
  let result = numberValue;
  if ("rad" === unit) {
    const _Math = Math;
    result = 180 * numberValue / Math.PI;
  }
  tmp = result;
}
pnpm_filterTs1.__workletHash = 6457946423977;
pnpm_filterTs1.__initData = tmp3;
let items1 = [{ code: "(function pnpm_filterTs2(value){const{numberValue:numberValue,unit:unit}=value;if(unit&&unit!=='px'||numberValue<0){return null;}return numberValue;})" }];
[tmp4] = items1;
function pnpm_filterTs2(arg0) {
  let numberValue;
  let tmp;
  let unit;
  ({ numberValue, unit } = arg0);
  if (!unit) {
    tmp = null;
    if (numberValue >= 0) {
      tmp = numberValue;
    }
  } else {
    tmp = null;
  }
  return tmp;
}
pnpm_filterTs2.__workletHash = 1945432449109;
pnpm_filterTs2.__initData = tmp4;
let items2 = [{ code: "(function pnpm_filterTs3(value){const{numberValue:numberValue,unit:unit}=value;if(unit&&unit!=='%'||numberValue<0){return null;}return unit==='%'?numberValue/100:numberValue;})" }];
[tmp5] = items2;
function pnpm_filterTs3(arg0) {
  let numberValue;
  let tmp;
  let unit;
  ({ numberValue, unit } = arg0);
  if (!unit) {
    tmp = null;
    if (numberValue >= 0) {
      let result = numberValue;
      if ("%" === unit) {
        result = numberValue / 100;
      }
      tmp = result;
    }
  } else {
    tmp = null;
  }
  return tmp;
}
pnpm_filterTs3.__workletHash = 1656991056212;
pnpm_filterTs3.__initData = tmp5;
const items3 = [{ code: "(function pnpm_filterTs4(value){let[DROP_SHADOW_REGEX,isLength,FILTER_VALUE_REGEX,LENGTH_MAPPINGS]=this.__closure;var _value$match;const match=(_value$match=value.match(DROP_SHADOW_REGEX))!==null&&_value$match!==void 0?_value$match:[];const result={offsetX:0,offsetY:0};let foundLengthsCount=0;for(const part of match){if(isLength(part)){if(!part.trim().match(FILTER_VALUE_REGEX)){return null;}result[LENGTH_MAPPINGS[foundLengthsCount++]]=parseFloat(part);}else{result.color=part.trim();}}return result;})" }, /[^,\s()]+(?:\([^()]*\))?/g, guards.isLength, regExp, ["offsetX", "offsetY", "standardDeviation"]];
[tmp6, tmp7, tmp8, tmp9, tmp10] = items3;
function pnpm_filterTs4(str) {
  let match = str.match(c0);
  if (match == null) {
    match = [];
  }
  const obj = { offsetX: 0, offsetY: 0 };
  let num = 0;
  const iter = match[Symbol.iterator]();
  str = iter.next();
  while (iter !== undefined) {
    let tmp = str;
    let tmp3 = _undefined(str);
    let str2 = str.trim();
    if (tmp3) {
      if (str2.match(c2)) {
        let tmp9 = +num;
        num = tmp9 + 1;
        let _parseFloat = parseFloat;
        obj[_undefined2[tmp9]] = parseFloat(tmp);
      } else {
        iter.return();
        return null;
      }
    } else {
      obj.color = str2;
    }
    continue;
  }
  return obj;
}
const items4 = [tmp7, tmp8, tmp9, tmp10];
pnpm_filterTs4.__closure = items4;
pnpm_filterTs4.__workletHash = 2834834895560;
pnpm_filterTs4.__initData = tmp6;
const items5 = [{ code: "(function pnpm_filterTs5(value,context){let[parseDropShadowString,processColor]=this.__closure;const dropShadow=typeof value==='string'?parseDropShadowString(value):value;if(dropShadow===null){return null;}const{color='#000',offsetX=0,offsetY=0,standardDeviation=0}=dropShadow;const parsedStdDev=parseFloat(standardDeviation);if(parsedStdDev<0){return null;}return{color:processColor(color,context),offsetX:parseFloat(offsetX),offsetY:parseFloat(offsetY),standardDeviation:parsedStdDev};})" }, pnpm_filterTs4, colors.processColor];
[tmp11, tmp12, tmp13] = items5;
function pnpm_filterTs5(str, arg1) {
  let tmp = str;
  if (typeof str === "string") {
    tmp = _undefined(str);
  }
  if (null === tmp) {
    return null;
  } else {
    const color = tmp.color;
    str = "#000";
    if (undefined !== color) {
      str = color;
    }
    const offsetX = tmp.offsetX;
    let num2 = 0;
    if (undefined !== offsetX) {
      num2 = offsetX;
    }
    const offsetY = tmp.offsetY;
    let num3 = 0;
    if (undefined !== offsetY) {
      num3 = offsetY;
    }
    const standardDeviation = tmp.standardDeviation;
    let num4 = 0;
    const _parseFloat = parseFloat;
    if (undefined !== standardDeviation) {
      num4 = standardDeviation;
    }
    const _parseFloatResult = _parseFloat(num4);
    let tmp4 = null;
    if (_parseFloatResult >= 0) {
      const _parseFloat2 = parseFloat;
      const _parseFloat3 = parseFloat;
      tmp4 = { color: _undefined2(str, arg1), offsetX: parseFloat(num2), offsetY: parseFloat(num3), standardDeviation: _parseFloatResult };
      const obj = { color: _undefined2(str, arg1), offsetX: parseFloat(num2), offsetY: parseFloat(num3), standardDeviation: _parseFloatResult };
    }
    return tmp4;
  }
}
const items6 = [tmp12, tmp13];
pnpm_filterTs5.__closure = items6;
pnpm_filterTs5.__workletHash = 1134362439880;
pnpm_filterTs5.__initData = tmp11;
const items7 = [{ code: "(function pnpm_filterTs6(filterName,filterValue,context){let[parseDropShadow,isNumber,FILTER_VALUE_REGEX,parseHueRotate,parseBlur,parsePercentageFilter]=this.__closure;if(filterName==='dropShadow'){const dropShadow=parseDropShadow(filterValue,context);if(dropShadow===null){return null;}return{dropShadow:dropShadow};}let numberValue;let unit;if(isNumber(filterValue)){if(filterName==='hueRotate'){return{hueRotate:filterValue};}numberValue=filterValue;unit='';}else{const stringValue=filterValue;const match=stringValue.match(FILTER_VALUE_REGEX);if(!match){return null;}numberValue=parseFloat(match[1]);unit=match[2];}let amount;switch(filterName){case'hueRotate':amount=parseHueRotate({numberValue:numberValue,unit:unit});break;case'blur':amount=parseBlur({numberValue:numberValue,unit:unit});break;case'brightness':case'contrast':case'grayscale':case'invert':case'opacity':case'saturate':case'sepia':amount=parsePercentageFilter({numberValue:numberValue,unit:unit});break;default:return null;}if(amount===null){return null;}return{[filterName]:amount};})" }, pnpm_filterTs5, guards.isNumber, regExp, pnpm_filterTs1, pnpm_filterTs2, pnpm_filterTs3];
let c3;
let c4;
let c5;
[tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20] = items7;
function pnpm_filterTs6(arg0, hueRotate, arg2) {
  if ("dropShadow" === arg0) {
    const tmp14 = _undefined(hueRotate, arg2);
    let tmp15 = null;
    if (null !== tmp14) {
      tmp15 = { dropShadow: tmp14 };
      const obj2 = { dropShadow: tmp14 };
    }
    return tmp15;
  } else {
    let str;
    let parsed;
    let tmp8;
    if (_undefined2(hueRotate)) {
      str = "";
      parsed = hueRotate;
      if ("hueRotate" === arg0) {
        return { hueRotate };
      }
    } else {
      const match = hueRotate.match(c2);
      if (match) {
        const _parseFloat = parseFloat;
        parsed = parseFloat(match[1]);
        str = match[2];
      } else {
        return null;
      }
    }
    if ("hueRotate" === arg0) {
      const obj4 = { numberValue: parsed, unit: str };
      tmp8 = _undefined3(obj4);
    } else if ("blur" === arg0) {
      const obj5 = { numberValue: parsed, unit: str };
      tmp8 = _undefined4(obj5);
    } else {
      if ("brightness" !== arg0) {
        if ("contrast" !== arg0) {
          if ("grayscale" !== arg0) {
            if ("invert" !== arg0) {
              if ("opacity" !== arg0) {
                if ("saturate" !== arg0) {
                  if ("sepia" !== arg0) {
                    return null;
                  }
                }
              }
            }
          }
        }
      }
      const obj = { numberValue: parsed, unit: str };
      tmp8 = _undefined5(obj);
    }
    let tmp11 = null;
    if (null !== tmp8) {
      const obj6 = {};
      obj6[arg0] = tmp8;
      tmp11 = obj6;
    }
    return tmp11;
  }
}
const items8 = [tmp15, tmp16, tmp17, tmp18, tmp19, tmp20];
pnpm_filterTs6.__closure = items8;
pnpm_filterTs6.__workletHash = 5250098115648;
pnpm_filterTs6.__initData = tmp14;
const items9 = [{ code: "(function pnpm_filterTs7(value,context){let[FILTER_REGEX,parseFilterProperty,camelizeKebabCase]=this.__closure;const matches=Array.from(value.matchAll(FILTER_REGEX));const filterArray=[];for(const match of matches){const[,name,content]=match;if(!name||!content){return[];}const parsed=parseFilterProperty(camelizeKebabCase(name),content,context);if(parsed===null){return[];}filterArray.push(parsed);}return filterArray;})" }, /([\w-]+)\(([^()]*|\([^()]*\)|[^()]*\([^()]*\)[^()]*)\)/g, pnpm_filterTs6, convertPropertyToArray.camelizeKebabCase];
[tmp21, tmp22, tmp23, tmp24] = items9;
function pnpm_filterTs7(str, arg1) {
  let tmp5;
  let tmp7;
  const items = [];
  const arr = Array.from(str.matchAll(c0));
  const obj = arr[Symbol.iterator]();
  while (obj !== undefined) {
    [, tmp5, tmp7] = tmp2;
    if (tmp5) {
      let tmp8 = tmp7;
      if (tmp8) {
        let tmp14 = _undefined(_undefined2(tmp6), tmp7, arg1);
        if (null === tmp14) {
          let items1 = [];
          obj.return();
          return items1;
        } else {
          let arr2 = items.push(tmp15);
          continue;
        }
      }
    }
    let items2 = [];
    obj.return();
    return items2;
  }
  return items;
}
const items10 = [tmp22, tmp23, tmp24];
pnpm_filterTs7.__closure = items10;
pnpm_filterTs7.__workletHash = 10930848866065;
pnpm_filterTs7.__initData = tmp21;
const items11 = [{ code: "(function pnpm_filterTs8(value,context){let[parseFilterProperty]=this.__closure;const filterArray=[];for(const filter of value){const entries=Object.entries(filter);const parsed=entries.length===1?parseFilterProperty(entries[0][0],entries[0][1],context):null;if(parsed===null){return[];}filterArray.push(parsed);}return filterArray;})" }, pnpm_filterTs6];
[tmp25, tmp26] = items11;
function pnpm_filterTs8(arg0, arg1) {
  const items = [];
  const obj = arg0[Symbol.iterator]();
  while (obj !== undefined) {
    let _Object = Object;
    let entries = Object.entries(tmp);
    let tmp2 = entries;
    let tmp3 = null;
    if (1 === entries.length) {
      tmp3 = _undefined(tmp2[0][0], tmp2[0][1], arg1);
    }
    if (null === tmp3) {
      let items1 = [];
      obj.return();
      return items1;
    } else {
      let arr = items.push(tmp6);
      continue;
    }
  }
  return items;
}
const items12 = [tmp26];
pnpm_filterTs8.__closure = items12;
pnpm_filterTs8.__workletHash = 12944320054111;
pnpm_filterTs8.__initData = tmp25;
const items13 = [{ code: "(function invalidFilter_Pnpm_filterTs9(value){return\"Invalid filter value: \"+JSON.stringify(value);})" }];
[tmp27] = items13;
let obj = { invalidFilter };
invalidFilter = function invalidFilter(arg0) {
  return "Invalid filter value: " + JSON.stringify(arg0);
};
invalidFilter.__workletHash = 1745758076929;
invalidFilter.__initData = tmp27;
const items14 = [{ code: "(function pnpm_filterTs10(value,context){let[parseFilterString,parseFilterArray,ERROR_MESSAGES]=this.__closure;if(value==='none'||value.length===0){return[];}const filterArray=typeof value==='string'?parseFilterString(value,context):parseFilterArray(value,context);if(filterArray.length===0){throw new Error(\"[Reanimated] \"+ERROR_MESSAGES.invalidFilter(value));}return filterArray;})" }, pnpm_filterTs7, pnpm_filterTs8, obj];
let c0;
let c1;
let c2;
[tmp28, tmp29, tmp30, tmp31] = items14;
function pnpm_filterTs10(str, arg1) {
  if ("none" !== str) {
    if (0 !== str.length) {
      let arr;
      if (typeof str === "string") {
        arr = _undefined(str, arg1);
      } else {
        arr = _undefined2(str, arg1);
      }
      if (0 === arr.length) {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const self = this;
        const self2 = this;
        const error = new Error("[Reanimated] " + _undefined3.invalidFilter(str));
        throw error;
      } else {
        return arr;
      }
    }
  }
  return [];
}
const items15 = [tmp29, tmp30, tmp31];
pnpm_filterTs10.__closure = items15;
pnpm_filterTs10.__workletHash = 9489959588097;
pnpm_filterTs10.__initData = tmp28;

export const ERROR_MESSAGES = obj;
export const processFilter = pnpm_filterTs10;

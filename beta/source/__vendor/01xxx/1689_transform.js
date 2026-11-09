// Module ID: 1689
// Function ID: 1690
// Name: transform
// Dependencies: [32, 1674]
// Exports: processTransform

// Module 1689 (transform)
import _mod1674 from "module_1674" /* 1674 */;
import _slicedToArray from "_slicedToArray" /* 32 */;

let invalidTransform;
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
let tmp32;
let tmp33;
let tmp34;
let tmp35;
let tmp36;
let tmp37;
let tmp38;
let tmp39;
let tmp4;
let tmp40;
let tmp41;
let tmp42;
let tmp43;
let tmp44;
let tmp45;
let tmp46;
let tmp47;
let tmp48;
let tmp49;
let tmp5;
let tmp50;
let tmp6;
let tmp7;
let tmp8;
let tmp9;
let items = [{ code: "(function invalidTransform_Pnpm_transformTs1(transform){return\"Invalid transform property: \"+transform;})" }];
[tmp2] = items;
let obj = { invalidTransform };
invalidTransform = function invalidTransform(arg0) {
  return "Invalid transform property: " + arg0;
};
invalidTransform.__workletHash = 10133863561085;
invalidTransform.__initData = tmp2;
let items1 = [{ code: "(function parseValues_Pnpm_transformTs2(valueString){return valueString.split(',').map(function(value){const trimmedValue=value.trim();if(['deg','rad','%'].some(function(unit){return trimmedValue.endsWith(unit);})){return trimmedValue;}const numValue=parseFloat(trimmedValue);return isNaN(numValue)?trimmedValue:numValue;});})" }];
[tmp3] = items1;
function parseValues(str) {
  const parts = str.split(",");
  return parts.map((item) => {
    const trimmed = item.trim();
    const items = ["deg", "rad", "%"];
    if (items.some((item) => trimmed.endsWith(item))) {
      return trimmed;
    } else {
      const _parseFloat = parseFloat;
      let parsed = parseFloat(trimmed);
      const _isNaN = isNaN;
      if (isNaN(parsed)) {
        parsed = trimmed;
      }
      return parsed;
    }
  });
}
parseValues.__workletHash = 16792377556904;
parseValues.__initData = tmp3;
let items2 = [{ code: "(function parseTranslateX_Pnpm_transformTs3(values){let[isNumber,isPercentage]=this.__closure;return values.length===1&&(isNumber(values[0])||isPercentage(values[0]))?[{translateX:values[0]}]:[];})" }, _mod1674.isNumber, _mod1674.isPercentage];
[tmp4, tmp5, tmp6] = items2;
function parseTranslateX(arg0) {
  let items;
  if (1 !== arg0.length) {
    items = [];
  } else {
    const items1 = [{ translateX: arg0[0] }];
    items = items1;
    const obj = { translateX: arg0[0] };
  }
  return items;
}
let items3 = [tmp5, tmp6];
parseTranslateX.__closure = items3;
parseTranslateX.__workletHash = 1467157381340;
parseTranslateX.__initData = tmp4;
const items4 = [{ code: "(function parseTranslateY_Pnpm_transformTs4(values){let[isNumber,isPercentage]=this.__closure;return values.length===1&&(isNumber(values[0])||isPercentage(values[0]))?[{translateY:values[0]}]:[];})" }, _mod1674.isNumber, _mod1674.isPercentage];
[tmp7, tmp8, tmp9] = items4;
function parseTranslateY(arg0) {
  let items;
  if (1 !== arg0.length) {
    items = [];
  } else {
    const items1 = [{ translateY: arg0[0] }];
    items = items1;
    const obj = { translateY: arg0[0] };
  }
  return items;
}
const items5 = [tmp8, tmp9];
parseTranslateY.__closure = items5;
parseTranslateY.__workletHash = 12094491490523;
parseTranslateY.__initData = tmp7;
const items6 = [{ code: "(function parseTranslate_Pnpm_transformTs5(values){let[parseTranslateX,parseTranslateY]=this.__closure;var _values$;if(values.length>2){return[];}const result=parseTranslateX([values[0]]).concat(parseTranslateY([(_values$=values[1])!==null&&_values$!==void 0?_values$:0]));return result.length===2?result:[];})" }, parseTranslateX, parseTranslateY];
[tmp10, tmp11, tmp12] = items6;
function parseTranslate(arg0) {
  if (arg0.length > 2) {
    return [];
  } else {
    const items = [arg0[0]];
    let num = arg0[1];
    const concat = _undefined(items).concat;
    _undefined(items);
    const tmp3 = c1;
    if (num == null) {
      num = 0;
    }
    const items1 = [num];
    let combined = concat(tmp3(items1));
    if (2 !== combined.length) {
      combined = [];
    }
    return combined;
  }
}
const items7 = [tmp11, tmp12];
parseTranslate.__closure = items7;
parseTranslate.__workletHash = 428035541875;
parseTranslate.__initData = tmp10;
const items8 = [{ code: "(function parseScaleX_Pnpm_transformTs6(values){let[isNumber]=this.__closure;return values.length===1&&isNumber(values[0])?[{scaleX:values[0]}]:[];})" }, _mod1674.isNumber];
[tmp13, tmp14] = items8;
function parseScaleX(arg0) {
  if (1 === arg0.length) {
    if (_undefined(arg0[0])) {
      const items = [{ scaleX: arg0[0] }];
      const obj = { scaleX: arg0[0] };
    }
    return [];
  }
}
const items9 = [tmp14];
parseScaleX.__closure = items9;
parseScaleX.__workletHash = 4770326947227;
parseScaleX.__initData = tmp13;
const items10 = [{ code: "(function parseScaleY_Pnpm_transformTs7(values){let[isNumber]=this.__closure;return values.length===1&&isNumber(values[0])?[{scaleY:values[0]}]:[];})" }, _mod1674.isNumber];
[tmp15, tmp16] = items10;
function parseScaleY(arg0) {
  if (1 === arg0.length) {
    if (_undefined(arg0[0])) {
      const items = [{ scaleY: arg0[0] }];
      const obj = { scaleY: arg0[0] };
    }
    return [];
  }
}
const items11 = [tmp16];
parseScaleY.__closure = items11;
parseScaleY.__workletHash = 16489187686298;
parseScaleY.__initData = tmp15;
const items12 = [{ code: "(function parseScale_Pnpm_transformTs8(values){let[isNumber,parseScaleX,parseScaleY]=this.__closure;var _values$;if(values.length>2){return[];}if(values.length===1){return isNumber(values[0])?[{scale:values[0]}]:[];}const result=parseScaleX([values[0]]).concat(parseScaleY([(_values$=values[1])!==null&&_values$!==void 0?_values$:values[0]]));return result.length===2?result:[];})" }, _mod1674.isNumber, parseScaleX, parseScaleY];
[tmp17, tmp18, tmp19, tmp20] = items12;
function parseScale(arg0) {
  if (arg0.length > 2) {
    return [];
  } else if (1 === arg0.length) {
    let items1;
    if (_undefined(arg0[0])) {
      const items = [{ scale: arg0[0] }];
      items1 = items;
      const obj = { scale: arg0[0] };
    } else {
      items1 = [];
    }
    return items1;
  } else {
    const items2 = [arg0[0]];
    let first = arg0[1];
    const concat = _undefined2(items2).concat;
    _undefined2(items2);
    const tmp3 = c2;
    if (first == null) {
      first = arg0[0];
    }
    const items3 = [first];
    let combined = concat(tmp3(items3));
    if (2 !== combined.length) {
      combined = [];
    }
    return combined;
  }
}
const items13 = [tmp18, tmp19, tmp20];
parseScale.__closure = items13;
parseScale.__workletHash = 14052166635821;
parseScale.__initData = tmp17;
const items14 = [{ code: "(function parseRotate_Pnpm_transformTs9(key,values){let[isAngle]=this.__closure;return values.length===1&&(isAngle(values[0])||values[0]===0)?[{[key]:values[0]===0?'0deg':values[0]}]:[];})" }, _mod1674.isAngle];
[tmp21, tmp22] = items14;
function parseRotate(arg0, arg1) {
  let items;
  if (1 === arg1.length) {
    if (!_undefined(arg1[0])) {
      return items;
    }
    let str = "0deg";
    if (0 !== arg1[0]) {
      str = arg1[0];
    }
    const obj = {};
    obj[arg0] = str;
    items = [obj];
  }
  items = [];
}
const items15 = [tmp22];
parseRotate.__closure = items15;
parseRotate.__workletHash = 4222235264597;
parseRotate.__initData = tmp21;
const items16 = [{ code: "(function parseSkewX_Pnpm_transformTs10(values){let[isAngle]=this.__closure;return values.length===1&&(isAngle(values[0])||values[0]===0)?[{skewX:values[0]===0?'0deg':values[0]}]:[];})" }, _mod1674.isAngle];
[tmp23, tmp24] = items16;
function parseSkewX(arg0) {
  let items;
  if (1 === arg0.length) {
    if (!_undefined(arg0[0])) {
      return items;
    }
    let str = "0deg";
    if (0 !== arg0[0]) {
      str = arg0[0];
    }
    items = [{ skewX: str }];
    const obj = { skewX: str };
  }
  items = [];
}
const items17 = [tmp24];
parseSkewX.__closure = items17;
parseSkewX.__workletHash = 8324667323742;
parseSkewX.__initData = tmp23;
const items18 = [{ code: "(function parseSkewY_Pnpm_transformTs11(values){let[isAngle]=this.__closure;return values.length===1&&(isAngle(values[0])||values[0]===0)?[{skewY:values[0]===0?'0deg':values[0]}]:[];})" }, _mod1674.isAngle];
[tmp25, tmp26] = items18;
function parseSkewY(arg0) {
  let items;
  if (1 === arg0.length) {
    if (!_undefined(arg0[0])) {
      return items;
    }
    let str = "0deg";
    if (0 !== arg0[0]) {
      str = arg0[0];
    }
    items = [{ skewY: str }];
    const obj = { skewY: str };
  }
  items = [];
}
const items19 = [tmp26];
parseSkewY.__closure = items19;
parseSkewY.__workletHash = 8939039659071;
parseSkewY.__initData = tmp25;
const items20 = [{ code: "(function parseSkew_Pnpm_transformTs12(values){let[parseSkewX,parseSkewY]=this.__closure;var _values$;if(values.length>2){return[];}const result=parseSkewX([values[0]]).concat(parseSkewY([(_values$=values[1])!==null&&_values$!==void 0?_values$:0]));return result.length===2?result:[];})" }, parseSkewX, parseSkewY];
[tmp27, tmp28, tmp29] = items20;
function parseSkew(arg0) {
  if (arg0.length > 2) {
    return [];
  } else {
    const items = [arg0[0]];
    let num = arg0[1];
    const concat = _undefined(items).concat;
    _undefined(items);
    const tmp3 = c1;
    if (num == null) {
      num = 0;
    }
    const items1 = [num];
    let combined = concat(tmp3(items1));
    if (2 !== combined.length) {
      combined = [];
    }
    return combined;
  }
}
const items21 = [tmp28, tmp29];
parseSkew.__closure = items21;
parseSkew.__workletHash = 7685827480937;
parseSkew.__initData = tmp27;
const items22 = [{ code: "(function parseMatrix_Pnpm_transformTs13(values){let[isNumberArray]=this.__closure;let matrixValues=[];if(isNumberArray(values)){if(values.length===6){matrixValues=[values[0],values[1],0,0,values[2],values[3],0,0,0,0,1,0,values[4],values[5],0,1];}else if(values.length===16){matrixValues=values;}}return matrixValues.length>0?[{matrix:matrixValues}]:[];})" }, _mod1674.isNumberArray];
[tmp30, tmp31] = items22;
function parseMatrix(arg0) {
  let items3;
  let items = [];
  let arr2 = items;
  if (_undefined(arg0)) {
    if (6 === arg0.length) {
      const items1 = [, , , , , , , , , , , , , , , ];
      [arr3[0], arr3[1]] = arg0;
      items1[2] = 0;
      items1[3] = 0;
      items1[4] = arg0[2];
      items1[5] = arg0[3];
      items1[6] = 0;
      items1[7] = 0;
      items1[8] = 0;
      items1[9] = 0;
      items1[10] = 1;
      items1[11] = 0;
      items1[12] = arg0[4];
      items1[13] = arg0[5];
      items1[14] = 0;
      items1[15] = 1;
      items = items1;
    } else if (16 === arg0.length) {
      items = arg0;
    }
    arr2 = items;
  }
  if (arr2.length > 0) {
    const items2 = [{ matrix: arr2 }];
    items3 = items2;
    const obj = { matrix: arr2 };
  } else {
    items3 = [];
  }
  return items3;
}
const items23 = [tmp31];
parseMatrix.__closure = items23;
parseMatrix.__workletHash = 9310173096838;
parseMatrix.__initData = tmp30;
const items24 = [{ code: "(function parsePerspective_Pnpm_transformTs14(values){let[isNumber]=this.__closure;return values.length===1&&isNumber(values[0])?[{perspective:values[0]}]:[];})" }, _mod1674.isNumber];
[tmp32, tmp33] = items24;
function parsePerspective(arg0) {
  if (1 === arg0.length) {
    if (_undefined(arg0[0])) {
      const items = [{ perspective: arg0[0] }];
      const obj = { perspective: arg0[0] };
    }
    return [];
  }
}
const items25 = [tmp33];
parsePerspective.__closure = items25;
parsePerspective.__workletHash = 5067845823688;
parsePerspective.__initData = tmp32;
const items26 = [{ code: "(function pnpm_transformTs15(transform){let[parseValues,parseTranslate,parseTranslateX,parseTranslateY,parseScale,parseScaleX,parseScaleY,parseRotate,parseSkew,parseSkewX,parseSkewY,parseMatrix,parsePerspective]=this.__closure;const[key,valueString]=transform.split(/\\(\\s*/);const values=parseValues(valueString.replace(/\\)$/g,''));switch(key){case'translate':return parseTranslate(values);case'translateX':return parseTranslateX(values);case'translateY':return parseTranslateY(values);case'scale':return parseScale(values);case'scaleX':return parseScaleX(values);case'scaleY':return parseScaleY(values);case'rotate':case'rotateX':case'rotateY':case'rotateZ':return parseRotate(key,values);case'skew':return parseSkew(values);case'skewX':return parseSkewX(values);case'skewY':return parseSkewY(values);case'matrix':return parseMatrix(values);case'perspective':return parsePerspective(values);default:return[];}})" }, parseValues, parseTranslate, parseTranslateX, parseTranslateY, parseScale, parseScaleX, parseScaleY, parseRotate, parseSkew, parseSkewX, parseSkewY, parseMatrix, parsePerspective];
let c2;
let c3;
let c4;
let c5;
let c6;
let c7;
let c8;
let c9;
let c10;
let c11;
let c12;
[tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47] = items26;
function pnpm_transformTs15(str) {
  let tmp10;
  let tmp2;
  [tmp2, str] = str.split(/\(\s*/);
  _slicedToArray(str.split(/\(\s*/), 2);
  const tmp3 = _undefined(str.replace(/\)$/g, ""));
  switch (tmp2) {
    case "translate":
    {
      return _undefined2(tmp3);
    }
    case "translateX":
    {
      return _undefined3(tmp3);
    }
    case "translateY":
    {
      return _undefined4(tmp3);
    }
    case "scale":
    {
      return _undefined5(tmp3);
    }
    case "scaleX":
    {
      return _undefined6(tmp3);
    }
    case "scaleY":
    {
      return _undefined7(tmp3);
    }
    case "rotate":
    {
      tmp10 = _undefined8(tmp2, tmp3);
      return tmp10;
    }
    case "rotateX":
    {
      tmp10 = _undefined8(tmp2, tmp3);
      return tmp10;
    }
    case "rotateY":
    {
      tmp10 = _undefined8(tmp2, tmp3);
      return tmp10;
    }
    case "rotateZ":
    {
      tmp10 = _undefined8(tmp2, tmp3);
      return tmp10;
    }
    case "skew":
    {
      return _undefined9(tmp3);
    }
    case "skewX":
    {
      return _undefined10(tmp3);
    }
    case "skewY":
    {
      return _undefined11(tmp3);
    }
    case "matrix":
    {
      return _undefined12(tmp3);
    }
    case "perspective":
    {
      return _undefined13(tmp3);
    }
    default:
    {
      return [];
    }
  }
}
const items27 = [tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47];
pnpm_transformTs15.__closure = items27;
pnpm_transformTs15.__workletHash = 6060252501613;
pnpm_transformTs15.__initData = tmp34;
const items28 = [{ code: "(function pnpm_transformTs16(value){let[parseTransformProperty,ERROR_MESSAGES]=this.__closure;if(typeof value!=='string'){return value;}if(value==='none'){return[];}return value.split(/\\)\\s*/).filter(Boolean).flatMap(function(part){const parsed=parseTransformProperty(part);if(parsed.length===0){throw new Error(\"[Reanimated] \"+ERROR_MESSAGES.invalidTransform(part+\")\"));}return parsed;});})" }, pnpm_transformTs15, obj];
let c0;
let c1;
[tmp48, tmp49, tmp50] = items28;
function pnpm_transformTs16(str) {
  let tmp = str;
  if (typeof str === "string") {
    let items;
    if ("none" === str) {
      items = [];
    } else {
      const parts = str.split(/\)\s*/);
      const _Boolean = Boolean;
      const found = parts.filter(Boolean);
      items = found.flatMap(function(item) {
        const arr = closure_1_0(item);
        if (0 === arr.length) {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const _HermesInternal2 = HermesInternal;
          const self = this;
          const self2 = this;
          const error = new Error("[Reanimated] " + closure_1_1.invalidTransform("" + item + ")"));
          throw error;
        } else {
          return arr;
        }
      });
    }
    tmp = items;
  }
  return tmp;
}
const items29 = [tmp49, tmp50];
pnpm_transformTs16.__closure = items29;
pnpm_transformTs16.__workletHash = 3134845826437;
pnpm_transformTs16.__initData = tmp48;

export const ERROR_MESSAGES = obj;
export const processTransform = pnpm_transformTs16;

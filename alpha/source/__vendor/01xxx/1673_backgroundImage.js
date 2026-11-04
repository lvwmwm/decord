// Module ID: 1673
// Function ID: 1674
// Name: backgroundImage
// Dependencies: [32, 1674, 1679]
// Exports: processBackgroundImage

// Module 1673 (backgroundImage)
import _mod1674 from "module_1674" /* 1674 */;
import colors from "colors" /* 1679 */;
import _slicedToArray from "_slicedToArray" /* 32 */;

let hasOwnProperty;

let invalidDirection;
let invalidPosition;
let invalidRadialPosition;
let invalidShape;
let invalidSize;
let invalidTransitionHint;
let notEnoughColorStops;
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
let tmp51;
let tmp52;
let tmp53;
let tmp54;
let tmp55;
let tmp56;
let tmp57;
let tmp58;
let tmp59;
let tmp6;
let tmp60;
let tmp61;
let tmp62;
let tmp63;
let tmp64;
let tmp65;
let tmp66;
let tmp67;
let tmp68;
let tmp69;
let tmp7;
let tmp70;
let tmp71;
let tmp72;
let tmp73;
let tmp74;
let tmp75;
let tmp76;
let tmp77;
let tmp78;
let tmp79;
let tmp8;
let tmp80;
let tmp81;
let tmp82;
let tmp83;
let tmp84;
let tmp85;
let tmp86;
let tmp87;
let tmp88;
let tmp89;
let tmp9;
const regExp = new RegExp("^" + _mod1674.CSS_NUMBER_PATTERN + "px$");
let items = [{ code: "(function invalidDirection_Pnpm_backgroundImageTs1(direction){return\"Invalid direction \\\"\"+direction+\"\\\" in background image.\";})" }];
[tmp3] = items;
let obj = { invalidDirection, invalidPosition, invalidShape, invalidSize, invalidRadialPosition, invalidTransitionHint, notEnoughColorStops };
invalidDirection = function invalidDirection(arg0) {
  return "Invalid direction \"" + arg0 + "\" in background image.";
};
invalidDirection.__workletHash = 8391908048206;
invalidDirection.__initData = tmp3;
let items1 = [{ code: "(function invalidPosition_Pnpm_backgroundImageTs2(position){return\"Invalid position \\\"\"+String(position)+\"\\\" in background image color stop.\";})" }];
[tmp4] = items1;
invalidPosition = function invalidPosition(positions) {
  return "Invalid position \"" + String(positions) + "\" in background image color stop.";
};
invalidPosition.__workletHash = 86101785052;
invalidPosition.__initData = tmp4;
let items2 = [{ code: "(function invalidShape_Pnpm_backgroundImageTs3(shape){return\"Invalid shape \\\"\"+shape+\"\\\" in radial gradient.\";})" }];
[tmp5] = items2;
invalidShape = function invalidShape(arg0) {
  return "Invalid shape \"" + arg0 + "\" in radial gradient.";
};
invalidShape.__workletHash = 5213940388048;
invalidShape.__initData = tmp5;
const items3 = [{ code: "(function invalidSize_Pnpm_backgroundImageTs4(size){return\"Invalid size \"+JSON.stringify(size)+\" in radial gradient.\";})" }];
[tmp6] = items3;
invalidSize = function invalidSize(arg0) {
  return "Invalid size " + JSON.stringify(arg0) + " in radial gradient.";
};
invalidSize.__workletHash = 10880037446499;
invalidSize.__initData = tmp6;
const items4 = [{ code: "(function invalidRadialPosition_Pnpm_backgroundImageTs5(position){return\"Invalid position \"+JSON.stringify(position)+\" in radial gradient.\";})" }];
[tmp7] = items4;
invalidRadialPosition = function invalidRadialPosition(arg0) {
  return "Invalid position " + JSON.stringify(arg0) + " in radial gradient.";
};
invalidRadialPosition.__workletHash = 17095802691313;
invalidRadialPosition.__initData = tmp7;
const items5 = [{ code: "(function invalidTransitionHint_Pnpm_backgroundImageTs6(position){return\"Invalid transition hint \\\"\"+String(position)+\"\\\" in background image: a hint must be placed between two color stops.\";})" }];
[tmp8] = items5;
invalidTransitionHint = function invalidTransitionHint(position) {
  return "Invalid transition hint \"" + String(position) + "\" in background image: a hint must be placed between two color stops.";
};
invalidTransitionHint.__workletHash = 15862895149450;
invalidTransitionHint.__initData = tmp8;
const items6 = [{ code: "(function notEnoughColorStops_Pnpm_backgroundImageTs7(count){return\"Background image gradient must have at least two color stops, got \"+count+\".\";})" }];
[tmp9] = items6;
notEnoughColorStops = function notEnoughColorStops(length) {
  return "Background image gradient must have at least two color stops, got " + length + ".";
};
notEnoughColorStops.__workletHash = 6814808022689;
notEnoughColorStops.__initData = tmp9;
const items7 = [{ code: "(function pnpm_backgroundImageTs8(direction){let[WHITESPACE_NORMALIZE_REGEX]=this.__closure;switch(direction.replace(WHITESPACE_NORMALIZE_REGEX,' ')){case'to top':return{type:'angle',value:0};case'to right':return{type:'angle',value:90};case'to bottom':return{type:'angle',value:180};case'to left':return{type:'angle',value:270};case'to top right':case'to right top':return{type:'keyword',value:'to top right'};case'to bottom right':case'to right bottom':return{type:'keyword',value:'to bottom right'};case'to top left':case'to left top':return{type:'keyword',value:'to top left'};case'to bottom left':case'to left bottom':return{type:'keyword',value:'to bottom left'};default:return null;}})" }, /\s+/g];
[tmp10, tmp11] = items7;
function pnpm_backgroundImageTs8(str) {
  let obj;
  let obj2;
  let obj3;
  let obj4;
  switch (str.replace(c0, " ")) {
    case "to top":
    {
      return { type: "angle", value: 0 };
    }
    case "to right":
    {
      return { type: "angle", value: 90 };
    }
    case "to bottom":
    {
      return { type: "angle", value: 180 };
    }
    case "to left":
    {
      return { type: "angle", value: 270 };
    }
    case "to top right":
    {
      obj2 = { type: "keyword", value: "to top right" };
      return obj2;
    }
    case "to right top":
    {
      obj2 = { type: "keyword", value: "to top right" };
      return obj2;
    }
    case "to bottom right":
    {
      obj3 = { type: "keyword", value: "to bottom right" };
      return obj3;
    }
    case "to right bottom":
    {
      obj3 = { type: "keyword", value: "to bottom right" };
      return obj3;
    }
    case "to top left":
    {
      obj4 = { type: "keyword", value: "to top left" };
      return obj4;
    }
    case "to left top":
    {
      obj4 = { type: "keyword", value: "to top left" };
      return obj4;
    }
    case "to bottom left":
    {
      obj = { type: "keyword", value: "to bottom left" };
      return obj;
    }
    case "to left bottom":
    {
      obj = { type: "keyword", value: "to bottom left" };
      return obj;
    }
    default:
    {
      return null;
    }
  }
}
const items8 = [tmp11];
pnpm_backgroundImageTs8.__closure = items8;
pnpm_backgroundImageTs8.__workletHash = 1029907569958;
pnpm_backgroundImageTs8.__initData = tmp10;
const items9 = [{ code: "(function pnpm_backgroundImageTs9(direction){let[getAngleInDegrees,getDirectionForKeyword]=this.__closure;const normalized=direction.toLowerCase();const angle=getAngleInDegrees(normalized);if(angle!==null){return{type:'angle',value:angle};}return getDirectionForKeyword(normalized);})" }, _mod1674.getAngleInDegrees, pnpm_backgroundImageTs8];
[tmp12, tmp13, tmp14] = items9;
let obj2 = { type: "angle", value: 180 };
function pnpm_backgroundImageTs9(str) {
  let tmp4;
  const formatted = str.toLowerCase();
  const tmp2 = _undefined(formatted);
  if (null !== tmp2) {
    tmp4 = { type: "angle", value: tmp2 };
    const obj = { type: "angle", value: tmp2 };
  } else {
    tmp4 = _undefined2(formatted);
  }
  return tmp4;
}
const items10 = [tmp13, tmp14];
pnpm_backgroundImageTs9.__closure = items10;
pnpm_backgroundImageTs9.__workletHash = 16180684646153;
pnpm_backgroundImageTs9.__initData = tmp12;
const items11 = [{ code: "(function pnpm_backgroundImageTs10(direction){let[DEFAULT_DIRECTION,parseDirection,ERROR_MESSAGES]=this.__closure;if(direction==null){return DEFAULT_DIRECTION;}const parsed=parseDirection(direction);if(parsed===null){throw new Error(\"[Reanimated] \"+ERROR_MESSAGES.invalidDirection(direction));}return parsed;})" }, obj2, pnpm_backgroundImageTs9, obj];
[tmp15, tmp16, tmp17, tmp18] = items11;
function pnpm_backgroundImageTs10(arg0) {
  if (null == arg0) {
    return c0;
  } else {
    const tmp2 = _undefined(arg0);
    if (null === tmp2) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const error = new Error("[Reanimated] " + _undefined2.invalidDirection(arg0));
      throw error;
    } else {
      return tmp2;
    }
  }
}
const items12 = [tmp16, tmp17, tmp18];
pnpm_backgroundImageTs10.__closure = items12;
pnpm_backgroundImageTs10.__workletHash = 14915841106540;
pnpm_backgroundImageTs10.__initData = tmp15;
const items13 = [{ code: "(function pnpm_backgroundImageTs11(position){let[isPercentage]=this.__closure;return Number.isFinite(position)||isPercentage(position);})" }, _mod1674.isPercentage];
[tmp19, tmp20] = items13;
function pnpm_backgroundImageTs11(arg0) {
  const isFiniteResult = Number.isFinite(arg0) || _undefined(arg0);
  return isFiniteResult;
}
const items14 = [tmp20];
pnpm_backgroundImageTs11.__closure = items14;
pnpm_backgroundImageTs11.__workletHash = 11695717843571;
pnpm_backgroundImageTs11.__initData = tmp19;
const items15 = [{ code: "(function pnpm_backgroundImageTs12(size){let[isValidPosition]=this.__closure;return isValidPosition(size)&&parseFloat(String(size))>=0;})" }, pnpm_backgroundImageTs11];
[tmp21, tmp22] = items15;
let rect = { top: "50%", left: "50%" };
function pnpm_backgroundImageTs12(arg0) {
  let tmp = _undefined(arg0);
  if (tmp) {
    const _parseFloat = parseFloat;
    const _String = String;
    tmp = parseFloat(String(arg0)) >= 0;
  }
  return tmp;
}
const items16 = [tmp22];
pnpm_backgroundImageTs12.__closure = items16;
pnpm_backgroundImageTs12.__workletHash = 5657659523328;
pnpm_backgroundImageTs12.__initData = tmp21;
const items17 = [{ code: "(function pnpm_backgroundImageTs13(position){let[DEFAULT_RADIAL_POSITION,isValidPosition,ERROR_MESSAGES]=this.__closure;if(position==null){return{...DEFAULT_RADIAL_POSITION};}for(const value of Object.values(position)){if(!isValidPosition(value)){throw new Error(\"[Reanimated] \"+ERROR_MESSAGES.invalidRadialPosition(position));}}return position;})" }, rect, pnpm_backgroundImageTs11, obj];
[tmp23, tmp24, tmp25, tmp26] = items17;
function pnpm_backgroundImageTs13(arg0) {
  if (null == arg0) {
    const obj = {};
    const merged = Object.assign(c0);
    return obj;
  } else {
    const _Object = Object;
    const values = Object.values(arg0);
    for (const item10003 of values) {
      if (_undefined(item10003)) {
        continue;
      } else {
        let _Error = Error;
        let _HermesInternal = HermesInternal;
        let str = "[Reanimated] ";
        let self = this;
        let self2 = this;
        let error = new Error("[Reanimated] " + _undefined2.invalidRadialPosition(arg0));
        throw error;
      }
    }
    return arg0;
  }
}
const items18 = [tmp24, tmp25, tmp26];
pnpm_backgroundImageTs13.__closure = items18;
pnpm_backgroundImageTs13.__workletHash = 9342310014518;
pnpm_backgroundImageTs13.__initData = tmp23;
const items19 = [{ code: "(function pnpm_backgroundImageTs14(colorStops,context){let[isValidPosition,ERROR_MESSAGES,processColor,MIN_COLOR_STOPS]=this.__closure;const result=[];for(const colorStop of colorStops){const{color:color,positions:positions}=colorStop;if(color==null&&(positions===null||positions===void 0?void 0:positions.length)===1){if(!isValidPosition(positions[0])){throw new Error(\"[Reanimated] \"+ERROR_MESSAGES.invalidPosition(positions[0]));}result.push({color:null,position:positions[0]});continue;}const processedColor=processColor(color,context);if(!(positions!==null&&positions!==void 0&&positions.length)){result.push({color:processedColor,position:null});continue;}for(const position of positions){if(!isValidPosition(position)){throw new Error(\"[Reanimated] \"+ERROR_MESSAGES.invalidPosition(position));}result.push({color:processedColor,position:position});}}for(let i=0;i<result.length;i++){const{color:color,position:position}=result[i];if(color===null&&(i===0||i===result.length-1||result[i-1].color===null)){throw new Error(\"[Reanimated] \"+ERROR_MESSAGES.invalidTransitionHint(position));}}if(result.length<MIN_COLOR_STOPS){throw new Error(\"[Reanimated] \"+ERROR_MESSAGES.notEnoughColorStops(result.length));}return result;})" }, pnpm_backgroundImageTs11, obj, colors.processColor, 2];
[tmp27, tmp28, tmp29, tmp30, tmp31] = items19;
const items20 = ["closest-side", "closest-corner", "farthest-side", "farthest-corner"];
function pnpm_backgroundImageTs14(arg0, arg1) {
  let color;
  let position;
  let positions;
  const items = [];
  const iter = arg0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    ({ color, positions } = nextResult);
    let tmp2 = color;
    if (null == color) {
      let length;
      if (positions != null) {
        length = positions.length;
      }
      if (1 === length) {
        if (_undefined(positions[0])) {
          let obj = { color: null, position: positions[0] };
          let arr = items.push(obj);
        } else {
          let tmp6 = globalThis;
          let _Error = Error;
          let _HermesInternal = HermesInternal;
          let str = "[Reanimated] ";
          let self = this;
          let self2 = this;
          let error = new Error("[Reanimated] " + _undefined2.invalidPosition(positions[0]));
          throw error;
        }
      }
      continue;
    }
    let tmp15 = _undefined3(tmp2, arg1);
    let length1;
    if (positions != null) {
      length1 = positions.length;
    }
    if (length1) {
      for (const item10056 of positions) {
        let tmp22 = item10056;
        if (_undefined(item10056)) {
          let obj2 = { color: tmp15, position: tmp22 };
          let arr4 = items.push(obj2);
          continue;
        } else {
          let tmp24 = globalThis;
          let _Error2 = Error;
          let _HermesInternal2 = HermesInternal;
          let str2 = "[Reanimated] ";
          let self3 = this;
          let self4 = this;
          let error1 = new Error("[Reanimated] " + _undefined2.invalidPosition(tmp22));
          throw error1;
        }
      }
    } else {
      let obj3 = { color: tmp15, position: null };
      let arr5 = items.push(obj3);
    }
  }
  let num = 0;
  if (0 < items.length) {
    while (true) {
      let tmp32 = items[num];
      position = tmp32.position;
      if (null === tmp32.color) {
        if (0 === num) {
          break;
        } else if (num === items.length - 1) {
          break;
        } else if (null === items[num - 1].color) {
          break;
        }
      }
      num = num + 1;
    }
    const _Error4 = Error;
    const _HermesInternal4 = HermesInternal;
    const self7 = this;
    const self8 = this;
    const error2 = new Error("[Reanimated] " + _undefined2.invalidTransitionHint(position));
    throw error2;
  }
  if (items.length < c3) {
    const _Error3 = Error;
    const _HermesInternal3 = HermesInternal;
    const self5 = this;
    const self6 = this;
    const error3 = new Error("[Reanimated] " + _undefined2.notEnoughColorStops(items.length));
    throw error3;
  } else {
    return items;
  }
}
const items21 = [tmp28, tmp29, tmp30, tmp31];
pnpm_backgroundImageTs14.__closure = items21;
pnpm_backgroundImageTs14.__workletHash = 972334392032;
pnpm_backgroundImageTs14.__initData = tmp27;
const items22 = [{ code: "(function pnpm_backgroundImageTs15(size){let[DEFAULT_RADIAL_SIZE,RADIAL_SIZE_KEYWORDS,isValidRadialSize,ERROR_MESSAGES]=this.__closure;if(size==null){return DEFAULT_RADIAL_SIZE;}if(typeof size==='string'&&RADIAL_SIZE_KEYWORDS.includes(size)){return size;}if(typeof size==='object'&&isValidRadialSize(size.x)&&isValidRadialSize(size.y)){return{x:size.x,y:size.y};}throw new Error(\"[Reanimated] \"+ERROR_MESSAGES.invalidSize(size));})" }, "farthest-corner", items20, pnpm_backgroundImageTs12, obj];
[tmp32, tmp33, tmp34, tmp35, tmp36] = items22;
function pnpm_backgroundImageTs15(arg0) {
  if (null == arg0) {
    return c0;
  } else {
    if (typeof arg0 === "string") {
      if (_undefined.includes(arg0)) {
        return arg0;
      }
    }
    if (typeof arg0 === "object") {
      const tmp7 = _undefined2;
      if (_undefined2(arg0.x)) {
        if (tmp7(arg0.y)) {
          const point = { x: null, y: null };
          ({ x: obj.x, y: obj.y } = arg0);
          return point;
        }
      }
    }
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const error = new Error("[Reanimated] " + _undefined3.invalidSize(arg0));
    throw error;
  }
}
const items23 = [tmp33, tmp34, tmp35, tmp36];
pnpm_backgroundImageTs15.__closure = items23;
pnpm_backgroundImageTs15.__workletHash = 10051608756029;
pnpm_backgroundImageTs15.__initData = tmp32;
const items24 = [{ code: "(function pnpm_backgroundImageTs16(shape){let[DEFAULT_RADIAL_SHAPE,ERROR_MESSAGES]=this.__closure;if(shape==null){return DEFAULT_RADIAL_SHAPE;}if(shape!=='circle'&&shape!=='ellipse'){throw new Error(\"[Reanimated] \"+ERROR_MESSAGES.invalidShape(shape));}return shape;})" }, "ellipse", obj];
[tmp37, tmp38, tmp39] = items24;
function pnpm_backgroundImageTs16(arg0) {
  if (null == arg0) {
    return c0;
  } else {
    if ("circle" !== arg0) {
      if ("ellipse" !== arg0) {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const self = this;
        const self2 = this;
        const error = new Error("[Reanimated] " + _undefined.invalidShape(arg0));
        throw error;
      }
    }
    return arg0;
  }
}
const items25 = [tmp38, tmp39];
pnpm_backgroundImageTs16.__closure = items25;
pnpm_backgroundImageTs16.__workletHash = 9937690720737;
pnpm_backgroundImageTs16.__initData = tmp37;
const items26 = [{ code: "(function pnpm_backgroundImageTs17(value){let[isPercentage,PX_LENGTH_REGEX]=this.__closure;if(isPercentage(value)){return value;}if(PX_LENGTH_REGEX.test(value)){return parseFloat(value);}return null;})" }, _mod1674.isPercentage, regExp];
[tmp40, tmp41, tmp42] = items26;
function pnpm_backgroundImageTs17(arg0) {
  let tmp = arg0;
  if (!_undefined(arg0)) {
    let parsed = null;
    if (_undefined2.test(arg0)) {
      const _parseFloat = parseFloat;
      parsed = parseFloat(arg0);
    }
    tmp = parsed;
  }
  return tmp;
}
const items27 = [tmp41, tmp42];
pnpm_backgroundImageTs17.__closure = items27;
pnpm_backgroundImageTs17.__workletHash = 7317036303618;
pnpm_backgroundImageTs17.__initData = tmp40;
const items28 = [{ code: "(function pnpm_backgroundImageTs18(color,context){let[processColorNumber,processColor]=this.__closure;if(processColorNumber(color)===null){return null;}return processColor(color,context);})" }, colors.processColorNumber, colors.processColor];
[tmp43, tmp44, tmp45] = items28;
function pnpm_backgroundImageTs18(arg0, arg1) {
  let tmp = null;
  if (null !== _undefined(arg0)) {
    tmp = _undefined2(arg0, arg1);
  }
  return tmp;
}
const items29 = [tmp44, tmp45];
pnpm_backgroundImageTs18.__closure = items29;
pnpm_backgroundImageTs18.__workletHash = 1773379740344;
pnpm_backgroundImageTs18.__initData = tmp43;
const items30 = [{ code: "(function pnpm_backgroundImageTs19(token){return token.endsWith('px')||token.endsWith('%');})" }];
[tmp46] = items30;
function pnpm_backgroundImageTs19(str) {
  const endsWithResult = str.endsWith("px") || str.endsWith("%");
  return endsWithResult;
}
pnpm_backgroundImageTs19.__workletHash = 15582531966686;
pnpm_backgroundImageTs19.__initData = tmp46;
const items31 = [{ code: "(function pnpm_backgroundImageTs20(parts,context){let[splitByComma,COLOR_STOP_PARTS_REGEX,parseCSSColor,getPositionFromCSSValue,MIN_COLOR_STOPS]=this.__closure;const stops=splitByComma(parts.join(','));const result=[];let previousWasHint=false;for(let i=0;i<stops.length;i++){const colorStopParts=stops[i].trim().match(COLOR_STOP_PARTS_REGEX);if(colorStopParts===null){return null;}if(colorStopParts.length===3){const color=parseCSSColor(colorStopParts[0],context);const position1=getPositionFromCSSValue(colorStopParts[1]);const position2=getPositionFromCSSValue(colorStopParts[2]);if(color===null||position1===null||position2===null){return null;}result.push({color:color,position:position1});result.push({color:color,position:position2});previousWasHint=false;}else if(colorStopParts.length===2){const color=parseCSSColor(colorStopParts[0],context);const position=getPositionFromCSSValue(colorStopParts[1]);if(color===null||position===null){return null;}result.push({color:color,position:position});previousWasHint=false;}else if(colorStopParts.length===1){const position=getPositionFromCSSValue(colorStopParts[0]);if(position!==null){if(previousWasHint||i===0||i===stops.length-1){return null;}result.push({color:null,position:position});previousWasHint=true;}else{const color=parseCSSColor(colorStopParts[0],context);if(color===null){return null;}result.push({color:color,position:null});previousWasHint=false;}}else{return null;}}if(result.length<MIN_COLOR_STOPS){return null;}return result;})" }, _mod1674.splitByComma, /\S+\([^)]*\)|\S+/g, pnpm_backgroundImageTs18, pnpm_backgroundImageTs17, 2];
[tmp47, tmp48, tmp49, tmp50, tmp51, tmp52] = items31;
function pnpm_backgroundImageTs20(join, arg1) {
  const arr = _undefined(join.join(","));
  const items = [];
  let num = 0;
  let flag = false;
  if (0 < arr.length) {
    const str = arr[num];
    const str2 = str.trim();
    const match = str2.match(c1);
    while (null !== match) {
      let flag2;
      if (3 === match.length) {
        let tmp16 = _undefined2(match[0], arg1);
        let tmp18 = _undefined3(match[1]);
        let tmp19 = _undefined3(match[2]);
        if (null !== tmp16) {
          if (null !== tmp18) {
            if (null !== tmp19) {
              let obj2 = { color: tmp16, position: tmp18 };
              let arr2 = items.push(obj2);
              let obj3 = { color: tmp16, position: tmp19 };
              let arr3 = items.push(obj3);
              flag2 = false;
            }
          }
        }
        return null;
      } else if (2 === match.length) {
        let tmp11 = _undefined2(match[0], arg1);
        let tmp13 = _undefined3(match[1]);
        if (null !== tmp11) {
          if (null !== tmp13) {
            let obj4 = { color: tmp11, position: tmp13 };
            let arr8 = items.push(obj4);
            flag2 = false;
          }
        }
        return null;
      } else if (1 !== match.length) {
        return null;
      } else {
        let tmp5 = _undefined3(match[0]);
        if (null !== tmp5) {
          if (!flag) {
            if (0 !== num) {
              if (num !== arr.length - 1) {
                let obj5 = { color: null, position: tmp5 };
                let arr9 = items.push(obj5);
                flag2 = true;
              }
            }
          }
          return null;
        } else {
          let tmp7 = _undefined2(match[0], arg1);
          if (null === tmp7) {
            return null;
          } else {
            let obj = { color: tmp7, position: null };
            let arr10 = items.push(obj);
            flag2 = false;
          }
        }
      }
      num = num + 1;
      flag = flag2;
    }
    return null;
  }
  let tmp22 = null;
  if (items.length >= c4) {
    tmp22 = items;
  }
  return tmp22;
}
const items32 = [tmp48, tmp49, tmp50, tmp51, tmp52];
pnpm_backgroundImageTs20.__closure = items32;
pnpm_backgroundImageTs20.__workletHash = 7685749828866;
pnpm_backgroundImageTs20.__initData = tmp47;
const items33 = [{ code: "(function pnpm_backgroundImageTs21(content,context){let[DEFAULT_DIRECTION,getAngleInDegrees,LINEAR_GRADIENT_DIRECTION_REGEX,parseDirection,parseColorStopsCSSString]=this.__closure;const parts=content.split(',');const firstPart=parts[0].trim();let direction=DEFAULT_DIRECTION;if(getAngleInDegrees(firstPart)!==null||LINEAR_GRADIENT_DIRECTION_REGEX.test(firstPart)){const parsed=parseDirection(firstPart);if(parsed===null){return null;}direction=parsed;parts.shift();}const colorStops=parseColorStopsCSSString(parts,context);if(colorStops===null){return null;}return{type:'linear-gradient',direction:direction,colorStops:colorStops};})" }, obj2, _mod1674.getAngleInDegrees, /^to\s+(?:top|bottom|left|right)(?:\s+(?:top|bottom|left|right))?/, pnpm_backgroundImageTs9, pnpm_backgroundImageTs20];
[tmp53, tmp54, tmp55, tmp56, tmp57, tmp58] = items33;
function pnpm_backgroundImageTs21(str, arg1) {
  const parts = str.split(",");
  str = parts[0];
  const trimmed = str.trim();
  let tmp2 = c0;
  if (null !== _undefined(trimmed)) {
    const tmp5 = _undefined3(trimmed);
    if (null === tmp5) {
      return null;
    } else {
      parts.shift();
      tmp2 = tmp5;
    }
  }
  const tmp7 = _undefined4(parts, arg1);
  let tmp8 = null;
  if (null !== tmp7) {
    tmp8 = { type: "linear-gradient", direction: tmp2, colorStops: tmp7 };
    const obj = { type: "linear-gradient", direction: tmp2, colorStops: tmp7 };
  }
  return tmp8;
}
const items34 = [tmp54, tmp55, tmp56, tmp57, tmp58];
pnpm_backgroundImageTs21.__closure = items34;
pnpm_backgroundImageTs21.__workletHash = 16404058790445;
pnpm_backgroundImageTs21.__initData = tmp53;
const items35 = [{ code: "(function pnpm_backgroundImageTs22(keywords,token){return Object.prototype.hasOwnProperty.call(keywords,token)?keywords[token]:null;})" }];
[tmp59] = items35;
function pnpm_backgroundImageTs22(arg0, arg1) {
  hasOwnProperty = Object.prototype.hasOwnProperty;
  let tmp = null;
  if (hasOwnProperty.call(arg0, arg1)) {
    tmp = arg0[arg1];
  }
  return tmp;
}
pnpm_backgroundImageTs22.__workletHash = 12447353140404;
pnpm_backgroundImageTs22.__initData = tmp59;
const items36 = [{ code: "(function pnpm_backgroundImageTs23(tokens){let[getKeywordPosition,HORIZONTAL_POSITION_KEYWORDS,VERTICAL_POSITION_KEYWORDS,isLengthOrPercentageToken,getPositionFromCSSValue]=this.__closure;let top;let left;let right;let bottom;if(tokens.length===1){const token=tokens[0];const horizontal=getKeywordPosition(HORIZONTAL_POSITION_KEYWORDS,token);const vertical=getKeywordPosition(VERTICAL_POSITION_KEYWORDS,token);if(horizontal!==null){left=horizontal;top='50%';}else if(vertical!==null){left='50%';top=vertical;}else if(isLengthOrPercentageToken(token)){const value=getPositionFromCSSValue(token);if(value===null){return null;}left=value;top='50%';}}else if(tokens.length===2){const[token1,token2]=tokens;const horizontal1=getKeywordPosition(HORIZONTAL_POSITION_KEYWORDS,token1);const vertical1=getKeywordPosition(VERTICAL_POSITION_KEYWORDS,token1);const horizontal2=getKeywordPosition(HORIZONTAL_POSITION_KEYWORDS,token2);const vertical2=getKeywordPosition(VERTICAL_POSITION_KEYWORDS,token2);if(horizontal1!==null&&vertical2!==null){left=horizontal1;top=vertical2;}else if(vertical1!==null&&horizontal2!==null){left=horizontal2;top=vertical1;}else{if(horizontal1!==null){left=horizontal1;}else if(isLengthOrPercentageToken(token1)){const value=getPositionFromCSSValue(token1);if(value===null){return null;}left=value;}else{return null;}if(vertical2!==null){top=vertical2;}else if(isLengthOrPercentageToken(token2)){const value=getPositionFromCSSValue(token2);if(value===null){return null;}top=value;}else{return null;}}}else if(tokens.length===4){for(const[keyword,rawValue]of[[tokens[0],tokens[1]],[tokens[2],tokens[3]]]){const value=getPositionFromCSSValue(rawValue);if(value===null){return null;}if(keyword==='left'){left=value;}else if(keyword==='right'){right=value;}else if(keyword==='top'){top=value;}else if(keyword==='bottom'){bottom=value;}else{return null;}}}if(top!=null&&left!=null){return{top:top,left:left};}if(bottom!=null&&right!=null){return{bottom:bottom,right:right};}if(top!=null&&right!=null){return{top:top,right:right};}if(bottom!=null&&left!=null){return{bottom:bottom,left:left};}return null;})" }, pnpm_backgroundImageTs22, { left: "0%", center: "50%", right: "100%" }, { top: "0%", center: "50%", bottom: "100%" }, pnpm_backgroundImageTs19, pnpm_backgroundImageTs17];
[tmp60, tmp61, tmp62, tmp63, tmp64, tmp65] = items36;
function pnpm_backgroundImageTs23(arg0) {
  let str2;
  let tmp;
  let tmp20;
  let tmp21;
  let tmp50;
  let str;
  let tmp2;
  if (1 === arg0.length) {
    const first = arg0[0];
    const tmp40 = _undefined(c1, first);
    const tmp42 = _undefined(c2, first);
    if (null !== tmp40) {
      str2 = tmp40;
      str = "50%";
    } else if (null !== tmp42) {
      str2 = "50%";
      str = tmp42;
    } else if (_undefined2(first)) {
      const tmp46 = _undefined3(first);
      if (null === tmp46) {
        return null;
      } else {
        str2 = tmp46;
        str = "50%";
      }
    }
  } else if (2 === arg0.length) {
    [tmp20, tmp21] = arg0;
    _slicedToArray(arg0, 2);
    const tmp24 = _undefined(c1, tmp20);
    const tmp26 = _undefined(c2, tmp20);
    const tmp27 = _undefined(c1, tmp21);
    const tmp28 = _undefined(c2, tmp21);
    if (null !== tmp24) {
      if (null !== tmp28) {
        str2 = tmp24;
        str = tmp28;
      }
    }
    if (null !== tmp26) {
      if (null !== tmp27) {
        str2 = tmp27;
        str = tmp26;
      }
    }
    if (null !== tmp24) {
      str2 = tmp24;
    } else if (_undefined2(tmp20)) {
      const tmp33 = _undefined3(tmp20);
      if (null === tmp33) {
        return null;
      } else {
        str2 = tmp33;
      }
    } else {
      return null;
    }
    if (null !== tmp28) {
      str = tmp28;
    } else if (_undefined2(tmp21)) {
      const tmp36 = _undefined3(tmp21);
      if (null === tmp36) {
        return null;
      } else {
        str = tmp36;
      }
    } else {
      return null;
    }
  } else if (4 === arg0.length) {
    const items = [, ];
    [arr[0], arr[1]] = arg0;
    const items1 = [items, ];
    const items2 = [arg0[2], arg0[3]];
    items1[1] = items2;
    const obj5 = items1[Symbol.iterator]();
    while (obj5 !== undefined) {
      let tmp7 = _slicedToArray(tmp4, 2);
      let first1 = tmp7[0];
      let tmp10 = _undefined3(tmp7[1]);
      if (null === tmp10) {
        obj5.return();
        return null;
      } else {
        if ("left" === first1) {
          str2 = tmp10;
        } else if ("right" === first1) {
          tmp = tmp10;
        } else if ("top" === first1) {
          str = tmp10;
        } else if ("bottom" !== first1) {
          obj5.return();
          return null;
        } else {
          tmp2 = tmp10;
        }
        continue;
      }
    }
  }
  if (null != str) {
    if (null != str2) {
      const rect = { top: str, left: str2 };
      tmp50 = rect;
    }
    return tmp50;
  }
  if (null != tmp2) {
    if (null != tmp) {
      const rect1 = { bottom: tmp2, right: tmp };
      tmp50 = rect1;
    }
  }
  if (null != str) {
    if (null != tmp) {
      const rect2 = { top: str, right: tmp };
      tmp50 = rect2;
    }
  }
  tmp50 = null;
  if (null != tmp2) {
    tmp50 = null;
    if (null != str2) {
      const rect3 = { bottom: tmp2, left: str2 };
      tmp50 = rect3;
    }
  }
}
const items37 = [tmp61, tmp62, tmp63, tmp64, tmp65];
pnpm_backgroundImageTs23.__closure = items37;
pnpm_backgroundImageTs23.__workletHash = 11200946328527;
pnpm_backgroundImageTs23.__initData = tmp60;
const items38 = [{ code: "(function pnpm_backgroundImageTs24(content,context){let[DEFAULT_RADIAL_SHAPE,DEFAULT_RADIAL_SIZE,DEFAULT_RADIAL_POSITION,splitByComma,splitByWhitespace,RADIAL_SIZE_KEYWORDS,isLengthOrPercentageToken,getPositionFromCSSValue,parseRadialPosition,parseColorStopsCSSString]=this.__closure;let shape=DEFAULT_RADIAL_SHAPE;let size=DEFAULT_RADIAL_SIZE;let position={...DEFAULT_RADIAL_POSITION};const parts=splitByComma(content);const tokens=splitByWhitespace(parts[0]);let hasShapeSizeOrPosition=false;let hasExplicitSingleSize=false;let hasExplicitShape=false;while(tokens.length>0){const token=tokens.shift();if(token==='circle'||token==='ellipse'){shape=token;hasShapeSizeOrPosition=true;hasExplicitShape=true;}else if(RADIAL_SIZE_KEYWORDS.includes(token)){size=token;hasShapeSizeOrPosition=true;}else if(isLengthOrPercentageToken(token)){const sizeX=getPositionFromCSSValue(token);if(sizeX===null||parseFloat(token)<0){return null;}hasShapeSizeOrPosition=true;size={x:sizeX,y:sizeX};const nextToken=tokens[0];if(nextToken!==undefined&&isLengthOrPercentageToken(nextToken)){tokens.shift();const sizeY=getPositionFromCSSValue(nextToken);if(sizeY===null||parseFloat(nextToken)<0){return null;}size={x:sizeX,y:sizeY};}else{hasExplicitSingleSize=true;}}else if(token==='at'){hasShapeSizeOrPosition=true;const parsedPosition=parseRadialPosition(tokens.splice(0));if(parsedPosition===null){return null;}position=parsedPosition;}if(!hasShapeSizeOrPosition){break;}}if(hasShapeSizeOrPosition){parts.shift();if(!hasExplicitShape&&hasExplicitSingleSize){shape='circle';}if(hasExplicitSingleSize&&hasExplicitShape&&shape==='ellipse'){return null;}}const colorStops=parseColorStopsCSSString(parts,context);if(colorStops===null){return null;}return{type:'radial-gradient',shape:shape,size:size,position:position,colorStops:colorStops};})" }, "ellipse", "farthest-corner", rect, _mod1674.splitByComma, _mod1674.splitByWhitespace, items20, pnpm_backgroundImageTs19, pnpm_backgroundImageTs17, pnpm_backgroundImageTs23, pnpm_backgroundImageTs20];
let c6;
let c7;
let c8;
let c9;
[tmp66, tmp67, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, tmp74, tmp75, tmp76] = items38;
function pnpm_backgroundImageTs24(arg0, arg1) {
  let tmp = c0;
  let tmp2 = c1;
  const obj = {};
  const merged = Object.assign(c2);
  const arr = _undefined(arg0);
  const arr2 = _undefined2(arr[0]);
  let flag = false;
  let flag2 = false;
  let flag3 = false;
  let tmp4 = obj;
  let flag4 = false;
  let flag5 = false;
  let flag6 = false;
  let tmp5 = obj;
  let tmp6 = c1;
  let str = c0;
  if (arr2.length > 0) {
    while (true) {
      let arr5 = arr2.shift();
      let flag7 = true;
      let flag8 = flag2;
      let flag9 = true;
      let tmp14 = tmp4;
      let tmp15 = tmp2;
      let tmp16 = arr5;
      if ("circle" !== arr5) {
        flag7 = true;
        flag8 = flag2;
        flag9 = true;
        tmp14 = tmp4;
        tmp15 = tmp2;
        tmp16 = arr5;
        if ("ellipse" !== arr5) {
          flag7 = flag;
          flag8 = flag2;
          flag9 = true;
          tmp14 = tmp4;
          tmp15 = arr5;
          tmp16 = tmp;
          if (!_undefined3.includes(arr5)) {
            let tmp17 = _undefined4;
            if (_undefined4(arr5)) {
              let tmp18 = _undefined5;
              let tmp19 = _undefined5(arr5);
              if (null === tmp19) {
                break;
              } else {
                let _parseFloat2 = parseFloat;
                if (parseFloat(arr5) < 0) {
                  break;
                } else {
                  let point = { x: tmp19, y: tmp19 };
                  let first = arr2[0];
                  flag7 = flag;
                  flag8 = true;
                  flag9 = true;
                  tmp14 = tmp4;
                  tmp15 = point;
                  tmp16 = tmp;
                  if (undefined !== first) {
                    flag7 = flag;
                    flag8 = true;
                    flag9 = true;
                    tmp14 = tmp4;
                    tmp15 = point;
                    tmp16 = tmp;
                    if (tmp17(first)) {
                      let arr6 = arr2.shift();
                      let tmp18Result = tmp18(first);
                      if (null !== tmp18Result) {
                        let _parseFloat = parseFloat;
                        if (parseFloat(first) >= 0) {
                          let point1 = { x: tmp19, y: tmp18Result };
                          flag7 = flag;
                          flag8 = flag2;
                          flag9 = true;
                          tmp14 = tmp4;
                          tmp15 = point1;
                          tmp16 = tmp;
                        }
                      }
                      return null;
                    }
                  }
                }
              }
            } else {
              flag7 = flag;
              flag8 = flag2;
              flag9 = flag3;
              tmp14 = tmp4;
              tmp15 = tmp2;
              tmp16 = tmp;
              if ("at" === arr5) {
                tmp14 = _undefined6(arr2.splice(0));
                flag7 = flag;
                flag8 = flag2;
                flag9 = true;
                tmp15 = tmp2;
                tmp16 = tmp;
                if (null === tmp14) {
                  return null;
                }
              }
            }
          }
        }
      }
      flag4 = flag7;
      flag5 = flag8;
      tmp5 = tmp14;
      tmp6 = tmp15;
      str = tmp16;
      flag6 = flag9;
      if (flag6) {
        flag = flag7;
        flag2 = flag8;
        flag3 = flag9;
        tmp4 = tmp14;
        tmp2 = tmp15;
        tmp = tmp16;
        flag4 = flag7;
        flag5 = flag8;
        flag6 = flag9;
        tmp5 = tmp14;
        tmp6 = tmp15;
        str = tmp16;
      }
    }
    return null;
  }
  let tmp22 = str;
  if (flag6) {
    arr.shift();
    const tmp24 = !flag4 && flag5;
    if (tmp24) {
      str = "circle";
    }
    tmp22 = str;
    if (flag5) {
      tmp22 = str;
      if (flag4) {
        tmp22 = str;
        if ("ellipse" === str) {
          return null;
        }
      }
    }
  }
  const tmp25 = _undefined7(arr, arg1);
  let tmp26 = null;
  if (null !== tmp25) {
    tmp26 = { type: "radial-gradient", shape: tmp22, size: tmp6, position: tmp5, colorStops: tmp25 };
    const obj2 = { type: "radial-gradient", shape: tmp22, size: tmp6, position: tmp5, colorStops: tmp25 };
  }
  return tmp26;
}
const items39 = [tmp67, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, tmp74, tmp75, tmp76];
pnpm_backgroundImageTs24.__closure = items39;
pnpm_backgroundImageTs24.__workletHash = 3382413886485;
pnpm_backgroundImageTs24.__initData = tmp66;
const items40 = [{ code: "(function pnpm_backgroundImageTs25(value,context){let[splitByComma,NEWLINE_REGEX,GRADIENT_REGEX,parseRadialGradientCSSString,parseLinearGradientCSSString]=this.__closure;const result=[];for(const gradientString of splitByComma(value.replace(NEWLINE_REGEX,' '))){const match=GRADIENT_REGEX.exec(gradientString.toLowerCase());if(!match){continue;}const[,type,content]=match;const gradient=type==='radial'?parseRadialGradientCSSString(content,context):parseLinearGradientCSSString(content,context);if(gradient!==null){result.push(gradient);}}return result;})" }, _mod1674.splitByComma, /\n/g, /^(linear|radial)-gradient\(((?:\([^)]*\)|[^()])*)\)/, pnpm_backgroundImageTs24, pnpm_backgroundImageTs21];
[tmp77, tmp78, tmp79, tmp80, tmp81, tmp82] = items40;
function pnpm_backgroundImageTs25(str, arg1) {
  const items = [];
  const tmp = _undefined(str.replace(c1, " "));
  const iter = tmp[Symbol.iterator]();
  str = iter.next();
  while (iter !== undefined) {
    let match = _undefined2.exec(str.toLowerCase());
    if (match) {
      let tmp11;
      let tmp7 = _slicedToArray(tmp4, 3);
      let tmp8 = tmp7[2];
      if ("radial" === tmp7[1]) {
        tmp11 = _undefined3(tmp8, arg1);
      } else {
        tmp11 = _undefined4(tmp8, arg1);
      }
      if (null !== tmp11) {
        let arr = items.push(tmp14);
      }
    }
    continue;
  }
  return items;
}
const items41 = [tmp78, tmp79, tmp80, tmp81, tmp82];
pnpm_backgroundImageTs25.__closure = items41;
pnpm_backgroundImageTs25.__workletHash = 7120844516620;
pnpm_backgroundImageTs25.__initData = tmp77;
const items42 = [{ code: "(function pnpm_backgroundImageTs26(value,context){let[parseBackgroundImageCSSString,processDirection,processColorStops,processRadialShape,processRadialSize,processRadialPosition]=this.__closure;if(typeof value==='string'){return parseBackgroundImageCSSString(value,context);}if(!Array.isArray(value)){return;}const result=[];for(const backgroundImage of value){if(backgroundImage.type==='linear-gradient'){result.push({type:'linear-gradient',direction:processDirection(backgroundImage.direction),colorStops:processColorStops(backgroundImage.colorStops,context)});}else if(backgroundImage.type==='radial-gradient'){result.push({type:'radial-gradient',shape:processRadialShape(backgroundImage.shape),size:processRadialSize(backgroundImage.size),position:processRadialPosition(backgroundImage.position),colorStops:processColorStops(backgroundImage.colorStops,context)});}}return result;})" }, pnpm_backgroundImageTs25, pnpm_backgroundImageTs10, pnpm_backgroundImageTs14, pnpm_backgroundImageTs16, pnpm_backgroundImageTs15, pnpm_backgroundImageTs13];
let c0;
let c1;
let c2;
let c3;
let c4;
let c5;
[tmp83, tmp84, tmp85, tmp86, tmp87, tmp88, tmp89] = items42;
function pnpm_backgroundImageTs26(str, arg1) {
  if (typeof str === "string") {
    return _undefined(str, arg1);
  } else {
    const _Array = Array;
    if (Array.isArray(str)) {
      const items = [];
      const iter = str[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp5 = nextResult;
        if ("linear-gradient" === nextResult.type) {
          let obj = { type: "linear-gradient", direction: _undefined2(tmp5.direction), colorStops: _undefined3(tmp5.colorStops, arg1) };
          let push = items.push;
          let arr = push(obj);
        } else if ("radial-gradient" === tmp5.type) {
          let obj2 = { type: "radial-gradient", shape: _undefined4(tmp5.shape), size: _undefined5(tmp5.size), position: _undefined6(tmp5.position), colorStops: _undefined3(tmp5.colorStops, arg1) };
          let push2 = items.push;
          let push2Result = push2(obj2);
        }
        continue;
      }
      return items;
    }
  }
}
const items43 = [tmp84, tmp85, tmp86, tmp87, tmp88, tmp89];
pnpm_backgroundImageTs26.__closure = items43;
pnpm_backgroundImageTs26.__workletHash = 6134667678453;
pnpm_backgroundImageTs26.__initData = tmp83;

export const ERROR_MESSAGES = obj;
export const processBackgroundImage = pnpm_backgroundImageTs26;

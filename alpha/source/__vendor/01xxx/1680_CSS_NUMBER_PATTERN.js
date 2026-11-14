// Module ID: 1680
// Function ID: 1681
// Name: CSS_NUMBER_PATTERN
// Dependencies: [1679]
// Exports: getAngleInDegrees, parseBoxShadowString, splitByComma, splitByWhitespace

// Module 1680 (CSS_NUMBER_PATTERN)
import guards from "guards" /* 1679 */;

let tmp10;
let tmp11;
let tmp12;
let tmp4;
let tmp5;
let tmp6;
let tmp7;
let tmp8;
let tmp9;
const rawResult = String.raw(HermesBuiltin.getTemplateObject(false, "[-+]?\\d*\\.?\\d+(?:[eE][-+]?\\d+)?", "[-+]?d*.?d+(?:[eE][-+]?d+)?"));
const regExp = new RegExp("^(" + rawResult + ")(deg|grad|rad|turn)$", "i");
let items = [{ code: "(function parseBoxShadowString_Pnpm_parsersTs1(value){let[SHADOW_SPLIT_REGEX,SHADOW_PARTS_REGEX,isLength,LENGTH_MAPPINGS]=this.__closure;if(value==='none'){return[];}const shadows=value.match(SHADOW_SPLIT_REGEX)||[];return shadows.map(function(shadow){const result={offsetX:0,offsetY:0};let foundLengthsCount=0;const parts=shadow.match(SHADOW_PARTS_REGEX)||[];parts.forEach(function(part){if(isLength(part)){result[LENGTH_MAPPINGS[foundLengthsCount++]]=part;}else if(part==='inset'){result.inset=true;}else{result.color=part.trim();}});return result;});})" }, /(?:[^,()]+|\([^)]*\))+(?=\s*,|$)/g, /(?:[^\s()]+|\([^()]*\))+/g, guards.isLength, ["offsetX", "offsetY", "blurRadius", "spreadDistance"]];
let c1;
let c2;
let c3;
[tmp4, tmp5, tmp6, tmp7, tmp8] = items;
function parseBoxShadowString(str) {
  let items;
  if ("none" === str) {
    items = [];
  } else {
    let arr = str.match(c0) || [];
    items = arr.map((item) => {
      const obj = { offsetX: 0, offsetY: 0 };
      let closure_1 = 0;
      const arr = item.match(closure_1) || [];
      item = arr.forEach((item) => {
        if (closure_2_2(item)) {
          closure_1 = closure_1 + 1;
          obj[closure_2_3[closure_1]] = item;
        } else if ("inset" === item) {
          obj.inset = true;
        } else {
          obj.color = item.trim();
        }
      });
      return obj;
    });
  }
  return items;
}
const items1 = [tmp5, tmp6, tmp7, tmp8];
parseBoxShadowString.__closure = items1;
parseBoxShadowString.__workletHash = 7779447809774;
parseBoxShadowString.__initData = tmp4;
const items2 = [{ code: "(function splitByComma_Pnpm_parsersTs2(str){const parts=[];let current='';let depth=0;for(const char of str){if(char==='('){depth++;}else if(char===')'){depth--;}else if(char===','&&depth===0){parts.push(current.trim());current='';continue;}current+=char;}parts.push(current.trim());return parts;})" }];
[tmp9] = items2;
function splitByComma(transition) {
  const items = [];
  let str = "";
  let num = 0;
  const iter = transition[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    if ("(" === nextResult) {
      num = num + 1;
    } else if (")" === tmp2) {
      num = num - 1;
    } else if ("," === tmp2) {
      if (0 === num) {
        let arr = items.push(``.trim());
        str = "";
        continue;
      }
      continue;
    }
    str = str + tmp2;
    continue;
  }
  items.push(str.trim());
  return items;
}
splitByComma.__workletHash = 17112463656324;
splitByComma.__initData = tmp9;
const items3 = [{ code: "(function splitByWhitespace_Pnpm_parsersTs3(str){return str.split(/\\s+(?![^()]*\\))/);})" }];
[tmp10] = items3;
function splitByWhitespace(item) {
  return item.split(/\s+(?![^()]*\))/);
}
splitByWhitespace.__workletHash = 1081724409499;
splitByWhitespace.__initData = tmp10;
const items4 = [{ code: "(function getAngleInDegrees_Pnpm_parsersTs4(angle){let[ANGLE_UNIT_REGEX]=this.__closure;const match=angle.match(ANGLE_UNIT_REGEX);if(!match){return null;}const numericValue=parseFloat(match[1]);switch(match[2].toLowerCase()){case'deg':return numericValue;case'grad':return numericValue*0.9;case'rad':return numericValue*180/Math.PI;case'turn':return numericValue*360;default:return null;}})" }, regExp];
let c0;
[tmp11, tmp12] = items4;
function getAngleInDegrees(str) {
  const match = str.match(c0);
  if (match) {
    const _parseFloat = parseFloat;
    const parsed = parseFloat(match[1]);
    str = match[2];
    const formatted = str.toLowerCase();
    if ("deg" === formatted) {
      return parsed;
    } else if ("grad" === formatted) {
      return 0.9 * parsed;
    } else if ("rad" === formatted) {
      const _Math = Math;
      return 180 * parsed / Math.PI;
    } else if ("turn" === formatted) {
      return 360 * parsed;
    } else {
      return null;
    }
  } else {
    return null;
  }
}
const items5 = [tmp12];
getAngleInDegrees.__closure = items5;
getAngleInDegrees.__workletHash = 15048656404244;
getAngleInDegrees.__initData = tmp11;

export const CSS_NUMBER_PATTERN = rawResult;
export { parseBoxShadowString };
export { splitByComma };
export { splitByWhitespace };
export { getAngleInDegrees };

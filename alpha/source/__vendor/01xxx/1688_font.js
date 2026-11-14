// Module ID: 1688
// Function ID: 1689
// Name: font
// Dependencies: [1669]
// Exports: processFontWeight

// Module 1688 (font)
import FONT_WEIGHT_MAPPINGS from "FONT_WEIGHT_MAPPINGS" /* 1669 */;

let hasOwnProperty;

let invalidFontWeight;
let tmp2;
let tmp4;
let tmp5;
let tmp6;
let tmp7;
const items = [{ code: "(function invalidFontWeight_Pnpm_fontTs1(weight){return\"Invalid font weight value: \"+weight;})" }];
[tmp2] = items;
const obj = { invalidFontWeight };
invalidFontWeight = function invalidFontWeight(arg0) {
  return "Invalid font weight value: " + arg0;
};
invalidFontWeight.__workletHash = 7682570210510;
invalidFontWeight.__initData = tmp2;
const items1 = [{ code: "(function pnpm_fontTs2(value){let[VALID_FONT_WEIGHTS,FONT_WEIGHT_MAPPINGS,ERROR_MESSAGES]=this.__closure;const stringValue=value.toString();if(VALID_FONT_WEIGHTS.has(stringValue)){return stringValue;}if(Object.prototype.hasOwnProperty.call(FONT_WEIGHT_MAPPINGS,stringValue)){return FONT_WEIGHT_MAPPINGS[stringValue];}throw new Error(\"[Reanimated] \"+ERROR_MESSAGES.invalidFontWeight(value));})" }, new Set(Object.values(FONT_WEIGHT_MAPPINGS.FONT_WEIGHT_MAPPINGS)), , ];
new Set(Object.values(FONT_WEIGHT_MAPPINGS.FONT_WEIGHT_MAPPINGS));
items1[2] = FONT_WEIGHT_MAPPINGS.FONT_WEIGHT_MAPPINGS;
items1[3] = obj;
let c0;
let c1;
let c2;
[tmp4, tmp5, tmp6, tmp7] = items1;
function pnpm_fontTs2(arg0) {
  const str1 = arg0.toString();
  if (set.has(str1)) {
    return str1;
  } else {
    const _Object = Object;
    hasOwnProperty = Object.prototype.hasOwnProperty;
    if (hasOwnProperty.call(_undefined, str1)) {
      return _undefined[str1];
    } else {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const error = new Error("[Reanimated] " + _undefined2.invalidFontWeight(arg0));
      throw error;
    }
  }
}
const items2 = [tmp5, tmp6, tmp7];
pnpm_fontTs2.__closure = items2;
pnpm_fontTs2.__workletHash = 3256864803236;
pnpm_fontTs2.__initData = tmp4;

export const ERROR_MESSAGES = obj;
export const processFontWeight = pnpm_fontTs2;

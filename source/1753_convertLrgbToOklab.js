// Module ID: 1753
// Function ID: 19602
// Name: convertLrgbToOklab
// Dependencies: [1754]

// Module 1753 (convertLrgbToOklab)
const module = arg2;
const dependencyMap = arg6;
let closure_2 = { code: "function convertLrgbToOklab_Pnpm_oklabTs1({r=0,g=0,b=0,alpha:alpha}){const L=Math.cbrt(0.41222147079999993*r+0.5363325363*g+0.0514459929*b);const M=Math.cbrt(0.2119034981999999*r+0.6806995450999999*g+0.1073969566*b);const S=Math.cbrt(0.08830246189999998*r+0.2817188376*g+0.6299787005000002*b);return{l:0.2104542553*L+0.793617785*M-0.0040720468*S,a:1.9779984951*L-2.428592205*M+0.4505937099*S,b:0.0259040371*L+0.7827717662*M-0.808675766*S,alpha:alpha};}" };
let closure_3 = (() => {
  function convertLrgbToOklab(alpha) {
    const r = alpha.r;
    let num = 0;
    if (undefined !== r) {
      num = r;
    }
    const g = alpha.g;
    let num2 = 0;
    if (undefined !== g) {
      num2 = g;
    }
    const b = alpha.b;
    let num3 = 0;
    if (undefined !== b) {
      num3 = b;
    }
    const cbrtResult = Math.cbrt(0.41222147079999993 * num + 0.5363325363 * num2 + 0.0514459929 * num3);
    const cbrtResult1 = Math.cbrt(0.2119034981999999 * num + 0.6806995450999999 * num2 + 0.1073969566 * num3);
    const cbrtResult2 = Math.cbrt(0.08830246189999998 * num + 0.2817188376 * num2 + 0.6299787005000002 * num3);
    return { l: 0.2104542553 * cbrtResult + 0.793617785 * cbrtResult1 - 0.0040720468 * cbrtResult2, a: 1.9779984951 * cbrtResult - 2.428592205 * cbrtResult1 + 0.4505937099 * cbrtResult2, b: 0.0259040371 * cbrtResult + 0.7827717662 * cbrtResult1 - 0.808675766 * cbrtResult2, alpha: alpha.alpha };
  }
  convertLrgbToOklab.__closure = {};
  convertLrgbToOklab.__workletHash = 12620455378469;
  convertLrgbToOklab.__initData = closure_2;
  return convertLrgbToOklab;
})();
let closure_4 = { code: "function convertRgbToOklab_Pnpm_oklabTs2(rgb){const{lrgb,convertLrgbToOklab}=this.__closure;const lrgbColor=lrgb.convert.fromRgb(rgb);const result=convertLrgbToOklab(lrgbColor);if(rgb.r===rgb.b&&rgb.b===rgb.g){result.a=result.b=0;}return result;}" };
let closure_5 = { code: "function convertOklabToLrgb_Pnpm_oklabTs3({l=0,a=0,b=0,alpha:alpha}){const L=Math.pow(l*0.99999999845051981432+0.39633779217376785678*a+0.21580375806075880339*b,3);const M=Math.pow(l*1.0000000088817607767-0.1055613423236563494*a-0.063854174771705903402*b,3);const S=Math.pow(l*1.0000000546724109177-0.089484182094965759684*a-1.2914855378640917399*b,3);return{r:+4.076741661347994*L-3.307711590408193*M+0.230969928729428*S,g:-1.2684380040921763*L+2.6097574006633715*M-0.3413193963102197*S,b:-0.004196086541837188*L-0.7034186144594493*M+1.7076147009309444*S,alpha:alpha};}" };
let closure_6 = (() => {
  function convertOklabToLrgb(alpha) {
    const l = alpha.l;
    let num = 0;
    if (undefined !== l) {
      num = l;
    }
    const a = alpha.a;
    let num2 = 0;
    if (undefined !== a) {
      num2 = a;
    }
    const b = alpha.b;
    let num3 = 0;
    if (undefined !== b) {
      num3 = b;
    }
    const powResult = Math.pow(0.9999999984505198 * num + 0.39633779217376786 * num2 + 0.2158037580607588 * num3, 3);
    const powResult1 = Math.pow(1.0000000088817609 * num - 0.10556134232365635 * num2 - 0.06385417477170591 * num3, 3);
    const powResult2 = Math.pow(1.0000000546724108 * num - 0.08948418209496575 * num2 - 1.2914855378640917 * num3, 3);
    return { r: 4.076741661347994 * powResult - 3.307711590408193 * powResult1 + 0.230969928729428 * powResult2, g: -1.2684380040921763 * powResult + 2.6097574006633715 * powResult1 - 0.3413193963102197 * powResult2, b: -0.004196086541837188 * powResult - 0.7034186144594493 * powResult1 + 1.7076147009309444 * powResult2, alpha: alpha.alpha };
  }
  convertOklabToLrgb.__closure = {};
  convertOklabToLrgb.__workletHash = 14870197803884;
  convertOklabToLrgb.__initData = closure_5;
  return convertOklabToLrgb;
})();
let closure_7 = { code: "function convertOklabToRgb_Pnpm_oklabTs4(labColor){const{convertOklabToLrgb,lrgb}=this.__closure;const roundChannel=function(channel){return Math.ceil(channel*100_000)/100_000;};const lrgbColor=convertOklabToLrgb(labColor);const rgbColor=lrgb.convert.toRgb(lrgbColor);rgbColor.r=roundChannel(rgbColor.r);rgbColor.g=roundChannel(rgbColor.g);rgbColor.b=roundChannel(rgbColor.b);return rgbColor;}" };
let obj = {};
obj = {
  fromRgb: (() => {
    function convertRgbToOklab(arg0) {
      const convert = outer1_0(outer1_1[0]).convert;
      const tmp = outer1_3(convert.fromRgb(arg0));
      if (tmp2) {
        tmp.b = 0;
        tmp.a = 0;
      }
      return tmp;
    }
    convertRgbToOklab.__closure = { lrgb: module(1754), convertLrgbToOklab: closure_3 };
    convertRgbToOklab.__workletHash = 16743889557677;
    convertRgbToOklab.__initData = closure_4;
    return convertRgbToOklab;
  })(),
  toRgb: (() => {
    function convertOklabToRgb(arg0) {
      function roundChannel(g) {
        return Math.ceil(100000 * g) / 100000;
      }
      const convert = outer1_0(outer1_1[0]).convert;
      const toRgbResult = convert.toRgb(outer1_6(arg0));
      toRgbResult.r = roundChannel(toRgbResult.r);
      toRgbResult.g = roundChannel(toRgbResult.g);
      toRgbResult.b = roundChannel(toRgbResult.b);
      return toRgbResult;
    }
    convertOklabToRgb.__closure = { convertOklabToLrgb: closure_6, lrgb: module(1754) };
    convertOklabToRgb.__workletHash = 14795767520122;
    convertOklabToRgb.__initData = closure_7;
    return convertOklabToRgb;
  })()
};
obj.convert = obj;
arg5.default = obj;

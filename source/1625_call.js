// Module ID: 1625
// Function ID: 18133
// Name: call
// Dependencies: []
// Exports: blue, green, hsvToColor, opacity, red

// Module 1625 (call)
function call(arg0, arg1, arg2) {
  const length = arguments.length;
  const array = new Array(length);
  for (let num = 0; num < length; num = num + 1) {
    array[num] = arguments[num];
  }
  return "\\(\\s*(" + array.join(")\\s*,?\\s*(") + ")\\s*\\)";
}
function callWithSlashSeparator(arg0, arg1, arg2, arg3) {
  const length = arguments.length;
  const arr = new Array(length);
  for (let num = 0; num < length; num = num + 1) {
    arr[num] = arguments[num];
  }
  const substr = arr.slice(0, arr.length - 1);
  return "\\(\\s*(" + substr.join(")\\s*,?\\s*(") + ")\\s*/\\s*(" + arr[arr.length - 1] + ")\\s*\\)";
}
function commaSeparatedCall(arg0, arg1, arg2, arg3) {
  const length = arguments.length;
  const array = new Array(length);
  for (let num = 0; num < length; num = num + 1) {
    array[num] = arguments[num];
  }
  return "\\(\\s*(" + array.join(")\\s*,\\s*(") + ")\\s*\\)";
}
const obj = {};
const regExp = new RegExp("rgb" + call("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+"));
obj.rgb = regExp;
const regExp1 = new RegExp("rgba(" + commaSeparatedCall("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+") + "|" + callWithSlashSeparator("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+") + ")");
obj.rgba = regExp1;
const regExp2 = new RegExp("hsl" + call("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+%", "[-+]?\\d*\\.?\\d+%"));
obj.hsl = regExp2;
const commaSeparatedCallResult = commaSeparatedCall("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+");
const regExp3 = new RegExp("hsla(" + commaSeparatedCall("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+%", "[-+]?\\d*\\.?\\d+%", "[-+]?\\d*\\.?\\d+") + "|" + callWithSlashSeparator("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+%", "[-+]?\\d*\\.?\\d+%", "[-+]?\\d*\\.?\\d+") + ")");
obj.hsla = regExp3;
const regExp4 = new RegExp("hwb" + call("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+%", "[-+]?\\d*\\.?\\d+%"));
obj.hwb = regExp4;
obj.hex3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
obj.hex4 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
obj.hex6 = /^#([0-9a-fA-F]{6})$/;
obj.hex8 = /^#([0-9a-fA-F]{8})$/;
let closure_1 = { code: "function hue2rgb_Pnpm_ColorsTs1(p,q,t){if(t<0){t+=1;}if(t>1){t-=1;}if(t<1/6){return p+(q-p)*6*t;}if(t<1/2){return q;}if(t<2/3){return p+(q-p)*(2/3-t)*6;}return p;}" };
let closure_2 = () => {
  function hue2rgb(arg0, arg1, arg2) {
    let sum = arg2;
    if (arg2 < 0) {
      sum = arg2 + 1;
    }
    let diff = sum;
    if (sum > 1) {
      diff = sum - 1;
    }
    if (diff < 0.16666666666666666) {
      let sum1 = arg0 + 6 * (arg1 - arg0) * diff;
    } else {
      sum1 = arg1;
      if (diff >= 0.5) {
        let sum2 = arg0;
        if (diff < 0.6666666666666666) {
          sum2 = arg0 + (arg1 - arg0) * (0.6666666666666666 - diff) * 6;
        }
        sum1 = sum2;
      }
    }
    return sum1;
  }
  hue2rgb.__closure = {};
  hue2rgb.__workletHash = 13577481829661;
  hue2rgb.__initData = closure_1;
  return hue2rgb;
}();
let closure_3 = { code: "function hslToRgb_Pnpm_ColorsTs2(h,s,l){const{hue2rgb}=this.__closure;const q=l<0.5?l*(1+s):l+s-l*s;const p=2*l-q;const r=hue2rgb(p,q,h+1/3);const g=hue2rgb(p,q,h);const b=hue2rgb(p,q,h-1/3);return Math.round(r*255)<<24|Math.round(g*255)<<16|Math.round(b*255)<<8;}" };
let closure_4 = () => {
  function hslToRgb(arg0, arg1, arg2) {
    if (arg2 < 0.5) {
      let result = arg2 * (1 + arg1);
    } else {
      result = arg2 + arg1 - arg2 * arg1;
    }
    const diff = 2 * arg2 - result;
    const tmp3 = callback(diff, result, arg0 + 0.3333333333333333);
    const tmp4 = callback(diff, result, arg0);
    const tmp5 = callback(diff, result, arg0 - 0.3333333333333333);
    const tmp6 = Math.round(255 * tmp3) << 24;
    return tmp6 | Math.round(255 * tmp4) << 16 | Math.round(255 * tmp5) << 8;
  }
  hslToRgb.__closure = { hue2rgb: closure_2 };
  hslToRgb.__workletHash = 1406907784351;
  hslToRgb.__initData = closure_3;
  return hslToRgb;
}();
let closure_5 = { code: "function hwbToRgb_Pnpm_ColorsTs3(h,w,b){const{hue2rgb}=this.__closure;if(w+b>=1){const gray=Math.round(w*255/(w+b));return gray<<24|gray<<16|gray<<8;}const red=hue2rgb(0,1,h+1/3)*(1-w-b)+w;const green=hue2rgb(0,1,h)*(1-w-b)+w;const blue=hue2rgb(0,1,h-1/3)*(1-w-b)+w;return Math.round(red*255)<<24|Math.round(green*255)<<16|Math.round(blue*255)<<8;}" };
let closure_6 = () => {
  function hwbToRgb(arg0, arg1, arg2) {
    if (arg1 + arg2 >= 1) {
      const _Math = Math;
      const rounded = Math.round(255 * arg1 / (arg1 + arg2));
      return rounded << 24 | rounded << 16 | rounded << 8;
    } else {
      const sum = callback(0, 1, arg0 + 0.3333333333333333) * (1 - arg1 - arg2) + arg1;
      const sum1 = callback(0, 1, arg0) * (1 - arg1 - arg2) + arg1;
      const _Math2 = Math;
      const sum2 = callback(0, 1, arg0 - 0.3333333333333333) * (1 - arg1 - arg2) + arg1;
      const _Math3 = Math;
      const _Math4 = Math;
      const tmp8 = Math.round(255 * sum) << 24;
      return tmp8 | Math.round(255 * sum1) << 16 | Math.round(255 * sum2) << 8;
    }
  }
  hwbToRgb.__closure = { hue2rgb: closure_2 };
  hwbToRgb.__workletHash = 16684751503669;
  hwbToRgb.__initData = closure_5;
  return hwbToRgb;
}();
let closure_7 = { code: "function parse255_Pnpm_ColorsTs4(str){const int=Number.parseInt(str,10);if(int<0){return 0;}if(int>255){return 255;}return int;}" };
let closure_8 = () => {
  function parse255(replaced) {
    const parsed = Number.parseInt(replaced, 10);
    let num = 0;
    if (parsed >= 0) {
      let num2 = 255;
      if (parsed <= 255) {
        num2 = parsed;
      }
      num = num2;
    }
    return num;
  }
  parse255.__closure = {};
  parse255.__workletHash = 1908258547020;
  parse255.__initData = closure_7;
  return parse255;
}();
let closure_9 = { code: "function parse360_Pnpm_ColorsTs5(str){const int=Number.parseFloat(str);return(int%360+360)%360/360;}" };
let closure_10 = () => {
  function parse360(arg0) {
    return (Number.parseFloat(arg0) % 360 + 360) % 360 / 360;
  }
  parse360.__closure = {};
  parse360.__workletHash = 15674458953827;
  parse360.__initData = closure_9;
  return parse360;
}();
let closure_11 = { code: "function parse1_Pnpm_ColorsTs6(str){const num=Number.parseFloat(str);if(num<0){return 0;}if(num>1){return 255;}return Math.round(num*255);}" };
let closure_12 = () => {
  function parse1(arg0) {
    const parsed = Number.parseFloat(arg0);
    let num = 0;
    if (parsed >= 0) {
      let num4 = 255;
      if (parsed <= 1) {
        const _Math = Math;
        num4 = Math.round(255 * parsed);
      }
      num = num4;
    }
    return num;
  }
  parse1.__closure = {};
  parse1.__workletHash = 1305446443589;
  parse1.__initData = closure_11;
  return parse1;
}();
let closure_13 = { code: "function parsePercentage_Pnpm_ColorsTs7(str){const int=Number.parseFloat(str);if(int<0){return 0;}if(int>100){return 1;}return int/100;}" };
let closure_14 = () => {
  function parsePercentage(arg0) {
    const parsed = Number.parseFloat(arg0);
    let num = 0;
    if (parsed >= 0) {
      let num3 = 1;
      if (parsed <= 100) {
        num3 = parsed / 100;
      }
      num = num3;
    }
    return num;
  }
  parsePercentage.__closure = {};
  parsePercentage.__workletHash = 3056354218613;
  parsePercentage.__initData = closure_13;
  return parsePercentage;
}();
let closure_15 = { code: "function clampRGBA_Pnpm_ColorsTs8(RGBA){for(let i=0;i<4;i++){RGBA[i]=Math.max(0,Math.min(RGBA[i],1));}}" };
const commaSeparatedCallResult1 = commaSeparatedCall("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+%", "[-+]?\\d*\\.?\\d+%", "[-+]?\\d*\\.?\\d+");
const _module = require(dependencyMap[0]);
let closure_16 = _module.makeShareable({ "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null });
const _module1 = require(dependencyMap[0]);
const shareable = _module1.makeShareable([]);
const _module2 = require(dependencyMap[0]);
let closure_18 = _module2.makeShareable({ boxShadow: "color" });
let closure_19 = { code: "function normalizeColor_Pnpm_ColorsTs9(color){const{MATCHERS,names,parse255,parse1,hslToRgb,parse360,parsePercentage,hwbToRgb}=this.__closure;if(typeof color==='number'){if(color>>>0===color&&color>=0&&color<=0xffffffff){return color;}return null;}if(typeof color!=='string'){return null;}let match;if(match=MATCHERS.hex6.exec(color)){return Number.parseInt(match[1]+'ff',16)>>>0;}if(names[color]!==undefined){return names[color];}if(match=MATCHERS.rgb.exec(color)){return((parse255(match[1])<<24|parse255(match[2])<<16|parse255(match[3])<<8|0x000000ff)>>>0);}if(match=MATCHERS.rgba.exec(color)){if(match[6]!==undefined){return(parse255(match[6])<<24|parse255(match[7])<<16|parse255(match[8])<<8|parse1(match[9]))>>>0;}return(parse255(match[2])<<24|parse255(match[3])<<16|parse255(match[4])<<8|parse1(match[5]))>>>0;}if(match=MATCHERS.hex3.exec(color)){return Number.parseInt(match[1]+match[1]+match[2]+match[2]+match[3]+match[3]+'ff',16)>>>0;}if(match=MATCHERS.hex8.exec(color)){return Number.parseInt(match[1],16)>>>0;}if(match=MATCHERS.hex4.exec(color)){return Number.parseInt(match[1]+match[1]+match[2]+match[2]+match[3]+match[3]+match[4]+match[4],16)>>>0;}if(match=MATCHERS.hsl.exec(color)){return(hslToRgb(parse360(match[1]),parsePercentage(match[2]),parsePercentage(match[3]))|0x000000ff)>>>0;}if(match=MATCHERS.hsla.exec(color)){if(match[6]!==undefined){return(hslToRgb(parse360(match[6]),parsePercentage(match[7]),parsePercentage(match[8]))|parse1(match[9]))>>>0;}return(hslToRgb(parse360(match[2]),parsePercentage(match[3]),parsePercentage(match[4]))|parse1(match[5]))>>>0;}if(match=MATCHERS.hwb.exec(color)){return(hwbToRgb(parse360(match[1]),parsePercentage(match[2]),parsePercentage(match[3]))|0x000000ff)>>>0;}return null;}" };
const tmp11 = () => {
  function normalizeColor(arg0) {
    if ("number" === typeof arg0) {
      let tmp66 = null;
      if (arg0 >>> 0 === arg0) {
        tmp66 = null;
        if (arg0 >= 0) {
          tmp66 = null;
          if (arg0 <= 4294967295) {
            tmp66 = arg0;
          }
        }
      }
      let tmp67 = tmp66;
    } else {
      tmp67 = null;
      if ("string" === tmp) {
        const hex6 = closure_0.hex6;
        let match = hex6.exec(arg0);
        if (match) {
          const _Number4 = Number;
          match = Number.parseInt(`${tmp64[1]}ff`, 16);
          let tmp17 = match >>> 0;
        } else if (undefined !== closure_16[arg0]) {
          tmp17 = closure_16[arg0];
        } else {
          const rgb = closure_0.rgb;
          const match1 = rgb.exec(arg0);
          if (match1) {
            const tmp60 = callback3(match1[1]) << 24;
            tmp17 = (tmp60 | callback3(match1[2]) << 16 | callback3(match1[3]) << 8 | 255) >>> 0;
            const tmp61 = callback3(match1[2]) << 16;
          } else {
            const rgba = closure_0.rgba;
            const match2 = rgba.exec(arg0);
            if (match2) {
              let num34 = 6;
              if (undefined !== match2[6]) {
                const tmp54 = callback3(match2[num34]) << 24;
                const tmp55 = callback3(match2[7]) << 16;
                num34 = 0;
                let tmp52 = (tmp54 | tmp55 | callback3(match2[8]) << 8 | callback5(match2[9])) >>> 0;
                const tmp56 = callback3(match2[8]) << 8;
              } else {
                const tmp48 = callback3(match2[2]) << 24;
                const tmp49 = callback3(match2[3]) << 16;
                tmp52 = (tmp48 | tmp49 | callback3(match2[4]) << 8 | callback5(match2[5])) >>> 0;
                const tmp50 = callback3(match2[4]) << 8;
              }
            } else {
              const hex3 = closure_0.hex3;
              const match3 = hex3.exec(arg0);
              if (match3) {
                const _Number3 = Number;
                tmp17 = Number.parseInt(`${tmp6[1]}${tmp6[1]}${tmp6[2]}${tmp6[2]}${tmp6[3]}${tmp6[3]}ff`, 16) >>> 0;
              } else {
                const hex8 = closure_0.hex8;
                const match4 = hex8.exec(arg0);
                if (match4) {
                  const _Number2 = Number;
                  tmp17 = Number.parseInt(match4[1], 16) >>> 0;
                } else {
                  const hex4 = closure_0.hex4;
                  const match5 = hex4.exec(arg0);
                  if (match5) {
                    const _Number = Number;
                    tmp17 = Number.parseInt(match5[1] + match5[1] + match5[2] + match5[2] + match5[3] + match5[3] + match5[4] + match5[4], 16) >>> 0;
                  } else {
                    const hsl = closure_0.hsl;
                    const match6 = hsl.exec(arg0);
                    if (match6) {
                      const tmp41 = callback4(match6[1]);
                      tmp17 = (255 | callback(tmp41, callback6(match6[2]), callback6(match6[3]))) >>> 0;
                      const tmp43 = callback6(match6[2]);
                    } else {
                      const hsla = closure_0.hsla;
                      const match7 = hsla.exec(arg0);
                      if (match7) {
                        let num6 = 6;
                        if (undefined !== match7[6]) {
                          const tmp33 = callback4(match7[num6]);
                          const tmp35 = callback6(match7[7]);
                          num6 = 0;
                          let tmp30 = (callback(tmp33, callback6(match7[7]), callback6(match7[8])) | callback5(match7[9])) >>> 0;
                          const tmp36 = callback(tmp33, callback6(match7[7]), callback6(match7[8]));
                        } else {
                          const tmp25 = callback4(match7[2]);
                          const tmp27 = callback6(match7[3]);
                          tmp30 = (callback(tmp25, callback6(match7[3]), callback6(match7[4])) | callback5(match7[5])) >>> 0;
                          const tmp28 = callback(tmp25, callback6(match7[3]), callback6(match7[4]));
                        }
                      } else {
                        const hwb = closure_0.hwb;
                        const match8 = hwb.exec(arg0);
                        tmp17 = null;
                        if (match8) {
                          const tmp20 = callback4(match8[1]);
                          tmp17 = (255 | callback2(tmp20, callback6(match8[2]), callback6(match8[3]))) >>> 0;
                          const tmp22 = callback6(match8[2]);
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return tmp67;
  }
  const obj = { MATCHERS: obj, names: closure_16, parse255: closure_8, parse1: closure_12, hslToRgb: closure_4, parse360: closure_10, parsePercentage: closure_14, hwbToRgb: closure_6 };
  normalizeColor.__closure = obj;
  normalizeColor.__workletHash = 13656798455904;
  normalizeColor.__initData = closure_19;
  return normalizeColor;
}();
/* worklet (recovered source) */ function pnpm_ColorsTs10(c){return(c>>24&255)/255;}
pnpm_ColorsTs10.__closure = {};
pnpm_ColorsTs10.__workletHash = 5651263271273;
pnpm_ColorsTs10.__initData = { code: "function pnpm_ColorsTs10(c){return(c>>24&255)/255;}" };
/* worklet (recovered source) */ function pnpm_ColorsTs11(c){return c>>16&255;}
pnpm_ColorsTs11.__closure = {};
pnpm_ColorsTs11.__workletHash = 10831766115157;
pnpm_ColorsTs11.__initData = { code: "function pnpm_ColorsTs11(c){return c>>16&255;}" };
/* worklet (recovered source) */ function pnpm_ColorsTs12(c){return c>>8&255;}
pnpm_ColorsTs12.__closure = {};
pnpm_ColorsTs12.__workletHash = 3551227549865;
pnpm_ColorsTs12.__initData = { code: "function pnpm_ColorsTs12(c){return c>>8&255;}" };
/* worklet (recovered source) */ function pnpm_ColorsTs13(c){return c&255;}
pnpm_ColorsTs13.__closure = {};
pnpm_ColorsTs13.__workletHash = 8634480727248;
pnpm_ColorsTs13.__initData = { code: "function pnpm_ColorsTs13(c){return c&255;}" };
/* worklet (recovered source) */ function pnpm_ColorsTs14(r,g,b,alpha=1){const safeAlpha=alpha<0.001?0:alpha;return"rgba("+r+", "+g+", "+b+", "+safeAlpha+")";}
pnpm_ColorsTs14.__closure = {};
pnpm_ColorsTs14.__workletHash = 14577013878569;
pnpm_ColorsTs14.__initData = { code: "function pnpm_ColorsTs14(r,g,b,alpha=1){const safeAlpha=alpha<0.001?0:alpha;return\"rgba(\"+r+\", \"+g+\", \"+b+\", \"+safeAlpha+\")\";}" };
let closure_22 = { code: "function RGBtoHSV_Pnpm_ColorsTs15(r,g,b){const max=Math.max(r,g,b);const min=Math.min(r,g,b);const d=max-min;const s=max===0?0:d/max;const v=max/255;let h=0;switch(max){case min:break;case r:h=g-b+d*(g<b?6:0);h/=6*d;break;case g:h=b-r+d*2;h/=6*d;break;case b:h=r-g+d*4;h/=6*d;break;}return{h:h,s:s,v:v};}" };
let closure_23 = { code: "function HSVtoRGB_Pnpm_ColorsTs16(h,s,v){let r,g,b;const i=Math.floor(h*6);const f=h*6-i;const p=v*(1-s);const q=v*(1-f*s);const t=v*(1-(1-f)*s);switch(i%6){case 0:[r,g,b]=[v,t,p];break;case 1:[r,g,b]=[q,v,p];break;case 2:[r,g,b]=[p,v,t];break;case 3:[r,g,b]=[p,q,v];break;case 4:[r,g,b]=[t,p,v];break;case 5:[r,g,b]=[v,p,q];break;}return{r:Math.round(r*255),g:Math.round(g*255),b:Math.round(b*255)};}" };
const tmp9 = () => {
  function clampRGBA(items) {
    let num = 0;
    do {
      let _Math = Math;
      let _Math2 = Math;
      items[num] = Math.max(0, Math.min(items[num], 1));
      num = num + 1;
    } while (num < 4);
  }
  clampRGBA.__closure = {};
  clampRGBA.__workletHash = 13575809516663;
  clampRGBA.__initData = closure_15;
  return clampRGBA;
}();
const tmp13 = () => {
  class HSVtoRGB {
    constructor(arg0, arg1, arg2) {
      rounded = Math.floor(6 * arg0);
      diff = 6 * arg0 - rounded;
      result = arg2 * (1 - arg1);
      result1 = arg2 * (1 - diff * arg1);
      result2 = arg2 * (1 - (1 - diff) * arg1);
      result3 = rounded % 6;
      if (0 === result3) {
        tmp7 = arg2;
        tmp8 = result2;
        tmp9 = result;
      } else if (1 === result3) {
        tmp7 = result1;
        tmp8 = arg2;
        tmp9 = result;
      } else {
        num = 2;
        if (2 === result3) {
          tmp7 = result;
          tmp8 = arg2;
          tmp9 = result2;
        } else {
          num2 = 3;
          if (3 === result3) {
            tmp7 = result;
            tmp8 = result1;
            tmp9 = arg2;
          } else {
            num3 = 4;
            if (4 === result3) {
              tmp7 = result2;
              tmp8 = result;
              tmp9 = arg2;
            } else {
              num4 = 5;
              if (5 === result3) {
                tmp7 = arg2;
                tmp8 = result;
                tmp9 = result1;
              }
            }
          }
        }
      }
      obj = {};
      obj.r = Math.round(255 * tmp7);
      obj.g = Math.round(255 * tmp8);
      obj.b = Math.round(255 * tmp9);
      return obj;
    }
  }
  HSVtoRGB.__closure = {};
  HSVtoRGB.__workletHash = 5232397720804;
  HSVtoRGB.__initData = closure_23;
  return HSVtoRGB;
}();
/* worklet (recovered source) */ function pnpm_ColorsTs17(h,s,v,a){const{HSVtoRGB,rgbaColor}=this.__closure;const{r:r,g:g,b:b}=HSVtoRGB(h,s,v);return rgbaColor(r,g,b,a);}
pnpm_ColorsTs17.__closure = { HSVtoRGB: tmp13, rgbaColor: pnpm_ColorsTs14 };
pnpm_ColorsTs17.__workletHash = 16564231422584;
pnpm_ColorsTs17.__initData = { code: "function pnpm_ColorsTs17(h,s,v,a){const{HSVtoRGB,rgbaColor}=this.__closure;const{r:r,g:g,b:b}=HSVtoRGB(h,s,v);return rgbaColor(r,g,b,a);}" };
let closure_25 = { code: "function processColorInitially_Pnpm_ColorsTs18(color){const{normalizeColor}=this.__closure;if(color===null||color===undefined){return color;}let colorNumber;if(typeof color==='number'){colorNumber=color;}else{const normalizedColor=normalizeColor(color);if(normalizedColor===null||normalizedColor===undefined){return undefined;}if(typeof normalizedColor!=='number'){return null;}colorNumber=normalizedColor;}return(colorNumber<<24|colorNumber>>>8)>>>0;}" };
const tmp14 = () => {
  function processColorInitially(arg0) {
    if (null == arg0) {
      return arg0;
    } else {
      let tmp = arg0;
      if ("number" !== typeof arg0) {
        const tmp3 = callback(arg0);
        if (null != tmp3) {
          tmp = tmp3;
          if ("number" !== typeof tmp3) {
            return null;
          }
        }
      }
      return (tmp << 24 | tmp >>> 8) >>> 0;
    }
  }
  processColorInitially.__closure = { normalizeColor: tmp11 };
  processColorInitially.__workletHash = 7970244905356;
  processColorInitially.__initData = closure_25;
  return processColorInitially;
}();
let closure_27 = { code: "function isColor_Pnpm_ColorsTs19(value){const{processColorInitially}=this.__closure;if(typeof value!=='string'){return false;}return processColorInitially(value)!=null;}" };
const tmp12 = () => {
  class RGBtoHSV {
    constructor(arg0, arg1, arg2) {
      bound = Math.max(arg0, arg1, arg2);
      bound1 = Math.min(arg0, arg1, arg2);
      diff = bound - bound1;
      num = 0;
      if (0 !== bound) {
        num = diff / bound;
      }
      num2 = 0;
      result = bound / 255;
      if (bound1 !== bound) {
        if (arg0 === bound) {
          num7 = 0;
          diff1 = arg1 - arg2;
          if (arg1 < arg2) {
            num7 = 6;
          }
          num8 = 6;
          num2 = (diff1 + diff * num7) / (6 * diff);
        } else if (arg1 === bound) {
          num5 = 2;
          num6 = 6;
          num2 = (arg2 - arg0 + 2 * diff) / (6 * diff);
        } else {
          num2 = 0;
          if (arg2 === bound) {
            num3 = 4;
            num4 = 6;
            num2 = (arg0 - arg1 + 4 * diff) / (6 * diff);
          }
        }
      }
      obj = {};
      obj.h = num2;
      obj.s = num;
      obj.v = result;
      return obj;
    }
  }
  RGBtoHSV.__closure = {};
  RGBtoHSV.__workletHash = 13961093508129;
  RGBtoHSV.__initData = closure_22;
  return RGBtoHSV;
}();
const _module3 = require(dependencyMap[1]);
let closure_28 = _module3.isAndroid();
let closure_29 = { code: "function processColor_Pnpm_ColorsTs20(color){const{processColorInitially,IS_ANDROID}=this.__closure;let normalizedColor=processColorInitially(color);if(normalizedColor===null||normalizedColor===undefined){return undefined;}if(typeof normalizedColor!=='number'){return null;}if(IS_ANDROID){normalizedColor=normalizedColor|0x0;}return normalizedColor;}" };
const tmp16 = () => {
  function processColor(arg0) {
    const tmp = callback(arg0);
    if (null != tmp) {
      let tmp2 = null;
      if ("number" === typeof tmp) {
        let tmp4 = tmp;
        if (closure_28) {
          tmp4 = tmp | 0;
        }
        tmp2 = tmp4;
      }
      return tmp2;
    }
  }
  processColor.__closure = { processColorInitially: tmp14, IS_ANDROID: closure_28 };
  processColor.__workletHash = 850613387330;
  processColor.__initData = closure_29;
  return processColor;
}();
let closure_31 = { code: "function processColorsInProps_Pnpm_ColorsTs21(props){const{ColorProperties,processColor,NestedColorProperties}=this.__closure;for(const key in props){if(ColorProperties.includes(key)){if(Array.isArray(props[key])){props[key]=props[key].map(function(color){return processColor(color);});}else{props[key]=processColor(props[key]);}}else if(NestedColorProperties[key]){const propGroupList=props[key];for(const propGroup of propGroupList){const nestedPropertyName=NestedColorProperties[key];if(propGroup[nestedPropertyName]!==undefined){propGroup[nestedPropertyName]=processColor(propGroup[nestedPropertyName]);}}}}}" };
let closure_32 = { code: "function convertToRGBA_Pnpm_ColorsTs22(color){const{processColorInitially}=this.__closure;const processedColor=processColorInitially(color);const a=(processedColor>>>24)/255;const r=(processedColor<<8>>>24)/255;const g=(processedColor<<16>>>24)/255;const b=(processedColor<<24>>>24)/255;return[r,g,b,a];}" };
const tmp15 = () => {
  function isColor(current) {
    let tmp = "string" === typeof current;
    if (tmp) {
      tmp = null != callback(current);
    }
    return tmp;
  }
  isColor.__closure = { processColorInitially: tmp14 };
  isColor.__workletHash = 13504829084422;
  isColor.__initData = closure_27;
  return isColor;
}();
let closure_33 = { code: "function rgbaArrayToRGBAColor_Pnpm_ColorsTs23(RGBA){const alpha=RGBA[3]<0.001?0:RGBA[3];return\"rgba(\"+Math.round(RGBA[0]*255)+\", \"+Math.round(RGBA[1]*255)+\", \"+Math.round(RGBA[2]*255)+\", \"+alpha+\")\";}" };
const tmp17 = () => {
  function processColorsInProps(obj) {
    for (const key10008 in arg0) {
      let tmp17 = key10008;
      let tmp18 = key10008;
      let tmp19 = closure_17;
      if (closure_17.includes(key10008)) {
        let _Array = Array;
        let tmp14 = tmp17;
        let tmp15 = tmp17;
        if (Array.isArray(arg0[tmp18])) {
          let arr = arg0[tmp18];
          arg0[tmp18] = arr.map((arg0) => callback(arg0));
          // continue
        } else {
          let tmp16 = closure_30;
          arg0[tmp18] = closure_30(arg0[tmp18]);
          // continue
        }
        continue;
      } else {
        let tmp = closure_18;
        let tmp2 = tmp17;
        if (!closure_18[tmp18]) {
          continue;
        } else {
          let tmp3 = tmp17;
          let tmp4 = arg0[tmp18];
          let tmp5 = tmp4;
          for (const item10016 of tmp4) {
            let tmp6 = item10016;
            let tmp7 = closure_18;
            let tmp8 = tmp17;
            let tmp9 = closure_18[tmp18];
            let tmp10 = tmp9;
            if (undefined !== item10016[tmp9]) {
              let tmp11 = item10016;
              let tmp12 = tmp9;
              let tmp13 = closure_30;
              tmp6[tmp10] = closure_30(tmp6[tmp10]);
            }
          }
        }
        continue;
      }
      continue;
    }
  }
  processColorsInProps.__closure = { ColorProperties: shareable, processColor: tmp16, NestedColorProperties: closure_18 };
  processColorsInProps.__workletHash = 978448002474;
  processColorsInProps.__initData = closure_31;
  return processColorsInProps;
}();
let closure_34 = { code: "function toLinearSpace_Pnpm_ColorsTs24(RGBA,gamma=2.2){const res=[];for(let i=0;i<3;++i){res.push(Math.pow(RGBA[i],gamma));}res.push(RGBA[3]);return res;}" };
const tmp18 = () => {
  function convertToRGBA(current) {
    const tmp = callback(current);
    const items = [(tmp << 8 >>> 24) / 255, (tmp << 16 >>> 24) / 255, (tmp << 24 >>> 24) / 255, (tmp >>> 24) / 255];
    return items;
  }
  convertToRGBA.__closure = { processColorInitially: tmp14 };
  convertToRGBA.__workletHash = 15503083969849;
  convertToRGBA.__initData = closure_32;
  return convertToRGBA;
}();
let closure_35 = { code: "function toGammaSpace_Pnpm_ColorsTs25(RGBA,gamma=2.2){const res=[];for(let i=0;i<3;++i){res.push(Math.pow(RGBA[i],1/gamma));}res.push(RGBA[3]);return res;}" };
const tmp19 = () => {
  function rgbaArrayToRGBAColor(arg0) {
    let num = 0;
    if (arg0[3] >= 0.001) {
      num = arg0[3];
    }
    const rounded = Math.round(255 * arg0[0]);
    const rounded1 = Math.round(255 * arg0[1]);
    return "rgba(" + rounded + ", " + rounded1 + ", " + Math.round(255 * arg0[2]) + ", " + num + ")";
  }
  rgbaArrayToRGBAColor.__closure = {};
  rgbaArrayToRGBAColor.__workletHash = 9717764015913;
  rgbaArrayToRGBAColor.__initData = closure_33;
  return rgbaArrayToRGBAColor;
}();

export const clampRGBA = tmp9;
export const ColorProperties = shareable;
export const normalizeColor = tmp11;
export const opacity = pnpm_ColorsTs10;
export const red = pnpm_ColorsTs11;
export const green = pnpm_ColorsTs12;
export const blue = pnpm_ColorsTs13;
export const rgbaColor = pnpm_ColorsTs14;
export const RGBtoHSV = tmp12;
export const hsvToColor = pnpm_ColorsTs17;
export const processColorInitially = tmp14;
export const isColor = tmp15;
export const processColor = tmp16;
export const processColorsInProps = tmp17;
export const convertToRGBA = tmp18;
export const rgbaArrayToRGBAColor = tmp19;
export const toLinearSpace = () => {
  function toLinearSpace(arg0) {
    let num = 2.2;
    if (arguments.length > 1) {
      num = 2.2;
      if (undefined !== arguments[1]) {
        num = arguments[1];
      }
    }
    const items = [];
    let num2 = 0;
    do {
      let _Math = Math;
      let arr = items.push(Math.pow(arg0[num2], num));
      num2 = num2 + 1;
    } while (num2 < 3);
    items.push(arg0[3]);
    return items;
  }
  toLinearSpace.__closure = {};
  toLinearSpace.__workletHash = 2672100143834;
  toLinearSpace.__initData = closure_34;
  return toLinearSpace;
}();
export const toGammaSpace = () => {
  function toGammaSpace(items) {
    let num = 2.2;
    if (arguments.length > 1) {
      num = 2.2;
      if (undefined !== arguments[1]) {
        num = arguments[1];
      }
    }
    items = [];
    let num2 = 0;
    do {
      let _Math = Math;
      let arr = items.push(Math.pow(items[num2], 1 / num));
      num2 = num2 + 1;
    } while (num2 < 3);
    items.push(items[3]);
    return items;
  }
  toGammaSpace.__closure = {};
  toGammaSpace.__workletHash = 1726439203743;
  toGammaSpace.__initData = closure_35;
  return toGammaSpace;
}();

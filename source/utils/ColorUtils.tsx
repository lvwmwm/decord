// Module ID: 3972
// Function ID: 32904
// Name: hexToRgb
// Dependencies: []
// Exports: findColorByHsv, getAccessibleForegroundColor, getColorLightnessAdjusted, getComplimentaryPaletteForColor, getSaturatedColorHex, hexOpacityToRgba, hexToColorName, hexToRgbArray, interpolateColor, mixColors, rgbToHex, rgbToHsl, rgbaToHex

// Module 3972 (hexToRgb)
function hexToRgb(PRIMARY_800) {
  let obj = importDefault(dependencyMap[1])(PRIMARY_800);
  const tmp = callback(obj.rgb(), 3);
  obj = { r: tmp[0], g: tmp[1], b: tmp[2] };
  return obj;
}
function hexToRgba(primaryColor) {
  let obj = importDefault(dependencyMap[1])(primaryColor);
  const tmp = callback(obj.rgba(), 4);
  obj = { r: tmp[0], g: tmp[1], b: tmp[2], a: tmp[3] };
  return obj;
}
function rgbToHslObject(arg0, arg1, arg2) {
  const result = arg0 / 255;
  let result1 = arg1 / 255;
  let num = arg2 / 255;
  const bound = Math.min(result, result1, num);
  const bound1 = Math.max(result, result1, num);
  const diff = bound1 - bound;
  if (0 === diff) {
    const _Math = Math;
    const rounded = Math.round(0);
    let sum = rounded;
    if (rounded < 0) {
      sum = rounded + 360;
    }
    const result2 = (bound1 + bound) / 2;
    const obj = { h: sum };
    let num7 = 0;
    if (!tmp6) {
      const _Math2 = Math;
      num7 = diff / (1 - Math.abs(2 * result2 - 1));
    }
    const result3 = 100 * num7;
    obj.s = +result3.toFixed(1);
    const result4 = 100 * result2;
    obj.l = +result4.toFixed(1);
    return obj;
  } else if (bound1 === result) {
    result1 = (result1 - num) / diff;
    num = 6;
    let result5 = result1 % 6;
  } else if (bound1 === result1) {
    result5 = (num - result) / diff + 2;
  } else {
    result5 = (result - result1) / diff + 4;
  }
}
function hslToString(h, s, l) {
  return "hsl(" + h + ", " + s + "%, " + l + "%)";
}
function hslToHex(arg0, arg1, arg2) {
  arg1 = arg0;
  let importDefault = arg2;
  const fn = function f(arg0) {
    const result = (arg0 + arg0 / 30) % 12;
    let str = Math.round(255 * (result - closure_2 * Math.max(Math.min(result - 3, 9 - result, 1), -1)));
    str = str.toString(16);
    return str.padStart(2, "0");
  };
  const result = arg2 / 100;
  importDefault = result;
  let closure_2 = arg1 * Math.min(result, 1 - result) / 100;
  const fnResult = fn(0);
  return "#" + fnResult + fn(8) + fn(4);
}
function hex2rgb2hsv(first4) {
  function diffc(result) {
    return (bound - result) / 6 / diff + 0.5;
  }
  function percentRoundFn(arg0) {
    return Math.round(100 * arg0) / 100;
  }
  let obj = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
  const match = obj.exec(first4);
  if (null == match) {
    return null;
  } else {
    const _parseInt = parseInt;
    const result = parseInt(match[1], 16) / 255;
    const _parseInt2 = parseInt;
    const result1 = parseInt(match[2], 16) / 255;
    const _parseInt3 = parseInt;
    const result2 = parseInt(match[3], 16) / 255;
    const _Math2 = Math;
    const bound = Math.max(result, result1, result2);
    const arg1 = bound;
    const _Math3 = Math;
    const diff = bound - Math.min(result, result1, result2);
    const importDefault = diff;
    let num5 = 0;
    let num4 = 0;
    if (0 !== diff) {
      const result3 = diff / bound;
      const diffcResult = diffc(result);
      const diffcResult1 = diffc(result1);
      const diffcResult2 = diffc(result2);
      if (result === bound) {
        let num = diffcResult2 - diffcResult1;
      } else if (result1 === bound) {
        num = 0.3333333333333333 + diffcResult - diffcResult2;
      } else {
        num = 0;
        if (result2 === bound) {
          num = 0.6666666666666666 + diffcResult1 - diffcResult;
        }
      }
      if (num < 0) {
        num5 = num + 1;
        num4 = result3;
      } else {
        num4 = result3;
        num5 = num;
        if (num > 1) {
          num5 = num - 1;
          num4 = result3;
        }
      }
    }
    obj = {};
    const _Math = Math;
    obj.h = Math.round(360 * num5);
    obj.s = percentRoundFn(100 * num4);
    obj.v = percentRoundFn(100 * bound);
    return obj;
  }
}
function hslToRgb(arg0, arg1, arg2) {
  return hexToRgb(hslToHex(arg0, arg1, arg2));
}
function rawRgbToHsl(red, blue, blue2) {
  const result = red / 255;
  const result1 = blue / 255;
  const result2 = blue2 / 255;
  const bound = Math.max(result, result1, result2);
  const bound1 = Math.min(result, result1, result2);
  const result3 = (bound + bound1) / 2;
  let num = 0;
  let num2 = 0;
  if (bound !== bound1) {
    const diff = bound - bound1;
    if (result3 > 0.5) {
      let result4 = diff / (2 - bound - bound1);
    } else {
      result4 = diff / (bound + bound1);
    }
    if (result === bound) {
      let num4 = 0;
      const result5 = (result1 - result2) / diff;
      if (result1 < result2) {
        num4 = 6;
      }
      let sum = result5 + num4;
    } else if (result1 === bound) {
      sum = (result2 - result) / diff + 2;
    } else if (result2 === bound) {
      sum = (result - result1) / diff + 4;
    }
    num = 0;
    num2 = result4;
    if (null != sum) {
      num = sum / 6;
      num2 = result4;
    }
  }
  const obj = { hue: 360 * num, saturation: num2, lightness: result3, alpha: 1 };
  return obj;
}
function rawHslToRgb(hue, saturation, lightness) {
  let sum = lightness;
  const result = hue / 360;
  if (0 === saturation) {
    let tmp12 = importDefault(dependencyMap[4]);
    const _Math = Math;
    const rounded = Math.round(255 * sum);
    const _Math2 = Math;
    const _Math3 = Math;
    const rounded1 = Math.round(255 * tmp3);
    const prototype = tmp12.prototype;
    tmp12 = new tmp12(rounded, rounded1, Math.round(255 * tmp4), 1);
    return tmp12;
  } else {
    function hue2rgb(diff, result1, result) {
      let sum = result;
      if (result < 0) {
        sum = result + 1;
      }
      diff = sum;
      if (sum > 1) {
        diff = sum - 1;
      }
      if (diff < 0.16666666666666666) {
        let sum1 = diff + 6 * (result1 - diff) * diff;
      } else {
        sum1 = result1;
        if (diff >= 0.5) {
          let sum2 = diff;
          if (diff < 0.6666666666666666) {
            sum2 = diff + (result1 - diff) * (0.6666666666666666 - diff) * 6;
          }
          sum1 = sum2;
        }
      }
      return sum1;
    }
    if (sum < 0.5) {
      let result1 = sum * (1 + saturation);
    } else {
      result1 = sum + saturation - sum * saturation;
    }
    const diff = 2 * sum - result1;
    sum = result + 0.3333333333333333;
    hue2rgb(diff, result1, sum);
    hue2rgb(diff, result1, result);
    hue2rgb(diff, result1, result - 0.3333333333333333);
  }
}
function sortColors(hsv, hsv2) {
  hsv = hsv.hsv;
  hsv2 = hsv2.hsv;
  return hsv2.s + hsv2.v - (hsv.s + hsv.v);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = { code: "function hexWithOpacity_ColorUtilsTsx1(color,value){if(color.length===7){const alpha=value*255|0;return color+alpha.toString(16).padStart(2,'0').toUpperCase();}const hex=color.charAt(0)==='#'?color.slice(1):color;let r;let g;let b;let a;switch(hex.length){case 3:r=hex.charAt(0);g=hex.charAt(1);b=hex.charAt(2);r+=r;g+=g;b+=b;a=(value*255|0).toString(16).padStart(2,'0').toUpperCase();return'#'+r+g+b+a;case 4:r=hex.charAt(0);g=hex.charAt(1);b=hex.charAt(2);a=hex.charAt(3);r+=r;g+=g;b+=b;a+=a;const alpha4=parseInt(a,16)/255*value;const alpha4Hex=(alpha4*255|0).toString(16).padStart(2,'0').toUpperCase();return'#'+r+g+b+alpha4Hex;case 6:const alpha6=(value*255|0).toString(16).padStart(2,'0').toUpperCase();return'#'+hex+alpha6;case 8:const baseColor='#'+hex.slice(0,6);const existingAlpha=parseInt(hex.slice(6),16)/255;const alpha8=(existingAlpha*value*255|0).toString(16).padStart(2,'0').toUpperCase();return baseColor+alpha8;default:throw new Error('Invalid hex color format');}}" };
let closure_5 = { code: "function hexToRgbaString_ColorUtilsTsx2(hex,opacity){const{hexToRgba}=this.__closure;const{r:r,g:g,b:b,a:a}=hexToRgba(hex);return\"rgba(\"+r+\", \"+g+\", \"+b+\", \"+(opacity!==null&&opacity!==void 0?opacity:a)+\")\";}" };
let obj = {};
obj = {
  () => {
    const intl = arg1(dependencyMap[2]).intl;
    return intl.string(arg1(dependencyMap[2]).t.fBawRj);
  },
  () => {
    const intl = arg1(dependencyMap[2]).intl;
    return intl.string(arg1(dependencyMap[2]).t.hvv3QR);
  },
  () => {
    const intl = arg1(dependencyMap[2]).intl;
    return intl.string(arg1(dependencyMap[2]).t.JwX6Jd);
  },
  () => {
    const intl = arg1(dependencyMap[2]).intl;
    return intl.string(arg1(dependencyMap[2]).t.H3xljj);
  },
  () => {
    const intl = arg1(dependencyMap[2]).intl;
    return intl.string(arg1(dependencyMap[2]).t.X9izyR);
  },
  () => {
    const intl = arg1(dependencyMap[2]).intl;
    return intl.string(arg1(dependencyMap[2]).t.Kw7K2z);
  },
  () => {
    const intl = arg1(dependencyMap[2]).intl;
    return intl.string(arg1(dependencyMap[2]).t.z5AZKW);
  },
  () => {
    const intl = arg1(dependencyMap[2]).intl;
    return intl.string(arg1(dependencyMap[2]).t.JqBqKz);
  },
  () => {
    const intl = arg1(dependencyMap[2]).intl;
    return intl.string(arg1(dependencyMap[2]).t.edPgnK);
  },
  () => {
    const intl = arg1(dependencyMap[2]).intl;
    return intl.string(arg1(dependencyMap[2]).t.ti7gsS);
  },
  () => {
    const intl = arg1(dependencyMap[2]).intl;
    return intl.string(arg1(dependencyMap[2]).t.H9jz+S);
  },
  () => {
    const intl = arg1(dependencyMap[2]).intl;
    return intl.string(arg1(dependencyMap[2]).t.UmsfHL);
  },
  () => {
    const intl = arg1(dependencyMap[2]).intl;
    return intl.string(arg1(dependencyMap[2]).t.GoDlAC);
  },
  () => {
    const intl = arg1(dependencyMap[2]).intl;
    return intl.string(arg1(dependencyMap[2]).t.9GpDYK);
  },
  () => {
    const intl = arg1(dependencyMap[2]).intl;
    return intl.string(arg1(dependencyMap[2]).t.lwrNQG);
  },
  () => {
    const intl = arg1(dependencyMap[2]).intl;
    return intl.string(arg1(dependencyMap[2]).t.Lf10GG);
  },
  () => {
    const intl = arg1(dependencyMap[2]).intl;
    return intl.string(arg1(dependencyMap[2]).t.H+AjY7);
  },
  () => {
    const intl = arg1(dependencyMap[2]).intl;
    return intl.string(arg1(dependencyMap[2]).t.XTkdex);
  },
  () => {
    const intl = arg1(dependencyMap[2]).intl;
    return intl.string(arg1(dependencyMap[2]).t.Ve0Lip);
  },
  () => {
    const intl = arg1(dependencyMap[2]).intl;
    return intl.string(arg1(dependencyMap[2]).t.BwbOAO);
  },
  () => {
    const intl = arg1(dependencyMap[2]).intl;
    return intl.string(arg1(dependencyMap[2]).t./po5rJ);
  }
};
const tmp2 = () => {
  function hexWithOpacity(BLACK, LEVEL_1) {
    if (7 === BLACK.length) {
      let str = 255 * LEVEL_1 | 0.toString(16);
      return BLACK + str.padStart(2, "0").toUpperCase();
    } else {
      let substr = BLACK;
      if ("#" === BLACK.charAt(0)) {
        substr = BLACK.slice(1);
      }
      if (3 === substr.length) {
        const charAtResult = substr.charAt(0);
        const charAtResult1 = substr.charAt(1);
        const charAtResult2 = substr.charAt(2);
        const sum = charAtResult + charAtResult;
        const sum1 = charAtResult1 + charAtResult1;
        const sum2 = charAtResult2 + charAtResult2;
        const str1 = 255 * LEVEL_1 | 0.toString(16);
        const str11 = 255 * LEVEL_1 | 0;
        return "#" + sum + sum1 + sum2 + 255 * LEVEL_1 | 0.toString(16).padStart(2, "0").toUpperCase();
      } else if (4 === length) {
        const charAtResult3 = substr.charAt(0);
        const charAtResult4 = substr.charAt(1);
        const charAtResult5 = substr.charAt(2);
        const charAtResult6 = substr.charAt(3);
        const _parseInt2 = parseInt;
        const sum3 = charAtResult3 + charAtResult3;
        const sum4 = charAtResult4 + charAtResult4;
        const sum5 = charAtResult5 + charAtResult5;
        let str2 = 255 * (parseInt(charAtResult6 + charAtResult6, 16) / 255 * LEVEL_1) | 0.toString(16);
        const str8 = 255 * (parseInt(charAtResult6 + charAtResult6, 16) / 255 * LEVEL_1) | 0;
        return "#" + sum3 + sum4 + sum5 + str2.padStart(2, "0").toUpperCase();
      } else if (6 === length) {
        const text = `#${arr}`;
        let str3 = 255 * LEVEL_1 | 0.toString(16);
        return `#${arr}` + str3.padStart(2, "0").toUpperCase();
      } else if (8 === length) {
        const _parseInt = parseInt;
        const text1 = `#${arr.slice(0, 6)}`;
        str2 = parseInt(substr.slice(6), 16) / 255 * LEVEL_1 * 255 | 0;
        let str4 = str2.toString(16);
        str3 = "0";
        str4 = str4.padStart(2, "0");
        return `#${arr.slice(0, 6)}` + str4.toUpperCase();
      } else {
        const _Error = Error;
        str = "Invalid hex color format";
        const error = new Error("Invalid hex color format");
        throw error;
      }
    }
  }
  hexWithOpacity.__closure = {};
  hexWithOpacity.__workletHash = 1677228068105;
  hexWithOpacity.__initData = closure_4;
  return hexWithOpacity;
}();
const merged = Object.assign(obj);
obj["#5865f2"] = () => {
  const intl = arg1(dependencyMap[2]).intl;
  return intl.string(arg1(dependencyMap[2]).t.Cn/LJ4);
};
const tmp3 = () => {
  function hexToRgbaString(colorHex, opacity) {
    let a;
    let b;
    let g;
    let r;
    ({ r, g, b, a } = callback(colorHex));
    if (null != opacity) {
      a = opacity;
    }
    return "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";
  }
  hexToRgbaString.__closure = { hexToRgba };
  hexToRgbaString.__workletHash = 8956046161224;
  hexToRgbaString.__initData = closure_5;
  return hexToRgbaString;
}();
const result = arg1(dependencyMap[5]).fileFinishedImporting("utils/ColorUtils.tsx");

export const hexWithOpacity = tmp2;
export { hexToRgb };
export const hexToRgbArray = function hexToRgbArray(PRIMARY_800) {
  const items = [, , ];
  ({ r: arr[0], g: arr[1], b: arr[2] } = hexToRgb(PRIMARY_800));
  return items;
};
export { hexToRgba };
export const hexToRgbaString = tmp3;
export const hexOpacityToRgba = function hexOpacityToRgba(backgroundColor, dividerOpacity) {
  const tmp = hexToRgb(backgroundColor);
  return "rgba(" + tmp.r + ", " + tmp.g + ", " + tmp.b + ", " + dividerOpacity + ")";
};
export { rgbToHslObject };
export { hslToString };
export const rgbToHsl = function rgbToHsl(arg0, arg1, arg2) {
  const tmp = rgbToHslObject(arg0, arg1, arg2);
  return hslToString(tmp.h, tmp.s, tmp.l);
};
export const rgbToHex = function rgbToHex(arg0, arg1, arg2) {
  let str = 16777216 + (arg0 << 16) + (arg1 << 8) + arg2;
  str = str.toString(16);
  return "#" + str.slice(1);
};
export const rgbaToHex = function rgbaToHex(arg0, arg1, arg2, arg3) {
  let str = 256 + arg0;
  str = str.toString(16);
  let str2 = 256 + arg1;
  const text = `#${arr.slice(1)}`;
  str2.toString(16);
  let str3 = 256 + arg2;
  const text1 = `#${arr.slice(1)}${arr2.slice(1)}`;
  str2 = str3.toString(16);
  const text2 = `#${arr.slice(1)}${arr2.slice(1)}${arr3.slice(1)}`;
  str3 = 256 + arg3.toString(16);
  return `#${arr.slice(1)}${arr2.slice(1)}${arr3.slice(1)}` + str3.slice(1);
};
export { hslToHex };
export const hexToColorName = function hexToColorName(color, arg1) {
  if (null == obj[color]) {
    if (arg1) {
      const intl = arg1(dependencyMap[2]).intl;
      const obj = { color };
      let str4 = intl.formatToPlainString(arg1(dependencyMap[2]).t.7BFCRR, obj);
    } else {
      let tmp5 = importDefault(dependencyMap[3]);
      const prototype = tmp5.prototype;
      tmp5 = new tmp5("ColorUtils");
      const _HermesInternal = HermesInternal;
      tmp5.warn("Role color " + color + " has not been localized!");
      str4 = "undefined";
    }
  } else {
    return tmp();
  }
};
export const mixColors = function mixColors(alpha, red) {
  alpha = alpha.alpha;
  const sum = (1 - alpha) * red.red + alpha * alpha.red;
  const sum1 = (1 - alpha) * red.green + alpha * alpha.green;
  const sum2 = (1 - alpha) * red.blue + alpha * alpha.blue;
  const sum3 = alpha.alpha + red.alpha * (1 - alpha.alpha);
  let tmp5 = importDefault(dependencyMap[4]);
  tmp5 = new tmp5(sum, sum1, sum2, sum3);
  return tmp5;
};
export { hex2rgb2hsv };
export const getComplimentaryPaletteForColor = function getComplimentaryPaletteForColor(items, arg1) {
  let h;
  let l;
  let s;
  let num = arg1;
  if (arg1 === undefined) {
    num = 3;
  }
  items = [];
  ({ h, s, l } = rgbToHslObject(items[0], items[1], items[2]));
  let sum = s;
  if (s < 30) {
    sum = s + 30;
  }
  let diff = l;
  if (l > 80) {
    diff = l - 40;
  }
  let sum1 = diff;
  if (diff < 20) {
    sum1 = diff + 15;
  }
  if (items.length < num) {
    do {
      let diff1 = h - 360 / (num + 1);
      let sum2 = diff1;
      if (diff1 < 0) {
        sum2 = diff1 + 360;
      }
      let tmp7 = closure_13;
      let tmp8 = closure_13(sum2, sum, sum1);
      let items1 = [, , ];
      ({ r: arr2[0], g: arr2[1], b: arr2[2] } = tmp8);
      let arr = items.push(items1);
      h = sum2;
    } while (items.length < num);
  }
  return items;
};
export { rawRgbToHsl };
export const getColorLightnessAdjusted = function getColorLightnessAdjusted(parseStringResult, arg1, arg2) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  const tmp = rawRgbToHsl(parseStringResult.red, parseStringResult.green, parseStringResult.blue);
  const lightness = tmp.lightness;
  if (flag) {
    let num3 = 0.9;
    if (lightness + arg1 <= 1) {
      num3 = tmp.lightness + arg1;
    }
    let num = num3;
  } else {
    num = 0.1;
    if (lightness - arg1 >= 0) {
      num = tmp.lightness - arg1;
    }
  }
  tmp.lightness = num;
  return rawHslToRgb(tmp.hue, tmp.saturation, tmp.lightness);
};
export const getAccessibleForegroundColor = function getAccessibleForegroundColor(saturationFactor) {
  let background;
  let foreground;
  let ratio;
  ({ foreground, background, ratio } = saturationFactor);
  if (ratio === undefined) {
    ratio = 5;
  }
  let num = saturationFactor.saturationFactor;
  if (num === undefined) {
    num = 1;
  }
  let result = foreground;
  let result1 = background;
  if (num < 1) {
    result = foreground.set("hsl.s", foreground.get("hsl.s") * num);
    result1 = background.set("hsl.s", background.get("hsl.s") * num);
  }
  const tmp2 = result1.luminance() <= 0.5;
  let obj3 = result;
  let num2 = 0;
  let obj4 = result;
  if (obj2.contrast(result, result1) < ratio) {
    while (true) {
      let value = obj3.get("hsl.l");
      let tmp4 = obj3;
      if (tmp2) {
        obj4 = obj3;
        if (value >= 0.95) {
          break;
        } else {
          let result2 = obj3.set("hsl.l", value + 0.05);
          let tmp6 = importDefault;
          let tmp7 = dependencyMap;
          let tmp8 = importDefault(dependencyMap[1]);
          num2 = num2 + 1;
          obj4 = result2;
          if (num2 >= 10) {
            break;
          } else {
            obj3 = result2;
            obj4 = result2;
            if (tmp9 >= ratio) {
              break;
            }
          }
        }
      } else {
        obj4 = obj3;
        if (value <= 0.05) {
          break;
        } else {
          result2 = obj3.set("hsl.l", value - 0.05);
        }
      }
      break;
    }
  }
  return obj4.alpha(1);
};
export const findColorByHsv = function findColorByHsv(colors) {
  const substr = colors.slice(0, 3);
  const mapped = substr.map((hex) => {
    let obj = { hex };
    obj = callback(hex);
    if (null == obj) {
      obj = { 1213267972: false, -1808113090: false, 1654752849: false };
    }
    obj.hsv = obj;
    return obj;
  });
  return mapped.sort(sortColors)[0].hex;
};
export const getSaturatedColorHex = function getSaturatedColorHex(arg0) {
  let colorRGB;
  let saturationFactor;
  ({ colorRGB, saturationFactor } = arg0);
  if (saturationFactor === undefined) {
    saturationFactor = 1;
  }
  if (null == colorRGB) {
    return colorRGB;
  } else {
    let value = colorRGB.get("rgb.r");
    value = colorRGB.get("rgb.g");
    const tmp7 = rawRgbToHsl(value, value, colorRGB.get("rgb.b"));
    if (null == tmp7) {
      let hexResult;
      if (null != colorRGB) {
        hexResult = colorRGB.hex();
      }
      let toHexStringResult = hexResult;
    } else {
      const obj = rawHslToRgb(tmp7.hue, tmp7.saturation * saturationFactor, tmp7.lightness);
      if (null != obj) {
        toHexStringResult = obj.toHexString();
      }
    }
    return toHexStringResult;
  }
};
export const interpolateColor = function interpolateColor(str, str2) {
  const parsed = parseInt(str.substring(1, 3), 16);
  const parsed1 = parseInt(str.substring(3, 5), 16);
  const parsed2 = parseInt(str.substring(5, 7), 16);
  const parsed3 = parseInt(str2.substring(1, 3), 16);
  const parsed4 = parseInt(str2.substring(3, 5), 16);
  const parsed5 = parseInt(str2.substring(5, 7), 16);
  str = Math.round(parsed + (parsed3 - parsed) * arg2);
  str = str.toString(16);
  str2 = Math.round(parsed1 + (parsed4 - parsed1) * arg2);
  const padStartResult = str.padStart(2, "0");
  const str1 = str2.toString(16);
  const padStartResult1 = str2.toString(16).padStart(2, "0");
  str2 = Math.round(parsed2 + (parsed5 - parsed2) * arg2).toString(16);
  return "#" + padStartResult + padStartResult1 + str2.padStart(2, "0");
};

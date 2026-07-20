// Module ID: 665
// Function ID: 8029
// Name: pad2
// Dependencies: []
// Exports: getContrast, getDarkness, hex2int, hex2rgb, hsv2int, int2hex, int2hsl, int2hslValues, int2hsv, int2rgba, isValidHex, rgb2int

// Module 665 (pad2)
function pad2(arg0) {
  let combined = arg0;
  if (1 === arg0.length) {
    const _HermesInternal = HermesInternal;
    combined = "0" + arg0;
  }
  return combined;
}
function int2hslRaw(initialColor) {
  const result = (initialColor >> 16 & 255) / 255;
  let result1 = (initialColor >> 8 & 255) / 255;
  let num = (255 & initialColor) / 255;
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
    obj.s = +num7.toFixed(3);
    obj.l = +result2.toFixed(3);
    return obj;
  } else if (bound1 === result) {
    result1 = (result1 - num) / diff;
    num = 6;
    let result3 = result1 % 6;
  } else if (bound1 === result1) {
    result3 = (num - result) / diff + 2;
  } else {
    result3 = (result - result1) / diff + 4;
  }
}
function int2rgbArray(modalV2BackgroundColor) {
  const items = [modalV2BackgroundColor >> 16 & 255, modalV2BackgroundColor >> 8 & 255, 255 & modalV2BackgroundColor];
  return items;
}
function getLuminance(arg0, arg1, arg2) {
  const items = [arg0, arg1, arg2];
  const mapped = items.map((arg0) => {
    const result = arg0 / 255;
    if (result <= 0.03928) {
      let result1 = result / 12.92;
    } else {
      const _Math = Math;
      result1 = Math.pow((result + 0.055) / 1.055, 2.4);
    }
    return result1;
  });
  return 0.2126 * mapped[0] + 0.7152 * mapped[1] + 0.0722 * mapped[2];
}
let closure_2 = /rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d*)?)\))?/;
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/shared/utils/ColorUtils.tsx");

export const hex2int = function hex2int(first) {
  return importDefault(dependencyMap[0])(first).num();
};
export const int2hex = function int2hex(color) {
  if (color <= 16777215) {
    const str5 = color >> 16 & 255;
    const str6 = color >> 8 & 255;
    const str7 = 255 & color;
    const tmp7 = pad2(color >> 16 & 255.toString(16));
    const _HermesInternal2 = HermesInternal;
    let combined = "#" + tmp7 + pad2(color >> 8 & 255.toString(16)) + pad2(str7.toString(16));
    const tmp8 = pad2(color >> 8 & 255.toString(16));
  } else {
    const str = color >> 24 & 255;
    const str2 = color >> 16 & 255;
    const str3 = color >> 8 & 255;
    const tmp2 = pad2(color >> 24 & 255.toString(16));
    const _HermesInternal = HermesInternal;
    combined = "#" + tmp2 + pad2(color >> 16 & 255.toString(16)) + pad2(str3.toString(16));
    const tmp3 = pad2(color >> 16 & 255.toString(16));
  }
  return combined;
};
export { int2hslRaw };
export const int2hslValues = function int2hslValues(initialColor) {
  let flag = arg1;
  let tmp = arg2;
  if (arg1 === undefined) {
    flag = false;
  }
  if (tmp === undefined) {
    tmp = null;
  }
  const tmp2 = int2hslRaw(initialColor);
  const h = tmp2.h;
  const result = 100 * tmp2.s;
  const tmp3 = +result.toFixed(1);
  const result1 = 100 * tmp2.l;
  const tmp4 = +result1.toFixed(1);
  if (flag) {
    const _HermesInternal3 = HermesInternal;
    let combined = "" + h + " calc(var(--saturation-factor, 1) * " + tmp3 + "%) " + tmp4 + "%";
  } else if (null != tmp) {
    const _HermesInternal2 = HermesInternal;
    combined = "" + h + " " + tmp * tmp3 + "% " + tmp4 + "%";
  } else {
    const _HermesInternal = HermesInternal;
    combined = "" + h + " " + tmp3 + "% " + tmp4 + "%";
  }
  return combined;
};
export const int2hsl = function int2hsl(accent_color, arg1) {
  let flag = arg1;
  let tmp = arg2;
  let num = arg3;
  if (arg1 === undefined) {
    flag = false;
  }
  if (tmp === undefined) {
    tmp = null;
  }
  if (num === undefined) {
    num = 1;
  }
  const tmp2 = int2hslRaw(accent_color);
  const h = tmp2.h;
  const result = 100 * tmp2.s;
  const tmp3 = +result.toFixed(1);
  const result1 = 100 * tmp2.l;
  const tmp4 = +result1.toFixed(1);
  if (flag) {
    const _HermesInternal3 = HermesInternal;
    let combined = "hsla(" + h + ", calc(var(--saturation-factor, 1) * " + tmp3 + "%), " + tmp4 + "%, " + num + ")";
  } else if (null != tmp) {
    const _HermesInternal2 = HermesInternal;
    combined = "hsla(" + h + ", " + tmp * tmp3 + "%, " + tmp4 + "%, " + num + ")";
  } else {
    const _HermesInternal = HermesInternal;
    combined = "hsla(" + h + ", " + tmp3 + "%, " + tmp4 + "%, " + num + ")";
  }
  return combined;
};
export const hex2rgb = function hex2rgb(PRIMARY_200, self) {
  let alphaResult = self;
  if (self === undefined) {
    alphaResult = null;
  }
  if (obj.valid(PRIMARY_200)) {
    const obj2 = importDefault(dependencyMap[0])(PRIMARY_200);
    if (null == alphaResult) {
      alphaResult = obj2.alpha();
    }
    return obj2.alpha(alphaResult).css();
  } else {
    return null;
  }
  const obj = importDefault(dependencyMap[0]);
};
export const int2rgba = function int2rgba(primaryColor, arg1) {
  let result = arg1;
  if (null == arg1) {
    result = (primaryColor >> 24 & 255) / 255;
  }
  return "rgba(" + primaryColor >> 16 & 255 + ", " + primaryColor >> 8 & 255 + ", " + 255 & primaryColor + ", " + result + ")";
};
export const rgb2int = function rgb2int(str) {
  const match = str.match(closure_2);
  if (null != match) {
    let obj = {};
    const _parseInt = parseInt;
    obj.red = parseInt(match[1]);
    const _parseInt2 = parseInt;
    obj.green = parseInt(match[2]);
    const _parseInt3 = parseInt;
    obj.blue = parseInt(match[3]);
  } else {
    obj = {};
  }
  return (obj.red << 16) + (obj.green << 8) + obj.blue;
};
export const int2hsv = function int2hsv(color) {
  let num = (color >> 16 & 255) / 255;
  const result = (color >> 8 & 255) / 255;
  const result1 = (255 & color) / 255;
  const bound = Math.max(num, result, result1);
  const bound1 = Math.min(num, result, result1);
  const diff = bound - bound1;
  let num2 = 0;
  if (0 !== bound) {
    num2 = diff / bound;
  }
  if (bound === bound1) {
    const obj = { h: 0, s: num2, v: bound };
    return obj;
  } else {
    if (num === bound) {
      let num5 = 0;
      const result2 = (result - result1) / diff;
      if (result < result1) {
        num5 = 6;
      }
      let sum = result2 + num5;
      num = 60;
      const result3 = sum * 60;
    } else if (result !== bound) {
      sum = bound;
      if (result1 === bound) {
        sum = (num - result) / diff + 4;
      }
    }
    sum = (result1 - num) / diff + 2;
  }
};
export const getDarkness = function getDarkness(hex2intResult) {
  return 1 - (0.299 * (hex2intResult >> 16 & 255) + 0.587 * (hex2intResult >> 8 & 255) + 0.114 * (255 & hex2intResult)) / 255;
};
export const isValidHex = function isValidHex(arg0) {
  return importDefault(dependencyMap[0]).valid(arg0);
};
export { int2rgbArray };
export { getLuminance };
export const getContrast = function getContrast(hex2intResult, hex2intResult1) {
  const tmp = int2rgbArray(hex2intResult);
  const tmp2 = int2rgbArray(hex2intResult1);
  const tmp3 = getLuminance(tmp[0], tmp[1], tmp[2]);
  const tmp4 = getLuminance(tmp2[0], tmp2[1], tmp2[2]);
  const sum = Math.max(tmp3, tmp4) + 0.05;
  return sum / (Math.min(tmp3, tmp4) + 0.05);
};
export const hsv2int = function hsv2int(value, value2, sharedValue2) {
  const result = 6 * (value / 360);
  const rounded = Math.floor(result);
  const diff = result - rounded;
  const result1 = sharedValue2 * (1 - value2);
  const result2 = sharedValue2 * (1 - diff * value2);
  const result3 = sharedValue2 * (1 - (1 - diff) * value2);
  const result4 = rounded % 6;
  if (0 === result4) {
    let num5 = sharedValue2;
    let num6 = result3;
    let num7 = result1;
  } else if (1 === result4) {
    num5 = result2;
    num6 = sharedValue2;
    num7 = result1;
  } else if (2 === result4) {
    num5 = result1;
    num6 = sharedValue2;
    num7 = result3;
  } else if (3 === result4) {
    num5 = result1;
    num6 = result2;
    num7 = sharedValue2;
  } else if (4 === result4) {
    num5 = result3;
    num6 = result1;
    num7 = sharedValue2;
  } else {
    num5 = 0;
    num6 = 0;
    num7 = 0;
    if (5 === result4) {
      num5 = sharedValue2;
      num6 = result1;
      num7 = result2;
    }
  }
  const tmp8 = Math.round(255 * num5) << 16;
  return tmp8 + (Math.round(255 * num6) << 8) + Math.round(255 * num7);
};

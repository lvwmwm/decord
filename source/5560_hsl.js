// Module ID: 5560
// Function ID: 47251
// Name: hsl
// Dependencies: []

// Module 5560 (hsl)
let channels;
let labels;
let closure_2 = require(dependencyMap[0]);
let obj = {};
const keys = Object.keys(require(dependencyMap[1]));
for (const item10022 of keys) {
  let tmp4 = obj;
  let tmp5 = arg1;
  let tmp6 = arg6;
  obj[tmp(tmp2[1])[item10022]] = item10022;
}
obj = { rgb: { manageChildren: "<string:134218113>", unpack: "<string:922747619>" }, hsl: { manageChildren: -527285915, unpack: 1359020034 }, hsv: { manageChildren: "flex-start", unpack: "center" }, hwb: {}, cmyk: { manageChildren: null, unpack: null }, xyz: {}, lab: {}, lch: { manageChildren: null, unpack: null }, hex: { channels: 1, labels: [true] }, keyword: { channels: 1, labels: ["u6708"] }, ansi16: { channels: 1, labels: [false] }, ansi256: { channels: 1, labels: [] }, hcg: { channels: 3, labels: [] }, apple: { channels: 3, labels: ["isArray", "isStreamMarkedFull", "isArray"] }, gray: { channels: 1, labels: [0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009532402967] } };
const keys1 = Object.keys(obj);
const iter = keys1[Symbol.iterator]();
const nextResult = iter.next();
while (iter !== undefined) {
  let tmp35 = nextResult;
  let tmp36 = obj;
  if ("channels" in tmp7[nextResult]) {
    let tmp15 = obj;
    let tmp16 = nextResult;
    if ("labels" in tmp7[tmp35]) {
      let tmp22 = obj;
      let tmp23 = nextResult;
      if (tmp7[tmp35].labels.length !== tmp7[tmp35].channels) {
        let _Error3 = Error;
        let tmp30 = nextResult;
        let str3 = "channel and label counts mismatch: ";
        let tmp31 = new.target;
        let tmp32 = new.target;
        let error = new Error("channel and label counts mismatch: " + tmp35);
        let tmp34 = error;
        throw error;
      } else {
        let tmp24 = obj;
        let tmp25 = nextResult;
        let tmp26 = tmp7[tmp35];
        ({ channels, labels } = tmp7[tmp35]);
        delete r11.channels;
        let tmp27 = tmp7[tmp35];
        delete r11.labels;
        let _Object = Object;
        obj = { value: channels };
        let definePropertyResult = Object.defineProperty(tmp7[tmp35], "channels", obj);
        let _Object2 = Object;
        let obj1 = { value: labels };
        let definePropertyResult1 = Object.defineProperty(tmp7[tmp35], "labels", obj1);
        // continue
      }
    } else {
      let _Error2 = Error;
      let tmp17 = nextResult;
      let str2 = "missing channel labels property: ";
      let tmp18 = new.target;
      let tmp19 = new.target;
      let error1 = new Error("missing channel labels property: " + tmp35);
      let tmp21 = error1;
      throw error1;
    }
  } else {
    let _Error = Error;
    let tmp10 = nextResult;
    let str = "missing channels property: ";
    let tmp11 = new.target;
    let tmp12 = new.target;
    let error2 = new Error("missing channels property: " + tmp35);
    let tmp14 = error2;
    throw error2;
  }
}
obj.rgb.hsl = (arg0) => {
  const result = arg0[0] / 255;
  const result1 = arg0[1] / 255;
  const result2 = arg0[2] / 255;
  const bound = Math.min(result, result1, result2);
  let bound1 = Math.max(result, result1, result2);
  const diff = bound1 - bound;
  let num = 0;
  if (bound1 !== bound) {
    if (result === bound1) {
      num = (result1 - result2) / diff;
    } else if (result1 === bound1) {
      num = 2 + (result2 - result) / diff;
    } else if (result2 === bound1) {
      num = 4 + (result - result1) / diff;
    }
  }
  const bound2 = Math.min(60 * num, 360);
  let sum = bound2;
  if (bound2 < 0) {
    sum = bound2 + 360;
  }
  const result3 = (bound + bound1) / 2;
  const items = [sum, , ];
  if (bound1 === bound) {
    items[1] = 0;
    items[2] = 100 * result3;
    return items;
  } else if (result3 <= 0.5) {
    bound1 = bound1 + bound;
    let result4 = diff / bound1;
  } else {
    result4 = diff / (2 - bound1 - bound);
  }
};
obj.rgb.hsv = (arg0) => {
  const result = arg0[0] / 255;
  const result1 = arg0[1] / 255;
  const result2 = arg0[2] / 255;
  const bound = Math.max(result, result1, result2);
  const require = bound;
  const diff = bound - Math.min(result, result1, result2);
  const dependencyMap = diff;
  function diffc(result) {
    return (bound - result) / 6 / diff + 0.5;
  }
  let num = 0;
  let num2 = 0;
  if (0 !== diff) {
    const result3 = diff / bound;
    const diffcResult = diffc(result);
    const diffcResult1 = diffc(result1);
    const diffcResult2 = diffc(result2);
    if (result === bound) {
      let diff1 = diffcResult2 - diffcResult1;
    } else if (result1 === bound) {
      diff1 = 0.3333333333333333 + diffcResult - diffcResult2;
    } else if (result2 === bound) {
      diff1 = 0.6666666666666666 + diffcResult1 - diffcResult;
    }
    if (diff1 < 0) {
      num = diff1 + 1;
      num2 = result3;
    } else {
      num2 = result3;
      num = diff1;
      if (diff1 > 1) {
        num = diff1 - 1;
        num2 = result3;
      }
    }
  }
  const items = [360 * num, 100 * num2, 100 * bound];
  return items;
};
obj.rgb.hwb = (sharedValue) => {
  const first = sharedValue[0];
  const rgb = obj.rgb;
  const items = [rgb.hsl(sharedValue)[0], 100 * (0.00392156862745098 * Math.min(first, Math.min(sharedValue[1], sharedValue[2]))), 100 * (1 - 0.00392156862745098 * Math.max(first, Math.max(sharedValue[1], sharedValue[2])))];
  return items;
};
obj.rgb.cmyk = (arg0) => {
  const diff = 1 - arg0[0] / 255;
  const diff1 = 1 - arg0[1] / 255;
  const diff2 = 1 - arg0[2] / 255;
  const bound = Math.min(diff, diff1, diff2);
  const items = [100 * ((diff - bound) / (1 - bound) || 0), 100 * ((diff1 - bound) / (1 - bound) || 0), 100 * ((diff2 - bound) / (1 - bound) || 0), 100 * bound];
  return items;
};
obj.rgb.keyword = (arg0) => {
  let tmp2;
  if (obj[arg0]) {
    return tmp3;
  } else {
    let num = Infinity;
    const _Object = Object;
    const keys = Object.keys(require(dependencyMap[1]));
    const iter = keys[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp11 = nextResult;
      let tmp12 = require;
      let tmp13 = dependencyMap;
      let tmp14 = require(dependencyMap[1])[nextResult];
      let tmp15 = arg0;
      let num5 = 2;
      let sum = (tmp[0] - tmp14[0]) ** 2 + (tmp[1] - tmp14[1]) ** 2 + (tmp[2] - tmp14[2]) ** 2;
      let tmp17 = sum;
      let tmp18 = num;
      if (sum < num) {
        num = sum;
        tmp2 = nextResult;
      }
      // continue
    }
    return tmp2;
  }
};
obj.keyword.rgb = (arg0) => require(dependencyMap[1])[arg0];
obj.rgb.xyz = (arg0) => {
  const result = arg0[0] / 255;
  const result1 = arg0[1] / 255;
  const result2 = arg0[2] / 255;
  if (result > 0.04045) {
    let result3 = ((result + 0.055) / 1.055) ** 2.4;
  } else {
    result3 = result / 12.92;
  }
  const result4 = 0.4124 * result3;
  if (result1 > 0.04045) {
    let result5 = ((result1 + 0.055) / 1.055) ** 2.4;
  } else {
    result5 = result1 / 12.92;
  }
  const result6 = 0.3576 * result5;
  if (result2 > 0.04045) {
    let result7 = ((result2 + 0.055) / 1.055) ** 2.4;
  } else {
    result7 = result2 / 12.92;
  }
  const items = [100 * (result4 + result6 + 0.1805 * result7), 100 * (0.2126 * result3 + 0.7152 * result5 + 0.0722 * result7), 100 * (0.0193 * result3 + 0.1192 * result5 + 0.9505 * result7)];
  return items;
};
obj.rgb.lab = (arg0) => {
  const rgb = obj.rgb;
  const xyzResult = rgb.xyz(arg0);
  const result = xyzResult[1] / 100;
  if (result > 0.008856) {
    let sum = result ** 0.3333333333333333;
  } else {
    sum = 7.787 * result + 0.13793103448275862;
  }
  const items = [116 * sum - 16, , ];
  const result1 = xyzResult[0] / 95.047;
  if (result1 > 0.008856) {
    let sum1 = result1 ** 0.3333333333333333;
  } else {
    sum1 = 7.787 * result1 + 0.13793103448275862;
  }
  items[1] = 500 * (sum1 - sum);
  const result2 = xyzResult[2] / 108.883;
  if (result2 > 0.008856) {
    let sum2 = result2 ** 0.3333333333333333;
  } else {
    sum2 = 7.787 * result2 + 0.13793103448275862;
  }
  items[2] = 200 * (sum - sum2);
  return items;
};
obj.hsl.rgb = (arg0) => {
  let result = arg0[1] / 100;
  const result1 = arg0[2] / 100;
  if (0 === result) {
    const result2 = 255 * result1;
    const items = [result2, result2, result2];
    return items;
  } else {
    if (result1 < 0.5) {
      let result3 = result1 * (1 + result);
    } else {
      result3 = result1 + result - result1 * result;
    }
    result = [];
    const result4 = 6 * (result3 - (2 * result1 - result3));
  }
};
obj.hsl.hsv = (arg0) => {
  const result = arg0[1] / 100;
  const result1 = arg0[2] / 100;
  const bound = Math.max(result1, 0.01);
  const result2 = result1 * 2;
  let diff = result2;
  if (result2 > 1) {
    diff = 2 - result2;
  }
  const result3 = result * diff;
  let diff1 = bound;
  if (bound > 1) {
    diff1 = 2 - bound;
  }
  const result4 = result * diff1;
  const items = [arg0[0], , ];
  if (0 === result2) {
    let result5 = 2 * result4 / (bound + result4);
  } else {
    result5 = 2 * result3 / (result2 + result3);
  }
  items[1] = 100 * result5;
  items[2] = 100 * ((result2 + result3) / 2);
  return items;
};
obj.hsv.rgb = (arg0) => {
  const result = arg0[0] / 60;
  const result1 = arg0[1] / 100;
  const result2 = arg0[2] / 100;
  const result3 = Math.floor(result) % 6;
  const diff = result - Math.floor(result);
  const result4 = 255 * result2;
  const result5 = result4 * (1 - result1);
  const result6 = result4 * (1 - result1 * diff);
  const result7 = result4 * (1 - result1 * (1 - diff));
  const result8 = result2 * 255;
  if (0 === result3) {
    const items = [result8, result7, result5];
    return items;
  } else if (1 === result3) {
    const items1 = [result6, result8, result5];
    return items1;
  } else if (2 === result3) {
    const items2 = [result5, result8, result7];
    return items2;
  } else if (3 === result3) {
    const items3 = [result5, result6, result8];
    return items3;
  } else if (4 === result3) {
    const items4 = [result7, result5, result8];
    return items4;
  } else if (5 === result3) {
    const items5 = [result8, result5, result6];
    return items5;
  }
};
obj.hsv.hsl = (arg0) => {
  const result = arg0[1] / 100;
  const result1 = arg0[2] / 100;
  const bound = Math.max(result1, 0.01);
  const diff = 2 - result;
  const result2 = diff * bound;
  const items = [arg0[0], , ];
  let diff1 = result2;
  const result3 = result * bound;
  if (result2 > 1) {
    diff1 = 2 - result2;
  }
  items[1] = 100 * (result3 / diff1 || 0);
  items[2] = 100 * (diff * result1 / 2);
  return items;
};
obj.hwb.rgb = (arg0) => {
  const result = arg0[1] / 100;
  const result1 = arg0[2] / 100;
  const sum = result + result1;
  let result3 = result;
  let result4 = result1;
  const result2 = arg0[0] / 360;
  if (sum > 1) {
    result3 = result / sum;
    result4 = result1 / sum;
  }
  const result5 = 6 * result2;
  const rounded = Math.floor(result5);
  const diff = 1 - result4;
  const diff1 = result5 - rounded;
  let diff2 = diff1;
  if (1 & rounded) {
    diff2 = 1 - diff1;
  }
  const sum1 = result3 + diff2 * (diff - result3);
  let tmp13 = diff;
  let tmp14 = sum1;
  let tmp15 = result3;
  if (6 !== rounded) {
    tmp13 = diff;
    tmp14 = sum1;
    tmp15 = result3;
    if (0 !== rounded) {
      if (1 === rounded) {
        tmp13 = sum1;
        tmp14 = diff;
        tmp15 = result3;
      } else if (2 === rounded) {
        tmp13 = result3;
        tmp14 = diff;
        tmp15 = sum1;
      } else if (3 === rounded) {
        tmp13 = result3;
        tmp14 = sum1;
        tmp15 = diff;
      } else if (4 === rounded) {
        tmp13 = sum1;
        tmp14 = result3;
        tmp15 = diff;
      } else {
        tmp13 = diff;
        tmp14 = sum1;
        tmp15 = result3;
        if (5 === rounded) {
          tmp13 = diff;
          tmp14 = result3;
          tmp15 = sum1;
        }
      }
    }
  }
  const items = [255 * tmp13, 255 * tmp14, 255 * tmp15];
  return items;
};
obj.cmyk.rgb = (arg0) => {
  const result = arg0[3] / 100;
  const diff = 1 - result;
  const result1 = arg0[1] / 100;
  const result2 = arg0[2] / 100;
  const items = [255 * (1 - Math.min(1, arg0[0] / 100 * diff + result)), 255 * (1 - Math.min(1, result1 * diff + result)), 255 * (1 - Math.min(1, result2 * diff + result))];
  return items;
};
obj.xyz.rgb = (arg0) => {
  const result = arg0[0] / 100;
  const result1 = arg0[1] / 100;
  const result2 = arg0[2] / 100;
  const sum = 3.2406 * result + -1.5372 * result1 + -0.4986 * result2;
  if (sum > 0.0031308) {
    let diff = 1.055 * sum ** 0.4166666666666667 - 0.055;
  } else {
    diff = 12.92 * sum;
  }
  const sum1 = -0.9689 * result + 1.8758 * result1 + 0.0415 * result2;
  if (sum1 > 0.0031308) {
    let diff1 = 1.055 * sum1 ** 0.4166666666666667 - 0.055;
  } else {
    diff1 = 12.92 * sum1;
  }
  const sum2 = 0.0557 * result + -0.204 * result1 + 1.057 * result2;
  if (sum2 > 0.0031308) {
    let diff2 = 1.055 * sum2 ** 0.4166666666666667 - 0.055;
  } else {
    diff2 = 12.92 * sum2;
  }
  const items = [255 * Math.min(Math.max(0, diff), 1), 255 * Math.min(Math.max(0, diff1), 1), 255 * Math.min(Math.max(0, diff2), 1)];
  return items;
};
obj.xyz.lab = (arg0) => {
  const result = arg0[1] / 100;
  if (result > 0.008856) {
    let sum = result ** 0.3333333333333333;
  } else {
    sum = 7.787 * result + 0.13793103448275862;
  }
  const items = [116 * sum - 16, , ];
  const result1 = arg0[0] / 95.047;
  if (result1 > 0.008856) {
    let sum1 = result1 ** 0.3333333333333333;
  } else {
    sum1 = 7.787 * result1 + 0.13793103448275862;
  }
  items[1] = 500 * (sum1 - sum);
  const result2 = arg0[2] / 108.883;
  if (result2 > 0.008856) {
    let sum2 = result2 ** 0.3333333333333333;
  } else {
    sum2 = 7.787 * result2 + 0.13793103448275862;
  }
  items[2] = 200 * (sum - sum2);
  return items;
};
obj.lab.xyz = (arg0) => {
  const result = (arg0[0] + 16) / 116;
  let result1 = result ** 3;
  const sum = arg0[1] / 500 + result;
  let result2 = sum ** 3;
  const diff = result - arg0[2] / 200;
  let result3 = diff ** 3;
  if (result1 <= 0.008856) {
    result1 = (result - 0.13793103448275862) / 7.787;
  }
  if (result2 <= 0.008856) {
    result2 = (sum - 0.13793103448275862) / 7.787;
  }
  if (result3 <= 0.008856) {
    result3 = (diff - 0.13793103448275862) / 7.787;
  }
  const items = [result2 * 95.047, result1 * 100, result3 * 108.883];
  return items;
};
obj.lab.lch = (result2) => {
  const result = 360 * Math.atan2(tmp2, tmp) / 2 / Math.PI;
  let sum = result;
  if (result < 0) {
    sum = result + 360;
  }
  const items = [result2[0], Math.sqrt(result2[1] * result2[1] + result2[2] * result2[2]), sum];
  return items;
};
obj.lch.lab = (arg0) => {
  const result = arg0[2] / 360 * 2 * Math.PI;
  const items = [arg0[0], arg0[1] * Math.cos(result), arg0[1] * Math.sin(result)];
  return items;
};
obj.rgb.ansi16 = (value) => {
  let tmp3;
  let tmp4;
  let tmp5;
  let tmp = null;
  if (arguments.length > 1) {
    tmp = null;
    if (undefined !== arguments[1]) {
      tmp = arguments[1];
    }
  }
  [tmp3, tmp4, tmp5] = callback(value, 3);
  if (null === tmp) {
    const rgb = obj.rgb;
    tmp = rgb.hsv(value)[2];
  }
  const rounded = Math.round(tmp / 50);
  if (0 === rounded) {
    return 30;
  } else {
    const _Math = Math;
    const _Math2 = Math;
    const _Math3 = Math;
    const tmp8 = Math.round(tmp5 / 255) << 2;
    const sum = 30 + (tmp8 | Math.round(tmp4 / 255) << 1 | Math.round(tmp3 / 255));
    let sum1 = sum;
    if (2 === rounded) {
      sum1 = sum + 60;
    }
    return sum1;
  }
  const tmp2 = callback(value, 3);
};
obj.hsv.ansi16 = (red) => {
  const rgb = obj.rgb;
  const hsv = obj.hsv;
  return rgb.ansi16(hsv.rgb(red), red[2]);
};
obj.rgb.ansi256 = (arg0) => {
  const first = arg0[0];
  if (first === arg0[1]) {
    if (tmp2 === tmp3) {
      let num2 = 16;
      if (first >= 8) {
        let num4 = 231;
        if (first <= 248) {
          const _Math = Math;
          num4 = Math.round((first - 8) / 247 * 24) + 232;
        }
        num2 = num4;
      }
      let sum = num2;
    }
    return sum;
  }
  const result = 36 * Math.round(first / 255 * 5);
  const result1 = 6 * Math.round(tmp2 / 255 * 5);
  sum = 16 + result + result1 + Math.round(tmp3 / 255 * 5);
};
obj.ansi16.rgb = (arg0) => {
  const result = arg0 % 10;
  if (0 !== result) {
    if (7 !== result) {
      const result1 = 0.5 * (1 + ~~arg0 > 50);
      const items = [(1 & result) * result1 * 255, (result >> 1 & 1) * result1 * 255, (result >> 2 & 1) * result1 * 255];
      return items;
    }
  }
  let sum = result;
  if (arg0 > 50) {
    sum = result + 3.5;
  }
  const result2 = sum / 10.5 * 255;
  const items1 = [result2, result2, result2];
  return items1;
};
obj.ansi256.rgb = (arg0) => {
  if (arg0 >= 232) {
    const sum = 10 * (arg0 - 232) + 8;
    const items = [sum, sum, sum];
    return items;
  } else {
    const diff = arg0 - 16;
    const _Math = Math;
    const items1 = [Math.floor(diff / 36) / 5 * 255, , ];
    const _Math2 = Math;
    const result = diff % 36;
    items1[1] = Math.floor(result / 6) / 5 * 255;
    items1[2] = result % 6 / 5 * 255;
    return items1;
  }
};
obj.rgb.hex = (arg0) => {
  const tmp = 255 & Math.round(arg0[0]);
  const tmp2 = 255 & Math.round(arg0[1]);
  const str = (tmp << 16) + ((255 & Math.round(arg0[1])) << 8) + (255 & Math.round(arg0[2]));
  const formatted = (tmp << 16) + ((255 & Math.round(arg0[1])) << 8) + (255 & Math.round(arg0[2])).toString(16).toUpperCase();
  return "000000".substring(formatted.length) + formatted;
};
obj.hex.rgb = (arg0) => {
  const match = arg0.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
  if (match) {
    let joined = str2;
    if (3 === match[0].length) {
      const parts = str2.split("");
      const mapped = parts.map((arg0) => arg0 + arg0);
      joined = mapped.join("");
    }
    const _parseInt = parseInt;
    const parsed = parseInt(joined, 16);
    const items = [parsed >> 16 & 255, parsed >> 8 & 255, 255 & parsed];
    return items;
  } else {
    return [];
  }
  const str = arg0.toString(16);
};
obj.rgb.hcg = (arg0) => {
  const result = arg0[0] / 255;
  let result1 = arg0[1] / 255;
  let num = arg0[2] / 255;
  const bound = Math.max(Math.max(result, result1), num);
  const bound1 = Math.min(Math.min(result, result1), num);
  const diff = bound - bound1;
  if (diff <= 0) {
    const items = [0, 100 * diff, ];
    let num6 = 0;
    if (diff < 1) {
      num6 = bound1 / (1 - diff);
    }
    items[2] = 100 * num6;
    return items;
  } else if (bound === result) {
    result1 = (result1 - num) / diff;
    num = 6;
    let result2 = result1 % 6;
  } else if (bound === result1) {
    result2 = 2 + (num - result) / diff;
  } else {
    result2 = 4 + (result - result1) / diff;
  }
};
obj.hsl.hcg = (arg0) => {
  const result = arg0[1] / 100;
  const result1 = arg0[2] / 100;
  if (result1 < 0.5) {
    let result2 = 2 * result * result1;
  } else {
    result2 = 2 * result * (1 - result1);
  }
  let num = 0;
  if (result2 < 1) {
    num = (result1 - 0.5 * result2) / (1 - result2);
  }
  const items = [arg0[0], 100 * result2, 100 * num];
  return items;
};
obj.hsv.hcg = (arg0) => {
  const result = arg0[2] / 100;
  const result1 = arg0[1] / 100 * result;
  let num = 0;
  if (result1 < 1) {
    num = (result - result1) / (1 - result1);
  }
  const items = [arg0[0], 100 * result1, 100 * num];
  return items;
};
obj.hcg.rgb = (arg0) => {
  const result = arg0[1] / 100;
  const result1 = arg0[2] / 100;
  if (0 === result) {
    const result2 = 255 * result1;
    const items = [result2, result2, result2];
    return items;
  } else {
    const items1 = [];
    const result3 = tmp % 1 * 6;
    const result4 = result3 % 1;
    const diff = 1 - result4;
    const _Math = Math;
    const rounded = Math.floor(result3);
    if (0 === rounded) {
      items1[0] = 1;
      items1[1] = result4;
      items1[2] = 0;
    } else if (1 === rounded) {
      items1[0] = diff;
      items1[1] = 1;
      items1[2] = 0;
    } else if (2 === rounded) {
      items1[0] = 0;
      items1[1] = 1;
      items1[2] = result4;
    } else if (3 === rounded) {
      items1[0] = 0;
      items1[1] = diff;
      items1[2] = 1;
    } else if (4 === rounded) {
      items1[0] = result4;
      items1[1] = 0;
      items1[2] = 1;
    } else {
      items1[0] = 1;
      items1[1] = 0;
      items1[2] = diff;
    }
    const result5 = (1 - result) * result1;
    const items2 = [255 * (result * items1[0] + result5), 255 * (result * items1[1] + result5), 255 * (result * items1[2] + result5)];
    return items2;
  }
};
obj.hcg.hsv = (arg0) => {
  const result = arg0[1] / 100;
  const sum = result + arg0[2] / 100 * (1 - result);
  let num = 0;
  if (sum > 0) {
    num = result / sum;
  }
  const items = [arg0[0], 100 * num, 100 * sum];
  return items;
};
obj.hcg.hsl = (arg0) => {
  const result = arg0[1] / 100;
  const sum = arg0[2] / 100 * (1 - result) + 0.5 * result;
  if (sum > 0) {
    if (sum < 0.5) {
      let num = result / (2 * sum);
    }
    const items = [arg0[0], 100 * num, 100 * sum];
    return items;
  }
  num = 0;
  if (tmp3) {
    num = result / (2 * (1 - sum));
  }
};
obj.hcg.hwb = (arg0) => {
  const result = arg0[1] / 100;
  const sum = result + arg0[2] / 100 * (1 - result);
  const items = [arg0[0], 100 * (sum - result), 100 * (1 - sum)];
  return items;
};
obj.hwb.hcg = (arg0) => {
  const diff = 1 - arg0[2] / 100;
  const diff1 = diff - arg0[1] / 100;
  let num = 0;
  if (diff1 < 1) {
    num = (diff - diff1) / (1 - diff1);
  }
  const items = [arg0[0], 100 * diff1, 100 * num];
  return items;
};
obj.apple.rgb = (arg0) => {
  const items = [arg0[0] / 65535 * 255, arg0[1] / 65535 * 255, arg0[2] / 65535 * 255];
  return items;
};
obj.rgb.apple = (arg0) => {
  const items = [arg0[0] / 255 * 65535, arg0[1] / 255 * 65535, arg0[2] / 255 * 65535];
  return items;
};
obj.gray.rgb = (arg0) => {
  const items = [arg0[0] / 100 * 255, arg0[0] / 100 * 255, arg0[0] / 100 * 255];
  return items;
};
obj.gray.hsl = (arg0) => {
  const items = ["placeholder", "aria-label", arg0[0]];
  return items;
};
obj.gray.hsv = obj.gray.hsl;
obj.gray.hwb = (arg0) => {
  const items = [, , arg0[0]];
  return items;
};
obj.gray.cmyk = (arg0) => {
  const items = [, , , arg0[0]];
  return items;
};
obj.gray.lab = (arg0) => {
  const items = [arg0[0], 0, 0];
  return items;
};
obj.gray.hex = (arg0) => {
  const tmp = 255 & Math.round(arg0[0] / 100 * 255);
  const formatted = (tmp << 16) + (tmp << 8) + tmp.toString(16).toUpperCase();
  return "000000".substring(formatted.length) + formatted;
};
obj.rgb.gray = (arg0) => {
  const items = [(arg0[0] + arg0[1] + arg0[2]) / 3 / 255 * 100];
  return items;
};

export default obj;

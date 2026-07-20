// Module ID: 5562
// Function ID: 47246
// Name: clamp
// Dependencies: []

// Module 5562 (clamp)
function clamp(arg0, arg1, arg2) {
  return Math.min(Math.max(arg1, arg0), arg2);
}
function hexDouble(arg0) {
  const str = Math.round(arg0);
  const formatted = Math.round(arg0).toString(16).toUpperCase();
  let text = formatted;
  if (formatted.length < 2) {
    text = `0${arr}`;
  }
  return text;
}
let obj = Object.create(null);
for (const key10016 in arg1(arg6[0])) {
  let tmp2 = key10016;
  if (!hasOwnProperty.call(arg1(arg6[0]), key10016)) {
    continue;
  } else {
    obj[arg1(arg6[0])[key10016]] = key10016;
    // continue
  }
  continue;
}
obj = { to: {}, get: {} };
obj.get = (red) => {
  const formatted = red.substring(0, 3).toLowerCase();
  if ("hsl" === formatted) {
    const get3 = obj.get;
    let hslResult = get3.hsl(red);
    let str3 = "hsl";
  } else if ("hwb" === formatted) {
    const get2 = obj.get;
    hslResult = get2.hwb(red);
    str3 = "hwb";
  } else {
    const get = obj.get;
    hslResult = get.rgb(red);
    str3 = "rgb";
  }
  let tmp6 = null;
  if (hslResult) {
    const obj = { model: str3, value: hslResult };
    tmp6 = obj;
  }
  return tmp6;
};
obj.get.rgb = (str) => {
  if (str) {
    const items = [];
    const match = str.match(/^#([a-f0-9]{6})([a-f0-9]{2})?$/i);
    if (match) {
      let num23 = 0;
      do {
        let result = 2 * num23;
        let _parseInt4 = parseInt;
        items[num23] = parseInt(arr2.slice(result, result + 2), 16);
        num23 = num23 + 1;
      } while (num23 < 3);
      let num8 = 0;
      if (match[2]) {
        const _parseInt5 = parseInt;
        items[3] = parseInt(tmp22, 16) / 255;
        num8 = 0;
      }
      const arr2 = match[1];
    } else {
      const match1 = str.match(/^#([a-f0-9]{3,4})$/i);
      if (match1) {
        let num17 = 0;
        do {
          let _parseInt2 = parseInt;
          items[num17] = parseInt(tmp19[num17] + tmp19[num17], 16);
          num17 = num17 + 1;
        } while (num17 < 3);
        num8 = 0;
        if (match1[1][3]) {
          const _parseInt3 = parseInt;
          items[3] = parseInt(tmp20 + tmp20, 16) / 255;
          num8 = 0;
        }
      } else {
        const match2 = str.match(/^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/);
        let num4 = 0;
        if (match2) {
          do {
            let _parseInt = parseInt;
            items[num4] = parseInt(match2[num4 + 1], 0);
            num4 = num4 + 1;
          } while (num4 < 3);
          num8 = 0;
          if (match2[4]) {
            const _parseFloat3 = parseFloat;
            const parsed = parseFloat(match2[4]);
            if (match2[5]) {
              items[3] = 0.01 * parsed;
              num8 = 0;
            } else {
              items[3] = parsed;
              num8 = 0;
            }
          }
        } else {
          const match3 = str.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/);
          let num6 = 0;
          if (match3) {
            do {
              let _Math = Math;
              let _parseFloat = parseFloat;
              items[num6] = Math.round(2.55 * parseFloat(match3[num6 + 1]));
              num6 = num6 + 1;
            } while (num6 < 3);
            num8 = 0;
            if (match3[4]) {
              const _parseFloat2 = parseFloat;
              const parsed1 = parseFloat(match3[4]);
              if (match3[5]) {
                items[3] = 0.01 * parsed1;
                num8 = 0;
              } else {
                items[3] = parsed1;
                num8 = 0;
              }
            }
          } else {
            const match4 = str.match(/^(\w+)$/);
            if (!match4) {
              return null;
            } else if ("transparent" === match4[1]) {
              let items1 = [0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000670761371396322, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010172573469115192, -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004284725832286712, 0.0000000000000000000001340156606886895];
            } else {
              items1 = null;
              if (hasOwnProperty.call(require(dependencyMap[0]), match4[1])) {
                const tmp15 = require(dependencyMap[0])[match4[1]];
                tmp15[3] = 1;
                items1 = tmp15;
              }
            }
          }
        }
      }
    }
    do {
      let tmp25 = closure_5;
      let num25 = 0;
      let num26 = 255;
      items[num8] = closure_5(items[num8], 0, 255);
      num8 = num8 + 1;
      let num27 = 3;
    } while (num8 < 3);
    items[3] = clamp(items[3], 0, 1);
    return items;
  } else {
    return null;
  }
};
obj.get.hsl = (str) => {
  if (str) {
    const match = str.match(/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);
    if (match) {
      const _parseFloat = parseFloat;
      const parsed = parseFloat(match[4]);
      const _parseFloat2 = parseFloat;
      const items = [(parseFloat(match[1]) % 360 + 360) % 360, , , ];
      const _parseFloat3 = parseFloat;
      items[1] = clamp(parseFloat(match[2]), 0, 100);
      const _parseFloat4 = parseFloat;
      items[2] = clamp(parseFloat(match[3]), 0, 100);
      const _isNaN = isNaN;
      let num8 = 1;
      if (!isNaN(parsed)) {
        num8 = parsed;
      }
      items[3] = clamp(num8, 0, 1);
      return items;
    } else {
      return null;
    }
  } else {
    return null;
  }
};
obj.get.hwb = (str) => {
  if (str) {
    const match = str.match(/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);
    if (match) {
      const _parseFloat = parseFloat;
      const parsed = parseFloat(match[4]);
      const _parseFloat2 = parseFloat;
      const items = [(parseFloat(match[1]) % 360 + 360) % 360, , , ];
      const _parseFloat3 = parseFloat;
      items[1] = clamp(parseFloat(match[2]), 0, 100);
      const _parseFloat4 = parseFloat;
      items[2] = clamp(parseFloat(match[3]), 0, 100);
      const _isNaN = isNaN;
      let num8 = 1;
      if (!isNaN(parsed)) {
        num8 = parsed;
      }
      items[3] = clamp(num8, 0, 1);
      return items;
    } else {
      return null;
    }
  } else {
    return null;
  }
};
obj.to.hex = () => {
  const tmp = require(dependencyMap[1])(arguments);
  const text = `#${closure_6(tmp[0])}`;
  const text1 = `#${closure_6(tmp[0])}${closure_6(tmp[1])}`;
  let str = "";
  const text2 = `#${closure_6(tmp[0])}${closure_6(tmp[1])}${closure_6(tmp[2])}`;
  if (tmp[3] < 1) {
    const _Math = Math;
    str = hexDouble(Math.round(255 * tmp[3]));
  }
  return text2 + str;
};
obj.to.rgb = () => {
  const arr = require(dependencyMap[1])(arguments);
  if (arr.length >= 4) {
    if (1 !== arr[3]) {
      const _Math = Math;
      const _Math2 = Math;
      const text = `rgba(${Math.round(arr[0])}`;
      const _Math3 = Math;
      const text1 = `${`rgba(${Math.round(arr[0])}`}, ${Math.round(arr[1])}`;
      let text2 = `${tmp6 + ", " + Math.round(arr[2]) + ", " + arr[3]})`;
    }
    return text2;
  }
  const text3 = `rgb(${Math.round(arr[0])}`;
  const text4 = `${`rgb(${Math.round(arr[0])}`}, ${Math.round(arr[1])}`;
  text2 = `${tmp2 + ", " + Math.round(arr[2])})`;
};
obj.to.rgb.percent = () => {
  const arr = require(dependencyMap[1])(arguments);
  const rounded = Math.round(arr[0] / 255 * 100);
  const rounded1 = Math.round(arr[1] / 255 * 100);
  const rounded2 = Math.round(arr[2] / 255 * 100);
  if (arr.length >= 4) {
    if (1 !== arr[3]) {
      let text = `${"rgba(" + tmp + "%, " + tmp2 + "%, " + tmp3 + "%, " + arr[3]})`;
    }
    return text;
  }
  text = `${"rgb(" + tmp + "%, " + tmp2 + "%, " + tmp3}%)`;
};
obj.to.hsl = () => {
  const arr = require(dependencyMap[1])(arguments);
  if (arr.length >= 4) {
    if (1 !== arr[3]) {
      let text = `${"hsla(" + arr[0] + ", " + arr[1] + "%, " + arr[2] + "%, " + arr[3]})`;
    }
    return text;
  }
  text = `${"hsl(" + arr[0] + ", " + arr[1] + "%, " + arr[2]}%)`;
};
obj.to.hwb = () => {
  const arr = require(dependencyMap[1])(arguments);
  let tmp = arr.length >= 4;
  if (tmp) {
    tmp = 1 !== arr[3];
  }
  let str = "";
  if (tmp) {
    str = `, ${arr[3]}`;
  }
  return "hwb(" + arr[0] + ", " + arr[1] + "%, " + arr[2] + "%" + str + ")";
};
obj.to.keyword = (arg0) => obj[arg0.slice(arg0, 0, 3)];

export default obj;

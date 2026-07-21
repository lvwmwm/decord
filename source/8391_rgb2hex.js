// Module ID: 8391
// Function ID: 66770
// Name: rgb2hex
// Dependencies: []
// Exports: colorToHex

// Module 8391 (rgb2hex)
function rgb2hex(arg0) {
  let str = "";
  if (3 === arg0.length) {
    const _parseInt = parseInt;
    let str2 = parseInt(arg0[0], 10);
    str = str2.toString(16);
    const _parseInt2 = parseInt;
    const text = `#${obj.padStart(2, "0")}`;
    parseInt(arg0[1], 10).toString(16);
    const _parseInt3 = parseInt;
    const text1 = `#${obj.padStart(2, "0")}${obj2.padStart(2, "0")}`;
    const str5 = parseInt(arg0[1], 10);
    str2 = parseInt(arg0[2], 10).toString(16);
    str = `#${obj.padStart(2, "0")}${obj2.padStart(2, "0")}${obj3.padStart(2, "0")}`;
    const str6 = parseInt(arg0[2], 10);
  }
  return str;
}
let closure_0 = importDefault(dependencyMap[0]);

export const colorToHex = function colorToHex(arr) {
  if (undefined === arr) {
    return arr;
  } else if ("none" === arr) {
    return arr;
  } else if (arr.includes("rgb")) {
    const match = arr.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
    if (match) {
      return tmp7(match.slice(1));
    } else {
      const _Error4 = Error;
      throw Error("Invalid color: " + arr);
    }
    const tmp7 = rgb2hex;
  } else if (arr.includes("hsl")) {
    const match1 = arr.match(/^hsla*\((\d{1,3})\s*[, ]\s*(\d{1,3})%\s*[, ]\s*(\d{1,3})%.*\)/i);
    if (null === match1) {
      const _Error3 = Error;
      throw Error("Invalid color: " + arr);
    } else {
      const items = [match1[1] / 360, match1[2] / 100, match1[3] / 100];
      return function hsl2hex(items) {
        if (3 !== items.length) {
          return "";
        } else {
          const tmp10 = callback(items, 3);
          const first = tmp10[0];
          let num2 = 1;
          let sum = tmp10[1];
          let num4 = 2;
          let diff = tmp10[2];
          if (0 === sum) {
            const _Math = Math;
            items = [Math.round(255 * diff), , ];
            const _Math2 = Math;
            items[1] = Math.round(255 * tmp12);
            const _Math3 = Math;
            items[2] = Math.round(255 * tmp13);
            return callback2(items);
          } else {
            function hue2rgb(arg0, result, diff) {
              let sum = diff;
              if (diff < 0) {
                sum = diff + 1;
              }
              diff = sum;
              if (sum > 1) {
                diff = sum - 1;
              }
              if (diff < 0.16666666666666666) {
                let sum1 = arg0 + 6 * (result - arg0) * diff;
              } else {
                sum1 = result;
                if (diff >= 0.5) {
                  let sum2 = arg0;
                  if (diff < 0.6666666666666666) {
                    sum2 = arg0 + (result - arg0) * (0.6666666666666666 - diff) * 6;
                  }
                  sum1 = sum2;
                }
              }
              return sum1;
            }
            if (diff < 0.5) {
              sum = num2 + sum;
              let result = diff * sum;
            } else {
              result = diff + sum - diff * sum;
            }
            num2 = num4 * diff - result;
            num4 = first + 0.3333333333333333;
            hue2rgb(num2, result, num4);
            hue2rgb(num2, result, first);
            diff = first - 0.3333333333333333;
            hue2rgb(num2, result, diff);
          }
        }
      }(items);
    }
  } else {
    if (arr.includes("#")) {
      if (obj.test(arr)) {
        if (4 === arr.length) {
          return "#" + arr[1] + arr[1] + arr[2] + arr[2] + arr[3] + arr[3];
        } else if (7 === arr.length) {
          return arr;
        }
      } else {
        const _Error = Error;
        throw Error("Invalid color: " + arr);
      }
      const obj = /^#([0-9A-Fa-f]{3}){1,2}$/i;
    }
    const tmp2 = {}[arr.toLowerCase(arr)];
    if (tmp2) {
      return tmp2;
    } else {
      const _Error2 = Error;
      throw Error("Invalid color: " + arr);
    }
  }
};

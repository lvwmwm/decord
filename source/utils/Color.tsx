// Module ID: 3973
// Function ID: 32959
// Name: hslToRgb
// Dependencies: []

// Module 3973 (hslToRgb)
function hslToRgb(alpha) {
  const hue = alpha.hue;
  const result = alpha.lightness / 255;
  const result1 = alpha.saturation / 255;
  const result2 = (1 - Math.abs(2 * result - 1)) * result1;
  const result3 = result2 * (1 - Math.abs(hue / 60 % 2 - 1));
  let closure_0 = result - result2 / 2;
  if (hue < 60) {
    const items = [result2, result3, 0];
    let items5 = items;
  } else if (hue < 120) {
    const items1 = [result3, result2, 0];
    items5 = items1;
  } else if (hue < 180) {
    const items2 = [0.229, result2, result3];
    items5 = items2;
  } else if (hue < 240) {
    const items3 = [0.229, result3, result2];
    items5 = items3;
  } else if (hue < 300) {
    const items4 = [result3, 0, result2];
    items5 = items4;
  } else {
    items5 = [result2, 0, result3];
  }
  const mapped = items5.map((arg0) => Math.round(255 * (arg0 + closure_0)));
  return { red: mapped[0], green: mapped[1], blue: mapped[2], alpha: alpha.alpha };
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = /^#[0-9a-f]{3,8}$/i;
let closure_4 = /^((?:rgb|hsl)a?)\s*\(([^)]*)\)/i;
const tmp2 = () => {
  class Color {
    constructor(arg0, arg1, arg2, arg3) {
      tmp = closure_1(this, Color);
      this.red = arg0;
      this.green = arg1;
      this.blue = arg2;
      this.alpha = arg3;
      return;
    }
  }
  let closure_0 = Color;
  let obj = {
    key: "toHexString",
    value() {
      const self = this;
      let str = Math.round(this.red);
      str = str.toString(16);
      let str2 = Math.round(this.green);
      const str1 = str2.toString(16);
      str2 = Math.round(this.blue).toString(16);
      let text = str;
      if (this.red <= 15.5) {
        text = `0${tmp}`;
      }
      let text2 = str1;
      const text1 = `#${tmp4}`;
      if (self.green <= 15.5) {
        text2 = `0${tmp2}`;
      }
      let text3 = str2;
      const sum = text1 + text2;
      if (self.blue <= 15.5) {
        text3 = `0${tmp3}`;
      }
      return sum + text3;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "toHSL",
    value() {
      let obj = { red: this.red, green: this.green, blue: this.blue, alpha: this.alpha };
      const alpha = obj.alpha;
      const result = obj.red / 255;
      const result1 = obj.green / 255;
      const result2 = obj.blue / 255;
      const bound = Math.max(result, result1, result2);
      const bound1 = Math.min(result, result1, result2);
      const diff = bound - bound1;
      const result3 = (bound + bound1) / 2;
      let num = 0;
      if (diff > 0) {
        const _Math = Math;
        num = diff / (1 - Math.abs(2 * result3 - 1));
      }
      if (0 === diff) {
        obj = { hue: 0, saturation: num, lightness: result3, alpha };
      } else {
        if (result === bound) {
          let num3 = (result1 - result2) / diff % 6;
        } else if (result1 === bound) {
          num3 = (result2 - result) / diff + 2;
        } else {
          num3 = 0;
          if (result2 === bound) {
            num3 = (result1 - result2) / diff + 4;
          }
        }
        obj = { hue: 60 * num3, saturation: num, lightness: result3, alpha };
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "getRelativeLuminance",
    value() {
      const result = this.red / 255;
      const result1 = this.green / 255;
      const result2 = this.blue / 255;
      if (result <= 0.03928) {
        let result3 = result / 12.92;
      } else {
        const _Math = Math;
        result3 = Math.pow((result + 0.055) / 1.055, 2.4);
      }
      const result4 = 0.2126 * result3;
      if (result1 <= 0.03928) {
        let result5 = result1 / 12.92;
      } else {
        const _Math2 = Math;
        result5 = Math.pow((result1 + 0.055) / 1.055, 2.4);
      }
      const result6 = 0.7152 * result5;
      if (result2 <= 0.03928) {
        let result7 = result2 / 12.92;
      } else {
        const _Math3 = Math;
        result7 = Math.pow((result2 + 0.055) / 1.055, 2.4);
      }
      return result4 + result6 + 0.0722 * result7;
    }
  };
  items[2] = obj;
  const items1 = [
    {
      key: "parseString",
      value(str) {
        const self = this;
        if (null != str.match(closure_4)) {
          let parseColorFnStringResult = self.parseColorFnString(str);
        } else if (null != str.match(closure_3)) {
          parseColorFnStringResult = self.parseHexString(str);
        }
        return parseColorFnStringResult;
      }
    },
    {
      key: "parseRgbString",
      value(arg0) {
        const self = this;
        if ("transparent" === arg0) {
          const prototype = Color.prototype;
          let parseColorFnStringResult = new Color(0, 0, 0, 0);
        } else {
          parseColorFnStringResult = self.parseColorFnString(arg0);
        }
        return parseColorFnStringResult;
      }
    },
    {
      key: "parseHexString",
      value(str) {
        if (null != str.match(closure_3)) {
          const items = [];
          if (!items.includes(str.length)) {
            const replaced = str.replace("#", "");
            let str3 = replaced;
            if (replaced.length < 6) {
              const tmp2 = Color(replaced, 4);
              const first = tmp2[0];
              const sum = first + first + tmp4 + tmp4 + tmp5 + tmp5;
              str3 = sum;
              if (null != tmp2[3]) {
                str3 = sum + (tmp6 + tmp6);
              }
            }
            const match = str3.match(/.{1,2}/g);
            if (null != match) {
              let tmp17 = Color;
              const _parseInt2 = parseInt;
              const parsed = parseInt(match[0], 16);
              const _parseInt3 = parseInt;
              let num8 = 1;
              const parsed1 = parseInt(match[1], 16);
              const _parseInt4 = parseInt;
              const parsed2 = parseInt(match[2], 16);
              if (null != match[3]) {
                const _parseInt = parseInt;
                num8 = parseInt(match[3], 16) / 255;
              }
              const prototype = tmp17.prototype;
              tmp17 = new tmp17(parsed, parsed1, parsed2, num8);
              return tmp17;
            }
          }
        }
      }
    },
    {
      key: "parseColorFnString",
      value(str) {
        let tmp4;
        let tmp5;
        let tmp6;
        let match = str.match(closure_4);
        if (null == match) {
          match = [];
        }
        const tmp = Color(match, 3);
        const Color = str;
        if (null != tmp[1]) {
          if (null != str2) {
            const parts = str2.split(/\s*[,/\s]\s*/);
            const mapped = parts.map((str) => str.replace(",", "").trim());
            const found = mapped.filter((arg0) => "" !== arg0);
            const mapped1 = found.map((arg0, arg1) => {
              if (obj.test(arg0)) {
                if (3 === arg1) {
                  const _parseFloat5 = parseFloat;
                  let result = parseFloat(arg0) / 100;
                } else {
                  const _parseFloat4 = parseFloat;
                  result = 255 * parseFloat(arg0) / 100;
                }
              } else {
                if ("h" !== str[arg1]) {
                  const _parseFloat = parseFloat;
                  let parsed = parseFloat(arg0);
                } else {
                  if (obj2.test(arg0)) {
                    const _parseFloat3 = parseFloat;
                    parsed = 360 * parseFloat(arg0);
                  } else {
                    if (obj3.test(arg0)) {
                      const _parseFloat2 = parseFloat;
                      parsed = 57.3 * parseFloat(arg0);
                    }
                    const obj3 = /rad$/;
                  }
                  const obj2 = /turn$/;
                }
                return parsed;
              }
            });
            if ("hsl" === str.substr(0, 3)) {
              const obj = {};
              [obj.hue, obj.saturation, obj.lightness, obj.alpha] = mapped1;
              const tmp16 = callback2(obj);
              const prototype2 = Color.prototype;
              const tmp20 = new Color(tmp16.red, tmp16.green, tmp16.blue, tmp16.alpha);
              return tmp20;
            } else {
              let tmp3 = Color;
              [tmp4, tmp5, tmp6] = mapped1;
              let num2 = 1;
              if ("number" === typeof mapped1[3]) {
                num2 = mapped1[3];
              }
              const prototype = tmp3.prototype;
              tmp3 = new tmp3(tmp4, tmp5, tmp6, num2);
              return tmp3;
            }
          }
        }
      }
    }
  ];
  return callback(Color, items, items1);
}();
const result = arg1(dependencyMap[3]).fileFinishedImporting("utils/Color.tsx");

export default tmp2;
export { hslToRgb };

// Module ID: 666
// Function ID: 8051
// Name: t
// Dependencies: []

// Module 666 (t)
let self = this;
const fn = function t() {
  let length;
  let length2;
  function rgb2lrgb(arg0) {
    const absolute = Math.abs(arg0);
    if (absolute < 0.04045) {
      let result = arg0 / 12.92;
    } else {
      result = (sign(arg0) || 1) * pow((absolute + 0.055) / 1.055, 2.4);
      const tmp3 = sign(arg0) || 1;
    }
    return result;
  }
  function lrgb2rgb(arg0) {
    const absolute = Math.abs(arg0);
    if (absolute > 0.0031308) {
      let result = (sign(arg0) || 1) * (1.055 * pow(absolute, 0.4166666666666667) - 0.055);
      const tmp4 = sign(arg0) || 1;
    } else {
      result = 12.92 * arg0;
    }
    return result;
  }
  function limit$2(arg0, arg1, arg2) {
    let tmp = arg0;
    let num = arg1;
    let num2 = arg2;
    if (undefined === arg1) {
      num = 0;
    }
    if (undefined === num2) {
      num2 = 1;
    }
    if (tmp >= num) {
      if (tmp > num2) {
        tmp = num2;
      }
      num = tmp;
    }
    return num;
  }
  let obj = {};
  const items = [];
  let num = 0;
  if (0 < items.length) {
    do {
      let str = items[num];
      let text = `[object ${str}`;
      obj[`[object ${str}` + "]"] = str.toLowerCase();
      num = num + 1;
      length = items.length;
    } while (num < length);
  }
  function type$p(analyzeResult) {
    return obj[toString.call(toString, analyzeResult)] || "object";
  }
  obj = {
    clip_rgb: function clip_rgb$3(arr) {
      arr._clipped = false;
      arr._unclipped = arr.slice(0);
      let num = 0;
      do {
        if (num < 3) {
          let tmp2 = arr[num] < 0 || arr[num] > 255;
          if (tmp2) {
            arr._clipped = true;
          }
          let tmp3 = closure_0;
          arr[num] = closure_0(arr[num], 0, 255);
        } else if (3 === num) {
          let tmp = closure_0;
          arr[num] = closure_0(arr[num], 0, 1);
        }
        num = num + 1;
      } while (num <= 3);
      return arr;
    },
    limit: limit$2,
    type: type$p,
    unpack: function unpack$B(arg0, arg1) {
      let tmp = arg1;
      const limit$2 = arg0;
      if (undefined === arg1) {
        tmp = null;
      }
      if (arg0.length >= 3) {
        const _Array = Array;
        let callResult = slice.call(arg0);
      } else {
        if ("object" == type$p(arg0[0])) {
          if (tmp) {
            const parts = tmp.split("");
            const found = parts.filter((arg0) => undefined !== arg0[0][arg0]);
            callResult = found.map((arg0) => arg0[0][arg0]);
          }
        }
        callResult = arg0[0];
      }
      return callResult;
    },
    last: function last$4(arg0) {
      if (arg0.length < 2) {
        return null;
      } else {
        const diff = arg0.length - 1;
        let formatted = null;
        if ("string" == type$p(arg0[diff])) {
          formatted = arg0[diff].toLowerCase();
          const str2 = arg0[diff];
        }
        return formatted;
      }
    },
    PI,
    TWOPI: 2 * PI,
    PITHIRD: PI / 3,
    DEG2RAD: PI / 180,
    RAD2DEG: 180 / PI
  };
  obj = { format: {}, autodetect: [] };
  ({ last: closure_4, clip_rgb: closure_5, type: closure_6 } = obj);
  class Color {
    constructor() {
      self = this;
      items = [];
      tmp = +arguments.length;
      diff = tmp - 1;
      if (tmp) {
        do {
          items[diff] = arguments[diff];
          tmp3 = +diff;
          diff = tmp3 - 1;
        } while (tmp3);
      }
      if ("object" === type(items[0])) {
        if (items[0].constructor) {
          if (items[0].constructor === self.constructor) {
            return items[0];
          }
        }
      }
      tmp4 = last(items);
      flag = false;
      tmp5 = tmp4;
      if (!tmp4) {
        tmp6 = closure_7;
        if (!closure_7.sorted) {
          tmp7 = closure_7;
          autodetect = closure_7.autodetect;
          closure_7.autodetect = autodetect.sort((p, p2) => p2.p - p.p);
          tmp8 = closure_7;
          flag2 = true;
          closure_7.sorted = true;
        }
        tmp9 = closure_7;
        autodetect = closure_7.autodetect;
        num = 1;
        num2 = 0;
        tmp5 = tmp4;
        flag = true;
        if (0 < autodetect.length) {
          tmp10 = autodetect[num2];
          test = tmp10.test;
          applyResult = test.apply(tmp10, items);
          tmp5 = applyResult;
          flag = true;
          while (!applyResult) {
            num2 = num2 + 1;
            tmp5 = applyResult;
            flag = true;
            if (num2 >= autodetect.length) {
              break;
            }
          }
        }
      }
      if (closure_7.format[tmp5]) {
        tmp17 = closure_7;
        obj = closure_7.format[tmp5];
        substr = items;
        if (!flag) {
          num3 = -1;
          substr = items.slice(0, -1);
        }
        tmp19 = null;
        tmp20 = clip_rgb;
        self._rgb = clip_rgb(obj.apply(null, substr));
        num4 = 3;
        if (3 === self._rgb.length) {
          _rgb = self._rgb;
          num5 = 1;
          arr = _rgb.push(1);
        }
        return;
      } else {
        tmp12 = globalThis;
        _Error = Error;
        str = "unknown format: ";
        prototype = Error.prototype;
        tmp13 = new.target;
        tmp14 = new.target;
        error = new Error("unknown format: " + items);
        tmp16 = error;
        throw error;
      }
    }
    toString() {
      self = this;
      if ("function" == type(this.hex)) {
        hexResult = self.hex();
      } else {
        _rgb = self._rgb;
        str = ",";
        str2 = "[";
        str3 = "]";
        hexResult = `${"[" + _rgb.join(",")}]`;
      }
      return hexResult;
    }
    cmyk() {
      return rgb2cmyk$1(this._rgb);
    }
    css(arg0) {
      return rgb2css$1(this._rgb, arg0);
    }
    gl() {
      _rgb = this._rgb;
      items = [, , , ];
      items[0] = _rgb[0] / 255;
      items[1] = _rgb[1] / 255;
      items[2] = _rgb[2] / 255;
      items[3] = _rgb[3];
      return items;
    }
    hcg() {
      return rgb2hcg$1(this._rgb);
    }
    hex(arg0) {
      return rgb2hex$2(this._rgb, arg0);
    }
    hsi() {
      return rgb2hsi$1(this._rgb);
    }
    hsl() {
      return rgb2hsl$3(this._rgb);
    }
    hsv() {
      return rgb2hsl(this._rgb);
    }
    lab() {
      return rgb2lab$2(this._rgb);
    }
    lch() {
      return rgb2lch$1(this._rgb);
    }
    hcl() {
      obj = rgb2lch$1(this._rgb);
      return obj.reverse();
    }
    name() {
      tmp = rgb2hex$2(this._rgb, "rgb");
      keys = Object.keys(f8126);
      num = 0;
      if (0 < keys.length) {
        str = keys[num];
        tmp2 = f8126;
        while (f8126[str] !== tmp) {
          num = num + 1;
        }
        return str.toLowerCase();
      }
      return tmp;
    }
    num() {
      return rgb2num$1(this._rgb);
    }
    rgb(arg0) {
      flag = arg0;
      self = this;
      if (undefined === arg0) {
        flag = true;
      }
      if (false === flag) {
        _rgb = self._rgb;
        num3 = 0;
        num4 = 3;
        substr = _rgb.slice(0, 3);
      } else {
        _rgb1 = self._rgb;
        num = 0;
        num2 = 3;
        substr1 = _rgb1.slice(0, 3);
        tmp = round;
        substr = substr1.map(round);
      }
      return substr;
    }
    rgba(arg0) {
      closure_0 = arg0;
      if (undefined === arg0) {
        flag = true;
        closure_0 = true;
      }
      _rgb = this._rgb;
      substr = _rgb.slice(0, 4);
      return substr.map((arg0, arg1) => {
        let tmp = arg0;
        if (arg1 < 3) {
          let tmp3 = arg0;
          if (false !== closure_0) {
            tmp3 = callback(arg0);
          }
          tmp = tmp3;
        }
        return tmp;
      });
    }
    oklab() {
      return rgb2oklab$2(this._rgb);
    }
    oklch() {
      return rgb2oklch$1(this._rgb);
    }
    alpha(arg0, arg1) {
      flag = arg1;
      self = this;
      if (undefined === arg1) {
        flag = false;
      }
      if (undefined !== arg0) {
        tmp = type;
        str = "number";
        if ("number" === type(arg0)) {
          if (flag) {
            num4 = 3;
            self._rgb[3] = arg0;
            tmp6 = self;
          } else {
            tmp2 = Color;
            num = 0;
            items = [, , , ];
            items[0] = self._rgb[0];
            num2 = 1;
            items[1] = self._rgb[1];
            num3 = 2;
            items[2] = self._rgb[2];
            items[3] = arg0;
            prototype = Color.prototype;
            tmp3 = new.target;
            str2 = "rgb";
            tmp4 = new.target;
            tmp5 = items;
            tmp6 = new Color(items, "rgb");
          }
          tmp7 = tmp6;
        }
      }
      return self._rgb[3];
    }
    clipped() {
      tmp = this._rgb._clipped || false;
      return tmp;
    }
    darken(arg0) {
      num = arg0;
      self = this;
      if (undefined === arg0) {
        num = 1;
      }
      labResult = self.lab();
      labResult[0] = labResult[0] - push.Kn * num;
      obj = new Color(labResult, "lab");
      return obj.alpha(self.alpha(), true);
    }
    brighten(arg0) {
      num = arg0;
      self = this;
      if (undefined === arg0) {
        num = 1;
      }
      return self.darken(-num);
    }
    get(arg0) {
      parts = arg0.split(".");
      first = parts[0];
      tmp2 = parts[1];
      tmp3 = this[first]();
      if (tmp2) {
        num = 2;
        index = first.indexOf(tmp2);
        str = "ok";
        num2 = 0;
        if ("ok" === first.substr(0, 2)) {
          num2 = 2;
        }
        diff = index - num2;
        num3 = -1;
        if (diff > -1) {
          return tmp3[diff];
        } else {
          tmp6 = globalThis;
          _Error = Error;
          str2 = "unknown channel ";
          str3 = " in mode ";
          prototype = Error.prototype;
          tmp7 = new.target;
          tmp8 = new.target;
          error = new Error("unknown channel " + tmp2 + " in mode " + first);
          tmp10 = error;
          throw error;
        }
      } else {
        return tmp3;
      }
    }
    luminance(arg0) {
      self = this;
      limit$2 = arg0;
      if (undefined !== arg0) {
        tmp = type;
        str = "number";
        if ("number" === type(arg0)) {
          num = 0;
          if (0 === arg0) {
            tmp23 = Color;
            num4 = 3;
            items = [null, null, null];
            items[3] = self._rgb[3];
            prototype5 = Color.prototype;
            tmp24 = new.target;
            str3 = "rgb";
            tmp25 = new.target;
            tmp26 = items;
            tmp27 = new Color(items, "rgb");
            tmp28 = tmp27;
            return tmp27;
          } else {
            num5 = 1;
            if (1 === arg0) {
              tmp17 = Color;
              num3 = 3;
              items1 = [null, null, null];
              items1[3] = self._rgb[3];
              prototype4 = Color.prototype;
              tmp18 = new.target;
              str2 = "rgb";
              tmp19 = new.target;
              tmp20 = items1;
              tmp21 = new Color(items1, "rgb");
              tmp22 = tmp21;
              return tmp21;
            } else {
              num6 = 20;
              closure_1 = 20;
              test = function test(self, self2) {
                const interpolateResult = self.interpolate(self2, 0.5, "rgb");
                const luminanceResult = interpolateResult.luminance();
                let tmp2 = interpolateResult;
                if (Math.abs(self - luminanceResult) >= 0.0000001) {
                  let closure_1 = tmp4 - 1;
                  tmp2 = interpolateResult;
                  if (+closure_1) {
                    if (luminanceResult > self) {
                      let tmp7 = test(self, interpolateResult);
                    } else {
                      tmp7 = test(interpolateResult, self2);
                    }
                  }
                }
                return tmp2;
              };
              if (self.luminance() > arg0) {
                tmp7 = Color;
                prototype2 = Color.prototype;
                tmp8 = new.target;
                tmp9 = new.target;
                tmp10 = new Color([null, null, null]);
                tmp11 = tmp10;
                isMatch = test(tmp10, self);
              } else {
                tmp2 = Color;
                prototype = Color.prototype;
                tmp3 = new.target;
                tmp4 = new.target;
                tmp5 = new Color([null, null, null]);
                tmp6 = tmp5;
                isMatch = test(self, tmp5);
              }
              rgbResult = isMatch.rgb();
              tmp12 = Color;
              num2 = 3;
              items2 = [];
              items2[0] = self._rgb[3];
              prototype3 = Color.prototype;
              tmp13 = new.target;
              tmp14 = new.target;
              tmp15 = new Color(rgbResult.concat(items2));
              tmp16 = tmp15;
              return tmp15;
            }
          }
        }
      }
      _rgb = self._rgb;
      return rgb2luminance.apply(undefined, _rgb.slice(0, 3));
    }
    premultiply(arg0) {
      flag = arg0;
      self = this;
      if (undefined === arg0) {
        flag = false;
      }
      _rgb = self._rgb;
      tmp = _rgb[3];
      if (flag) {
        items = [, , , ];
        items[0] = _rgb[0] * tmp;
        num3 = 1;
        items[1] = _rgb[1] * tmp;
        num4 = 2;
        items[2] = _rgb[2] * tmp;
        items[3] = tmp;
        self._rgb = items;
        tmp6 = self;
      } else {
        tmp2 = Color;
        items1 = [, , , ];
        items1[0] = _rgb[0] * tmp;
        num = 1;
        items1[1] = _rgb[1] * tmp;
        num2 = 2;
        items1[2] = _rgb[2] * tmp;
        items1[3] = tmp;
        prototype = Color.prototype;
        tmp3 = new.target;
        str = "rgb";
        tmp4 = new.target;
        tmp5 = items1;
        tmp6 = new Color(items1, "rgb");
      }
      return tmp6;
    }
    saturate(arg0) {
      num = arg0;
      self = this;
      if (undefined === arg0) {
        num = 1;
      }
      lchResult = self.lch();
      lchResult[1] = lchResult[1] + push.Kn * num;
      if (lchResult[1] < 0) {
        lchResult[1] = 0;
      }
      obj = new Color(lchResult, "lch");
      return obj.alpha(self.alpha(), true);
    }
    desaturate(arg0) {
      num = arg0;
      self = this;
      if (undefined === arg0) {
        num = 1;
      }
      return self.saturate(-num);
    }
    set(arg0, arg1, arg2) {
      flag = arg2;
      self = this;
      if (undefined === arg2) {
        flag = false;
      }
      parts = arg0.split(".");
      first = parts[0];
      tmp2 = parts[1];
      tmp3 = self[first]();
      if (tmp2) {
        num = 2;
        index = first.indexOf(tmp2);
        str = "ok";
        num2 = 0;
        if ("ok" === first.substr(0, 2)) {
          num2 = 2;
        }
        diff = index - num2;
        num3 = -1;
        if (diff > -1) {
          tmp11 = type;
          str4 = "string";
          if ("string" == type(arg1)) {
            charAtResult = arg1.charAt(0);
            str7 = "+";
            if ("+" !== charAtResult) {
              str8 = "-";
              if ("-" !== charAtResult) {
                str9 = "*";
                if ("*" === charAtResult) {
                  tmp3[diff] = tmp3[diff] * +arg1.substr(1);
                } else {
                  str10 = "/";
                  if ("/" === charAtResult) {
                    tmp3[diff] = tmp3[diff] / +arg1.substr(1);
                  } else {
                    tmp3[diff] = +arg1;
                  }
                }
              }
            }
            tmp3[diff] = tmp3[diff] + +arg1;
          } else {
            tmp12 = type;
            str5 = "number";
            if ("number" !== type(arg1)) {
              tmp13 = globalThis;
              _Error2 = Error;
              prototype2 = Error.prototype;
              tmp14 = new.target;
              str6 = "unsupported value for Color.set";
              tmp15 = new.target;
              error = new Error("unsupported value for Color.set");
              tmp17 = error;
              throw error;
            } else {
              tmp3[diff] = arg1;
            }
          }
          tmp19 = Color;
          prototype3 = Color.prototype;
          tmp20 = new.target;
          tmp21 = new.target;
          tmp22 = tmp3;
          tmp23 = first;
          tmp24 = new Color(tmp3, first);
          tmp25 = tmp24;
          tmp26 = tmp24;
          if (flag) {
            self._rgb = tmp24._rgb;
            tmp26 = self;
          }
          return tmp26;
        } else {
          tmp6 = globalThis;
          _Error = Error;
          str2 = "unknown channel ";
          str3 = " in mode ";
          prototype = Error.prototype;
          tmp7 = new.target;
          tmp8 = new.target;
          error1 = new Error("unknown channel " + tmp2 + " in mode " + first);
          tmp10 = error1;
          throw error1;
        }
      } else {
        return tmp3;
      }
    }
  }
  function chroma$k(arg0) {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const items1 = [true];
    let applyResult = bind.apply(chroma$k.Color, items1.concat(items));
    applyResult = new applyResult();
    return applyResult;
  }
  chroma$k.Color = Color;
  chroma$k.version = "2.4.2";
  let unpack = obj.unpack;
  unpack = obj.unpack;
  ({ unpack: closure_13, type: closure_14 } = obj);
  function rgb2cmyk$1(_rgb) {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const tmp4 = unpack(items, "rgb");
    let num = 0;
    const result = tmp4[0] / 255;
    const result1 = tmp4[1] / 255;
    const result2 = tmp4[2] / 255;
    const diff1 = 1 - max(result, max(result1, result2));
    if (diff1 < 1) {
      num = 1 / (1 - diff1);
    }
    const items1 = [(1 - result - diff1) * num, (1 - result1 - diff1) * num, (1 - result2 - diff1) * num, diff1];
    return items1;
  }
  chroma$k.cmyk = () => {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const items1 = [true];
    let applyResult = bind.apply(Color, items1.concat(items, [427697983247262640000000000000000000000000000000000000000000000000000000000000000000000]));
    applyResult = new applyResult();
    return applyResult;
  };
  obj.format.cmyk = function cmyk2rgb() {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const arr2 = unpack(items, "cmyk");
    const first = arr2[0];
    let num = 1;
    if (arr2.length > 4) {
      num = arr2[4];
    }
    if (1 === arr2[3]) {
      const items1 = [null, null, null, num];
      let items2 = items1;
    } else {
      let num2 = 0;
      if (first < 1) {
        num2 = 255 * (1 - first) * (1 - tmp7);
      }
      items2 = [num2, , , ];
      let num4 = 0;
      if (tmp5 < 1) {
        num4 = 255 * (1 - tmp5) * (1 - tmp7);
      }
      items2[1] = num4;
      let num6 = 0;
      if (tmp6 < 1) {
        num6 = 255 * (1 - tmp6) * (1 - tmp7);
      }
      items2[2] = num6;
      items2[3] = num;
    }
    return items2;
  };
  const autodetect = obj.autodetect;
  autodetect.push({
    p: 2,
    test() {
      let tmp3;
      const items = [];
      const tmp = +arguments.length;
      let diff = tmp - 1;
      if (tmp) {
        do {
          items[diff] = arguments[diff];
          tmp3 = +diff;
          diff = tmp3 - 1;
        } while (tmp3);
      }
      const arr2 = callback4(items, "cmyk");
      if ("array" === callback5(arr2)) {
        if (4 === arr2.length) {
          return "cmyk";
        }
      }
    }
  });
  ({ unpack: closure_16, last: closure_17 } = obj);
  function rnd(arg0) {
    return Math.round(100 * arg0) / 100;
  }
  unpack = obj.unpack;
  function rgb2hsl$3(_rgb) {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const arr2 = unpack(items, "rgba");
    const result = arr2[0] / 255;
    const result1 = arr2[1] / 255;
    const result2 = arr2[2] / 255;
    const bound = Math.min(result, result1, result2);
    const bound1 = Math.max(result, result1, result2);
    const result3 = (bound1 + bound) / 2;
    if (bound1 === bound) {
      const _Number = Number;
      let _NaN = Number.NaN;
      let num2 = 0;
    } else if (result3 < 0.5) {
      num2 = (bound1 - bound) / (bound1 + bound);
    } else {
      num2 = (bound1 - bound) / (2 - bound1 - bound);
    }
    if (result == bound1) {
      _NaN = (result1 - result2) / (bound1 - bound);
    } else if (result1 == bound1) {
      _NaN = 2 + (result2 - result) / (bound1 - bound);
    } else if (result2 == bound1) {
      _NaN = 4 + (result - result1) / (bound1 - bound);
    }
    const result4 = _NaN * 60;
    let sum = result4;
    if (result4 < 0) {
      sum = result4 + 360;
    }
    if (arr2.length > 3) {
      if (undefined !== arr2[3]) {
        const items1 = [sum, num2, result3, arr2[3]];
        let items2 = items1;
      }
      return items2;
    }
    items2 = [sum, num2, result3];
  }
  ({ unpack: closure_20, last: closure_21 } = obj);
  function hsl2css$1(arg0, arg1) {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const arr2 = callback6(items, "hsla");
    let str = callback7(items) || "lsa";
    let num = arr2[0];
    if (!num) {
      num = 0;
    }
    arr2[0] = rnd(num);
    let num2 = 1;
    arr2[1] = `${closure_18(100 * arr2[1])}%`;
    arr2[2] = `${closure_18(100 * arr2[2])}%`;
    if ("hsla" === str) {
      if (arr2.length > 3) {
        num2 = arr2[3];
      }
      arr2[3] = num2;
      str = "hsla";
    } else {
      arr2.length = 3;
    }
    return `${str}(` + arr2.join(",") + ")";
  }
  unpack = obj.unpack;
  round = Math.round;
  function hsl2rgb$1(substr4) {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const arr2 = unpack(items, "hsl");
    let num = arr2[0];
    let num2 = arr2[1];
    if (0 === num2) {
      const result = 255 * tmp4;
      while (true) {
        let num8 = 3;
        if (arr2.length > 3) {
          let items1 = [result, tmp9, tmp10, arr2[3]];
          let items2 = items1;
        } else {
          items2 = [result, tmp9, tmp10, 1];
        }
        return items2;
      }
    } else {
      const items3 = [null, null, null];
      const items4 = [null, null, null];
      if (tmp4 < 0.5) {
        let result1 = tmp4 * (1 + num2);
      } else {
        result1 = tmp4 + num2 - tmp4 * num2;
      }
      const diff1 = 2 * tmp4 - result1;
      const result2 = num / 360;
      items3[0] = result2 + 0.3333333333333333;
      items3[1] = result2;
      items3[2] = result2 - 0.3333333333333333;
      num = 0.6666666666666666;
      num2 = 0;
    }
  }
  let closure_29 = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/;
  let closure_30 = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/;
  let closure_31 = /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/;
  let closure_32 = /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/;
  let closure_33 = /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/;
  let closure_34 = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/;
  round = Math.round;
  function css2rgb$1(str) {
    const str2 = str.toLowerCase().trim();
    if (!obj.format.named) {
      while (true) {
        let tmp3 = str2;
        let tmp4 = closure_29;
        let match = str2.match(closure_29);
        if (match) {
          let num25 = 1;
          let num26 = 4;
          let substr = match.slice(1, 4);
          let num27 = 3;
          let num28 = 0;
          do {
            substr[num28] = +substr[num28];
            num28 = num28 + 1;
          } while (num28 < 3);
          substr[3] = 1;
          return substr;
        } else {
          let tmp5 = str2;
          let tmp6 = closure_30;
          let match1 = str2.match(closure_30);
          if (match1) {
            let num21 = 1;
            let num22 = 5;
            let substr1 = match1.slice(1, 5);
            let num23 = 4;
            let num24 = 0;
            do {
              substr1[num24] = +substr1[num24];
              num24 = num24 + 1;
            } while (num24 < 4);
            return substr1;
          } else {
            let tmp7 = str2;
            let tmp8 = closure_31;
            let match2 = str2.match(closure_31);
            if (match2) {
              let num16 = 1;
              let num17 = 4;
              let substr2 = match2.slice(1, 4);
              let num18 = 2.55;
              let num19 = 3;
              let num20 = 0;
              do {
                let tmp24 = closure_35;
                substr2[num20] = closure_35(2.55 * substr2[num20]);
                num20 = num20 + 1;
              } while (num20 < 3);
              substr2[3] = 1;
              return substr2;
            } else {
              let tmp9 = str2;
              let tmp10 = closure_32;
              let match3 = str2.match(closure_32);
              if (match3) {
                let num11 = 1;
                let num12 = 5;
                let substr3 = match3.slice(1, 5);
                let num13 = 2.55;
                let num14 = 3;
                let num15 = 0;
                do {
                  let tmp22 = closure_35;
                  substr3[num15] = closure_35(2.55 * substr3[num15]);
                  num15 = num15 + 1;
                } while (num15 < 3);
                substr3[3] = +substr3[3];
                return substr3;
              } else {
                let tmp11 = str2;
                let tmp12 = closure_33;
                let match4 = str2.match(closure_33);
                if (match4) {
                  let num6 = 1;
                  let num7 = 4;
                  let substr4 = match4.slice(1, 4);
                  let num8 = 0.01;
                  substr4[1] = substr4[1] * 0.01;
                  let num9 = 2;
                  substr4[2] = substr4[2] * 0.01;
                  let tmp19 = hsl2rgb$1;
                  let tmp20 = hsl2rgb$1(substr4);
                  let num10 = 3;
                  tmp20[3] = 1;
                  return tmp20;
                } else {
                  let tmp13 = str2;
                  let tmp14 = closure_34;
                  let match5 = str2.match(closure_34);
                  if (match5) {
                    let num = 1;
                    let num2 = 4;
                    let substr5 = match5.slice(1, 4);
                    let num3 = 0.01;
                    substr5[1] = substr5[1] * 0.01;
                    let num4 = 2;
                    substr5[2] = substr5[2] * 0.01;
                    let tmp16 = hsl2rgb$1;
                    let tmp17 = hsl2rgb$1(substr5);
                    let num5 = 3;
                    tmp17[3] = +match5[4];
                    return tmp17;
                  }
                }
              }
            }
          }
        }
      }
    } else {
      const format = obj.format;
      return format.named(str2);
    }
  }
  css2rgb$1.test = (arg0) => {
    let isMatch = regex.test(arg0);
    if (!isMatch) {
      isMatch = regex2.test(arg0);
    }
    if (!isMatch) {
      isMatch = regex3.test(arg0);
    }
    if (!isMatch) {
      isMatch = regex4.test(arg0);
    }
    if (!isMatch) {
      isMatch = regex5.test(arg0);
    }
    if (!isMatch) {
      isMatch = regex6.test(arg0);
    }
    return isMatch;
  };
  let type = obj.type;
  function rgb2css$1(_rgb, arg1) {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const arr2 = callback8(items, "rgba");
    const str = callback9(items) || "rgb";
    if ("hsl" == str.substr(0, 3)) {
      let text1 = hsl2css$1(rgb2hsl$3(arr2), str);
    } else {
      arr2[0] = round(arr2[0]);
      let num = 1;
      arr2[1] = round(arr2[1]);
      arr2[2] = round(arr2[2]);
      let tmp5 = "rgba" === str;
      if (!tmp5) {
        tmp5 = arr2.length > 3 && arr2[3] < num;
        const tmp4 = arr2.length > 3 && arr2[3] < num;
      }
      let str2 = str;
      if (tmp5) {
        if (arr2.length > 3) {
          num = arr2[3];
        }
        arr2[3] = num;
        str2 = "rgba";
      }
      let num2 = 4;
      const text = `${str2}(`;
      if ("rgb" === str2) {
        num2 = 3;
      }
      const substr = arr2.slice(0, num2);
      text1 = `${tmp6 + obj.join(",")})`;
    }
    return text1;
  }
  chroma$k.css = () => {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const items1 = [true];
    let applyResult = bind.apply(Color, items1.concat(items, ["memo"]));
    applyResult = new applyResult();
    return applyResult;
  };
  obj.format.css = css2rgb$1;
  const autodetect1 = obj.autodetect;
  autodetect1.push({
    p: 5,
    test(arg0) {
      let tmp3;
      const items = [];
      const diff = arguments.length - 1;
      let diff1 = diff - 1;
      if (diff > 0) {
        do {
          items[diff1] = arguments[diff1 + 1];
          tmp3 = +diff1;
          diff1 = tmp3 - 1;
        } while (tmp3 > 0);
      }
      if (!items.length) {
        if ("string" === type(arg0)) {
          if (css2rgb$1.test(arg0)) {
            return "css";
          }
        }
      }
    }
  });
  unpack = obj.unpack;
  obj.format.gl = () => {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const tmp4 = unpack(items, "rgba");
    tmp4[0] = tmp4[0] * 255;
    tmp4[1] = tmp4[1] * 255;
    tmp4[2] = tmp4[2] * 255;
    return tmp4;
  };
  chroma$k.gl = () => {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const items1 = [true];
    let applyResult = bind.apply(Color, items1.concat(items, [true]));
    applyResult = new applyResult();
    return applyResult;
  };
  ({ unpack: closure_42, unpack: closure_43 } = obj);
  ({ unpack: closure_45, type: closure_46 } = obj);
  function rgb2hcg$1(_rgb) {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const tmp4 = callback10(items, "rgb");
    const first = tmp4[0];
    const bound = Math.min(first, tmp6, tmp7);
    const bound1 = Math.max(first, tmp6, tmp7);
    const diff1 = bound1 - bound;
    const result = 100 * diff1;
    const result1 = bound / (255 - diff1);
    if (0 === diff1) {
      const _Number = Number;
      let _NaN = Number.NaN;
    } else {
      let result2;
      if (first === bound1) {
        result2 = (tmp6 - tmp7) / diff1;
      }
      if (tmp6 === bound1) {
        result2 = 2 + (tmp7 - first) / diff1;
      }
      if (tmp7 === bound1) {
        result2 = 4 + (first - tmp6) / diff1;
      }
      const result3 = result2 * 60;
      _NaN = result3;
      if (result3 < 0) {
        _NaN = result3 + 360;
      }
    }
    const items1 = [_NaN, result / 255, result1 * 100];
    return items1;
  }
  chroma$k.hcg = () => {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const items1 = [true];
    let applyResult = bind.apply(Color, items1.concat(items, ["successRedirect"]));
    applyResult = new applyResult();
    return applyResult;
  };
  obj.format.hcg = function hcg2rgb() {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const arr2 = callback11(items, "hcg");
    let num = arr2[0];
    let num2 = 1;
    const result = arr2[2] * 255;
    const result1 = 255 * tmp4;
    let first = result;
    let tmp8 = result;
    let tmp9 = result;
    if (0 !== arr2[1]) {
      if (360 === num) {
        num = 0;
      }
      let diff1 = num;
      if (num > 360) {
        diff1 = num - 360;
      }
      let sum = diff1;
      if (diff1 < 0) {
        sum = diff1 + 360;
      }
      const result2 = sum / 60;
      const tmp14 = floor(result2);
      const diff2 = result2 - tmp14;
      const result3 = result * (num2 - tmp4);
      const sum1 = result3 + result1 * (num2 - diff2);
      const sum2 = result3 + result1 * diff2;
      const sum3 = result3 + result1;
      if (0 === tmp14) {
        const items1 = [sum3, sum2, result3];
        first = items1[0];
        tmp8 = items1[num2];
        tmp9 = items1[2];
      } else if (num2 === tmp14) {
        const items2 = [sum1, sum3, result3];
        first = items2[0];
        tmp8 = items2[num2];
        tmp9 = items2[2];
      } else if (2 === tmp14) {
        const items3 = [result3, sum3, sum2];
        first = items3[0];
        tmp8 = items3[num2];
        tmp9 = items3[2];
      } else if (3 === tmp14) {
        const items4 = [result3, sum1, sum3];
        first = items4[0];
        tmp8 = items4[num2];
        tmp9 = items4[2];
      } else if (4 === tmp14) {
        const items5 = [sum2, result3, sum3];
        first = items5[0];
        tmp8 = items5[num2];
        tmp9 = items5[2];
      } else if (5 === tmp14) {
        const items6 = [sum3, result3, sum1];
        first = items6[0];
        tmp8 = items6[num2];
        tmp9 = items6[2];
      }
    }
    const items7 = [first, tmp8, tmp9, ];
    if (arr2.length > 3) {
      num2 = arr2[3];
    }
    items7[3] = num2;
    return items7;
  };
  const autodetect2 = obj.autodetect;
  autodetect2.push({
    p: 1,
    test() {
      let tmp3;
      const items = [];
      const tmp = +arguments.length;
      let diff = tmp - 1;
      if (tmp) {
        do {
          items[diff] = arguments[diff];
          tmp3 = +diff;
          diff = tmp3 - 1;
        } while (tmp3);
      }
      const arr2 = callback12(items, "hcg");
      if ("array" === callback13(arr2)) {
        if (3 === arr2.length) {
          return "hcg";
        }
      }
    }
  });
  ({ unpack: closure_49, last: closure_50 } = obj);
  round = Math.round;
  function rgb2hex$2(_rgb, rgb) {
    let tmp3;
    let tmp5;
    let tmp6;
    let tmp7;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const tmp4 = callback14(items, "rgba");
    let num = tmp4[3];
    [tmp5, tmp6, tmp7] = tmp4;
    let str = callback15(items) || "auto";
    if (undefined === num) {
      num = 1;
    }
    if ("auto" === str) {
      let str2 = "rgb";
      if (num < 1) {
        str2 = "rgba";
      }
      str = str2;
    }
    const tmp8 = round(tmp5) << 16;
    const str3 = tmp8 | round(tmp6) << 8 | round(tmp7);
    const text = `000000${str3.toString(16)}`;
    const substr = `000000${str3.toString(16)}`.substr(`000000${str3.toString(16)}`.length - 6);
    const str4 = round(255 * num);
    const text1 = `0${str4.toString(16)}`;
    const substr1 = `0${str4.toString(16)}`.substr(`0${str4.toString(16)}`.length - 2);
    const formatted = str.toLowerCase();
    if ("rgba" === formatted) {
      return "#" + substr + substr1;
    } else if ("argb" === formatted) {
      return "#" + substr1 + substr;
    } else {
      return "#" + substr;
    }
    const tmp9 = round(tmp6) << 8;
  }
  let closure_52 = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  let closure_53 = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/;
  function hex2rgb$1(str) {
    if (str.match(closure_52)) {
      let tmp12 = 4 !== str.length;
      if (tmp12) {
        tmp12 = 7 !== str.length;
      }
      let substr = str;
      if (!tmp12) {
        substr = str.substr(1);
      }
      let sum = substr;
      if (3 === substr.length) {
        const parts = substr.split("");
        sum = parts[0] + parts[0] + parts[1] + parts[1] + parts[2] + parts[2];
      }
      const _parseInt2 = parseInt;
      const parsed = parseInt(sum, 16);
      const items = [parsed >> 16, parsed >> 8 & 255, 255 & parsed, 1];
      return items;
    } else if (str.match(closure_53)) {
      let tmp7 = 5 !== str.length;
      if (tmp7) {
        tmp7 = 9 !== str.length;
      }
      let substr1 = str;
      if (!tmp7) {
        substr1 = str.substr(1);
      }
      let sum1 = substr1;
      if (4 === substr1.length) {
        const parts1 = substr1.split("");
        sum1 = parts1[0] + parts1[0] + parts1[1] + parts1[1] + parts1[2] + parts1[2] + parts1[3] + parts1[3];
      }
      const _parseInt = parseInt;
      const parsed1 = parseInt(sum1, 16);
      const items1 = [parsed1 >> 24 & 255, parsed1 >> 16 & 255, parsed1 >> 8 & 255, ];
      const _Math = Math;
      items1[3] = Math.round((255 & parsed1) / 255 * 100) / 100;
      return items1;
    } else {
      const _Error = Error;
      const error = new Error("unknown hex color: " + str);
      throw error;
    }
  }
  type = obj.type;
  chroma$k.hex = () => {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const items1 = [true];
    let applyResult = bind.apply(Color, items1.concat(items, [0.907]));
    applyResult = new applyResult();
    return applyResult;
  };
  obj.format.hex = hex2rgb$1;
  const autodetect3 = obj.autodetect;
  autodetect3.push({
    p: 4,
    test(arg0) {
      let tmp3;
      const items = [];
      const diff = arguments.length - 1;
      let diff1 = diff - 1;
      if (diff > 0) {
        do {
          items[diff1] = arguments[diff1 + 1];
          tmp3 = +diff1;
          diff1 = tmp3 - 1;
        } while (tmp3 > 0);
      }
      if (!items.length) {
        if ("string" === type(arg0)) {
          const items1 = [];
          if (items1.indexOf(arg0.length) >= 0) {
            return "hex";
          }
        }
      }
    }
  });
  ({ unpack: closure_57, TWOPI: closure_58 } = obj);
  ({ unpack: closure_62, limit: closure_63, TWOPI: closure_64, PITHIRD: closure_65 } = obj);
  ({ unpack: closure_67, type: closure_68 } = obj);
  function rgb2hsi$1(_rgb) {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const tmp4 = callback16(items, "rgb");
    const result = tmp4[0] / 255;
    const result1 = tmp4[1] / 255;
    const result2 = tmp4[2] / 255;
    const result3 = (result + result1 + result2) / 3;
    let num = 0;
    if (result3 > 0) {
      num = 1 - min(result, result1, result2) / result3;
    }
    if (0 === num) {
      let _NaN = NaN;
    } else {
      const diff1 = result - result1;
      const diff2 = result - result2;
      const tmp13 = acos((diff1 + diff2) / 2 / sqrt(diff1 * diff1 + diff2 * (result1 - result2)));
      let diff3 = tmp13;
      if (result2 > result1) {
        diff3 = closure_58 - tmp13;
      }
      _NaN = diff3 / closure_58;
    }
    const items1 = [360 * _NaN, num, result3];
    return items1;
  }
  chroma$k.hsi = () => {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const items1 = [true];
    let applyResult = bind.apply(Color, items1.concat(items, [-697050769076513100000000000000000000000000000000000000000000000000000000]));
    applyResult = new applyResult();
    return applyResult;
  };
  obj.format.hsi = function hsi2rgb() {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const arr2 = callback17(items, "hsi");
    let num = arr2[0];
    let num2 = 1;
    if (isNaN(num)) {
      num = 0;
    }
    let num3 = tmp4;
    if (isNaN(arr2[1])) {
      num3 = 0;
    }
    let diff1 = num;
    if (num > 360) {
      diff1 = num - 360;
    }
    let sum = diff1;
    if (diff1 < 0) {
      sum = diff1 + 360;
    }
    const result = sum / 360;
    if (result < 0.3333333333333333) {
      const result1 = (num2 - num3) / 3;
      const result2 = num3 * cos(closure_64 * result);
      const result3 = (num2 + result2 / cos(closure_65 - closure_64 * result)) / 3;
      let diff2 = num2 - (result1 + result3);
      let diff6 = result3;
      let diff4 = result1;
    } else if (result < 0.6666666666666666) {
      const result4 = (num2 - num3) / 3;
      const diff3 = result - 0.3333333333333333;
      const result5 = num3 * cos(closure_64 * diff3);
      const result6 = (num2 + result5 / cos(closure_65 - closure_64 * diff3)) / 3;
      diff4 = num2 - (result4 + result6);
      diff6 = result4;
      diff2 = result6;
    } else {
      diff2 = (num2 - num3) / 3;
      const diff5 = result - 0.6666666666666666;
      const result7 = num3 * cos(closure_64 * diff5);
      diff4 = (num2 + result7 / cos(closure_65 - closure_64 * diff5)) / 3;
      diff6 = num2 - (diff2 + diff4);
    }
    const items1 = [255 * callback18(arr2[2] * diff6 * 3), 255 * callback18(arr2[2] * diff2 * 3), 255 * callback18(arr2[2] * diff4 * 3), ];
    if (arr2.length > 3) {
      num2 = arr2[3];
    }
    items1[3] = num2;
    return items1;
  };
  const autodetect4 = obj.autodetect;
  autodetect4.push({
    p: 2,
    test() {
      let tmp3;
      const items = [];
      const tmp = +arguments.length;
      let diff = tmp - 1;
      if (tmp) {
        do {
          items[diff] = arguments[diff];
          tmp3 = +diff;
          diff = tmp3 - 1;
        } while (tmp3);
      }
      const arr2 = callback19(items, "hsi");
      if ("array" === callback20(arr2)) {
        if (3 === arr2.length) {
          return "hsi";
        }
      }
    }
  });
  ({ unpack: closure_71, type: closure_72 } = obj);
  chroma$k.hsl = () => {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const items1 = [true];
    let applyResult = bind.apply(Color, items1.concat(items, ["<string:3819299667>"]));
    applyResult = new applyResult();
    return applyResult;
  };
  obj.format.hsl = hsl2rgb$1;
  const autodetect5 = obj.autodetect;
  autodetect5.push({
    p: 2,
    test() {
      let tmp3;
      const items = [];
      const tmp = +arguments.length;
      let diff = tmp - 1;
      if (tmp) {
        do {
          items[diff] = arguments[diff];
          tmp3 = +diff;
          diff = tmp3 - 1;
        } while (tmp3);
      }
      const arr2 = callback21(items, "hsl");
      if ("array" === callback22(arr2)) {
        if (3 === arr2.length) {
          return "hsl";
        }
      }
    }
  });
  unpack = obj.unpack;
  min = Math.min;
  max = Math.max;
  unpack = obj.unpack;
  floor = Math.floor;
  ({ unpack: closure_80, type: closure_81 } = obj);
  function rgb2hsl(_rgb) {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const tmp4 = unpack(items, "rgb");
    const first = tmp4[0];
    const tmp9 = max(first, tmp4[1], tmp4[2]);
    const diff1 = tmp9 - min(first, tmp4[1], tmp4[2]);
    const result = tmp9 / 255;
    if (0 === tmp9) {
      const _Number = Number;
      let _NaN = Number.NaN;
      let num3 = 0;
    } else {
      const result1 = diff1 / tmp9;
      let result2;
      if (first === tmp9) {
        result2 = (tmp6 - tmp7) / diff1;
      }
      if (tmp6 === tmp9) {
        result2 = 2 + (tmp7 - first) / diff1;
      }
      if (tmp7 === tmp9) {
        result2 = 4 + (first - tmp6) / diff1;
      }
      const result3 = result2 * 60;
      num3 = result1;
      _NaN = result3;
      if (result3 < 0) {
        _NaN = result3 + 360;
        num3 = result1;
      }
    }
    const items1 = [_NaN, num3, result];
    return items1;
  }
  chroma$k.hsv = () => {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const items1 = [true];
    let applyResult = bind.apply(Color, items1.concat(items, [1279000806]));
    applyResult = new applyResult();
    return applyResult;
  };
  obj.format.hsv = function hsv2rgb() {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const arr2 = unpack(items, "hsv");
    let num = arr2[0];
    let num2 = 1;
    const result = arr2[2] * 255;
    let first = result;
    let tmp7 = result;
    let tmp8 = result;
    if (0 !== arr2[1]) {
      if (360 === num) {
        num = 0;
      }
      let diff1 = num;
      if (num > 360) {
        diff1 = num - 360;
      }
      let sum = diff1;
      if (diff1 < 0) {
        sum = diff1 + 360;
      }
      const result1 = sum / 60;
      const tmp13 = floor(result1);
      const diff2 = result1 - tmp13;
      const result2 = result * (num2 - tmp4);
      const result3 = result * (num2 - tmp4 * diff2);
      const result4 = result * (num2 - tmp4 * (num2 - diff2));
      if (0 === tmp13) {
        const items1 = [result, result4, result2];
        first = items1[0];
        tmp7 = items1[num2];
        tmp8 = items1[2];
      } else if (num2 === tmp13) {
        const items2 = [result3, result, result2];
        first = items2[0];
        tmp7 = items2[num2];
        tmp8 = items2[2];
      } else if (2 === tmp13) {
        const items3 = [result2, result, result4];
        first = items3[0];
        tmp7 = items3[num2];
        tmp8 = items3[2];
      } else if (3 === tmp13) {
        const items4 = [result2, result3, result];
        first = items4[0];
        tmp7 = items4[num2];
        tmp8 = items4[2];
      } else if (4 === tmp13) {
        const items5 = [result4, result2, result];
        first = items5[0];
        tmp7 = items5[num2];
        tmp8 = items5[2];
      } else if (5 === tmp13) {
        const items6 = [result, result2, result3];
        first = items6[0];
        tmp7 = items6[num2];
        tmp8 = items6[2];
      }
    }
    const items7 = [first, tmp7, tmp8, ];
    if (arr2.length > 3) {
      num2 = arr2[3];
    }
    items7[3] = num2;
    return items7;
  };
  const autodetect6 = obj.autodetect;
  autodetect6.push({
    p: 2,
    test() {
      let tmp3;
      const items = [];
      const tmp = +arguments.length;
      let diff = tmp - 1;
      if (tmp) {
        do {
          items[diff] = arguments[diff];
          tmp3 = +diff;
          diff = tmp3 - 1;
        } while (tmp3);
      }
      const arr2 = callback23(items, "hsv");
      if ("array" === callback24(arr2)) {
        if (3 === arr2.length) {
          return "hsv";
        }
      }
    }
  });
  const obj8 = {};
  unpack = obj.unpack;
  function rgb_xyz(arg0) {
    const result = arg0 / 255;
    if (result <= 0.04045) {
      let result1 = result / 12.92;
    } else {
      result1 = pow((result + 0.055) / 1.055, 2.4);
    }
    return result1;
  }
  function xyz_lab(result) {
    if (result > obj8.t3) {
      let sum = pow(result, 0.3333333333333333);
    } else {
      sum = result / obj8.t2 + obj8.t0;
    }
    return sum;
  }
  function rgb2xyz(arg0, arg1, arg2) {
    const tmp = rgb_xyz(arg0);
    const tmp2 = rgb_xyz(arg1);
    const tmp3 = rgb_xyz(arg2);
    const items = [xyz_lab((0.4124564 * tmp + 0.3575761 * tmp2 + 0.1804375 * tmp3) / obj8.Xn), xyz_lab((0.2126729 * tmp + 0.7151522 * tmp2 + 0.072175 * tmp3) / obj8.Yn), xyz_lab((0.0193339 * tmp + 0.119192 * tmp2 + 0.9503041 * tmp3) / obj8.Zn)];
    return items;
  }
  function rgb2lab$2(_rgb, arg1, arg2) {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const tmp4 = unpack(items, "rgb");
    let num = 0;
    const tmp5 = rgb2xyz(tmp4[0], tmp4[1], tmp4[2]);
    const diff1 = 116 * tmp6 - 16;
    if (diff1 >= 0) {
      num = diff1;
    }
    const items1 = [num, 500 * (tmp5[0] - tmp5[1]), 200 * (tmp5[1] - tmp5[2])];
    return items1;
  }
  unpack = obj.unpack;
  pow = Math.pow;
  function xyz_rgb(result) {
    if (result <= 0.00304) {
      result = 12.92 * result;
    } else {
      result = 1.055 * pow(result, 0.4166666666666667) - 0.055;
    }
    return 255 * result;
  }
  function lab_xyz(diff1) {
    if (diff1 > obj8.t1) {
      let result = diff1 * diff1 * diff1;
    } else {
      result = obj8.t2 * (diff1 - obj8.t0);
    }
    return result;
  }
  function lab2rgb$1(arg0, arg1, arg2) {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const arr2 = unpack(items, "lab");
    let num = 1;
    const result = (arr2[0] + 16) / 116;
    let sum = result;
    if (!isNaN(arr2[1])) {
      sum = result + tmp4 / 500;
    }
    let diff1 = result;
    if (!isNaN(arr2[2])) {
      diff1 = result - tmp5 / 200;
    }
    const result1 = obj8.Yn * lab_xyz(result);
    const result2 = obj8.Xn * lab_xyz(sum);
    const result3 = obj8.Zn * lab_xyz(diff1);
    const items1 = [xyz_rgb(3.2404542 * result2 - 1.5371385 * result1 - 0.4985314 * result3), xyz_rgb(-0.969266 * result2 + 1.8760108 * result1 + 0.041556 * result3), xyz_rgb(0.0556434 * result2 - 0.2040259 * result1 + 1.0572252 * result3), ];
    if (arr2.length > 3) {
      num = arr2[3];
    }
    items1[3] = num;
    return items1;
  }
  ({ unpack: closure_95, type: closure_96 } = obj);
  chroma$k.lab = () => {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const items1 = [true];
    let applyResult = bind.apply(Color, items1.concat(items, ["guild_id"]));
    applyResult = new applyResult();
    return applyResult;
  };
  obj.format.lab = lab2rgb$1;
  const autodetect7 = obj.autodetect;
  autodetect7.push({
    p: 2,
    test() {
      let tmp3;
      const items = [];
      const tmp = +arguments.length;
      let diff = tmp - 1;
      if (tmp) {
        do {
          items[diff] = arguments[diff];
          tmp3 = +diff;
          diff = tmp3 - 1;
        } while (tmp3);
      }
      const arr2 = callback25(items, "lab");
      if ("array" === callback26(arr2)) {
        if (3 === arr2.length) {
          return "lab";
        }
      }
    }
  });
  ({ unpack: closure_99, RAD2DEG: closure_100 } = obj);
  sqrt = Math.sqrt;
  round = Math.round;
  function lab2lch$2(arg0, arg1, arg2) {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const tmp4 = callback27(items, "lab");
    const tmp7 = sqrt(tmp4[1] * tmp4[1] + tmp4[2] * tmp4[2]);
    let _NaN = (atan2(tmp6, tmp5) * closure_100 + 360) % 360;
    if (0 === round(10000 * tmp7)) {
      const _Number = Number;
      _NaN = Number.NaN;
    }
    const items1 = [tmp4[0], tmp7, _NaN];
    return items1;
  }
  unpack = obj.unpack;
  ({ unpack: closure_107, DEG2RAD: closure_108 } = obj);
  cos = Math.cos;
  function lch2lab$2(arg0, arg1, arg2) {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const tmp4 = callback28(items, "lch");
    let num = tmp4[2];
    if (isNaN(num)) {
      num = 0;
    }
    const items1 = [tmp4[0], , ];
    const result = num * closure_108;
    items1[1] = cos(result) * tmp4[1];
    items1[2] = sin(result) * tmp4[1];
    return items1;
  }
  unpack = obj.unpack;
  function lch2rgb$1() {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const arr2 = unpack(items, "lch");
    let num = 1;
    const tmp4 = lch2lab$2(arr2[0], arr2[1], arr2[2]);
    const items1 = [, , , ];
    [arr3[0], arr3[1], arr3[2]] = lab2rgb$1(tmp4[0], tmp4[1], tmp4[2]);
    if (arr2.length > 3) {
      num = arr2[3];
    }
    items1[3] = num;
    return items1;
  }
  unpack = obj.unpack;
  ({ unpack: closure_116, type: closure_117 } = obj);
  function rgb2lch$1(_rgb) {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const tmp4 = unpack(items, "rgb");
    const tmp5 = rgb2lab$2(tmp4[0], tmp4[1], tmp4[2]);
    return lab2lch$2(tmp5[0], tmp5[1], tmp5[2]);
  }
  chroma$k.lch = () => {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const items1 = [true];
    let applyResult = bind.apply(Color, items1.concat(items, []));
    applyResult = new applyResult();
    return applyResult;
  };
  chroma$k.hcl = () => {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const items1 = [true];
    let applyResult = bind.apply(Color, items1.concat(items, [true]));
    applyResult = new applyResult();
    return applyResult;
  };
  obj.format.lch = lch2rgb$1;
  obj.format.hcl = function hcl2rgb() {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    return lch2rgb$1.apply(undefined, unpack(items, "hcl").reverse());
  };
  const items1 = [null, null];
  const item = items1.forEach((arg0) => {
    const limit$2 = arg0;
    const autodetect = obj.autodetect;
    const obj = {
      p: 2,
      test() {
        let tmp3;
        const items = [];
        const tmp = +arguments.length;
        let diff = tmp - 1;
        if (tmp) {
          do {
            items[diff] = arguments[diff];
            tmp3 = +diff;
            diff = tmp3 - 1;
          } while (tmp3);
        }
        const arr2 = callback(items, arg0);
        if ("array" === callback2(arr2)) {
          if (3 === arr2.length) {
            return arg0;
          }
        }
      }
    };
    return autodetect.push(obj);
  });
  const obj10 = {};
  type = obj.type;
  obj.format.named = (str) => {
    const formatted = str.toLowerCase();
    if (obj10[formatted]) {
      return hex2rgb$1(obj10[formatted]);
    } else {
      const _Error = Error;
      const error = new Error("unknown color name: " + formatted);
      throw error;
    }
  };
  const autodetect8 = obj.autodetect;
  autodetect8.push({
    p: 5,
    test(arg0) {
      let tmp3;
      const items = [];
      const diff = arguments.length - 1;
      let diff1 = diff - 1;
      if (diff > 0) {
        do {
          items[diff1] = arguments[diff1 + 1];
          tmp3 = +diff1;
          diff1 = tmp3 - 1;
        } while (tmp3 > 0);
      }
      if (!items.length) {
        if ("string" === type(arg0)) {
          if (obj10[arg0.toLowerCase(arg0)]) {
            return "named";
          }
        }
      }
    }
  });
  ({ unpack: closure_125, type: closure_126 } = obj);
  type = obj.type;
  function rgb2num$1(_rgb) {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const tmp4 = callback29(items, "rgb");
    return (tmp4[0] << 16) + (tmp4[1] << 8) + tmp4[2];
  }
  chroma$k.num = () => {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const items1 = [true];
    let applyResult = bind.apply(Color, items1.concat(items, ["settingsFromServer"]));
    applyResult = new applyResult();
    return applyResult;
  };
  obj.format.num = function num2rgb(arg0) {
    if ("number" == callback30(arg0)) {
      if (arg0 >= 0) {
        if (arg0 <= 16777215) {
          const items = [arg0 >> 16, arg0 >> 8 & 255, 255 & arg0, 1];
          return items;
        }
      }
    }
    const error = new Error("unknown num color: " + arg0);
    throw error;
  };
  const autodetect9 = obj.autodetect;
  autodetect9.push({
    p: 5,
    test() {
      let tmp3;
      const items = [];
      const tmp = +arguments.length;
      let diff = tmp - 1;
      if (tmp) {
        do {
          items[diff] = arguments[diff];
          tmp3 = +diff;
          diff = tmp3 - 1;
        } while (tmp3);
      }
      if (1 === items.length) {
        if ("number" === type(items[0])) {
          if (items[0] >= 0) {
            if (items[0] <= 16777215) {
              return "num";
            }
          }
        }
      }
    }
  });
  ({ unpack: closure_131, type: closure_132 } = obj);
  round = Math.round;
  chroma$k.rgb = () => {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const items1 = [true];
    let applyResult = bind.apply(Color, items1.concat(items, [0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000014224785586748537]));
    applyResult = new applyResult();
    return applyResult;
  };
  obj.format.rgb = () => {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const tmp4 = callback31(items, "rgba");
    if (undefined === tmp4[3]) {
      tmp4[3] = 1;
    }
    return tmp4;
  };
  const autodetect10 = obj.autodetect;
  autodetect10.push({
    p: 3,
    test() {
      let tmp3;
      const items = [];
      const tmp = +arguments.length;
      let diff = tmp - 1;
      if (tmp) {
        do {
          items[diff] = arguments[diff];
          tmp3 = +diff;
          diff = tmp3 - 1;
        } while (tmp3);
      }
      const arr2 = callback31(items, "rgba");
      if ("array" === callback32(arr2)) {
        return "rgb";
      }
    }
  });
  function temperature2rgb$1(arg0) {
    const result = arg0 / 100;
    if (result < 66) {
      let num2 = 0;
      if (result >= 6) {
        const diff = result - 2;
        num2 = -155.25485562709179 - 0.44596950469579133 * diff + 104.49216199393888 * log(diff);
      }
      let num8 = 0;
      if (result >= 20) {
        const diff1 = result - 10;
        num8 = 0.8274096064007395 * diff1 - 254.76935184120902 + 115.67994401066147 * log(diff1);
      }
      let num13 = 255;
      let num14 = num8;
      let diff4 = num2;
    } else {
      const diff2 = result - 55;
      num13 = 351.97690566805693 + 0.114206453784165 * diff2 - 40.25366309332127 * log(diff2);
      const diff3 = result - 50;
      diff4 = 325.4494125711974 + 0.07943456536662342 * diff3 - 28.0852963507957 * log(diff3);
      num14 = 255;
    }
    const items = [num13, diff4, num14, 1];
    return items;
  }
  unpack = obj.unpack;
  round = Math.round;
  function rgb2temperature$1(_rgb) {
    let result;
    let tmp10;
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    unpack(items, "rgb");
    let num = 1000;
    let num2 = 40000;
    do {
      let tmp7 = closure_135;
      result = 0.5 * (num2 + num);
      let tmp9 = closure_135(result);
      tmp10 = result;
      if (tmp9[2] / tmp9[0] >= tmp6 / tmp5) {
        tmp10 = num;
        num2 = result;
      }
      num = tmp10;
    } while (num2 - tmp10 > 0.4);
    return round(result);
  }
  const fn = function() {
    return rgb2temperature$1(this._rgb);
  };
  Color.prototype.temperature = fn;
  Color.prototype.kelvin = fn;
  Color.prototype.temp = fn;
  const fn2 = () => {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const items1 = [true];
    let applyResult = bind.apply(Color, items1.concat(items, ["<string:73487360>"]));
    applyResult = new applyResult();
    return applyResult;
  };
  chroma$k.temperature = fn2;
  chroma$k.kelvin = fn2;
  chroma$k.temp = fn2;
  obj.format.temperature = temperature2rgb$1;
  obj.format.kelvin = temperature2rgb$1;
  obj.format.temp = temperature2rgb$1;
  unpack = obj.unpack;
  pow = Math.pow;
  function rgb2oklab$2(_rgb, arg1, arg2) {
    let tmp3;
    let tmp5;
    let tmp6;
    let tmp7;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const tmp4 = unpack(items, "rgb");
    const items1 = [rgb2lrgb(tmp4[0] / 255), rgb2lrgb(tmp4[1] / 255), rgb2lrgb(tmp4[2] / 255)];
    [tmp5, tmp6, tmp7] = items1;
    const tmp8 = cbrt(0.4122214708 * tmp5 + 0.5363325363 * tmp6 + 0.0514459929 * tmp7);
    const tmp9 = cbrt(0.2119034982 * tmp5 + 0.6806995451 * tmp6 + 0.1073969566 * tmp7);
    const tmp10 = cbrt(0.0883024619 * tmp5 + 0.2817188376 * tmp6 + 0.6299787005 * tmp7);
    const items2 = [0.2104542553 * tmp8 + 0.793617785 * tmp9 - 0.0040720468 * tmp10, 1.9779984951 * tmp8 - 2.428592205 * tmp9 + 0.4505937099 * tmp10, 0.0259040371 * tmp8 + 0.7827717662 * tmp9 - 0.808675766 * tmp10];
    return items2;
  }
  unpack = obj.unpack;
  pow = Math.pow;
  sign = Math.sign;
  function oklab2rgb$1(arg0, arg1, arg2) {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const arr2 = unpack(items, "lab");
    const first = arr2[0];
    let num = 1;
    const tmp7 = pow(first + 0.3963377774 * arr2[1] + 0.2158037573 * arr2[2], 3);
    const tmp8 = pow(first - 0.1055613458 * arr2[1] - 0.0638541728 * arr2[2], 3);
    const tmp9 = pow(first - 0.0894841775 * arr2[1] - 1.291485548 * arr2[2], 3);
    const items1 = [255 * lrgb2rgb(4.0767416621 * tmp7 - 3.3077115913 * tmp8 + 0.2309699292 * tmp9), 255 * lrgb2rgb(-1.2684380046 * tmp7 + 2.6097574011 * tmp8 - 0.3413193965 * tmp9), 255 * lrgb2rgb(-0.0041960863 * tmp7 - 0.7034186147 * tmp8 + 1.707614701 * tmp9), ];
    if (arr2.length > 3) {
      num = arr2[3];
    }
    items1[3] = num;
    return items1;
  }
  ({ unpack: closure_147, type: closure_148 } = obj);
  chroma$k.oklab = () => {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const items1 = [true];
    let applyResult = bind.apply(Color, items1.concat(items, ["isBoostOnly"]));
    applyResult = new applyResult();
    return applyResult;
  };
  obj.format.oklab = oklab2rgb$1;
  const autodetect11 = obj.autodetect;
  autodetect11.push({
    p: 3,
    test() {
      let tmp3;
      const items = [];
      const tmp = +arguments.length;
      let diff = tmp - 1;
      if (tmp) {
        do {
          items[diff] = arguments[diff];
          tmp3 = +diff;
          diff = tmp3 - 1;
        } while (tmp3);
      }
      const arr2 = callback33(items, "oklab");
      if ("array" === callback34(arr2)) {
        if (3 === arr2.length) {
          return "oklab";
        }
      }
    }
  });
  unpack = obj.unpack;
  unpack = obj.unpack;
  ({ unpack: closure_157, type: closure_158 } = obj);
  function rgb2oklch$1(_rgb) {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const tmp4 = unpack(items, "rgb");
    const tmp5 = rgb2oklab$2(tmp4[0], tmp4[1], tmp4[2]);
    return lab2lch$2(tmp5[0], tmp5[1], tmp5[2]);
  }
  chroma$k.oklch = () => {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const items1 = [true];
    let applyResult = bind.apply(Color, items1.concat(items, []));
    applyResult = new applyResult();
    return applyResult;
  };
  obj.format.oklch = function oklch2rgb() {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const arr2 = unpack(items, "lch");
    let num = 1;
    const tmp4 = lch2lab$2(arr2[0], arr2[1], arr2[2]);
    const items1 = [, , , ];
    [arr3[0], arr3[1], arr3[2]] = oklab2rgb$1(tmp4[0], tmp4[1], tmp4[2]);
    if (arr2.length > 3) {
      num = arr2[3];
    }
    items1[3] = num;
    return items1;
  };
  const autodetect12 = obj.autodetect;
  autodetect12.push({
    p: 3,
    test() {
      let tmp3;
      const items = [];
      const tmp = +arguments.length;
      let diff = tmp - 1;
      if (tmp) {
        do {
          items[diff] = arguments[diff];
          tmp3 = +diff;
          diff = tmp3 - 1;
        } while (tmp3);
      }
      const arr2 = callback35(items, "oklch");
      if ("array" === callback36(arr2)) {
        if (3 === arr2.length) {
          return "oklch";
        }
      }
    }
  });
  type = obj.type;
  Color.prototype.darker = Color.prototype.darken;
  Color.prototype.brighter = Color.prototype.brighten;
  type = obj.type;
  pow = Math.pow;
  function rgb2luminance(arg0, arg1, arg2) {
    const result = 0.2126 * luminance_x(arg0);
    const result1 = 0.7152 * luminance_x(arg1);
    return result + result1 + 0.0722 * luminance_x(arg2);
  }
  function luminance_x(arg0) {
    const result = arg0 / 255;
    if (result <= 0.03928) {
      let result1 = result / 12.92;
    } else {
      result1 = pow((result + 0.055) / 1.055, 2.4);
    }
    return result1;
  }
  const obj16 = {};
  type = obj.type;
  function mix$1(arg0, arg1, arg2) {
    let tmp3;
    let num = arg2;
    if (undefined === arg2) {
      num = 0.5;
    }
    const items = [];
    const diff = arguments.length - 3;
    let diff1 = diff - 1;
    if (diff > 0) {
      do {
        items[diff1] = arguments[diff1 + 3];
        tmp3 = +diff1;
        diff1 = tmp3 - 1;
      } while (tmp3 > 0);
    }
    let first = items[0] || "lrgb";
    if (!tmp5) {
      const _Object = Object;
      first = Object.keys(obj16)[0];
    }
    if (obj16[first]) {
      let obj = arg0;
      if ("object" !== type(arg0)) {
        const prototype2 = Color.prototype;
        obj = new Color(arg0);
      }
      let obj2 = arg1;
      if ("object" !== type(arg1)) {
        const prototype3 = Color.prototype;
        obj2 = new Color(arg1);
      }
      const obj3 = obj16[first](obj, obj2, num);
      const alphaResult = obj.alpha();
      return obj3.alpha(alphaResult + num * (obj2.alpha() - obj.alpha()));
    } else {
      const _Error = Error;
      const error = new Error("interpolation mode " + first + " is not defined");
      throw error;
    }
    const tmp5 = obj16[first] || items.length;
  }
  const fn3 = function(arg0, arg1) {
    let tmp3;
    let num = arg1;
    if (undefined === arg1) {
      num = 0.5;
    }
    const items = [];
    const diff = arguments.length - 2;
    let diff1 = diff - 1;
    if (diff > 0) {
      do {
        items[diff1] = arguments[diff1 + 2];
        tmp3 = +diff1;
        diff1 = tmp3 - 1;
      } while (tmp3 > 0);
    }
    const items1 = [this, arg0, num];
    return mix$1.apply(undefined, items1.concat(items));
  };
  Color.prototype.interpolate = fn3;
  Color.prototype.mix = fn3;
  type = obj.type;
  obj16.rgb = function rgb(red, green, blue, arg3) {
    const _rgb = red._rgb;
    const _rgb2 = green._rgb;
    return new Color(_rgb[0] + blue * (_rgb2[0] - _rgb[0]), _rgb[1] + blue * (_rgb2[1] - _rgb[1]), _rgb[2] + blue * (_rgb2[2] - _rgb[2]), "rgb");
  };
  sqrt = Math.sqrt;
  pow = Math.pow;
  obj16.lrgb = function lrgb(_rgb, _rgb2) {
    let tmp;
    let tmp2;
    let tmp3;
    _rgb = _rgb._rgb;
    [tmp, tmp2, tmp3] = _rgb2._rgb;
    const result = pow(_rgb[0], 2) * (1 - arg2);
    const result1 = pow(_rgb[1], 2) * (1 - arg2);
    const tmp5 = sqrt(result + pow(tmp, 2) * arg2);
    const result2 = pow(_rgb[2], 2) * (1 - arg2);
    const tmp7 = sqrt(result1 + pow(tmp2, 2) * arg2);
    return new Color(tmp5, sqrt(result1 + pow(tmp2, 2) * arg2), sqrt(result2 + pow(tmp3, 2) * arg2), "rgb");
  };
  obj16.lab = function lab(lab, lab2) {
    const labResult = lab.lab();
    const labResult1 = lab2.lab();
    return new Color(labResult[0] + arg2 * (labResult1[0] - labResult[0]), labResult[1] + arg2 * (labResult1[1] - labResult[1]), labResult[2] + arg2 * (labResult1[2] - labResult[2]), "lab");
  };
  function _hsx(hsl, hsl2, sharedValue2, hcg) {
    let tmp10;
    let tmp5;
    let tmp6;
    let tmp7;
    let tmp8;
    if ("hsl" === hcg) {
      let hslResult = hsl.hsl();
      let hslResult1 = hsl2.hsl();
      let str4 = hcg;
    } else if ("hsv" === hcg) {
      hslResult = hsl.hsv();
      hslResult1 = hsl2.hsv();
      str4 = hcg;
    } else if ("hcg" === hcg) {
      hslResult = hsl.hcg();
      hslResult1 = hsl2.hcg();
      str4 = hcg;
    } else if ("hsi" === hcg) {
      hslResult = hsl.hsi();
      hslResult1 = hsl2.hsi();
      str4 = hcg;
    } else {
      if ("lch" !== hcg) {
        if ("hcl" !== hcg) {
          str4 = hcg;
          if ("oklch" === hcg) {
            hslResult = hsl.oklch().reverse();
            const oklchResult = hsl.oklch();
            hslResult1 = hsl2.oklch().reverse();
            str4 = hcg;
            const oklchResult1 = hsl2.oklch();
          }
        }
      }
      hslResult = hsl.hcl();
      hslResult1 = hsl2.hcl();
      str4 = "hcl";
    }
    let tmp3 = "h" !== str4.substr(0, 1);
    if (tmp3) {
      tmp3 = "oklch" !== str4;
    }
    if (!tmp3) {
      [tmp5, tmp7] = hslResult;
      [tmp6, tmp8, tmp10] = hslResult1;
    }
    if (!isNaN(undefined)) {
      const _isNaN = isNaN;
      if (!isNaN(tmp6)) {
        if (tmp6 > tmp5) {
          if (tmp6 - tmp5 > 180) {
            let diff = tmp6 - (tmp5 + 360);
          }
          let _NaN = tmp5 + sharedValue2 * diff;
        }
        if (tmp6 < tmp5) {
          if (tmp5 - tmp6 > 180) {
            diff = tmp6 + 360 - tmp5;
          }
        }
        diff = tmp6 - tmp5;
      }
      if (undefined === sum) {
        let sum = tmp7 + sharedValue2 * (tmp8 - tmp7);
      }
      const sum1 = tmp9 + sharedValue2 * (tmp10 - tmp9);
      let tmp16 = Color;
      if ("oklch" === str4) {
        const items = [sum1, sum, _NaN];
        let items1 = items;
      } else {
        items1 = [_NaN, sum, sum1];
      }
      const prototype = tmp16.prototype;
      tmp16 = new tmp16(items1, str4);
      return tmp16;
    }
    if (isNaN(undefined)) {
      const _isNaN2 = isNaN;
      if (isNaN(tmp6)) {
        const _Number = Number;
        _NaN = Number.NaN;
      } else {
        let tmp14 = 1 != tmp9 && 0 != tmp9;
        if (!tmp14) {
          tmp14 = "hsv" == str4;
        }
        _NaN = tmp6;
        if (!tmp14) {
          sum = tmp8;
          _NaN = tmp6;
        }
      }
    } else {
      let tmp13 = 1 != tmp10 && 0 != tmp10;
      if (!tmp13) {
        tmp13 = "hsv" == str4;
      }
      _NaN = tmp5;
      if (!tmp13) {
        sum = tmp7;
        _NaN = tmp5;
      }
    }
  }
  function lch(hsl, hsl2, sharedValue2) {
    return _hsx(hsl, hsl2, sharedValue2, "lch");
  }
  obj16.lch = lch;
  obj16.hcl = lch;
  obj16.num = function num(TransitionItem, items) {
    const numResult = TransitionItem.num();
    return new Color(numResult + arg2 * (items.num() - numResult), "num");
  };
  obj16.hcg = function hcg(hsl, hsl2, sharedValue2) {
    return _hsx(hsl, hsl2, sharedValue2, "hcg");
  };
  obj16.hsi = function hsi(hsl, hsl2, sharedValue2) {
    return _hsx(hsl, hsl2, sharedValue2, "hsi");
  };
  obj16.hsl = function hsl(sharedValue, value, value1) {
    return _hsx(sharedValue, value, value1, "hsl");
  };
  obj16.hsv = function hsv(value, value2, sharedValue2) {
    return _hsx(value, value2, sharedValue2, "hsv");
  };
  obj16.oklab = function oklab(oklab, oklab2) {
    const oklabResult = oklab.oklab();
    const oklabResult1 = oklab2.oklab();
    return new Color(oklabResult[0] + arg2 * (oklabResult1[0] - oklabResult[0]), oklabResult[1] + arg2 * (oklabResult1[1] - oklabResult[1]), oklabResult[2] + arg2 * (oklabResult1[2] - oklabResult[2]), "oklab");
  };
  obj16.oklch = function oklch(hsl, hsl2, sharedValue2) {
    return _hsx(hsl, hsl2, sharedValue2, "oklch");
  };
  const clip_rgb = obj.clip_rgb;
  pow = Math.pow;
  sqrt = Math.sqrt;
  PI = Math.PI;
  cos = Math.cos;
  sin = Math.sin;
  atan2 = Math.atan2;
  function _average_lrgb(mapped1, arg1) {
    let length;
    const items = ["<string:1014759426>", "<string:340852738>", "<string:1612335631>", "<string:1612447746>"];
    let num = 0;
    if (0 < mapped1.length) {
      do {
        let result = arg1[num] / tmp;
        let _rgb = mapped1[num]._rgb;
        let tmp3 = closure_195;
        items[0] = items[0] + closure_195(_rgb[0], 2) * result;
        let tmp4 = closure_195;
        items[1] = items[1] + closure_195(_rgb[1], 2) * result;
        let tmp5 = closure_195;
        items[2] = items[2] + closure_195(_rgb[2], 2) * result;
        items[3] = items[3] + _rgb[3] * result;
        num = num + 1;
        length = mapped1.length;
      } while (num < length);
    }
    items[0] = sqrt(items[0]);
    items[1] = sqrt(items[1]);
    items[2] = sqrt(items[2]);
    if (items[3] > 0.9999999) {
      items[3] = 1;
    }
    return new Color(clip_rgb(items));
  }
  type = obj.type;
  pow = Math.pow;
  function scale$2(items) {
    let closure_0 = "rgb";
    let closure_1 = chroma$k("#ccc");
    let closure_2 = 0;
    let closure_3 = ["replace", "then"];
    let closure_4 = [];
    let closure_5 = ["<string:53040003>", "<string:806589490>"];
    let closure_6 = false;
    let closure_7 = [];
    let closure_8 = false;
    let closure_9 = 0;
    let closure_10 = 1;
    let closure_11 = false;
    let closure_12 = {};
    let closure_13 = true;
    let closure_14 = 1;
    function setColors(items) {
      let length;
      let length2;
      if (!items) {
        items = [];
      }
      let brewer = items;
      if (items) {
        brewer = "string" === callback(items);
      }
      if (brewer) {
        brewer = Animated.brewer;
      }
      if (brewer) {
        brewer = Animated.brewer[items.toLowerCase(items)];
      }
      let arr2 = items;
      if (brewer) {
        arr2 = Animated.brewer[items.toLowerCase(items)];
      }
      let tmp5 = arr2;
      if ("array" === callback(arr2)) {
        let arr4 = arr2;
        if (1 === arr2.length) {
          const items1 = [arr2[0], arr2[0]];
          arr4 = items1;
        }
        const substr = arr4.slice(0);
        let num3 = 0;
        if (0 < substr.length) {
          do {
            let tmp6 = closure_202;
            substr[num3] = closure_202(substr[num3]);
            num3 = num3 + 1;
            length = substr.length;
          } while (num3 < length);
        }
        closure_4.length = 0;
        let num4 = 0;
        tmp5 = substr;
        if (0 < substr.length) {
          do {
            let tmp8 = closure_4;
            let arr = closure_4.push(num4 / (substr.length - 1));
            num4 = num4 + 1;
            tmp5 = substr;
            length2 = substr.length;
          } while (num4 < length2);
        }
      }
      resetCache();
      let closure_7 = tmp5;
      return tmp5;
    }
    const rgb2cmyk$1 = setColors;
    function tMapLightness(arg0) {
      return arg0;
    }
    function tMapDomain(arg0) {
      return arg0;
    }
    function getColor(arg0) {
      let flag = arg1;
      if (null == arg1) {
        flag = false;
      }
      if (!isNaN(arg0)) {
        if (null !== arg0) {
          let result = arg0;
          if (!flag) {
            if (closure_6) {
              if (closure_6.length > 2) {
                let num4 = 0;
                if (null != closure_6) {
                  const diff = closure_6.length - 1;
                  let num6 = 0;
                  if (0 < diff) {
                    let num7 = 0;
                    num6 = 0;
                    if (arg0 >= closure_6[0]) {
                      const sum = num7 + 1;
                      num6 = sum;
                      while (sum < diff) {
                        let tmp14 = closure_6;
                        num7 = sum;
                        num6 = sum;
                        if (arg0 < closure_6[sum]) {
                          break;
                        }
                      }
                    }
                  }
                  num4 = num6 - 1;
                }
                result = num4 / (closure_6.length - 2);
              }
            }
            let num2 = 1;
            if (closure_10 !== closure_9) {
              num2 = (arg0 - closure_9) / (closure_10 - closure_9);
            }
            result = num2;
          }
          const tmp17 = tMapDomain(result);
          let tmp18 = tmp17;
          if (!flag) {
            tmp18 = tMapLightness(tmp17);
          }
          let tmp21 = tmp18;
          if (1 !== closure_14) {
            tmp21 = callback2(tmp18, closure_14);
          }
          const _Math = Math;
          const _Math2 = Math;
          const bound = Math.min(1, Math.max(0, closure_5[0] + tmp21 * (1 - closure_5[0] - closure_5[1])));
          const _Math3 = Math;
          const rounded = Math.floor(10000 * bound);
          if (closure_13) {
            if (closure_12[rounded]) {
              let tmp52 = closure_12[rounded];
            }
            return tmp52;
          }
          if ("array" === callback(arr2)) {
            let num11 = 0;
            if (0 < arr.length) {
              while (bound > arr[num11]) {
                if (bound >= tmp38) {
                  let tmp40 = arr;
                  if (num11 === arr.length - 1) {
                    let tmp49 = arr2;
                    let interpolateResult = arr2[num11];
                  }
                }
                if (bound > tmp38) {
                  let tmp41 = arr;
                  if (bound < arr[num11 + 1]) {
                    let tmp43 = arr;
                    let tmp44 = Animated;
                    let tmp45 = arr2;
                    let tmp46 = arr2;
                    let tmp47 = closure_0;
                    let tmp48 = Animated;
                    interpolateResult = Animated.interpolate(arr2[num11], arr2[num11 + 1], (bound - tmp38) / (arr[num11 + 1] - tmp38), closure_0);
                  }
                }
                num11 = num11 + 1;
                let tmp42 = arr;
              }
              interpolateResult = arr2[num11];
            }
          } else if ("function" === callback(arr2)) {
            interpolateResult = arr2(bound);
          }
          tmp52 = interpolateResult;
          if (closure_13) {
            closure_12[rounded] = interpolateResult;
            tmp52 = interpolateResult;
          }
        }
      }
      return closure_1;
    }
    function resetCache() {
      const obj = {};
      let closure_12 = obj;
      return obj;
    }
    setColors(items);
    const fn = function f(arg0) {
      const tmp = Animated(getColor(arg0));
      let tmp2 = tmp;
      if (closure_8) {
        tmp2 = tmp;
        if (tmp[closure_8]) {
          tmp2 = tmp[closure_8]();
        }
      }
      return tmp2;
    };
    fn.classes = (arg0) => {
      if (null != arg0) {
        if ("array" === callback(arg0)) {
          let closure_6 = arg0;
          const items = [arg0[0], arg0[arg0.length - 1]];
          let closure_3 = items;
        } else {
          const analyzeResult = Animated.analyze(closure_3);
          if (0 === arg0) {
            const items1 = [, ];
            ({ min: arr[0], max: arr[1] } = analyzeResult);
            let limitsResult = items1;
          } else {
            limitsResult = Animated.limits(analyzeResult, "e", arg0);
          }
          closure_6 = limitsResult;
        }
        return fn;
      } else {
        return closure_6;
      }
    };
    fn.domain = (arr) => {
      let length2;
      let closure_0 = arr;
      if (arguments.length) {
        let closure_9 = arr[0];
        let closure_10 = arr[arr.length - 1];
        arr = [];
        if (arr.length === arr2.length) {
          if (closure_9 !== closure_10) {
            const _Array = Array;
            arr = Array.from(arr);
            let num5 = 0;
            if (0 < arr.length) {
              do {
                let tmp8 = closure_4;
                let tmp9 = closure_9;
                let tmp10 = closure_10;
                let tmp11 = closure_9;
                arr = closure_4.push((arr[num5] - closure_9) / (closure_10 - closure_9));
                num5 = num5 + 1;
                length2 = arr.length;
              } while (num5 < length2);
            }
          }
          const items = [closure_9, closure_10];
          let closure_3 = items;
          return fn;
        }
        for (let num3 = 0; num3 < length; num3 = num3 + 1) {
          let tmp5 = arr;
          arr = arr.push(num3 / (length - 1));
        }
        if (arr.length > 2) {
          let closure_1 = arr.map((arg0, arg1) => arg1 / (arg0.length - 1));
          const mapped = arr.map((arg0) => (arg0 - closure_9) / (closure_10 - closure_9));
          let closure_2 = mapped;
          if (!mapped.every((arg0, arg1) => closure_1[arg1] === arg0)) {
            function tMapDomain(arg0) {
              let tmp3;
              if (arg0 > 0) {
                if (arg0 < 1) {
                  let num = 0;
                  let num2 = 0;
                  if (arg0 >= mapped[1]) {
                    do {
                      let sum = num + 1;
                      let tmp2 = closure_2;
                      num = sum;
                      num2 = sum;
                      tmp3 = closure_2[sum + 1];
                    } while (arg0 >= tmp3);
                  }
                  return closure_1[num2] + (arg0 - mapped[num2]) / (mapped[num2 + 1] - mapped[num2]) * (closure_1[num2 + 1] - closure_1[num2]);
                }
              }
              return arg0;
            }
          }
        }
      } else {
        return closure_3;
      }
    };
    fn.mode = (arg0) => {
      if (arguments.length) {
        let closure_0 = arg0;
        resetCache();
        let tmp = fn;
      } else {
        tmp = closure_0;
      }
      return tmp;
    };
    fn.range = (items) => {
      setColors(items);
      return fn;
    };
    fn.out = (arg0) => {
      let closure_8 = arg0;
      return fn;
    };
    fn.spread = (arg0) => {
      if (arguments.length) {
        let closure_2 = arg0;
        let tmp = fn;
      } else {
        tmp = closure_2;
      }
      return tmp;
    };
    fn.correctLightness = (arg0) => {
      let flag = arg0;
      if (null == arg0) {
        flag = true;
      }
      let closure_11 = flag;
      resetCache();
      let closure_16 = closure_11 ? function tMapLightness(arg0) {
        const first = callback(0, true).lab()[0];
        let num = 1;
        const obj = callback(0, true);
        const first1 = callback(1, true).lab()[0];
        const obj2 = callback(1, true);
        const tmp3 = first > first1;
        const sum = first + (first1 - first) * arg0;
        const diff = callback(arg0, true).lab()[0] - sum;
        let num2 = 19;
        let tmp6 = arg0;
        let tmp7 = diff;
        let num3 = 0;
        let tmp8 = arg0;
        if (Math.abs(diff) > 0.01) {
          while (true) {
            let result = tmp7;
            if (tmp3) {
              result = tmp7 * -1;
            }
            if (result < 0) {
              let sum1 = tmp6 + 0.5 * (num - tmp6);
              num3 = tmp6;
              let tmp11 = num;
            } else {
              sum1 = tmp6 + 0.5 * (num3 - tmp6);
              tmp11 = tmp6;
            }
            let tmp12 = callback;
            let obj4 = callback(sum1, true);
            let diff1 = obj4.lab()[0] - sum;
            let _Math = Math;
            tmp8 = sum1;
            if (Math.abs(diff1) <= 0.01) {
              break;
            } else {
              let tmp14 = +num2;
              num2 = tmp14 - 1;
              tmp6 = sum1;
              tmp7 = diff1;
              num = tmp11;
              tmp8 = sum1;
              if (tmp14 <= 0) {
                break;
              }
            }
          }
        }
        return tmp8;
      } : function tMapLightness(arg0) {
        return arg0;
      };
      return fn;
    };
    fn.padding = (arg0) => {
      if (null != arg0) {
        let tmp3 = arg0;
        if ("number" === callback(arg0)) {
          const items = [arg0, arg0];
          tmp3 = items;
        }
        let closure_5 = tmp3;
        let tmp = fn;
      } else {
        tmp = closure_5;
      }
      return tmp;
    };
    fn.colors = (arg0, arg1) => {
      let tmp7;
      let str = arg1;
      let closure_0 = arg0;
      let closure_1 = arg1;
      if (arguments.length < 2) {
        closure_1 = "hex";
        str = "hex";
      }
      if (0 === arguments.length) {
        let substr = arr2.slice(0);
      } else if (1 === arg0) {
        const items = [fn(0.5)];
        substr = items;
      } else if (arg0 > 1) {
        const first = closure_3[0];
        let closure_2 = first;
        closure_3 = closure_3[1] - first;
        const items1 = [];
        let num3 = 0;
        if (0 < arg0 ? 0 < arg0 : 0 > arg0) {
          do {
            let arr = items1.push(num3);
            let tmp13 = num3;
            num3 = tmp11 ? num3 + 1 : num3 - 1;
          } while (tmp11 ? num3 < arg0 : num3 > arg0);
        }
        substr = items1.map((arg0) => callback(first + arg0 / (arg0 - 1) * closure_3));
      } else {
        const items2 = [];
        if (closure_6) {
          if (closure_6.length > 2) {
            let num2 = 1;
            arr = items2;
            if (1 <= closure_6.length ? 1 < closure_6.length : 1 > closure_6.length) {
              do {
                let tmp4 = closure_6;
                let tmp5 = closure_6;
                arr = items2.push(0.5 * (closure_6[num2 - 1] + closure_6[num2]));
                tmp7 = tmp3 ? num2 + 1 : num2 - 1;
                num2 = tmp7;
                arr = items2;
              } while (tmp3 ? tmp7 < length : tmp7 > length);
            }
          }
          substr = arr.map((arg0) => callback(arg0));
        }
        arr = closure_3;
      }
      let mapped = substr;
      if (closure_202[str]) {
        mapped = substr.map((arg0) => arg0[closure_1]());
      }
      return mapped;
    };
    fn.cache = (arg0) => {
      if (null != arg0) {
        let closure_13 = arg0;
        let tmp = fn;
      } else {
        tmp = closure_13;
      }
      return tmp;
    };
    fn.gamma = (arg0) => {
      if (null != arg0) {
        let closure_14 = arg0;
        let tmp = fn;
      } else {
        tmp = closure_14;
      }
      return tmp;
    };
    fn.nodata = (arg0) => {
      if (null != arg0) {
        let closure_1 = Animated(arg0);
        let tmp = fn;
      } else {
        tmp = closure_1;
      }
      return tmp;
    };
    return fn;
  }
  function blend(arg0, arg1, arg2) {
    if (blend[arg2]) {
      return blend[arg2](arg0, arg1);
    } else {
      const _Error = Error;
      const error = new Error("unknown blend mode " + arg2);
      throw error;
    }
  }
  function blend_f(arg0) {
    const limit$2 = arg0;
    return (arg0, arg1) => {
      const obj = lib(arg1);
      const rgbResult = lib(arg1).rgb();
      return lib.rgb(arg0(rgbResult, lib(arg0).rgb()));
    };
  }
  function each(closure_30, disambiguateEmoji) {
    const limit$2 = closure_30;
    return (arg0, arg1) => {
      const items = [arg0(arg0[0], arg1[0]), arg0(arg0[1], arg1[1]), arg0(arg0[2], arg1[2])];
      return items;
    };
  }
  blend.normal = blend_f(each(function normal(arg0) {
    return arg0;
  }));
  blend.multiply = blend_f(each(function multiply(arg0, arg1) {
    return arg0 * arg1 / 255;
  }));
  blend.screen = blend_f(each(function screen(arg0) {
    return 255 * (1 - (1 - arg0 / 255) * (1 - arg1 / 255));
  }));
  blend.overlay = blend_f(each(function overlay(arg0, arg1) {
    if (arg1 < 128) {
      let result = 2 * arg0 * arg1 / 255;
    } else {
      result = 255 * (1 - 2 * (1 - arg0 / 255) * (1 - arg1 / 255));
    }
    return result;
  }));
  blend.darken = blend_f(each(function darken(arg0, arg1) {
    let tmp = arg0;
    if (arg0 > arg1) {
      tmp = arg1;
    }
    return tmp;
  }));
  blend.lighten = blend_f(each(function lighten(arg0, arg1) {
    let tmp = arg1;
    if (arg0 > arg1) {
      tmp = arg0;
    }
    return tmp;
  }));
  blend.dodge = blend_f(each(function dodge(arg0, arg1) {
    let num = 255;
    if (255 !== arg0) {
      const result = arg1 / 255 * 255 / (1 - arg0 / 255);
      num = 255;
      if (result <= 255) {
        num = result;
      }
    }
    return num;
  }));
  blend.burn = blend_f(each(function burn(arg0, arg1) {
    return 255 * (1 - (1 - arg1 / 255) / (arg0 / 255));
  }));
  ({ type: closure_209, clip_rgb: closure_210, TWOPI: closure_211 } = obj);
  pow = Math.pow;
  sin = Math.sin;
  cos = Math.cos;
  floor = Math.floor;
  log = Math.log;
  pow = Math.pow;
  floor = Math.floor;
  function analyze(analyzeResult) {
    let closure_0 = arg1;
    if (undefined === arg1) {
      closure_0 = null;
    }
    const obj = { min: Number.MAX_VALUE, max: -1 * Number.MAX_VALUE, sum: 0, values: [], count: 0 };
    let values = analyzeResult;
    if ("object" === type$p(analyzeResult)) {
      const _Object = Object;
      values = Object.values(analyzeResult);
    }
    const item = values.forEach((arg0) => {
      let tmp = closure_0;
      if (closure_0) {
        tmp = "object" === callback(arg0);
      }
      let tmp3 = arg0;
      if (tmp) {
        tmp3 = arg0[closure_0];
      }
      let isNaNResult = null == tmp3;
      if (!isNaNResult) {
        const _isNaN = isNaN;
        isNaNResult = isNaN(tmp3);
      }
      if (!isNaNResult) {
        const values = obj.values;
        values.push(tmp3);
        obj.sum = obj.sum + tmp3;
        if (tmp3 < obj.min) {
          obj.min = tmp3;
        }
        if (tmp3 > obj.max) {
          obj.max = tmp3;
        }
        obj.count = obj.count + 1;
      }
    });
    const items = [, ];
    ({ min: arr2[0], max: arr2[1] } = obj);
    obj.domain = items;
    obj.limits = (arg0, arg1) => callback2(obj, arg0, arg1);
    return obj;
  }
  function limits(analyzeResult, arg1, arg2) {
    let flag;
    let max;
    let min;
    let values;
    let str = arg1;
    let num = arg2;
    if (undefined === arg1) {
      str = "equal";
    }
    if (undefined === num) {
      num = 7;
    }
    let tmp = analyzeResult;
    if ("array" == type$p(analyzeResult)) {
      tmp = analyze(analyzeResult);
    }
    ({ min, max, values } = tmp);
    const sorted = values.sort((arg0, arg1) => arg0 - arg1);
    let num2 = 1;
    if (1 === num) {
      const items = [min, max];
      return items;
    } else {
      const items1 = [];
      if ("c" === str.substr(0, num2)) {
        items1.push(min);
        items1.push(max);
      }
      if ("e" === str.substr(0, num2)) {
        let arr1 = items1.push(min);
        while (num2 < num) {
          let arr2 = items1.push(min + num2 / num * (max - min));
          num2 = num2 + 1;
        }
        items1.push(max);
      } else if ("l" === str.substr(0, num2)) {
        if (min <= 0) {
          const _Error = Error;
          const error = new Error("Logarithmic scales are only possible for values > 0");
          throw error;
        } else {
          const _Math = Math;
          const result = Math.LOG10E * log(min);
          const _Math2 = Math;
          const result1 = Math.LOG10E * log(max);
          items1.push(min);
          for (let sum = num2; sum < num; sum = sum + 1) {
            let tmp46 = pow;
            let arr5 = items1.push(pow(10, result + sum / num * (result1 - result)));
          }
          items1.push(max);
        }
      } else if ("q" === str.substr(0, num2)) {
        items1.push(min);
        for (let sum1 = num2; sum1 < num; sum1 = sum1 + 1) {
          let result2 = (sorted.length - num2) * sum1 / num;
          let tmp40 = floor;
          let tmp41 = floor(result2);
          if (tmp41 === result2) {
            let arr8 = items1.push(sorted[tmp41]);
          } else {
            let diff = result2 - tmp41;
            let arr9 = items1.push(sorted[tmp41] * (num2 - diff) + sorted[tmp41 + num2] * diff);
          }
        }
        items1.push(max);
      } else if ("k" === str.substr(0, num2)) {
        const _Array2 = Array;
        let array = new Array(length);
        const _Array3 = Array;
        array = new Array(num);
        const items2 = [];
        items2.push(min);
        for (let sum2 = num2; sum2 < num; sum2 = sum2 + 1) {
          let arr12 = items2.push(min + sum2 / num * (max - min));
        }
        items2.push(max);
        let num4 = 0;
        let tmp9 = items2;
        do {
          for (let num5 = 0; num5 < num; num5 = num5 + 1) {
            array[num5] = 0;
          }
          let num6 = 0;
          let tmp11 = tmp10;
          if (0 < length) {
            do {
              let tmp12 = sorted[num6];
              let _Number = Number;
              let num7 = 0;
              let tmp14 = MAX_VALUE;
              let tmp15;
              let num8 = 0;
              if (0 < num) {
                do {
                  let tmp16 = closure_223;
                  let tmp17 = closure_223(tmp9[num7] - tmp12);
                  if (tmp17 < MAX_VALUE) {
                    MAX_VALUE = tmp17;
                    let tmp13 = num7;
                  }
                  array[tmp13] = array[tmp13] + 1;
                  array[num6] = tmp13;
                  num7 = num7 + 1;
                  tmp14 = MAX_VALUE;
                  tmp15 = tmp13;
                  tmp11 = tmp17;
                  num8 = num7;
                } while (num7 < num);
              }
              num6 = num6 + 1;
              let tmp18 = tmp14;
              let tmp19 = tmp15;
              let tmp20 = num8;
              let tmp21 = tmp12;
              let tmp10 = tmp11;
            } while (num6 < length);
          }
          let _Array = Array;
          let tmp22 = new.target;
          let tmp23 = new.target;
          let tmp24 = num;
          let array1 = new Array(num);
          let tmp26 = array1;
          for (let num9 = 0; num9 < num; num9 = num9 + 1) {
            array1[num9] = null;
          }
          let num10 = 0;
          if (0 < length) {
            do {
              let tmp27 = array[num10];
              if (null === array1[tmp27]) {
                array1[tmp27] = sorted[num10];
              } else {
                array1[tmp27] = array1[tmp27] + sorted[num10];
              }
              num10 = num10 + 1;
              let tmp28 = tmp27;
            } while (num10 < length);
          }
          for (let num11 = 0; num11 < num; num11 = num11 + 1) {
            array1[num11] = array1[num11] * (num2 / array[num11]);
          }
          let num12 = 0;
          flag = false;
          if (0 < num) {
            flag = true;
            while (array1[num12] === tmp9[num12]) {
              num12 = num12 + 1;
              flag = false;
              if (num12 >= num) {
                break;
              }
            }
          }
          num4 = num4 + 1;
          if (num4 > 200) {
            flag = false;
          }
          tmp9 = array1;
        } while (flag);
        const obj = {};
        for (let num13 = 0; num13 < num; num13 = num13 + 1) {
          obj[num13] = [];
        }
        for (let num14 = 0; num14 < length; num14 = num14 + 1) {
          arr1 = obj[array[num14]];
          let arr14 = arr1.push(sorted[num14]);
        }
        const items3 = [];
        for (let num15 = 0; num15 < num; num15 = num15 + 1) {
          let arr15 = items3.push(obj[num15][0]);
          let arr16 = items3.push(obj[num15][obj[num15].length - num2]);
        }
        const sorted1 = items3.sort((arg0, arg1) => arg0 - arg1);
        items1.push(sorted1[0]);
        for (let sum3 = num2; sum3 < sorted1.length; sum3 = sum3 + 2) {
          let tmp34 = sorted1[sum3];
          let _isNaN = isNaN;
          let tmp35 = isNaN(tmp34) || -1 !== items1.indexOf(tmp34);
          if (!tmp35) {
            let arr18 = items1.push(tmp34);
          }
        }
      }
      return items1;
    }
  }
  const obj17 = { analyze, limits };
  sqrt = Math.sqrt;
  pow = Math.pow;
  min = Math.min;
  max = Math.max;
  atan2 = Math.atan2;
  abs = Math.abs;
  cos = Math.cos;
  sin = Math.sin;
  PI = Math.PI;
  const obj19 = { OrRd: [], PuBu: [false, false, false, false, false, false, false, false, false], BuPu: [], Oranges: ["r", "isArray", "replace", "__packager_asset", "r", "isArray", "marginTop", "__packager_asset", "r"], BuGn: [], YlOrBr: [], YlGn: ["#ffffd9", "#edf8b1", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#253494", "#081d58"], Reds: [], RdPu: [], Greens: [], YlGnBu: ["Array", "Lq9Set", "r", "getQuestUrl", "r", "LOG10E", "GiftCardLeft3dIllustration", "mi", "AccountAgeTier6LargeBadge"], Purples: [false, false, false, false, false, false, false, false, false], GnBu: ["<string:4127195400>", "<string:973079103>", "<string:1224737175>", "#440154", "#482777", "#3f4a8a", "#31678e", "#26838f", null], Greys: [], YlOrRd: [], PuRd: [], Blues: [], PuBuGn: [], Viridis: [true, true, true, true, true, true, true, "<string:1204682753>", "<string:3572367362>"], Spectral: [true, true, true, true, true, true, true, true, true, true, "<string:1184563202>"], RdYlGn: [], RdBu: ["<string:822280194>", "<string:3635412993>", "<string:1055719425>", "<string:1229324290>", false, false, false, false, false, false, false], PiYG: ["<string:594739202>", "<string:1149370370>", "<string:1629945858>", "<string:83820545>", "<string:2722496514>", "<string:2315256201>", "<string:3388997911>", null, null, null, null], PRGn: [], RdYlBu: ["<string:3042330712>", "<string:1218838529>", "<string:1152450562>", "<string:1204944898>", "<string:209584130>", "<string:144113665>", "<string:1203634177>", "<string:3050700802>", "<string:2017525761>", "<string:1375732058>", "<string:1213757925>"], BrBG: [], RdGy: [], PuOr: [], Set2: [], Accent: [], Set1: [], Set3: [true, true, true, true, true, true, true, true, true, true, true, true], Dark2: [], Paired: ["<string:36133191>", "<string:18246656>", "<string:29002752>", "<string:33302016>", "<string:33415424>", "<string:30052352>", "<string:25937664>", "<string:1465663744>", "<string:122748929>", "<string:1135632645>", "left-pointing", "magnifying"], Pastel2: ["num", "rgb", "temp", "oklab", "oklch", 255, 255, 255], Pastel1: [] };
  const keys = Object.keys(obj19);
  let num2 = 0;
  if (0 < keys.length) {
    do {
      let str2 = keys[num2];
      obj19[str2.toLowerCase()] = obj19[str2];
      num2 = num2 + 1;
      length2 = keys.length;
    } while (num2 < length2);
  }
  chroma$k.average = function average(arr) {
    let str = arg1;
    let tmp = arg2;
    let closure_0 = arg1;
    let obj = arg2;
    if (undefined === arg1) {
      closure_0 = "lrgb";
      str = "lrgb";
    }
    if (undefined === tmp) {
      obj = null;
      tmp = null;
    }
    if (!tmp) {
      const _Array = Array;
      const _Array2 = Array;
      const array = new Array(length);
      arr = Array.from(array);
      const mapped = arr.map(() => 1);
      obj = mapped;
      tmp = mapped;
    }
    let closure_2 = length / tmp.reduce((arg0, arg1) => arg0 + arg1);
    const item = tmp.forEach((arg0, arg1) => {
      mapped[arg1] = mapped[arg1] * closure_2;
    });
    const mapped1 = arr.map((arg0) => new closure_193(arg0));
    if ("lrgb" === str) {
      return _average_lrgb(mapped1, tmp);
    } else {
      arr = mapped1.shift();
      const value = arr.get(str);
      const type$p = value;
      const items = [];
      let closure_5 = 0;
      let closure_6 = 0;
      for (let num2 = 0; num2 < value.length; num2 = num2 + 1) {
        let tmp11 = value[num2] || 0;
        value[num2] = tmp11 * tmp[0];
        let _isNaN = isNaN;
        let num = 0;
        if (!isNaN(value[num2])) {
          num = tmp[0];
        }
        arr = items.push(num);
        if ("h" === str.charAt(num2)) {
          let _isNaN2 = isNaN;
          if (!isNaN(value[num2])) {
            let tmp13 = PI;
            let result = value[num2] / 180 * PI;
            let tmp15 = closure_5;
            let tmp16 = cos;
            closure_5 = closure_5 + cos(result) * tmp[0];
            let tmp17 = closure_6;
            let tmp18 = sin;
            closure_6 = closure_6 + sin(result) * tmp[0];
          }
        }
      }
      let closure_7 = arr.alpha() * tmp[0];
      const item1 = mapped1.forEach((get) => {
        const value = get.get(closure_0);
        closure_7 = closure_7 + get.alpha() * mapped[arg1 + 1];
        let num = 0;
        if (0 < value.length) {
          do {
            let _isNaN = isNaN;
            if (!isNaN(value[num])) {
              let tmp2 = closure_4;
              let tmp3 = closure_1;
              closure_4[num] = closure_4[num] + closure_1[arg1 + 1];
              let tmp4 = closure_0;
              if ("h" === closure_0.charAt(num)) {
                let tmp7 = closure_197;
                let result = value[num] / 180 * closure_197;
                let tmp9 = closure_5;
                let tmp10 = closure_198;
                let tmp11 = closure_1;
                closure_5 = closure_5 + closure_198(result) * closure_1[arg1 + 1];
                let tmp12 = closure_6;
                let tmp13 = closure_199;
                let tmp14 = closure_1;
                closure_6 = closure_6 + closure_199(result) * closure_1[arg1 + 1];
              } else {
                let tmp5 = closure_3;
                let tmp6 = closure_1;
                closure_3[num] = closure_3[num] + value[num] * closure_1[arg1 + 1];
              }
            }
            num = num + 1;
            let tmp15 = closure_3;
          } while (num < closure_3.length);
        }
      });
      for (let num4 = 0; num4 < value.length; num4 = num4 + 1) {
        let tmp20 = num4;
        if ("h" === str.charAt(num4)) {
          let tmp21 = atan2;
          let tmp22 = closure_6;
          let tmp23 = closure_5;
          let tmp24 = PI;
          let result1 = atan2(closure_6 / items[num4], closure_5 / items[num4]) / PI * 180;
          let tmp26 = result1;
          if (result1 < 0) {
            do {
              result1 = result1 + 360;
              tmp26 = result1;
            } while (result1 < 0);
          }
          let diff = tmp26;
          let tmp28 = tmp26;
          if (tmp26 >= 360) {
            do {
              diff = diff - 360;
              tmp28 = diff;
            } while (diff >= 360);
          }
          value[num4] = tmp28;
          let tmp29 = tmp28;
        } else {
          value[num4] = value[num4] / items[num4];
        }
      }
      closure_7 = closure_7 / length;
      const prototype2 = Color.prototype;
      obj = new Color(value, str);
      let num6 = 1;
      if (closure_7 <= 0.99999) {
        num6 = closure_7;
      }
      return obj.alpha(num6, true);
    }
  };
  chroma$k.bezier = function bezier_1(arr) {
    const tmp = function bezier(arr) {
      const mapped = arr.map((arg0) => new closure_205(arg0));
      if (2 === mapped.length) {
        const mapped1 = mapped.map((lab) => lab.lab());
        let closure_0 = mapped1[0];
        let closure_1 = mapped1[1];
        class I {
          constructor(arg0) {
            closure_0 = arr;
            items = [];
            tmp = new closure_205(items.map((arg0) => arg0[arg0] + arg0 * (closure_1[arg0] - arg0[arg0])), "lab");
            return tmp;
          }
        }
      } else if (3 === mapped.length) {
        const mapped2 = mapped.map((lab) => lab.lab());
        closure_0 = mapped2[0];
        closure_1 = mapped2[1];
        class I {
          constructor(arg0) {
            closure_0 = arr;
            items = [];
            tmp = new closure_205(items.map((arg0) => (1 - arg0) * (1 - arg0) * arg0[arg0] + 2 * (1 - arg0) * arg0 * closure_1[arg0] + arg0 * arg0 * closure_2[arg0]), "lab");
            return tmp;
          }
        }
      } else if (4 === mapped.length) {
        const mapped3 = mapped.map((lab) => lab.lab());
        closure_0 = mapped3[0];
        closure_1 = mapped3[1];
        class I {
          constructor(arg0) {
            closure_0 = arr;
            items = [];
            tmp = new closure_205(items.map((arg0) => (1 - arg0) * (1 - arg0) * (1 - arg0) * arg0[arg0] + 3 * (1 - arg0) * (1 - arg0) * arg0 * closure_1[arg0] + 3 * (1 - arg0) * arg0 * arg0 * closure_2[arg0] + arg0 * arg0 * arg0 * closure_3[arg0]), "lab");
            return tmp;
          }
        }
      } else if (mapped.length >= 5) {
        let closure_4 = mapped.map((lab) => lab.lab());
        let closure_6 = mapped.length - 1;
        const items = [];
        class I {
          constructor(arg0) {
            closure_0 = arr;
            closure_1 = 1 - arr;
            items = [];
            tmp = new closure_205(items.map((arg0) => closure_4.reduce((arg0, arg1, exponent) => {
              const result = closure_5[exponent] * Math.pow(closure_1, closure_6 - exponent);
              return arg0 + result * Math.pow(arg0, exponent) * arg1[closure_0];
            }, 0)), "lab");
            return tmp;
          }
        }
      } else {
        const _RangeError = RangeError;
        class I {
          constructor(arg0) {
            closure_0 = arr;
            closure_1 = 1 - arr;
            items = [];
            tmp = new closure_205(items.map((arg0) => closure_4.reduce((arg0, arg1, exponent) => {
              const result = closure_5[exponent] * Math.pow(closure_1, closure_6 - exponent);
              return arg0 + result * Math.pow(arg0, exponent) * arg1[closure_0];
            }, 0)), "lab");
            return tmp;
          }
        }
        throw tmp3;
      }
      return I;
    }(arr);
    const limit$2 = tmp;
    tmp.scale = () => callback(tmp);
    return tmp;
  };
  chroma$k.blend = blend;
  chroma$k.cubehelix = function cubehelix(arg0, arg1, arg2, arg3, arg4) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let closure_3 = arg3;
    let items = arg4;
    if (undefined === arg0) {
      closure_0 = 300;
    }
    if (undefined === closure_1) {
      closure_1 = -1.5;
    }
    if (undefined === closure_2) {
      closure_2 = 1;
    }
    if (undefined === closure_3) {
      closure_3 = 1;
    }
    if (undefined === items) {
      items = ["replace", "then"];
    }
    let closure_6 = 0;
    if ("array" === callback37(items)) {
      let closure_5 = items[1] - items[0];
    } else {
      closure_5 = 0;
      items = [, ];
      items[0] = items;
      items[1] = items;
    }
    const fn = function f(arg0) {
      const result = closure_211 * ((closure_0 + 120) / 360 + closure_1 * arg0);
      const tmp2 = callback3(items[0] + closure_5 * arg0, closure_3);
      if (0 !== closure_6) {
        let sum = closure_2[0] + arg0 * closure_6;
      } else {
        sum = closure_2;
      }
      const result1 = sum * tmp2 * (1 - tmp2) / 2;
      const tmp7 = callback5(result);
      const tmp8 = callback4(result);
      const items = [255 * (tmp2 + result1 * (-0.14861 * tmp7 + 1.78277 * tmp8)), 255 * (tmp2 + result1 * (-0.29227 * tmp7 - 0.90649 * tmp8)), 255 * (tmp2 + result1 * (1.97294 * tmp7)), 1];
      return lib(callback2(items));
    };
    fn.start = (arg0) => {
      if (null == arg0) {
        let tmp = closure_0;
      } else {
        closure_0 = arg0;
        tmp = fn;
      }
      return tmp;
    };
    fn.rotations = (arg0) => {
      if (null == arg0) {
        let tmp = closure_1;
      } else {
        closure_1 = arg0;
        tmp = fn;
      }
      return tmp;
    };
    fn.gamma = (arg0) => {
      if (null == arg0) {
        let tmp = closure_3;
      } else {
        closure_3 = arg0;
        tmp = fn;
      }
      return tmp;
    };
    fn.hue = (arg0) => {
      if (null == arg0) {
        let tmp6 = closure_2;
      } else {
        closure_2 = arg0;
        if ("array" === callback(arg0)) {
          const diff = closure_2[1] - closure_2[0];
          let closure_6 = diff;
          if (0 == diff) {
            closure_2 = closure_2[1];
          }
        } else {
          closure_6 = 0;
        }
        tmp6 = fn;
      }
      return tmp6;
    };
    fn.lightness = (arg0) => {
      if (null == arg0) {
        let tmp2 = items;
      } else {
        if ("array" === callback(arg0)) {
          let items = arg0;
          let closure_5 = arg0[1] - arg0[0];
        } else {
          items = [arg0, arg0];
          closure_5 = 0;
        }
        tmp2 = fn;
      }
      return tmp2;
    };
    fn.scale = () => lib.scale(fn);
    fn.hue(closure_2);
    return fn;
  };
  chroma$k.interpolate = mix$1;
  chroma$k.mix = mix$1;
  chroma$k.random = function random_1() {
    let text;
    let num = 0;
    do {
      let charAt = "0123456789abcdef".charAt;
      let tmp2 = closure_217;
      let tmp3 = closure_218;
      text = `#${"0123456789abcdef".charAt(closure_217(16 * closure_218()))}`;
      num = num + 1;
      let tmp = text;
    } while (num < 6);
    return new Color(text, "hex");
  };
  chroma$k.scale = scale$2;
  chroma$k.analyze = obj17.analyze;
  chroma$k.contrast = function contrast(arg0, arg1) {
    const obj = new Color(arg0);
    const luminanceResult = obj.luminance();
    const luminanceResult1 = new Color(arg1).luminance();
    if (luminanceResult > luminanceResult1) {
      let result = (luminanceResult + 0.05) / (luminanceResult1 + 0.05);
    } else {
      result = (luminanceResult1 + 0.05) / (luminanceResult + 0.05);
    }
    return result;
  };
  chroma$k.deltaE = function deltaE(arg0, arg1, arg2, arg3, arg4) {
    let tmp6;
    let tmp7;
    let tmp8;
    let num = arg2;
    let num2 = arg3;
    let num3 = arg4;
    if (undefined === arg2) {
      num = 1;
    }
    if (undefined === num2) {
      num2 = 1;
    }
    if (undefined === num3) {
      num3 = 1;
    }
    function rad2deg(arg0) {
      return 360 * arg0 / (2 * closure_237);
    }
    function deg2rad(diff) {
      return 2 * closure_237 * diff / 360;
    }
    const obj = new Color(arg0);
    let arr = Array.from(obj.lab());
    const first = arr[0];
    arr = Array.from(new Color(arg1).lab());
    [tmp6, tmp7, tmp8] = arr;
    const result = (first + tmp6) / 2;
    const obj2 = new Color(arg1);
    const tmp10 = pow(arr[1], 2);
    const tmp11 = sqrt(pow(arr[1], 2) + pow(arr[2], 2));
    const result1 = (tmp11 + sqrt(pow(tmp7, 2) + pow(tmp8, 2))) / 2;
    const tmp12 = pow(tmp7, 2);
    const tmp14 = pow(result1, 7);
    const sum = 1 + 0.5 * (1 - sqrt(tmp14 / (pow(result1, 7) + pow(25, 7))));
    const result2 = tmp3 * sum;
    const result3 = tmp7 * sum;
    const tmp15 = pow(result1, 7);
    const tmp20 = sqrt(pow(result2, 2) + pow(arr[2], 2));
    const tmp19 = pow(result2, 2);
    const tmp22 = sqrt(pow(result3, 2) + pow(tmp8, 2));
    const result4 = (tmp20 + tmp22) / 2;
    const rad2degResult = rad2deg(atan2(arr[2], result2));
    const rad2degResult1 = rad2deg(atan2(tmp8, result3));
    let sum1 = rad2degResult;
    if (rad2degResult < 0) {
      sum1 = rad2degResult + 360;
    }
    let sum2 = rad2degResult1;
    if (rad2degResult1 < 0) {
      sum2 = rad2degResult1 + 360;
    }
    if (abs(sum1 - sum2) > 180) {
      let result5 = (sum1 + sum2 + 360) / 2;
    } else {
      result5 = (sum1 + sum2) / 2;
    }
    const result6 = 0.17 * cos(deg2rad(result5 - 30));
    const result7 = 0.24 * cos(deg2rad(2 * result5));
    const result8 = 0.32 * cos(deg2rad(3 * result5 + 6));
    const diff = sum2 - sum1;
    const result9 = 0.2 * cos(deg2rad(4 * result5 - 63));
    if (abs(diff) <= 180) {
      const result10 = 2 * sqrt(tmp20 * tmp22);
      const result11 = result10 * sin(deg2rad(diff) / 2);
      const diff1 = tmp22 - tmp20;
      const diff2 = result - 50;
      const diff3 = tmp6 - first;
      const result12 = 0.015 * pow(diff2, 2);
      const sum3 = 1 + 0.045 * result4;
      const sum4 = 1 + 0.015 * result4 * (1 - result6 + result7 + result8 - result9);
      const result13 = result12 / sqrt(20 + pow(diff2, 2));
      const result14 = 30 * exp(-pow((result5 - 275) / 25, 2));
      const tmp55 = pow(result4, 7);
      const result15 = -2 * sqrt(tmp55 / (pow(result4, 7) + pow(25, 7)));
      const result16 = result15 * sin(2 * deg2rad(result14));
      const tmp57 = pow(result4, 7);
      const sum5 = pow(diff3 / (num * (1 + result13)), 2) + pow(diff1 / (num2 * sum3), 2);
      return max(0, min(100, sqrt(sum5 + pow(result11 / (num3 * sum4), 2) + result16 * (diff1 / (num2 * sum3)) * (result11 / (num3 * sum4)))));
    } else if (sum2 <= sum1) {
      let sum6 = diff + 360;
    } else {
      sum6 = diff - 360;
    }
  };
  chroma$k.distance = function distance(arg0, arg1, arg2) {
    let str = arg2;
    if (undefined === arg2) {
      str = "lab";
    }
    const obj = new Color(arg0);
    let value = obj.get(str);
    let num = 0;
    let num2 = 0;
    value = new Color(arg1).get(str);
    const keys = Object.keys();
    if (keys !== undefined) {
      num2 = num;
      while (keys[tmp] !== undefined) {
        let tmp9 = tmp5;
        let tmp6 = value[tmp5] || 0;
        let tmp7 = value[tmp5] || 0;
        let diff = tmp6 - tmp7;
        num = num + diff * diff;
        // continue
      }
    }
    return Math.sqrt(num2);
  };
  chroma$k.limits = obj17.limits;
  chroma$k.valid = function valid() {
    let tmp4;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        let tmp3 = items;
        items[diff] = arguments[diff];
        tmp4 = +diff;
        diff = tmp4 - 1;
      } while (tmp4);
    }
    const items1 = [true];
    let applyResult = bind.apply(Color, items1.concat(items));
    applyResult = new applyResult();
    return true;
  };
  chroma$k.scales = {
    cool() {
      const items = [chroma$k.hsl(180, 1, 0.9), chroma$k.hsl(250, 0.7, 0.4)];
      return scale$2(items);
    },
    hot() {
      return scale$2([]).mode("rgb");
    }
  };
  chroma$k.colors = obj10;
  chroma$k.brewer = obj19;
  return chroma$k;
};
if ("object" === typeof exports) {
  if (undefined !== module) {
    module.exports = fn();
  }
}
if ("function" === typeof globalThis.define) {
  if (globalThis.define.amd) {
    globalThis.define(fn);
  }
}
if ("undefined" !== typeof globalThis) {
  self = globalThis;
}
self.chroma = fn();

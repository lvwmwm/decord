// Module ID: 5559
// Function ID: 47192
// Name: Color
// Dependencies: []

// Module 5559 (Color)
class Color {
  constructor(arg0, arg1) {
    str = require;
    self = this;
    if (this instanceof Color) {
      tmp8 = str;
      if (str) {
        tmp9 = zeroArray;
        tmp8 = str in zeroArray;
      }
      if (tmp8) {
        str = null;
      }
      if (str) {
        tmp10 = require;
        tmp11 = dependencyMap;
        num = 2;
        if (!(str in require(dependencyMap[2]))) {
          tmp12 = globalThis;
          _Error = Error;
          str2 = "Unknown model: ";
          prototype2 = Error.prototype;
          tmp13 = new.target;
          tmp14 = new.target;
          error = new Error("Unknown model: " + str);
          tmp16 = error;
          throw error;
        }
      }
      tmp17 = null;
      if (null == global) {
        str10 = "rgb";
        self.model = "rgb";
        self.color = [null, null, null];
        num15 = 1;
        self.valpha = 1;
      } else {
        tmp55 = Color;
        if (global instanceof Color) {
          self.model = global.model;
          tmp47 = zeroArray;
          self.color = zeroArray(global.color);
          self.valpha = global.valpha;
        } else {
          tmp18 = typeof global;
          str3 = "string";
          if ("string" === tmp18) {
            tmp38 = require;
            tmp39 = dependencyMap;
            num11 = 3;
            obj2 = require(dependencyMap[3]);
            iter = obj2.get(global);
            if (null === iter) {
              tmp42 = globalThis;
              _Error3 = Error;
              str9 = "Unable to parse color from string: ";
              prototype4 = Error.prototype;
              tmp43 = new.target;
              tmp44 = new.target;
              error1 = new Error("Unable to parse color from string: " + global);
              tmp46 = error1;
              throw error1;
            } else {
              self.model = iter.model;
              tmp40 = require;
              tmp41 = dependencyMap;
              num12 = 2;
              channels2 = require(dependencyMap[2])[self.model].channels;
              value = iter.value;
              num13 = 0;
              self.color = require("module_0");
              num14 = 1;
              str8 = "number";
              if ("number" === typeof iter.value[channels2]) {
                num14 = iter.value[channels2];
              }
              self.valpha = num14;
            }
          } else {
            num20 = 0;
            if (global.length > 0) {
              if (!str) {
                str = "rgb";
              }
              self.model = str;
              tmp32 = require;
              tmp33 = dependencyMap;
              num9 = 2;
              channels = require(dependencyMap[2])[self.model].channels;
              tmp34 = globalThis;
              _Array = Array;
              slice = Array.prototype.slice;
              callResult = slice.call(global, 0, channels);
              tmp36 = zeroArray;
              tmp37 = zeroArray(callResult, channels);
              self.color = callResult;
              num10 = 1;
              str7 = "number";
              if ("number" === typeof global[channels]) {
                num10 = global[channels];
              }
              self.valpha = num10;
            } else {
              str11 = "number";
              if ("number" === tmp18) {
                str6 = "rgb";
                self.model = "rgb";
                num5 = 16;
                items = [, , ];
                num6 = 255;
                items[0] = global >> 16 & 255;
                num7 = 8;
                items[1] = global >> 8 & 255;
                items[2] = 255 & global;
                self.color = items;
                num8 = 1;
                self.valpha = 1;
              } else {
                num21 = 1;
                self.valpha = 1;
                tmp56 = globalThis;
                _Object3 = Object;
                keys = Object.keys(global);
                str12 = "alpha";
                if ("alpha" in global) {
                  spliceResult = keys.splice(keys.indexOf("alpha"), 1);
                  num2 = 0;
                  if ("number" === typeof global.alpha) {
                    num2 = global.alpha;
                  }
                  self.valpha = num2;
                }
                sorted = keys.sort();
                str4 = "";
                joined = sorted.join("");
                tmp21 = zeroArray;
                if (joined in zeroArray) {
                  tmp26 = zeroArray;
                  self.model = zeroArray[joined];
                  tmp27 = require;
                  tmp28 = dependencyMap;
                  num3 = 2;
                  labels = require(dependencyMap[2])[self.model].labels;
                  items1 = [];
                  num4 = 0;
                  if (0 < labels.length) {
                    do {
                      arr = items1.push(global[labels[num4]]);
                      num4 = num4 + 1;
                      length = labels.length;
                    } while (num4 < length);
                  }
                  tmp30 = zeroArray;
                  tmp31 = zeroArray(items1);
                  self.color = items1;
                } else {
                  _Error2 = Error;
                  _JSON = JSON;
                  str5 = "Unable to parse color from object: ";
                  prototype3 = Error.prototype;
                  tmp22 = new.target;
                  tmp23 = new.target;
                  error2 = new Error("Unable to parse color from object: " + JSON.stringify(global));
                  tmp25 = error2;
                  throw error2;
                }
              }
            }
          }
        }
      }
      tmp48 = closure_6;
      if (closure_6[self.model]) {
        tmp49 = require;
        tmp50 = dependencyMap;
        num16 = 2;
        channels3 = require(dependencyMap[2])[self.model].channels;
        for (let num17 = 0; num17 < channels3; num17 = num17 + 1) {
          tmp51 = closure_6;
          tmp52 = closure_6[self.model][num17];
          if (tmp52) {
            self.color[num17] = tmp52(self.color[num17]);
          }
        }
      }
      tmp53 = globalThis;
      _Math = Math;
      _Math2 = Math;
      num18 = 1;
      num19 = 0;
      self.valpha = require("module_0");
      _Object = Object;
      if (Object.freeze) {
        _Object2 = Object;
        frozen = Object.freeze(self);
      }
      return;
    } else {
      tmp = Color;
      prototype = Color.prototype;
      tmp2 = new.target;
      tmp3 = new.target;
      tmp4 = global;
      tmp5 = str;
      tmp6 = new Color(global, str);
      tmp7 = tmp6;
      return tmp6;
    }
  }
}
function getset(cmyk, arg1, arg2) {
  let closure_0 = cmyk;
  const dependencyMap = arg1;
  let closure_2 = arg2;
  let tmp3 = cmyk;
  if (!Array.isArray(cmyk)) {
    const items = [cmyk];
    tmp3 = items;
  }
  closure_0 = tmp3;
  for (const item10015 of tmp3) {
    let tmp5 = closure_6;
    let tmp6 = closure_6[item10015];
    let tmp7 = tmp6;
    if (!tmp6) {
      let tmp8 = closure_6;
      let tmp9 = item10015;
      let items1 = [];
      closure_6[tmp4] = items1;
      tmp7 = items1;
    }
    let tmp10 = tmp7;
    let tmp11 = arg1;
    let tmp12 = arg2;
    tmp7[arg1] = arg2;
  }
  closure_0 = tmp3[0];
  return function(arg0) {
    const self = this;
    if (undefined !== arg0) {
      let tmp8 = arg0;
      if (arg2) {
        tmp8 = arg2(arg0);
      }
      const tmp11 = self[closure_0]();
      tmp11.color[arg1] = tmp8;
      let tmp5 = tmp11;
    } else {
      const tmp3 = self[closure_0]().color[closure_1];
      tmp5 = tmp3;
      if (arg2) {
        tmp5 = arg2(tmp3);
      }
    }
    return tmp5;
  };
}
function maxfn(arg0) {
  const require = arg0;
  return (arg0) => Math.max(0, Math.min(arg0, arg0));
}
function zeroArray(callResult, channels) {
  for (let num = 0; num < channels; num = num + 1) {
    if ("number" !== typeof callResult[num]) {
      callResult[num] = 0;
    }
  }
  return callResult;
}
let closure_2 = require(dependencyMap[0]);
const _module = require(dependencyMap[1]);
let closure_4 = [1342177280, 1929379840, 100];
let obj = {};
const keys = Object.keys(require(dependencyMap[2]));
const iter = keys[Symbol.iterator]();
const nextResult = iter.next();
while (iter !== undefined) {
  let tmp4 = obj;
  let tmp5 = _module;
  let tmp6 = require;
  let tmp7 = dependencyMap;
  let _moduleResult = _module(require(dependencyMap[2])[nextResult].labels);
  let sorted = _moduleResult.sort();
  obj[sorted.join("")] = nextResult;
  // continue
}
let closure_6 = {};
obj = {
  toString() {
    return this.string();
  },
  toJSON() {
    return this[this.model]();
  },
  string(arg0) {
    const self = this;
    let self2 = this;
    if (!(this.model in require(dependencyMap[3]).to)) {
      self2 = self.rgb();
    }
    let num = 1;
    if ("number" === typeof arg0) {
      num = arg0;
    }
    const roundResult = self2.round(num);
    if (1 === roundResult.valpha) {
      let color = roundResult.color;
    } else {
      const items = [];
      const items1 = [self.valpha];
      color = items.concat(_module(roundResult.color), items1);
    }
    const to = require(dependencyMap[3]).to;
    return to[roundResult.model](color);
  },
  percentString(arg0) {
    let num = 1;
    if ("number" === typeof arg0) {
      num = arg0;
    }
    const roundResult = this.rgb().round(num);
    if (1 === roundResult.valpha) {
      let color = roundResult.color;
    } else {
      const items = [];
      const items1 = [this.valpha];
      color = items.concat(_module(roundResult.color), items1);
    }
    const rgb = require(dependencyMap[3]).to.rgb;
    return rgb.percent(color);
  },
  array() {
    const self = this;
    if (1 === this.valpha) {
      let combined = _module(self.color);
    } else {
      const items = [];
      const items1 = [self.valpha];
      combined = items.concat(_module(self.color), items1);
    }
    return combined;
  },
  object() {
    const self = this;
    const obj = {};
    const channels = require(dependencyMap[2])[this.model].channels;
    for (let num = 0; num < channels; num = num + 1) {
      obj[require(dependencyMap[2])[this.model].labels[num]] = self.color[num];
    }
    if (1 !== self.valpha) {
      obj.alpha = self.valpha;
    }
    return obj;
  },
  unitArray() {
    const color = this.rgb().color;
    color[0] = color[0] / 255;
    color[1] = color[1] / 255;
    color[2] = color[2] / 255;
    if (1 !== this.valpha) {
      color.push(this.valpha);
    }
    return color;
  },
  unitObject() {
    const objectResult = this.rgb().object();
    objectResult.r = objectResult.r / 255;
    objectResult.g = objectResult.g / 255;
    objectResult.b = objectResult.b / 255;
    if (1 !== this.valpha) {
      objectResult.alpha = this.valpha;
    }
    return objectResult;
  },
  round(arg0) {
    let num = arg0;
    const self = this;
    if (!arg0) {
      num = 0;
    }
    const items = [];
    const color = self.color;
    const items1 = [self.valpha];
    return new Color(items.concat(_module(color.map(function roundToPlace(arg0) {
      return (toFixed) => Number(toFixed.toFixed(toFixed));
    }(Math.max(num, 0)))), items1), self.model);
  },
  alpha(self, arg1) {
    self = this;
    if (undefined !== self) {
      const items = [];
      const _Math = Math;
      const _Math2 = Math;
      const items1 = [Math.max(0, Math.min(1, self))];
      const prototype = Color.prototype;
      let valpha = new Color(items.concat(_module(self.color), items1), self.model);
      const tmp3 = _module(self.color);
    } else {
      valpha = self.valpha;
    }
    return valpha;
  },
  red: getset("rgb", 0, require("module_255")),
  green: getset("rgb", 1, require("module_255")),
  blue: getset("rgb", 2, require("module_255")),
  hue: getset([], 0, (arg0) => (arg0 % 360 + 360) % 360),
  saturationl: getset("hsl", 1, require("module_100")),
  lightness: getset("hsl", 2, require("module_100")),
  saturationv: getset("hsv", 1, require("module_100")),
  value: getset("hsv", 2, require("module_100")),
  chroma: getset("hcg", 1, require("module_100")),
  gray: getset("hcg", 2, require("module_100")),
  white: getset("hwb", 1, require("module_100")),
  wblack: getset("hwb", 2, require("module_100")),
  cyan: getset("cmyk", 0, require("module_100")),
  magenta: getset("cmyk", 1, require("module_100")),
  yellow: getset("cmyk", 2, require("module_100")),
  black: getset("cmyk", 3, require("module_100")),
  x: getset("xyz", 0, maxfn(95.047)),
  y: getset("xyz", 1, require("module_100")),
  z: getset("xyz", 2, maxfn(108.833)),
  l: getset("lab", 0, require("module_100")),
  a: getset("lab", 1),
  b: getset("lab", 2),
  keyword(color) {
    const self = this;
    if (undefined !== color) {
      const prototype = Color.prototype;
      let keywordResult = new Color(color);
    } else {
      keywordResult = require(dependencyMap[2])[self.model].keyword(self.color);
      const obj = require(dependencyMap[2])[self.model];
    }
    return keywordResult;
  },
  hex(arg0) {
    const self = this;
    if (undefined !== arg0) {
      const prototype = Color.prototype;
      let hexResult = new Color(arg0);
    } else {
      const to = require(dependencyMap[3]).to;
      hexResult = to.hex(self.rgb().round().color);
      const rgbResult = self.rgb();
    }
    return hexResult;
  },
  hexa(arg0) {
    const self = this;
    if (undefined !== arg0) {
      const prototype = Color.prototype;
      const tmp8 = new Color(arg0);
      return tmp8;
    } else {
      const _Math = Math;
      const rgbResult = self.rgb();
      const str2 = Math.round(255 * self.valpha);
      const formatted = Math.round(255 * self.valpha).toString(16).toUpperCase();
      let text = formatted;
      if (1 === formatted.length) {
        text = `0${arr}`;
      }
      const to = require(dependencyMap[3]).to;
      return to.hex(rgbResult.round().color) + text;
    }
  },
  rgbNumber() {
    const color = this.rgb().color;
    return (255 & color[0]) << 16 | (255 & color[1]) << 8 | 255 & color[2];
  },
  luminosity() {
    const color = this.rgb().color;
    const items = [];
    const entries = color.entries();
    while (tmp2 !== undefined) {
      let tmp4 = callback;
      let tmp5 = callback(tmp3, 2);
      let result = tmp5[1] / 255;
      let tmp7 = result;
      let tmp8 = items;
      if (result <= 0.04045) {
        let tmp11 = result;
        let result1 = tmp7 / 12.92;
      } else {
        let tmp9 = result;
        let num = 2.4;
        result1 = ((tmp7 + 0.055) / 1.055) ** 2.4;
      }
      items[tmp5[0]] = result1;
      // continue
    }
    return 0.2126 * items[0] + 0.7152 * items[1] + 0.0722 * items[2];
  },
  contrast(luminosity) {
    const luminosityResult = this.luminosity();
    const luminosityResult1 = luminosity.luminosity();
    if (luminosityResult > luminosityResult1) {
      let result = (luminosityResult + 0.05) / (luminosityResult1 + 0.05);
    } else {
      result = (luminosityResult1 + 0.05) / (luminosityResult + 0.05);
    }
    return result;
  },
  level(arg0) {
    const contrastResult = this.contrast(arg0);
    let str = "AAA";
    if (contrastResult < 7) {
      let str2 = "";
      if (contrastResult >= 4.5) {
        str2 = "AA";
      }
      str = str2;
    }
    return str;
  },
  isDark() {
    const color = this.rgb().color;
    return (2126 * color[0] + 7152 * color[1] + 722 * color[2]) / 10000 < 128;
  },
  isLight() {
    return !this.isDark();
  },
  negate() {
    const rgbResult = this.rgb();
    let num = 0;
    do {
      rgbResult.color[num] = 255 - rgbResult.color[num];
      num = num + 1;
    } while (num < 3);
    return rgbResult;
  },
  lighten(arg0) {
    const hslResult = this.hsl();
    const color = hslResult.color;
    color[2] = color[2] + hslResult.color[2] * arg0;
    return hslResult;
  },
  darken(arg0) {
    const hslResult = this.hsl();
    const color = hslResult.color;
    color[2] = color[2] - hslResult.color[2] * arg0;
    return hslResult;
  },
  saturate(arg0) {
    const hslResult = this.hsl();
    const color = hslResult.color;
    color[1] = color[1] + hslResult.color[1] * arg0;
    return hslResult;
  },
  desaturate(arg0) {
    const hslResult = this.hsl();
    const color = hslResult.color;
    color[1] = color[1] - hslResult.color[1] * arg0;
    return hslResult;
  },
  whiten(arg0) {
    const hwbResult = this.hwb();
    const color = hwbResult.color;
    color[1] = color[1] + hwbResult.color[1] * arg0;
    return hwbResult;
  },
  blacken(arg0) {
    const hwbResult = this.hwb();
    const color = hwbResult.color;
    color[2] = color[2] + hwbResult.color[2] * arg0;
    return hwbResult;
  },
  grayscale() {
    const color = this.rgb().color;
    const sum = 0.3 * color[0] + 0.59 * color[1] + 0.11 * color[2];
    return Color.rgb(sum, sum, sum);
  },
  fade(arg0) {
    return this.alpha(this.valpha - this.valpha * arg0);
  },
  opaquer(arg0) {
    return this.alpha(this.valpha + this.valpha * arg0);
  },
  rotate(arg0) {
    const hslResult = this.hsl();
    const result = (hslResult.color[0] + arg0) % 360;
    let sum = result;
    if (result < 0) {
      sum = 360 + result;
    }
    hslResult.color[0] = sum;
    return hslResult;
  },
  mix(rgb) {
    const self = this;
    if (rgb) {
      if (rgb.rgb) {
        const rgbResult = rgb.rgb();
        const rgbResult1 = self.rgb();
        let num = 0.5;
        if (undefined !== arg1) {
          num = arg1;
        }
        const diff = 2 * num - 1;
        const diff1 = rgbResult.alpha() - rgbResult1.alpha();
        let result = diff;
        if (diff * diff1 !== -1) {
          result = (diff + diff1) / (1 + diff * diff1);
        }
        const result1 = (result + 1) / 2;
        const diff2 = 1 - result1;
        const result2 = result1 * rgbResult.red();
        const result3 = diff2 * rgbResult1.red();
        const result4 = result1 * rgbResult.green();
        const result5 = diff2 * rgbResult1.green();
        const result6 = result1 * rgbResult.blue();
        const result7 = diff2 * rgbResult1.blue();
        const result8 = rgbResult.alpha() * num;
        return Color.rgb(result2 + result3, result4 + result5, result6 + result7, result8 + rgbResult1.alpha() * (1 - num));
      }
    }
    const error = new Error("Argument to \"mix\" was not a Color instance, but rather an instance of " + typeof rgb);
    throw error;
  }
};
Color.prototype = obj;
function _loop(item10145) {
  const require = item10145;
  if (closure_4.includes(item10145)) {
    return 1;
  } else {
    const dependencyMap = require(dependencyMap[2])[item10145].channels;
    Color.prototype[item10145] = function() {
      const self = this;
      if (this.model === arg0) {
        const prototype3 = ctor.prototype;
        const tmp15 = new ctor(self);
        return tmp15;
      } else {
        const length = arguments.length;
        const _Array = Array;
        const array = new Array(length);
        let num = 0;
        if (0 < length) {
          do {
            array[num] = arguments[num];
            num = num + 1;
          } while (num < length);
        }
        if (array.length > 0) {
          const prototype2 = ctor.prototype;
          let tmp22 = new ctor(array, arg0);
        } else {
          tmp22 = ctor;
          const items = [];
          const rawResult = arg0(channels[2])[self.model][closure_0].raw(self.color);
          const _Array2 = Array;
          let tmp = rawResult;
          if (!Array.isArray(rawResult)) {
            const items1 = [rawResult];
            tmp = items1;
          }
          const items2 = [self.valpha];
          const prototype = tmp22.prototype;
          tmp22 = new tmp22(items.concat(closure_3(tmp), items2), tmp26);
          const obj = arg0(channels[2])[self.model][closure_0];
          const tmp23 = closure_3;
        }
        return tmp22;
      }
    };
    Color[item10145] = () => {
      const length = arguments.length;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      let first = array[0];
      if ("number" === typeof first) {
        callback(array, channels);
        first = array;
      }
      return new closure_7(first, arg0);
    };
  }
}
const keys1 = Object.keys(require(dependencyMap[2]));
for (const item10145 of keys1) {
  let tmp9 = _loop;
  let _loopResult = _loop(item10145);
}

export default Color;

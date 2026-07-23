// Module ID: 6784
// Function ID: 53432
// Name: tinycolor
// Dependencies: []

// Module 6784 (tinycolor)
let dependencyMap = arg4;
((Math) => {
  let closure_4;
  let closure_5;
  let closure_6;
  let closure_7;
  const dependencyMap = Math;
  class tinycolor {
    constructor(arg0, arg1) {
      str = Math;
      obj = arg1;
      self = this;
      if (!arg1) {
        obj = {};
      }
      if (!str) {
        str = "";
      }
      if (str instanceof tinycolor) {
        return str;
      } else {
        tmp = tinycolor;
        if (self instanceof tinycolor) {
          tmp9 = (function inputToRGB(toHslResult) {
            let b;
            let g;
            let obj = { r: 0, g: 0, b: 0 };
            if ("string" !== typeof toHslResult) {
              let num36 = 1;
              let tmp30 = obj;
              let num37 = 1;
              let flag3 = false;
              let flag4 = false;
              if ("object" === typeof toHslResult) {
                if (outer1_37(toHslResult.r)) {
                  if (outer1_37(toHslResult.g)) {
                    if (outer1_37(toHslResult.b)) {
                      obj = {};
                      ({ g, b } = toHslResult);
                      obj.r = 255 * outer1_30(toHslResult.r, 255);
                      obj.g = 255 * outer1_30(g, 255);
                      obj.b = 255 * outer1_30(b, 255);
                      const _String = String;
                      let str9 = "rgb";
                      if ("%" === str8.substr(-1)) {
                        str9 = "prgb";
                      }
                      let flag5 = true;
                      let str7 = str9;
                      str8 = String(toHslResult.r);
                    }
                    if (toHslResult.hasOwnProperty("a")) {
                      num36 = toHslResult.a;
                    }
                    num37 = num36;
                    tmp30 = obj;
                    flag3 = flag5;
                    flag4 = str7;
                  }
                }
                if (outer1_37(toHslResult.h)) {
                  if (outer1_37(toHslResult.s)) {
                    if (outer1_37(toHslResult.v)) {
                      const tmp43 = outer1_34(toHslResult.s);
                      let result = 6 * outer1_30(toHslResult.h, 360);
                      const tmp47 = outer1_30(tmp43, 100);
                      const tmp48 = outer1_30(outer1_34(toHslResult.v), 100);
                      const floorResult = outer1_0.floor(result);
                      let diff = result - floorResult;
                      const result1 = tmp48 * (num36 - tmp47);
                      const result2 = tmp48 * (num36 - diff * tmp47);
                      const result3 = tmp48 * (num36 - (num36 - diff) * tmp47);
                      const result4 = floorResult % 6;
                      const items = [tmp48, result2, result1, result1, result3, tmp48];
                      const items1 = [result3, tmp48, tmp48, result2, result1, result1];
                      const items2 = [result1, result1, result3, tmp48, tmp48, result2];
                      obj = { r: 255 * items[result4], g: 255 * items1[result4], b: 255 * items2[result4] };
                      flag5 = true;
                      str7 = "hsv";
                      const tmp44 = outer1_34(toHslResult.v);
                    }
                  }
                }
                let tmp37 = outer1_37(toHslResult.h);
                if (tmp37) {
                  tmp37 = outer1_37(toHslResult.s);
                }
                if (tmp37) {
                  tmp37 = outer1_37(toHslResult.l);
                }
                flag5 = false;
                str7 = false;
                if (tmp37) {
                  obj = (function hslToRgb(h, arg1, arg2) {
                    function hue2rgb(diff, result, sum) {
                      if (sum < 0) {
                        sum = sum + 1;
                      }
                      diff = sum;
                      if (sum > 1) {
                        diff = sum - 1;
                      }
                      if (diff < 0.16666666666666666) {
                        let sum1 = diff + 6 * (result - diff) * diff;
                      } else {
                        sum1 = result;
                        if (diff >= 0.5) {
                          let sum2 = diff;
                          if (diff < 0.6666666666666666) {
                            sum2 = diff + (result - diff) * (0.6666666666666666 - diff) * 6;
                          }
                          sum1 = sum2;
                        }
                      }
                      return sum1;
                    }
                    const tmp = outer2_30(h, 360);
                    const tmp2 = outer2_30(arg1, 100);
                    let sum = outer2_30(arg2, 100);
                    if (0 === tmp2) {
                      const obj = { r: 255 * sum, g: 255 * tmp4, b: 255 * tmp5 };
                      return obj;
                    } else {
                      if (sum < 0.5) {
                        let result = sum * (1 + tmp2);
                      } else {
                        result = sum + tmp2 - sum * tmp2;
                      }
                      let diff = 2 * sum - result;
                      sum = tmp + 0.3333333333333333;
                      hue2rgb(diff, result, sum);
                      hue2rgb(diff, result, tmp);
                      hue2rgb(diff, result, tmp - 0.3333333333333333);
                    }
                  })(toHslResult.h, outer1_34(toHslResult.s), outer1_34(toHslResult.l));
                  flag5 = true;
                  str7 = "hsl";
                  const tmp41 = outer1_34(toHslResult.s);
                }
              }
              const obj1 = { ok: flag3 };
              let format = toHslResult.format;
              if (!format) {
                format = flag4;
              }
              obj1.format = format;
              obj1.r = outer1_5(255, outer1_6(tmp30.r, 0));
              obj1.g = outer1_5(255, outer1_6(tmp30.g, 0));
              obj1.b = outer1_5(255, outer1_6(tmp30.b, 0));
              obj1.a = outer1_29(num37);
              return obj1;
            } else {
              const str13 = toHslResult.replace(outer1_1, "");
              let rgb = toHslResult.replace(outer1_1, "").replace(outer1_2, "").toLowerCase();
              if (outer1_8[rgb]) {
                let tmp = outer1_8[rgb];
                let flag = true;
              } else {
                tmp = rgb;
                flag = false;
                if ("transparent" == rgb) {
                  let flag2 = { r: 0, g: 0, b: 0, a: 0, format: "name" };
                }
              }
              rgb = outer1_10.rgb;
              const match = rgb.exec(tmp);
              if (match) {
                const obj2 = { r: match[1], g: match[2], b: match[3] };
                flag2 = obj2;
              } else {
                const rgba = outer1_10.rgba;
                rgb = rgba.exec(tmp);
                if (rgb) {
                  const obj3 = { r: rgb[1], g: rgb[2], b: rgb[3], a: rgb[4] };
                  flag2 = obj3;
                } else {
                  const hsl = outer1_10.hsl;
                  const match1 = hsl.exec(tmp);
                  if (match1) {
                    const obj4 = { h: match1[1], s: match1[2], l: match1[3] };
                    flag2 = obj4;
                  } else {
                    const hsla = outer1_10.hsla;
                    const match2 = hsla.exec(tmp);
                    if (match2) {
                      const obj5 = { h: match2[1], s: match2[2], l: match2[3], a: match2[4] };
                      flag2 = obj5;
                    } else {
                      const hsv = outer1_10.hsv;
                      const match3 = hsv.exec(tmp);
                      if (match3) {
                        const obj6 = { h: match3[1], s: match3[2], v: match3[3] };
                        flag2 = obj6;
                      } else {
                        const hsva = outer1_10.hsva;
                        const match4 = hsva.exec(tmp);
                        if (match4) {
                          const obj7 = { h: match4[1], s: match4[2], v: match4[3], a: match4[4] };
                          flag2 = obj7;
                        } else {
                          const hex8 = outer1_10.hex8;
                          const match5 = hex8.exec(tmp);
                          if (match5) {
                            const obj8 = { r: outer1_32(match5[1]), g: outer1_32(match5[2]), b: outer1_32(match5[3]), a: outer1_36(match5[4]) };
                            let str5 = "hex8";
                            if (flag) {
                              str5 = "name";
                            }
                            obj8.format = str5;
                            flag2 = obj8;
                          } else {
                            const hex6 = outer1_10.hex6;
                            const match6 = hex6.exec(tmp);
                            if (match6) {
                              const obj9 = { r: outer1_32(match6[1]), g: outer1_32(match6[2]), b: outer1_32(match6[3]) };
                              let str4 = "hex";
                              if (flag) {
                                str4 = "name";
                              }
                              obj9.format = str4;
                              flag2 = obj9;
                            } else {
                              const hex4 = outer1_10.hex4;
                              const match7 = hex4.exec(tmp);
                              if (match7) {
                                const obj10 = { r: outer1_32("" + match7[1] + match7[1]), g: outer1_32("" + match7[2] + match7[2]), b: outer1_32("" + match7[3] + match7[3]), a: outer1_36("" + match7[4] + match7[4]) };
                                let str3 = "hex8";
                                if (flag) {
                                  str3 = "name";
                                }
                                obj10.format = str3;
                                flag2 = obj10;
                              } else {
                                const hex3 = outer1_10.hex3;
                                const match8 = hex3.exec(tmp);
                                flag2 = false;
                                if (match8) {
                                  const obj11 = { r: outer1_32("" + match8[1] + match8[1]), g: outer1_32("" + match8[2] + match8[2]), b: outer1_32("" + match8[3] + match8[3]) };
                                  let str2 = "hex";
                                  if (flag) {
                                    str2 = "name";
                                  }
                                  obj11.format = str2;
                                  flag2 = obj11;
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
              const str14 = toHslResult.replace(outer1_1, "").replace(outer1_2, "");
            }
          })(str);
          self._originalInput = str;
          ({ r: self._r, g: self._g, b: self._b, a: self._a } = tmp9);
          tmp10 = round;
          num = 100;
          self._roundA = round(100 * self._a) / 100;
          self._format = obj.format || tmp9.format;
          self._gradientType = obj.gradientType;
          num2 = 1;
          if (self._r < 1) {
            tmp11 = round;
            self._r = round(self._r);
          }
          if (self._g < 1) {
            tmp12 = round;
            self._g = round(self._g);
          }
          if (self._b < 1) {
            tmp13 = round;
            self._b = round(self._b);
          }
          self._ok = tmp9.ok;
          tmp14 = _b;
          tmp15 = +_b;
          _b = tmp15 + 1;
          self._tc_id = tmp15;
          return;
        } else {
          tmp2 = tinycolor;
          prototype = tinycolor.prototype;
          tmp3 = new.target;
          tmp4 = new.target;
          tmp5 = str;
          tmp6 = obj;
          tmp7 = new tinycolor(str, obj);
          tmp8 = tmp7;
          return tmp7;
        }
      }
    }
    static fromRatio(arg0, arg1) {
      tmp2 = Math;
      if ("object" === typeof Math) {
        obj = {};
        tmp3 = Math;
        str = "a";
        tmp2 = obj;
        keys = Object.keys();
        if (keys !== undefined) {
          tmp2 = obj;
          tmp5 = keys[tmp];
          while (tmp5 !== undefined) {
            tmp8 = tmp5;
            if (!Math.hasOwnProperty(tmp5)) {
              continue;
            } else {
              if ("a" === tmp5) {
                tmp7 = Math[tmp5];
              } else {
                tmp6 = convertToPercentage;
                tmp7 = convertToPercentage(Math[tmp5]);
              }
              obj[tmp5] = tmp7;
              continue;
            }
            continue;
          }
        }
      }
      return tinycolor(tmp2, arg1);
    }
    static equals(arg0, arg1) {
      tmp = !Math || !arg1;
      tmp2 = !tmp;
      if (!tmp) {
        tmp3 = tinycolor;
        obj = tinycolor(Math);
        toRgbStringResult = obj.toRgbString();
        obj2 = tinycolor(arg1);
        tmp2 = toRgbStringResult == obj2.toRgbString();
      }
      return tmp2;
    }
    static random() {
      obj = { r: random(), g: random(), b: random() };
      return tinycolor.fromRatio(obj);
    }
    static mix(arg0, arg1, arg2) {
      num = arg2;
      num2 = 0;
      if (0 !== arg2) {
        if (!num) {
          num = 50;
        }
        num2 = num;
      }
      obj = tinycolor(Math);
      toRgbResult = obj.toRgb();
      obj2 = tinycolor(arg1);
      toRgbResult1 = obj2.toRgb();
      result = num2 / 100;
      obj = { r: (toRgbResult1.r - toRgbResult.r) * result + toRgbResult.r, g: (toRgbResult1.g - toRgbResult.g) * result + toRgbResult.g, b: (toRgbResult1.b - toRgbResult.b) * result + toRgbResult.b, a: (toRgbResult1.a - toRgbResult.a) * result + toRgbResult.a };
      return tinycolor(obj);
    }
    static readability(arg0, arg1) {
      obj = tinycolor(Math);
      obj2 = tinycolor(arg1);
      luminance = obj.getLuminance();
      sum = closure_0.max(luminance, obj2.getLuminance()) + 0.05;
      luminance1 = obj.getLuminance();
      return sum / (closure_0.min(luminance1, obj2.getLuminance()) + 0.05);
    }
    static isReadable(arg0, arg1, arg2) {
      obj = arg2;
      readabilityResult = tinycolor.readability(Math, arg1);
      if (!arg2) {
        obj = { level: "AA", size: "small" };
      }
      str = obj.level || "AA";
      str2 = str.toUpperCase();
      str3 = obj.size || "small";
      str4 = str3.toLowerCase();
      tmp2 = "AA" !== str2;
      if (tmp2) {
        str5 = "AAA";
        tmp2 = "AAA" !== str2;
      }
      if (tmp2) {
        str2 = "AA";
      }
      tmp3 = "small" !== str4;
      if (tmp3) {
        str6 = "large";
        tmp3 = "large" !== str4;
      }
      if (tmp3) {
        str4 = "small";
      }
      obj = {};
      obj.level = str2;
      obj.size = str4;
      sum = obj.level + obj.size;
      if ("AAsmall" !== sum) {
        str7 = "AAAlarge";
        if ("AAAlarge" !== sum) {
          str8 = "AAlarge";
          if ("AAlarge" === sum) {
            num2 = 3;
            flag = readabilityResult >= 3;
          } else {
            str9 = "AAAsmall";
            flag = false;
            if ("AAAsmall" === sum) {
              num = 7;
              flag = readabilityResult >= 7;
            }
          }
        }
        return flag;
      }
      flag = readabilityResult >= 4.5;
      return;
    }
    static mostReadable(arg0, arg1, arg2) {
      obj = arg2;
      if (!arg2) {
        obj = {};
      }
      num = 0;
      tmp = null;
      num2 = 0;
      tmp2 = null;
      ({ includeFallbackColors, level, size } = obj);
      if (0 < arg1.length) {
        do {
          tmp3 = tinycolor;
          readabilityResult = tinycolor.readability(Math, arg1[num]);
          if (readabilityResult > num2) {
            tmp5 = tinycolor;
            tmp = tinycolor(arg1[num]);
            num2 = readabilityResult;
          }
          num = num + 1;
          tmp2 = tmp;
        } while (num < arg1.length);
      }
      mostReadableResult = tmp2;
      if (!tinycolor.isReadable(Math, tmp2, { level, size })) {
        mostReadableResult = tmp2;
        if (includeFallbackColors) {
          flag = false;
          obj.includeFallbackColors = false;
          tmp7 = tinycolor;
          mostReadableResult = tinycolor.mostReadable(Math, ["#fff", "#000"], obj);
        }
      }
      return mostReadableResult;
    }
  }
  function rgbToHsl(_r, _r, _r) {
    let num = bound01(_r, 255);
    const tmp = bound01(_r, 255);
    const tmp2 = bound01(_r, 255);
    const tmp3 = callback3(num, tmp, tmp2);
    const tmp4 = callback2(num, tmp, tmp2);
    const result = (tmp3 + tmp4) / 2;
    if (tmp3 == tmp4) {
      const obj = { h: 0, s: 0, l: result };
      return obj;
    } else {
      const diff = tmp3 - tmp4;
      if (result > 0.5) {
        let result1 = diff / (2 - tmp3 - tmp4);
      } else {
        result1 = diff / (tmp3 + tmp4);
      }
      if (num === tmp3) {
        let num4 = 0;
        const result2 = (tmp - tmp2) / diff;
        if (tmp < tmp2) {
          num4 = 6;
        }
        let sum = result2 + num4;
        num = 6;
        const result3 = sum / 6;
      } else if (tmp !== tmp3) {
        if (tmp2 === tmp3) {
          sum = (num - tmp) / diff + 4;
        }
      }
      sum = (tmp2 - num) / diff + 2;
    }
  }
  function rgbToHsv(_r, _g, _b) {
    let num = bound01(_r, 255);
    const tmp = bound01(_g, 255);
    const tmp2 = bound01(_b, 255);
    const tmp3 = callback3(num, tmp, tmp2);
    const tmp4 = callback2(num, tmp, tmp2);
    const diff = tmp3 - tmp4;
    let num2 = 0;
    if (0 !== tmp3) {
      num2 = diff / tmp3;
    }
    if (tmp3 == tmp4) {
      const obj = { h: 0, s: num2, v: tmp3 };
      return obj;
    } else {
      if (num === tmp3) {
        let num5 = 0;
        const result = (tmp - tmp2) / diff;
        if (tmp < tmp2) {
          num5 = 6;
        }
        let sum = result + num5;
        num = 6;
        const result1 = sum / 6;
      } else if (tmp !== tmp3) {
        if (tmp2 === tmp3) {
          sum = (num - tmp) / diff + 4;
        }
      }
      sum = (tmp2 - num) / diff + 2;
    }
  }
  function rgbToHex(arg0, arg1, arg2, arg3) {
    let str10;
    let str11;
    const items = [pad2(callback(arg0).toString(16)), , ];
    const str = callback(arg0);
    items[1] = pad2(callback(arg1).toString(16));
    const str2 = callback(arg1);
    items[2] = pad2(callback(arg2).toString(16));
    if (arg3) {
      if (charAtResult == str5.charAt(1)) {
        if (charAtResult1 == str7.charAt(1)) {
          if (charAtResult2 == str9.charAt(1)) {
            [str10, str11] = items;
            const sum = str10.charAt(0) + str11.charAt(0);
            let sum1 = sum + items[2].charAt(0);
            const charAtResult3 = str10.charAt(0);
            const str12 = items[2];
          }
          return sum1;
        }
        charAtResult1 = items[1].charAt(0);
        const str6 = items[1];
        str7 = items[1];
      }
      charAtResult = items[0].charAt(0);
      const str4 = items[0];
      str5 = items[0];
    }
    sum1 = items.join("");
  }
  function rgbaToArgbHex(_r, _g, _b, _a) {
    const items = [pad2(convertDecimalToHex(_a)), pad2(callback(_r).toString(16)), , ];
    const str = callback(_r);
    items[2] = pad2(callback(_g).toString(16));
    const str2 = callback(_g);
    items[3] = pad2(callback(_b).toString(16));
    return items.join("");
  }
  function _desaturate(toHslResult) {
    let num = arg1;
    let num2 = 0;
    if (0 !== arg1) {
      if (!num) {
        num = 10;
      }
      num2 = num;
    }
    toHslResult = tinycolor(toHslResult).toHsl();
    toHslResult.s = toHslResult.s - num2 / 100;
    toHslResult.s = clamp01(toHslResult.s);
    return tinycolor(toHslResult);
  }
  function _saturate(toHslResult) {
    let num = arg1;
    let num2 = 0;
    if (0 !== arg1) {
      if (!num) {
        num = 10;
      }
      num2 = num;
    }
    toHslResult = tinycolor(toHslResult).toHsl();
    toHslResult.s = toHslResult.s + num2 / 100;
    toHslResult.s = clamp01(toHslResult.s);
    return tinycolor(toHslResult);
  }
  function _greyscale(toHslResult) {
    return tinycolor(toHslResult).desaturate(100);
  }
  function _lighten(toHslResult) {
    let num = arg1;
    let num2 = 0;
    if (0 !== arg1) {
      if (!num) {
        num = 10;
      }
      num2 = num;
    }
    toHslResult = tinycolor(toHslResult).toHsl();
    toHslResult.l = toHslResult.l + num2 / 100;
    toHslResult.l = clamp01(toHslResult.l);
    return tinycolor(toHslResult);
  }
  function _brighten(toHslResult) {
    let num = arg1;
    let num2 = 0;
    if (0 !== arg1) {
      if (!num) {
        num = 10;
      }
      num2 = num;
    }
    const toRgbResult = tinycolor(toHslResult).toRgb();
    toRgbResult.r = callback3(0, callback2(255, toRgbResult.r - callback(-num2 / 100 * 255)));
    toRgbResult.g = callback3(0, callback2(255, toRgbResult.g - callback(-num2 / 100 * 255)));
    toRgbResult.b = callback3(0, callback2(255, toRgbResult.b - callback(-num2 / 100 * 255)));
    return tinycolor(toRgbResult);
  }
  function _darken(toHslResult) {
    let num = arg1;
    let num2 = 0;
    if (0 !== arg1) {
      if (!num) {
        num = 10;
      }
      num2 = num;
    }
    toHslResult = tinycolor(toHslResult).toHsl();
    toHslResult.l = toHslResult.l - num2 / 100;
    toHslResult.l = clamp01(toHslResult.l);
    return tinycolor(toHslResult);
  }
  function _spin(toHslResult) {
    toHslResult = tinycolor(toHslResult).toHsl();
    const result = (toHslResult.h + arg1) % 360;
    let sum = result;
    if (result < 0) {
      sum = 360 + result;
    }
    toHslResult.h = sum;
    return tinycolor(toHslResult);
  }
  function _complement(toHslResult) {
    toHslResult = tinycolor(toHslResult).toHsl();
    toHslResult.h = (toHslResult.h + 180) % 360;
    return tinycolor(toHslResult);
  }
  function _triad(toHslResult) {
    let obj = tinycolor(toHslResult);
    toHslResult = obj.toHsl();
    const h = toHslResult.h;
    const items = [tinycolor(toHslResult), , ];
    obj = { h: (h + 120) % 360, s: toHslResult.s, l: toHslResult.l };
    items[1] = tinycolor(obj);
    obj = { h: (h + 240) % 360, s: toHslResult.s, l: toHslResult.l };
    items[2] = tinycolor(obj);
    return items;
  }
  function _tetrad(toHslResult) {
    let obj = tinycolor(toHslResult);
    toHslResult = obj.toHsl();
    const h = toHslResult.h;
    const items = [tinycolor(toHslResult), , , ];
    obj = { h: (h + 90) % 360, s: toHslResult.s, l: toHslResult.l };
    items[1] = tinycolor(obj);
    obj = { h: (h + 180) % 360, s: toHslResult.s, l: toHslResult.l };
    items[2] = tinycolor(obj);
    items[3] = tinycolor({ h: (h + 270) % 360, s: toHslResult.s, l: toHslResult.l });
    return items;
  }
  function _splitcomplement(toHslResult) {
    let obj = tinycolor(toHslResult);
    toHslResult = obj.toHsl();
    const h = toHslResult.h;
    const items = [tinycolor(toHslResult), , ];
    obj = { h: (h + 72) % 360, s: toHslResult.s, l: toHslResult.l };
    items[1] = tinycolor(obj);
    obj = { h: (h + 216) % 360, s: toHslResult.s, l: toHslResult.l };
    items[2] = tinycolor(obj);
    return items;
  }
  function _analogous(toHslResult) {
    let num = arg1;
    let num2 = arg2;
    if (!arg1) {
      num = 6;
    }
    if (!num2) {
      num2 = 30;
    }
    toHslResult = tinycolor(toHslResult).toHsl();
    const result = 360 / num2;
    const items = [tinycolor(toHslResult)];
    toHslResult.h = (toHslResult.h - (result * num >> 1) + 720) % 360;
    let diff = num - 1;
    while (diff) {
      toHslResult.h = (toHslResult.h + result) % 360;
      let tmp4 = tinycolor;
      let arr = items.push(tinycolor(toHslResult));
      diff = diff - 1;
    }
    return items;
  }
  function _monochromatic(toHslResult) {
    let tmp9;
    let num = arg1;
    if (!arg1) {
      num = 6;
    }
    let obj = tinycolor(toHslResult);
    let v = obj.toHsv().v;
    const items = [];
    let diff = tmp5 - 1;
    if (+num) {
      do {
        let tmp7 = tinycolor;
        obj = { h: tmp2, s: tmp3, v };
        let arr = items.push(tinycolor(obj));
        v = (v + tmp4) % 1;
        tmp9 = +diff;
        diff = tmp9 - 1;
      } while (tmp9);
    }
    return items;
  }
  function boundAlpha(_a) {
    let num = parseFloat(_a);
    let isNaNResult = isNaN(num);
    if (!isNaNResult) {
      isNaNResult = num < 0;
    }
    if (!isNaNResult) {
      isNaNResult = num > 1;
    }
    if (isNaNResult) {
      num = 1;
    }
    return num;
  }
  function bound01(_r, arg1) {
    let tmp = "string" === typeof _r;
    if (tmp) {
      tmp = -1 != _r.indexOf(".");
    }
    if (tmp) {
      const _parseFloat = parseFloat;
      tmp = 1 === parseFloat(_r);
    }
    let str2 = _r;
    if (tmp) {
      str2 = "100%";
    }
    let tmp3 = "string" === typeof str2;
    if (tmp3) {
      tmp3 = -1 != str2.indexOf("%");
    }
    const tmp4 = callback2(arg1, callback3(0, parseFloat(str2)));
    let result = tmp4;
    if (tmp3) {
      const _parseInt = parseInt;
      result = parseInt(tmp4 * arg1, 10) / 100;
    }
    let num6 = 1;
    if (_Math.abs(result - arg1) >= 0.000001) {
      const _parseFloat2 = parseFloat;
      const result1 = result % arg1;
      num6 = result1 / parseFloat(arg1);
    }
    return num6;
  }
  function clamp01(l) {
    return callback2(1, callback3(0, l));
  }
  function parseIntFromHex(replaced) {
    return parseInt(replaced, 16);
  }
  function pad2(arg0) {
    if (1 == arg0.length) {
      let text = `0${arg0}`;
    } else {
      text = `${arg0}`;
    }
    return text;
  }
  function convertToPercentage(arg0) {
    let text = arg0;
    if (arg0 <= 1) {
      text = `${100 * arg0}%`;
    }
    return text;
  }
  function convertDecimalToHex(_a) {
    return _Math.round(255 * parseFloat(_a)).toString(16);
  }
  function convertHexToDecimal(replaced) {
    return parseIntFromHex(replaced) / 255;
  }
  function isValidCSSUnit(arg0) {
    const CSS_UNIT = obj.CSS_UNIT;
    return CSS_UNIT.exec(arg0);
  }
  const re1 = /^\s+/;
  const re2 = /\s+$/;
  let c3 = 0;
  ({ round: closure_4, min: closure_5, max: closure_6, random: closure_7 } = Math);
  tinycolor.prototype = {
    isDark() {
      return this.getBrightness() < 128;
    },
    isLight() {
      return !this.isDark();
    },
    isValid() {
      return this._ok;
    },
    getOriginalInput() {
      return this._originalInput;
    },
    getFormat() {
      return this._format;
    },
    getAlpha() {
      return this._a;
    },
    getBrightness() {
      const toRgbResult = this.toRgb();
      return (299 * toRgbResult.r + 587 * toRgbResult.g + 114 * toRgbResult.b) / 1000;
    },
    getLuminance() {
      const toRgbResult = this.toRgb();
      const result = toRgbResult.r / 255;
      const result1 = toRgbResult.g / 255;
      const result2 = toRgbResult.b / 255;
      if (result <= 0.03928) {
        let result3 = result / 12.92;
      } else {
        result3 = _Math.pow((result + 0.055) / 1.055, 2.4);
      }
      const result4 = 0.2126 * result3;
      if (result1 <= 0.03928) {
        let result5 = result1 / 12.92;
      } else {
        result5 = _Math.pow((result1 + 0.055) / 1.055, 2.4);
      }
      const result6 = 0.7152 * result5;
      if (result2 <= 0.03928) {
        let result7 = result2 / 12.92;
      } else {
        result7 = _Math.pow((result2 + 0.055) / 1.055, 2.4);
      }
      return result4 + result6 + 0.0722 * result7;
    },
    setAlpha(_a) {
      this._a = boundAlpha(_a);
      this._roundA = callback(100 * this._a) / 100;
      return this;
    },
    toHsv() {
      const tmp = rgbToHsv(this._r, this._g, this._b);
      return { h: 360 * tmp.h, s: tmp.s, v: tmp.v, a: this._a };
    },
    toHsvString() {
      const tmp = rgbToHsv(this._r, this._g, this._b);
      const tmp2 = callback(360 * tmp.h);
      const tmp3 = callback(100 * tmp.s);
      const tmp4 = callback(100 * tmp.v);
      if (1 == this._a) {
        let text = `${"hsv(" + tmp2 + ", " + tmp3 + "%, " + tmp4}%)`;
      } else {
        text = `${"hsva(" + tmp2 + ", " + tmp3 + "%, " + tmp4 + "%, " + this._roundA})`;
      }
      return text;
    },
    toHsl() {
      const tmp = rgbToHsl(this._r, this._g, this._b);
      return { h: 360 * tmp.h, s: tmp.s, l: tmp.l, a: this._a };
    },
    toHslString() {
      const tmp = rgbToHsl(this._r, this._g, this._b);
      const tmp2 = callback(360 * tmp.h);
      const tmp3 = callback(100 * tmp.s);
      const tmp4 = callback(100 * tmp.l);
      if (1 == this._a) {
        let text = `${"hsl(" + tmp2 + ", " + tmp3 + "%, " + tmp4}%)`;
      } else {
        text = `${"hsla(" + tmp2 + ", " + tmp3 + "%, " + tmp4 + "%, " + this._roundA})`;
      }
      return text;
    },
    toHex(arg0) {
      return rgbToHex(this._r, this._g, this._b, arg0);
    },
    toHexString(arg0) {
      return "#" + this.toHex(arg0);
    },
    toHex8(arg0) {
      let _a;
      let _b;
      let _g;
      let str12;
      let str13;
      ({ _g, _b, _a } = this);
      const items = [pad2(callback(this._r).toString(16)), , , ];
      const str = callback(this._r);
      items[1] = pad2(callback(_g).toString(16));
      const str2 = callback(_g);
      items[2] = pad2(callback(_b).toString(16));
      items[3] = pad2(convertDecimalToHex(_a));
      if (arg0) {
        if (charAtResult == str5.charAt(1)) {
          if (charAtResult1 == str7.charAt(1)) {
            if (charAtResult2 == str9.charAt(1)) {
              if (charAtResult3 == str11.charAt(1)) {
                [str12, str13] = items;
                const sum = str12.charAt(0) + str13.charAt(0);
                const sum1 = sum + items[2].charAt(0);
                let sum2 = sum1 + items[3].charAt(0);
                const charAtResult4 = str12.charAt(0);
                const str14 = items[2];
                const str15 = items[3];
              }
              return sum2;
            }
            charAtResult2 = items[2].charAt(0);
            const str8 = items[2];
            str9 = items[2];
          }
          charAtResult1 = items[1].charAt(0);
          const str6 = items[1];
          str7 = items[1];
        }
        charAtResult = items[0].charAt(0);
        const str4 = items[0];
        str5 = items[0];
      }
      sum2 = items.join("");
    },
    toHex8String(arg0) {
      return "#" + this.toHex8(arg0);
    },
    toRgb(arg0) {
      return { r: callback(this._r), g: callback(this._g), b: callback(this._b), a: this._a };
    },
    toRgbString() {
      const self = this;
      if (1 == this._a) {
        const text = `rgb(${closure_4(self._r)}`;
        const text1 = `${`rgb(${closure_4(self._r)}`}, ${closure_4(self._g)}`;
        let text2 = `${tmp10 + ", " + closure_4(self._b)})`;
      } else {
        const text3 = `rgba(${closure_4(self._r)}`;
        const text4 = `${`rgba(${closure_4(self._r)}`}, ${closure_4(self._g)}`;
        text2 = `${tmp4 + ", " + closure_4(self._b) + ", " + self._roundA})`;
      }
      return text2;
    },
    toPercentageRgb() {
      return { r: `${closure_4(100 * bound01(this._r, 255))}%`, g: `${closure_4(100 * bound01(this._g, 255))}%`, b: `${closure_4(100 * bound01(this._b, 255))}%`, a: this._a };
    },
    toPercentageRgbString() {
      const self = this;
      if (1 == this._a) {
        const text = `rgb(${closure_4(100 * bound01(self._r, 255))}`;
        const text1 = `${`rgb(${closure_4(100 * bound01(self._r, 255))}`}%, ${closure_4(100 * bound01(self._g, 255))}`;
        let text2 = `${tmp5 + "%, " + closure_4(100 * bound01(self._b, 255))}%)`;
      } else {
        const text3 = `rgba(${closure_4(100 * bound01(self._r, 255))}`;
        const text4 = `${`rgba(${closure_4(100 * bound01(self._r, 255))}`}%, ${closure_4(100 * bound01(self._g, 255))}`;
        text2 = `${tmp12 + "%, " + closure_4(100 * bound01(self._b, 255)) + "%, " + self._roundA})`;
      }
      return text2;
    },
    toName() {
      const self = this;
      let str = "transparent";
      if (0 !== this._a) {
        let tmp2 = !tmp;
        if (self._a >= 1) {
          tmp2 = obj[rgbToHex(undefined, self._r, self._g, self._b, true)] || false;
          const tmp5 = obj[rgbToHex(undefined, self._r, self._g, self._b, true)] || false;
        }
        str = tmp2;
      }
      return str;
    },
    toFilter(toHslResult) {
      const text = `#${rgbaToArgbHex(this._r, this._g, this._b, this._a)}`;
      let str = "";
      if (this._gradientType) {
        str = "GradientType = 1, ";
      }
      let text1 = text;
      if (toHslResult) {
        const tmp4 = tinycolor(toHslResult);
        text1 = `#${rgbaToArgbHex(tmp4._r, tmp4._g, tmp4._b, tmp4._a)}`;
      }
      return "progid:DXImageTransform.Microsoft.gradient(" + str + "startColorstr=" + text + ",endColorstr=" + text1 + ")";
    },
    toString(arg0) {
      let _format = arg0;
      const self = this;
      if (!arg0) {
        _format = self._format;
      }
      let tmp2 = self._a < 1;
      if (tmp2) {
        tmp2 = self._a >= 0;
      }
      if (tmp) {
        if (tmp2) {
          if ("name" === _format) {
            if (0 === self._a) {
              let toNameResult = self.toName();
            }
          }
          toNameResult = self.toRgbString();
        }
        return toNameResult;
      }
      let flag = false;
      if ("rgb" === _format) {
        flag = self.toRgbString();
      }
      if ("prgb" === _format) {
        flag = self.toPercentageRgbString();
      }
      let tmp4 = "hex" !== _format;
      if (tmp4) {
        tmp4 = "hex6" !== _format;
      }
      if (!tmp4) {
        flag = self.toHexString();
      }
      if ("hex3" === _format) {
        flag = self.toHexString(true);
      }
      if ("hex4" === _format) {
        flag = self.toHex8String(true);
      }
      if ("hex8" === _format) {
        flag = self.toHex8String();
      }
      if ("name" === _format) {
        flag = self.toName();
      }
      if ("hsl" === _format) {
        flag = self.toHslString();
      }
      if ("hsv" === _format) {
        flag = self.toHsvString();
      }
      if (!flag) {
        flag = self.toHexString();
      }
      toNameResult = flag;
    },
    clone() {
      return tinycolor(this.toString());
    },
    _applyModification(_brighten, arg1) {
      const items = [this];
      const slice = [].slice;
      const applyResult = _brighten.apply(null, items.concat(slice.call(arg1)));
      ({ _r: this._r, _g: this._g, _b: this._b } = applyResult);
      this.setAlpha(applyResult._a);
      return this;
    },
    lighten() {
      return this._applyModification(_lighten, arguments);
    },
    brighten(arg0) {
      return this._applyModification(_brighten, arguments);
    },
    darken() {
      return this._applyModification(_darken, arguments);
    },
    desaturate() {
      return this._applyModification(_desaturate, arguments);
    },
    saturate() {
      return this._applyModification(_saturate, arguments);
    },
    greyscale() {
      return this._applyModification(_greyscale, arguments);
    },
    spin() {
      return this._applyModification(_spin, arguments);
    },
    _applyCombination(_analogous, arg1) {
      const items = [this];
      const slice = [].slice;
      return _analogous.apply(null, items.concat(slice.call(arg1)));
    },
    analogous() {
      return this._applyCombination(_analogous, arguments);
    },
    complement() {
      return this._applyCombination(_complement, arguments);
    },
    monochromatic() {
      return this._applyCombination(_monochromatic, arguments);
    },
    splitcomplement() {
      return this._applyCombination(_splitcomplement, arguments);
    },
    triad() {
      return this._applyCombination(_triad, arguments);
    },
    tetrad() {
      return this._applyCombination(_tetrad, arguments);
    }
  };
  let obj = { aliceblue: "f0f8ff", antiquewhite: "faebd7", aqua: "0ff", aquamarine: "7fffd4", azure: "f0ffff", beige: "f5f5dc", bisque: "ffe4c4", black: "000", blanchedalmond: "ffebcd", blue: "00f", blueviolet: "8a2be2", brown: "a52a2a", burlywood: "deb887", burntsienna: "ea7e5d", cadetblue: "5f9ea0", chartreuse: "7fff00", chocolate: "d2691e", coral: "ff7f50", cornflowerblue: "6495ed", cornsilk: "fff8dc", crimson: "dc143c", cyan: "0ff", darkblue: "00008b", darkcyan: "008b8b", darkgoldenrod: "b8860b", darkgray: "a9a9a9", darkgreen: "006400", darkgrey: "a9a9a9", darkkhaki: "bdb76b", darkmagenta: "8b008b", darkolivegreen: "556b2f", darkorange: "ff8c00", darkorchid: "9932cc", darkred: "8b0000", darksalmon: "e9967a", darkseagreen: "8fbc8f", darkslateblue: "483d8b", darkslategray: "2f4f4f", darkslategrey: "2f4f4f", darkturquoise: "00ced1", darkviolet: "9400d3", deeppink: "ff1493", deepskyblue: "00bfff", dimgray: "696969", dimgrey: "696969", dodgerblue: "1e90ff", firebrick: "b22222", floralwhite: "fffaf0", forestgreen: "228b22", fuchsia: "f0f", gainsboro: "dcdcdc", ghostwhite: "f8f8ff", gold: "ffd700", goldenrod: "daa520", gray: "808080", green: "008000", greenyellow: "adff2f", grey: "808080", honeydew: "f0fff0", hotpink: "ff69b4", indianred: "cd5c5c", indigo: "4b0082", ivory: "fffff0", khaki: "f0e68c", lavender: "e6e6fa", lavenderblush: "fff0f5", lawngreen: "7cfc00", lemonchiffon: "fffacd", lightblue: "add8e6", lightcoral: "f08080", lightcyan: "e0ffff", lightgoldenrodyellow: "fafad2", lightgray: "d3d3d3", lightgreen: "90ee90", lightgrey: "d3d3d3", lightpink: "ffb6c1", lightsalmon: "ffa07a", lightseagreen: "20b2aa", lightskyblue: "87cefa", lightslategray: "789", lightslategrey: "789", lightsteelblue: "b0c4de", lightyellow: "ffffe0", lime: "0f0", limegreen: "32cd32", linen: "faf0e6", magenta: "f0f", maroon: "800000", mediumaquamarine: "66cdaa", mediumblue: "0000cd", mediumorchid: "ba55d3", mediumpurple: "9370db", mediumseagreen: "3cb371", mediumslateblue: "7b68ee", mediumspringgreen: "00fa9a", mediumturquoise: "48d1cc", mediumvioletred: "c71585", midnightblue: "191970", mintcream: "f5fffa", mistyrose: "ffe4e1", moccasin: "ffe4b5", navajowhite: "ffdead", navy: "000080", oldlace: "fdf5e6", olive: "808000", olivedrab: "6b8e23", orange: "ffa500", orangered: "ff4500", orchid: "da70d6", palegoldenrod: "eee8aa", palegreen: "98fb98", paleturquoise: "afeeee", palevioletred: "db7093", papayawhip: "ffefd5", peachpuff: "ffdab9", peru: "cd853f", pink: "ffc0cb", plum: "dda0dd", powderblue: "b0e0e6", purple: "800080", rebeccapurple: "663399", red: "f00", rosybrown: "bc8f8f", royalblue: "4169e1", saddlebrown: "8b4513", salmon: "fa8072", sandybrown: "f4a460", seagreen: "2e8b57", seashell: "fff5ee", sienna: "a0522d", silver: "c0c0c0", skyblue: "87ceeb", slateblue: "6a5acd", slategray: "708090", slategrey: "708090", snow: "fffafa", springgreen: "00ff7f", steelblue: "4682b4", tan: "d2b48c", teal: "008080", thistle: "d8bfd8", tomato: "ff6347", turquoise: "40e0d0", violet: "ee82ee", wheat: "f5deb3", white: "fff", whitesmoke: "f5f5f5", yellow: "ff0", yellowgreen: "9acd32" };
  tinycolor.names = obj;
  obj = {};
  for (const key10087 in obj) {
    let tmp11 = key10087;
    if (!obj.hasOwnProperty(key10087)) {
      continue;
    } else {
      obj[obj[key10087]] = key10087;
      continue;
    }
    class tinycolor {
      constructor(arg0, arg1) {
        str = arg0;
        obj = arg1;
        self = this;
        if (!arg1) {
          obj = {};
        }
        if (!str) {
          str = "";
        }
        if (str instanceof tinycolor) {
          return str;
        } else {
          tmp = tinycolor;
          if (self instanceof tinycolor) {
            tmp9 = (function inputToRGB(toHslResult) {
              let b;
              let g;
              let obj = { r: 0, g: 0, b: 0 };
              if ("string" !== typeof toHslResult) {
                let num36 = 1;
                let tmp30 = obj;
                let num37 = 1;
                let flag3 = false;
                let flag4 = false;
                if ("object" === typeof toHslResult) {
                  if (outer1_37(toHslResult.r)) {
                    if (outer1_37(toHslResult.g)) {
                      if (outer1_37(toHslResult.b)) {
                        obj = {};
                        ({ g, b } = toHslResult);
                        obj.r = 255 * outer1_30(toHslResult.r, 255);
                        obj.g = 255 * outer1_30(g, 255);
                        obj.b = 255 * outer1_30(b, 255);
                        const _String = String;
                        let str9 = "rgb";
                        if ("%" === str8.substr(-1)) {
                          str9 = "prgb";
                        }
                        let flag5 = true;
                        let str7 = str9;
                        str8 = String(toHslResult.r);
                      }
                      if (toHslResult.hasOwnProperty("a")) {
                        num36 = toHslResult.a;
                      }
                      num37 = num36;
                      tmp30 = obj;
                      flag3 = flag5;
                      flag4 = str7;
                    }
                  }
                  if (outer1_37(toHslResult.h)) {
                    if (outer1_37(toHslResult.s)) {
                      if (outer1_37(toHslResult.v)) {
                        const tmp43 = outer1_34(toHslResult.s);
                        let result = 6 * outer1_30(toHslResult.h, 360);
                        const tmp47 = outer1_30(tmp43, 100);
                        const tmp48 = outer1_30(outer1_34(toHslResult.v), 100);
                        const floorResult = outer1_0.floor(result);
                        let diff = result - floorResult;
                        const result1 = tmp48 * (num36 - tmp47);
                        const result2 = tmp48 * (num36 - diff * tmp47);
                        const result3 = tmp48 * (num36 - (num36 - diff) * tmp47);
                        const result4 = floorResult % 6;
                        const items = [tmp48, result2, result1, result1, result3, tmp48];
                        const items1 = [result3, tmp48, tmp48, result2, result1, result1];
                        const items2 = [result1, result1, result3, tmp48, tmp48, result2];
                        obj = { r: 255 * items[result4], g: 255 * items1[result4], b: 255 * items2[result4] };
                        flag5 = true;
                        str7 = "hsv";
                        const tmp44 = outer1_34(toHslResult.v);
                      }
                    }
                  }
                  let tmp37 = outer1_37(toHslResult.h);
                  if (tmp37) {
                    tmp37 = outer1_37(toHslResult.s);
                  }
                  if (tmp37) {
                    tmp37 = outer1_37(toHslResult.l);
                  }
                  flag5 = false;
                  str7 = false;
                  if (tmp37) {
                    obj = (function hslToRgb(h, arg1, arg2) {
                      function hue2rgb(diff, result, sum) {
                        if (sum < 0) {
                          sum = sum + 1;
                        }
                        diff = sum;
                        if (sum > 1) {
                          diff = sum - 1;
                        }
                        if (diff < 0.16666666666666666) {
                          let sum1 = diff + 6 * (result - diff) * diff;
                        } else {
                          sum1 = result;
                          if (diff >= 0.5) {
                            let sum2 = diff;
                            if (diff < 0.6666666666666666) {
                              sum2 = diff + (result - diff) * (0.6666666666666666 - diff) * 6;
                            }
                            sum1 = sum2;
                          }
                        }
                        return sum1;
                      }
                      const tmp = outer2_30(h, 360);
                      const tmp2 = outer2_30(arg1, 100);
                      let sum = outer2_30(arg2, 100);
                      if (0 === tmp2) {
                        const obj = { r: 255 * sum, g: 255 * tmp4, b: 255 * tmp5 };
                        return obj;
                      } else {
                        if (sum < 0.5) {
                          let result = sum * (1 + tmp2);
                        } else {
                          result = sum + tmp2 - sum * tmp2;
                        }
                        let diff = 2 * sum - result;
                        sum = tmp + 0.3333333333333333;
                        hue2rgb(diff, result, sum);
                        hue2rgb(diff, result, tmp);
                        hue2rgb(diff, result, tmp - 0.3333333333333333);
                      }
                    })(toHslResult.h, outer1_34(toHslResult.s), outer1_34(toHslResult.l));
                    flag5 = true;
                    str7 = "hsl";
                    const tmp41 = outer1_34(toHslResult.s);
                  }
                }
                const obj1 = { ok: flag3 };
                let format = toHslResult.format;
                if (!format) {
                  format = flag4;
                }
                obj1.format = format;
                obj1.r = outer1_5(255, outer1_6(tmp30.r, 0));
                obj1.g = outer1_5(255, outer1_6(tmp30.g, 0));
                obj1.b = outer1_5(255, outer1_6(tmp30.b, 0));
                obj1.a = outer1_29(num37);
                return obj1;
              } else {
                const str13 = toHslResult.replace(outer1_1, "");
                let rgb = toHslResult.replace(outer1_1, "").replace(outer1_2, "").toLowerCase();
                if (outer1_8[rgb]) {
                  let tmp = outer1_8[rgb];
                  let flag = true;
                } else {
                  tmp = rgb;
                  flag = false;
                  if ("transparent" == rgb) {
                    let flag2 = { r: 0, g: 0, b: 0, a: 0, format: "name" };
                  }
                }
                rgb = outer1_10.rgb;
                const match = rgb.exec(tmp);
                if (match) {
                  const obj2 = { r: match[1], g: match[2], b: match[3] };
                  flag2 = obj2;
                } else {
                  const rgba = outer1_10.rgba;
                  rgb = rgba.exec(tmp);
                  if (rgb) {
                    const obj3 = { r: rgb[1], g: rgb[2], b: rgb[3], a: rgb[4] };
                    flag2 = obj3;
                  } else {
                    const hsl = outer1_10.hsl;
                    const match1 = hsl.exec(tmp);
                    if (match1) {
                      const obj4 = { h: match1[1], s: match1[2], l: match1[3] };
                      flag2 = obj4;
                    } else {
                      const hsla = outer1_10.hsla;
                      const match2 = hsla.exec(tmp);
                      if (match2) {
                        const obj5 = { h: match2[1], s: match2[2], l: match2[3], a: match2[4] };
                        flag2 = obj5;
                      } else {
                        const hsv = outer1_10.hsv;
                        const match3 = hsv.exec(tmp);
                        if (match3) {
                          const obj6 = { h: match3[1], s: match3[2], v: match3[3] };
                          flag2 = obj6;
                        } else {
                          const hsva = outer1_10.hsva;
                          const match4 = hsva.exec(tmp);
                          if (match4) {
                            const obj7 = { h: match4[1], s: match4[2], v: match4[3], a: match4[4] };
                            flag2 = obj7;
                          } else {
                            const hex8 = outer1_10.hex8;
                            const match5 = hex8.exec(tmp);
                            if (match5) {
                              const obj8 = { r: outer1_32(match5[1]), g: outer1_32(match5[2]), b: outer1_32(match5[3]), a: outer1_36(match5[4]) };
                              let str5 = "hex8";
                              if (flag) {
                                str5 = "name";
                              }
                              obj8.format = str5;
                              flag2 = obj8;
                            } else {
                              const hex6 = outer1_10.hex6;
                              const match6 = hex6.exec(tmp);
                              if (match6) {
                                const obj9 = { r: outer1_32(match6[1]), g: outer1_32(match6[2]), b: outer1_32(match6[3]) };
                                let str4 = "hex";
                                if (flag) {
                                  str4 = "name";
                                }
                                obj9.format = str4;
                                flag2 = obj9;
                              } else {
                                const hex4 = outer1_10.hex4;
                                const match7 = hex4.exec(tmp);
                                if (match7) {
                                  const obj10 = { r: outer1_32("" + match7[1] + match7[1]), g: outer1_32("" + match7[2] + match7[2]), b: outer1_32("" + match7[3] + match7[3]), a: outer1_36("" + match7[4] + match7[4]) };
                                  let str3 = "hex8";
                                  if (flag) {
                                    str3 = "name";
                                  }
                                  obj10.format = str3;
                                  flag2 = obj10;
                                } else {
                                  const hex3 = outer1_10.hex3;
                                  const match8 = hex3.exec(tmp);
                                  flag2 = false;
                                  if (match8) {
                                    const obj11 = { r: outer1_32("" + match8[1] + match8[1]), g: outer1_32("" + match8[2] + match8[2]), b: outer1_32("" + match8[3] + match8[3]) };
                                    let str2 = "hex";
                                    if (flag) {
                                      str2 = "name";
                                    }
                                    obj11.format = str2;
                                    flag2 = obj11;
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
                const str14 = toHslResult.replace(outer1_1, "").replace(outer1_2, "");
              }
            })(str);
            self._originalInput = str;
            ({ r: self._r, g: self._g, b: self._b, a: self._a } = tmp9);
            tmp10 = round;
            num = 100;
            self._roundA = round(100 * self._a) / 100;
            self._format = obj.format || tmp9.format;
            self._gradientType = obj.gradientType;
            num2 = 1;
            if (self._r < 1) {
              tmp11 = round;
              self._r = round(self._r);
            }
            if (self._g < 1) {
              tmp12 = round;
              self._g = round(self._g);
            }
            if (self._b < 1) {
              tmp13 = round;
              self._b = round(self._b);
            }
            self._ok = tmp9.ok;
            tmp14 = _b;
            tmp15 = +_b;
            _b = tmp15 + 1;
            self._tc_id = tmp15;
            return;
          } else {
            tmp2 = tinycolor;
            prototype = tinycolor.prototype;
            tmp3 = new.target;
            tmp4 = new.target;
            tmp5 = str;
            tmp6 = obj;
            tmp7 = new tinycolor(str, obj);
            tmp8 = tmp7;
            return tmp7;
          }
        }
      }
      static fromRatio(arg0, arg1) {
        tmp2 = arg0;
        if ("object" === typeof arg0) {
          obj = {};
          tmp3 = arg0;
          str = "a";
          tmp2 = obj;
          keys = Object.keys();
          if (keys !== undefined) {
            tmp2 = obj;
            tmp5 = keys[tmp];
            while (tmp5 !== undefined) {
              tmp8 = tmp5;
              if (!arg0.hasOwnProperty(tmp5)) {
                continue;
              } else {
                if ("a" === tmp5) {
                  tmp7 = arg0[tmp5];
                } else {
                  tmp6 = convertToPercentage;
                  tmp7 = convertToPercentage(arg0[tmp5]);
                }
                obj[tmp5] = tmp7;
                continue;
              }
              continue;
            }
          }
        }
        return tinycolor(tmp2, arg1);
      }
      static equals(arg0, arg1) {
        tmp = !arg0 || !arg1;
        tmp2 = !tmp;
        if (!tmp) {
          tmp3 = tinycolor;
          obj = tinycolor(arg0);
          toRgbStringResult = obj.toRgbString();
          obj2 = tinycolor(arg1);
          tmp2 = toRgbStringResult == obj2.toRgbString();
        }
        return tmp2;
      }
      static random() {
        obj = { r: random(), g: random(), b: random() };
        return tinycolor.fromRatio(obj);
      }
      static mix(arg0, arg1, arg2) {
        num = arg2;
        num2 = 0;
        if (0 !== arg2) {
          if (!num) {
            num = 50;
          }
          num2 = num;
        }
        obj = tinycolor(arg0);
        toRgbResult = obj.toRgb();
        obj2 = tinycolor(arg1);
        toRgbResult1 = obj2.toRgb();
        result = num2 / 100;
        obj = { r: (toRgbResult1.r - toRgbResult.r) * result + toRgbResult.r, g: (toRgbResult1.g - toRgbResult.g) * result + toRgbResult.g, b: (toRgbResult1.b - toRgbResult.b) * result + toRgbResult.b, a: (toRgbResult1.a - toRgbResult.a) * result + toRgbResult.a };
        return tinycolor(obj);
      }
      static readability(arg0, arg1) {
        obj = tinycolor(arg0);
        obj2 = tinycolor(arg1);
        luminance = obj.getLuminance();
        sum = closure_0.max(luminance, obj2.getLuminance()) + 0.05;
        luminance1 = obj.getLuminance();
        return sum / (closure_0.min(luminance1, obj2.getLuminance()) + 0.05);
      }
      static isReadable(arg0, arg1, arg2) {
        obj = arg2;
        readabilityResult = tinycolor.readability(arg0, arg1);
        if (!arg2) {
          obj = { level: "AA", size: "small" };
        }
        str = obj.level || "AA";
        str2 = str.toUpperCase();
        str3 = obj.size || "small";
        str4 = str3.toLowerCase();
        tmp2 = "AA" !== str2;
        if (tmp2) {
          str5 = "AAA";
          tmp2 = "AAA" !== str2;
        }
        if (tmp2) {
          str2 = "AA";
        }
        tmp3 = "small" !== str4;
        if (tmp3) {
          str6 = "large";
          tmp3 = "large" !== str4;
        }
        if (tmp3) {
          str4 = "small";
        }
        obj = {};
        obj.level = str2;
        obj.size = str4;
        sum = obj.level + obj.size;
        if ("AAsmall" !== sum) {
          str7 = "AAAlarge";
          if ("AAAlarge" !== sum) {
            str8 = "AAlarge";
            if ("AAlarge" === sum) {
              num2 = 3;
              flag = readabilityResult >= 3;
            } else {
              str9 = "AAAsmall";
              flag = false;
              if ("AAAsmall" === sum) {
                num = 7;
                flag = readabilityResult >= 7;
              }
            }
          }
          return flag;
        }
        flag = readabilityResult >= 4.5;
        return;
      }
      static mostReadable(arg0, arg1, arg2) {
        obj = arg2;
        if (!arg2) {
          obj = {};
        }
        num = 0;
        tmp = null;
        num2 = 0;
        tmp2 = null;
        ({ includeFallbackColors, level, size } = obj);
        if (0 < arg1.length) {
          do {
            tmp3 = tinycolor;
            readabilityResult = tinycolor.readability(arg0, arg1[num]);
            if (readabilityResult > num2) {
              tmp5 = tinycolor;
              tmp = tinycolor(arg1[num]);
              num2 = readabilityResult;
            }
            num = num + 1;
            tmp2 = tmp;
          } while (num < arg1.length);
        }
        mostReadableResult = tmp2;
        if (!tinycolor.isReadable(arg0, tmp2, { level, size })) {
          mostReadableResult = tmp2;
          if (includeFallbackColors) {
            flag = false;
            obj.includeFallbackColors = false;
            tmp7 = tinycolor;
            mostReadableResult = tinycolor.mostReadable(arg0, ["#fff", "#000"], obj);
          }
        }
        return mostReadableResult;
      }
    }
  }
  tinycolor.hexNames = obj;
  obj = {};
  const regExp = new RegExp("(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)");
  obj.CSS_UNIT = regExp;
  const regExp1 = new RegExp("rgb[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?");
  obj.rgb = regExp1;
  const regExp2 = new RegExp("rgba[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?");
  obj.rgba = regExp2;
  const regExp3 = new RegExp("hsl[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?");
  obj.hsl = regExp3;
  const regExp4 = new RegExp("hsla[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?");
  obj.hsla = regExp4;
  const regExp5 = new RegExp("hsv[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?");
  obj.hsv = regExp5;
  const regExp6 = new RegExp("hsva[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?");
  obj.hsva = regExp6;
  obj.hex3 = /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
  obj.hex6 = /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/;
  obj.hex4 = /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
  obj.hex8 = /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/;
  if (undefined !== dependencyMap) {
    if (dependencyMap.exports) {
      dependencyMap.exports = tinycolor;
    }
    class tinycolor {
      constructor(arg0, arg1) {
        str = Math;
        obj = arg1;
        self = this;
        if (!arg1) {
          obj = {};
        }
        if (!str) {
          str = "";
        }
        if (str instanceof tinycolor) {
          return str;
        } else {
          tmp = tinycolor;
          if (self instanceof tinycolor) {
            tmp9 = (function inputToRGB(toHslResult) {
              let b;
              let g;
              let obj = { r: 0, g: 0, b: 0 };
              if ("string" !== typeof toHslResult) {
                let num36 = 1;
                let tmp30 = obj;
                let num37 = 1;
                let flag3 = false;
                let flag4 = false;
                if ("object" === typeof toHslResult) {
                  if (outer1_37(toHslResult.r)) {
                    if (outer1_37(toHslResult.g)) {
                      if (outer1_37(toHslResult.b)) {
                        obj = {};
                        ({ g, b } = toHslResult);
                        obj.r = 255 * outer1_30(toHslResult.r, 255);
                        obj.g = 255 * outer1_30(g, 255);
                        obj.b = 255 * outer1_30(b, 255);
                        const _String = String;
                        let str9 = "rgb";
                        if ("%" === str8.substr(-1)) {
                          str9 = "prgb";
                        }
                        let flag5 = true;
                        let str7 = str9;
                        str8 = String(toHslResult.r);
                      }
                      if (toHslResult.hasOwnProperty("a")) {
                        num36 = toHslResult.a;
                      }
                      num37 = num36;
                      tmp30 = obj;
                      flag3 = flag5;
                      flag4 = str7;
                    }
                  }
                  if (outer1_37(toHslResult.h)) {
                    if (outer1_37(toHslResult.s)) {
                      if (outer1_37(toHslResult.v)) {
                        const tmp43 = outer1_34(toHslResult.s);
                        let result = 6 * outer1_30(toHslResult.h, 360);
                        const tmp47 = outer1_30(tmp43, 100);
                        const tmp48 = outer1_30(outer1_34(toHslResult.v), 100);
                        const floorResult = outer1_0.floor(result);
                        let diff = result - floorResult;
                        const result1 = tmp48 * (num36 - tmp47);
                        const result2 = tmp48 * (num36 - diff * tmp47);
                        const result3 = tmp48 * (num36 - (num36 - diff) * tmp47);
                        const result4 = floorResult % 6;
                        const items = [tmp48, result2, result1, result1, result3, tmp48];
                        const items1 = [result3, tmp48, tmp48, result2, result1, result1];
                        const items2 = [result1, result1, result3, tmp48, tmp48, result2];
                        obj = { r: 255 * items[result4], g: 255 * items1[result4], b: 255 * items2[result4] };
                        flag5 = true;
                        str7 = "hsv";
                        const tmp44 = outer1_34(toHslResult.v);
                      }
                    }
                  }
                  let tmp37 = outer1_37(toHslResult.h);
                  if (tmp37) {
                    tmp37 = outer1_37(toHslResult.s);
                  }
                  if (tmp37) {
                    tmp37 = outer1_37(toHslResult.l);
                  }
                  flag5 = false;
                  str7 = false;
                  if (tmp37) {
                    obj = (function hslToRgb(h, arg1, arg2) {
                      function hue2rgb(diff, result, sum) {
                        if (sum < 0) {
                          sum = sum + 1;
                        }
                        diff = sum;
                        if (sum > 1) {
                          diff = sum - 1;
                        }
                        if (diff < 0.16666666666666666) {
                          let sum1 = diff + 6 * (result - diff) * diff;
                        } else {
                          sum1 = result;
                          if (diff >= 0.5) {
                            let sum2 = diff;
                            if (diff < 0.6666666666666666) {
                              sum2 = diff + (result - diff) * (0.6666666666666666 - diff) * 6;
                            }
                            sum1 = sum2;
                          }
                        }
                        return sum1;
                      }
                      const tmp = outer2_30(h, 360);
                      const tmp2 = outer2_30(arg1, 100);
                      let sum = outer2_30(arg2, 100);
                      if (0 === tmp2) {
                        const obj = { r: 255 * sum, g: 255 * tmp4, b: 255 * tmp5 };
                        return obj;
                      } else {
                        if (sum < 0.5) {
                          let result = sum * (1 + tmp2);
                        } else {
                          result = sum + tmp2 - sum * tmp2;
                        }
                        let diff = 2 * sum - result;
                        sum = tmp + 0.3333333333333333;
                        hue2rgb(diff, result, sum);
                        hue2rgb(diff, result, tmp);
                        hue2rgb(diff, result, tmp - 0.3333333333333333);
                      }
                    })(toHslResult.h, outer1_34(toHslResult.s), outer1_34(toHslResult.l));
                    flag5 = true;
                    str7 = "hsl";
                    const tmp41 = outer1_34(toHslResult.s);
                  }
                }
                const obj1 = { ok: flag3 };
                let format = toHslResult.format;
                if (!format) {
                  format = flag4;
                }
                obj1.format = format;
                obj1.r = outer1_5(255, outer1_6(tmp30.r, 0));
                obj1.g = outer1_5(255, outer1_6(tmp30.g, 0));
                obj1.b = outer1_5(255, outer1_6(tmp30.b, 0));
                obj1.a = outer1_29(num37);
                return obj1;
              } else {
                const str13 = toHslResult.replace(outer1_1, "");
                let rgb = toHslResult.replace(outer1_1, "").replace(outer1_2, "").toLowerCase();
                if (outer1_8[rgb]) {
                  let tmp = outer1_8[rgb];
                  let flag = true;
                } else {
                  tmp = rgb;
                  flag = false;
                  if ("transparent" == rgb) {
                    let flag2 = { r: 0, g: 0, b: 0, a: 0, format: "name" };
                  }
                }
                rgb = outer1_10.rgb;
                const match = rgb.exec(tmp);
                if (match) {
                  const obj2 = { r: match[1], g: match[2], b: match[3] };
                  flag2 = obj2;
                } else {
                  const rgba = outer1_10.rgba;
                  rgb = rgba.exec(tmp);
                  if (rgb) {
                    const obj3 = { r: rgb[1], g: rgb[2], b: rgb[3], a: rgb[4] };
                    flag2 = obj3;
                  } else {
                    const hsl = outer1_10.hsl;
                    const match1 = hsl.exec(tmp);
                    if (match1) {
                      const obj4 = { h: match1[1], s: match1[2], l: match1[3] };
                      flag2 = obj4;
                    } else {
                      const hsla = outer1_10.hsla;
                      const match2 = hsla.exec(tmp);
                      if (match2) {
                        const obj5 = { h: match2[1], s: match2[2], l: match2[3], a: match2[4] };
                        flag2 = obj5;
                      } else {
                        const hsv = outer1_10.hsv;
                        const match3 = hsv.exec(tmp);
                        if (match3) {
                          const obj6 = { h: match3[1], s: match3[2], v: match3[3] };
                          flag2 = obj6;
                        } else {
                          const hsva = outer1_10.hsva;
                          const match4 = hsva.exec(tmp);
                          if (match4) {
                            const obj7 = { h: match4[1], s: match4[2], v: match4[3], a: match4[4] };
                            flag2 = obj7;
                          } else {
                            const hex8 = outer1_10.hex8;
                            const match5 = hex8.exec(tmp);
                            if (match5) {
                              const obj8 = { r: outer1_32(match5[1]), g: outer1_32(match5[2]), b: outer1_32(match5[3]), a: outer1_36(match5[4]) };
                              let str5 = "hex8";
                              if (flag) {
                                str5 = "name";
                              }
                              obj8.format = str5;
                              flag2 = obj8;
                            } else {
                              const hex6 = outer1_10.hex6;
                              const match6 = hex6.exec(tmp);
                              if (match6) {
                                const obj9 = { r: outer1_32(match6[1]), g: outer1_32(match6[2]), b: outer1_32(match6[3]) };
                                let str4 = "hex";
                                if (flag) {
                                  str4 = "name";
                                }
                                obj9.format = str4;
                                flag2 = obj9;
                              } else {
                                const hex4 = outer1_10.hex4;
                                const match7 = hex4.exec(tmp);
                                if (match7) {
                                  const obj10 = { r: outer1_32("" + match7[1] + match7[1]), g: outer1_32("" + match7[2] + match7[2]), b: outer1_32("" + match7[3] + match7[3]), a: outer1_36("" + match7[4] + match7[4]) };
                                  let str3 = "hex8";
                                  if (flag) {
                                    str3 = "name";
                                  }
                                  obj10.format = str3;
                                  flag2 = obj10;
                                } else {
                                  const hex3 = outer1_10.hex3;
                                  const match8 = hex3.exec(tmp);
                                  flag2 = false;
                                  if (match8) {
                                    const obj11 = { r: outer1_32("" + match8[1] + match8[1]), g: outer1_32("" + match8[2] + match8[2]), b: outer1_32("" + match8[3] + match8[3]) };
                                    let str2 = "hex";
                                    if (flag) {
                                      str2 = "name";
                                    }
                                    obj11.format = str2;
                                    flag2 = obj11;
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
                const str14 = toHslResult.replace(outer1_1, "").replace(outer1_2, "");
              }
            })(str);
            self._originalInput = str;
            ({ r: self._r, g: self._g, b: self._b, a: self._a } = tmp9);
            tmp10 = round;
            num = 100;
            self._roundA = round(100 * self._a) / 100;
            self._format = obj.format || tmp9.format;
            self._gradientType = obj.gradientType;
            num2 = 1;
            if (self._r < 1) {
              tmp11 = round;
              self._r = round(self._r);
            }
            if (self._g < 1) {
              tmp12 = round;
              self._g = round(self._g);
            }
            if (self._b < 1) {
              tmp13 = round;
              self._b = round(self._b);
            }
            self._ok = tmp9.ok;
            tmp14 = _b;
            tmp15 = +_b;
            _b = tmp15 + 1;
            self._tc_id = tmp15;
            return;
          } else {
            tmp2 = tinycolor;
            prototype = tinycolor.prototype;
            tmp3 = new.target;
            tmp4 = new.target;
            tmp5 = str;
            tmp6 = obj;
            tmp7 = new tinycolor(str, obj);
            tmp8 = tmp7;
            return tmp7;
          }
        }
      }
      static fromRatio(arg0, arg1) {
        tmp2 = Math;
        if ("object" === typeof Math) {
          obj = {};
          tmp3 = Math;
          str = "a";
          tmp2 = obj;
          keys = Object.keys();
          if (keys !== undefined) {
            tmp2 = obj;
            tmp5 = keys[tmp];
            while (tmp5 !== undefined) {
              tmp8 = tmp5;
              if (!Math.hasOwnProperty(tmp5)) {
                continue;
              } else {
                if ("a" === tmp5) {
                  tmp7 = Math[tmp5];
                } else {
                  tmp6 = convertToPercentage;
                  tmp7 = convertToPercentage(Math[tmp5]);
                }
                obj[tmp5] = tmp7;
                continue;
              }
              continue;
            }
          }
        }
        return tinycolor(tmp2, arg1);
      }
      static equals(arg0, arg1) {
        tmp = !Math || !arg1;
        tmp2 = !tmp;
        if (!tmp) {
          tmp3 = tinycolor;
          obj = tinycolor(Math);
          toRgbStringResult = obj.toRgbString();
          obj2 = tinycolor(arg1);
          tmp2 = toRgbStringResult == obj2.toRgbString();
        }
        return tmp2;
      }
      static random() {
        obj = { r: random(), g: random(), b: random() };
        return tinycolor.fromRatio(obj);
      }
      static mix(arg0, arg1, arg2) {
        num = arg2;
        num2 = 0;
        if (0 !== arg2) {
          if (!num) {
            num = 50;
          }
          num2 = num;
        }
        obj = tinycolor(Math);
        toRgbResult = obj.toRgb();
        obj2 = tinycolor(arg1);
        toRgbResult1 = obj2.toRgb();
        result = num2 / 100;
        obj = { r: (toRgbResult1.r - toRgbResult.r) * result + toRgbResult.r, g: (toRgbResult1.g - toRgbResult.g) * result + toRgbResult.g, b: (toRgbResult1.b - toRgbResult.b) * result + toRgbResult.b, a: (toRgbResult1.a - toRgbResult.a) * result + toRgbResult.a };
        return tinycolor(obj);
      }
      static readability(arg0, arg1) {
        obj = tinycolor(Math);
        obj2 = tinycolor(arg1);
        luminance = obj.getLuminance();
        sum = closure_0.max(luminance, obj2.getLuminance()) + 0.05;
        luminance1 = obj.getLuminance();
        return sum / (closure_0.min(luminance1, obj2.getLuminance()) + 0.05);
      }
      static isReadable(arg0, arg1, arg2) {
        obj = arg2;
        readabilityResult = tinycolor.readability(Math, arg1);
        if (!arg2) {
          obj = { level: "AA", size: "small" };
        }
        str = obj.level || "AA";
        str2 = str.toUpperCase();
        str3 = obj.size || "small";
        str4 = str3.toLowerCase();
        tmp2 = "AA" !== str2;
        if (tmp2) {
          str5 = "AAA";
          tmp2 = "AAA" !== str2;
        }
        if (tmp2) {
          str2 = "AA";
        }
        tmp3 = "small" !== str4;
        if (tmp3) {
          str6 = "large";
          tmp3 = "large" !== str4;
        }
        if (tmp3) {
          str4 = "small";
        }
        obj = {};
        obj.level = str2;
        obj.size = str4;
        sum = obj.level + obj.size;
        if ("AAsmall" !== sum) {
          str7 = "AAAlarge";
          if ("AAAlarge" !== sum) {
            str8 = "AAlarge";
            if ("AAlarge" === sum) {
              num2 = 3;
              flag = readabilityResult >= 3;
            } else {
              str9 = "AAAsmall";
              flag = false;
              if ("AAAsmall" === sum) {
                num = 7;
                flag = readabilityResult >= 7;
              }
            }
          }
          return flag;
        }
        flag = readabilityResult >= 4.5;
        return;
      }
      static mostReadable(arg0, arg1, arg2) {
        obj = arg2;
        if (!arg2) {
          obj = {};
        }
        num = 0;
        tmp = null;
        num2 = 0;
        tmp2 = null;
        ({ includeFallbackColors, level, size } = obj);
        if (0 < arg1.length) {
          do {
            tmp3 = tinycolor;
            readabilityResult = tinycolor.readability(Math, arg1[num]);
            if (readabilityResult > num2) {
              tmp5 = tinycolor;
              tmp = tinycolor(arg1[num]);
              num2 = readabilityResult;
            }
            num = num + 1;
            tmp2 = tmp;
          } while (num < arg1.length);
        }
        mostReadableResult = tmp2;
        if (!tinycolor.isReadable(Math, tmp2, { level, size })) {
          mostReadableResult = tmp2;
          if (includeFallbackColors) {
            flag = false;
            obj.includeFallbackColors = false;
            tmp7 = tinycolor;
            mostReadableResult = tinycolor.mostReadable(Math, ["#fff", "#000"], obj);
          }
        }
        return mostReadableResult;
      }
    }
  }
  if ("function" === typeof globalThis.define) {
    if (globalThis.define.amd) {
      globalThis.define(() => tinycolor);
    }
  }
  window.tinycolor = tinycolor;
})(Math);

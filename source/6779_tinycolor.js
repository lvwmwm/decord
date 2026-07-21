// Module ID: 6779
// Function ID: 53381
// Name: tinycolor
// Dependencies: []

// Module 6779 (tinycolor)
(Math) => {
  const arg4 = Math;
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
          tmp9 = function inputToRGB(toHslResult) {
            let b;
            let g;
            let obj = { EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED: "spring", canManageWebhooks: "linear", canManageGuild: "easeInEaseOut" };
            if ("string" !== typeof toHslResult) {
              let num36 = 1;
              let tmp30 = obj;
              let num37 = 1;
              let flag3 = false;
              let flag4 = false;
              if ("object" === typeof toHslResult) {
                if (callback8(toHslResult.r)) {
                  if (callback8(toHslResult.g)) {
                    if (callback8(toHslResult.b)) {
                      obj = {};
                      ({ g, b } = toHslResult);
                      obj.r = 255 * callback4(toHslResult.r, 255);
                      obj.g = 255 * callback4(g, 255);
                      obj.b = 255 * callback4(b, 255);
                      const _String = String;
                      let str9 = "rgb";
                      if ("%" === str8.substr(-1)) {
                        str9 = "prgb";
                      }
                      let flag5 = true;
                      let str7 = str9;
                      const str8 = String(toHslResult.r);
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
                if (callback8(toHslResult.h)) {
                  if (callback8(toHslResult.s)) {
                    if (callback8(toHslResult.v)) {
                      const tmp43 = callback6(toHslResult.s);
                      const result = 6 * callback4(toHslResult.h, 360);
                      const tmp47 = callback4(tmp43, 100);
                      const tmp48 = callback4(callback6(toHslResult.v), 100);
                      const floorResult = closure_0.floor(result);
                      const diff = result - floorResult;
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
                      const tmp44 = callback6(toHslResult.v);
                    }
                  }
                }
                let tmp37 = callback8(toHslResult.h);
                if (tmp37) {
                  tmp37 = callback8(toHslResult.s);
                }
                if (tmp37) {
                  tmp37 = callback8(toHslResult.l);
                }
                flag5 = false;
                str7 = false;
                if (tmp37) {
                  obj = function hslToRgb(h, arg1, arg2) {
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
                    const tmp = callback(h, 360);
                    const tmp2 = callback(arg1, 100);
                    let sum = callback(arg2, 100);
                    if (0 === tmp2) {
                      const obj = { r: 255 * sum, g: 255 * tmp4, b: 255 * tmp5 };
                      return obj;
                    } else {
                      if (sum < 0.5) {
                        let result = sum * (1 + tmp2);
                      } else {
                        result = sum + tmp2 - sum * tmp2;
                      }
                      const diff = 2 * sum - result;
                      sum = tmp + 0.3333333333333333;
                      hue2rgb(diff, result, sum);
                      hue2rgb(diff, result, tmp);
                      hue2rgb(diff, result, tmp - 0.3333333333333333);
                    }
                  }(toHslResult.h, callback6(toHslResult.s), callback6(toHslResult.l));
                  flag5 = true;
                  str7 = "hsl";
                  const tmp41 = callback6(toHslResult.s);
                }
              }
              const obj1 = { ok: flag3 };
              let format = toHslResult.format;
              if (!format) {
                format = flag4;
              }
              obj1.format = format;
              obj1.r = callback(255, callback2(tmp30.r, 0));
              obj1.g = callback(255, callback2(tmp30.g, 0));
              obj1.b = callback(255, callback2(tmp30.b, 0));
              obj1.a = callback3(num37);
              return obj1;
            } else {
              const str13 = toHslResult.replace(closure_1, "");
              let rgb = toHslResult.replace(closure_1, "").replace(closure_2, "").toLowerCase();
              if (closure_8[rgb]) {
                let tmp = closure_8[rgb];
                let flag = true;
              } else {
                tmp = rgb;
                flag = false;
                if ("transparent" == rgb) {
                  let flag2 = {};
                }
              }
              rgb = closure_10.rgb;
              const match = rgb.exec(tmp);
              if (match) {
                const obj2 = { r: match[1], g: match[2], b: match[3] };
                flag2 = obj2;
              } else {
                const rgba = closure_10.rgba;
                rgb = rgba.exec(tmp);
                if (rgb) {
                  const obj3 = { r: rgb[1], g: rgb[2], b: rgb[3], a: rgb[4] };
                  flag2 = obj3;
                } else {
                  const hsl = closure_10.hsl;
                  const match1 = hsl.exec(tmp);
                  if (match1) {
                    const obj4 = { h: match1[1], s: match1[2], l: match1[3] };
                    flag2 = obj4;
                  } else {
                    const hsla = closure_10.hsla;
                    const match2 = hsla.exec(tmp);
                    if (match2) {
                      const obj5 = { h: match2[1], s: match2[2], l: match2[3], a: match2[4] };
                      flag2 = obj5;
                    } else {
                      const hsv = closure_10.hsv;
                      const match3 = hsv.exec(tmp);
                      if (match3) {
                        const obj6 = { h: match3[1], s: match3[2], v: match3[3] };
                        flag2 = obj6;
                      } else {
                        const hsva = closure_10.hsva;
                        const match4 = hsva.exec(tmp);
                        if (match4) {
                          const obj7 = { h: match4[1], s: match4[2], v: match4[3], a: match4[4] };
                          flag2 = obj7;
                        } else {
                          const hex8 = closure_10.hex8;
                          const match5 = hex8.exec(tmp);
                          if (match5) {
                            const obj8 = { r: callback5(match5[1]), g: callback5(match5[2]), b: callback5(match5[3]), a: callback7(match5[4]) };
                            let str5 = "hex8";
                            if (flag) {
                              str5 = "name";
                            }
                            obj8.format = str5;
                            flag2 = obj8;
                          } else {
                            const hex6 = closure_10.hex6;
                            const match6 = hex6.exec(tmp);
                            if (match6) {
                              const obj9 = { r: callback5(match6[1]), g: callback5(match6[2]), b: callback5(match6[3]) };
                              let str4 = "hex";
                              if (flag) {
                                str4 = "name";
                              }
                              obj9.format = str4;
                              flag2 = obj9;
                            } else {
                              const hex4 = closure_10.hex4;
                              const match7 = hex4.exec(tmp);
                              if (match7) {
                                const obj10 = { r: callback5("" + match7[1] + match7[1]), g: callback5("" + match7[2] + match7[2]), b: callback5("" + match7[3] + match7[3]), a: callback7("" + match7[4] + match7[4]) };
                                let str3 = "hex8";
                                if (flag) {
                                  str3 = "name";
                                }
                                obj10.format = str3;
                                flag2 = obj10;
                              } else {
                                const hex3 = closure_10.hex3;
                                const match8 = hex3.exec(tmp);
                                flag2 = false;
                                if (match8) {
                                  const obj11 = { r: callback5("" + match8[1] + match8[1]), g: callback5("" + match8[2] + match8[2]), b: callback5("" + match8[3] + match8[3]) };
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
              const str14 = toHslResult.replace(closure_1, "").replace(closure_2, "");
            }
          }(str);
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
          tmp14 = closure_3;
          tmp15 = +closure_3;
          closure_3 = tmp15 + 1;
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
              // continue
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
      sum = Math.max(luminance, obj2.getLuminance()) + 0.05;
      luminance1 = obj.getLuminance();
      return sum / (Math.min(luminance1, obj2.getLuminance()) + 0.05);
    }
    static isReadable(arg0, arg1, arg2) {
      obj = arg2;
      readabilityResult = tinycolor.readability(Math, arg1);
      if (!arg2) {
        obj = { "Bool(false)": "/assets/modules/collectibles/web", "Bool(false)": null };
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
          tmp3 = closure_11;
          readabilityResult = closure_11.readability(Math, arg1[num]);
          if (readabilityResult > num2) {
            tmp5 = closure_11;
            tmp = closure_11(arg1[num]);
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
          mostReadableResult = tinycolor.mostReadable(Math, [], obj);
        }
      }
      return mostReadableResult;
    }
  }
  function rgbToHsl(arr, arr, arr) {
    let num = bound01(arr, 255);
    const tmp = bound01(arr, 255);
    const tmp2 = bound01(arr, 255);
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
        const charAtResult1 = items[1].charAt(0);
        const str6 = items[1];
        const str7 = items[1];
      }
      const charAtResult = items[0].charAt(0);
      const str4 = items[0];
      const str5 = items[0];
    }
    sum1 = items.join("");
  }
  function rgbaToArgbHex(arg0, arg1, arg2, _a) {
    const items = [pad2(convertDecimalToHex(_a)), pad2(callback(arg0).toString(16)), , ];
    const str = callback(arg0);
    items[2] = pad2(callback(arg1).toString(16));
    const str2 = callback(arg1);
    items[3] = pad2(callback(arg2).toString(16));
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
        let tmp7 = closure_11;
        obj = { h: tmp2, s: tmp3, v };
        let arr = items.push(closure_11(obj));
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
  function bound01(arr, arg1) {
    let tmp = "string" === typeof arr;
    if (tmp) {
      tmp = -1 != arr.indexOf(".");
    }
    if (tmp) {
      const _parseFloat = parseFloat;
      tmp = 1 === parseFloat(arr);
    }
    let str2 = arr;
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
    if (arr.abs(result - arg1) >= 0.000001) {
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
    return _a.round(255 * parseFloat(_a)).toString(16);
  }
  function convertHexToDecimal(replaced) {
    return parseIntFromHex(replaced) / 255;
  }
  function isValidCSSUnit(arg0) {
    const CSS_UNIT = obj.CSS_UNIT;
    return CSS_UNIT.exec(arg0);
  }
  let closure_1 = /^\s+/;
  let closure_2 = /\s+$/;
  let closure_3 = 0;
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
        result3 = arg0.pow((result + 0.055) / 1.055, 2.4);
      }
      const result4 = 0.2126 * result3;
      if (result1 <= 0.03928) {
        let result5 = result1 / 12.92;
      } else {
        result5 = arg0.pow((result1 + 0.055) / 1.055, 2.4);
      }
      const result6 = 0.7152 * result5;
      if (result2 <= 0.03928) {
        let result7 = result2 / 12.92;
      } else {
        result7 = arg0.pow((result2 + 0.055) / 1.055, 2.4);
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
            const charAtResult2 = items[2].charAt(0);
            const str8 = items[2];
            const str9 = items[2];
          }
          const charAtResult1 = items[1].charAt(0);
          const str6 = items[1];
          const str7 = items[1];
        }
        const charAtResult = items[0].charAt(0);
        const str4 = items[0];
        const str5 = items[0];
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
      return { r: `${closure_4(100 * closure_30(this._r, 255))}%`, g: `${closure_4(100 * closure_30(this._g, 255))}%`, b: `${closure_4(100 * closure_30(this._b, 255))}%`, a: this._a };
    },
    toPercentageRgbString() {
      const self = this;
      if (1 == this._a) {
        const text = `rgb(${closure_4(100 * closure_30(self._r, 255))}`;
        const text1 = `${`rgb(${closure_4(100 * closure_30(self._r, 255))}`}%, ${closure_4(100 * closure_30(self._g, 255))}`;
        let text2 = `${tmp5 + "%, " + closure_4(100 * closure_30(self._b, 255))}%)`;
      } else {
        const text3 = `rgba(${closure_4(100 * closure_30(self._r, 255))}`;
        const text4 = `${`rgba(${closure_4(100 * closure_30(self._r, 255))}`}%, ${closure_4(100 * closure_30(self._g, 255))}`;
        text2 = `${tmp12 + "%, " + closure_4(100 * closure_30(self._b, 255)) + "%, " + self._roundA})`;
      }
      return text2;
    },
    toName() {
      const self = this;
      let str = "transparent";
      if (0 !== this._a) {
        let tmp2 = !tmp;
        if (self._a >= 1) {
          tmp2 = obj[closure_14(undefined, self._r, self._g, self._b, true)] || false;
          const tmp5 = obj[closure_14(undefined, self._r, self._g, self._b, true)] || false;
        }
        str = tmp2;
      }
      return str;
    },
    toFilter(toHslResult) {
      const text = `#${closure_15(this._r, this._g, this._b, this._a)}`;
      let str = "";
      if (this._gradientType) {
        str = "GradientType = 1, ";
      }
      let text1 = text;
      if (toHslResult) {
        const tmp4 = tinycolor(toHslResult);
        text1 = `#${closure_15(tmp4._r, tmp4._g, tmp4._b, tmp4._a)}`;
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
  let obj = {};
  tinycolor.names = obj;
  obj = {};
  for (const key10087 in obj) {
    let tmp11 = key10087;
    if (!obj.hasOwnProperty(key10087)) {
      continue;
    } else {
      obj[obj[key10087]] = key10087;
      // continue
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
            tmp9 = function inputToRGB(toHslResult) {
              let b;
              let g;
              let obj = { EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED: "spring", canManageWebhooks: "linear", canManageGuild: "easeInEaseOut" };
              if ("string" !== typeof toHslResult) {
                let num36 = 1;
                let tmp30 = obj;
                let num37 = 1;
                let flag3 = false;
                let flag4 = false;
                if ("object" === typeof toHslResult) {
                  if (callback8(toHslResult.r)) {
                    if (callback8(toHslResult.g)) {
                      if (callback8(toHslResult.b)) {
                        obj = {};
                        ({ g, b } = toHslResult);
                        obj.r = 255 * callback4(toHslResult.r, 255);
                        obj.g = 255 * callback4(g, 255);
                        obj.b = 255 * callback4(b, 255);
                        const _String = String;
                        let str9 = "rgb";
                        if ("%" === str8.substr(-1)) {
                          str9 = "prgb";
                        }
                        let flag5 = true;
                        let str7 = str9;
                        const str8 = String(toHslResult.r);
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
                  if (callback8(toHslResult.h)) {
                    if (callback8(toHslResult.s)) {
                      if (callback8(toHslResult.v)) {
                        const tmp43 = callback6(toHslResult.s);
                        const result = 6 * callback4(toHslResult.h, 360);
                        const tmp47 = callback4(tmp43, 100);
                        const tmp48 = callback4(callback6(toHslResult.v), 100);
                        const floorResult = closure_0.floor(result);
                        const diff = result - floorResult;
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
                        const tmp44 = callback6(toHslResult.v);
                      }
                    }
                  }
                  let tmp37 = callback8(toHslResult.h);
                  if (tmp37) {
                    tmp37 = callback8(toHslResult.s);
                  }
                  if (tmp37) {
                    tmp37 = callback8(toHslResult.l);
                  }
                  flag5 = false;
                  str7 = false;
                  if (tmp37) {
                    obj = function hslToRgb(h, arg1, arg2) {
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
                      const tmp = callback(h, 360);
                      const tmp2 = callback(arg1, 100);
                      let sum = callback(arg2, 100);
                      if (0 === tmp2) {
                        const obj = { r: 255 * sum, g: 255 * tmp4, b: 255 * tmp5 };
                        return obj;
                      } else {
                        if (sum < 0.5) {
                          let result = sum * (1 + tmp2);
                        } else {
                          result = sum + tmp2 - sum * tmp2;
                        }
                        const diff = 2 * sum - result;
                        sum = tmp + 0.3333333333333333;
                        hue2rgb(diff, result, sum);
                        hue2rgb(diff, result, tmp);
                        hue2rgb(diff, result, tmp - 0.3333333333333333);
                      }
                    }(toHslResult.h, callback6(toHslResult.s), callback6(toHslResult.l));
                    flag5 = true;
                    str7 = "hsl";
                    const tmp41 = callback6(toHslResult.s);
                  }
                }
                const obj1 = { ok: flag3 };
                let format = toHslResult.format;
                if (!format) {
                  format = flag4;
                }
                obj1.format = format;
                obj1.r = callback(255, callback2(tmp30.r, 0));
                obj1.g = callback(255, callback2(tmp30.g, 0));
                obj1.b = callback(255, callback2(tmp30.b, 0));
                obj1.a = callback3(num37);
                return obj1;
              } else {
                const str13 = toHslResult.replace(closure_1, "");
                let rgb = toHslResult.replace(closure_1, "").replace(closure_2, "").toLowerCase();
                if (closure_8[rgb]) {
                  let tmp = closure_8[rgb];
                  let flag = true;
                } else {
                  tmp = rgb;
                  flag = false;
                  if ("transparent" == rgb) {
                    let flag2 = {};
                  }
                }
                rgb = closure_10.rgb;
                const match = rgb.exec(tmp);
                if (match) {
                  const obj2 = { r: match[1], g: match[2], b: match[3] };
                  flag2 = obj2;
                } else {
                  const rgba = closure_10.rgba;
                  rgb = rgba.exec(tmp);
                  if (rgb) {
                    const obj3 = { r: rgb[1], g: rgb[2], b: rgb[3], a: rgb[4] };
                    flag2 = obj3;
                  } else {
                    const hsl = closure_10.hsl;
                    const match1 = hsl.exec(tmp);
                    if (match1) {
                      const obj4 = { h: match1[1], s: match1[2], l: match1[3] };
                      flag2 = obj4;
                    } else {
                      const hsla = closure_10.hsla;
                      const match2 = hsla.exec(tmp);
                      if (match2) {
                        const obj5 = { h: match2[1], s: match2[2], l: match2[3], a: match2[4] };
                        flag2 = obj5;
                      } else {
                        const hsv = closure_10.hsv;
                        const match3 = hsv.exec(tmp);
                        if (match3) {
                          const obj6 = { h: match3[1], s: match3[2], v: match3[3] };
                          flag2 = obj6;
                        } else {
                          const hsva = closure_10.hsva;
                          const match4 = hsva.exec(tmp);
                          if (match4) {
                            const obj7 = { h: match4[1], s: match4[2], v: match4[3], a: match4[4] };
                            flag2 = obj7;
                          } else {
                            const hex8 = closure_10.hex8;
                            const match5 = hex8.exec(tmp);
                            if (match5) {
                              const obj8 = { r: callback5(match5[1]), g: callback5(match5[2]), b: callback5(match5[3]), a: callback7(match5[4]) };
                              let str5 = "hex8";
                              if (flag) {
                                str5 = "name";
                              }
                              obj8.format = str5;
                              flag2 = obj8;
                            } else {
                              const hex6 = closure_10.hex6;
                              const match6 = hex6.exec(tmp);
                              if (match6) {
                                const obj9 = { r: callback5(match6[1]), g: callback5(match6[2]), b: callback5(match6[3]) };
                                let str4 = "hex";
                                if (flag) {
                                  str4 = "name";
                                }
                                obj9.format = str4;
                                flag2 = obj9;
                              } else {
                                const hex4 = closure_10.hex4;
                                const match7 = hex4.exec(tmp);
                                if (match7) {
                                  const obj10 = { r: callback5("" + match7[1] + match7[1]), g: callback5("" + match7[2] + match7[2]), b: callback5("" + match7[3] + match7[3]), a: callback7("" + match7[4] + match7[4]) };
                                  let str3 = "hex8";
                                  if (flag) {
                                    str3 = "name";
                                  }
                                  obj10.format = str3;
                                  flag2 = obj10;
                                } else {
                                  const hex3 = closure_10.hex3;
                                  const match8 = hex3.exec(tmp);
                                  flag2 = false;
                                  if (match8) {
                                    const obj11 = { r: callback5("" + match8[1] + match8[1]), g: callback5("" + match8[2] + match8[2]), b: callback5("" + match8[3] + match8[3]) };
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
                const str14 = toHslResult.replace(closure_1, "").replace(closure_2, "");
              }
            }(str);
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
            tmp14 = closure_3;
            tmp15 = +closure_3;
            closure_3 = tmp15 + 1;
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
                // continue
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
        sum = arg0.max(luminance, obj2.getLuminance()) + 0.05;
        luminance1 = obj.getLuminance();
        return sum / (arg0.min(luminance1, obj2.getLuminance()) + 0.05);
      }
      static isReadable(arg0, arg1, arg2) {
        obj = arg2;
        readabilityResult = tinycolor.readability(arg0, arg1);
        if (!arg2) {
          obj = { "Bool(false)": "/assets/modules/collectibles/web", "Bool(false)": null };
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
            tmp3 = closure_11;
            readabilityResult = closure_11.readability(arg0, arg1[num]);
            if (readabilityResult > num2) {
              tmp5 = closure_11;
              tmp = closure_11(arg1[num]);
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
            mostReadableResult = tinycolor.mostReadable(arg0, [], obj);
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
  if (undefined !== arg4) {
    if (arg4.exports) {
      arg4.exports = tinycolor;
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
            tmp9 = function inputToRGB(toHslResult) {
              let b;
              let g;
              let obj = { EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED: "spring", canManageWebhooks: "linear", canManageGuild: "easeInEaseOut" };
              if ("string" !== typeof toHslResult) {
                let num36 = 1;
                let tmp30 = obj;
                let num37 = 1;
                let flag3 = false;
                let flag4 = false;
                if ("object" === typeof toHslResult) {
                  if (callback8(toHslResult.r)) {
                    if (callback8(toHslResult.g)) {
                      if (callback8(toHslResult.b)) {
                        obj = {};
                        ({ g, b } = toHslResult);
                        obj.r = 255 * callback4(toHslResult.r, 255);
                        obj.g = 255 * callback4(g, 255);
                        obj.b = 255 * callback4(b, 255);
                        const _String = String;
                        let str9 = "rgb";
                        if ("%" === str8.substr(-1)) {
                          str9 = "prgb";
                        }
                        let flag5 = true;
                        let str7 = str9;
                        const str8 = String(toHslResult.r);
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
                  if (callback8(toHslResult.h)) {
                    if (callback8(toHslResult.s)) {
                      if (callback8(toHslResult.v)) {
                        const tmp43 = callback6(toHslResult.s);
                        const result = 6 * callback4(toHslResult.h, 360);
                        const tmp47 = callback4(tmp43, 100);
                        const tmp48 = callback4(callback6(toHslResult.v), 100);
                        const floorResult = closure_0.floor(result);
                        const diff = result - floorResult;
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
                        const tmp44 = callback6(toHslResult.v);
                      }
                    }
                  }
                  let tmp37 = callback8(toHslResult.h);
                  if (tmp37) {
                    tmp37 = callback8(toHslResult.s);
                  }
                  if (tmp37) {
                    tmp37 = callback8(toHslResult.l);
                  }
                  flag5 = false;
                  str7 = false;
                  if (tmp37) {
                    obj = function hslToRgb(h, arg1, arg2) {
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
                      const tmp = callback(h, 360);
                      const tmp2 = callback(arg1, 100);
                      let sum = callback(arg2, 100);
                      if (0 === tmp2) {
                        const obj = { r: 255 * sum, g: 255 * tmp4, b: 255 * tmp5 };
                        return obj;
                      } else {
                        if (sum < 0.5) {
                          let result = sum * (1 + tmp2);
                        } else {
                          result = sum + tmp2 - sum * tmp2;
                        }
                        const diff = 2 * sum - result;
                        sum = tmp + 0.3333333333333333;
                        hue2rgb(diff, result, sum);
                        hue2rgb(diff, result, tmp);
                        hue2rgb(diff, result, tmp - 0.3333333333333333);
                      }
                    }(toHslResult.h, callback6(toHslResult.s), callback6(toHslResult.l));
                    flag5 = true;
                    str7 = "hsl";
                    const tmp41 = callback6(toHslResult.s);
                  }
                }
                const obj1 = { ok: flag3 };
                let format = toHslResult.format;
                if (!format) {
                  format = flag4;
                }
                obj1.format = format;
                obj1.r = callback(255, callback2(tmp30.r, 0));
                obj1.g = callback(255, callback2(tmp30.g, 0));
                obj1.b = callback(255, callback2(tmp30.b, 0));
                obj1.a = callback3(num37);
                return obj1;
              } else {
                const str13 = toHslResult.replace(closure_1, "");
                let rgb = toHslResult.replace(closure_1, "").replace(closure_2, "").toLowerCase();
                if (closure_8[rgb]) {
                  let tmp = closure_8[rgb];
                  let flag = true;
                } else {
                  tmp = rgb;
                  flag = false;
                  if ("transparent" == rgb) {
                    let flag2 = {};
                  }
                }
                rgb = closure_10.rgb;
                const match = rgb.exec(tmp);
                if (match) {
                  const obj2 = { r: match[1], g: match[2], b: match[3] };
                  flag2 = obj2;
                } else {
                  const rgba = closure_10.rgba;
                  rgb = rgba.exec(tmp);
                  if (rgb) {
                    const obj3 = { r: rgb[1], g: rgb[2], b: rgb[3], a: rgb[4] };
                    flag2 = obj3;
                  } else {
                    const hsl = closure_10.hsl;
                    const match1 = hsl.exec(tmp);
                    if (match1) {
                      const obj4 = { h: match1[1], s: match1[2], l: match1[3] };
                      flag2 = obj4;
                    } else {
                      const hsla = closure_10.hsla;
                      const match2 = hsla.exec(tmp);
                      if (match2) {
                        const obj5 = { h: match2[1], s: match2[2], l: match2[3], a: match2[4] };
                        flag2 = obj5;
                      } else {
                        const hsv = closure_10.hsv;
                        const match3 = hsv.exec(tmp);
                        if (match3) {
                          const obj6 = { h: match3[1], s: match3[2], v: match3[3] };
                          flag2 = obj6;
                        } else {
                          const hsva = closure_10.hsva;
                          const match4 = hsva.exec(tmp);
                          if (match4) {
                            const obj7 = { h: match4[1], s: match4[2], v: match4[3], a: match4[4] };
                            flag2 = obj7;
                          } else {
                            const hex8 = closure_10.hex8;
                            const match5 = hex8.exec(tmp);
                            if (match5) {
                              const obj8 = { r: callback5(match5[1]), g: callback5(match5[2]), b: callback5(match5[3]), a: callback7(match5[4]) };
                              let str5 = "hex8";
                              if (flag) {
                                str5 = "name";
                              }
                              obj8.format = str5;
                              flag2 = obj8;
                            } else {
                              const hex6 = closure_10.hex6;
                              const match6 = hex6.exec(tmp);
                              if (match6) {
                                const obj9 = { r: callback5(match6[1]), g: callback5(match6[2]), b: callback5(match6[3]) };
                                let str4 = "hex";
                                if (flag) {
                                  str4 = "name";
                                }
                                obj9.format = str4;
                                flag2 = obj9;
                              } else {
                                const hex4 = closure_10.hex4;
                                const match7 = hex4.exec(tmp);
                                if (match7) {
                                  const obj10 = { r: callback5("" + match7[1] + match7[1]), g: callback5("" + match7[2] + match7[2]), b: callback5("" + match7[3] + match7[3]), a: callback7("" + match7[4] + match7[4]) };
                                  let str3 = "hex8";
                                  if (flag) {
                                    str3 = "name";
                                  }
                                  obj10.format = str3;
                                  flag2 = obj10;
                                } else {
                                  const hex3 = closure_10.hex3;
                                  const match8 = hex3.exec(tmp);
                                  flag2 = false;
                                  if (match8) {
                                    const obj11 = { r: callback5("" + match8[1] + match8[1]), g: callback5("" + match8[2] + match8[2]), b: callback5("" + match8[3] + match8[3]) };
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
                const str14 = toHslResult.replace(closure_1, "").replace(closure_2, "");
              }
            }(str);
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
            tmp14 = closure_3;
            tmp15 = +closure_3;
            closure_3 = tmp15 + 1;
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
                // continue
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
        sum = Math.max(luminance, obj2.getLuminance()) + 0.05;
        luminance1 = obj.getLuminance();
        return sum / (Math.min(luminance1, obj2.getLuminance()) + 0.05);
      }
      static isReadable(arg0, arg1, arg2) {
        obj = arg2;
        readabilityResult = tinycolor.readability(Math, arg1);
        if (!arg2) {
          obj = { "Bool(false)": "/assets/modules/collectibles/web", "Bool(false)": null };
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
            tmp3 = closure_11;
            readabilityResult = closure_11.readability(Math, arg1[num]);
            if (readabilityResult > num2) {
              tmp5 = closure_11;
              tmp = closure_11(arg1[num]);
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
            mostReadableResult = tinycolor.mostReadable(Math, [], obj);
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
}(Math);

// Module ID: 8147
// Function ID: 64444
// Name: hue2rgb
// Dependencies: []

// Module 8147 (hue2rgb)
function hue2rgb(arg0, arg1, arg2) {
  let sum = arg2;
  if (arg2 < 0) {
    sum = arg2 + 1;
  }
  let diff = sum;
  if (sum > 1) {
    diff = sum - 1;
  }
  if (diff < 0.16666666666666666) {
    let sum1 = arg0 + 6 * (arg1 - arg0) * diff;
  } else {
    sum1 = arg1;
    if (diff >= 0.5) {
      let sum2 = arg0;
      if (diff < 0.6666666666666666) {
        sum2 = arg0 + (arg1 - arg0) * (0.6666666666666666 - diff) * 6;
      }
      sum1 = sum2;
    }
  }
  return sum1;
}
function hslToRgb(arg0, arg1, arg2) {
  if (arg2 < 0.5) {
    let result = arg2 * (1 + arg1);
  } else {
    result = arg2 + arg1 - arg2 * arg1;
  }
  const diff = 2 * arg2 - result;
  const tmp3 = hue2rgb(diff, result, arg0 + 0.3333333333333333);
  const tmp4 = hue2rgb(diff, result, arg0);
  const tmp5 = hue2rgb(diff, result, arg0 - 0.3333333333333333);
  const tmp6 = Math.round(255 * tmp3) << 24;
  return tmp6 | Math.round(255 * tmp4) << 16 | Math.round(255 * tmp5) << 8;
}
function call() {
  const length = arguments.length;
  const array = new Array(length);
  for (let num = 0; num < length; num = num + 1) {
    array[num] = arguments[num];
  }
  return "\\(\\s*(" + array.join(")\\s*,?\\s*(") + ")\\s*\\)";
}
function callWithSlashSeparator() {
  const length = arguments.length;
  const arr = new Array(length);
  for (let num = 0; num < length; num = num + 1) {
    arr[num] = arguments[num];
  }
  const substr = arr.slice(0, arr.length - 1);
  return "\\(\\s*(" + substr.join(")\\s*,?\\s*(") + ")\\s*/\\s*(" + arr[arr.length - 1] + ")\\s*\\)";
}
function commaSeparatedCall() {
  const length = arguments.length;
  const array = new Array(length);
  for (let num = 0; num < length; num = num + 1) {
    array[num] = arguments[num];
  }
  return "\\(\\s*(" + array.join(")\\s*,\\s*(") + ")\\s*\\)";
}
function parse255(replaced) {
  const parsed = parseInt(replaced, 10);
  let num = 0;
  if (parsed >= 0) {
    let num2 = 255;
    if (parsed <= 255) {
      num2 = parsed;
    }
    num = num2;
  }
  return num;
}
function parse360(arg0) {
  return (parseFloat(arg0) % 360 + 360) % 360 / 360;
}
function parse1(arg0) {
  const parsed = parseFloat(arg0);
  let num = 0;
  if (parsed >= 0) {
    let num4 = 255;
    if (parsed <= 1) {
      const _Math = Math;
      num4 = Math.round(255 * parsed);
    }
    num = num4;
  }
  return num;
}
function parsePercentage(arg0) {
  const parsed = parseFloat(arg0);
  let num = 0;
  if (parsed >= 0) {
    let num3 = 1;
    if (parsed <= 100) {
      num3 = parsed / 100;
    }
    num = num3;
  }
  return num;
}

export default function normalizeColor(arg0) {
  let tmp = typeof arg0;
  if ("number" === tmp) {
    let tmp64 = null;
    if (arg0 >>> 0 === arg0) {
      tmp64 = null;
      if (arg0 >= 0) {
        tmp64 = null;
        if (arg0 <= 4294967295) {
          tmp64 = arg0;
        }
      }
    }
    return tmp64;
  } else if ("string" !== tmp) {
    return null;
  } else {
    if (undefined === obj) {
      const obj = {};
      const _RegExp = RegExp;
      const regExp = new RegExp("rgb" + call("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+"));
      obj.rgb = regExp;
      const _RegExp2 = RegExp;
      const regExp1 = new RegExp("rgba(" + commaSeparatedCall("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+") + "|" + callWithSlashSeparator("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+") + ")");
      obj.rgba = regExp1;
      const _RegExp3 = RegExp;
      const regExp2 = new RegExp("hsl" + call("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+%", "[-+]?\\d*\\.?\\d+%"));
      obj.hsl = regExp2;
      const _RegExp4 = RegExp;
      const tmp73 = commaSeparatedCall("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+");
      const regExp3 = new RegExp("hsla(" + commaSeparatedCall("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+%", "[-+]?\\d*\\.?\\d+%", "[-+]?\\d*\\.?\\d+") + "|" + callWithSlashSeparator("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+%", "[-+]?\\d*\\.?\\d+%", "[-+]?\\d*\\.?\\d+") + ")");
      obj.hsla = regExp3;
      const _RegExp5 = RegExp;
      const regExp4 = new RegExp("hwb" + call("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+%", "[-+]?\\d*\\.?\\d+%"));
      obj.hwb = regExp4;
      obj.hex3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
      obj.hex4 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
      obj.hex6 = /^#([0-9a-fA-F]{6})$/;
      obj.hex8 = /^#([0-9a-fA-F]{8})$/;
      const tmp83 = commaSeparatedCall("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+%", "[-+]?\\d*\\.?\\d+%", "[-+]?\\d*\\.?\\d+");
    }
    const hex6 = obj.hex6;
    const match = hex6.exec(arg0);
    if (match) {
      const _parseInt4 = parseInt;
      return parseInt(match[1] + "ff", 16) >>> 0;
    } else {
      if ("transparent" === arg0) {
        let num = 0;
      } else if ("aliceblue" === arg0) {
        num = 4042850303;
      } else if ("antiquewhite" === arg0) {
        num = 4209760255;
      } else {
        if ("aqua" !== arg0) {
          if ("cyan" !== arg0) {
            if ("aquamarine" === arg0) {
              num = 2147472639;
            } else if ("azure" === arg0) {
              num = 4043309055;
            } else if ("beige" === arg0) {
              num = 4126530815;
            } else if ("bisque" === arg0) {
              num = 4293182719;
            } else if ("black" === arg0) {
              num = 255;
            } else if ("blanchedalmond" === arg0) {
              num = 4293643775;
            } else if ("blue" === arg0) {
              num = 65535;
            } else if ("blueviolet" === arg0) {
              num = 2318131967;
            } else if ("brown" === arg0) {
              num = 2771004159;
            } else if ("burlywood" === arg0) {
              num = 3736635391;
            } else if ("burntsienna" === arg0) {
              num = 3934150143;
            } else if ("cadetblue" === arg0) {
              num = 1604231423;
            } else if ("chartreuse" === arg0) {
              num = 2147418367;
            } else if ("chocolate" === arg0) {
              num = 3530104575;
            } else if ("coral" === arg0) {
              num = 4286533887;
            } else if ("cornflowerblue" === arg0) {
              num = 1687547391;
            } else if ("cornsilk" === arg0) {
              num = 4294499583;
            } else if ("crimson" === arg0) {
              num = 3692313855;
            } else if ("darkblue" === arg0) {
              num = 35839;
            } else if ("darkcyan" === arg0) {
              num = 9145343;
            } else if ("darkgoldenrod" === arg0) {
              num = 3095792639;
            } else {
              if ("darkgray" !== arg0) {
                if ("darkgrey" !== arg0) {
                  if ("darkgreen" === arg0) {
                    num = 6553855;
                  } else if ("darkkhaki" === arg0) {
                    num = 3182914559;
                  } else if ("darkmagenta" === arg0) {
                    num = 2332068863;
                  } else if ("darkolivegreen" === arg0) {
                    num = 1433087999;
                  } else if ("darkorange" === arg0) {
                    num = 4287365375;
                  } else if ("darkorchid" === arg0) {
                    num = 2570243327;
                  } else if ("darkred" === arg0) {
                    num = 2332033279;
                  } else if ("darksalmon" === arg0) {
                    num = 3918953215;
                  } else if ("darkseagreen" === arg0) {
                    num = 2411499519;
                  } else if ("darkslateblue" === arg0) {
                    num = 1211993087;
                  } else {
                    if ("darkslategray" !== arg0) {
                      if ("darkslategrey" !== arg0) {
                        if ("darkturquoise" === arg0) {
                          num = 13554175;
                        } else if ("darkviolet" === arg0) {
                          num = 2483082239;
                        } else if ("deeppink" === arg0) {
                          num = 4279538687;
                        } else if ("deepskyblue" === arg0) {
                          num = 12582911;
                        } else {
                          if ("dimgray" !== arg0) {
                            if ("dimgrey" !== arg0) {
                              if ("dodgerblue" === arg0) {
                                num = 512819199;
                              } else if ("firebrick" === arg0) {
                                num = 2988581631;
                              } else if ("floralwhite" === arg0) {
                                num = 4294635775;
                              } else if ("forestgreen" === arg0) {
                                num = 579543807;
                              } else {
                                if ("fuchsia" !== arg0) {
                                  if ("magenta" !== arg0) {
                                    if ("gainsboro" === arg0) {
                                      num = 3705462015;
                                    } else if ("ghostwhite" === arg0) {
                                      num = 4177068031;
                                    } else if ("gold" === arg0) {
                                      num = 4292280575;
                                    } else if ("goldenrod" === arg0) {
                                      num = 3668254975;
                                    } else {
                                      if ("gray" !== arg0) {
                                        if ("grey" !== arg0) {
                                          if ("green" === arg0) {
                                            num = 8388863;
                                          } else if ("greenyellow" === arg0) {
                                            num = 2919182335;
                                          } else if ("honeydew" === arg0) {
                                            num = 4043305215;
                                          } else if ("hotpink" === arg0) {
                                            num = 4285117695;
                                          } else if ("indianred" === arg0) {
                                            num = 3445382399;
                                          } else if ("indigo" === arg0) {
                                            num = 1258324735;
                                          } else if ("ivory" === arg0) {
                                            num = 4294963455;
                                          } else if ("khaki" === arg0) {
                                            num = 4041641215;
                                          } else if ("lavender" === arg0) {
                                            num = 3873897215;
                                          } else if ("lavenderblush" === arg0) {
                                            num = 4293981695;
                                          } else if ("lawngreen" === arg0) {
                                            num = 2096890111;
                                          } else if ("lemonchiffon" === arg0) {
                                            num = 4294626815;
                                          } else if ("lightblue" === arg0) {
                                            num = 2916673279;
                                          } else if ("lightcoral" === arg0) {
                                            num = 4034953471;
                                          } else if ("lightcyan" === arg0) {
                                            num = 3774873599;
                                          } else if ("lightgoldenrodyellow" === arg0) {
                                            num = 4210742015;
                                          } else {
                                            if ("lightgray" !== arg0) {
                                              if ("lightgrey" !== arg0) {
                                                if ("lightgreen" === arg0) {
                                                  num = 2431553791;
                                                } else if ("lightpink" === arg0) {
                                                  num = 4290167295;
                                                } else if ("lightsalmon" === arg0) {
                                                  num = 4288707327;
                                                } else if ("lightseagreen" === arg0) {
                                                  num = 548580095;
                                                } else if ("lightskyblue" === arg0) {
                                                  num = 2278488831;
                                                } else {
                                                  if ("lightslategray" !== arg0) {
                                                    if ("lightslategrey" !== arg0) {
                                                      if ("lightsteelblue" === arg0) {
                                                        num = 2965692159;
                                                      } else if ("lightyellow" === arg0) {
                                                        num = 4294959359;
                                                      } else if ("lime" === arg0) {
                                                        num = 16711935;
                                                      } else if ("limegreen" === arg0) {
                                                        num = 852308735;
                                                      } else if ("linen" === arg0) {
                                                        num = 4210091775;
                                                      } else if ("maroon" === arg0) {
                                                        num = 2147483903;
                                                      } else if ("mediumaquamarine" === arg0) {
                                                        num = 1724754687;
                                                      } else if ("mediumblue" === arg0) {
                                                        num = 52735;
                                                      } else if ("mediumorchid" === arg0) {
                                                        num = 3126187007;
                                                      } else if ("mediumpurple" === arg0) {
                                                        num = 2473647103;
                                                      } else if ("mediumseagreen" === arg0) {
                                                        num = 1018393087;
                                                      } else if ("mediumslateblue" === arg0) {
                                                        num = 2070474495;
                                                      } else if ("mediumspringgreen" === arg0) {
                                                        num = 16423679;
                                                      } else if ("mediumturquoise" === arg0) {
                                                        num = 1221709055;
                                                      } else if ("mediumvioletred" === arg0) {
                                                        num = 3340076543;
                                                      } else if ("midnightblue" === arg0) {
                                                        num = 421097727;
                                                      } else if ("mintcream" === arg0) {
                                                        num = 4127193855;
                                                      } else if ("mistyrose" === arg0) {
                                                        num = 4293190143;
                                                      } else if ("moccasin" === arg0) {
                                                        num = 4293178879;
                                                      } else if ("navajowhite" === arg0) {
                                                        num = 4292783615;
                                                      } else if ("navy" === arg0) {
                                                        num = 33023;
                                                      } else if ("oldlace" === arg0) {
                                                        num = 4260751103;
                                                      } else if ("olive" === arg0) {
                                                        num = 2155872511;
                                                      } else if ("olivedrab" === arg0) {
                                                        num = 1804477439;
                                                      } else if ("orange" === arg0) {
                                                        num = 4289003775;
                                                      } else if ("orangered" === arg0) {
                                                        num = 4282712319;
                                                      } else if ("orchid" === arg0) {
                                                        num = 3664828159;
                                                      } else if ("palegoldenrod" === arg0) {
                                                        num = 4008225535;
                                                      } else if ("palegreen" === arg0) {
                                                        num = 2566625535;
                                                      } else if ("paleturquoise" === arg0) {
                                                        num = 2951671551;
                                                      } else if ("palevioletred" === arg0) {
                                                        num = 3681588223;
                                                      } else if ("papayawhip" === arg0) {
                                                        num = 4293907967;
                                                      } else if ("peachpuff" === arg0) {
                                                        num = 4292524543;
                                                      } else if ("peru" === arg0) {
                                                        num = 3448061951;
                                                      } else if ("pink" === arg0) {
                                                        num = 4290825215;
                                                      } else if ("plum" === arg0) {
                                                        num = 3718307327;
                                                      } else if ("powderblue" === arg0) {
                                                        num = 2967529215;
                                                      } else if ("purple" === arg0) {
                                                        num = 2147516671;
                                                      } else if ("rebeccapurple" === arg0) {
                                                        num = 1714657791;
                                                      } else if ("red" === arg0) {
                                                        num = 4278190335;
                                                      } else if ("rosybrown" === arg0) {
                                                        num = 3163525119;
                                                      } else if ("royalblue" === arg0) {
                                                        num = 1097458175;
                                                      } else if ("saddlebrown" === arg0) {
                                                        num = 2336560127;
                                                      } else if ("salmon" === arg0) {
                                                        num = 4202722047;
                                                      } else if ("sandybrown" === arg0) {
                                                        num = 4104413439;
                                                      } else if ("seagreen" === arg0) {
                                                        num = 780883967;
                                                      } else if ("seashell" === arg0) {
                                                        num = 4294307583;
                                                      } else if ("sienna" === arg0) {
                                                        num = 2689740287;
                                                      } else if ("silver" === arg0) {
                                                        num = 3233857791;
                                                      } else if ("skyblue" === arg0) {
                                                        num = 2278484991;
                                                      } else if ("slateblue" === arg0) {
                                                        num = 1784335871;
                                                      } else {
                                                        if ("slategray" !== arg0) {
                                                          if ("slategrey" !== arg0) {
                                                            if ("snow" === arg0) {
                                                              num = 4294638335;
                                                            } else if ("springgreen" === arg0) {
                                                              num = 16744447;
                                                            } else if ("steelblue" === arg0) {
                                                              num = 1182971135;
                                                            } else if ("tan" === arg0) {
                                                              num = 3535047935;
                                                            } else if ("teal" === arg0) {
                                                              num = 8421631;
                                                            } else if ("thistle" === arg0) {
                                                              num = 3636451583;
                                                            } else if ("tomato" === arg0) {
                                                              num = 4284696575;
                                                            } else if ("turquoise" === arg0) {
                                                              num = 1088475391;
                                                            } else if ("violet" === arg0) {
                                                              num = 4001558271;
                                                            } else if ("wheat" === arg0) {
                                                              num = 4125012991;
                                                            } else if ("white" === arg0) {
                                                              num = 4294967295;
                                                            } else if ("whitesmoke" === arg0) {
                                                              num = 4126537215;
                                                            } else if ("yellow" === arg0) {
                                                              num = 4294902015;
                                                            } else {
                                                              num = 2597139199;
                                                              if ("yellowgreen" !== arg0) {
                                                                num = null;
                                                              }
                                                            }
                                                          }
                                                        }
                                                        num = 1887473919;
                                                      }
                                                    }
                                                  }
                                                  num = 2005441023;
                                                }
                                              }
                                            }
                                            num = 3553874943;
                                          }
                                        }
                                      }
                                      num = 2155905279;
                                    }
                                  }
                                }
                                num = 4278255615;
                              }
                            }
                          }
                          num = 1768516095;
                        }
                      }
                    }
                    num = 793726975;
                  }
                }
              }
              num = 2846468607;
            }
          }
        }
        num = 16777215;
      }
      if (null != num) {
        return num;
      } else {
        const rgb = tmp2.rgb;
        const match1 = rgb.exec(arg0);
        if (match1) {
          const tmp59 = parse255(match1[1]) << 24;
          let tmp12 = (tmp59 | parse255(match1[2]) << 16 | parse255(match1[3]) << 8 | 255) >>> 0;
          const tmp60 = parse255(match1[2]) << 16;
        } else {
          const rgba = tmp2.rgba;
          const match2 = rgba.exec(arg0);
          if (match2) {
            let num39 = 6;
            if (undefined !== match2[6]) {
              const tmp53 = parse255(match2[num39]) << 24;
              const tmp54 = parse255(match2[7]) << 16;
              num39 = 0;
              let tmp51 = (tmp53 | tmp54 | parse255(match2[8]) << 8 | parse1(match2[9])) >>> 0;
              const tmp55 = parse255(match2[8]) << 8;
            } else {
              const tmp47 = parse255(match2[2]) << 24;
              const tmp48 = parse255(match2[3]) << 16;
              tmp51 = (tmp47 | tmp48 | parse255(match2[4]) << 8 | parse1(match2[5])) >>> 0;
              const tmp49 = parse255(match2[4]) << 8;
            }
          } else {
            const hex3 = tmp2.hex3;
            const match3 = hex3.exec(arg0);
            if (match3) {
              const _parseInt3 = parseInt;
              tmp12 = parseInt(`${tmp6[1]}${tmp6[1]}${tmp6[2]}${tmp6[2]}${tmp6[3]}${tmp6[3]}ff`, 16) >>> 0;
            } else {
              const hex8 = tmp2.hex8;
              const match4 = hex8.exec(arg0);
              if (match4) {
                const _parseInt2 = parseInt;
                tmp12 = parseInt(match4[1], 16) >>> 0;
              } else {
                const hex4 = tmp2.hex4;
                const match5 = hex4.exec(arg0);
                if (match5) {
                  const _parseInt = parseInt;
                  tmp12 = parseInt(match5[1] + match5[1] + match5[2] + match5[2] + match5[3] + match5[3] + match5[4] + match5[4], 16) >>> 0;
                } else {
                  const hsl = tmp2.hsl;
                  const match6 = hsl.exec(arg0);
                  if (match6) {
                    const tmp40 = parse360(match6[1]);
                    tmp12 = (255 | hslToRgb(tmp40, parsePercentage(match6[2]), parsePercentage(match6[3]))) >>> 0;
                    const tmp42 = parsePercentage(match6[2]);
                  } else {
                    const hsla = tmp2.hsla;
                    const match7 = hsla.exec(arg0);
                    if (match7) {
                      let num11 = 6;
                      if (undefined !== match7[6]) {
                        const tmp32 = parse360(match7[num11]);
                        const tmp34 = parsePercentage(match7[7]);
                        num11 = 0;
                        let tmp29 = (hslToRgb(tmp32, parsePercentage(match7[7]), parsePercentage(match7[8])) | parse1(match7[9])) >>> 0;
                        const tmp35 = hslToRgb(tmp32, parsePercentage(match7[7]), parsePercentage(match7[8]));
                      } else {
                        const tmp24 = parse360(match7[2]);
                        const tmp26 = parsePercentage(match7[3]);
                        tmp29 = (hslToRgb(tmp24, parsePercentage(match7[3]), parsePercentage(match7[4])) | parse1(match7[5])) >>> 0;
                        const tmp27 = hslToRgb(tmp24, parsePercentage(match7[3]), parsePercentage(match7[4]));
                      }
                    } else {
                      const hwb = tmp2.hwb;
                      const match8 = hwb.exec(arg0);
                      tmp12 = null;
                      if (match8) {
                        const tmp14 = parse360(match8[1]);
                        const tmp16 = parsePercentage(match8[2]);
                        const tmp17 = parsePercentage(match8[3]);
                        let sum = tmp16 + tmp17;
                        if (sum >= 1) {
                          const _Math = Math;
                          sum = Math.round(255 * tmp16 / sum);
                          let tmp20 = sum << 24 | sum << 16 | sum << 8;
                        } else {
                          const diff = 1 - tmp16 - tmp17;
                          const sum1 = hue2rgb(0, 1, tmp14 + 0.3333333333333333) * diff + tmp16;
                          const sum2 = hue2rgb(0, 1, tmp14) * diff + tmp16;
                          const _Math2 = Math;
                          const sum3 = hue2rgb(0, 1, tmp14 - 0.3333333333333333) * diff + tmp16;
                          const _Math3 = Math;
                          const _Math4 = Math;
                          tmp = Math.round(255 * sum2) << 16;
                          tmp20 = Math.round(255 * sum1) << 24 | tmp | Math.round(255 * sum3) << 8;
                          const tmp99 = Math.round(255 * sum1) << 24;
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
    }
  }
};

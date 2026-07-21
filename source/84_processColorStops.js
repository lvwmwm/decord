// Module ID: 84
// Function ID: 1499
// Name: processColorStops
// Dependencies: [225, 108, 109]
// Exports: default

// Module 84 (processColorStops)
import FileReaderModule from "FileReaderModule";
import module_108 from "module_108";

function processColorStops(nextResult) {
  const items = [];
  let num = 0;
  if (0 < nextResult.colorStops.length) {
    while (true) {
      let tmp2 = nextResult.colorStops[num];
      let positions = tmp2.positions;
      if (null == tmp2.color) {
        let _Array = Array;
        if (Array.isArray(positions)) {
          if (1 === positions.length) {
            let first = positions[0];
            let tmp18 = typeof first;
            if ("number" !== tmp18) {
              return null;
            }
            let tmp19 = items;
            let obj = { color: null, position: first };
            let arr = items.push(obj);
            let tmp10 = first;
            num = num + 1;
            let tmp = tmp10;
          }
        }
      }
      let tmp3 = arg1;
      let tmp4 = dependencyMap;
      obj = arg1(dependencyMap[2]);
      let defaultResult = obj.default(tmp2.color);
      let tmp6 = defaultResult;
      if (null == defaultResult) {
        break;
      } else {
        if (null != positions) {
          if (positions.length > 0) {
            let tmp11 = positions;
            tmp10 = tmp;
            for (const item10043 of positions) {
              let obj7 = item10043;
              if ("number" !== typeof item10043) {
                let tmp12 = item10043;
                if ("string" === typeof obj7) {
                  let tmp13 = item10043;
                }
                obj3.return();
                return null;
              }
              let tmp14 = items;
              obj = {};
              let tmp15 = defaultResult;
              obj.color = tmp6;
              let tmp16 = item10043;
              obj.position = obj7;
              arr = items.push(obj);
            }
          }
        }
        let tmp7 = items;
        let obj1 = {};
        let tmp8 = defaultResult;
        obj1.color = tmp6;
        obj1.position = null;
        let arr1 = items.push(obj1);
        tmp10 = tmp;
      }
    }
    return null;
  }
  return items;
}
function parseRadialGradientCSSString(str) {
  let tmp = closure_7;
  let tmp2 = closure_8;
  const merged = Object.assign({}, closure_9);
  const parts = str.split(/,(?![^(]*\))/);
  let arr = callback(parts);
  const parts1 = parts[0].trim().split(/\s+/);
  let flag = false;
  let flag2 = false;
  let flag3 = false;
  let str3 = closure_7;
  let tmp7 = closure_8;
  let tmp8 = merged;
  let flag4 = false;
  let flag5 = false;
  let flag6 = false;
  if (parts1.length > 0) {
    while (true) {
      let str4 = parts1.shift();
      let tmp9 = tmp;
      let tmp10 = tmp2;
      let flag7 = flag;
      let flag8 = flag2;
      let tmp11 = flag3;
      let tmp12 = tmp5;
      let tmp13 = tmp6;
      if (null == str4) {
        tmp = tmp9;
        tmp2 = tmp10;
        flag = flag7;
        flag2 = flag8;
        flag3 = tmp11;
        let tmp5 = tmp12;
        let tmp6 = tmp13;
        str3 = tmp9;
        tmp7 = tmp10;
        tmp8 = merged;
        flag4 = flag7;
        flag5 = flag8;
        flag6 = tmp11;
      } else {
        let str44 = str4.toLowerCase();
        let trimmed = str44.trim();
        let tmp42 = "circle" === trimmed;
        if (!tmp42) {
          if ("ellipse" !== trimmed) {
            let tmp14 = tmp;
            let tmp15 = trimmed;
            let flag9 = true;
            let flag10 = flag2;
            let flag11 = flag3;
            let tmp16 = trimmed;
            let tmp17 = tmp5;
            let tmp18 = tmp6;
            if ("closest-corner" !== trimmed) {
              tmp14 = tmp;
              tmp15 = trimmed;
              flag9 = true;
              flag10 = flag2;
              flag11 = flag3;
              tmp16 = trimmed;
              tmp17 = tmp5;
              tmp18 = tmp6;
              if ("farthest-corner" !== trimmed) {
                tmp14 = tmp;
                tmp15 = trimmed;
                flag9 = true;
                flag10 = flag2;
                flag11 = flag3;
                tmp16 = trimmed;
                tmp17 = tmp5;
                tmp18 = tmp6;
                if ("closest-side" !== trimmed) {
                  tmp14 = tmp;
                  tmp15 = trimmed;
                  flag9 = true;
                  flag10 = flag2;
                  flag11 = flag3;
                  tmp16 = trimmed;
                  tmp17 = tmp5;
                  tmp18 = tmp6;
                  if ("farthest-side" !== trimmed) {
                    if (!trimmed.endsWith("px")) {
                      if (!trimmed.endsWith("%")) {
                        tmp14 = tmp;
                        tmp15 = tmp2;
                        flag9 = flag;
                        flag10 = flag2;
                        flag11 = flag3;
                        tmp16 = trimmed;
                        tmp17 = tmp5;
                        tmp18 = tmp6;
                        if ("at" === trimmed) {
                          break;
                        }
                      }
                    }
                    let tmp31 = getPositionFromCSSValue;
                    let tmp32 = getPositionFromCSSValue(trimmed);
                    if (null == tmp32) {
                      return null;
                    } else {
                      if ("number" === typeof tmp32) {
                        if (tmp32 < 0) {
                          return null;
                        }
                      }
                      let obj = { x: tmp32, y: tmp32 };
                      let str40 = parts1.shift();
                      tmp9 = tmp;
                      tmp10 = obj;
                      flag7 = true;
                      flag8 = true;
                      tmp11 = flag3;
                      let tmp33 = trimmed;
                      tmp12 = tmp32;
                      tmp13 = tmp6;
                      if (null != str40) {
                        let str41 = str40.toLowerCase();
                        let trimmed1 = str41.trim();
                        if (trimmed1.endsWith("px")) {
                          let tmp34 = getPositionFromCSSValue;
                          let tmp35 = getPositionFromCSSValue(trimmed1);
                          if (null == tmp35) {
                            return null;
                          } else {
                            if ("number" === typeof tmp35) {
                              if (tmp35 < 0) {
                                return null;
                              }
                            }
                            obj = { x: tmp32, y: tmp35 };
                            tmp14 = tmp;
                            tmp15 = obj;
                            flag9 = true;
                            flag10 = flag2;
                            flag11 = flag3;
                            tmp16 = trimmed1;
                            tmp17 = tmp32;
                            tmp18 = tmp35;
                          }
                        } else {
                          tmp14 = tmp;
                          tmp15 = obj;
                          flag9 = true;
                          flag10 = true;
                          flag11 = flag3;
                          tmp16 = trimmed1;
                          tmp17 = tmp32;
                          tmp18 = tmp6;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          tmp9 = tmp14;
          tmp10 = tmp15;
          flag7 = flag9;
          flag8 = flag10;
          tmp11 = flag11;
          let tmp36 = tmp16;
          tmp12 = tmp17;
          tmp13 = tmp18;
          str3 = tmp14;
          tmp7 = tmp15;
          tmp8 = merged;
          flag5 = flag10;
          flag6 = flag11;
          flag4 = flag9;
        }
        let str42 = "ellipse";
        if (tmp42) {
          str42 = "circle";
        }
        tmp14 = str42;
        tmp15 = tmp2;
        flag9 = true;
        flag10 = flag2;
        flag11 = true;
        tmp16 = trimmed;
        tmp17 = tmp5;
        tmp18 = tmp6;
      }
    }
    if (0 === parts1.length) {
      return null;
    } else {
      let str6;
      let str7;
      if (1 === parts1.length) {
        const str45 = parts1.shift();
        if (null == str45) {
          return null;
        } else {
          const trimmed2 = str45.toLowerCase().trim();
          str6 = "50%";
          str7 = "0%";
          if ("left" !== trimmed2) {
            str6 = "50%";
            str7 = "50%";
            if ("center" !== trimmed2) {
              str6 = "50%";
              str7 = "100%";
              if ("right" !== trimmed2) {
                str6 = "0%";
                str7 = "50%";
                if ("top" !== trimmed2) {
                  str6 = "100%";
                  str7 = "50%";
                  if ("bottom" !== trimmed2) {
                    if (trimmed2.endsWith("px")) {
                      const tmp20 = getPositionFromCSSValue(trimmed2);
                      str6 = "50%";
                      str7 = tmp20;
                      if (null == tmp20) {
                        return null;
                      }
                    }
                  }
                }
              }
            }
          }
          const str46 = str45.toLowerCase();
        }
      }
      if (2 === parts1.length) {
        const str50 = parts1.shift();
        const str51 = parts1.shift();
        if (null != str50) {
          if (null != str51) {
            const trimmed3 = str50.toLowerCase().trim();
            const str52 = str50.toLowerCase();
            const trimmed4 = str51.toLowerCase().trim();
            const items = ["accessibilityLabelledBy", "accessibilityLiveRegion", "accessibilityState"];
            const items1 = [];
            if (items.includes(trimmed3)) {
              if (items1.includes(trimmed4)) {
                let str26 = "0%";
                let str28 = "0%";
                if ("left" !== trimmed3) {
                  let str29 = "100%";
                  if ("center" === trimmed3) {
                    str29 = "50%";
                  }
                  str28 = str29;
                }
                if ("top" !== trimmed4) {
                  let str32 = "100%";
                  if ("center" === trimmed4) {
                    str32 = "50%";
                  }
                  str26 = str32;
                }
                str6 = str26;
                str7 = str28;
              }
            }
            if (items1.includes(trimmed3)) {
              if (items.includes(trimmed4)) {
                let str18 = "0%";
                let str20 = "0%";
                if ("left" !== trimmed4) {
                  let str21 = "100%";
                  if ("center" === trimmed4) {
                    str21 = "50%";
                  }
                  str20 = str21;
                }
                if ("top" !== trimmed3) {
                  let str24 = "100%";
                  if ("center" === trimmed3) {
                    str24 = "50%";
                  }
                  str18 = str24;
                }
                str6 = str18;
                str7 = str20;
              }
            }
            let str14 = "0%";
            if ("left" !== trimmed3) {
              str14 = "50%";
              if ("center" !== trimmed3) {
                str14 = "100%";
                if ("right" !== trimmed3) {
                  if (!trimmed3.endsWith("px")) {
                    if (!trimmed3.endsWith("%")) {
                      return null;
                    }
                  }
                  str14 = getPositionFromCSSValue(trimmed3);
                  if (null == str14) {
                    return null;
                  }
                }
              }
            }
            str6 = "0%";
            str7 = str14;
            if ("top" !== trimmed4) {
              str6 = "50%";
              str7 = str14;
              if ("center" !== trimmed4) {
                str6 = "100%";
                str7 = str14;
                if ("bottom" !== trimmed4) {
                  if (!trimmed4.endsWith("px")) {
                    if (!trimmed4.endsWith("%")) {
                      return null;
                    }
                  }
                  str6 = getPositionFromCSSValue(trimmed4);
                  str7 = str14;
                  if (null == str6) {
                    return null;
                  }
                }
              }
            }
            const str53 = str51.toLowerCase();
          }
        }
        return null;
      }
      let tmp23 = str6;
      let tmp24 = str7;
      let tmp26;
      if (4 === parts1.length) {
        const str56 = parts1.shift();
        const str57 = parts1.shift();
        const str58 = parts1.shift();
        const str59 = parts1.shift();
        if (null != str56) {
          if (null != str57) {
            if (null != str58) {
              if (null != str59) {
                const trimmed5 = str56.toLowerCase().trim();
                const str60 = str56.toLowerCase();
                const trimmed6 = str57.toLowerCase().trim();
                const str61 = str57.toLowerCase();
                const trimmed7 = str58.toLowerCase().trim();
                const str62 = str58.toLowerCase();
                const trimmed8 = str59.toLowerCase().trim();
                const tmp48 = getPositionFromCSSValue(trimmed6);
                const tmp49 = getPositionFromCSSValue(trimmed8);
                if (null != tmp48) {
                  if (null != tmp49) {
                    let tmp27 = str6;
                    let tmp28 = tmp48;
                    let tmp29;
                    let tmp30;
                    if ("left" !== trimmed5) {
                      tmp27 = str6;
                      tmp28 = str7;
                      tmp29 = tmp48;
                      if ("right" !== trimmed5) {
                        tmp27 = tmp48;
                        tmp28 = str7;
                        if ("top" !== trimmed5) {
                          tmp27 = str6;
                          tmp28 = str7;
                          tmp30 = tmp48;
                          if ("bottom" !== trimmed5) {
                            return null;
                          }
                        }
                      }
                    }
                    tmp23 = tmp27;
                    tmp24 = tmp49;
                    let tmp25 = tmp29;
                    tmp26 = tmp30;
                    if ("left" !== trimmed7) {
                      tmp23 = tmp27;
                      tmp24 = tmp28;
                      tmp25 = tmp49;
                      tmp26 = tmp30;
                      if ("right" !== trimmed7) {
                        tmp23 = tmp49;
                        tmp24 = tmp28;
                        tmp25 = tmp29;
                        tmp26 = tmp30;
                        if ("top" !== trimmed7) {
                          tmp23 = tmp27;
                          tmp24 = tmp28;
                          tmp25 = tmp29;
                          tmp26 = tmp49;
                          if ("bottom" !== trimmed7) {
                            return null;
                          }
                        }
                      }
                    }
                  }
                }
                return null;
              }
            }
          }
        }
        return null;
      }
      if (null != tmp23) {
        if (null != tmp24) {
          const obj1 = { top: tmp23, left: tmp24 };
          str3 = tmp;
          tmp7 = tmp2;
          tmp8 = obj1;
          flag4 = true;
          flag5 = flag2;
          flag6 = flag3;
        }
      }
      if (null != tmp26) {
        if (null != tmp25) {
          const obj2 = { bottom: tmp26, right: tmp25 };
          str3 = tmp;
          tmp7 = tmp2;
          tmp8 = obj2;
          flag4 = true;
          flag5 = flag2;
          flag6 = flag3;
        }
      }
      if (null != tmp23) {
        if (null != tmp25) {
          const obj3 = { top: tmp23, right: tmp25 };
          str3 = tmp;
          tmp7 = tmp2;
          tmp8 = obj3;
          flag4 = true;
          flag5 = flag2;
          flag6 = flag3;
        }
      }
      if (null != tmp26) {
        if (null != tmp24) {
          obj = { bottom: tmp26, left: tmp24 };
          str3 = tmp;
          tmp7 = tmp2;
          tmp8 = obj;
          flag4 = true;
          flag5 = flag2;
          flag6 = flag3;
        }
      }
      return null;
    }
  }
  let tmp37 = str3;
  if (flag4) {
    arr = arr.shift();
    let tmp39 = !flag6;
    if (!flag6) {
      tmp39 = flag5;
    }
    if (tmp39) {
      str3 = "circle";
    }
    tmp37 = str3;
    if (flag5) {
      tmp37 = str3;
      if (flag6) {
        tmp37 = str3;
        if ("ellipse" === str3) {
          return null;
        }
      }
    }
  }
  const tmp40 = parseColorStopsCSSString(arr);
  let tmp41 = null;
  if (null != tmp40) {
    const obj4 = { type: "radial-gradient", shape: tmp37, size: tmp7, position: tmp8, colorStops: tmp40 };
    tmp41 = obj4;
  }
  return tmp41;
}
function parseLinearGradientCSSString(str) {
  const parts = str.split(",");
  let tmp = closure_6;
  const formatted = parts[0].trim().toLowerCase();
  if (regex2.test(formatted)) {
    const tmp9 = getAngleInDegrees(formatted);
    if (null == tmp9) {
      return null;
    } else {
      let obj = { type: "angle", value: tmp9 };
      parts.shift();
      tmp = obj;
    }
  } else if (regex.test(formatted)) {
    const tmp5 = getDirectionForKeyword(formatted);
    if (null == tmp5) {
      return null;
    } else {
      parts.shift();
      tmp = tmp5;
    }
  }
  const tmp12 = parseColorStopsCSSString(parts);
  let tmp13 = null;
  if (null != tmp12) {
    obj = { type: "linear-gradient", direction: tmp, colorStops: tmp12 };
    tmp13 = obj;
  }
  return tmp13;
}
function parseColorStopsCSSString(arr) {
  const items = [];
  const parts = arr.join(",").split(/,(?![^(]*\))/);
  let tmp = null;
  let num = 0;
  if (0 < parts.length) {
    const str2 = parts[num];
    const str3 = parts[num].trim();
    const match = parts[num].trim().toLowerCase().match(/\S+\([^)]*\)|\S+/g);
    while (null != match) {
      if (3 === match.length) {
        let tmp27 = getPositionFromCSSValue;
        let tmp28 = getPositionFromCSSValue(match[1]);
        let tmp29 = getPositionFromCSSValue(match[2]);
        let tmp30 = arg1;
        let tmp31 = dependencyMap;
        let obj6 = arg1(dependencyMap[2]);
        let defaultResult = obj6.default(match[0]);
        if (null == defaultResult) {
          return null;
        } else {
          if (null != tmp28) {
            if (null != tmp29) {
              let obj = { color: defaultResult, position: tmp28 };
              arr = items.push(obj);
              obj = { color: defaultResult, position: tmp29 };
              arr = items.push(obj);
              let tmp13 = tmp28;
              let tmp14 = tmp29;
              let tmp15 = defaultResult;
              let tmp16 = tmp5;
              let tmp17 = tmp6;
              let tmp18 = tmp7;
              let defaultResult2 = tmp8;
            }
          }
          return null;
        }
      } else if (2 === match.length) {
        let tmp21 = getPositionFromCSSValue;
        let tmp22 = getPositionFromCSSValue(match[1]);
        let tmp23 = arg1;
        let tmp24 = dependencyMap;
        let obj3 = arg1(dependencyMap[2]);
        let defaultResult1 = obj3.default(match[0]);
        if (null == defaultResult1) {
          return null;
        } else if (null == tmp22) {
          return null;
        } else {
          let obj1 = { color: defaultResult1, position: tmp22 };
          let arr1 = items.push(obj1);
          tmp13 = tmp2;
          tmp14 = tmp3;
          tmp15 = tmp4;
          tmp16 = tmp22;
          tmp17 = defaultResult1;
          tmp18 = tmp7;
          defaultResult2 = tmp8;
        }
      } else if (1 !== match.length) {
        return null;
      } else {
        let tmp35 = getPositionFromCSSValue;
        let tmp36 = getPositionFromCSSValue(match[0]);
        if (null != tmp36) {
          if (null != tmp) {
            if (1 === tmp.length) {
              let tmp19 = getPositionFromCSSValue;
            }
            return null;
          }
          if (num !== parts.length - 1) {
            if (0 !== num) {
              let obj2 = { color: null, position: tmp36 };
              let arr2 = items.push(obj2);
              tmp13 = tmp2;
              tmp14 = tmp3;
              tmp15 = tmp4;
              tmp16 = tmp5;
              tmp17 = tmp6;
              tmp18 = tmp36;
              defaultResult2 = tmp8;
            }
          }
        } else {
          let tmp9 = arg1;
          let tmp10 = dependencyMap;
          obj = arg1(dependencyMap[2]);
          defaultResult2 = obj.default(match[0]);
          if (null == defaultResult2) {
            return null;
          } else {
            obj3 = { color: defaultResult2, position: null };
            let arr3 = items.push(obj3);
            tmp13 = tmp2;
            tmp14 = tmp3;
            tmp15 = tmp4;
            tmp16 = tmp5;
            tmp17 = tmp6;
            tmp18 = tmp36;
          }
        }
      }
      num = num + 1;
      let tmp2 = tmp13;
      let tmp3 = tmp14;
      let tmp4 = tmp15;
      let tmp5 = tmp16;
      let tmp6 = tmp17;
      let tmp7 = tmp18;
      let tmp8 = defaultResult2;
      tmp = match;
    }
    return null;
  }
  return items;
}
function getDirectionForKeyword(formatted) {
  if (null == formatted) {
    return null;
  } else {
    formatted = formatted.replace(/\s+/g, " ").toLowerCase();
    if ("to top" === formatted) {
      return { onError: false, hybridRef: false };
    } else if ("to right" === formatted) {
      return { onError: "<string:2515402609>", hybridRef: "LengthDelimited" };
    } else if ("to bottom" === formatted) {
      return {};
    } else if ("to left" === formatted) {
      return { onError: 1105662145, hybridRef: 1071644672 };
    } else {
      if ("to top right" !== formatted) {
        if ("to right top" !== formatted) {
          if ("to bottom right" !== formatted) {
            if ("to right bottom" !== formatted) {
              if ("to top left" !== formatted) {
                if ("to left top" !== formatted) {
                  if ("to bottom left" !== formatted) {
                    if ("to left bottom" !== formatted) {
                      return null;
                    }
                  }
                  return { onError: 1105289233, hybridRef: 1798307697 };
                }
              }
              return { onError: 1105704685, hybridRef: 2145386496 };
            }
          }
          return { onError: 89884678807936840000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, hybridRef: 89884678811215600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 };
        }
      }
      return { onError: 3342436, hybridRef: 893378560 };
    }
    const str9 = formatted.replace(/\s+/g, " ");
  }
}
function getAngleInDegrees(formatted) {
  if (null == formatted) {
    return null;
  } else {
    const match = formatted.match(closure_5);
    if (match) {
      const tmp2 = callback2(match, 3);
      const _parseFloat = parseFloat;
      const parsed = parseFloat(tmp2[1]);
      if ("deg" === tmp2[2]) {
        return parsed;
      } else if ("grad" === tmp3) {
        return 0.9 * parsed;
      } else if ("rad" === tmp3) {
        const _Math = Math;
        return 180 * parsed / Math.PI;
      } else if ("turn" === tmp3) {
        return 360 * parsed;
      } else {
        return null;
      }
    } else {
      return null;
    }
  }
}
function getPositionFromCSSValue(trimmed) {
  if (trimmed.endsWith("px")) {
    const _parseFloat = parseFloat;
    let parsed = parseFloat(trimmed);
  } else if (trimmed.endsWith("%")) {
    parsed = trimmed;
  }
  return parsed;
}
let closure_4 = /^to\s+(?:top|bottom|left|right)(?:\s+(?:top|bottom|left|right))?/i;
let closure_5 = /^([+-]?\d*\.?\d+)(deg|grad|rad|turn)$/i;
let closure_6 = {};
let closure_7 = "ellipse";
let closure_8 = "farthest-corner";
let closure_9 = {};

export default function processBackgroundImage(str) {
  let items = [];
  if (null == str) {
    return items;
  } else {
    if ("string" === typeof str) {
      items = function parseBackgroundImageCSSString(arg0) {
        const items = [];
        const items1 = [];
        let str = "";
        let num2 = 0;
        let str2 = "";
        if (0 < arg0.length) {
          while ("(" !== arg0[num2]) {
            if (")" === tmp) {
              let diff = num - 1;
            } else {
              diff = num;
              if ("," === tmp) {
                diff = num;
                if (0 === num) {
                  let arr = items1.push(``.trim());
                  let str3 = "";
                  let tmp4 = num;
                  num2 = num2 + 1;
                  str = "";
                  str2 = "";
                }
                diff = num + 1;
              }
            }
            let sum = str + tmp;
            let tmp6 = diff;
            // break
          }
        }
        if ("" !== str2.trim()) {
          items1.push(str2.trim());
        }
        const iter = items1[Symbol.iterator]();
        while (iter !== undefined) {
          let obj = /^(linear|radial)-gradient\(((?:\([^)]*\)|[^()])*)\)/;
          let match = obj.exec(str4.toLowerCase());
          if (match) {
            let tmp8 = callback;
            let tmp9 = match;
            let tmp10 = callback(tmp22, 3);
            let str5 = tmp10[1];
            let tmp11 = tmp10[2];
            if ("radial" === str5.toLowerCase()) {
              let tmp15 = callback2;
              let tmp16 = tmp11;
              let tmp14 = callback2(tmp11);
            } else {
              let tmp12 = callback3;
              let tmp13 = tmp11;
              tmp14 = callback3(tmp11);
            }
            if (null != tmp14) {
              let tmp18 = items;
              let tmp19 = tmp14;
              let arr1 = items.push(tmp17);
            }
          }
          // continue
        }
        return items;
      }(str.replace(/\n/g, " "));
    } else {
      const _Array = Array;
      if (Array.isArray(str)) {
        const iter = str[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp46 = nextResult;
          let tmp47 = processColorStops;
          let tmp48 = processColorStops(nextResult);
          let tmp49 = tmp48;
          if (null == tmp48) {
            iter.return();
            return [];
          } else {
            let tmp50 = nextResult;
            if ("linear-gradient" === tmp46.type) {
              let tmp22 = closure_6;
              let tmp23 = nextResult;
              let formatted = null;
              if (null != tmp46.direction) {
                let tmp25 = nextResult;
                let str11 = tmp46.direction;
                formatted = str11.toLowerCase();
              }
              let tmp26 = formatted;
              if (null != formatted) {
                let tmp27 = regex2;
                let tmp28 = formatted;
                if (regex2.test(tmp26)) {
                  let tmp35 = getAngleInDegrees;
                  let tmp36 = formatted;
                  let tmp37 = getAngleInDegrees(tmp26);
                  if (null == tmp37) {
                    iter.return();
                    return [];
                  } else {
                    let obj = { type: "angle" };
                    let tmp39 = tmp37;
                    obj.value = tmp38;
                    tmp22 = obj;
                  }
                } else {
                  let tmp29 = regex;
                  let tmp30 = formatted;
                  if (regex.test(tmp26)) {
                    let tmp31 = getDirectionForKeyword;
                    let tmp32 = formatted;
                    let tmp33 = getDirectionForKeyword(tmp26);
                    let tmp34 = tmp33;
                    if (null != tmp33) {
                      tmp22 = tmp33;
                    }
                  } else {
                    iter.return();
                    return [];
                  }
                }
                iter.return();
                return [];
              }
              let tmp40 = items;
              obj = { type: "linear-gradient" };
              let tmp41 = tmp22;
              obj.direction = tmp22;
              let tmp42 = tmp48;
              obj.colorStops = tmp49;
              let combined = items.concat(obj);
            } else {
              let tmp51 = nextResult;
              if ("radial-gradient" === tmp46.type) {
                let shape = closure_7;
                let size = closure_8;
                let _Object = Object;
                let tmp52 = closure_9;
                let position = Object.assign({}, closure_9);
                let tmp53 = nextResult;
                if (null != tmp46.shape) {
                  let tmp4 = nextResult;
                  if ("circle" !== tmp46.shape) {
                    let tmp5 = nextResult;
                    if ("ellipse" !== tmp46.shape) {
                      iter.return();
                      return [];
                    }
                  }
                  let tmp6 = nextResult;
                  shape = tmp46.shape;
                }
                let tmp7 = nextResult;
                if (null != tmp46.size) {
                  let tmp54 = nextResult;
                  if ("string" !== typeof tmp46.size) {
                    let tmp13 = nextResult;
                    if ("object" === typeof tmp46.size) {
                      let tmp55 = nextResult;
                      if (null != tmp46.size.x) {
                        let tmp56 = nextResult;
                        if (null != tmp46.size.y) {
                          obj = {};
                          let tmp14 = nextResult;
                          obj.x = tmp46.size.x;
                          obj.y = tmp46.size.y;
                          size = obj;
                        }
                      }
                    }
                    iter.return();
                    return [];
                  } else {
                    let tmp8 = nextResult;
                    if ("closest-side" !== tmp46.size) {
                      let tmp9 = nextResult;
                      if ("closest-corner" !== tmp46.size) {
                        let tmp10 = nextResult;
                        if ("farthest-side" !== tmp46.size) {
                          let tmp11 = nextResult;
                        }
                      }
                    }
                    let tmp12 = nextResult;
                    size = tmp46.size;
                  }
                }
                let tmp15 = nextResult;
                if (null != tmp46.position) {
                  let tmp16 = nextResult;
                  position = tmp46.position;
                }
                let tmp17 = items;
                let obj1 = { type: "radial-gradient" };
                let tmp18 = shape;
                obj1.shape = shape;
                let tmp19 = size;
                obj1.size = size;
                let tmp20 = position;
                obj1.position = position;
                let tmp21 = tmp48;
                obj1.colorStops = tmp49;
                items = items.concat(obj1);
              }
              // continue
            }
          }
        }
      }
    }
    return items;
  }
};

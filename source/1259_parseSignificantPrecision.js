// Module ID: 1259
// Function ID: 14215
// Name: parseSignificantPrecision
// Dependencies: [1409286161, 1442840626]

// Module 1259 (parseSignificantPrecision)
function parseSignificantPrecision(first) {
  const obj = {};
  const arg1 = obj;
  if ("r" === first[first.length - 1]) {
    obj.roundingPriority = "morePrecision";
  } else if ("s" === first[first.length - 1]) {
    obj.roundingPriority = "lessPrecision";
  }
  const replaced = first.replace(closure_3, (arg0, arg1, arg2) => {
    if ("string" !== typeof arg2) {
      ({ length: closure_0.minimumSignificantDigits, length: closure_0.maximumSignificantDigits } = arg1);
    } else if ("+" === arg2) {
      obj.minimumSignificantDigits = arg1.length;
    } else if ("#" === arg1[0]) {
      obj.maximumSignificantDigits = arg1.length;
    } else {
      obj.minimumSignificantDigits = arg1.length;
      let num2 = 0;
      if ("string" === tmp) {
        num2 = arg2.length;
      }
      obj.maximumSignificantDigits = arg1.length + num2;
      const tmp2 = obj;
    }
    return "";
  });
  return obj;
}
function parseSign(stem) {
  if ("sign-auto" === stem) {
    let obj = { signDisplay: "auto" };
    return obj;
  } else {
    if ("sign-accounting" !== stem) {
      if ("()" !== stem) {
        if ("sign-always" !== stem) {
          if ("+!" !== stem) {
            if ("sign-accounting-always" !== stem) {
              if ("()!" !== stem) {
                if ("sign-except-zero" !== stem) {
                  if ("+?" !== stem) {
                    if ("sign-accounting-except-zero" !== stem) {
                      if ("()?" !== stem) {
                        obj = { signDisplay: "never" };
                        return obj;
                      }
                    }
                    return { Reflect: null, String: null };
                  }
                }
                obj = { signDisplay: "exceptZero" };
                return obj;
              }
            }
            return { Reflect: "selectedSubPage", String: "isArrayBuffer" };
          }
        }
        const obj1 = { signDisplay: "always" };
        return obj1;
      }
    }
    const obj2 = { currencySign: "accounting" };
    return obj2;
  }
}
function parseConciseScientificAndEngineeringStem(stem) {
  if ("E" === stem[0]) {
    if ("E" === stem[1]) {
      let obj = { notation: "engineering" };
      let substr = stem.slice(2);
      let tmp = obj;
    }
    if (tmp) {
      const substr1 = substr.slice(0, 2);
      if ("+!" === substr1) {
        tmp.signDisplay = "always";
        let substr2 = substr.slice(2);
      } else {
        substr2 = substr;
        if ("+?" === substr1) {
          tmp.signDisplay = "exceptZero";
          substr2 = substr.slice(2);
        }
      }
      if (regex3.test(substr2)) {
        tmp.minimumIntegerDigits = substr2.length;
      } else {
        const _Error = Error;
        const error = new Error("Malformed concise eng/scientific notation");
        throw error;
      }
    }
    return tmp;
  }
  substr = stem;
  if ("E" === stem[0]) {
    obj = { notation: "scientific" };
    substr = stem.slice(1);
    tmp = obj;
  }
}
function parseNotationOptions(stem) {
  return parseSign(stem) || {};
}
arg5.parseNumberSkeletonFromString = undefined;
arg5.parseNumberSkeleton = undefined;
arg5.parseNumberSkeletonFromString = function parseNumberSkeletonFromString(str) {
  if (0 === str.length) {
    const _Error3 = Error;
    const error = new Error("Number skeleton cannot be empty");
    throw error;
  } else {
    const items = [];
    const parts = str.split(arg1(arg6[0]).WHITE_SPACE_REGEX);
    const found = parts.filter((arg0) => arg0.length > 0);
    let num2 = 0;
    if (0 < found.length) {
      const parts1 = found[num2].split("/");
      while (0 !== parts1.length) {
        let substr = parts1.slice(1);
        let num = 0;
        if (0 < substr.length) {
          while (0 !== substr[num].length) {
            num = num + 1;
            continue;
          }
          let tmp2 = globalThis;
          let _Error = Error;
          let tmp3 = new.target;
          let str2 = "Invalid number skeleton";
          let tmp4 = new.target;
          let error1 = new Error("Invalid number skeleton");
          let tmp6 = error1;
          throw error1;
        }
        let obj = { stem: parts1[0], options: substr };
        let arr = items.push(obj);
        num2 = num2 + 1;
      }
      const _Error2 = Error;
      const error2 = new Error("Invalid number skeleton");
      throw error2;
    }
    return items;
  }
};
let closure_2 = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g;
let closure_3 = /^(@+)?(\+|#+)?[rs]?$/g;
let closure_4 = /(\*)(0+)|(#+)(0+)|(0+)/g;
let closure_5 = /^(0+)$/;
arg5.parseNumberSkeleton = function parseNumberSkeleton(arg0) {
  let obj = {};
  let arg1 = obj;
  let tmp = obj;
  let num = 0;
  let tmp5 = obj;
  if (0 < arg0.length) {
    while (true) {
      let tmp6 = arg0[num];
      let stem = tmp6.stem;
      if ("percent" !== stem) {
        if ("%" !== stem) {
          if ("%x100" === stem) {
            tmp.style = "percent";
            tmp.scale = 100;
            let tmp17 = tmp;
            let tmp18 = tmp2;
            let tmp19 = tmp3;
            let tmp20 = tmp4;
          } else if ("currency" === stem) {
            tmp.style = "currency";
            tmp.currency = tmp6.options[0];
            tmp17 = tmp;
            tmp18 = tmp2;
            tmp19 = tmp3;
            tmp20 = tmp4;
          } else {
            if ("group-off" !== stem) {
              if (",_" !== stem) {
                if ("precision-integer" !== stem) {
                  if ("." !== stem) {
                    if ("measure-unit" !== stem) {
                      if ("unit" !== stem) {
                        if ("compact-short" !== stem) {
                          if ("K" !== stem) {
                            if ("compact-long" !== stem) {
                              if ("KK" !== stem) {
                                if ("scientific" === stem) {
                                  let tmp51 = arg1;
                                  let tmp52 = arg6;
                                  let obj17 = arg1(arg6[1]);
                                  let obj18 = arg1(arg6[1]);
                                  let obj19 = arg1(arg6[1]);
                                  obj = { notation: "scientific" };
                                  let options = tmp6.options;
                                  let __assignResult = obj18.__assign(obj19.__assign({}, tmp), obj);
                                  let __assignResult1 = obj17.__assign(__assignResult, options.reduce((arg0, arg1) => {
                                    const obj = __assignResult10(closure_1[1]);
                                    const obj2 = __assignResult10(closure_1[1]);
                                    return obj.__assign(__assignResult10(closure_1[1]).__assign({}, arg0), callback(arg1));
                                  }, {}));
                                  arg1 = __assignResult1;
                                  tmp17 = __assignResult1;
                                  tmp18 = tmp2;
                                  tmp19 = tmp3;
                                  tmp20 = tmp4;
                                } else if ("engineering" === stem) {
                                  let tmp47 = arg1;
                                  let tmp48 = arg6;
                                  let obj13 = arg1(arg6[1]);
                                  let obj14 = arg1(arg6[1]);
                                  let obj15 = arg1(arg6[1]);
                                  obj = { notation: "engineering" };
                                  let options1 = tmp6.options;
                                  let __assignResult2 = obj14.__assign(obj15.__assign({}, tmp), obj);
                                  let __assignResult3 = obj13.__assign(__assignResult2, options1.reduce((arg0, arg1) => {
                                    const obj = __assignResult10(closure_1[1]);
                                    const obj2 = __assignResult10(closure_1[1]);
                                    return obj.__assign(__assignResult10(closure_1[1]).__assign({}, arg0), callback(arg1));
                                  }, {}));
                                  arg1 = __assignResult3;
                                  tmp17 = __assignResult3;
                                  tmp18 = tmp2;
                                  tmp19 = tmp3;
                                  tmp20 = tmp4;
                                } else if ("notation-simple" === stem) {
                                  tmp.notation = "standard";
                                  tmp17 = tmp;
                                  tmp18 = tmp2;
                                  tmp19 = tmp3;
                                  tmp20 = tmp4;
                                } else if ("unit-width-narrow" === stem) {
                                  tmp.currencyDisplay = "narrowSymbol";
                                  tmp.unitDisplay = "narrow";
                                  tmp17 = tmp;
                                  tmp18 = tmp2;
                                  tmp19 = tmp3;
                                  tmp20 = tmp4;
                                } else if ("unit-width-short" === stem) {
                                  tmp.currencyDisplay = "code";
                                  tmp.unitDisplay = "short";
                                  tmp17 = tmp;
                                  tmp18 = tmp2;
                                  tmp19 = tmp3;
                                  tmp20 = tmp4;
                                } else if ("unit-width-full-name" === stem) {
                                  tmp.currencyDisplay = "name";
                                  tmp.unitDisplay = "long";
                                  tmp17 = tmp;
                                  tmp18 = tmp2;
                                  tmp19 = tmp3;
                                  tmp20 = tmp4;
                                } else if ("unit-width-iso-code" === stem) {
                                  tmp.currencyDisplay = "symbol";
                                  tmp17 = tmp;
                                  tmp18 = tmp2;
                                  tmp19 = tmp3;
                                  tmp20 = tmp4;
                                } else if ("scale" === stem) {
                                  let _parseFloat = parseFloat;
                                  tmp.scale = parseFloat(tmp6.options[0]);
                                  tmp17 = tmp;
                                  tmp18 = tmp2;
                                  tmp19 = tmp3;
                                  tmp20 = tmp4;
                                } else if ("rounding-mode-floor" === stem) {
                                  tmp.roundingMode = "floor";
                                  tmp17 = tmp;
                                  tmp18 = tmp2;
                                  tmp19 = tmp3;
                                  tmp20 = tmp4;
                                } else if ("rounding-mode-ceiling" === stem) {
                                  tmp.roundingMode = "ceil";
                                  tmp17 = tmp;
                                  tmp18 = tmp2;
                                  tmp19 = tmp3;
                                  tmp20 = tmp4;
                                } else if ("rounding-mode-down" === stem) {
                                  tmp.roundingMode = "trunc";
                                  tmp17 = tmp;
                                  tmp18 = tmp2;
                                  tmp19 = tmp3;
                                  tmp20 = tmp4;
                                } else if ("rounding-mode-up" === stem) {
                                  tmp.roundingMode = "expand";
                                  tmp17 = tmp;
                                  tmp18 = tmp2;
                                  tmp19 = tmp3;
                                  tmp20 = tmp4;
                                } else if ("rounding-mode-half-even" === stem) {
                                  tmp.roundingMode = "halfEven";
                                  tmp17 = tmp;
                                  tmp18 = tmp2;
                                  tmp19 = tmp3;
                                  tmp20 = tmp4;
                                } else if ("rounding-mode-half-down" === stem) {
                                  tmp.roundingMode = "halfTrunc";
                                  tmp17 = tmp;
                                  tmp18 = tmp2;
                                  tmp19 = tmp3;
                                  tmp20 = tmp4;
                                } else if ("rounding-mode-half-up" === stem) {
                                  tmp.roundingMode = "halfExpand";
                                  tmp17 = tmp;
                                  tmp18 = tmp2;
                                  tmp19 = tmp3;
                                  tmp20 = tmp4;
                                } else if ("integer-width" === stem) {
                                  if (tmp6.options.length > 1) {
                                    let _RangeError2 = RangeError;
                                    let tmp43 = new.target;
                                    let str3 = "integer-width stems only accept a single optional option";
                                    let tmp44 = new.target;
                                    let rangeError = new RangeError("integer-width stems only accept a single optional option");
                                    let tmp46 = rangeError;
                                    throw rangeError;
                                  } else {
                                    let str2 = tmp6.options[0];
                                    let tmp41 = closure_4;
                                    let replaced = str2.replace(closure_4, (arg0, arg1, arg2, arg3, arg4, arg5) => {
                                      if (arg1) {
                                        __assignResult10.minimumIntegerDigits = arg2.length;
                                      } else {
                                        if (arg3) {
                                          if (arg4) {
                                            const _Error2 = Error;
                                            const error = new Error("We currently do not support maximum integer digits");
                                            throw error;
                                          }
                                        }
                                        if (arg5) {
                                          const _Error = Error;
                                          const error1 = new Error("We currently do not support exact integer digits");
                                          throw error1;
                                        }
                                      }
                                      return "";
                                    });
                                    tmp17 = tmp;
                                    tmp18 = tmp2;
                                    tmp19 = tmp3;
                                    tmp20 = tmp4;
                                  }
                                } else {
                                  let tmp55 = regex3;
                                  if (regex3.test(tmp6.stem)) {
                                    tmp.minimumIntegerDigits = tmp6.stem.length;
                                    tmp17 = tmp;
                                    tmp18 = tmp2;
                                    tmp19 = tmp3;
                                    tmp20 = tmp4;
                                  } else {
                                    let tmp7 = regex;
                                    if (regex.test(tmp6.stem)) {
                                      if (tmp6.options.length > 1) {
                                        break;
                                      } else {
                                        let str5 = tmp6.stem;
                                        let tmp56 = regex;
                                        let replaced1 = str5.replace(regex, (arg0, arg1, arg2, arg3, arg4, arg5) => {
                                          if ("*" === arg2) {
                                            __assignResult10.minimumFractionDigits = arg1.length;
                                          } else {
                                            if (arg3) {
                                              if ("#" === arg3[0]) {
                                                __assignResult10.maximumFractionDigits = arg3.length;
                                              }
                                            }
                                            if (arg4) {
                                              if (arg5) {
                                                __assignResult10.minimumFractionDigits = arg4.length;
                                                __assignResult10.maximumFractionDigits = arg4.length + arg5.length;
                                              }
                                            }
                                            __assignResult10.minimumFractionDigits = arg1.length;
                                            __assignResult10.maximumFractionDigits = arg1.length;
                                          }
                                          return "";
                                        });
                                        let first = tmp6.options[0];
                                        if ("w" === first) {
                                          let tmp34 = arg1;
                                          let tmp35 = arg6;
                                          let obj10 = arg1(arg6[1]);
                                          let obj11 = arg1(arg6[1]);
                                          let obj1 = { trailingZeroDisplay: "stripIfInteger" };
                                          let __assignResult4 = obj10.__assign(obj11.__assign({}, tmp), obj1);
                                          arg1 = __assignResult4;
                                          tmp17 = __assignResult4;
                                          tmp18 = first;
                                          tmp19 = tmp3;
                                          tmp20 = tmp4;
                                        } else {
                                          tmp17 = tmp;
                                          tmp18 = first;
                                          tmp19 = tmp3;
                                          tmp20 = tmp4;
                                          if (first) {
                                            let tmp29 = arg1;
                                            let tmp30 = arg6;
                                            let obj8 = arg1(arg6[1]);
                                            let obj9 = arg1(arg6[1]);
                                            let tmp32 = parseSignificantPrecision;
                                            let __assignResult5 = obj9.__assign({}, tmp);
                                            let __assignResult6 = obj8.__assign(__assignResult5, parseSignificantPrecision(first));
                                            arg1 = __assignResult6;
                                            tmp17 = __assignResult6;
                                            tmp18 = first;
                                            tmp19 = tmp3;
                                            tmp20 = tmp4;
                                          }
                                        }
                                      }
                                    } else {
                                      let tmp8 = regex2;
                                      if (regex2.test(tmp6.stem)) {
                                        let tmp24 = arg1;
                                        let tmp25 = arg6;
                                        let obj6 = arg1(arg6[1]);
                                        let obj7 = arg1(arg6[1]);
                                        let tmp27 = parseSignificantPrecision;
                                        let __assignResult7 = obj7.__assign({}, tmp);
                                        let __assignResult8 = obj6.__assign(__assignResult7, parseSignificantPrecision(tmp6.stem));
                                        arg1 = __assignResult8;
                                        tmp17 = __assignResult8;
                                        tmp18 = tmp2;
                                        tmp19 = tmp3;
                                        tmp20 = tmp4;
                                      } else {
                                        let tmp9 = parseSign;
                                        let tmp10 = parseSign(tmp6.stem);
                                        let tmp11 = tmp;
                                        if (tmp10) {
                                          let tmp12 = arg1;
                                          let tmp13 = arg6;
                                          obj1 = arg1(arg6[1]);
                                          let obj3 = arg1(arg6[1]);
                                          let __assignResult9 = obj1.__assign(obj3.__assign({}, tmp), tmp10);
                                          arg1 = __assignResult9;
                                          tmp11 = __assignResult9;
                                        }
                                        let tmp15 = parseConciseScientificAndEngineeringStem;
                                        let tmp16 = parseConciseScientificAndEngineeringStem(tmp6.stem);
                                        tmp17 = tmp11;
                                        tmp18 = tmp2;
                                        tmp19 = tmp10;
                                        tmp20 = tmp16;
                                        if (tmp16) {
                                          let tmp21 = arg1;
                                          let tmp22 = arg6;
                                          let obj4 = arg1(arg6[1]);
                                          let obj5 = arg1(arg6[1]);
                                          let __assignResult10 = obj4.__assign(obj5.__assign({}, tmp11), tmp16);
                                          arg1 = __assignResult10;
                                          tmp17 = __assignResult10;
                                          tmp18 = tmp2;
                                          tmp19 = tmp10;
                                          tmp20 = tmp16;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                            tmp.notation = "compact";
                            tmp.compactDisplay = "long";
                            tmp17 = tmp;
                            tmp18 = tmp2;
                            tmp19 = tmp3;
                            tmp20 = tmp4;
                          }
                        }
                        tmp.notation = "compact";
                        tmp.compactDisplay = "short";
                        tmp17 = tmp;
                        tmp18 = tmp2;
                        tmp19 = tmp3;
                        tmp20 = tmp4;
                      }
                    }
                    tmp.style = "unit";
                    let str4 = tmp6.options[0];
                    tmp.unit = str4.replace(/^(.*?)-/, "");
                    tmp17 = tmp;
                    tmp18 = tmp2;
                    tmp19 = tmp3;
                    tmp20 = tmp4;
                  }
                }
                tmp.maximumFractionDigits = 0;
                tmp17 = tmp;
                tmp18 = tmp2;
                tmp19 = tmp3;
                tmp20 = tmp4;
              }
            }
            tmp.useGrouping = false;
            tmp17 = tmp;
            tmp18 = tmp2;
            tmp19 = tmp3;
            tmp20 = tmp4;
          }
        }
        num = num + 1;
        tmp = tmp17;
        let tmp2 = tmp18;
        let tmp3 = tmp19;
        let tmp4 = tmp20;
        tmp5 = tmp17;
      }
      tmp.style = "percent";
      tmp17 = tmp;
      tmp18 = tmp2;
      tmp19 = tmp3;
      tmp20 = tmp4;
    }
    const _RangeError = RangeError;
    const rangeError1 = new RangeError("Fraction-precision stems only accept a single optional option");
    throw rangeError1;
  }
  return tmp5;
};

// Module ID: 1258
// Function ID: 14212
// Name: parseDateTimeSkeleton
// Dependencies: []

// Module 1258 (parseDateTimeSkeleton)
arg5.parseDateTimeSkeleton = undefined;
let closure_0 = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
arg5.parseDateTimeSkeleton = function parseDateTimeSkeleton(pushLiteralTextResult) {
  const obj = {};
  let closure_0 = obj;
  const replaced = pushLiteralTextResult.replace(closure_0, (arg0) => {
    const first = arg0[0];
    if ("G" === first) {
      let str25 = "long";
      if (4 !== length) {
        let str26 = "short";
        if (5 === length) {
          str26 = "narrow";
        }
        str25 = str26;
      }
      obj.era = str25;
      const tmp66 = obj;
    } else if ("y" === first) {
      let str24 = "numeric";
      if (2 === length) {
        str24 = "2-digit";
      }
      obj.year = str24;
      const tmp65 = obj;
    } else {
      if ("Y" !== first) {
        if ("u" !== first) {
          if ("U" !== first) {
            if ("r" !== first) {
              if ("q" !== first) {
                if ("Q" !== first) {
                  if ("M" !== first) {
                    if ("L" !== first) {
                      if ("w" !== first) {
                        if ("W" !== first) {
                          if ("d" === first) {
                            obj.day = [][length - 1];
                          } else {
                            if ("D" !== first) {
                              if ("F" !== first) {
                                if ("g" !== first) {
                                  if ("E" === first) {
                                    let str18 = "long";
                                    if (4 !== length) {
                                      let str19 = "short";
                                      if (5 === length) {
                                        str19 = "narrow";
                                      }
                                      str18 = str19;
                                    }
                                    obj.weekday = str18;
                                    const tmp42 = obj;
                                  } else if ("e" === first) {
                                    if (length < 4) {
                                      const _RangeError6 = RangeError;
                                      const rangeError = new RangeError("`e..eee` (weekday) patterns are not supported");
                                      throw rangeError;
                                    } else {
                                      obj.weekday = [][length - 4];
                                    }
                                  } else if ("c" === first) {
                                    if (length < 4) {
                                      const _RangeError5 = RangeError;
                                      const rangeError1 = new RangeError("`c..ccc` (weekday) patterns are not supported");
                                      throw rangeError1;
                                    } else {
                                      obj.weekday = [][length - 4];
                                    }
                                  } else if ("a" === first) {
                                    obj.hour12 = true;
                                  } else {
                                    if ("b" !== first) {
                                      if ("B" !== first) {
                                        if ("h" === first) {
                                          obj.hourCycle = "h12";
                                          obj.hour = [][length - 1];
                                        } else if ("H" === first) {
                                          obj.hourCycle = "h23";
                                          obj.hour = [][length - 1];
                                        } else if ("K" === first) {
                                          obj.hourCycle = "h11";
                                          obj.hour = [][length - 1];
                                        } else if ("k" === first) {
                                          obj.hourCycle = "h24";
                                          obj.hour = [][length - 1];
                                        } else {
                                          if ("j" !== first) {
                                            if ("J" !== first) {
                                              if ("C" !== first) {
                                                if ("m" === first) {
                                                  obj.minute = [][length - 1];
                                                } else if ("s" === first) {
                                                  obj.second = [][length - 1];
                                                } else {
                                                  if ("S" !== first) {
                                                    if ("A" !== first) {
                                                      if ("z" === first) {
                                                        let str8 = "long";
                                                        if (length < 4) {
                                                          str8 = "short";
                                                        }
                                                        obj.timeZoneName = str8;
                                                        const tmp7 = obj;
                                                      } else {
                                                        const _RangeError = RangeError;
                                                        const rangeError2 = new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
                                                        throw rangeError2;
                                                      }
                                                    }
                                                  }
                                                  const _RangeError2 = RangeError;
                                                  const rangeError3 = new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
                                                  throw rangeError3;
                                                }
                                              }
                                            }
                                          }
                                          const _RangeError3 = RangeError;
                                          const rangeError4 = new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
                                          throw rangeError4;
                                        }
                                      }
                                    }
                                    const _RangeError4 = RangeError;
                                    const rangeError5 = new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
                                    throw rangeError5;
                                  }
                                }
                              }
                            }
                            const _RangeError7 = RangeError;
                            const rangeError6 = new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
                            throw rangeError6;
                          }
                        }
                      }
                      const _RangeError8 = RangeError;
                      const rangeError7 = new RangeError("`w/W` (week) patterns are not supported");
                      throw rangeError7;
                    }
                  }
                  obj.month = [][length - 1];
                }
              }
              const _RangeError9 = RangeError;
              const rangeError8 = new RangeError("`q/Q` (quarter) patterns are not supported");
              throw rangeError8;
            }
          }
        }
      }
      const _RangeError10 = RangeError;
      const rangeError9 = new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
      throw rangeError9;
    }
    return "";
  });
  return obj;
};

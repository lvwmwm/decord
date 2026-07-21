// Module ID: 15818
// Function ID: 120935
// Name: isDateFormatOnly
// Dependencies: []

// Module 15818 (isDateFormatOnly)
function isDateFormatOnly(arg0) {
  let num = 0;
  if (0 < closure_4.length) {
    while (!arg0.hasOwnProperty(closure_4[num])) {
      num = num + 1;
      let tmp2 = closure_4;
    }
    return false;
  }
  return true;
}
function isTimeFormatOnly(arg0) {
  let num = 0;
  if (0 < closure_3.length) {
    while (!arg0.hasOwnProperty(closure_3[num])) {
      num = num + 1;
      let tmp2 = closure_3;
    }
    return false;
  }
  return true;
}
function createDateTimeFormat(expandFormatResult) {
  let pattern;
  if (!regex.test(expandFormatResult)) {
    const obj = {};
    let closure_0 = obj;
    obj.pattern = expandFormatResult.replace(closure_0, (str) => {
      const charAtResult = str.charAt(0);
      if ("E" !== charAtResult) {
        if ("e" !== charAtResult) {
          if ("c" !== charAtResult) {
            if ("G" === charAtResult) {
              obj.era = closure_2.era[str.length - 1];
              return "{era}";
            } else {
              if ("y" !== charAtResult) {
                if ("Y" !== charAtResult) {
                  if ("u" !== charAtResult) {
                    if ("U" !== charAtResult) {
                      if ("M" !== charAtResult) {
                        if ("L" !== charAtResult) {
                          if ("d" === charAtResult) {
                            let str12 = "numeric";
                            if (2 === str.length) {
                              str12 = "2-digit";
                            }
                            obj.day = str12;
                            return "{day}";
                          } else if ("a" === charAtResult) {
                            return "{ampm}";
                          } else {
                            if ("h" !== charAtResult) {
                              if ("H" !== charAtResult) {
                                if ("k" !== charAtResult) {
                                  if ("K" !== charAtResult) {
                                    if ("m" === charAtResult) {
                                      let str7 = "numeric";
                                      if (2 === str.length) {
                                        str7 = "2-digit";
                                      }
                                      obj.minute = str7;
                                      return "{minute}";
                                    } else if ("s" === charAtResult) {
                                      let str5 = "numeric";
                                      if (2 === str.length) {
                                        str5 = "2-digit";
                                      }
                                      obj.second = str5;
                                      return "{second}";
                                    } else if ("z" === charAtResult) {
                                      let str3 = "long";
                                      if (str.length < 4) {
                                        str3 = "short";
                                      }
                                      obj.timeZoneName = str3;
                                      return "{timeZoneName}";
                                    }
                                  }
                                }
                              }
                            }
                            let str9 = "numeric";
                            if (2 === str.length) {
                              str9 = "2-digit";
                            }
                            obj.hour = str9;
                            return "{hour}";
                          }
                        }
                      }
                      obj.month = closure_2.month[str.length - 1];
                      return "{month}";
                    }
                  }
                }
              }
              let str15 = "numeric";
              if (2 === str.length) {
                str15 = "2-digit";
              }
              obj.year = str15;
              return "{year}";
            }
          }
        }
      }
      obj.weekday = closure_2.weekday[str.length - 1];
      return "{weekday}";
    });
    obj.pattern = obj.pattern.replace(/'([^']*)'/g, (arg0, arg1) => {
      let str = arg1;
      if (!arg1) {
        str = "'";
      }
      return str;
    });
    pattern = obj.pattern;
    if (pattern.indexOf("{ampm}") > -1) {
      obj.hour12 = true;
      ({ pattern: obj.pattern12, pattern } = obj);
      obj.pattern = pattern.replace("{ampm}", "").replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
      const str4 = pattern.replace("{ampm}", "");
    }
    return obj;
  }
}
arg5.createDateTimeFormat = createDateTimeFormat;
arg5.createDateTimeFormats = function createDateTimeFormats(formats) {
  let availableFormats;
  let dateFormats;
  let medium;
  let timeFormats;
  let tmp2;
  let tmp3;
  function expandFormat(key10079, str) {
    let array = new Array(key10079.match(/M/g) || [].length + 1);
    const arr = key10079.match(/M/g) || [];
    array = new Array(key10079.match(/E/g) || [].length + 1);
    if (array.length > 2) {
      str = str.replace(/(M|L)+/, array.join("$1"));
    }
    let replaced = str;
    if (array.length > 2) {
      replaced = str.replace(/([Eec])+/, array.join("$1"));
    }
    return replaced;
  }
  ({ availableFormats, timeFormats, dateFormats, medium } = formats);
  const items = [];
  const items1 = [];
  const items2 = [];
  let tmp4;
  let tmp5;
  const keys = Object.keys();
  if (keys !== undefined) {
    tmp4 = tmp2;
    tmp5 = tmp3;
    while (keys[tmp] !== undefined) {
      let tmp43 = tmp7;
      let hasOwnPropertyResult = availableFormats.hasOwnProperty(tmp7);
      if (hasOwnPropertyResult) {
        let tmp8 = createDateTimeFormat;
        let expandFormatResult = expandFormat(tmp7, availableFormats[tmp7]);
        hasOwnPropertyResult = createDateTimeFormat(expandFormatResult);
        tmp2 = expandFormatResult;
        tmp3 = hasOwnPropertyResult;
      }
      let tmp11 = tmp2;
      let tmp12 = tmp3;
      if (!hasOwnPropertyResult) {
        continue;
      } else {
        let arr = items.push(tmp12);
        let tmp14 = isDateFormatOnly;
        if (isDateFormatOnly(tmp12)) {
          arr = items2.push(tmp11);
          tmp2 = tmp11;
          tmp3 = tmp12;
          // continue
        } else {
          let tmp15 = isTimeFormatOnly;
          tmp2 = tmp11;
          tmp3 = tmp12;
          if (!isTimeFormatOnly(tmp12)) {
            continue;
          } else {
            let arr1 = items1.push(tmp11);
            tmp2 = tmp11;
            tmp3 = tmp12;
            // continue
          }
          continue;
        }
        continue;
      }
      continue;
    }
  }
  let tmp18 = tmp4;
  let tmp19 = tmp5;
  let num = 0;
  let tmp20 = tmp4;
  let tmp21 = tmp5;
  if (0 < items1.length) {
    do {
      let num2 = 0;
      if (0 < items2.length) {
        do {
          let tmp22 = closure_7;
          let str = medium.replace("{0}", items1[num]);
          let str2 = str.replace("{1}", items2[num2]);
          let replaced = str2.replace(/^[,\s]+|[,\s]+$/gi, "");
          let tmp24 = closure_7(replaced);
          if (tmp24) {
            let arr2 = items.push(tmp24);
          }
          num2 = num2 + 1;
          tmp18 = replaced;
          tmp19 = tmp24;
        } while (num2 < items2.length);
      }
      num = num + 1;
      tmp20 = tmp18;
      tmp21 = tmp19;
    } while (num < items1.length);
  }
  let tmp26 = tmp20;
  let tmp27 = tmp21;
  let tmp28 = tmp20;
  let tmp29 = tmp21;
  const keys1 = Object.keys();
  if (keys1 !== undefined) {
    tmp28 = tmp26;
    tmp29 = tmp27;
    tmp19 = keys1[""];
    while (tmp19 !== undefined) {
      let tmp44 = tmp19;
      let hasOwnPropertyResult1 = timeFormats.hasOwnProperty(tmp19);
      if (hasOwnPropertyResult1) {
        let tmp31 = createDateTimeFormat;
        let expandFormatResult1 = expandFormat(tmp19, timeFormats[tmp19]);
        hasOwnPropertyResult1 = createDateTimeFormat(expandFormatResult1);
        tmp26 = expandFormatResult1;
        tmp27 = hasOwnPropertyResult1;
      }
      let tmp35 = tmp27;
      let tmp34 = tmp26;
      if (!hasOwnPropertyResult1) {
        continue;
      } else {
        let arr3 = items.push(tmp35);
        tmp26 = tmp34;
        tmp27 = tmp35;
        // continue
      }
      continue;
    }
  }
  for (const key10079 in dateFormats) {
    let tmp45 = key10079;
    let hasOwnPropertyResult2 = dateFormats.hasOwnProperty(key10079);
    if (hasOwnPropertyResult2) {
      let tmp37 = closure_7;
      let expandFormatResult2 = expandFormat(key10079, dateFormats[key10079]);
      hasOwnPropertyResult2 = closure_7(expandFormatResult2);
      tmp28 = expandFormatResult2;
      tmp29 = hasOwnPropertyResult2;
    }
    let tmp41 = tmp29;
    let tmp40 = tmp28;
    if (!hasOwnPropertyResult2) {
      continue;
    } else {
      let arr4 = items.push(tmp41);
      tmp28 = tmp40;
      tmp29 = tmp41;
      // continue
    }
    continue;
  }
  return items;
};
let closure_0 = /(?:[Eec]{1,6}|G{1,5}|(?:[yYu]+|U{1,5})|[ML]{1,5}|d{1,2}|a|[hkHK]{1,2}|m{1,2}|s{1,2}|z{1,4})(?=([^']*'[^']*')*[^']*$)/g;
let closure_1 = /[QxXVOvZASjgFDwWIQqH]/;
let closure_2 = { month: [], weekday: [], era: [] };
let closure_3 = [];
let closure_4 = ["r", "isArray", "error", "constructor"];

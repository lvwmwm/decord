// Module ID: 13196
// Function ID: 99980
// Name: invariant
// Dependencies: []
// Exports: LookupSupportedLocales, match

// Module 13196 (invariant)
function invariant(arg0, arg1) {
  if (arguments.length > 2) {
    if (undefined !== arguments[2]) {
      let _Error = arguments[2];
    }
    if (!arg0) {
      const prototype = _Error.prototype;
      _Error = new _Error(arg1);
      throw _Error;
    }
  }
  _Error = Error;
}
function processData() {
  if (!obj) {
    const first = closure_3.supplemental.languageMatching.written-new[0];
    let parts;
    if (null != first) {
      const paradigmLocales = first.paradigmLocales;
      if (null != paradigmLocales) {
        parts = paradigmLocales._locales.split(" ");
        const str = paradigmLocales._locales;
      }
    }
    const prop = closure_3.supplemental.languageMatching.written-new;
    const substr = prop.slice(1, 5);
    const obj = {};
    const prop1 = closure_3.supplemental.languageMatching.written-new;
    const substr1 = prop1.slice(5);
    obj.matches = substr1.map((arg0) => {
      const first = Object.keys(arg0)[0];
      return { supported: first, desired: arg0[first]._desired, distance: +arg0[first]._distance, oneway: "true" === arg0[first].oneway };
    }, {});
    obj.matchVariables = substr.reduce((arg0, arg1) => {
      const first = Object.keys(arg1)[0];
      const substr = first.slice(1);
      arg0[substr] = arg1[first]._value.split("+");
      return arg0;
    }, {});
    const items = [];
    obj.paradigmLocales = items.concat(callback2(parts), callback2(parts.map((str) => {
      const locale = new Intl.Locale(str.replace(/_/g, "-"));
      return locale.maximize().toString();
    })));
    const tmp8 = callback2(parts);
  }
  return obj;
}
function isMatched(region, str) {
  const tmp = callback(str.split("-"), 3);
  const first = tmp[0];
  if (tmp[2]) {
    if ("$" === arr[0]) {
      const slice = arr.slice;
      if ("!" !== arr[1]) {
        let arr2 = arg2[slice(arr, 1)];
      } else {
        arr2 = arg2[slice(arr, 2)];
      }
      const mapped = arr2.map((arg0) => {
        let tmp = closure_4[arg0];
        if (!tmp) {
          const items = [arg0];
          tmp = items;
        }
        return tmp;
      });
      const reduced = mapped.reduce((arg0, arg1) => {
        const items = [];
        return items.concat(callback(arg0), callback(arg1));
      }, []);
      let str4 = region.region;
      if (!str4) {
        str4 = "";
      }
      let tmp4 = reduced.indexOf(str4) > -1 === tmp6;
    }
    if (tmp4) {
      let tmp7 = !region.script;
      if (!tmp7) {
        tmp7 = "*" === tmp3 || tmp3 === region.script;
        const tmp8 = "*" === tmp3 || tmp3 === region.script;
      }
      tmp4 = tmp7;
    }
    if (tmp4) {
      let tmp9 = !region.language;
      if (!tmp9) {
        tmp9 = "*" === first || first === region.language;
        const tmp10 = "*" === first || first === region.language;
      }
      tmp4 = tmp9;
    }
    return tmp4;
  }
  tmp4 = !region.region;
  if (!tmp4) {
    tmp4 = "*" === arr || arr === region.region;
    const tmp5 = "*" === arr || arr === region.region;
  }
}
function serializeLSR(arg0) {
  const items = [, , ];
  ({ language: arr[0], script: arr[1], region: arr[2] } = arg0);
  const found = items.filter(Boolean);
  return found.join("-");
}
function findMatchingDistanceForLSR(arg0, arg1, arg2) {
  for (const item10011 of tmp2) {
    let tmp29 = item10011;
    let tmp30 = closure_12;
    let tmp31 = arg0;
    let tmp32 = arg2;
    let tmp33 = closure_12(arg0, item10011.desired, tmp.matchVariables);
    let tmp7 = tmp33;
    if (tmp33) {
      let tmp3 = closure_12;
      let tmp4 = arg1;
      let tmp5 = item10011;
      let tmp6 = arg2;
      tmp7 = closure_12(arg1, tmp29.supported, tmp.matchVariables);
    }
    let tmp8 = tmp7;
    let tmp9 = item10011;
    let oneway = tmp29.oneway;
    let tmp10 = oneway;
    if (!oneway) {
      tmp10 = tmp8;
    }
    if (!tmp10) {
      let tmp11 = closure_12;
      let tmp12 = arg0;
      let tmp13 = item10011;
      let tmp14 = arg2;
      let tmp15 = closure_12(arg0, tmp29.supported, tmp.matchVariables);
      let tmp16 = tmp15;
      if (tmp15) {
        let tmp17 = closure_12;
        let tmp18 = arg1;
        let tmp19 = item10011;
        let tmp20 = arg2;
        tmp16 = closure_12(arg1, tmp29.desired, tmp.matchVariables);
      }
      tmp8 = tmp16;
    }
    let tmp21 = tmp8;
    if (tmp8) {
      let num = 10;
      let result = 10 * item10011.distance;
      let tmp23 = arg2;
      let paradigmLocales = tmp.paradigmLocales;
      let tmp24 = closure_13;
      let num2 = -1;
      let paradigmLocales1 = tmp.paradigmLocales;
      let tmp25 = paradigmLocales.indexOf(closure_13(arg0)) > -1;
      if (tmp25 !== paradigmLocales1.indexOf(closure_13(arg1)) > -1) {
        let tmp27 = result;
        let num3 = 1;
        let diff = result - 1;
      } else {
        diff = result;
      }
      obj.return();
      return diff;
    } else {
      // continue
    }
  }
  const error = new Error("No matching distance found");
  throw error;
}
function getFallbackCandidates(arg0) {
  let str = arg0;
  const items = [];
  if (arg0) {
    items.push(str);
    const lastIndexOfResult = str.lastIndexOf("-");
    while (-1 !== lastIndexOfResult) {
      str = str.substring(0, lastIndexOfResult);
      if (!str) {
        break;
      }
    }
  }
  return items;
}
function BestFitMatcher(arr2, arr) {
  const items = [];
  let closure_0 = items;
  const reduced = arr.reduce((arg0, str) => {
    const replaced = str.replace(closure_5, "");
    items.push(replaced);
    arg0[replaced] = str;
    return arg0;
  }, {});
  const tmp2 = function findBestMatch(items, arr2) {
    items = arr2;
    let num = 838;
    if (arguments.length > 2) {
      num = 838;
      if (undefined !== arguments[2]) {
        num = arguments[2];
      }
    }
    let closure_1 = Infinity;
    const obj = { matchedDesiredLocale: "", distances: {} };
    const value = store.get(arr2);
    let mapped = value;
    let tmp3 = value;
    if (!value) {
      mapped = arr2.map((arg0) => {
        const items = [arg0];
        const first = Intl.getCanonicalLocales(items)[0];
        let tmp2 = first;
        if (!first) {
          tmp2 = arg0;
        }
        return tmp2;
      });
      const result = store.set(arr2, mapped);
      tmp3 = mapped;
    }
    const set = new Set(tmp3);
    let num2 = 0;
    if (0 < items.length) {
      while (true) {
        let tmp8 = items;
        let tmp9 = items[num2];
        let tmp10 = set;
        if (obj2.has(tmp9)) {
          let result1 = 40 * num2;
          let tmp12 = obj;
          let tmp13 = items;
          tmp.distances[tmp9] = items({}, tmp9, result1);
          let tmp14 = closure_1;
          if (result1 < closure_1) {
            closure_1 = result1;
            let tmp15 = obj;
            tmp.matchedDesiredLocale = tmp9;
            tmp.matchedSupportedLocale = tmp9;
          }
          let tmp16 = result1;
          if (0 === num2) {
            break;
          }
        }
        num2 = num2 + 1;
        let tmp17 = items;
      }
      return obj;
    }
    let num3 = 0;
    if (0 < items.length) {
      while (true) {
        let tmp18 = items;
        let tmp19 = num3;
        let tmp20 = items[num3];
        let _Intl = Intl;
        let tmp21 = tmp20;
        let prototype = Locale.prototype;
        let tmp22 = new.target;
        let tmp23 = new.target;
        let tmp24 = tmp20;
        let locale = new Locale(tmp20);
        let tmp25 = locale;
        let str = locale.maximize();
        str = str.toString();
        let tmp27 = str;
        if (str !== tmp20) {
          let tmp69 = callback;
          let tmp70 = str;
          let arr = callback(tmp27);
          arr2 = arr;
          let num4 = 0;
          if (0 < arr.length) {
            while (true) {
              let tmp28 = arr;
              let tmp29 = num4;
              let tmp30 = arr2[num4];
              let tmp31 = tmp30;
              let tmp32 = tmp20;
              if (tmp30 !== tmp20) {
                let tmp33 = set;
                let tmp34 = tmp30;
                if (obj2.has(tmp31)) {
                  break;
                }
              }
              let tmp35 = num4;
              let sum = num4 + 1;
              num4 = sum;
              let tmp37 = arr;
            }
            let _Intl2 = Intl;
            let tmp38 = tmp30;
            let prototype2 = Locale2.prototype;
            let tmp39 = new.target;
            let tmp40 = new.target;
            let locale2 = new Locale2(tmp31);
            let tmp41 = locale2;
            let str2 = locale2.maximize();
            let tmp42 = str;
            if (str2.toString() === tmp27) {
              let tmp46 = num3;
              let result2 = 40 * num3;
            } else {
              let tmp43 = num4;
              let tmp44 = num3;
              result2 = 10 * num4 + 40 * num3;
            }
            let tmp47 = result2;
            while (true) {
              let tmp48 = obj;
              let tmp49 = tmp20;
              if (tmp.distances[tmp20]) {
                break;
              } else {
                let tmp50 = obj;
                let tmp51 = tmp20;
                tmp.distances[tmp20] = {};
                // break
              }
              let tmp52 = obj;
              let tmp53 = tmp20;
              let tmp54 = tmp30;
              let tmp55 = tmp47;
              tmp.distances[tmp20][tmp31] = tmp47;
              let tmp56 = closure_1;
              if (tmp47 < closure_1) {
                let tmp57 = tmp47;
                closure_1 = tmp47;
                let tmp58 = obj;
                let tmp59 = tmp20;
                tmp.matchedDesiredLocale = tmp20;
                let tmp60 = tmp30;
                tmp.matchedSupportedLocale = tmp31;
              }
            }
          }
        }
        while (true) {
          let tmp61 = num3;
          let sum1 = num3 + 1;
          num3 = sum1;
          let tmp63 = items;
          if (sum1 < items.length) {
            break;
          } else {
            break label0;
          }
        }
      }
    }
    let matchedSupportedLocale = tmp.matchedSupportedLocale;
    if (matchedSupportedLocale) {
      matchedSupportedLocale = 0 === closure_1;
    }
    if (!matchedSupportedLocale) {
      closure_1 = Infinity;
      const item = items.forEach((arg0, arg1) => {
        arg1 = arg0;
        let closure_1 = arg1;
        if (!obj.distances[arg0]) {
          obj.distances[arg0] = {};
        }
        const item = mapped.forEach((arg0, arg1) => {
          const sum = callback(arg0, arg0) + 40 * arg1;
          distances.distances[closure_0][arg0[arg1]] = sum;
          if (sum < arg1) {
            arg1 = sum;
            distances.matchedDesiredLocale = arg0;
            distances.matchedSupportedLocale = tmp;
          }
        });
      });
      if (closure_1 >= num) {
        tmp.matchedDesiredLocale = undefined;
        tmp.matchedSupportedLocale = undefined;
      }
    }
    return obj;
  }(items, arr2);
  let prop;
  if (tmp3) {
    arr2 = reduced[tmp2.matchedDesiredLocale];
    const tmp6 = reduced[tmp2.matchedDesiredLocale].slice(tmp2.matchedDesiredLocale.length) || undefined;
    prop = tmp2.matchedSupportedLocale;
    const tmp5 = reduced[tmp2.matchedDesiredLocale].slice(tmp2.matchedDesiredLocale.length) || undefined;
  }
  if (prop) {
    let obj = { locale: prop, extension: tmp5 };
  } else {
    obj = { locale: arg2() };
  }
  return obj;
}
function CanonicalizeUnicodeLocaleId(items) {
  return Intl.getCanonicalLocales(items)[0];
}
function BestAvailableLocale(items) {
  let substr = arg1;
  let value = weakMap1.get(items);
  if (!value) {
    const _Set = Set;
    const set = new Set(items);
    const result = weakMap1.set(items, set);
    value = set;
  }
  while (!value.has(substr)) {
    let lastIndexOfResult = substr.lastIndexOf("-");
    if (~lastIndexOfResult) {
      let tmp10 = lastIndexOfResult >= 2 && "-" === substr[lastIndexOfResult - 2];
      let diff = lastIndexOfResult;
      if (tmp10) {
        diff = lastIndexOfResult - 2;
      }
      substr = substr.slice(0, diff);
      // continue
    }
  }
  return substr;
}
class ResolveLocale {
  constructor(arg0, arg1, arg2, arg3, arg4, arg5) {
    if ("lookup" === importDefault.localeMatcher) {
      tmp4 = globalThis;
      _Array2 = Array;
      arr = Array.from(global);
      obj = {};
      str = "";
      obj.locale = "";
      tmp7 = obj;
      tmp8 = arg1;
      for (const item10028 of arg1) {
        arr = item10028;
        tmp9 = closure_5;
        replaced = item10028.replace(closure_5, "");
        tmp11 = closure_18;
        tmp12 = arr;
        tmp10 = replaced;
        tmp13 = closure_18(tmp6, replaced);
        tmp14 = tmp13;
        if (tmp13) {
          tmp15 = obj;
          tmp7.locale = tmp13;
          tmp16 = item10028;
          tmp17 = replaced;
          if (arr === tmp10) {
          } else {
            tmp18 = obj;
            tmp19 = item10028;
            tmp7.extension = arr.slice(replaced.length, arr.length);
          }
          tmp20 = obj;
          obj2.return();
        } else {
          // continue
        }
        tmp22 = tmp20;
        tmp21 = __exception;
        obj2.return();
        throw tmp21;
      }
      obj.locale = exports();
      tmp20 = obj;
    } else {
      tmp = BestFitMatcher;
      tmp2 = globalThis;
      _Array = Array;
      tmp3 = BestFitMatcher(Array.from(global), arg1, exports);
      tmp23 = null;
      if (null == tmp3) {
        obj = {};
        obj.locale = exports();
        str2 = "";
        obj.extension = "";
        tmp3 = obj;
      }
      locale = tmp3.locale;
      tmp24 = module;
      closure_2 = module[locale];
      obj1 = {};
      str3 = "en";
      obj1.locale = "en";
      obj1.dataLocale = locale;
      closure_3 = obj1;
      if (tmp3.extension) {
        closure_1 = function UnicodeExtensionComponents(extension) {
          callback(extension === extension.toLowerCase(), "Expected extension to be lowercase");
          callback("-u-" === extension.slice(0, 3), "Expected extension to be a Unicode locale extension");
          const attributes = [];
          const keywords = [];
          let num = 3;
          if (3 < extension.length) {
            while (true) {
              let index = extension.indexOf("-", num);
              let tmp5 = num;
              let tmp6 = -1 === index ? length - num : index - num;
              let substr = extension.slice(num, num + tmp6);
              let tmp8 = callback;
              let tmp9 = callback(tmp6 >= 2, "Expected a subtag to have at least 2 characters");
              if (undefined === iter) {
                if (2 !== tmp6) {
                  let tmp13 = iter;
                  let tmp14 = tmp3;
                  if (-1 === attributes.indexOf(substr)) {
                    let arr = attributes.push(substr);
                    tmp13 = iter;
                    tmp14 = tmp3;
                  }
                  num = num + (tmp6 + 1);
                  let iter = tmp13;
                  let tmp3 = tmp14;
                  if (num >= length) {
                    break;
                  }
                }
              }
              if (2 === tmp6) {
                let obj = { key: substr, value: "" };
                let arg2 = obj;
                tmp13 = obj;
                tmp14 = tmp3;
                if (undefined === keywords.find((key) => {
                  key = undefined;
                  if (null != obj) {
                    key = obj.key;
                  }
                  return key.key === key;
                })) {
                  arr = keywords.push(obj);
                  tmp13 = obj;
                  tmp14 = tmp3;
                }
              } else {
                let value;
                if (null != iter) {
                  value = iter.value;
                }
                if ("" === value) {
                  iter.value = substr;
                  tmp13 = iter;
                  tmp14 = iter;
                } else {
                  let tmp11 = callback;
                  let tmp12 = callback(undefined !== iter, "Expected keyword to be defined");
                  iter.value = `${iter.value}-${tmp7}`;
                  tmp13 = iter;
                  tmp14 = iter;
                }
              }
            }
          }
          return { attributes, keywords };
        }(tmp3.extension).keywords;
      } else {
        closure_1 = [];
      }
      closure_4 = [];
      _loop = function _loop(key) {
        const arg2 = key;
        let items;
        if (null != closure_2) {
          items = closure_2[key];
        }
        if (null == items) {
          items = [];
        }
        const isArray = Array.isArray(items);
        callback(isArray, "keyLocaleData for " + key + " must be an array");
        const first = items[0];
        let tmp6 = undefined === first;
        if (!tmp6) {
          tmp6 = "string" === typeof first;
        }
        callback(tmp6, "value must be a string or undefined");
        const iter = closure_1.find((key) => key.key === key);
        let tmp8;
        let str2 = first;
        if (iter) {
          const value = iter.value;
          if ("" !== value) {
            str2 = first;
            if (items.indexOf(value) > -1) {
              let obj = { key, value };
              tmp8 = obj;
              str2 = value;
            }
          } else {
            str2 = first;
            if (items.indexOf("true") > -1) {
              obj = { key, value: "true" };
              tmp8 = obj;
              str2 = "true";
            }
          }
        }
        let tmp10 = null == str5;
        if (!tmp10) {
          tmp10 = "string" === typeof str5;
        }
        callback(tmp10, "optionsValue must be a string or undefined");
        let tmp12 = "string" === typeof str5;
        let str7 = str5;
        if (tmp12) {
          const formatted = key.toLowerCase();
          const formatted1 = str5.toLowerCase();
          callback(undefined !== formatted, "ukey must be defined");
          tmp12 = "" === formatted1;
          str7 = formatted1;
        }
        if (tmp12) {
          str7 = "true";
        }
        let tmp17 = str7 !== str2;
        if (tmp17) {
          tmp17 = items.indexOf(str7) > -1;
        }
        if (tmp17) {
          str2 = str7;
        }
        if (tmp8) {
          const arr = arr.push(tmp8);
        }
        obj[key] = str2;
      };
      tmp25 = importAll;
      tmp3 = importAll[Symbol.iterator]();
    }
    return;
  }
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
const items = [{ paradigmLocales: { _locales: "en en_GB es es_419 pt_BR pt_PT" } }, { $enUS: { _value: "AS+CA+GU+MH+MP+PH+PR+UM+US+VI" } }, { $cnsar: { _value: "HK+MO" } }, { $americas: { _value: "019" } }, { $maghreb: { _value: "MA+DZ+TN+LY+MR+EH" } }, { no: { 0: "crs", 9223372036854775807: "20" } }, { bs: {} }, { bs: {} }, { hr: {} }, { sr: {} }, { aa: { 0: false, 9223372036854775807: false } }, { de: { "Null": "<string:139477252>", "Null": "<string:2823880705>", "Null": "<string:945705279>" } }, { de: { "Null": "canSubmitFpReport", "Null": "trackForumTagFilterClicked", "Null": "Array" } }, { no: { 0: true, 9223372036854775807: true } }, { nb: { 0: true, 9223372036854775807: true } }, { ru: { "Null": false, "Null": false, "Null": false } }, { en: { "Null": false, "Null": false, "Null": false } }, { nl: { "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001443111066885237, "Null": 4119793759400367000000000000000000000000000000000000000000000000000000000000000, "Null": -672374511992035600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 } }, { en: { "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001435832685330367, "Null": -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001360546104132698, "Null": 765197480684061000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 } }, { en: { "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001443111112386707, "Null": -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000013195120880574163, "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000013873200197971074 } }, { es: { "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001443111068471306, "Null": -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000013176436286404923, "Null": -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000035209375199886536 } }, { ru: { "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001443111066471645, "Null": 3941080712492163000000000000000000000000000000000000000000000000000000000000000, "Null": 5806739617712590000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 } }, { ur: { "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001435832621363965, "Null": 3940027671641555000000000000000000000000000000000000000000000000000000000000000, "Null": -0.00000001606406835330619 } }, { ru: { "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000143583262098705, "Null": -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001357749915024259, "Null": -0.000000000000000000000000000000013287885900581523 } }, { en: { "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000144311110939417, "Null": -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000013181104480394075, "Null": 14115402092026180000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 } }, { hi: { "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001443111066971244, "Null": 4001496281025195000000000000000000000000000000000000000000000000000000000000000, "Null": 260383209889111300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 } }, { en: { "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000143583264298839, "Null": 3942709745485889000000000000000000000000000000000000000000000000000000000000000, "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002409123212765493 } }, { zh: { "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000143583262194704, "Null": 3939688437005118000000000000000000000000000000000000000000000000000000000000000, "Null": -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000023074816130997636 } }, { fr: { "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000143583262086563, "Null": -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000131716262738642, "Null": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024091232127654933 } }, { es: { "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000144311106595687, "Null": -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000013856763514707584, "Null": -358240695198860800000000000000000000 } }, { fil: { "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001443111139281585, "Null": 3939444612110178500000000000000000000000000000000000000000000000000000000000000, "Null": 0.00000000000000000000000000000000000000000000004720805400133628 } }, { en: { "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000143583262077836, "Null": 3939836852158559000000000000000000000000000000000000000000000000000000000000000, "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000009091940481742321 } }, { ar: { "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000143583262091875, "Null": 4023037680438973500000000000000000000000000000000000000000000000000000000000000, "Null": 0.00000000000000000000000000000000000000000000004720805400133628 } }, { fr: { "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000143583265069866, "Null": 3986877388411219000000000000000000000000000000000000000000000000000000000000000, "Null": -765197480684060800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 } }, { fr: { "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001435832637755877, "Null": 4002839084794427000000000000000000000000000000000000000000000000000000000000000, "Null": -0.00000000000000000000000000000000000010725599577588207 } }, { sk: {} }, { en: { "Null": "kn", "Null": "30", "Null": "true" } }, { en: { "Null": "kri", "Null": "30", "Null": "true" } }, { en: { "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000143583262356473, "Null": 3980135100012025000000000000000000000000000000000000000000000000000000000000000, "Null": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000019927800148510783 } }, { es: { "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001435832635342623, "Null": -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000131790008385458, "Null": 83409411646160490000000000 } }, { da: { "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000144311106674611, "Null": 3996881276491994000000000000000000000000000000000000000000000000000000000000000, "Null": -2248713289518899800000000000000000000000000000000000000000000000000000000000000000000000000000 } }, { nl: { "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000143583264133655, "Null": 4057992982768549000000000000000000000000000000000000000000000000000000000000000, "Null": -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005145855950403225 } }, { en: { "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000143583266321014, "Null": 3939306798039126000000000000000000000000000000000000000000000000000000000000000, "Null": 983965911474490000000000000000000000000000000000000000000000000000000 } }, { en: { "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000143583262072903, "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006145602381428275, "Null": 135967866881.03247 } }, { en: { "Null": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011079087876310353, "Null": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000025261575302306082, "Null": 0.04749298107722666 } }, { es: { "Null": false, "Null": false, "Null": false } }, { es: { "Null": "true", "Null": "mai", "Null": "20" } }, { hi: { "Null": "true", "Null": "mfe", "Null": "30" } }, { en: { "Null": "true", "Null": "mg", "Null": "30" } }, { en: { "Null": "true", "Null": "mi", "Null": "20" } }, { fr: { "Null": "true", "Null": "ml", "Null": "30" } }, { ru: { "Null": false, "Null": false, "Null": false } }, { en: { "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001435832693794463, "Null": 17219692242397643000000000000000000000000000000000000000000000000000000000000000000, "Null": 3939695501022425000000000000000000000000000000000000000000000000000000000000000 } }, { en: { "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003603064903818256, "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000143583262086816, "Null": 4094754002798328000000000000000000000000000000000000000000000000000000000000000 } }, { en: { "Null": null, "Null": null, "Null": null } }, { id: { "Null": false, "Null": false, "Null": false } }, { en: {} }, { fr: { "Null": null, "Null": null, "Null": "30" } }, { ru: { "Null": null, "Null": null, "Null": null } }, { en: { "Null": null, "Null": null, "Null": null } }, { en: { "Null": "row", "Null": "center", "Null": "stretch" } }, { en: {} }, { tr: {} }, { ru: {} }, { it: {} }, { en: {} }, { fr: {} }, { en: {} }, { en: {} }, { fr: { "Null": "true", "Null": "rm", "Null": "20" } }, { hi: { "Null": false, "Null": false, "Null": false } }, { en: { "Null": false, "Null": false, "Null": false } }, { fr: { "Null": false, "Null": false, "Null": false } }, { en: { "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000143583265675709, "Null": 3939508218604510600000000000000000000000000000000000000000000000000000000000000, "Null": -1351986922722447200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 } }, { en: { "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001435832620801125, "Null": 3944996045587712000000000000000000000000000000000000000000000000000000000000000, "Null": -23477662200552540000000000000000000000000 } }, { ru: { "Null": false, "Null": false, "Null": false } }, { hi: { "Null": "true", "Null": "so", "Null": "30" } }, { id: { "Null": null, "Null": null, "Null": null } }, { en: {} }, { en: {} }, { en: {} }, { nb: {} }, { no: {} }, { en: { "Null": "30", "Null": "true", "Null": "ti" } }, { en: { "Null": "30", "Null": "true", "Null": "tlh" } }, { en: {} }, { fr: { "Null": "Text", "Null": "accessibilityLabel", "Null": "type" } }, { en: { "Null": "30", "Null": "true", "Null": "tt" } }, { en: { "Null": "30", "Null": "true", "Null": "tum" } }, { en: { "Null": null, "Null": null, "Null": null } }, { en: { "Null": false, "Null": false, "Null": false } }, { en: { "Null": null, "Null": null, "Null": null } }, { es: { "Null": null, "Null": null, "Null": "30" } }, { de: { "Null": "Text", "Null": "accessibilityLabel", "Null": "type" } }, { en: { "Null": null, "Null": null, "Null": "30" } }, { fr: { "Null": null, "Null": null, "Null": null } }, { hi: { "Null": null, "Null": null, "Null": null } }, { en: { "Null": false, "Null": false, "Null": false } }, { en: { "Null": true, "Null": true, "Null": true } }, { en: { "Null": "<string:17322049>", "Null": "<string:1067995392>", "Null": "<string:1100779857>" } }, { en: { "Null": true, "Null": true, "Null": true } }, { en: { "Null": false, "Null": false, "Null": false } }, { en: { "Null": null, "Null": null, "Null": null } }, { id: { "Null": "acm", "Null": "10", "Null": "true" } }, { en: { "Null": "acq", "Null": "10", "Null": "true" } }, { en: { "Null": "<string:4456450>", "Null": "_childrenToCellKey", "Null": "<string:3120563062>" } }, { en: { "Null": "acw", "Null": "10", "Null": "true" } }, { ru: { "Null": "acx", "Null": "10", "Null": "true" } }, { en: { "Null": "acy", "Null": "10", "Null": "true" } }, { ru: { "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000143920663837957, "Null": -835204933236041400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Null": -1860092036280377400000000000000000000000000000000000000000000000000000 } }, { en: { "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000143920664525254, "Null": -835205656183614900000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Null": -215383943054598650000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 } }, { en: { "Null": "aec", "Null": "10", "Null": "true" } }, { en: { "Null": "afb", "Null": "10", "Null": "true" } }, { ru: { "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000143920664535878, "Null": -835704490009281000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Null": 0.0000000000000000000000000000000000000000000000000007203377380574994 } }, { en: { "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000143920664612652, "Null": -819918929743452200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Null": -107115439630614190000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 } }, { zh: { "Null": "apd", "Null": "10", "Null": "true" } }, { ru: { "Null": "arq", "Null": "10", "Null": "true" } }, { en: { "Null": "ars", "Null": "10", "Null": "true" } }, { ru: { "Null": "ary", "Null": "10", "Null": "true" } }, { fr: { "Null": "arz", "Null": "10", "Null": "true" } }, { en: { "Null": "auz", "Null": "10", "Null": "true" } }, { en: { "Null": "avl", "Null": "10", "Null": "true" } }, { en: { "Null": "ayh", "Null": "10", "Null": "true" } }, { zh: { "Null": "ayl", "Null": "10", "Null": "true" } }, { en: { "Null": "ayn", "Null": "10", "Null": "true" } }, { ar: { "Null": "ayp", "Null": "10", "Null": "true" } }, { ar: { "Null": "bbz", "Null": "10", "Null": "true" } }, { ar: { "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000143920661671341, "Null": -846147467707467400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Null": -73291357939383450000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 } }, { ar: { "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001439206664396673, "Null": -813199132048426900000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Null": -64485189974392170000000000000000000000000000000000000000000000000000000000 } }, { ar: { "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001439206606753046, "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000634933519731885, "Null": 135967866881.0349 } }, { ar: { "Null": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011362117275091626, "Null": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000025237525281985975, "Null": 0.0474929810775091 } }, { ar: { "Null": false, "Null": false, "Null": false } }, { ar: { "Null": "true", "Null": "ffm", "Null": "10" } }, { ar: {} }, { ar: {} }, { ar: { "Null": null, "Null": null, "Null": null } }, { ar: { "Null": "Array", "Null": "isArray", "Null": "accessibilityRole" } }, { ar: {} }, { ar: { "Null": null, "Null": null, "Null": null } }, { ar: { "Null": true, "Null": true, "Null": true } }, { ar: { "Null": 15180935372308620000000000000000000000000000000000000000000000000000000000000000000, "Null": -47426719213352030000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Null": 229097416502072000000000000000000000000000000000000000000000 } }, { ar: { "Null": "gnw", "Null": "10", "Null": "true" } }, { ar: { "Null": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011362117262835857, "Null": 1507935486.6299438, "Null": 135967866881.0349 } }, { ar: { "Null": false, "Null": false, "Null": false } }, { ar: { "Null": false, "Null": false, "Null": false } }, { ar: { "Null": "true", "Null": "ikt", "Null": "10" } }, { ar: {} }, { ar: {} }, { ar: { "Null": null, "Null": null, "Null": null } }, { ar: { "Null": "Array", "Null": "isArray", "Null": "accessibilityRole" } }, { ar: {} }, { ar: {} }, { ar: { "Null": null, "Null": null, "Null": null } }, { ar: { "Null": true, "Null": true, "Null": true } }, { az: { "Null": "<string:149880836>", "Null": "<string:2823880705>", "Null": "<string:1799311679>" } }, { et: { "Null": -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001725802052473952, "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012017565590549289, "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000014506171679482726 } }, { ff: { "Null": null, "Null": null, "Null": null } }, { ff: { "Null": false, "Null": false, "Null": false } }, { ff: { "Null": true, "Null": true, "Null": true } }, { ff: { "Null": null, "Null": null, "Null": null } }, { ff: { "Null": true, "Null": true, "Null": true } }, { ff: { "Null": "<string:149880836>", "Null": "<string:2823880705>", "Null": "<string:2426225215>" } }, { ff: { "Null": true, "Null": true, "Null": true } }, { ff: { "Null": "<string:149880836>", "Null": "<string:2823880705>", "Null": "<string:2028945983>" } }, { gn: { "Null": 149880836, "Null": -1471086591, "Null": 832782911 } }, { gn: { "Null": -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000017258020524679134, "Null": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011362117275121052, "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010789254032701498 } }, { gn: { "Null": true, "Null": true, "Null": true } }, { gn: { "Null": "<string:4009755738>", "Null": "<string:1358954760>", "Null": "<string:2856468392>" } }, { iu: { "Null": false, "Null": false, "Null": false } }, { kln: { "Null": null, "Null": null, "Null": null } }, { kln: { "Null": 0.04749298107750955, "Null": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011362117275450127, "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007803844843632132 } }, { kln: { "Null": true, "Null": true, "Null": true } }, { kln: { "Null": "y", "Null": "FirstPartyQuestTaskTypesSets", "Null": "Array" } }, { kln: { "Null": null, "Null": null, "Null": null } }, { kln: { "Null": null, "Null": null, "Null": null } }, { kln: { "Null": null, "Null": null, "Null": null } }, { kln: { "Null": false, "Null": false, "Null": false } }, { kok: { "Null": 149880836, "Null": -1471086591, "Null": 2007253567 } }, { kpe: { "Null": false, "Null": false, "Null": false } }, { luy: { "Null": -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000017258020524679134, "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012017563637328975, "Null": 0.00000000000000000000000000000000000000000000000000000000000000000023422509090983406 } }, { luy: { "Null": null, "Null": null, "Null": null } }, { luy: { "Null": true, "Null": true, "Null": true } }, { luy: { "Null": true, "Null": true, "Null": true } }, { luy: { "Null": null, "Null": null, "Null": null } }, { luy: { "Null": false, "Null": false, "Null": false } }, { luy: { "Null": "10", "Null": "true", "Null": "bvu" } }, { luy: { "Null": "Array", "Null": "isArray", "Null": "accessibilityRole" } }, { luy: { "Null": null, "Null": null, "Null": null } }, { luy: {} }, { luy: {} }, { luy: { "Null": "Array", "Null": "isArray", "Null": "accessibilityRole" } }, { luy: { "Null": null, "Null": null, "Null": null } }, { lv: {} }, { mg: {} }, { mg: {} }, { mg: { "Null": "true", "Null": "lce", "Null": "10" } }, { mg: { "Null": false, "Null": false, "Null": false } }, { mg: { "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001439206601652075, "Null": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001211610699122252, "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000037570186022259374 } }, { mg: { "Null": "max", "Null": "10", "Null": "true" } }, { mg: { "Null": false, "Null": false, "Null": false } }, { mg: { "Null": "10", "Null": "true", "Null": "mfb" } }, { mg: { "Null": "Array", "Null": "isArray", "Null": "accessibilityRole" } }, { mg: { "Null": null, "Null": null, "Null": null } }, { mg: {} }, { mn: {} }, { ms: { "Null": "true", "Null": "orn", "Null": "10" } }, { ms: { "Null": "true", "Null": "ors", "Null": "10" } }, { ms: { "Null": "true", "Null": "pel", "Null": "10" } }, { ms: { "Null": "true", "Null": "pse", "Null": "10" } }, { ms: { "Null": "true", "Null": "tmw", "Null": "10" } }, { ms: { "Null": "true", "Null": "urk", "Null": "10" } }, { ms: { "Null": "true", "Null": "vkk", "Null": "10" } }, { ms: { "Null": 67823, "Null": 1363126353, "Null": -280949505 } }, { ms: { "Null": 17362753, "Null": 1067995392, "Null": 1107230033 } }, { ms: { "Null": 17362753, "Null": 1067995392, "Null": 1104270417 } }, { ms: { "Null": "rng", "Null": "CARDINAL_SCRIPT_SOURCE", "Null": "headMetaSocial" } }, { ms: { "Null": "enabled", "Null": "y", "Null": "isArray" } }, { ms: { "Null": "gax", "Null": "10", "Null": "true" } }, { ms: { "Null": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011362117275156695, "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003420120348069909, "Null": 0.0474929810775091 } }, { ms: { "Null": false, "Null": false, "Null": false } }, { ms: { "Null": "true", "Null": "spv", "Null": "10" } }, { ms: {} }, { ms: { "Null": null, "Null": null, "Null": null } }, { ms: { "Null": "Array", "Null": "isArray", "Null": "accessibilityRole" } }, { ms: {} }, { ms: { "Null": null, "Null": null, "Null": null } }, { ms: { "Null": -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000017258020524679134, "Null": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001201756399484772, "Null": 65575551981427380000000000000000000 } }, { ms: { "Null": -285211580, "Null": 1358954760, "Null": 692207528 } }, { ms: { "Null": "quh", "Null": "10", "Null": "true" } }, { ms: { "Null": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011362117276499935, "Null": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000016968326628588953, "Null": 0.0474929810775091 } }, { ms: { "Null": false, "Null": false, "Null": false } }, { ms: { "Null": "true", "Null": "qup", "Null": "10" } }, { ms: {} }, { ms: {} }, { ms: { "Null": null, "Null": null, "Null": null } }, { ms: { "Null": "Array", "Null": "isArray", "Null": "accessibilityRole" } }, { ms: {} }, { ms: { "Null": null, "Null": null, "Null": null } }, { ms: { "Null": true, "Null": true, "Null": true } }, { ms: { "Null": null, "Null": null, "Null": null } }, { ne: { "Null": "qve", "Null": "10", "Null": "true" } }, { om: { "Null": "qvh", "Null": "10", "Null": "true" } }, { om: { "Null": "qvi", "Null": "10", "Null": "true" } }, { om: { "Null": "qvj", "Null": "10", "Null": "true" } }, { or: { "Null": "qvl", "Null": "10", "Null": "true" } }, { ps: { "Null": "qvm", "Null": "10", "Null": "true" } }, { ps: { "Null": "qvn", "Null": "10", "Null": "true" } }, { qu: { "Null": "qvo", "Null": "10", "Null": "true" } }, { qu: { "Null": "qvp", "Null": "10", "Null": "true" } }, { qu: { "Null": "qvs", "Null": "10", "Null": "true" } }, { qu: { "Null": "qvw", "Null": "10", "Null": "true" } }, { qu: { "Null": "qvz", "Null": "10", "Null": "true" } }, { qu: { "Null": "qwa", "Null": "10", "Null": "true" } }, { qu: { "Null": "qwc", "Null": "10", "Null": "true" } }, { qu: { "Null": "qwh", "Null": "10", "Null": "true" } }, { qu: { "Null": "qws", "Null": "10", "Null": "true" } }, { qu: { "Null": "qxa", "Null": "10", "Null": "true" } }, { qu: { "Null": "qxc", "Null": "10", "Null": "true" } }, { qu: { "Null": "qxh", "Null": "10", "Null": "true" } }, { qu: { "Null": "qxl", "Null": "10", "Null": "true" } }, { qu: { "Null": "qxn", "Null": "10", "Null": "true" } }, { qu: { "Null": "qxo", "Null": "10", "Null": "true" } }, { qu: { "Null": "qxp", "Null": "10", "Null": "true" } }, { qu: { "Null": "qxr", "Null": "10", "Null": "true" } }, { qu: { "Null": "qxt", "Null": "10", "Null": "true" } }, { qu: { "Null": "qxu", "Null": "10", "Null": "true" } }, { qu: { "Null": "qxw", "Null": "10", "Null": "true" } }, { qu: { "Null": "sdc", "Null": "10", "Null": "true" } }, { qu: { "Null": "sdn", "Null": "10", "Null": "true" } }, { qu: { "Null": "sro", "Null": "10", "Null": "true" } }, { qu: { "Null": "aae", "Null": "10", "Null": "true" } }, { qu: { "Null": "aat", "Null": "10", "Null": "true" } }, { qu: { "Null": "aln", "Null": "10", "Null": "true" } }, { qu: { "Null": "aii", "Null": "10", "Null": "true" } }, { qu: { "Null": "uzs", "Null": "10", "Null": "true" } }, { qu: { "Null": false, "Null": false, "Null": false } }, { qu: { "Null": "Text", "Null": "uri", "Null": "type" } }, { qu: { "Null": 240234426502934600000000000000000000000000000000000000000000000000000000000000000000, "Null": 15180935386761545000000000000000000000000000000000000000000000000000000000000000000, "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012117088648846956 } }, { qu: { "Null": "10", "Null": "true", "Null": "czh" } }, { qu: { "Null": "Array", "Null": "isArray", "Null": "accessibilityRole" } }, { qu: { "Null": "Array", "Null": "isArray", "Null": "accessibilityRole" } }, { qu: { "Null": null, "Null": null, "Null": null } }, { qu: {} }, { qu: {} }, { qu: { "Null": "true", "Null": "mnp", "Null": "10" } }, { qu: { "Null": false, "Null": false, "Null": false } }, { qu: { "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001439206651662586, "Null": -844825919543238600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Null": 0.0000000000000000000000000008708348903805105 } }, { qu: { "Null": "yue", "Null": "10", "Null": "true" } }, { qu: { "Null": -0.00000000000000000000000000000000000000000000000000037585785671531525, "Null": 15180935372306010000000000000000000000000000000000000000000000000000000000000000000, "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012116958097189693 } }, { sc: { "Null": "Array", "Null": "isArray", "Null": "accessibilityRole" } }, { sc: { "Null": null, "Null": null, "Null": null } }, { sc: {} }, { sq: {} }, { sq: {} }, { sq: {} }, { syr: {} }, { uz: {} }, { yi: {} }, { zh: {} }, { zh: {} }, { zh: { "Null": null, "Null": null, "Null": null } }, { zh: { "Null": "Array", "Null": "isArray", "Null": "accessibilityRole" } }, { zh: { "Null": "Array", "Null": "isArray", "Null": "accessibilityRole" } }, { zh: { "Null": "Array", "Null": "isArray", "Null": "accessibilityRole" } }, { zh: { "Null": "Array", "Null": "isArray", "Null": "accessibilityRole" } }, { zh: {} }, { zh: { "Null": "10", "Null": "true", "Null": "te-Telu" } }, { zh: { "Null": "10", "Null": "true", "Null": "ti-Ethi" } }, { zh: {} }, { zh: { "Null": false, "Null": false, "Null": false } }, { zh: { "Null": -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000017258020524679123, "Null": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011362571751684234, "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011283095036224883 } }, { *: { 0: "uz-Latn", 9223372036854775807: "10" } }, { en-Latn: { "Null": "true", "Null": "yi-Hebr", "Null": "10" } }, { ru-Cyrl: { "Null": "true", "Null": "sr-Latn", "Null": "5" } }, { en-Latn: { "Null": 5, "Null": "za-Latn", "Null": "10" } }, { zh-Hans: { "Null": null, "Null": null, "Null": null } }, { ru-Cyrl: { "Null": null, "Null": null, "Null": null } }, { en-Latn: { "Null": null, "Null": null, "Null": null } }, { en-Latn: { "Null": null, "Null": null, "Null": null } }, { en-Latn: { "Null": null, "Null": null, "Null": null } }, { en-Latn: { "Null": null, "Null": null, "Null": null } }, { en-Latn: { "Null": null, "Null": null, "Null": null } }, { en-Latn: { "Null": false, "Null": false, "Null": false } }, { en-Latn: { "Null": false, "Null": false, "Null": false } }, { en-Latn: { "Null": false, "Null": false, "Null": false } }, { en-Latn: { "Null": false, "Null": false, "Null": false } }, { en-Latn: { "Null": false, "Null": false, "Null": false } }, { en-Latn: { "Null": null, "Null": null, "Null": null } }, { en-Latn: {} }, { en-Latn: {} }, { en-Latn: {} }, { en-Latn: { "Null": "sa", "Null": "y", "Null": "Array" } }, { ru-Cyrl: {} }, { en-Latn: { "Null": "5", "Null": "true", "Null": "ko-Jamo" } }, { ru-Cyrl: {} }, { en-Latn: { "Null": "50", "Null": "ar-*-$maghreb", "Null": "4" } }, { sr-Cyrl: {} }, { zh-Hans: { "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000027985470247276996, "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006651490072190158, "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002798237593959592 } }, { zh-Hans: { "Null": "en-*-*", "Null": "5", "Null": "es-*-$americas" } }, { zh-Hant: { "Null": "en-*-*", "Null": "5", "Null": "es-*-$americas" } }, { ar-Arab: { "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000027984079527595296, "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006651003239340677, "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002798560323426936 } }, { bn-Beng: { "Null": "es-*-*", "Null": "5", "Null": "pt-*-$americas" } }, { gu-Gujr: { "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002798317386155009, "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006651293334882006, "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002798237665788986 } }, { hi-Deva: { "Null": "pt-*-*", "Null": "5", "Null": "zh-Hant-$cnsar" } }, { kn-Knda: { "Null": "4", "Null": "zh-Hant-$!cnsar", "Null": "4" } }, { ml-Mlym: {} }, { mr-Deva: { "Null": "4", "Null": "AF", "Null": "AL" } }, { ta-Taml: { "Null": false, "Null": false, "Null": false } }, { te-Telu: { "Null": true, "Null": true, "Null": true } }, { zh-Hans: { "Null": true, "Null": true, "Null": true } }, { ja-Jpan: { "Null": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010574852929501608, "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007431593606845535, "Null": false } }, { ja-Jpan: { "Null": null, "Null": null, "Null": null } }, { ja-Jpan: { "Null": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000031363549147347726, "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007694327585622776, "Null": 5285553675270.698 } }, { ja-Jpan: { "Null": null, "Null": null, "Null": null } }, { ja-Jpan: { "Null": "<string:340421741>", "Null": "<string:481312798>", "Null": false } }, { ja-Hrkt: { "Null": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000031363549147347726, "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007694327585622776, "Null": 5285553675270.698 } }, { ja-Hrkt: { "Null": null, "Null": null, "Null": null } }, { ko-Kore: { "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001896496691850003, "Null": 23351168232896215000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002380678831256896 } }, { ko-Kore: { "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000023099217948736404, "Null": -0.00000000000000000000000000000000000000000000000000000000000008310847909896616, "Null": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001089740988600041 } }, { ko-Kore: { "Null": true, "Null": true, "Null": true } }, { ko-Hang: { "Null": true, "Null": true, "Null": true } }, { *-*: { 0: -31453230996452750000000000000000000000000000000000000000000000000000000000000000000, 9223372036854775807: 814994197854046500000000000000000000000000000000000000000000000000000000000000 } }, { ar-*-$maghreb: { 0: "EC", 9223372036854775807: "SV" } }, { ar-*-$!maghreb: { 0: "channelId", 9223372036854775807: "channelId" } }, { ar-*-*: {} }, { en-*-$enUS: { 0: "<string:1343718673>", 9223372036854775807: "<string:2790704403>" } }, { en-*-GB: { 0: -27, 9223372036854775807: 87 } }, { en-*-$!enUS: { 0: false, 9223372036854775807: false } }, { en-*-*: { 0: -177782180, 9223372036854775807: -716865770 } }, { es-*-$americas: { 0: "GE", 9223372036854775807: "GM" } }, { es-*-$!americas: { 0: false, 9223372036854775807: false } }, { es-*-*: { 0: null, 9223372036854775807: null } }, { pt-*-$americas: { 0: 0.0000000000000000000000000000000000000000000000000000000000000000000000000011953661947440349, 9223372036854775807: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006065816363840308 } }, { pt-*-$!americas: { 0: "p", 9223372036854775807: null } }, { pt-*-*: { 0: false, 9223372036854775807: false } }, { zh-Hant-$cnsar: { 0: null, 9223372036854775807: null } }, { zh-Hant-$!cnsar: {} }, { zh-Hant-*: { 0: "toRgbString", 9223372036854775807: "constants" } }, { *-*-*: { 0: "<string:1879714324>", 9223372036854775807: "<string:3110811943>" } }];
let closure_3 = { supplemental: { languageMatching: { written-new: items } } };
let closure_4 = { "001": [null, null, null, null, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", true, true, true, true, true, true, true, true, true, true, true, true, null, null, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000019170661694236671, 0.0000000000000000000000000000000000000000000000000000000000000000000000000002765334666140874, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000028248258323964427, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010654629398057122, 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004009309683986906, 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004014562968621963, 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010784478351462449, 0.000000000000000000000000000000000000000000000000000000000000000005418424865781868, 527098179472952200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010081298951310628, 6822669280726514000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000043280528294447073, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005887140295319239, 248416708635985000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 4190717338060130000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009007412356607324, 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001449620056553559, 1179518677657538300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 2517148078352685000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009577712331378688, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007451742879688661, 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004596961673224472, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000059906291048545, 154043596933005060000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 333135233826309500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000034243059211423595, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009134266743524149, 1077054189889207000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007244378385234063, 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007777551677472822, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004905859805610034, 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009541001807817257, 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000019512460350102094, 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020652890103283394, 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006045328501825313, 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030459100648993846, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002270997722952834, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000057324923935345824, 217930.19263466974, -0.0000000000000000000000000000000000000000000000000000000000000000000000018878891161230543, 219041.33742274373, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009956750216947366, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000328228806262142, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000032412677094713293, 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000239179749399724, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000022632002467213724, 238509234099737760000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000023399680195864664, 0.000000000000000000000000000000000000000000000000000000000000000005350290076642205, 388360336882925600000, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007792522972787889, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009225597175117636, 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005772851465530604, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009134266882928193, 19569637715672800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000019591206668837224, 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000028724818287339405, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003338656653711435, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000042542539233466803, 0.000000000000000000000000000000000000000000000000000000000000000552084917579652, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007622783273313976, 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008355183189942239, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001617382954448022, 341284392101159000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001923295489183803, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000014556359367750667, 1077064897250097200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002443724189287051, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000694748170483743, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007433861989871077, 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001387679408841364, 20940078230196347000000000000000000000000000000000000000000000000000000000000000000, 0.00000000000000000000000000000000000000000000000000006533182647764219, 0.000000000000000000000000000000000000000000000000000000000000000000000000000129722738864475, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001392435175605028, 0.000000000000000000000000000000000000000000000000000000000000000005453896776908573, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009225597505694732, 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007876500513841208, 600983128332021100000000000, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010572978290718482, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007792523766048429, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000014554247349140336, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001949355776900651, -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005215016270562941, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000013532468664207256, -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040440453335820694, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040277058826908155, 0.00000000000000000000000001553284452760235, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005973259920006794, -0.00000000000000000000000000000000000000000000000000000000000000000000000000002879302651114002, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000322630901190731, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000032733472220984907, 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004254254308764807, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000015928894855498825, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007434452231371674, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007622782435896031, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001662313082664938, 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001386783735329909, 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004065819649420511, 21154738153227408000000000000000000000000000000000000000000000000000000000000000000, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004139560114648697, 149964495698172100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000013424581382855177, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024773626577034584, 69128744308339140000000000000000000000000000000000000000000000000000000, 0.00000000000000000000000000000000000000000000000000000007189920271151844, -106736196631586840000000000, 35180196463846290000000000000000000, 0.00005075422268726287, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010061321703869177, -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000025667218576886564, -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006788033949755836, 17000125422403785000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, -1984476393445311500000000000000000000000000000000000000000000000000000000000000000000, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007602093664906542, 785533367549811000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 0.00000000000000000000000000000000000000000000000000000015859619628087526, 249996405640962600000000000000000000000000000000000000000000000000000000000000000000000000000000000, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000017543656190586314, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004881900524352987, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000457620192426172, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040610823319538237, 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006051631105121917, 0.000000021205933527949346, 41895967882097350000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005193628911921968, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011193152367617346, -109236725501817700000000000000000000000000000000000000000000000000000000000000000000000000000, 81604488492.26187, 0.00000000000000000000000000000000000000000000000000000000003982738339953968, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004277471493112969, 0.00000000000000000000000000000000000000000000000000000015819636278139132, 235597058904332800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 0.0000000000000000000000000000000000000000000000000000000000000000000000000002775465729745301, 441065313882119350000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040145629686173845, 5252548168129.314, 248365215169586900000000000000000000000000000000000000000000000000000000000000000000000000000000000, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000018184168328347235, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000015464490837381643, -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007084738598736028, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001664303457084103, 0.0000000000000000000000000000000000000000000000000000000000000831395820908387, 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002474139531309356, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001740186701354152, -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009804803430638172, -81023364134488090000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, -0.0000000000000000000000000000000009774825113072442, -8786051451680653000000000000000000000000000000000000000000000000000000000, -8979252510495269000000000000000000000000000000000000000000000000000000000, 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009892261467822875, 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001435826085083661, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005555169447042684, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005586615419586752, 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008473017991386997, 0.0000000000000000000000000000000000000000000000000000000022153934585317368, -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000017323565545498827, -3.704622835434528, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005124652853119913, -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000029185352336511907, 0.000000000000008097796654959478, -13035794428242604000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 0.00000000000000000000000000000000000000000000000000000000000000000015222364118709478, 8237140648955083000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 274284474752813200000000000000, 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006121537419645291, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000032603003251998586, 456990305566885900000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000007514064841260029, 2611281241964589600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008383202672287995, 430786797880940700000000000000000000000000000000000000000000000000000000000000, 102203498082660190000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000025358171220310677, 0.00000000000000000000000000000000000000000000000000005693528809929948, 334905024059883760000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000023222635263655572, -2887135137930409600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 305074985127489800000000000000000000000000000000000000000000000000000000000000000000000000000000000000, -426817896307334800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, -0.0000000000000000000000000000000000000000000000000000000000000000000000022155758776458242, 27654986728150120000000000000000000000000000000000000000000000000000000000000000000000000000000, -312676216802918240000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, -10371140245516913000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010061321703288977, -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000025520005130748894, -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010648480423413446, -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004902256123924075, -0.000000000000000000000004863757225705004, 0.00007367311931403077, -17178134476713823000000000000000000000000000000000000000000000000000000000000000000, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000026248203219004245, -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012574146957107197, -902875304752579000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000041713640772405394, 112989158165633350000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 2963222890665547800000000000000000000000000000000000000000000000, 0.0000000000000000000000000000000000000000000000000000000009627298240435678, -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000017323565545498827, 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000058005384509312615, 49054656210192250000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 1796682152027103200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 8237140652549991000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, -633811450748482600000000000000000000000000000000000000000000000000000000000000, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000018541268427642867, -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000045491519360175495, 49053187996826120000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 1796682152027103200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, -74049829058115020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005067073155500361, -70489296705645.3, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004662831514508017, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008663932725544835, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005574853954073625, 0.00000000000000000000000000000000000000000000000000000000000000000000000000013002088781497218, 0.00000000000000000000000000000000000000000000000000000000000000000009769167759780871, 0.0000000000000000000000000000000000000000000000000000001433232026039981, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004833111896105944, 0.000000000000000000000000015532844527605383, 6.269813885450833, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001662313082668818, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040374013234952694, 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000026206177885993106, 0.00000000000000000000000000000000000000000000000000000000000000000000000000003907399910074977, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011923640806718907, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003908613370443682, 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000013904227884696302, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006608353661738363, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006161732887400666, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000229160780717564, 0.00000000000000000000000000000000000000000000000000000000000000000000000000027754657297452986], "002": [], "003": [null, null, null, null, null, null, null, null, null, null, "019-status-grouping", "021", "029", "419", "AG", "AI", "AR", "AW", "BB", "BL", "BM", "BO", "BQ", "BR", "BS", "BV", "BZ", "CA", "CL", "CO", "CR", "CU", "CW", "DM", "DO", "EC", "FK", "GD", "GF", "GL", "GP", "GS", "GT", "GY", "HN"], "005": ["getPendingRelationshipIds", "socialBadge", "_animatedIndex", "platformUsername", "LANDING", "connectLabel", "attachmentFileName", "isBoolean", true, true, true, true, true, 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005735312259158377, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012448332377561094, -1376610837915317600000000000000000000000000000000000000000000000, -4218279252311144400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000], "009": [], "011": [true, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008285976869663963, -331717205232915800000000000000000000000000000000000000000000000000000000000000, -0.000000000000000000000000000000000000000000000004104735587986329, -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000013390859693130814, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002620617706318998, 341284416538804260000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001923295489183803, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006461908759382678, false, false, false, false, false, false, false, false, false], "013": ["CREATOR_MONETIZATION_RESTRICTIONS_UPDATE", "BILLING_REFERRAL_TRIAL_OFFER_UPDATE", "LAST_MESSAGES", "AUTHENTICATOR_UPDATE", "AUTHENTICATOR_CREATE", "AUTHENTICATOR_DELETE", "CONVERSATION_SUMMARY_UPDATE", "PREMIUM_MARKETING_PREVIEW", "USER_APPLICATION_UPDATE"], "014": ["<string:248582292>", "<string:512559035>", "<string:1792082460>", "<string:846210534>", "MF", "MQ", "MS", "PR", "SX", "TC", "TT", "VC", "VG", "VI", "getMediaPostEmbedChannelId", "SearchListCardContainer", "actionFilter", "bubbles", "parseVoiceChannelStatus", "_subscriptionKeyboardWillShow", "_handleToggleSelfDeafened", "GO_LIVE_HARDWARE", "f5cMAg"], "015": [false, false, false, false, false, false, false, false, false, false], "017": [true, true, true, true, true, true, true, true, true, true], "018": [false, false, false, false, false, false], "019": ["<string:2853420306>", "<string:1451976979>", "<string:1455753961>", "<string:168308542>", "<string:809074508>", "<string:4094356057>", "GU", "KI", "MH", "MP", "NR", "PW", "<string:3490368595>", "<string:1124782858>", "142", "143", "145", "<string:125055952>", "<string:295114626>", "<string:473046798>", "<string:136185809>", "<string:1075721359>", "<string:299898924>", "<string:297100589>", "<string:295703227>", "<string:277033024>", "<string:906499149>", "<string:101082427>", "<string:1798907760>", "<string:88218553>", "<string:466686503>", "<string:598557331>", "<string:296949227>", "<string:379278429>", "<string:319491013>", "<string:204411737>", "<string:131011556>", "<string:1687491626>", "<string:301730802>", "<string:556041509>", "<string:341054329>", "<string:214506672>", "<string:433019260>", "<string:37892929>", "<string:1698387200>", "<string:2233795906>", "<string:214504313>", "<string:37819969>", "<string:1947389952>", "<string:236033799>", "<string:738709791>", "<string:3138510872>", "<string:1295007762>", "<string:3508254996>", "<string:3826453275>", "<string:705154835>", "<string:1410069012>", "<string:1360645908>", "<string:3041135317>", "<string:1912602885>", "<string:167772736>", "<string:3103785496>", "<string:1493172799>", "<string:328075325>", "<string:667095373>"], "021": [false, false, false, false, false, false], "029": [true, true, true, "channelsExposedCount", "formatVoiceActivityTitle", "getMosaicMediaTypeForAttachment", "getInstanceAt", true, true, true, true, true, true, true, true, true, "143", "KG", "KZ", "TJ", "TM", "UZ", "145", "AE", "AM", "AZ", "BH", "CY", "GE"], "030": [], "034": ["<string:200414250>", "<string:433001556>", "<string:1141560657>", "150", "151", "154", "155", "<string:2382904665>", "<string:3272690963>", "<string:1544683559>"], "035": [false, false, false, false, false, false, false, "<string:289472516>", "<string:1358955571>", "<string:726744363>", "<string:607736124>", "CHANNEL_SYNC"], "039": [], "053": [], "054": [true, true, true, true, true, true], "057": ["<string:319041463>", "<string:438243843>", "<string:296826039>", "<string:495259996>", "<string:266080603>", "<string:305988156>", "<string:1458310646>", "<string:215757295>", "<string:1871909238>"], "061": [], [142]: [true, "LI", "LT", "LU", "LV", "MC", "MD", "ME", "MK", "MT", "NL", "NO", "PL", "PT", "RO", "RS", "RU", "SE", "SI", "SJ", "SK", "SM", "UA", "VA", "XK", "resource_id", "renderLinearGradient", "product_id", "setAlwaysOnTop", "CONFERENCE_MODE_EVENTS", "RECEIVER_FIRST_FRAME_DELIVERED", "Array", "conditionalListeners", "AO", "BF", "BI", "BJ", "BW", "CD", "CF", "CG", "CI", "CM", "CV", "DJ", "ER", "ET", "GA", "GH", "GM", "GN", "GQ", "GW", "IO", "KE", "KM", "LR"], [143]: [true, true, true, "key", "intl", "concat"], [145]: [true, true, 1373641666, 240451951, 280760726, 385182829, 289874914, 699469649, 196415309, -1403811196, -1677021174, 433471754, 886046721, 402591295, 666243593, 303499281, 246287900, 881597756, 186780651], [150]: [], [151]: [], [154]: [], [155]: ["protocol", "publicKey", "host", "projectId", "boolean", "string", "user", "level", "extra", "contexts"], [202]: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], [419]: [], EU: [0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008684697300115106, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004578443428941587, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010654629398057122, 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004009309683986906, "concat", "t", "PX_16", "ix", "message", "defineProperty", "x", "call", "t", "keys", "raw", "defineProperty", "rejectWithError", "Date", "PX_8", "r", "from", "x", "borderRadius", "LengthDelimited", "unsafe_rawColors", "Math", "Path", "keys"], EZ: [true, true, 348542700, 837750165, 292949212, 1817461813, 695234451, 367731629, 275389644, 1415385918, 1425412455, 1889867419, 318837384, 244191649, 306852658, 277875653, 319517605, 336990687, 324602376, 313199663], QO: [], UN: ["<string:1940197520>", "<string:299832075>", "<string:168301590>", "<string:204411737>", "<string:294523563>", "<string:366946162>", "<string:292882383>", "<string:375788139>", "<string:338299710>", "<string:303398732>", "<string:196220933>", "<string:306603157>", "<string:465704421>", "<string:1373639613>", "<string:129630575>", "<string:295046741>", "<string:200431994>", "<string:1819087036>", "<string:301736930>", "<string:556041509>", "<string:881922937>", "<string:341054245>", "<string:1657606921>", "<string:1393103175>", "<string:279514961>", "<string:890832619>", "<string:880544969>", "<string:1501301613>", "<string:544419897>", "<string:256711119>", "<string:2323909557>", "<string:70340162>", "<string:22519808>", "<string:2394116352>", "<string:19562562>", "<string:31018752>", "<string:868368640>", "<string:3864068097>", "<string:2039365931>", "<string:3259301892>", "<string:3204448563>", "<string:1191182796>", "<string:3523216501>", "<string:1459618300>", "<string:1157628332>", "persian", "gregorian", "islamic", "islamic-civil", "islamic-tbla", "<string:20169283>", "<string:33346048>", "<string:28071680>", "<string:868369408>", "<string:1967587329>", "<string:4241620996>", "<string:2891382785>", "<string:3259105281>", "<string:2382364979>", "<string:1157629049>", "gregorian", "coptic", "islamic", "islamic-civil", "islamic-tbla", "<string:20169285>", "<string:75491584>", "<string:74794752>", "<string:33346048>", "<string:28071680>", "<string:868368896>", "<string:1276903425>", "<string:3259105284>", "<string:234881331>", "<string:1140851814>", "gregorian", "islamic-umalqura", "islamic", "islamic-rgsa", "<string:76858690>", "<string:20169216>", "<string:3033022976>", "<string:3143565313>", "<string:1598160897>", "<string:3355443643>", "<string:1090519476>", "h23", "<string:28624963>", "<string:37479168>", "<string:29056768>", "<string:4123279616>", "<string:2655059969>", "<string:1090519584>", "Asia/Kabul", "<string:39478337>", "<string:1516323072>", "<string:2168520706>", "<string:1090519315>", "Asia/Yerevan", "<string:19223361>", "<string:1508393216>", "<string:306905090>", "<string:654312053>", "<string:2667577647>", "<string:1845494123>", "<string:1879048795>", "<string:1006633563>", "<string:1912603166>", "<string:1979712091>", "<string:2030043739>", "<string:1157628507>", "<string:3925868811>", "<string:1275068702>", "America/Buenos_Aires", "America/Cordoba", "America/Catamarca", "America/Argentina/La_Rioja", "America/Jujuy", "America/Argentina/San_Luis", "America/Mendoza", "America/Argentina/Rio_Gallegos", "America/Argentina/Salta", "America/Argentina/Tucuman", "America/Argentina/San_Juan", "America/Argentina/Ushuaia", "<string:36125761>", "<string:175063296>", "<string:978124802>", "<string:285213083>", "<string:4043309661>", "<string:536871441>", "<string:134218299>", "<string:4026532282>", "<string:4026532395>", "<string:234881579>", "<string:1996489228>", "<string:3657433408>", "<string:2936013320>", "<string:1912603030>", "<string:184549692>", "<string:1090519596>", "America/Aruba", "<string:19088705>", "<string:284246272>", "<string:390135809>", "<string:1090519370>", "Asia/Dhaka", "<string:27032897>", "<string:1627013376>", "<string:37814273>", "<string:1090519346>", "Asia/Bahrain", "<string:19298881>", "<string:1509441792>", "<string:625016834>", "<string:1090519465>", "Asia/Brunei", "<string:35537729>", "<string:1628782848>", "<string:281018369>", "America/Araguaina", "America/Belem", "America/Boa_Vista", "America/Cuiaba", "America/Campo_Grande", "America/Eirunepe", "America/Noronha", "America/Fortaleza", "America/Manaus", "America/Maceio", "America/Porto_Velho", "America/Rio_Branco", "America/Recife", "America/Sao_Paulo", "America/Bahia", "America/Santarem", "<string:39515969>", "<string:856113408>", "<string:3544252417>", "<string:1090519641>", "Europe/Minsk", "<string:39486529>", "<string:2770190336>", "<string:2768241163>", "<string:117441114>", "<string:2818572546>", "<string:2852127322>", "<string:2902458970>", "<string:788529754>", "<string:1006633429>", "<string:4043309545>", "<string:637534810>", "<string:637534811>", "<string:1006633563>"] };
let closure_5 = /-u(?:-[0-9a-z]{2,8})+/gi;
let obj = arg1(dependencyMap[3]);
obj = {
  serializer(arg0) {
    return "" + arg0[0] + "|" + arg0[1];
  }
};
let closure_7 = obj.memoize(function findMatchingDistanceImpl(arg0, arg1) {
  const locale = new Intl.Locale(arg0);
  const maximizeResult = locale.maximize();
  const locale1 = new Intl.Locale(arg1);
  const maximizeResult1 = locale1.maximize();
  let obj = { language: maximizeResult.language, script: tmp3, region: tmp4 };
  obj = { language: maximizeResult1.language, script: tmp5, region: tmp6 };
  const tmp7 = processData();
  let num = 0;
  if (obj.language !== obj.language) {
    const obj1 = { "Null": "webpBlob", "Null": "tea", "Null": "STARTED_ONBOARDING", language: maximizeResult.language };
    const obj2 = { "Null": "webpBlob", "Null": "tea", "Null": "STARTED_ONBOARDING", language: maximizeResult1.language };
    num = findMatchingDistanceForLSR(obj1, obj2, tmp7);
  }
  let sum = num;
  if (obj.script !== obj.script) {
    const obj3 = { language: maximizeResult.language, script: obj.script, region: "" };
    const obj4 = { language: maximizeResult1.language, script: obj.script, region: "" };
    sum = num + findMatchingDistanceForLSR(obj3, obj4, tmp7);
  }
  let sum1 = sum;
  if (obj.region !== obj.region) {
    sum1 = sum + findMatchingDistanceForLSR(obj, obj, tmp7);
  }
  return sum1;
}, obj);
const weakMap = new WeakMap();
const weakMap1 = new WeakMap();

export const LookupSupportedLocales = function LookupSupportedLocales(arg0, arg1) {
  const items = [];
  const iter = arg1[Symbol.iterator]();
  while (iter !== undefined) {
    let tmp = BestAvailableLocale;
    let tmp2 = arg0;
    let tmp3 = closure_5;
    let tmp4 = BestAvailableLocale(arg0, str.replace(closure_5, ""));
    if (tmp4) {
      let tmp6 = items;
      let tmp7 = tmp4;
      let arr = items.push(tmp5);
    }
    // continue
  }
  return items;
};
export { ResolveLocale };
export const match = function match(items, arg1, arg2, algorithm) {
  let closure_0 = arg2;
  const canonicalLocales = Intl.getCanonicalLocales(items);
  const obj = {};
  let str;
  if (null != algorithm) {
    str = algorithm.algorithm;
  }
  if (!str) {
    str = "best fit";
  }
  obj.localeMatcher = str;
  return ResolveLocale(arg1, canonicalLocales, obj, [], {}, () => arg2).locale;
};

// Module ID: 13319
// Function ID: 102191
// Name: invariant
// Dependencies: [77, 57, 65, 13320]
// Exports: LookupSupportedLocales, match

// Module 13319 (invariant)
import _defineProperty from "_defineProperty";
import _slicedToArray from "_slicedToArray";
import _toConsumableArray from "_toConsumableArray";
import monadic from "monadic";

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
    let first = closure_3.supplemental.languageMatching["written-new"][0];
    let parts;
    if (null != first) {
      const paradigmLocales = first.paradigmLocales;
      if (null != paradigmLocales) {
        parts = paradigmLocales._locales.split(" ");
        const str = paradigmLocales._locales;
      }
    }
    const prop = closure_3.supplemental.languageMatching["written-new"];
    let substr = prop.slice(1, 5);
    obj = {};
    const prop1 = closure_3.supplemental.languageMatching["written-new"];
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
  let tmp = callback(str.split("-"), 3);
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
        let tmp = outer1_4[arg0];
        if (!tmp) {
          const items = [arg0];
          tmp = items;
        }
        return tmp;
      });
      const reduced = mapped.reduce((arg0, arg1) => {
        const items = [];
        return items.concat(outer1_2(arg0), outer1_2(arg1));
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
    let tmp30 = isMatched;
    let tmp31 = arg0;
    let tmp32 = arg2;
    let tmp33 = isMatched(arg0, item10011.desired, tmp.matchVariables);
    let tmp7 = tmp33;
    if (tmp33) {
      let tmp3 = isMatched;
      let tmp4 = arg1;
      let tmp5 = item10011;
      let tmp6 = arg2;
      tmp7 = isMatched(arg1, tmp29.supported, tmp.matchVariables);
    }
    let tmp8 = tmp7;
    let tmp9 = item10011;
    let oneway = tmp29.oneway;
    let tmp10 = oneway;
    if (!oneway) {
      tmp10 = tmp8;
    }
    if (!tmp10) {
      let tmp11 = isMatched;
      let tmp12 = arg0;
      let tmp13 = item10011;
      let tmp14 = arg2;
      let tmp15 = isMatched(arg0, tmp29.supported, tmp.matchVariables);
      let tmp16 = tmp15;
      if (tmp15) {
        let tmp17 = isMatched;
        let tmp18 = arg1;
        let tmp19 = item10011;
        let tmp20 = arg2;
        tmp16 = isMatched(arg1, tmp29.desired, tmp.matchVariables);
      }
      tmp8 = tmp16;
    }
    let tmp21 = tmp8;
    if (tmp8) {
      let num = 10;
      let result = 10 * item10011.distance;
      let tmp23 = arg2;
      let paradigmLocales = tmp.paradigmLocales;
      let tmp24 = serializeLSR;
      let num2 = -1;
      let paradigmLocales1 = tmp.paradigmLocales;
      let tmp25 = paradigmLocales.indexOf(serializeLSR(arg0)) > -1;
      if (tmp25 !== paradigmLocales1.indexOf(serializeLSR(arg1)) > -1) {
        let tmp27 = result;
        let num3 = 1;
        let diff = result - 1;
      } else {
        diff = result;
      }
      obj.return();
      return diff;
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
  let items = [];
  const reduced = arr.reduce((arg0, str) => {
    const replaced = str.replace(outer1_5, "");
    items.push(replaced);
    arg0[replaced] = str;
    return arg0;
  }, {});
  let tmp2 = (function findBestMatch(items, arr2) {
    let _defineProperty = arr2;
    let num = 838;
    if (arguments.length > 2) {
      num = 838;
      if (undefined !== arguments[2]) {
        num = arguments[2];
      }
    }
    let Infinity = Infinity;
    const obj = { matchedDesiredLocale: "", distances: {} };
    const value = outer1_8.get(arr2);
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
      const result = outer1_8.set(arr2, mapped);
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
          let tmp14 = Infinity;
          if (result1 < Infinity) {
            Infinity = result1;
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
          let tmp69 = outer1_15;
          let tmp70 = str;
          let arr = outer1_15(tmp27);
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
                break;
              }
              let tmp52 = obj;
              let tmp53 = tmp20;
              let tmp54 = tmp30;
              let tmp55 = tmp47;
              tmp.distances[tmp20][tmp31] = tmp47;
              let tmp56 = Infinity;
              if (tmp47 < Infinity) {
                let tmp57 = tmp47;
                Infinity = tmp47;
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
      matchedSupportedLocale = 0 === Infinity;
    }
    if (!matchedSupportedLocale) {
      Infinity = Infinity;
      let item = items.forEach((arg0, arg1) => {
        let _defineProperty = arg0;
        let _slicedToArray = arg1;
        if (!obj.distances[arg0]) {
          obj.distances[arg0] = {};
        }
        const item = mapped.forEach((arg0, arg1) => {
          const sum = outer3_7(table, arg0) + 40 * _slicedToArray;
          outer1_2.distances[table][table[arg1]] = sum;
          if (sum < _slicedToArray) {
            _slicedToArray = sum;
            outer1_2.matchedDesiredLocale = table;
            outer1_2.matchedSupportedLocale = tmp;
          }
        });
      });
      if (Infinity >= num) {
        tmp.matchedDesiredLocale = undefined;
        tmp.matchedSupportedLocale = undefined;
      }
    }
    return obj;
  })(items, arr2);
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
      continue;
    }
  }
  return substr;
}
class ResolveLocale {
  constructor(arg0, arg1, arg2, arg3, arg4, arg5) {
    _defineProperty = importDefault;
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
        tmp11 = BestAvailableLocale;
        tmp12 = arr;
        tmp10 = replaced;
        tmp13 = BestAvailableLocale(tmp6, replaced);
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
      _toConsumableArray = module[locale];
      obj1 = {};
      str3 = "en";
      obj1.locale = "en";
      obj1.dataLocale = locale;
      closure_3 = obj1;
      if (tmp3.extension) {
        extension = (function UnicodeExtensionComponents(extension) {
          outer1_10(extension === extension.toLowerCase(), "Expected extension to be lowercase");
          outer1_10("-u-" === extension.slice(0, 3), "Expected extension to be a Unicode locale extension");
          const attributes = [];
          const keywords = [];
          let num = 3;
          if (3 < extension.length) {
            while (true) {
              let index = extension.indexOf("-", num);
              let tmp5 = num;
              let tmp6 = -1 === index ? length - num : index - num;
              let substr = extension.slice(num, num + tmp6);
              let tmp8 = outer1_10;
              let tmp9 = outer1_10(tmp6 >= 2, "Expected a subtag to have at least 2 characters");
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
                  iter = tmp13;
                  tmp3 = tmp14;
                  if (num >= length) {
                    break;
                  }
                }
              }
              if (2 === tmp6) {
                let obj = { key: substr, value: "" };
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
                  let tmp11 = outer1_10;
                  let tmp12 = outer1_10(undefined !== iter, "Expected keyword to be defined");
                  iter.value = `${iter.value}-${tmp7}`;
                  tmp13 = iter;
                  tmp14 = iter;
                }
              }
            }
          }
          return { attributes, keywords };
        })(tmp3.extension).keywords;
      } else {
        extension = [];
      }
      extension = [];
      _loop = function _loop(key) {
        const localeMatcher = key;
        let items;
        if (null != table) {
          items = table[key];
        }
        if (null == items) {
          items = [];
        }
        const isArray = Array.isArray(items);
        outer1_10(isArray, "keyLocaleData for " + key + " must be an array");
        const first = items[0];
        let tmp6 = undefined === first;
        if (!tmp6) {
          tmp6 = "string" === typeof first;
        }
        outer1_10(tmp6, "value must be a string or undefined");
        const iter = _slicedToArray.find((key) => key.key === _defineProperty);
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
        outer1_10(tmp10, "optionsValue must be a string or undefined");
        let tmp12 = "string" === typeof str5;
        let str7 = str5;
        if (tmp12) {
          const formatted = key.toLowerCase();
          const formatted1 = str5.toLowerCase();
          outer1_10(undefined !== formatted, "ukey must be defined");
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
          arr = arr.push(tmp8);
        }
        obj[key] = str2;
      };
      tmp25 = importAll;
      tmp3 = importAll[Symbol.iterator]();
    }
    return;
  }
}
let items = [{ paradigmLocales: { _locales: "en en_GB es es_419 pt_BR pt_PT" } }, { $enUS: { _value: "AS+CA+GU+MH+MP+PH+PR+UM+US+VI" } }, { $cnsar: { _value: "HK+MO" } }, { $americas: { _value: "019" } }, { $maghreb: { _value: "MA+DZ+TN+LY+MR+EH" } }, { no: { _desired: "nb", _distance: "1" } }, { bs: { _desired: "hr", _distance: "4" } }, { bs: { _desired: "sh", _distance: "4" } }, { hr: { _desired: "sh", _distance: "4" } }, { sr: { _desired: "sh", _distance: "4" } }, { aa: { _desired: "ssy", _distance: "4" } }, { de: { _desired: "gsw", _distance: "4", _oneway: "true" } }, { de: { _desired: "lb", _distance: "4", _oneway: "true" } }, { no: { _desired: "da", _distance: "8" } }, { nb: { _desired: "da", _distance: "8" } }, { ru: { _desired: "ab", _distance: "30", _oneway: "true" } }, { en: { _desired: "ach", _distance: "30", _oneway: "true" } }, { nl: { _desired: "af", _distance: "20", _oneway: "true" } }, { en: { _desired: "ak", _distance: "30", _oneway: "true" } }, { en: { _desired: "am", _distance: "30", _oneway: "true" } }, { es: { _desired: "ay", _distance: "20", _oneway: "true" } }, { ru: { _desired: "az", _distance: "30", _oneway: "true" } }, { ur: { _desired: "bal", _distance: "20", _oneway: "true" } }, { ru: { _desired: "be", _distance: "20", _oneway: "true" } }, { en: { _desired: "bem", _distance: "30", _oneway: "true" } }, { hi: { _desired: "bh", _distance: "30", _oneway: "true" } }, { en: { _desired: "bn", _distance: "30", _oneway: "true" } }, { zh: { _desired: "bo", _distance: "20", _oneway: "true" } }, { fr: { _desired: "br", _distance: "20", _oneway: "true" } }, { es: { _desired: "ca", _distance: "20", _oneway: "true" } }, { fil: { _desired: "ceb", _distance: "30", _oneway: "true" } }, { en: { _desired: "chr", _distance: "20", _oneway: "true" } }, { ar: { _desired: "ckb", _distance: "30", _oneway: "true" } }, { fr: { _desired: "co", _distance: "20", _oneway: "true" } }, { fr: { _desired: "crs", _distance: "20", _oneway: "true" } }, { sk: { _desired: "cs", _distance: "20" } }, { en: { _desired: "cy", _distance: "20", _oneway: "true" } }, { en: { _desired: "ee", _distance: "30", _oneway: "true" } }, { en: { _desired: "eo", _distance: "30", _oneway: "true" } }, { es: { _desired: "eu", _distance: "20", _oneway: "true" } }, { da: { _desired: "fo", _distance: "20", _oneway: "true" } }, { nl: { _desired: "fy", _distance: "20", _oneway: "true" } }, { en: { _desired: "ga", _distance: "20", _oneway: "true" } }, { en: { _desired: "gaa", _distance: "30", _oneway: "true" } }, { en: { _desired: "gd", _distance: "20", _oneway: "true" } }, { es: { _desired: "gl", _distance: "20", _oneway: "true" } }, { es: { _desired: "gn", _distance: "20", _oneway: "true" } }, { hi: { _desired: "gu", _distance: "30", _oneway: "true" } }, { en: { _desired: "ha", _distance: "30", _oneway: "true" } }, { en: { _desired: "haw", _distance: "20", _oneway: "true" } }, { fr: { _desired: "ht", _distance: "20", _oneway: "true" } }, { ru: { _desired: "hy", _distance: "30", _oneway: "true" } }, { en: { _desired: "ia", _distance: "30", _oneway: "true" } }, { en: { _desired: "ig", _distance: "30", _oneway: "true" } }, { en: { _desired: "is", _distance: "20", _oneway: "true" } }, { id: { _desired: "jv", _distance: "20", _oneway: "true" } }, { en: { _desired: "ka", _distance: "30", _oneway: "true" } }, { fr: { _desired: "kg", _distance: "30", _oneway: "true" } }, { ru: { _desired: "kk", _distance: "30", _oneway: "true" } }, { en: { _desired: "km", _distance: "30", _oneway: "true" } }, { en: { _desired: "kn", _distance: "30", _oneway: "true" } }, { en: { _desired: "kri", _distance: "30", _oneway: "true" } }, { tr: { _desired: "ku", _distance: "30", _oneway: "true" } }, { ru: { _desired: "ky", _distance: "30", _oneway: "true" } }, { it: { _desired: "la", _distance: "20", _oneway: "true" } }, { en: { _desired: "lg", _distance: "30", _oneway: "true" } }, { fr: { _desired: "ln", _distance: "30", _oneway: "true" } }, { en: { _desired: "lo", _distance: "30", _oneway: "true" } }, { en: { _desired: "loz", _distance: "30", _oneway: "true" } }, { fr: { _desired: "lua", _distance: "30", _oneway: "true" } }, { hi: { _desired: "mai", _distance: "20", _oneway: "true" } }, { en: { _desired: "mfe", _distance: "30", _oneway: "true" } }, { fr: { _desired: "mg", _distance: "30", _oneway: "true" } }, { en: { _desired: "mi", _distance: "20", _oneway: "true" } }, { en: { _desired: "ml", _distance: "30", _oneway: "true" } }, { ru: { _desired: "mn", _distance: "30", _oneway: "true" } }, { hi: { _desired: "mr", _distance: "30", _oneway: "true" } }, { id: { _desired: "ms", _distance: "30", _oneway: "true" } }, { en: { _desired: "mt", _distance: "30", _oneway: "true" } }, { en: { _desired: "my", _distance: "30", _oneway: "true" } }, { en: { _desired: "ne", _distance: "30", _oneway: "true" } }, { nb: { _desired: "nn", _distance: "20" } }, { no: { _desired: "nn", _distance: "20" } }, { en: { _desired: "nso", _distance: "30", _oneway: "true" } }, { en: { _desired: "ny", _distance: "30", _oneway: "true" } }, { en: { _desired: "nyn", _distance: "30", _oneway: "true" } }, { fr: { _desired: "oc", _distance: "20", _oneway: "true" } }, { en: { _desired: "om", _distance: "30", _oneway: "true" } }, { en: { _desired: "or", _distance: "30", _oneway: "true" } }, { en: { _desired: "pa", _distance: "30", _oneway: "true" } }, { en: { _desired: "pcm", _distance: "20", _oneway: "true" } }, { en: { _desired: "ps", _distance: "30", _oneway: "true" } }, { es: { _desired: "qu", _distance: "30", _oneway: "true" } }, { de: { _desired: "rm", _distance: "20", _oneway: "true" } }, { en: { _desired: "rn", _distance: "30", _oneway: "true" } }, { fr: { _desired: "rw", _distance: "30", _oneway: "true" } }, { hi: { _desired: "sa", _distance: "30", _oneway: "true" } }, { en: { _desired: "sd", _distance: "30", _oneway: "true" } }, { en: { _desired: "si", _distance: "30", _oneway: "true" } }, { en: { _desired: "sn", _distance: "30", _oneway: "true" } }, { en: { _desired: "so", _distance: "30", _oneway: "true" } }, { en: { _desired: "sq", _distance: "30", _oneway: "true" } }, { en: { _desired: "st", _distance: "30", _oneway: "true" } }, { id: { _desired: "su", _distance: "20", _oneway: "true" } }, { en: { _desired: "sw", _distance: "30", _oneway: "true" } }, { en: { _desired: "ta", _distance: "30", _oneway: "true" } }, { en: { _desired: "te", _distance: "30", _oneway: "true" } }, { ru: { _desired: "tg", _distance: "30", _oneway: "true" } }, { en: { _desired: "ti", _distance: "30", _oneway: "true" } }, { ru: { _desired: "tk", _distance: "30", _oneway: "true" } }, { en: { _desired: "tlh", _distance: "30", _oneway: "true" } }, { en: { _desired: "tn", _distance: "30", _oneway: "true" } }, { en: { _desired: "to", _distance: "30", _oneway: "true" } }, { ru: { _desired: "tt", _distance: "30", _oneway: "true" } }, { en: { _desired: "tum", _distance: "30", _oneway: "true" } }, { zh: { _desired: "ug", _distance: "20", _oneway: "true" } }, { ru: { _desired: "uk", _distance: "20", _oneway: "true" } }, { en: { _desired: "ur", _distance: "30", _oneway: "true" } }, { ru: { _desired: "uz", _distance: "30", _oneway: "true" } }, { fr: { _desired: "wo", _distance: "30", _oneway: "true" } }, { en: { _desired: "xh", _distance: "30", _oneway: "true" } }, { en: { _desired: "yi", _distance: "30", _oneway: "true" } }, { en: { _desired: "yo", _distance: "30", _oneway: "true" } }, { zh: { _desired: "za", _distance: "20", _oneway: "true" } }, { en: { _desired: "zu", _distance: "30", _oneway: "true" } }, { ar: { _desired: "aao", _distance: "10", _oneway: "true" } }, { ar: { _desired: "abh", _distance: "10", _oneway: "true" } }, { ar: { _desired: "abv", _distance: "10", _oneway: "true" } }, { ar: { _desired: "acm", _distance: "10", _oneway: "true" } }, { ar: { _desired: "acq", _distance: "10", _oneway: "true" } }, { ar: { _desired: "acw", _distance: "10", _oneway: "true" } }, { ar: { _desired: "acx", _distance: "10", _oneway: "true" } }, { ar: { _desired: "acy", _distance: "10", _oneway: "true" } }, { ar: { _desired: "adf", _distance: "10", _oneway: "true" } }, { ar: { _desired: "aeb", _distance: "10", _oneway: "true" } }, { ar: { _desired: "aec", _distance: "10", _oneway: "true" } }, { ar: { _desired: "afb", _distance: "10", _oneway: "true" } }, { ar: { _desired: "ajp", _distance: "10", _oneway: "true" } }, { ar: { _desired: "apc", _distance: "10", _oneway: "true" } }, { ar: { _desired: "apd", _distance: "10", _oneway: "true" } }, { ar: { _desired: "arq", _distance: "10", _oneway: "true" } }, { ar: { _desired: "ars", _distance: "10", _oneway: "true" } }, { ar: { _desired: "ary", _distance: "10", _oneway: "true" } }, { ar: { _desired: "arz", _distance: "10", _oneway: "true" } }, { ar: { _desired: "auz", _distance: "10", _oneway: "true" } }, { ar: { _desired: "avl", _distance: "10", _oneway: "true" } }, { ar: { _desired: "ayh", _distance: "10", _oneway: "true" } }, { ar: { _desired: "ayl", _distance: "10", _oneway: "true" } }, { ar: { _desired: "ayn", _distance: "10", _oneway: "true" } }, { ar: { _desired: "ayp", _distance: "10", _oneway: "true" } }, { ar: { _desired: "bbz", _distance: "10", _oneway: "true" } }, { ar: { _desired: "pga", _distance: "10", _oneway: "true" } }, { ar: { _desired: "shu", _distance: "10", _oneway: "true" } }, { ar: { _desired: "ssh", _distance: "10", _oneway: "true" } }, { az: { _desired: "azb", _distance: "10", _oneway: "true" } }, { et: { _desired: "vro", _distance: "10", _oneway: "true" } }, { ff: { _desired: "ffm", _distance: "10", _oneway: "true" } }, { ff: { _desired: "fub", _distance: "10", _oneway: "true" } }, { ff: { _desired: "fue", _distance: "10", _oneway: "true" } }, { ff: { _desired: "fuf", _distance: "10", _oneway: "true" } }, { ff: { _desired: "fuh", _distance: "10", _oneway: "true" } }, { ff: { _desired: "fui", _distance: "10", _oneway: "true" } }, { ff: { _desired: "fuq", _distance: "10", _oneway: "true" } }, { ff: { _desired: "fuv", _distance: "10", _oneway: "true" } }, { gn: { _desired: "gnw", _distance: "10", _oneway: "true" } }, { gn: { _desired: "gui", _distance: "10", _oneway: "true" } }, { gn: { _desired: "gun", _distance: "10", _oneway: "true" } }, { gn: { _desired: "nhd", _distance: "10", _oneway: "true" } }, { iu: { _desired: "ikt", _distance: "10", _oneway: "true" } }, { kln: { _desired: "enb", _distance: "10", _oneway: "true" } }, { kln: { _desired: "eyo", _distance: "10", _oneway: "true" } }, { kln: { _desired: "niq", _distance: "10", _oneway: "true" } }, { kln: { _desired: "oki", _distance: "10", _oneway: "true" } }, { kln: { _desired: "pko", _distance: "10", _oneway: "true" } }, { kln: { _desired: "sgc", _distance: "10", _oneway: "true" } }, { kln: { _desired: "tec", _distance: "10", _oneway: "true" } }, { kln: { _desired: "tuy", _distance: "10", _oneway: "true" } }, { kok: { _desired: "gom", _distance: "10", _oneway: "true" } }, { kpe: { _desired: "gkp", _distance: "10", _oneway: "true" } }, { luy: { _desired: "ida", _distance: "10", _oneway: "true" } }, { luy: { _desired: "lkb", _distance: "10", _oneway: "true" } }, { luy: { _desired: "lko", _distance: "10", _oneway: "true" } }, { luy: { _desired: "lks", _distance: "10", _oneway: "true" } }, { luy: { _desired: "lri", _distance: "10", _oneway: "true" } }, { luy: { _desired: "lrm", _distance: "10", _oneway: "true" } }, { luy: { _desired: "lsm", _distance: "10", _oneway: "true" } }, { luy: { _desired: "lto", _distance: "10", _oneway: "true" } }, { luy: { _desired: "lts", _distance: "10", _oneway: "true" } }, { luy: { _desired: "lwg", _distance: "10", _oneway: "true" } }, { luy: { _desired: "nle", _distance: "10", _oneway: "true" } }, { luy: { _desired: "nyd", _distance: "10", _oneway: "true" } }, { luy: { _desired: "rag", _distance: "10", _oneway: "true" } }, { lv: { _desired: "ltg", _distance: "10", _oneway: "true" } }, { mg: { _desired: "bhr", _distance: "10", _oneway: "true" } }, { mg: { _desired: "bjq", _distance: "10", _oneway: "true" } }, { mg: { _desired: "bmm", _distance: "10", _oneway: "true" } }, { mg: { _desired: "bzc", _distance: "10", _oneway: "true" } }, { mg: { _desired: "msh", _distance: "10", _oneway: "true" } }, { mg: { _desired: "skg", _distance: "10", _oneway: "true" } }, { mg: { _desired: "tdx", _distance: "10", _oneway: "true" } }, { mg: { _desired: "tkg", _distance: "10", _oneway: "true" } }, { mg: { _desired: "txy", _distance: "10", _oneway: "true" } }, { mg: { _desired: "xmv", _distance: "10", _oneway: "true" } }, { mg: { _desired: "xmw", _distance: "10", _oneway: "true" } }, { mn: { _desired: "mvf", _distance: "10", _oneway: "true" } }, { ms: { _desired: "bjn", _distance: "10", _oneway: "true" } }, { ms: { _desired: "btj", _distance: "10", _oneway: "true" } }, { ms: { _desired: "bve", _distance: "10", _oneway: "true" } }, { ms: { _desired: "bvu", _distance: "10", _oneway: "true" } }, { ms: { _desired: "coa", _distance: "10", _oneway: "true" } }, { ms: { _desired: "dup", _distance: "10", _oneway: "true" } }, { ms: { _desired: "hji", _distance: "10", _oneway: "true" } }, { ms: { _desired: "id", _distance: "10", _oneway: "true" } }, { ms: { _desired: "jak", _distance: "10", _oneway: "true" } }, { ms: { _desired: "jax", _distance: "10", _oneway: "true" } }, { ms: { _desired: "kvb", _distance: "10", _oneway: "true" } }, { ms: { _desired: "kvr", _distance: "10", _oneway: "true" } }, { ms: { _desired: "kxd", _distance: "10", _oneway: "true" } }, { ms: { _desired: "lce", _distance: "10", _oneway: "true" } }, { ms: { _desired: "lcf", _distance: "10", _oneway: "true" } }, { ms: { _desired: "liw", _distance: "10", _oneway: "true" } }, { ms: { _desired: "max", _distance: "10", _oneway: "true" } }, { ms: { _desired: "meo", _distance: "10", _oneway: "true" } }, { ms: { _desired: "mfa", _distance: "10", _oneway: "true" } }, { ms: { _desired: "mfb", _distance: "10", _oneway: "true" } }, { ms: { _desired: "min", _distance: "10", _oneway: "true" } }, { ms: { _desired: "mqg", _distance: "10", _oneway: "true" } }, { ms: { _desired: "msi", _distance: "10", _oneway: "true" } }, { ms: { _desired: "mui", _distance: "10", _oneway: "true" } }, { ms: { _desired: "orn", _distance: "10", _oneway: "true" } }, { ms: { _desired: "ors", _distance: "10", _oneway: "true" } }, { ms: { _desired: "pel", _distance: "10", _oneway: "true" } }, { ms: { _desired: "pse", _distance: "10", _oneway: "true" } }, { ms: { _desired: "tmw", _distance: "10", _oneway: "true" } }, { ms: { _desired: "urk", _distance: "10", _oneway: "true" } }, { ms: { _desired: "vkk", _distance: "10", _oneway: "true" } }, { ms: { _desired: "vkt", _distance: "10", _oneway: "true" } }, { ms: { _desired: "xmm", _distance: "10", _oneway: "true" } }, { ms: { _desired: "zlm", _distance: "10", _oneway: "true" } }, { ms: { _desired: "zmi", _distance: "10", _oneway: "true" } }, { ne: { _desired: "dty", _distance: "10", _oneway: "true" } }, { om: { _desired: "gax", _distance: "10", _oneway: "true" } }, { om: { _desired: "hae", _distance: "10", _oneway: "true" } }, { om: { _desired: "orc", _distance: "10", _oneway: "true" } }, { or: { _desired: "spv", _distance: "10", _oneway: "true" } }, { ps: { _desired: "pbt", _distance: "10", _oneway: "true" } }, { ps: { _desired: "pst", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qub", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qud", _distance: "10", _oneway: "true" } }, { qu: { _desired: "quf", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qug", _distance: "10", _oneway: "true" } }, { qu: { _desired: "quh", _distance: "10", _oneway: "true" } }, { qu: { _desired: "quk", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qul", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qup", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qur", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qus", _distance: "10", _oneway: "true" } }, { qu: { _desired: "quw", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qux", _distance: "10", _oneway: "true" } }, { qu: { _desired: "quy", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qva", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qvc", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qve", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qvh", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qvi", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qvj", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qvl", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qvm", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qvn", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qvo", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qvp", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qvs", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qvw", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qvz", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qwa", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qwc", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qwh", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qws", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qxa", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qxc", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qxh", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qxl", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qxn", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qxo", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qxp", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qxr", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qxt", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qxu", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qxw", _distance: "10", _oneway: "true" } }, { sc: { _desired: "sdc", _distance: "10", _oneway: "true" } }, { sc: { _desired: "sdn", _distance: "10", _oneway: "true" } }, { sc: { _desired: "sro", _distance: "10", _oneway: "true" } }, { sq: { _desired: "aae", _distance: "10", _oneway: "true" } }, { sq: { _desired: "aat", _distance: "10", _oneway: "true" } }, { sq: { _desired: "aln", _distance: "10", _oneway: "true" } }, { syr: { _desired: "aii", _distance: "10", _oneway: "true" } }, { uz: { _desired: "uzs", _distance: "10", _oneway: "true" } }, { yi: { _desired: "yih", _distance: "10", _oneway: "true" } }, { zh: { _desired: "cdo", _distance: "10", _oneway: "true" } }, { zh: { _desired: "cjy", _distance: "10", _oneway: "true" } }, { zh: { _desired: "cpx", _distance: "10", _oneway: "true" } }, { zh: { _desired: "czh", _distance: "10", _oneway: "true" } }, { zh: { _desired: "czo", _distance: "10", _oneway: "true" } }, { zh: { _desired: "gan", _distance: "10", _oneway: "true" } }, { zh: { _desired: "hak", _distance: "10", _oneway: "true" } }, { zh: { _desired: "hsn", _distance: "10", _oneway: "true" } }, { zh: { _desired: "lzh", _distance: "10", _oneway: "true" } }, { zh: { _desired: "mnp", _distance: "10", _oneway: "true" } }, { zh: { _desired: "nan", _distance: "10", _oneway: "true" } }, { zh: { _desired: "wuu", _distance: "10", _oneway: "true" } }, { zh: { _desired: "yue", _distance: "10", _oneway: "true" } }, { "*": { _desired: "*", _distance: "80" } }, { "en-Latn": { _desired: "am-Ethi", _distance: "10", _oneway: "true" } }, { "ru-Cyrl": { _desired: "az-Latn", _distance: "10", _oneway: "true" } }, { "en-Latn": { _desired: "bn-Beng", _distance: "10", _oneway: "true" } }, { "zh-Hans": { _desired: "bo-Tibt", _distance: "10", _oneway: "true" } }, { "ru-Cyrl": { _desired: "hy-Armn", _distance: "10", _oneway: "true" } }, { "en-Latn": { _desired: "ka-Geor", _distance: "10", _oneway: "true" } }, { "en-Latn": { _desired: "km-Khmr", _distance: "10", _oneway: "true" } }, { "en-Latn": { _desired: "kn-Knda", _distance: "10", _oneway: "true" } }, { "en-Latn": { _desired: "lo-Laoo", _distance: "10", _oneway: "true" } }, { "en-Latn": { _desired: "ml-Mlym", _distance: "10", _oneway: "true" } }, { "en-Latn": { _desired: "my-Mymr", _distance: "10", _oneway: "true" } }, { "en-Latn": { _desired: "ne-Deva", _distance: "10", _oneway: "true" } }, { "en-Latn": { _desired: "or-Orya", _distance: "10", _oneway: "true" } }, { "en-Latn": { _desired: "pa-Guru", _distance: "10", _oneway: "true" } }, { "en-Latn": { _desired: "ps-Arab", _distance: "10", _oneway: "true" } }, { "en-Latn": { _desired: "sd-Arab", _distance: "10", _oneway: "true" } }, { "en-Latn": { _desired: "si-Sinh", _distance: "10", _oneway: "true" } }, { "en-Latn": { _desired: "ta-Taml", _distance: "10", _oneway: "true" } }, { "en-Latn": { _desired: "te-Telu", _distance: "10", _oneway: "true" } }, { "en-Latn": { _desired: "ti-Ethi", _distance: "10", _oneway: "true" } }, { "ru-Cyrl": { _desired: "tk-Latn", _distance: "10", _oneway: "true" } }, { "en-Latn": { _desired: "ur-Arab", _distance: "10", _oneway: "true" } }, { "ru-Cyrl": { _desired: "uz-Latn", _distance: "10", _oneway: "true" } }, { "en-Latn": { _desired: "yi-Hebr", _distance: "10", _oneway: "true" } }, { "sr-Cyrl": { _desired: "sr-Latn", _distance: "5" } }, { "zh-Hans": { _desired: "za-Latn", _distance: "10", _oneway: "true" } }, { "zh-Hans": { _desired: "zh-Hani", _distance: "20", _oneway: "true" } }, { "zh-Hant": { _desired: "zh-Hani", _distance: "20", _oneway: "true" } }, { "ar-Arab": { _desired: "ar-Latn", _distance: "20", _oneway: "true" } }, { "bn-Beng": { _desired: "bn-Latn", _distance: "20", _oneway: "true" } }, { "gu-Gujr": { _desired: "gu-Latn", _distance: "20", _oneway: "true" } }, { "hi-Deva": { _desired: "hi-Latn", _distance: "20", _oneway: "true" } }, { "kn-Knda": { _desired: "kn-Latn", _distance: "20", _oneway: "true" } }, { "ml-Mlym": { _desired: "ml-Latn", _distance: "20", _oneway: "true" } }, { "mr-Deva": { _desired: "mr-Latn", _distance: "20", _oneway: "true" } }, { "ta-Taml": { _desired: "ta-Latn", _distance: "20", _oneway: "true" } }, { "te-Telu": { _desired: "te-Latn", _distance: "20", _oneway: "true" } }, { "zh-Hans": { _desired: "zh-Latn", _distance: "20", _oneway: "true" } }, { "ja-Jpan": { _desired: "ja-Latn", _distance: "5", _oneway: "true" } }, { "ja-Jpan": { _desired: "ja-Hani", _distance: "5", _oneway: "true" } }, { "ja-Jpan": { _desired: "ja-Hira", _distance: "5", _oneway: "true" } }, { "ja-Jpan": { _desired: "ja-Kana", _distance: "5", _oneway: "true" } }, { "ja-Jpan": { _desired: "ja-Hrkt", _distance: "5", _oneway: "true" } }, { "ja-Hrkt": { _desired: "ja-Hira", _distance: "5", _oneway: "true" } }, { "ja-Hrkt": { _desired: "ja-Kana", _distance: "5", _oneway: "true" } }, { "ko-Kore": { _desired: "ko-Hani", _distance: "5", _oneway: "true" } }, { "ko-Kore": { _desired: "ko-Hang", _distance: "5", _oneway: "true" } }, { "ko-Kore": { _desired: "ko-Jamo", _distance: "5", _oneway: "true" } }, { "ko-Hang": { _desired: "ko-Jamo", _distance: "5", _oneway: "true" } }, { "*-*": { _desired: "*-*", _distance: "50" } }, { "ar-*-$maghreb": { _desired: "ar-*-$maghreb", _distance: "4" } }, { "ar-*-$!maghreb": { _desired: "ar-*-$!maghreb", _distance: "4" } }, { "ar-*-*": { _desired: "ar-*-*", _distance: "5" } }, { "en-*-$enUS": { _desired: "en-*-$enUS", _distance: "4" } }, { "en-*-GB": { _desired: "en-*-$!enUS", _distance: "3" } }, { "en-*-$!enUS": { _desired: "en-*-$!enUS", _distance: "4" } }, { "en-*-*": { _desired: "en-*-*", _distance: "5" } }, { "es-*-$americas": { _desired: "es-*-$americas", _distance: "4" } }, { "es-*-$!americas": { _desired: "es-*-$!americas", _distance: "4" } }, { "es-*-*": { _desired: "es-*-*", _distance: "5" } }, { "pt-*-$americas": { _desired: "pt-*-$americas", _distance: "4" } }, { "pt-*-$!americas": { _desired: "pt-*-$!americas", _distance: "4" } }, { "pt-*-*": { _desired: "pt-*-*", _distance: "5" } }, { "zh-Hant-$cnsar": { _desired: "zh-Hant-$cnsar", _distance: "4" } }, { "zh-Hant-$!cnsar": { _desired: "zh-Hant-$!cnsar", _distance: "4" } }, { "zh-Hant-*": { _desired: "zh-Hant-*", _distance: "5" } }, { "*-*-*": { _desired: "*-*-*", _distance: "4" } }];
let closure_3 = { supplemental: { languageMatching: { "written-new": items } } };
let closure_4 = { "001": ["001", "001-status-grouping", "002", "005", "009", "011", "013", "014", "015", "017", "018", "019", "021", "029", "030", "034", "035", "039", "053", "054", "057", "061", "142", "143", "145", "150", "151", "154", "155", "AC", "AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CP", "CQ", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DG", "DJ", "DK", "DM", "DO", "DZ", "EA", "EC", "EE", "EG", "EH", "ER", "ES", "ET", "EU", "EZ", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "IC", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "QO", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SX", "SY", "SZ", "TA", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UM", "UN", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WS", "XK", "YE", "YT", "ZA", "ZM", "ZW"], "002": ["002", "002-status-grouping", "011", "014", "015", "017", "018", "202", "AO", "BF", "BI", "BJ", "BW", "CD", "CF", "CG", "CI", "CM", "CV", "DJ", "DZ", "EA", "EG", "EH", "ER", "ET", "GA", "GH", "GM", "GN", "GQ", "GW", "IC", "IO", "KE", "KM", "LR", "LS", "LY", "MA", "MG", "ML", "MR", "MU", "MW", "MZ", "NA", "NE", "NG", "RE", "RW", "SC", "SD", "SH", "SL", "SN", "SO", "SS", "ST", "SZ", "TD", "TF", "TG", "TN", "TZ", "UG", "YT", "ZA", "ZM", "ZW"], "003": ["003", "013", "021", "029", "AG", "AI", "AW", "BB", "BL", "BM", "BQ", "BS", "BZ", "CA", "CR", "CU", "CW", "DM", "DO", "GD", "GL", "GP", "GT", "HN", "HT", "JM", "KN", "KY", "LC", "MF", "MQ", "MS", "MX", "NI", "PA", "PM", "PR", "SV", "SX", "TC", "TT", "US", "VC", "VG", "VI"], "005": ["005", "AR", "BO", "BR", "BV", "CL", "CO", "EC", "FK", "GF", "GS", "GY", "PE", "PY", "SR", "UY", "VE"], "009": ["009", "053", "054", "057", "061", "AC", "AQ", "AS", "AU", "CC", "CK", "CP", "CX", "DG", "FJ", "FM", "GU", "HM", "KI", "MH", "MP", "NC", "NF", "NR", "NU", "NZ", "PF", "PG", "PN", "PW", "QO", "SB", "TA", "TK", "TO", "TV", "UM", "VU", "WF", "WS"], "011": ["011", "BF", "BJ", "CI", "CV", "GH", "GM", "GN", "GW", "LR", "ML", "MR", "NE", "NG", "SH", "SL", "SN", "TG"], "013": ["013", "BZ", "CR", "GT", "HN", "MX", "NI", "PA", "SV"], "014": ["014", "BI", "DJ", "ER", "ET", "IO", "KE", "KM", "MG", "MU", "MW", "MZ", "RE", "RW", "SC", "SO", "SS", "TF", "TZ", "UG", "YT", "ZM", "ZW"], "015": ["015", "DZ", "EA", "EG", "EH", "IC", "LY", "MA", "SD", "TN"], "017": ["017", "AO", "CD", "CF", "CG", "CM", "GA", "GQ", "ST", "TD"], "018": ["018", "BW", "LS", "NA", "SZ", "ZA"], "019": ["003", "005", "013", "019", "019-status-grouping", "021", "029", "419", "AG", "AI", "AR", "AW", "BB", "BL", "BM", "BO", "BQ", "BR", "BS", "BV", "BZ", "CA", "CL", "CO", "CR", "CU", "CW", "DM", "DO", "EC", "FK", "GD", "GF", "GL", "GP", "GS", "GT", "GY", "HN", "HT", "JM", "KN", "KY", "LC", "MF", "MQ", "MS", "MX", "NI", "PA", "PE", "PM", "PR", "PY", "SR", "SV", "SX", "TC", "TT", "US", "UY", "VC", "VE", "VG", "VI"], "021": ["021", "BM", "CA", "GL", "PM", "US"], "029": ["029", "AG", "AI", "AW", "BB", "BL", "BQ", "BS", "CU", "CW", "DM", "DO", "GD", "GP", "HT", "JM", "KN", "KY", "LC", "MF", "MQ", "MS", "PR", "SX", "TC", "TT", "VC", "VG", "VI"], "030": ["030", "CN", "HK", "JP", "KP", "KR", "MN", "MO", "TW"], "034": ["034", "AF", "BD", "BT", "IN", "IR", "LK", "MV", "NP", "PK"], "035": ["035", "BN", "ID", "KH", "LA", "MM", "MY", "PH", "SG", "TH", "TL", "VN"], "039": ["039", "AD", "AL", "BA", "ES", "GI", "GR", "HR", "IT", "ME", "MK", "MT", "PT", "RS", "SI", "SM", "VA", "XK"], "053": ["053", "AU", "CC", "CX", "HM", "NF", "NZ"], "054": ["054", "FJ", "NC", "PG", "SB", "VU"], "057": ["057", "FM", "GU", "KI", "MH", "MP", "NR", "PW", "UM"], "061": ["061", "AS", "CK", "NU", "PF", "PN", "TK", "TO", "TV", "WF", "WS"], [142]: ["030", "034", "035", "142", "143", "145", "AE", "AF", "AM", "AZ", "BD", "BH", "BN", "BT", "CN", "CY", "GE", "HK", "ID", "IL", "IN", "IQ", "IR", "JO", "JP", "KG", "KH", "KP", "KR", "KW", "KZ", "LA", "LB", "LK", "MM", "MN", "MO", "MV", "MY", "NP", "OM", "PH", "PK", "PS", "QA", "SA", "SG", "SY", "TH", "TJ", "TL", "TM", "TR", "TW", "UZ", "VN", "YE"], [143]: ["143", "KG", "KZ", "TJ", "TM", "UZ"], [145]: ["145", "AE", "AM", "AZ", "BH", "CY", "GE", "IL", "IQ", "JO", "KW", "LB", "OM", "PS", "QA", "SA", "SY", "TR", "YE"], [150]: ["039", "150", "151", "154", "155", "AD", "AL", "AT", "AX", "BA", "BE", "BG", "BY", "CH", "CQ", "CZ", "DE", "DK", "EE", "ES", "FI", "FO", "FR", "GB", "GG", "GI", "GR", "HR", "HU", "IE", "IM", "IS", "IT", "JE", "LI", "LT", "LU", "LV", "MC", "MD", "ME", "MK", "MT", "NL", "NO", "PL", "PT", "RO", "RS", "RU", "SE", "SI", "SJ", "SK", "SM", "UA", "VA", "XK"], [151]: ["151", "BG", "BY", "CZ", "HU", "MD", "PL", "RO", "RU", "SK", "UA"], [154]: ["154", "AX", "CQ", "DK", "EE", "FI", "FO", "GB", "GG", "IE", "IM", "IS", "JE", "LT", "LV", "NO", "SE", "SJ"], [155]: ["155", "AT", "BE", "CH", "DE", "FR", "LI", "LU", "MC", "NL"], [202]: ["011", "014", "017", "018", "202", "AO", "BF", "BI", "BJ", "BW", "CD", "CF", "CG", "CI", "CM", "CV", "DJ", "ER", "ET", "GA", "GH", "GM", "GN", "GQ", "GW", "IO", "KE", "KM", "LR", "LS", "MG", "ML", "MR", "MU", "MW", "MZ", "NA", "NE", "NG", "RE", "RW", "SC", "SH", "SL", "SN", "SO", "SS", "ST", "SZ", "TD", "TF", "TG", "TZ", "UG", "YT", "ZA", "ZM", "ZW"], [419]: ["005", "013", "029", "419", "AG", "AI", "AR", "AW", "BB", "BL", "BO", "BQ", "BR", "BS", "BV", "BZ", "CL", "CO", "CR", "CU", "CW", "DM", "DO", "EC", "FK", "GD", "GF", "GP", "GS", "GT", "GY", "HN", "HT", "JM", "KN", "KY", "LC", "MF", "MQ", "MS", "MX", "NI", "PA", "PE", "PR", "PY", "SR", "SV", "SX", "TC", "TT", "UY", "VC", "VE", "VG", "VI"], EU: ["AT", "BE", "BG", "CY", "CZ", "DE", "DK", "EE", "ES", "EU", "FI", "FR", "GR", "HR", "HU", "IE", "IT", "LT", "LU", "LV", "MT", "NL", "PL", "PT", "RO", "SE", "SI", "SK"], EZ: ["AT", "BE", "CY", "DE", "EE", "ES", "EZ", "FI", "FR", "GR", "IE", "IT", "LT", "LU", "LV", "MT", "NL", "PT", "SI", "SK"], QO: ["AC", "AQ", "CP", "DG", "QO", "TA"], UN: ["AD", "AE", "AF", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CD", "CF", "CG", "CH", "CI", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ER", "ES", "ET", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IQ", "IR", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MM", "MN", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SY", "SZ", "TD", "TG", "TH", "TJ", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TZ", "UA", "UG", "UN", "US", "UY", "UZ", "VC", "VE", "VN", "VU", "WS", "YE", "ZA", "ZM", "ZW"] };
const re5 = /-u(?:-[0-9a-z]{2,8})+/gi;
monadic = {
  serializer(arg0) {
    return "" + arg0[0] + "|" + arg0[1];
  }
};
let closure_7 = monadic.memoize(function findMatchingDistanceImpl(arg0, arg1) {
  const locale = new Intl.Locale(arg0);
  const maximizeResult = locale.maximize();
  const locale1 = new Intl.Locale(arg1);
  const maximizeResult1 = locale1.maximize();
  let obj = { language: maximizeResult.language, script: tmp3, region: tmp4 };
  obj = { language: maximizeResult1.language, script: tmp5, region: tmp6 };
  const tmp7 = processData();
  let num = 0;
  if (obj.language !== obj.language) {
    const obj1 = { language: maximizeResult.language, script: "", region: "" };
    const obj2 = { language: maximizeResult1.language, script: "", region: "" };
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
}, monadic);
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
    continue;
  }
  return items;
};
export { ResolveLocale };
export const match = function match(items, arg1, arg2, algorithm) {
  let _defineProperty = arg2;
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
  return ResolveLocale(arg1, canonicalLocales, obj, [], {}, () => _defineProperty).locale;
};

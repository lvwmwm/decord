// Module ID: 15945
// Function ID: 123144
// Name: IsStructurallyValidLanguageTag
// Dependencies: [15946, 15947]

// Module 15945 (IsStructurallyValidLanguageTag)
let require = arg1;
const dependencyMap = arg6;
function IsStructurallyValidLanguageTag(StringResult1) {
  const expBCP47Syntax = require(15946) /* RegExpResult1 */.expBCP47Syntax;
  const tmp = !expBCP47Syntax.test(StringResult1);
  let tmp2 = !tmp;
  if (!tmp) {
    const expVariantDupes = require(15946) /* RegExpResult1 */.expVariantDupes;
    let tmp5 = !expVariantDupes.test(StringResult1);
    if (tmp5) {
      const expSingletonDupes = require(15946) /* RegExpResult1 */.expSingletonDupes;
      tmp5 = !expSingletonDupes.test(StringResult1);
    }
    tmp2 = tmp5;
  }
  return tmp2;
}
function CanonicalizeLanguageTag(StringResult1) {
  let tmp19;
  const parts = StringResult1.toLowerCase().split("-");
  let num = 1;
  if (1 < parts.length) {
    while (true) {
      if (2 === parts[num].length) {
        let str4 = parts[num];
        parts[num] = str4.toUpperCase();
      } else if (4 === parts[num].length) {
        let str2 = parts[num];
        let str3 = str2.charAt(0);
        let arr2 = parts[num];
        let formatted = str3.toUpperCase();
        parts[num] = formatted + arr2.slice(1);
      } else {
        if (1 === parts[num].length) {
          if ("x" !== parts[num]) {
            break;
          }
        }
        break;
      }
      num = num + 1;
      if (num >= length) {
        break;
      }
    }
  }
  const str5 = join.call(parts, "-");
  const match = str5.match(require(15946) /* RegExpResult1 */.expExtSequences);
  let tmp2 = match;
  if (match) {
    tmp2 = match.length > 1;
  }
  let replaced = str5;
  if (tmp2) {
    const sorted = match.sort();
    const _RegExp = RegExp;
    replaced = str5.replace(RegExp(`(?:${require(15946) /* RegExpResult1 */.expExtSequences.source})+`, "i"), join.call(match, ""));
    const RegExpResult = RegExp(`(?:${require(15946) /* RegExpResult1 */.expExtSequences.source})+`, "i");
  }
  let str10 = replaced;
  if (hasOwnProperty.call(obj1.tags, replaced)) {
    str10 = obj1.tags[replaced];
  }
  const parts1 = str10.split("-");
  let length2 = parts1.length;
  let tmp11 = parts1;
  let num2 = 1;
  let tmp12 = parts1;
  if (1 < length2) {
    do {
      let tmp13 = hasOwnProperty;
      let tmp14 = obj1;
      if (hasOwnProperty.call(obj1.subtags, tmp11[num2])) {
        let tmp28 = obj1;
        tmp11[num2] = obj1.subtags[tmp11[num2]];
        let tmp17 = tmp11;
        let tmp18 = num2;
        tmp19 = length2;
      } else {
        let tmp15 = hasOwnProperty;
        let tmp16 = obj1;
        tmp17 = tmp11;
        tmp18 = num2;
        tmp19 = length2;
        if (hasOwnProperty.call(obj1.extLang, tmp11[num2])) {
          let tmp20 = obj1;
          tmp11[num2] = obj1.extLang[tmp11[num2]][0];
          let tmp21 = 1 === num2;
          if (tmp21) {
            let tmp22 = obj1;
            tmp21 = obj1.extLang[tmp11[1]][1] === tmp11[0];
          }
          let callResult = tmp11;
          let sum = num2;
          let diff = length2;
          if (tmp21) {
            let tmp26 = slice;
            let tmp27 = +num2;
            sum = tmp27 + 1;
            callResult = slice.call(tmp11, tmp27);
            diff = length2 - 1;
          }
          tmp17 = callResult;
          tmp18 = sum;
          tmp19 = diff;
        }
      }
      num2 = tmp18 + 1;
      tmp11 = tmp17;
      length2 = tmp19;
      tmp12 = tmp17;
    } while (num2 < tmp19);
  }
  return join.call(tmp12, "-");
}
function CanonicalizeLocaleList(arg0) {
  if (undefined === arg0) {
    const prototype3 = List.prototype;
    const tmp29 = new List();
    return tmp29;
  } else {
    const prototype4 = List.prototype;
    const tmp34 = new List();
    let tmp = arg0;
    if ("string" === typeof arg0) {
      const items = [arg0];
      tmp = items;
    }
    const tmp36Result = toObject(tmp);
    let num = 0;
    if (0 < tmp36Result.length) {
      while (true) {
        let _String = String;
        let StringResult = String(num);
        let tmp5 = num;
        if (StringResult in tmp36Result) {
          let tmp6 = tmp36Result[StringResult];
          if (null == tmp6) {
            break;
          } else {
            let tmp37 = typeof tmp6;
            if ("string" === tmp37) {
              let _String2 = String;
              let StringResult1 = String(tmp6);
              let tmp8 = IsStructurallyValidLanguageTag;
              if (IsStructurallyValidLanguageTag(StringResult1)) {
                let tmp13 = CanonicalizeLanguageTag;
                let tmp14 = CanonicalizeLanguageTag(StringResult1);
                let tmp15 = callback;
                let tmp16 = tmp6;
                let tmp17 = tmp14;
                if (-1 === callback.call(tmp34, tmp14)) {
                  let tmp18 = push;
                  let callResult = push.call(tmp34, tmp14);
                  let tmp20 = tmp6;
                  let tmp21 = tmp14;
                }
              } else {
                let _RangeError = RangeError;
                let str2 = "'";
                let tmp9 = new.target;
                let str3 = "' is not a structurally valid language tag";
                let tmp10 = new.target;
                let rangeError = new RangeError("'" + StringResult1 + "' is not a structurally valid language tag");
                let tmp12 = rangeError;
                throw rangeError;
              }
            } else if ("object" !== tmp37) {
              break;
            }
            let _TypeError = TypeError;
            let tmp22 = new.target;
            let str4 = "String or Object type expected";
            let tmp23 = new.target;
            let typeError = new TypeError("String or Object type expected");
            let tmp25 = typeError;
            throw typeError;
          }
        }
        num = num + 1;
      }
    }
    return tmp34;
  }
}
function BestAvailableLocale(arg0, arg1) {
  let str = arg1;
  while (callback.call(arg0, str) <= -1) {
    let lastIndexOfResult = str.lastIndexOf("-");
    if (lastIndexOfResult >= 0) {
      let tmp2 = lastIndexOfResult >= 2 && "-" === str.charAt(lastIndexOfResult - 2);
      let diff = lastIndexOfResult;
      if (tmp2) {
        diff = lastIndexOfResult - 2;
      }
      str = str.substring(0, diff);
      continue;
    }
  }
  return str;
}
function LookupMatcher(arg0, arg1) {
  let num = 0;
  let tmp2;
  if (0 < arg1.length) {
    const _String = String;
    const replaced = String(arg1[num]).replace(closure_21, "");
    const tmp7 = BestAvailableLocale(arg0, replaced);
    num = num + 1;
    let str = tmp3;
    let tmp = replaced;
    tmp2 = tmp7;
    while (num < length) {
      str = tmp3;
      tmp = replaced;
      tmp2 = tmp7;
      if (tmp7) {
        break;
      }
    }
    const str2 = String(arg1[num]);
  }
  const tmp8 = new Record();
  if (undefined !== tmp2) {
    tmp8["[[locale]]"] = tmp2;
    const _String2 = String;
    const _String3 = String;
    if (StringResult !== String(tmp)) {
      tmp8["[[extension]]"] = str.match(closure_21)[0];
      tmp8["[[extensionIndex]]"] = str.indexOf("-u-");
    }
    StringResult = String(str);
  } else {
    tmp8["[[locale]]"] = closure_2;
  }
  return tmp8;
}
function ResolveLocale(arg0, arg1, __localeMatcher__) {
  if (0 === arg0.length) {
    const _ReferenceError = ReferenceError;
    const referenceError = new ReferenceError("No locale data has been provided for this object yet.");
    throw referenceError;
  } else {
    if ("lookup" === __localeMatcher__["[[localeMatcher]]"]) {
      let tmp2 = LookupMatcher(arg0, arg1);
    } else {
      tmp2 = LookupMatcher(arg0, arg1);
    }
    if (hasOwnProperty.call(tmp2, "[[extension]]")) {
      __extensionIndex__ = tmp2["[[extensionIndex]]"];
      const _String = String;
      const callResult = split.call(tmp2["[[extension]]"], "-");
      const length = callResult.length;
    }
    const prototype = Record.prototype;
    const tmp10 = new Record();
    tmp10["[[dataLocale]]"] = tmp2["[[locale]]"];
    let str4 = "-u";
    let num4 = 0;
    let str10 = "-u";
    if (0 < arg3.length) {
      do {
        let tmp13 = arg3[num4];
        let tmp14 = arg4[str][tmp13];
        let first = tmp14[0];
        let obj = closure_7;
        let str11 = first;
        let str12 = "";
        let tmp16 = tmp12;
        if (undefined !== tmp5) {
          let callResult1 = obj.call(tmp5, tmp13);
          str11 = first;
          str12 = "";
          let tmp36 = callResult1;
          tmp16 = tmp12;
          if (-1 !== callResult1) {
            if (callResult1 + 1 < length) {
              if (tmp5[callResult1 + 1].length > 2) {
                let tmp19 = tmp5[callResult1 + 1];
                str11 = first;
                str12 = "";
                let tmp20 = callResult1;
                tmp16 = tmp19;
                if (-1 !== obj.call(tmp14, tmp19)) {
                  str12 = `-${tmp13}-${tmp19}`;
                  str11 = tmp19;
                  let tmp21 = callResult1;
                  tmp16 = tmp19;
                }
              }
            }
            str11 = first;
            str12 = "";
            let tmp17 = callResult1;
            tmp16 = tmp12;
            if (-1 !== obj(tmp14, "true")) {
              str11 = "true";
              str12 = "";
              let tmp18 = callResult1;
              tmp16 = tmp12;
            }
          }
        }
        let tmp22 = hasOwnProperty;
        let tmp23 = str11;
        let str13 = str12;
        if (hasOwnProperty.call(__localeMatcher__, `[[${tmp13}]]`)) {
          let tmp24 = __localeMatcher__["[[" + tmp13 + "]]"];
          let tmp25 = -1 !== obj.call(tmp14, tmp24) && tmp24 !== str11;
          tmp23 = str11;
          str13 = str12;
          let tmp26 = tmp24;
          if (tmp25) {
            tmp23 = tmp24;
            str13 = "";
            let tmp27 = tmp24;
          }
        }
        tmp10["[[" + tmp13 + "]]"] = tmp23;
        str4 = str4 + str13;
        num4 = num4 + 1;
        tmp12 = tmp16;
        str10 = str4;
      } while (num4 < length2);
    }
    let sum1 = str;
    if (str10.length > 2) {
      const sum = str.substring(0, __extensionIndex__) + str10;
      sum1 = sum + str.substring(__extensionIndex__);
    }
    tmp10["[[locale]]"] = sum1;
    return tmp10;
  }
}
function LookupSupportedLocales(arg0, arg1) {
  const tmp = new List();
  for (let num = 0; num < length; num = num + 1) {
    let tmp2 = arg1[num];
    let tmp3 = BestAvailableLocale;
    let _String = String;
    let str = String(tmp2);
    let tmp4 = closure_21;
    if (undefined !== BestAvailableLocale(arg0, str.replace(closure_21, ""))) {
      let tmp5 = push;
      let callResult = push.call(tmp, tmp2);
    }
  }
  return slice.call(tmp);
}
function SupportedLocales(arg0, arg1, arg2) {
  let tmp;
  if (undefined !== arg2) {
    const prototype = Record.prototype;
    const tmp6 = new Record(toObject(arg2));
    const localeMatcher = tmp6.localeMatcher;
    tmp = localeMatcher;
    if (undefined !== localeMatcher) {
      const _String = String;
      const StringResult = String(localeMatcher);
      tmp = StringResult;
      if ("lookup" !== StringResult) {
        tmp = StringResult;
        if ("best fit" !== StringResult) {
          const _RangeError = RangeError;
          const rangeError = new RangeError("matcher should be \"lookup\" or \"best fit\"");
          throw rangeError;
        }
      }
    }
  }
  if (undefined !== tmp) {
    if ("best fit" !== tmp) {
      let tmp11 = LookupSupportedLocales(arg0, arg1);
    }
    for (const key10026 in tmp11) {
      let tmp21 = key10026;
      let tmp22 = hasOwnProperty;
      if (!hasOwnProperty.call(tmp11, key10026)) {
        continue;
      } else {
        let tmp13 = fn;
        let obj = { writable: false, configurable: false, value: tmp11[key10026] };
        let tmp14 = fn(tmp11, key10026, obj);
        continue;
      }
      continue;
    }
    obj = { writable: false };
    fn(tmp11, "length", obj);
    return tmp11;
  }
  tmp11 = LookupSupportedLocales(arg0, arg1);
}
function GetOption(arg0, arg1, arg2, arg3, arg4) {
  if (undefined !== arg0[arg1]) {
    if ("boolean" === arg2) {
      const _Boolean = Boolean;
      let BooleanResult = Boolean(tmp);
    } else {
      BooleanResult = tmp;
      if ("string" === arg2) {
        const _String = String;
        BooleanResult = String(tmp);
      }
    }
    if (undefined !== arg3) {
      if (-1 === callback.call(arg3, BooleanResult)) {
        const _RangeError = RangeError;
        const rangeError = new RangeError("'" + BooleanResult + "' is not an allowed value for `" + arg1 + "`");
        throw rangeError;
      }
    }
    return BooleanResult;
  } else {
    return arg4;
  }
}
function GetNumberOption(arg0, arg1, arg2, arg3, arg4) {
  if (undefined !== arg0[arg1]) {
    const _Number = Number;
    const NumberResult = Number(tmp);
    const _isNaN = isNaN;
    if (!isNaN(NumberResult)) {
      if (NumberResult >= arg2) {
        if (NumberResult <= arg3) {
          const _Math = Math;
          return Math.floor(NumberResult);
        }
      }
    }
    const _RangeError = RangeError;
    const rangeError = new RangeError("Value is not a number or outside accepted range");
    throw rangeError;
  } else {
    return arg4;
  }
}
class NumberFormatConstructor {
  constructor() {
    self = this;
    first = arguments[0];
    tmp2 = arguments[1];
    if (this) {
      tmp3 = closure_3;
      if (self !== closure_3) {
        tmp5 = InitializeNumberFormat;
        tmp6 = toObject;
        tmp7 = toObject(self);
        tmp8 = InitializeNumberFormat(tmp7, first, tmp2);
        numberFormat = tmp7;
      }
      return numberFormat;
    }
    numberFormat = new closure_3.NumberFormat(first, tmp2);
    return;
  }
}
function InitializeNumberFormat(prototype) {
  const tmp = getInternalProperties(prototype);
  const require = tmp;
  const tmp2 = createRegExpRestore();
  if (true === tmp["[[initializedIntlObject]]"]) {
    const _TypeError2 = TypeError;
    const typeError = new TypeError("`this` object has already been initialized as an Intl object");
    throw typeError;
  } else {
    let obj = {
      value() {
          if (arguments[0] === outer1_16) {
            return closure_0;
          }
        }
    };
    fn(prototype, "__getInternalProperties", obj);
    tmp["[[initializedIntlObject]]"] = true;
    const tmp88 = CanonicalizeLocaleList(arg1);
    if (undefined === arg2) {
      obj = {};
    } else {
      obj = toObject(arg2);
    }
    prototype = Record.prototype;
    const tmp7 = new Record();
    const prototype2 = List.prototype;
    const tmp13 = new List("lookup", "best fit");
    tmp7["[[localeMatcher]]"] = GetOption(obj, "localeMatcher", "string", tmp13, "best fit");
    __localeData__ = closure_15.NumberFormat["[[localeData]]"];
    const tmp23 = ResolveLocale(closure_15.NumberFormat["[[availableLocales]]"], tmp88, tmp7, closure_15.NumberFormat["[[relevantExtensionKeys]]"], __localeData__);
    ({ [[locale]]: tmp["[[locale]]"], [[nu]]: tmp["[[numberingSystem]]"], [[dataLocale]]: tmp["[[dataLocale]]"] } = tmp23);
    const prototype3 = List.prototype;
    const tmp26 = new List("decimal", "percent", "currency");
    const tmp29 = GetOption(obj, "style", "string", tmp26, "decimal");
    tmp["[[style]]"] = tmp29;
    const str17 = GetOption(obj, "currency", "string");
    if (undefined !== str17) {
      const _String = String;
      if (false === regex.test(toLatinUpperCase(String(str17)))) {
        const _RangeError = RangeError;
        const rangeError = new RangeError("'" + str17 + "' is not a valid currency code");
        throw rangeError;
      }
    }
    if ("currency" === tmp29) {
      if (undefined === str17) {
        const _TypeError = TypeError;
        const typeError1 = new TypeError("Currency code is required when style is currency");
        throw typeError1;
      }
    }
    if ("currency" === tmp29) {
      const formatted = str17.toUpperCase();
      tmp["[[currency]]"] = formatted;
      let num = 2;
      if (undefined !== dependencyMap[formatted]) {
        num = dependencyMap[formatted];
      }
    }
    const prototype5 = List.prototype;
    const tmp47 = new List("code", "symbol", "name");
    if ("currency" === tmp29) {
      tmp["[[currencyDisplay]]"] = GetOption(tmp30, "currencyDisplay", "string", tmp47, "symbol");
    }
    tmp["[[minimumIntegerDigits]]"] = GetNumberOption(obj, "minimumIntegerDigits", 1, 21, 1);
    let num8 = 0;
    if ("currency" === tmp29) {
      num8 = tmp39;
    }
    const tmp50Result = GetNumberOption(obj, "minimumFractionDigits", 0, 20, num8);
    tmp["[[minimumFractionDigits]]"] = tmp50Result;
    if ("currency" === tmp29) {
      const _Math3 = Math;
      let bound = Math.max(tmp50Result, tmp39);
    } else if ("percent" === tmp29) {
      const _Math2 = Math;
      bound = Math.max(tmp50Result, 0);
    } else {
      const _Math = Math;
      bound = Math.max(tmp50Result, 3);
    }
    tmp["[[maximumFractionDigits]]"] = GetNumberOption(obj, "maximumFractionDigits", tmp50Result, 20, bound);
    if (!tmp63) {
      const tmp66 = GetNumberOption(tmp30, "minimumSignificantDigits", 1, 21, 1);
      tmp["[[minimumSignificantDigits]]"] = tmp66;
      tmp["[[maximumSignificantDigits]]"] = GetNumberOption(tmp30, "maximumSignificantDigits", tmp66, 21, 21);
    }
    tmp["[[useGrouping]]"] = GetOption(obj, "useGrouping", "boolean", undefined, true);
    ({ positivePattern: tmp["[[positivePattern]]"], negativePattern: tmp["[[negativePattern]]"] } = __localeData__[tmp23["[[dataLocale]]"]].patterns[tmp29]);
    tmp["[[boundFormat]]"] = undefined;
    tmp["[[initializedNumberFormat]]"] = true;
    if (closure_4) {
      prototype.format = GetFormatNumber.call(prototype);
    }
    const exp = tmp2.exp;
    const isMatch = exp.test(tmp2.input);
    return prototype;
  }
}
class GetFormatNumber {
  constructor() {
    self = this;
    tmp = null != this;
    if (tmp) {
      str = "object";
      tmp = "object" === typeof self;
    }
    if (tmp) {
      tmp2 = getInternalProperties;
      tmp = getInternalProperties(self);
    }
    if (tmp) {
      if (tmp["[[initializedNumberFormat]]"]) {
        if (undefined === tmp["[[boundFormat]]"]) {
          tmp4 = f123183;
          tmp["[[boundFormat]]"] = f123183.call(function F(arg0) {
            return outer1_40(this, Number(arg0));
          }, self);
        }
        return tmp["[[boundFormat]]"];
      }
    }
    typeError = new TypeError("`this` value for format() is not an initialized Intl.NumberFormat object.");
    throw typeError;
  }
}
function FormatNumber(numberFormat, diff) {
  let tmp10;
  let tmp9;
  const tmp = createRegExpRestore();
  const tmp2 = getInternalProperties(numberFormat);
  __numberingSystem__ = tmp2["[[numberingSystem]]"];
  const tmp4 = closure_15.NumberFormat["[[localeData]]"][tmp2["[[dataLocale]]"]].symbols[__numberingSystem__] || closure_15.NumberFormat["[[localeData]]"][tmp2["[[dataLocale]]"]].symbols.latn;
  if (false === isFinite(diff)) {
    const _isNaN = isNaN;
    if (isNaN(diff)) {
      let nan = tmp4.nan;
      let flag3 = false;
    } else {
      const infinity = tmp4.infinity;
      nan = infinity;
      flag3 = false;
      if (diff < 0) {
        flag3 = true;
        nan = infinity;
      }
    }
  } else {
    let tmp5 = diff;
    let flag = false;
    if (diff < 0) {
      tmp5 = -diff;
      flag = true;
    }
    let result = tmp5;
    if ("percent" === tmp2["[[style]]"]) {
      result = tmp5 * 100;
    }
    if (hasOwnProperty.call(tmp2, "[[minimumSignificantDigits]]")) {
      if (hasOwnProperty.call(tmp2, "[[maximumSignificantDigits]]")) {
        let sum1 = (function ToRawPrecision(result, __minimumSignificantDigits__, __maximumSignificantDigits__) {
          if (0 === result) {
            const _Array = Array;
            let callResult = outer1_12.call(Array(__maximumSignificantDigits__ + 1), "0");
            let num = 0;
          } else {
            const _Math10 = Math;
            const absolute = Math.abs(result);
            const _Math11 = Math;
            if ("function" === typeof Math.log10) {
              const _Math4 = Math;
              const _Math5 = Math;
              num = Math.floor(Math.log10(absolute));
            } else {
              const _Math = Math;
              const _Math2 = Math;
              const _Math3 = Math;
              const rounded = Math.round(Math.log(absolute) * Math.LOG10E);
              const _Number = Number;
              num = rounded - (Number(`1e${tmp}`) > absolute);
            }
            const _Math6 = Math;
            const _Math7 = Math;
            const _Math8 = Math;
            const _Math9 = Math;
            const rounded1 = Math.round(Math.exp(Math.abs(num - __maximumSignificantDigits__ + 1) * Math.LN10));
            callResult = String(Math.round(num - __maximumSignificantDigits__ + 1 < 0 ? result * rounded1 : result / rounded1));
          }
          if (num >= __maximumSignificantDigits__) {
            const _Array3 = Array;
            return callResult + outer1_12.call(Array(num - __maximumSignificantDigits__ + 1 + 1), "0");
          } else if (num === __maximumSignificantDigits__ - 1) {
            return callResult;
          } else {
            if (num >= 0) {
              const text = `${arr.slice(0, num + 1)}.`;
              let text1 = `${arr.slice(0, num + 1)}.${arr.slice(num + 1)}`;
            } else {
              text1 = callResult;
              if (num < 0) {
                const _Array2 = Array;
                text1 = `0.${tmp6(Array(1 - (num + 1)), "0")}${arr}`;
              }
            }
            let substr = text1;
            if (text1.indexOf(".") >= 0) {
              substr = text1;
              if (__maximumSignificantDigits__ > __minimumSignificantDigits__) {
                let diff = __maximumSignificantDigits__ - __minimumSignificantDigits__;
                let str8 = text1;
                if (diff > 0) {
                  let arr3 = text1;
                  str8 = text1;
                  if ("0" === text1.charAt(text1.length - 1)) {
                    const str9 = arr3.slice(0, -1);
                    diff = diff - 1;
                    str8 = str9;
                    while (diff > 0) {
                      arr3 = str9;
                      str8 = str9;
                      if ("0" !== str9.charAt(str9.length - 1)) {
                        break;
                      }
                    }
                  }
                }
                substr = str8;
                if ("." === str8.charAt(str8.length - 1)) {
                  substr = str8.slice(0, -1);
                }
              }
            }
            return substr;
          }
        })(result, tmp2["[[minimumSignificantDigits]]"], tmp2["[[maximumSignificantDigits]]"]);
      }
      if (obj8[__numberingSystem__]) {
        let closure_0 = obj8[tmp2["[[numberingSystem]]"]];
        const _String2 = String;
        let str13 = String(sum1).replace(/\d/g, (arg0) => table[arg0]);
        const str14 = String(sum1);
      } else {
        const _String = String;
        str13 = String(sum1);
      }
      const str15 = str13.replace(/\./g, tmp4.decimal);
      nan = str15;
      flag3 = flag;
      if (true === tmp2["[[useGrouping]]"]) {
        const parts = str15.split(tmp4.decimal);
        const first = parts[0];
        if (first.length > (tmp3.patterns.primaryGroupSize || 3)) {
          const prototype = List.prototype;
          const tmp41 = new List();
          diff = first.length - tmp22;
          let result1 = diff % tmp23;
          let substr = first.slice(0, result1);
          if (substr.length) {
            push.call(tmp41, substr);
          }
          if (result1 < diff) {
            do {
              let tmp26 = push;
              let callResult1 = push.call(tmp41, first.slice(result1, result1 + tmp23));
              result1 = result1 + tmp23;
            } while (result1 < diff);
          }
          push.call(tmp41, first.slice(diff));
          parts[0] = join.call(tmp41, tmp4.group);
        }
        nan = join.call(parts, tmp4.decimal);
        flag3 = flag;
      }
    }
    ({ [[minimumIntegerDigits]]: tmp9, [[maximumFractionDigits]]: tmp10 } = tmp2);
    let _Number = Number;
    const str4 = toFixed.call(result, tmp10);
    let length = str4.split(".")[0].length;
    let diff1 = tmp10 - tmp2["[[minimumFractionDigits]]"];
    const index = str4.indexOf("e");
    let num3 = 0;
    if (index > -1) {
      num3 = str4.slice(index + 1);
    }
    let arr = str4;
    if (num3) {
      const replaced = str4.slice(0, index).replace(".", "");
      let _Array = Array;
      const call = join.call;
      let _Array2 = Array;
      let text = `${call(Array(num3 - (arr2.length - 1) + 1), "0")}.`;
      const sum = replaced + (`${call(Array(num3 - (arr2.length - 1) + 1), "0")}.` + join.call(Array(tmp10 + 1), "0"));
      length = sum.length;
      arr = sum;
      const str7 = str4.slice(0, index);
    }
    let arr4 = arr;
    if (diff1 > 0) {
      let arr5 = arr;
      arr4 = arr;
      if ("0" === arr.slice(-1)) {
        const substr1 = arr5.slice(0, -1);
        diff1 = diff1 - 1;
        arr4 = substr1;
        while (diff1 > 0) {
          arr5 = substr1;
          arr4 = substr1;
          if ("0" !== substr1.slice(-1)) {
            break;
          }
        }
      }
    }
    let substr2 = arr4;
    if ("." === arr4.slice(-1)) {
      substr2 = arr4.slice(0, -1);
    }
    let str11;
    if (length < tmp9) {
      let _Array3 = Array;
      str11 = join.call(Array(tmp9 - length + 1), "0");
    }
    if (!str11) {
      str11 = "";
    }
    sum1 = str11 + substr2;
  }
  let str16 = "[[positivePattern]]";
  if (true === flag3) {
    str16 = "[[negativePattern]]";
  }
  const str18 = tmp2[str16].replace("{number}", nan);
  let replaced1 = str18;
  if ("currency" === tmp2["[[style]]"]) {
    __currency__ = tmp2["[[currency]]"];
    let tmp34 = tmp3.currencies[__currency__];
    let tmp35 = __currency__;
    if ("symbol" === tmp2["[[currencyDisplay]]"]) {
      if (!tmp34) {
        tmp34 = __currency__;
      }
      tmp35 = tmp34;
    }
    replaced1 = str18.replace("{currency}", tmp35);
  }
  const exp = tmp.exp;
  const isMatch = exp.test(tmp.input);
  return replaced1;
}
class DateTimeFormatConstructor {
  constructor() {
    self = this;
    first = arguments[0];
    tmp2 = arguments[1];
    if (this) {
      tmp3 = closure_3;
      if (self !== closure_3) {
        tmp5 = InitializeDateTimeFormat;
        tmp6 = toObject;
        tmp7 = toObject(self);
        tmp8 = InitializeDateTimeFormat(tmp7, first, tmp2);
        dateTimeFormat = tmp7;
      }
      return dateTimeFormat;
    }
    dateTimeFormat = new closure_3.DateTimeFormat(first, tmp2);
    return;
  }
}
function InitializeDateTimeFormat(prototype, first, arg2) {
  const tmp = getInternalProperties(prototype);
  const require = tmp;
  const tmp2 = createRegExpRestore();
  if (true === tmp["[[initializedIntlObject]]"]) {
    const _TypeError = TypeError;
    const typeError = new TypeError("`this` object has already been initialized as an Intl object");
    throw typeError;
  } else {
    let obj = {
      value() {
          if (arguments[0] === outer1_16) {
            return closure_0;
          }
        }
    };
    fn(prototype, "__getInternalProperties", obj);
    tmp["[[initializedIntlObject]]"] = true;
    const tmp50 = CanonicalizeLocaleList(first);
    const tmp53 = ToDateTimeOptions(arg2, "any", "date");
    const prototype5 = Record.prototype;
    const tmp57 = new Record();
    const prototype6 = List.prototype;
    const tmp63 = new List("lookup", "best fit");
    tmp57["[[localeMatcher]]"] = GetOption(tmp53, "localeMatcher", "string", tmp63, "best fit");
    const DateTimeFormat = closure_15.DateTimeFormat;
    __localeData__ = DateTimeFormat["[[localeData]]"];
    const tmp71 = ResolveLocale(DateTimeFormat["[[availableLocales]]"], tmp50, tmp57, DateTimeFormat["[[relevantExtensionKeys]]"], __localeData__);
    ({ [[locale]]: tmp["[[locale]]"], [[ca]]: tmp["[[calendar]]"], [[nu]]: tmp["[[numberingSystem]]"], [[dataLocale]]: tmp["[[dataLocale]]"] } = tmp71);
    const timeZone = tmp53.timeZone;
    let tmp4 = timeZone;
    if (undefined !== timeZone) {
      tmp4 = toLatinUpperCase(timeZone);
      if ("UTC" !== tmp4) {
        const _RangeError = RangeError;
        const rangeError = new RangeError("timeZone is not supported.");
        throw rangeError;
      }
    }
    tmp["[[timeZone]]"] = tmp4;
    prototype = Record.prototype;
    const tmp8 = new Record();
    for (const key10021 in obj12) {
      let tmp73 = hasOwnProperty;
      let tmp74 = obj12;
      let tmp72 = key10021;
      if (!hasOwnProperty.call(obj12, key10021)) {
        continue;
      } else {
        let tmp11 = GetOption;
        let tmp12 = obj12;
        let tmp13 = tmp53;
        let tmp14 = key10021;
        let str4 = "string";
        tmp8["[[" + key10021 + "]]"] = GetOption(tmp53, tmp72, "string", obj12[key10021]);
        continue;
      }
      continue;
    }
    const formats = tmp15.formats;
    const _Object = Object;
    let dateTimeFormats = formats;
    if ("[object Array]" !== toString.call(formats)) {
      obj = require(15947) /* isDateFormatOnly */;
      dateTimeFormats = obj.createDateTimeFormats(formats);
    }
    const prototype2 = List.prototype;
    const tmp24 = new List("basic", "best fit");
    __localeData__[tmp71["[[dataLocale]]"]].formats = dateTimeFormats;
    if ("basic" === GetOption(tmp53, "formatMatcher", "string", tmp24, "best fit")) {
      let tmp28 = calculateScore(tmp8, dateTimeFormats);
    } else {
      tmp28 = calculateScore(tmp8, dateTimeFormats, true);
    }
    for (const key10069 in obj12) {
      let tmp75 = key10069;
      let tmp76 = hasOwnProperty;
      let tmp77 = obj12;
      if (!hasOwnProperty.call(obj12, key10069)) {
        continue;
      } else {
        let tmp31 = hasOwnProperty;
        if (!hasOwnProperty.call(tmp28, key10069)) {
          continue;
        } else {
          tmp["[[" + key10069 + "]]"] = tmp28[key10069];
          continue;
        }
        continue;
      }
      continue;
    }
    let hour12 = GetOption(tmp53, "hour12", "boolean");
    if (tmp["[[hour]]"]) {
      if (undefined === hour12) {
        hour12 = tmp15.hour12;
      }
      tmp["[[hour12]]"] = hour12;
      if (true === hour12) {
        tmp["[[hourNo0]]"] = tmp15.hourNo0;
        let pattern = tmp28.pattern12;
      } else {
        pattern = tmp28.pattern;
      }
    } else {
      pattern = tmp28.pattern;
    }
    tmp["[[pattern]]"] = pattern;
    tmp["[[boundFormat]]"] = undefined;
    tmp["[[initializedDateTimeFormat]]"] = true;
    if (closure_4) {
      prototype.format = GetFormatDateTime.call(prototype);
    }
    const exp = tmp2.exp;
    const isMatch = exp.test(tmp2.input);
    return prototype;
  }
}
function ToDateTimeOptions(arg0, any, date) {
  let tmp2 = null;
  if (undefined !== arg0) {
    const tmp4 = toObject(arg0);
    const prototype = Record.prototype;
    const tmp8 = new Record();
    tmp2 = tmp8;
    const keys = Object.keys();
    if (keys !== undefined) {
      tmp2 = tmp8;
      while (keys[tmp] !== undefined) {
        let tmp22 = tmp12;
        tmp8[tmp12] = tmp4[tmp12];
        continue;
      }
    }
    const tmp6 = new.target;
  }
  const tmp13 = tmp6(tmp2);
  let tmp14 = "date" !== any;
  if (tmp14) {
    tmp14 = "any" !== any;
  }
  if (!tmp14) {
    tmp14 = undefined === tmp13.weekday && undefined === tmp13.year && undefined === tmp13.month && undefined === tmp13.day;
    const tmp15 = undefined === tmp13.weekday && undefined === tmp13.year && undefined === tmp13.month && undefined === tmp13.day;
  }
  let flag = true;
  if (!tmp14) {
    flag = false;
  }
  let tmp16 = "time" !== any;
  if (tmp16) {
    tmp16 = "any" !== any;
  }
  if (!tmp16) {
    tmp16 = undefined === tmp13.hour && undefined === tmp13.minute && undefined === tmp13.second;
    const tmp17 = undefined === tmp13.hour && undefined === tmp13.minute && undefined === tmp13.second;
  }
  if (!tmp16) {
    flag = false;
  }
  let tmp18 = !flag;
  let tmp19 = tmp18;
  if (flag) {
    let tmp20 = "date" !== date;
    if (tmp20) {
      tmp20 = "all" !== date;
    }
    tmp19 = tmp20;
  }
  if (!tmp19) {
    tmp13.day = "numeric";
    tmp13.month = "numeric";
    tmp13.year = "numeric";
  }
  if (flag) {
    let tmp21 = "time" !== date;
    if (tmp21) {
      tmp21 = "all" !== date;
    }
    tmp18 = tmp21;
  }
  if (!tmp18) {
    tmp13.second = "numeric";
    tmp13.minute = "numeric";
    tmp13.hour = "numeric";
  }
  return tmp13;
}
function calculateScore(arg0, arg1, arg2) {
  let num = -Infinity;
  let num2 = 0;
  let tmp7;
  if (0 < arg1.length) {
    do {
      let tmp8 = arg1[num2];
      let tmp9 = obj12;
      let tmp10 = tmp3;
      let tmp11 = tmp4;
      let tmp12 = tmp5;
      let tmp13 = tmp6;
      let num3 = 0;
      let num4 = 0;
      let keys = Object.keys();
      if (keys !== undefined) {
        let tmp15 = num3;
        tmp3 = tmp10;
        let tmp16 = tmp13;
        num4 = num3;
        tmp4 = tmp11;
        tmp5 = tmp12;
        tmp6 = tmp13;
        let tmp17 = keys[tmp];
        while (tmp17 !== undefined) {
          let tmp30 = tmp17;
          let tmp31 = hasOwnProperty;
          let tmp32 = obj12;
          tmp10 = tmp17;
          if (!hasOwnProperty.call(obj12, tmp17)) {
            continue;
          } else {
            let tmp18 = arg0["[[" + tmp17 + "]]"];
            let tmp19 = hasOwnProperty;
            let tmp20;
            if (hasOwnProperty.call(tmp8, tmp17)) {
              tmp20 = tmp8[tmp17];
            }
            if (undefined === tmp18) {
              if (undefined !== tmp20) {
                num3 = tmp15 - 20;
                tmp10 = tmp17;
                tmp11 = tmp18;
                tmp12 = tmp20;
                tmp13 = tmp16;
                continue;
              }
            }
            if (undefined !== tmp18) {
              if (undefined === tmp20) {
                num3 = tmp15 - 120;
                tmp10 = tmp17;
                tmp11 = tmp18;
                tmp12 = tmp20;
                tmp13 = tmp16;
                continue;
              }
            }
            let items = ["2-digit", "numeric", "narrow", "short", "long"];
            let tmp21 = callback;
            let tmp23 = callback;
            let callResult = callback.call(items, tmp18);
            let _Math = Math;
            let _Math2 = Math;
            let bound = Math.max(Math.min(callback.call(items, tmp20) - callResult, 2), -2);
            let tmp25 = !arg2;
            if (!tmp25) {
              let tmp26 = "numeric" !== tmp18 && "2-digit" !== tmp18 || "numeric" === tmp20 || "2-digit" === tmp20;
              if (tmp26) {
                let tmp27 = "numeric" === tmp18 || "2-digit" === tmp18;
                if (!tmp27) {
                  let tmp28 = "2-digit" !== tmp20 && "numeric" !== tmp20;
                  tmp27 = tmp28;
                }
                tmp26 = tmp27;
              }
              tmp25 = tmp26;
            }
            let diff = tmp15;
            if (!tmp25) {
              diff = tmp15 - 8;
            }
            if (2 === bound) {
              num3 = diff - 6;
              tmp10 = tmp17;
              tmp11 = tmp18;
              tmp12 = tmp20;
              tmp13 = bound;
              continue;
            } else {
              if (1 === bound) {
                num3 = diff - 3;
                tmp10 = tmp17;
                tmp11 = tmp18;
                tmp12 = tmp20;
                tmp13 = bound;
                continue;
              } else {
                if (-1 === bound) {
                  num3 = diff - 6;
                  tmp10 = tmp17;
                  tmp11 = tmp18;
                  tmp12 = tmp20;
                  tmp13 = bound;
                  continue;
                } else {
                  num3 = diff;
                  tmp10 = tmp17;
                  tmp11 = tmp18;
                  tmp12 = tmp20;
                  tmp13 = bound;
                  if (-2 !== bound) {
                    continue;
                  } else {
                    num3 = diff - 8;
                    tmp10 = tmp17;
                    tmp11 = tmp18;
                    tmp12 = tmp20;
                    tmp13 = bound;
                    continue;
                  }
                  continue;
                }
                continue;
              }
              continue;
            }
            continue;
          }
          continue;
        }
      }
      if (num4 > num) {
        let tmp2 = tmp8;
        num = num4;
      }
      num2 = num2 + 1;
      tmp7 = tmp2;
    } while (num2 < length);
  }
  return tmp7;
}
class GetFormatDateTime {
  constructor() {
    self = this;
    tmp = null != this;
    if (tmp) {
      str = "object";
      tmp = "object" === typeof self;
    }
    if (tmp) {
      tmp2 = getInternalProperties;
      tmp = getInternalProperties(self);
    }
    if (tmp) {
      if (tmp["[[initializedDateTimeFormat]]"]) {
        if (undefined === tmp["[[boundFormat]]"]) {
          tmp4 = f123183;
          tmp["[[boundFormat]]"] = f123183.call(function F() {
            if (0 === arguments.length) {
              const _Date = Date;
              let timestamp = Date.now();
            } else {
              timestamp = arguments[0];
            }
            return outer1_46(this, Number(timestamp));
          }, self);
        }
        return tmp["[[boundFormat]]"];
      }
    }
    typeError = new TypeError("`this` value for format() is not an initialized Intl.DateTimeFormat object.");
    throw typeError;
  }
}
function FormatDateTime(__getInternalProperties, arg1) {
  let str3;
  let tmp23;
  let tmp39;
  if (isFinite(arg1)) {
    const result = __getInternalProperties.__getInternalProperties(closure_16);
    const tmp9 = createRegExpRestore();
    __locale__ = result["[[locale]]"];
    const NumberFormat = obj.NumberFormat;
    const items = [__locale__];
    obj = { useGrouping: false };
    const prototype2 = NumberFormat.prototype;
    const numberFormat = new NumberFormat(items, obj);
    const NumberFormat2 = obj.NumberFormat;
    const items1 = [__locale__];
    const prototype3 = NumberFormat2.prototype;
    const numberFormat2 = new NumberFormat2(items1, { minimumIntegerDigits: 2, useGrouping: false });
    ({ [[calendar]]: tmp23, [[timeZone]]: str3 } = result);
    const _Date = Date;
    const date = new Date(arg1);
    const text = `get${str3}`;
    obj = { "[[weekday]]": date[`get${str3}` + "Day"]() };
    const text1 = `get${str3}FullYear`;
    obj["[[era]]"] = +date[`get${str3}FullYear`]() >= 0;
    obj["[[year]]"] = date[`get${str3}FullYear`]();
    obj["[[month]]"] = date[`get${str3}` + "Month"]();
    obj["[[day]]"] = date[`get${str3}` + "Date"]();
    obj["[[hour]]"] = date[`get${str3}` + "Hours"]();
    obj["[[minute]]"] = date[`get${str3}` + "Minutes"]();
    obj["[[second]]"] = date[`get${str3}` + "Seconds"]();
    obj["[[inDST]]"] = false;
    const prototype5 = Record.prototype;
    const tmp35 = new Record(obj);
    __pattern__ = result["[[pattern]]"];
    const calendars = closure_15.DateTimeFormat["[[localeData]]"][result["[[dataLocale]]"]].calendars;
    __calendar__ = result["[[calendar]]"];
    let str26 = __pattern__;
    const keys = Object.keys();
    if (keys !== undefined) {
      str26 = __pattern__;
      while (keys[tmp] !== undefined) {
        let tmp88 = tmp43;
        let tmp89 = tmp43;
        let tmp90 = hasOwnProperty;
        if (!hasOwnProperty.call(result, "[[" + tmp43 + "]]")) {
          continue;
        } else {
          let tmp44 = tmp88;
          let tmp45 = result["[[" + tmp89 + "]]"];
          let tmp46 = tmp35;
          let tmp47 = tmp36["[[" + tmp89 + "]]"];
          if ("year" === tmp89) {
            if (tmp47 <= 0) {
              let diff = 1 - tmp47;
              tmp39 = tmp42;
              let tmp56 = tmp45;
              if ("numeric" === tmp45) {
                let tmp74 = FormatNumber;
                let str = FormatNumber(numberFormat, diff);
              } else {
                let tmp91 = tmp45;
                if ("2-digit" === tmp45) {
                  let tmp72 = FormatNumber;
                  let arr3 = FormatNumber(numberFormat2, diff);
                  str = arr3;
                  if (arr3.length > 2) {
                    let tmp73 = str;
                    str = str.slice(-2);
                  }
                } else {
                  let tmp92 = tmp45;
                  let tmp93 = closure_17;
                  if (tmp45 in closure_17) {
                    let tmp57 = tmp88;
                    if ("month" === tmp89) {
                      let tmp66 = resolveDateString;
                      let tmp67 = calendars;
                      let tmp68 = __calendar__;
                      let tmp69 = tmp45;
                      let tmp70 = tmp35;
                      let tmp71 = tmp88;
                      let str29 = "months";
                      str = resolveDateString(calendars, __calendar__, "months", tmp45, tmp36["[[" + tmp89 + "]]"]);
                    } else if ("weekday" === tmp89) {
                      let tmp60 = resolveDateString;
                      let tmp61 = calendars;
                      let tmp62 = __calendar__;
                      let tmp63 = tmp45;
                      let tmp64 = tmp35;
                      let tmp65 = tmp88;
                      let str28 = "days";
                      str = resolveDateString(calendars, __calendar__, "days", tmp45, tmp36["[[" + tmp89 + "]]"]);
                    } else if ("timeZoneName" === tmp89) {
                      str = "";
                    } else {
                      let tmp58 = tmp35;
                      let tmp59 = tmp88;
                      str = tmp36["[[" + tmp89 + "]]"];
                    }
                  }
                }
              }
              let tmp75 = tmp88;
              let tmp76 = str;
              __pattern__ = str27.replace(`{${tmp89}}`, str);
              let tmp77 = diff;
              continue;
            }
          }
          let tmp48 = tmp88;
          if ("month" === tmp89) {
            diff = tmp47 + 1;
            tmp39 = tmp42;
          } else {
            let tmp49 = tmp88;
            let tmp50 = "hour" === tmp89 && true === result["[[hour12]]"];
            tmp39 = tmp42;
            diff = tmp47;
            if (tmp50) {
              let num6 = tmp47 % 12;
              let tmp52 = tmp35;
              let tmp53 = tmp88;
              let tmp55 = 0 === num6;
              let tmp54 = num6 !== tmp36["[[" + tmp89 + "]]"];
              if (tmp55) {
                tmp55 = true === result["[[hourNo0]]"];
              }
              if (tmp55) {
                num6 = 12;
              }
              diff = num6;
              tmp39 = tmp54;
            }
          }
        }
        continue;
      }
      str27 = __pattern__;
      const tmp40 = tmp39;
    }
    let replaced = str26;
    if (true === result["[[hour12]]"]) {
      let str30 = "am";
      if (tmp40) {
        str30 = "pm";
      }
      const tmp79Result = resolveDateString(calendars, __calendar__, "dayPeriods", str30);
      replaced = str26.replace("{ampm}", tmp79Result);
      const tmp79 = resolveDateString;
      const tmp80 = calendars;
      const tmp81 = __calendar__;
    }
    const exp = tmp9.exp;
    const isMatch = exp.test(tmp9.input);
    return replaced;
  } else {
    const _RangeError = RangeError;
    const rangeError = new RangeError("Invalid valid date passed to format");
    throw rangeError;
  }
}
function supportedLocalesOf(arg0) {
  if (hasOwnProperty.call(this, "[[availableLocales]]")) {
    const tmp7 = createRegExpRestore();
    const exp = tmp7.exp;
    const isMatch = exp.test(tmp7.input);
    return SupportedLocales(this["[[availableLocales]]"], CanonicalizeLocaleList(arg0), arguments[1]);
  } else {
    const _TypeError = TypeError;
    const typeError = new TypeError("supportedLocalesOf() is not a constructor");
    throw typeError;
  }
}
function resolveDateString(calendars, __calendar__, days, arg3, arg4) {
  if (calendars[__calendar__]) {
    if (calendars[__calendar__][days]) {
      let tmp = calendars[__calendar__][days];
    }
    const obj = { narrow: ["short", "long"], short: ["long", "narrow"], long: ["short", "narrow"] };
    if (hasOwnProperty.call(tmp, arg3)) {
      let tmp5 = tmp[arg3];
    } else if (hasOwnProperty.call(tmp, obj[arg3][0])) {
      tmp5 = tmp[tmp4[0]];
    } else {
      tmp5 = tmp[tmp4[1]];
    }
    let tmp7 = tmp5;
    if (null != arg4) {
      tmp7 = tmp5[arg4];
    }
    return tmp7;
  }
  tmp = calendars.gregory[days];
}
class Record {
  constructor(arg0) {
    for (const key10005 in arg0) {
      tmp6 = key10005;
      tmp7 = Record;
      callResult = arg0 instanceof Record;
      if (callResult) {
      } else {
        tmp2 = hasOwnProperty;
        callResult = hasOwnProperty.call(arg0, key10005);
      }
      if (!callResult) {
        continue;
      } else {
        tmp4 = f123179;
        obj = { value: null, enumerable: true, writable: true, configurable: true };
        obj.value = arg0[key10005];
        tmp5 = f123179(tmp, key10005, obj);
        continue;
      }
      continue;
    }
    return;
  }
}
class List {
  constructor() {
    tmp = f123179(this, "length", { writable: true, value: 0 });
    if (arguments.length) {
      tmp2 = push;
      tmp3 = slice;
      tmp4 = arguments;
      applyResult = push.apply(this, slice.call(arguments));
    }
    return;
  }
}
function createRegExpRestore() {
  let tmp4;
  const tmp = /[.?*+^$[\]\\(){}|-]/g;
  let str2 = "";
  if (RegExp.multiline) {
    str2 = "m";
  }
  let obj = { input: RegExp.input };
  const tmp2 = new List();
  obj = {};
  let flag = false;
  let num = 1;
  do {
    let text = `$${num}`;
    let _RegExp = RegExp;
    tmp4 = RegExp[`$${num}`];
    obj[`$${num}`] = tmp4;
    if (!tmp4) {
      tmp4 = flag;
    }
    num = num + 1;
    flag = tmp4;
  } while (num <= 9);
  let str3 = RegExp.lastMatch || "".replace(tmp, "\\$&");
  let num2 = 1;
  let tmp5 = str3;
  if (tmp4) {
    do {
      let str4 = obj["$" + num2];
      if (str4) {
        let replaced = str4.replace(tmp, "\\$&");
        let replaced1 = str3.replace(replaced, `(${tmp6})`);
      } else {
        replaced1 = `()${str3}`;
      }
      let tmp7 = push;
      let callResult = push.call(tmp2, replaced1.slice(0, replaced1.indexOf("(") + 1));
      str3 = replaced1.slice(replaced1.indexOf("(") + 1);
      num2 = num2 + 1;
      tmp5 = str3;
    } while (num2 <= 9);
  }
  const regExp = new RegExp(join.call(tmp2, "") + tmp5, str2);
  obj.exp = regExp;
  return obj;
}
function toLatinUpperCase(timeZone) {
  let tmp10;
  let diff = tmp - 1;
  let str = timeZone;
  let tmp3 = timeZone;
  if (+timeZone.length) {
    do {
      let str2 = str.charAt(diff);
      let tmp4 = str2 >= "a";
      let tmp5 = str;
      let tmp6 = diff;
      if (tmp4) {
        tmp4 = str2 <= "z";
      }
      let sum1 = str;
      if (tmp4) {
        let substr = str.slice(0, diff);
        let sum = substr + str2.toUpperCase();
        sum1 = sum + str.slice(diff + 1);
      }
      tmp10 = +diff;
      diff = tmp10 - 1;
      str = sum1;
      tmp3 = sum1;
    } while (tmp10);
  }
  return tmp3;
}
function toObject(arg0) {
  if (null == arg0) {
    const _TypeError = TypeError;
    const typeError = new TypeError("Cannot convert null or undefined to object");
    throw typeError;
  } else {
    const _Object = Object;
    return Object(arg0);
  }
}
function getInternalProperties(self) {
  if (hasOwnProperty.call(self, "__getInternalProperties")) {
    let result = self.__getInternalProperties(closure_16);
  } else {
    result = tmp6(null);
  }
  return result;
}
let obj = {};
obj = {};
Object.defineProperty(obj, "a", {});
while (true) {
  let tmp3 = !tmp2;
  if (tmp2) {
    break;
  } else {
    let tmp4 = globalThis;
    let _Object = Object;
    tmp3 = !Object.prototype.__defineGetter__;
    break;
  }
  let closure_4 = tmp3;
  let tmp5 = globalThis;
  let _Object2 = Object;
  if (tmp2) {
    let _Object3 = Object;
    let fn = Object.defineProperty;
  } else {
    fn = (__defineGetter__, arg1, get) => {
      if ("get" in get) {
        if (__defineGetter__.__defineGetter__) {
          __defineGetter__.__defineGetter__(arg1, get.get);
        }
      }
      let callResult = hasOwnProperty.call(__defineGetter__, arg1);
      if (callResult) {
        callResult = !("value" in get);
      }
      if (!callResult) {
        __defineGetter__[arg1] = get.value;
      }
    };
  }
  let _Array = Array;
  let closure_7 = Array.prototype.indexOf || (function(arg0) {
    const self = this;
    if (this.length) {
      let sum = arguments[1] || 0;
      if (sum < self.length) {
        while (self[sum] !== arg0) {
          sum = sum + 1;
        }
        return sum;
      }
      return -1;
    } else {
      return -1;
    }
  });
  let _Object4 = Object;
  let tmp6 = Object.create || ((arg0, obj) => {
    class F {
      constructor() {
        return;
      }
    }
    F.prototype = arg0;
    const f = new F();
    for (const key10011 in arg1) {
      let tmp3 = key10011;
      class F {
        constructor() {
          return;
        }
      }
      if (!hasOwnProperty.call(arg1, key10011)) {
        continue;
      } else {
        let tmp2 = fn;
        class F {
          constructor() {
            return;
          }
        }
        continue;
      }
      continue;
    }
    return f;
  });
  let closure_8 = tmp6;
  class NumberFormatConstructor {
    constructor() {
      self = this;
      first = arguments[0];
      tmp2 = arguments[1];
      if (this) {
        tmp3 = closure_3;
        if (self !== closure_3) {
          tmp5 = InitializeNumberFormat;
          tmp6 = toObject;
          tmp7 = toObject(self);
          tmp8 = InitializeNumberFormat(tmp7, first, tmp2);
          numberFormat = tmp7;
        }
        return numberFormat;
      }
      numberFormat = new closure_3.NumberFormat(first, tmp2);
      return;
    }
  }
  let _Array2 = Array;
  class GetFormatNumber {
    constructor() {
      self = this;
      tmp = null != this;
      if (tmp) {
        str = "object";
        tmp = "object" === typeof self;
      }
      if (tmp) {
        tmp2 = getInternalProperties;
        tmp = getInternalProperties(self);
      }
      if (tmp) {
        if (tmp["[[initializedNumberFormat]]"]) {
          if (undefined === tmp["[[boundFormat]]"]) {
            tmp4 = f123183;
            tmp["[[boundFormat]]"] = f123183.call(function F(arg0) {
              return outer1_40(this, Number(arg0));
            }, self);
          }
          return tmp["[[boundFormat]]"];
        }
      }
      typeError = new TypeError("`this` value for format() is not an initialized Intl.NumberFormat object.");
      throw typeError;
    }
  }
  let _Array3 = Array;
  class DateTimeFormatConstructor {
    constructor() {
      self = this;
      first = arguments[0];
      tmp2 = arguments[1];
      if (this) {
        tmp3 = closure_3;
        if (self !== closure_3) {
          tmp5 = InitializeDateTimeFormat;
          tmp6 = toObject;
          tmp7 = toObject(self);
          tmp8 = InitializeDateTimeFormat(tmp7, first, tmp2);
          dateTimeFormat = tmp7;
        }
        return dateTimeFormat;
      }
      dateTimeFormat = new closure_3.DateTimeFormat(first, tmp2);
      return;
    }
  }
  let _Array4 = Array;
  let _Array5 = Array;
  class GetFormatDateTime {
    constructor() {
      self = this;
      tmp = null != this;
      if (tmp) {
        str = "object";
        tmp = "object" === typeof self;
      }
      if (tmp) {
        tmp2 = getInternalProperties;
        tmp = getInternalProperties(self);
      }
      if (tmp) {
        if (tmp["[[initializedDateTimeFormat]]"]) {
          if (undefined === tmp["[[boundFormat]]"]) {
            tmp4 = f123183;
            tmp["[[boundFormat]]"] = f123183.call(function F() {
              if (0 === arguments.length) {
                const _Date = Date;
                let timestamp = Date.now();
              } else {
                timestamp = arguments[0];
              }
              return outer1_46(this, Number(timestamp));
            }, self);
          }
          return tmp["[[boundFormat]]"];
        }
      }
      typeError = new TypeError("`this` value for format() is not an initialized Intl.DateTimeFormat object.");
      throw typeError;
    }
  }
  let _Function = Function;
  let obj2 = Function.prototype.bind || (function(arg0) {
    let closure_0 = arg0;
    const self = this;
    let closure_2 = slice.call(arguments, 1);
    return 1 === this.length ? ((arg0) => self.apply(closure_0, outer1_10.call(closure_2, outer1_9.call(arguments)))) : (() => self.apply(closure_0, outer1_10.call(closure_2, outer1_9.call(arguments))));
  });
  class Record {
    constructor(arg0) {
      for (const key10005 in arg0) {
        tmp6 = key10005;
        tmp7 = Record;
        callResult = arg0 instanceof Record;
        if (callResult) {
        } else {
          tmp2 = hasOwnProperty;
          callResult = hasOwnProperty.call(arg0, key10005);
        }
        if (!callResult) {
          continue;
        } else {
          tmp4 = f123179;
          obj = { value: null, enumerable: true, writable: true, configurable: true };
          obj.value = arg0[key10005];
          tmp5 = f123179(tmp, key10005, obj);
          continue;
        }
        continue;
      }
      return;
    }
  }
  let tmp6Result = tmp6(null);
  class List {
    constructor() {
      tmp = f123179(this, "length", { writable: true, value: 0 });
      if (arguments.length) {
        tmp2 = push;
        tmp3 = slice;
        tmp4 = arguments;
        applyResult = push.apply(this, slice.call(arguments));
      }
      return;
    }
  }
  let _Math = Math;
  let closure_16 = Math.random();
  obj = { narrow: {}, short: {}, long: {} };
  let closure_17 = tmp6(null, obj);
  let flag = false;
  let c18 = false;
  let c19 = false;
  let re20 = /^[A-Z]{3}$/;
  let re21 = /-u(?:-[0-9a-z]{2,8})+/gi;
  let obj1 = { tags: { "art-lojban": "jbo", "i-ami": "ami", "i-bnn": "bnn", "i-hak": "hak", "i-klingon": "tlh", "i-lux": "lb", "i-navajo": "nv", "i-pwn": "pwn", "i-tao": "tao", "i-tay": "tay", "i-tsu": "tsu", "no-bok": "nb", "no-nyn": "nn", "sgn-BE-FR": "sfb", "sgn-BE-NL": "vgt", "sgn-CH-DE": "sgg", "zh-guoyu": "cmn", "zh-hakka": "hak", "zh-min-nan": "nan", "zh-xiang": "hsn", "sgn-BR": "bzs", "sgn-CO": "csn", "sgn-DE": "gsg", "sgn-DK": "dsl", "sgn-ES": "ssp", "sgn-FR": "fsl", "sgn-GB": "bfi", "sgn-GR": "gss", "sgn-IE": "isg", "sgn-IT": "ise", "sgn-JP": "jsl", "sgn-MX": "mfs", "sgn-NI": "ncs", "sgn-NL": "dse", "sgn-NO": "nsl", "sgn-PT": "psr", "sgn-SE": "swl", "sgn-US": "ase", "sgn-ZA": "sfs", "zh-cmn": "cmn", "zh-cmn-Hans": "cmn-Hans", "zh-cmn-Hant": "cmn-Hant", "zh-gan": "gan", "zh-wuu": "wuu", "zh-yue": "yue" }, subtags: { BU: "MM", DD: "DE", FX: "FR", TP: "TL", YD: "YE", ZR: "CD", heploc: "alalc97", in: "id", iw: "he", ji: "yi", jw: "jv", mo: "ro", ayx: "nun", bjd: "drl", ccq: "rki", cjr: "mom", cka: "cmr", cmk: "xch", drh: "khk", drw: "prs", gav: "dev", hrr: "jal", ibi: "opa", kgh: "kml", lcq: "ppr", mst: "mry", myt: "mry", sca: "hle", tie: "ras", tkk: "twm", tlw: "weo", tnf: "prs", ybd: "rki", yma: "lrr" } };
  obj2 = { aao: ["aao", "ar"], abh: ["abh", "ar"], abv: ["abv", "ar"], acm: ["acm", "ar"], acq: ["acq", "ar"], acw: ["acw", "ar"], acx: ["acx", "ar"], acy: ["acy", "ar"], adf: ["adf", "ar"], ads: ["ads", "sgn"], aeb: ["aeb", "ar"], aec: ["aec", "ar"], aed: ["aed", "sgn"], aen: ["aen", "sgn"], afb: ["afb", "ar"], afg: ["afg", "sgn"], ajp: ["ajp", "ar"], apc: ["apc", "ar"], apd: ["apd", "ar"], arb: ["arb", "ar"], arq: ["arq", "ar"], ars: ["ars", "ar"], ary: ["ary", "ar"], arz: ["arz", "ar"], ase: ["ase", "sgn"], asf: ["asf", "sgn"], asp: ["asp", "sgn"], asq: ["asq", "sgn"], asw: ["asw", "sgn"], auz: ["auz", "ar"], avl: ["avl", "ar"], ayh: ["ayh", "ar"], ayl: ["ayl", "ar"], ayn: ["ayn", "ar"], ayp: ["ayp", "ar"], bbz: ["bbz", "ar"], bfi: ["bfi", "sgn"], bfk: ["bfk", "sgn"], bjn: ["bjn", "ms"], bog: ["bog", "sgn"], bqn: ["bqn", "sgn"], bqy: ["bqy", "sgn"], btj: ["btj", "ms"], bve: ["bve", "ms"], bvl: ["bvl", "sgn"], bvu: ["bvu", "ms"], bzs: ["bzs", "sgn"], cdo: ["cdo", "zh"], cds: ["cds", "sgn"], cjy: ["cjy", "zh"], cmn: ["cmn", "zh"], coa: ["coa", "ms"], cpx: ["cpx", "zh"], csc: ["csc", "sgn"], csd: ["csd", "sgn"], cse: ["cse", "sgn"], csf: ["csf", "sgn"], csg: ["csg", "sgn"], csl: ["csl", "sgn"], csn: ["csn", "sgn"], csq: ["csq", "sgn"], csr: ["csr", "sgn"], czh: ["czh", "zh"], czo: ["czo", "zh"], doq: ["doq", "sgn"], dse: ["dse", "sgn"], dsl: ["dsl", "sgn"], dup: ["dup", "ms"], ecs: ["ecs", "sgn"], esl: ["esl", "sgn"], esn: ["esn", "sgn"], eso: ["eso", "sgn"], eth: ["eth", "sgn"], fcs: ["fcs", "sgn"], fse: ["fse", "sgn"], fsl: ["fsl", "sgn"], fss: ["fss", "sgn"], gan: ["gan", "zh"], gds: ["gds", "sgn"], gom: ["gom", "kok"], gse: ["gse", "sgn"], gsg: ["gsg", "sgn"], gsm: ["gsm", "sgn"], gss: ["gss", "sgn"], gus: ["gus", "sgn"], hab: ["hab", "sgn"], haf: ["haf", "sgn"], hak: ["hak", "zh"], hds: ["hds", "sgn"], hji: ["hji", "ms"], hks: ["hks", "sgn"], hos: ["hos", "sgn"], hps: ["hps", "sgn"], hsh: ["hsh", "sgn"], hsl: ["hsl", "sgn"], hsn: ["hsn", "zh"], icl: ["icl", "sgn"], ils: ["ils", "sgn"], inl: ["inl", "sgn"], ins: ["ins", "sgn"], ise: ["ise", "sgn"], isg: ["isg", "sgn"], isr: ["isr", "sgn"], jak: ["jak", "ms"], jax: ["jax", "ms"], jcs: ["jcs", "sgn"], jhs: ["jhs", "sgn"], jls: ["jls", "sgn"], jos: ["jos", "sgn"], jsl: ["jsl", "sgn"], jus: ["jus", "sgn"], kgi: ["kgi", "sgn"], knn: ["knn", "kok"], kvb: ["kvb", "ms"], kvk: ["kvk", "sgn"], kvr: ["kvr", "ms"], kxd: ["kxd", "ms"], lbs: ["lbs", "sgn"], lce: ["lce", "ms"], lcf: ["lcf", "ms"], liw: ["liw", "ms"], lls: ["lls", "sgn"], lsg: ["lsg", "sgn"], lsl: ["lsl", "sgn"], lso: ["lso", "sgn"], lsp: ["lsp", "sgn"], lst: ["lst", "sgn"], lsy: ["lsy", "sgn"], ltg: ["ltg", "lv"], lvs: ["lvs", "lv"], lzh: ["lzh", "zh"], max: ["max", "ms"], mdl: ["mdl", "sgn"], meo: ["meo", "ms"], mfa: ["mfa", "ms"], mfb: ["mfb", "ms"], mfs: ["mfs", "sgn"], min: ["min", "ms"], mnp: ["mnp", "zh"], mqg: ["mqg", "ms"], mre: ["mre", "sgn"], msd: ["msd", "sgn"], msi: ["msi", "ms"], msr: ["msr", "sgn"], mui: ["mui", "ms"], mzc: ["mzc", "sgn"], mzg: ["mzg", "sgn"], mzy: ["mzy", "sgn"], nan: ["nan", "zh"], nbs: ["nbs", "sgn"], ncs: ["ncs", "sgn"], nsi: ["nsi", "sgn"], nsl: ["nsl", "sgn"], nsp: ["nsp", "sgn"], nsr: ["nsr", "sgn"], nzs: ["nzs", "sgn"], okl: ["okl", "sgn"], orn: ["orn", "ms"], ors: ["ors", "ms"], pel: ["pel", "ms"], pga: ["pga", "ar"], pks: ["pks", "sgn"], prl: ["prl", "sgn"], prz: ["prz", "sgn"], psc: ["psc", "sgn"], psd: ["psd", "sgn"], pse: ["pse", "ms"], psg: ["psg", "sgn"], psl: ["psl", "sgn"], pso: ["pso", "sgn"], psp: ["psp", "sgn"], psr: ["psr", "sgn"], pys: ["pys", "sgn"], rms: ["rms", "sgn"], rsi: ["rsi", "sgn"], rsl: ["rsl", "sgn"], sdl: ["sdl", "sgn"], sfb: ["sfb", "sgn"], sfs: ["sfs", "sgn"], sgg: ["sgg", "sgn"], sgx: ["sgx", "sgn"], shu: ["shu", "ar"], slf: ["slf", "sgn"], sls: ["sls", "sgn"], sqk: ["sqk", "sgn"], sqs: ["sqs", "sgn"], ssh: ["ssh", "ar"], ssp: ["ssp", "sgn"], ssr: ["ssr", "sgn"], svk: ["svk", "sgn"], swc: ["swc", "sw"], swh: ["swh", "sw"], swl: ["swl", "sgn"], syy: ["syy", "sgn"], tmw: ["tmw", "ms"], tse: ["tse", "sgn"], tsm: ["tsm", "sgn"], tsq: ["tsq", "sgn"], tss: ["tss", "sgn"], tsy: ["tsy", "sgn"], tza: ["tza", "sgn"], ugn: ["ugn", "sgn"], ugy: ["ugy", "sgn"], ukl: ["ukl", "sgn"], uks: ["uks", "sgn"], urk: ["urk", "ms"], uzn: ["uzn", "uz"], uzs: ["uzs", "uz"], vgt: ["vgt", "sgn"], vkk: ["vkk", "ms"], vkt: ["vkt", "ms"], vsi: ["vsi", "sgn"], vsl: ["vsl", "sgn"], vsv: ["vsv", "sgn"], wuu: ["wuu", "zh"], xki: ["xki", "sgn"], xml: ["xml", "sgn"], xmm: ["xmm", "ms"], xms: ["xms", "sgn"], yds: ["yds", "sgn"], ysl: ["ysl", "sgn"], yue: ["yue", "zh"], zib: ["zib", "sgn"], zlm: ["zlm", "ms"], zmi: ["zmi", "ms"], zsl: ["zsl", "sgn"], zsm: ["zsm", "ms"] };
  obj1.extLang = obj2;
  let closure_23 = { BHD: 3, BYR: 0, XOF: 0, BIF: 0, XAF: 0, CLF: 4, CLP: 0, KMF: 0, DJF: 0, XPF: 0, GNF: 0, ISK: 0, IQD: 3, JPY: 0, JOD: 3, KRW: 0, KWD: 3, LYD: 3, OMR: 3, PYG: 0, RWF: 0, TND: 3, UGX: 0, UYI: 0, VUV: 0, VND: 0 };
  let obj3 = { configurable: true, writable: true };
  let flag2 = true;
  obj3.value = NumberFormatConstructor;
  let str = "NumberFormat";
  let fnResult = fn(obj, "NumberFormat", obj3);
  let obj4 = { writable: false };
  let str2 = "prototype";
  let fnResult1 = fn(obj.NumberFormat, "prototype", obj4);
  let obj5 = { "[[availableLocales]]": [], "[[relevantExtensionKeys]]": ["nu"], "[[localeData]]": {} };
  tmp6Result.NumberFormat = obj5;
  let obj6 = { configurable: true, writable: true, value: obj2.call(supportedLocalesOf, tmp6Result.NumberFormat) };
  let str3 = "supportedLocalesOf";
  let fnResult2 = fn(obj.NumberFormat, "supportedLocalesOf", obj6);
  let obj7 = { configurable: true, get: GetFormatNumber };
  let str4 = "format";
  let fnResult3 = fn(obj.NumberFormat.prototype, "format", obj7);
  let obj8 = { arab: ["\u0660", "\u0661", "\u0662", "\u0663", "\u0664", "\u0665", "\u0666", "\u0667", "\u0668", "\u0669"], arabext: ["\u06F0", "\u06F1", "\u06F2", "\u06F3", "\u06F4", "\u06F5", "\u06F6", "\u06F7", "\u06F8", "\u06F9"], bali: ["\u1B50", "\u1B51", "\u1B52", "\u1B53", "\u1B54", "\u1B55", "\u1B56", "\u1B57", "\u1B58", "\u1B59"], beng: ["\u09E6", "\u09E7", "\u09E8", "\u09E9", "\u09EA", "\u09EB", "\u09EC", "\u09ED", "\u09EE", "\u09EF"], deva: ["\u0966", "\u0967", "\u0968", "\u0969", "\u096A", "\u096B", "\u096C", "\u096D", "\u096E", "\u096F"], fullwide: ["\uFF10", "\uFF11", "\uFF12", "\uFF13", "\uFF14", "\uFF15", "\uFF16", "\uFF17", "\uFF18", "\uFF19"], gujr: ["\u0AE6", "\u0AE7", "\u0AE8", "\u0AE9", "\u0AEA", "\u0AEB", "\u0AEC", "\u0AED", "\u0AEE", "\u0AEF"], guru: ["\u0A66", "\u0A67", "\u0A68", "\u0A69", "\u0A6A", "\u0A6B", "\u0A6C", "\u0A6D", "\u0A6E", "\u0A6F"], hanidec: ["\u3007", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D", "\u4E03", "\u516B", "\u4E5D"], khmr: ["\u17E0", "\u17E1", "\u17E2", "\u17E3", "\u17E4", "\u17E5", "\u17E6", "\u17E7", "\u17E8", "\u17E9"], knda: ["\u0CE6", "\u0CE7", "\u0CE8", "\u0CE9", "\u0CEA", "\u0CEB", "\u0CEC", "\u0CED", "\u0CEE", "\u0CEF"], laoo: ["\u0ED0", "\u0ED1", "\u0ED2", "\u0ED3", "\u0ED4", "\u0ED5", "\u0ED6", "\u0ED7", "\u0ED8", "\u0ED9"], latn: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], limb: ["\u1946", "\u1947", "\u1948", "\u1949", "\u194A", "\u194B", "\u194C", "\u194D", "\u194E", "\u194F"], mlym: ["\u0D66", "\u0D67", "\u0D68", "\u0D69", "\u0D6A", "\u0D6B", "\u0D6C", "\u0D6D", "\u0D6E", "\u0D6F"], mong: ["\u1810", "\u1811", "\u1812", "\u1813", "\u1814", "\u1815", "\u1816", "\u1817", "\u1818", "\u1819"], mymr: ["\u1040", "\u1041", "\u1042", "\u1043", "\u1044", "\u1045", "\u1046", "\u1047", "\u1048", "\u1049"], orya: ["\u0B66", "\u0B67", "\u0B68", "\u0B69", "\u0B6A", "\u0B6B", "\u0B6C", "\u0B6D", "\u0B6E", "\u0B6F"], tamldec: ["\u0BE6", "\u0BE7", "\u0BE8", "\u0BE9", "\u0BEA", "\u0BEB", "\u0BEC", "\u0BED", "\u0BEE", "\u0BEF"], telu: ["\u0C66", "\u0C67", "\u0C68", "\u0C69", "\u0C6A", "\u0C6B", "\u0C6C", "\u0C6D", "\u0C6E", "\u0C6F"], thai: ["\u0E50", "\u0E51", "\u0E52", "\u0E53", "\u0E54", "\u0E55", "\u0E56", "\u0E57", "\u0E58", "\u0E59"], tibt: ["\u0F20", "\u0F21", "\u0F22", "\u0F23", "\u0F24", "\u0F25", "\u0F26", "\u0F27", "\u0F28", "\u0F29"] };
  let obj9 = {
    configurable: true,
    writable: true,
    value() {
        const self = this;
        const tmp = new Record();
        const items = ["locale", "numberingSystem", "style", "currency", "currencyDisplay", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "useGrouping"];
        let tmp2 = null != this;
        if (tmp2) {
          tmp2 = "object" === typeof self;
        }
        if (tmp2) {
          tmp2 = getInternalProperties(self);
        }
        if (tmp2) {
          if (tmp2["[[initializedNumberFormat]]"]) {
            let num = 0;
            if (0 < items.length) {
              do {
                let tmp5 = hasOwnProperty;
                let text = `${"[[" + arr[num]}]]`;
                if (hasOwnProperty.call(tmp2, `${"[[" + arr[num]}]]`)) {
                  let obj = { value: tmp2[`${"[[" + arr[num]}]]`], writable: true, configurable: true, enumerable: true };
                  tmp[items[num]] = obj;
                }
                num = num + 1;
              } while (num < length);
            }
            return tmp6({}, tmp);
          }
        }
        const typeError = new TypeError("`this` value for resolvedOptions() is not an initialized Intl.NumberFormat object.");
        throw typeError;
      }
  };
  let str5 = "resolvedOptions";
  let fnResult4 = fn(obj.NumberFormat.prototype, "resolvedOptions", obj9);
  let obj10 = { configurable: true, writable: true, value: DateTimeFormatConstructor };
  let str6 = "DateTimeFormat";
  let fnResult5 = fn(obj, "DateTimeFormat", obj10);
  let obj11 = { writable: false };
  let fnResult6 = fn(DateTimeFormatConstructor, "prototype", obj11);
  let obj12 = { weekday: ["narrow", "short", "long"], era: ["narrow", "short", "long"], year: ["2-digit", "numeric"], month: ["2-digit", "numeric", "narrow", "short", "long"], day: ["2-digit", "numeric"], hour: ["2-digit", "numeric"], minute: ["2-digit", "numeric"], second: ["2-digit", "numeric"], timeZoneName: ["short", "long"] };
  let obj13 = { "[[availableLocales]]": [], "[[relevantExtensionKeys]]": ["ca", "nu"], "[[localeData]]": {} };
  tmp6Result.DateTimeFormat = obj13;
  let obj14 = { configurable: true, writable: true, value: obj2.call(supportedLocalesOf, tmp6Result.DateTimeFormat) };
  let fnResult7 = fn(obj.DateTimeFormat, "supportedLocalesOf", obj14);
  let obj15 = { configurable: true, get: GetFormatDateTime };
  let fnResult8 = fn(obj.DateTimeFormat.prototype, "format", obj15);
  let obj16 = {
    writable: true,
    configurable: true,
    value() {
        const self = this;
        const tmp = new Record();
        const items = ["locale", "calendar", "numberingSystem", "timeZone", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName"];
        let tmp2 = null != this;
        if (tmp2) {
          tmp2 = "object" === typeof self;
        }
        if (tmp2) {
          tmp2 = getInternalProperties(self);
        }
        if (tmp2) {
          if (tmp2["[[initializedDateTimeFormat]]"]) {
            let num = 0;
            if (0 < items.length) {
              do {
                let tmp5 = hasOwnProperty;
                let text = `${"[[" + arr[num]}]]`;
                if (hasOwnProperty.call(tmp2, `${"[[" + arr[num]}]]`)) {
                  let obj = { value: tmp2[`${"[[" + arr[num]}]]`], writable: true, configurable: true, enumerable: true };
                  tmp[items[num]] = obj;
                }
                num = num + 1;
              } while (num < length);
            }
            return tmp6({}, tmp);
          }
        }
        const typeError = new TypeError("`this` value for resolvedOptions() is not an initialized Intl.DateTimeFormat object.");
        throw typeError;
      }
  };
  let fnResult9 = fn(obj.DateTimeFormat.prototype, "resolvedOptions", obj16);
  let obj17 = { Number: {}, Date: {} };
  obj.__localeSensitiveProtos = obj17;
  obj17.Number.toLocaleString = function() {
    if ("[object Number]" !== toString.call(this)) {
      const _TypeError = TypeError;
      const typeError = new TypeError("`this` value must be a number for Number.prototype.toLocaleString()");
      throw typeError;
    } else {
      const prototype = NumberFormatConstructor.prototype;
      const tmp5 = new NumberFormatConstructor(arguments[0], arguments[1]);
      return FormatNumber(tmp5, this);
    }
  };
  obj17.Date.toLocaleString = function() {
    if ("[object Date]" !== toString.call(this)) {
      const _TypeError = TypeError;
      const typeError = new TypeError("`this` value must be a Date instance for Date.prototype.toLocaleString()");
      throw typeError;
    } else {
      const _isNaN = isNaN;
      let str = "Invalid Date";
      if (!isNaN(+this)) {
        const first = arguments[0];
        const prototype = DateTimeFormatConstructor.prototype;
        const tmp9 = new DateTimeFormatConstructor(first, ToDateTimeOptions(arguments[1], "any", "all"));
        str = FormatDateTime(tmp9, tmp);
      }
      return str;
    }
  };
  obj17.Date.toLocaleDateString = function() {
    if ("[object Date]" !== toString.call(this)) {
      const _TypeError = TypeError;
      const typeError = new TypeError("`this` value must be a Date instance for Date.prototype.toLocaleDateString()");
      throw typeError;
    } else {
      const _isNaN = isNaN;
      let str = "Invalid Date";
      if (!isNaN(+this)) {
        const first = arguments[0];
        const prototype = DateTimeFormatConstructor.prototype;
        const tmp9 = new DateTimeFormatConstructor(first, ToDateTimeOptions(arguments[1], "date", "date"));
        str = FormatDateTime(tmp9, tmp);
      }
      return str;
    }
  };
  obj17.Date.toLocaleTimeString = function() {
    if ("[object Date]" !== toString.call(this)) {
      const _TypeError = TypeError;
      const typeError = new TypeError("`this` value must be a Date instance for Date.prototype.toLocaleTimeString()");
      throw typeError;
    } else {
      const _isNaN = isNaN;
      let str = "Invalid Date";
      if (!isNaN(+this)) {
        const first = arguments[0];
        const prototype = DateTimeFormatConstructor.prototype;
        const tmp9 = new DateTimeFormatConstructor(first, ToDateTimeOptions(arguments[1], "time", "time"));
        str = FormatDateTime(tmp9, tmp);
      }
      return str;
    }
  };
  let obj18 = {
    writable: true,
    configurable: true,
    value() {
        let obj = { writable: true, configurable: true, value: obj17.Number.toLocaleString };
        fn(Number.prototype, "toLocaleString", obj);
        obj = { writable: true, configurable: true, value: obj17.Date.toLocaleString };
        fn(Date.prototype, "toLocaleString", obj);
        for (const key10022 in obj17.Date) {
          let tmp6 = key10022;
          let tmp7 = hasOwnProperty;
          let tmp8 = obj17;
          if (!hasOwnProperty.call(obj17.Date, key10022)) {
            continue;
          } else {
            let tmp3 = fn;
            let _Date = Date;
            obj = { writable: true, configurable: true };
            let tmp4 = obj17;
            obj.value = obj17.Date[key10022];
            let tmp5 = fn(Date.prototype, key10022, obj);
            continue;
          }
          continue;
        }
      }
  };
  let str7 = "__applyLocaleSensitivePrototypes";
  let fnResult10 = fn(obj, "__applyLocaleSensitivePrototypes", obj18);
  let obj19 = {
    value(locale) {
        if (IsStructurallyValidLanguageTag(locale.locale)) {
          const str2 = locale.locale;
          if (locale.number) {
            const items = [str2];
            const parts = str2.split("-");
            let tmp11 = parts.length > 2;
            if (tmp11) {
              tmp11 = 4 === parts[1].length;
            }
            if (tmp11) {
              push.call(items, `${arr2[0]}-${arr2[2]}`);
            }
            let callResult1 = shift.call(items);
            while (callResult1) {
              let tmp16 = push;
              let tmp17 = closure_15;
              let callResult2 = push.call(closure_15.NumberFormat["[[availableLocales]]"], callResult1);
              let tmp19 = closure_15;
              closure_15.NumberFormat["[[localeData]]"][callResult1] = locale.number;
              let tmp20 = callResult1;
              if (locale.date) {
                locale.date.nu = locale.number.nu;
                let tmp21 = push;
                let tmp22 = closure_15;
                let callResult3 = push.call(closure_15.DateTimeFormat["[[availableLocales]]"], callResult1);
                let tmp24 = closure_15;
                closure_15.DateTimeFormat["[[localeData]]"][callResult1] = locale.date;
              }
              let tmp25 = shift;
              callResult1 = shift.call(items);
            }
            if (!c18) {
              InitializeNumberFormat(obj.NumberFormat.prototype);
              c18 = true;
            }
            let date = locale.date;
            if (date) {
              date = !c19;
            }
            if (date) {
              InitializeDateTimeFormat(obj.DateTimeFormat.prototype);
              c19 = true;
            }
          } else {
            const _Error2 = Error;
            const error = new Error("Object passed doesn't contain locale data for Intl.NumberFormat");
            throw error;
          }
        } else {
          const _Error = Error;
          const error1 = new Error("Object passed doesn't identify itself with a valid language tag");
          throw error1;
        }
      }
  };
  let str8 = "__addLocaleData";
  let fnResult11 = fn(obj, "__addLocaleData", obj19);
  Record.prototype = tmp6(null);
  List.prototype = tmp6(null);
  let tmp20 = arg5;
  arg5.default = obj;
}

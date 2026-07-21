// Module ID: 15816
// Function ID: 120884
// Name: IsStructurallyValidLanguageTag
// Dependencies: [653, 15830]

// Module 15816 (IsStructurallyValidLanguageTag)
function IsStructurallyValidLanguageTag(StringResult1) {
  const expBCP47Syntax = arg1(arg6[0]).expBCP47Syntax;
  const tmp = !expBCP47Syntax.test(StringResult1);
  let tmp2 = !tmp;
  if (!tmp) {
    const expVariantDupes = arg1(arg6[0]).expVariantDupes;
    let tmp5 = !expVariantDupes.test(StringResult1);
    if (tmp5) {
      const expSingletonDupes = arg1(arg6[0]).expSingletonDupes;
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
  const match = str5.match(arg1(arg6[0]).expExtSequences);
  let tmp2 = match;
  if (match) {
    tmp2 = match.length > 1;
  }
  let replaced = str5;
  if (tmp2) {
    const sorted = match.sort();
    const _RegExp = RegExp;
    replaced = str5.replace(RegExp(`(?:${closure_0(closure_1[0]).expExtSequences.source})+`, "i"), join.call(match, ""));
    const RegExpResult = RegExp(`(?:${closure_0(closure_1[0]).expExtSequences.source})+`, "i");
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
      let tmp13 = closure_5;
      let tmp14 = closure_22;
      if (closure_5.call(closure_22.subtags, tmp11[num2])) {
        let tmp28 = closure_22;
        tmp11[num2] = closure_22.subtags[tmp11[num2]];
        let tmp17 = tmp11;
        let tmp18 = num2;
        tmp19 = length2;
      } else {
        let tmp15 = closure_5;
        let tmp16 = closure_22;
        tmp17 = tmp11;
        tmp18 = num2;
        tmp19 = length2;
        if (closure_5.call(closure_22.extLang, tmp11[num2])) {
          let tmp20 = closure_22;
          tmp11[num2] = closure_22.extLang[tmp11[num2]][0];
          let tmp21 = 1 === num2;
          if (tmp21) {
            let tmp22 = closure_22;
            tmp21 = closure_22.extLang[tmp11[1]][1] === tmp11[0];
          }
          let callResult = tmp11;
          let sum = num2;
          let diff = length2;
          if (tmp21) {
            let tmp26 = closure_9;
            let tmp27 = +num2;
            sum = tmp27 + 1;
            callResult = closure_9.call(tmp11, tmp27);
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
      // continue
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
    tmp8.[[locale]] = tmp2;
    const _String2 = String;
    const _String3 = String;
    if (StringResult !== String(tmp)) {
      tmp8.[[extension]] = str.match(closure_21)[0];
      tmp8.[[extensionIndex]] = str.indexOf("-u-");
    }
    const StringResult = String(str);
  } else {
    tmp8.[[locale]] = closure_2;
  }
  return tmp8;
}
function ResolveLocale(arg0, arg1, [[localeMatcher]]) {
  if (0 === arg0.length) {
    const _ReferenceError = ReferenceError;
    const referenceError = new ReferenceError("No locale data has been provided for this object yet.");
    throw referenceError;
  } else {
    if ("lookup" === __localeMatcher__.[[localeMatcher]]) {
      let tmp2 = LookupMatcher(arg0, arg1);
    } else {
      tmp2 = LookupMatcher(arg0, arg1);
    }
    if (hasOwnProperty.call(tmp2, "[[extension]]")) {
      [[extensionIndex]] = tmp2.[[extensionIndex]];
      const _String = String;
      const callResult = split.call(tmp2.[[extension]], "-");
      const length = callResult.length;
    }
    const prototype = Record.prototype;
    const tmp10 = new Record();
    tmp10.[[dataLocale]] = tmp2.[[locale]];
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
        let tmp22 = closure_5;
        let tmp23 = str11;
        let str13 = str12;
        if (closure_5.call(__localeMatcher__, `[[${tmp13}]]`)) {
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
        let tmp12 = tmp16;
        str10 = str4;
      } while (num4 < length2);
    }
    let sum1 = str;
    if (str10.length > 2) {
      const sum = str.substring(0, __extensionIndex__) + str10;
      sum1 = sum + str.substring(__extensionIndex__);
    }
    tmp10.[[locale]] = sum1;
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
      let tmp22 = closure_5;
      if (!closure_5.call(tmp11, key10026)) {
        continue;
      } else {
        let tmp13 = closure_6;
        let obj = { "": null, "": null, value: tmp11[key10026] };
        let tmp14 = closure_6(tmp11, key10026, obj);
        // continue
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
function InitializeNumberFormat(self) {
  const tmp = getInternalProperties(self);
  const arg1 = tmp;
  const tmp2 = createRegExpRestore();
  if (true === tmp.[[initializedIntlObject]]) {
    const _TypeError2 = TypeError;
    const typeError = new TypeError("`this` object has already been initialized as an Intl object");
    throw typeError;
  } else {
    let obj = {
      value() {
          if (arguments[0] === closure_16) {
            return tmp;
          }
        }
    };
    fn(self, "__getInternalProperties", obj);
    tmp.[[initializedIntlObject]] = true;
    const tmp88 = CanonicalizeLocaleList(arg1);
    if (undefined === arg2) {
      obj = {};
    } else {
      obj = toObject(arg2);
    }
    const prototype = Record.prototype;
    const tmp7 = new Record();
    const prototype2 = List.prototype;
    const tmp13 = new List("lookup", "best fit");
    tmp7.[[localeMatcher]] = GetOption(obj, "localeMatcher", "string", tmp13, "best fit");
    [[localeData]] = closure_15.NumberFormat.[[localeData]];
    const tmp23 = ResolveLocale(closure_15.NumberFormat.[[availableLocales]], tmp88, tmp7, closure_15.NumberFormat.[[relevantExtensionKeys]], __localeData__);
    ({ [[locale]]: tmp.[[locale]], [[nu]]: tmp.[[numberingSystem]], [[dataLocale]]: tmp.[[dataLocale]] } = tmp23);
    const prototype3 = List.prototype;
    const tmp26 = new List("decimal", "percent", "currency");
    const tmp29 = GetOption(obj, "style", "string", tmp26, "decimal");
    tmp.[[style]] = tmp29;
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
      tmp.[[currency]] = formatted;
      let num = 2;
      if (undefined !== closure_23[formatted]) {
        num = closure_23[formatted];
      }
    }
    const prototype5 = List.prototype;
    const tmp47 = new List("code", "symbol", "name");
    if ("currency" === tmp29) {
      tmp.[[currencyDisplay]] = GetOption(tmp30, "currencyDisplay", "string", tmp47, "symbol");
    }
    tmp.[[minimumIntegerDigits]] = GetNumberOption(obj, "minimumIntegerDigits", 1, 21, 1);
    let num8 = 0;
    if ("currency" === tmp29) {
      num8 = tmp39;
    }
    const tmp50Result = GetNumberOption(obj, "minimumFractionDigits", 0, 20, num8);
    tmp.[[minimumFractionDigits]] = tmp50Result;
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
    tmp.[[maximumFractionDigits]] = GetNumberOption(obj, "maximumFractionDigits", tmp50Result, 20, bound);
    if (!tmp63) {
      const tmp66 = GetNumberOption(tmp30, "minimumSignificantDigits", 1, 21, 1);
      tmp.[[minimumSignificantDigits]] = tmp66;
      tmp.[[maximumSignificantDigits]] = GetNumberOption(tmp30, "maximumSignificantDigits", tmp66, 21, 21);
    }
    tmp.[[useGrouping]] = GetOption(obj, "useGrouping", "boolean", undefined, true);
    ({ positivePattern: tmp.[[positivePattern]], negativePattern: tmp.[[negativePattern]] } = __localeData__[tmp23.[[dataLocale]]].patterns[tmp29]);
    tmp.[[boundFormat]] = undefined;
    tmp.[[initializedNumberFormat]] = true;
    if (tmp3) {
      self.format = GetFormatNumber.call(self);
    }
    const exp = tmp2.exp;
    const isMatch = exp.test(tmp2.input);
    return self;
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
      if (tmp.[[initializedNumberFormat]]) {
        if (undefined === tmp.[[boundFormat]]) {
          tmp4 = f120923;
          tmp.[[boundFormat]] = f120923.call(function F(arg0) {
            return callback(this, Number(arg0));
          }, self);
        }
        return tmp.[[boundFormat]];
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
  [[numberingSystem]] = tmp2.[[numberingSystem]];
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
    if ("percent" === tmp2.[[style]]) {
      result = tmp5 * 100;
    }
    if (hasOwnProperty.call(tmp2, "[[minimumSignificantDigits]]")) {
      if (hasOwnProperty.call(tmp2, "[[maximumSignificantDigits]]")) {
        let sum1 = function ToRawPrecision(result, [[minimumSignificantDigits]], [[maximumSignificantDigits]]) {
          if (0 === result) {
            const _Array = Array;
            let callResult = callback.call(Array(__maximumSignificantDigits__ + 1), "0");
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
            return callResult + callback.call(Array(num - __maximumSignificantDigits__ + 1 + 1), "0");
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
        }(result, tmp2.[[minimumSignificantDigits]], tmp2.[[maximumSignificantDigits]]);
      }
      if (obj8[__numberingSystem__]) {
        let closure_0 = obj8[tmp2.[[numberingSystem]]];
        const _String2 = String;
        let str13 = String(sum1).replace(/\d/g, (arg0) => closure_0[arg0]);
        const str14 = String(sum1);
      } else {
        const _String = String;
        str13 = String(sum1);
      }
      const str15 = str13.replace(/\./g, tmp4.decimal);
      nan = str15;
      flag3 = flag;
      if (true === tmp2.[[useGrouping]]) {
        const parts = str15.split(tmp4.decimal);
        const first = parts[0];
        if (first.length > (tmp3.patterns.primaryGroupSize || 3)) {
          const prototype = List.prototype;
          const tmp41 = new List();
          diff = first.length - tmp22;
          let result1 = diff % tmp23;
          const substr = first.slice(0, result1);
          if (substr.length) {
            push.call(tmp41, substr);
          }
          if (result1 < diff) {
            do {
              let tmp26 = closure_11;
              let callResult1 = closure_11.call(tmp41, first.slice(result1, result1 + tmp23));
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
    const _Number = Number;
    const str4 = toFixed.call(result, tmp10);
    let length = str4.split(".")[0].length;
    let diff1 = tmp10 - tmp2.[[minimumFractionDigits]];
    const index = str4.indexOf("e");
    let num3 = 0;
    if (index > -1) {
      num3 = str4.slice(index + 1);
    }
    let arr = str4;
    if (num3) {
      const replaced = str4.slice(0, index).replace(".", "");
      const _Array = Array;
      const call = join.call;
      const _Array2 = Array;
      const text = `${call(Array(num3 - (arr2.length - 1) + 1), "0")}.`;
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
      const _Array3 = Array;
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
  if ("currency" === tmp2.[[style]]) {
    [[currency]] = tmp2.[[currency]];
    let tmp34 = tmp3.currencies[__currency__];
    let tmp35 = __currency__;
    if ("symbol" === tmp2.[[currencyDisplay]]) {
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
  first = tmp;
  const tmp2 = createRegExpRestore();
  if (true === tmp.[[initializedIntlObject]]) {
    const _TypeError = TypeError;
    const typeError = new TypeError("`this` object has already been initialized as an Intl object");
    throw typeError;
  } else {
    let obj = {
      value() {
          if (arguments[0] === closure_16) {
            return tmp;
          }
        }
    };
    fn(prototype, "__getInternalProperties", obj);
    tmp.[[initializedIntlObject]] = true;
    const tmp50 = CanonicalizeLocaleList(first);
    const tmp53 = ToDateTimeOptions(arg2, "any", "date");
    const prototype5 = Record.prototype;
    const tmp57 = new Record();
    const prototype6 = List.prototype;
    const tmp63 = new List("lookup", "best fit");
    tmp57.[[localeMatcher]] = GetOption(tmp53, "localeMatcher", "string", tmp63, "best fit");
    const DateTimeFormat = closure_15.DateTimeFormat;
    [[localeData]] = DateTimeFormat.[[localeData]];
    const tmp71 = ResolveLocale(DateTimeFormat.[[availableLocales]], tmp50, tmp57, DateTimeFormat.[[relevantExtensionKeys]], __localeData__);
    ({ [[locale]]: tmp.[[locale]], [[ca]]: tmp.[[calendar]], [[nu]]: tmp.[[numberingSystem]], [[dataLocale]]: tmp.[[dataLocale]] } = tmp71);
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
    tmp.[[timeZone]] = tmp4;
    prototype = Record.prototype;
    const tmp8 = new Record();
    for (const key10021 in closure_25) {
      let tmp73 = closure_5;
      let tmp74 = closure_25;
      let tmp72 = key10021;
      if (!closure_5.call(closure_25, key10021)) {
        continue;
      } else {
        let tmp11 = closure_35;
        let tmp12 = closure_25;
        let tmp13 = tmp53;
        let tmp14 = key10021;
        let str4 = "string";
        tmp8["[[" + key10021 + "]]"] = closure_35(tmp53, tmp72, "string", closure_25[key10021]);
        // continue
      }
      continue;
    }
    const formats = tmp15.formats;
    const _Object = Object;
    let dateTimeFormats = formats;
    if ("[object Array]" !== toString.call(formats)) {
      obj = first(arg6[1]);
      dateTimeFormats = obj.createDateTimeFormats(formats);
    }
    const prototype2 = List.prototype;
    const tmp24 = new List("basic", "best fit");
    __localeData__[tmp71.[[dataLocale]]].formats = dateTimeFormats;
    if ("basic" === GetOption(tmp53, "formatMatcher", "string", tmp24, "best fit")) {
      let tmp28 = calculateScore(tmp8, dateTimeFormats);
    } else {
      tmp28 = calculateScore(tmp8, dateTimeFormats, true);
    }
    for (const key10069 in closure_25) {
      let tmp75 = key10069;
      let tmp76 = closure_5;
      let tmp77 = closure_25;
      if (!closure_5.call(closure_25, key10069)) {
        continue;
      } else {
        let tmp31 = closure_5;
        if (!closure_5.call(tmp28, key10069)) {
          continue;
        } else {
          tmp["[[" + key10069 + "]]"] = tmp28[key10069];
          // continue
        }
        continue;
      }
      continue;
    }
    let hour12 = GetOption(tmp53, "hour12", "boolean");
    if (tmp.[[hour]]) {
      if (undefined === hour12) {
        hour12 = tmp15.hour12;
      }
      tmp.[[hour12]] = hour12;
      if (true === hour12) {
        tmp.[[hourNo0]] = tmp15.hourNo0;
        let pattern = tmp28.pattern12;
      } else {
        pattern = tmp28.pattern;
      }
    } else {
      pattern = tmp28.pattern;
    }
    tmp.[[pattern]] = pattern;
    tmp.[[boundFormat]] = undefined;
    tmp.[[initializedDateTimeFormat]] = true;
    if (tmp3) {
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
        // continue
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
      let tmp9 = closure_25;
      let tmp10 = tmp3;
      let tmp11 = tmp4;
      let tmp12 = tmp5;
      let tmp13 = tmp6;
      let num3 = 0;
      let num4 = 0;
      let keys = Object.keys();
      if (keys !== undefined) {
        let tmp15 = num3;
        let tmp3 = tmp10;
        let tmp16 = tmp13;
        num4 = num3;
        let tmp4 = tmp11;
        let tmp5 = tmp12;
        let tmp6 = tmp13;
        let tmp17 = keys[tmp];
        while (tmp17 !== undefined) {
          let tmp30 = tmp17;
          let tmp31 = closure_5;
          let tmp32 = closure_25;
          tmp10 = tmp17;
          if (!closure_5.call(closure_25, tmp17)) {
            continue;
          } else {
            let tmp18 = arg0["[[" + tmp17 + "]]"];
            let tmp19 = closure_5;
            let tmp20;
            if (closure_5.call(tmp8, tmp17)) {
              tmp20 = tmp8[tmp17];
            }
            if (undefined === tmp18) {
              if (undefined !== tmp20) {
                num3 = tmp15 - 20;
                tmp10 = tmp17;
                tmp11 = tmp18;
                tmp12 = tmp20;
                tmp13 = tmp16;
                // continue
              }
            }
            if (undefined !== tmp18) {
              if (undefined === tmp20) {
                num3 = tmp15 - 120;
                tmp10 = tmp17;
                tmp11 = tmp18;
                tmp12 = tmp20;
                tmp13 = tmp16;
                // continue
              }
            }
            let items = [false, false, false, false, false];
            let tmp21 = closure_7;
            let tmp23 = closure_7;
            let callResult = closure_7.call(items, tmp18);
            let _Math = Math;
            let _Math2 = Math;
            let bound = Math.max(Math.min(closure_7.call(items, tmp20) - callResult, 2), -2);
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
              // continue
            } else {
              if (1 === bound) {
                num3 = diff - 3;
                tmp10 = tmp17;
                tmp11 = tmp18;
                tmp12 = tmp20;
                tmp13 = bound;
                // continue
              } else {
                if (-1 === bound) {
                  num3 = diff - 6;
                  tmp10 = tmp17;
                  tmp11 = tmp18;
                  tmp12 = tmp20;
                  tmp13 = bound;
                  // continue
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
                    // continue
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
      if (tmp.[[initializedDateTimeFormat]]) {
        if (undefined === tmp.[[boundFormat]]) {
          tmp4 = f120923;
          tmp.[[boundFormat]] = f120923.call(function F() {
            if (0 === arguments.length) {
              const _Date = Date;
              let timestamp = Date.now();
            } else {
              timestamp = arguments[0];
            }
            return closure_46(this, Number(timestamp));
          }, self);
        }
        return tmp.[[boundFormat]];
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
    [[locale]] = result.[[locale]];
    const NumberFormat = obj.NumberFormat;
    const items = [__locale__];
    let obj = { useGrouping: false };
    const prototype2 = NumberFormat.prototype;
    const numberFormat = new NumberFormat(items, obj);
    const NumberFormat2 = obj.NumberFormat;
    const items1 = [__locale__];
    const prototype3 = NumberFormat2.prototype;
    const numberFormat2 = new NumberFormat2(items1, {});
    ({ [[calendar]]: tmp23, [[timeZone]]: str3 } = result);
    const _Date = Date;
    const date = new Date(arg1);
    const text = `get${str3}`;
    obj = { [[weekday]]: date[`get${str3}` + "Day"]() };
    const text1 = `get${str3}FullYear`;
    obj.[[era]] = +date[`get${str3}FullYear`]() >= 0;
    obj.[[year]] = date[`get${str3}FullYear`]();
    obj.[[month]] = date[`get${str3}` + "Month"]();
    obj.[[day]] = date[`get${str3}` + "Date"]();
    obj.[[hour]] = date[`get${str3}` + "Hours"]();
    obj.[[minute]] = date[`get${str3}` + "Minutes"]();
    obj.[[second]] = date[`get${str3}` + "Seconds"]();
    obj.[[inDST]] = false;
    const prototype5 = Record.prototype;
    const tmp35 = new Record(obj);
    [[pattern]] = result.[[pattern]];
    const calendars = closure_15.DateTimeFormat.[[localeData]][result.[[dataLocale]]].calendars;
    [[calendar]] = result.[[calendar]];
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
              [[pattern]] = str27.replace(`{${tmp89}}`, str);
              let tmp77 = diff;
              // continue
            }
          }
          let tmp48 = tmp88;
          if ("month" === tmp89) {
            diff = tmp47 + 1;
            tmp39 = tmp42;
          } else {
            let tmp49 = tmp88;
            let tmp50 = "hour" === tmp89 && true === result.[[hour12]];
            tmp39 = tmp42;
            diff = tmp47;
            if (tmp50) {
              let num6 = tmp47 % 12;
              let tmp52 = tmp35;
              let tmp53 = tmp88;
              let tmp55 = 0 === num6;
              let tmp54 = num6 !== tmp36["[[" + tmp89 + "]]"];
              if (tmp55) {
                tmp55 = true === result.[[hourNo0]];
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
      const str27 = __pattern__;
      const tmp40 = tmp39;
    }
    let replaced = str26;
    if (true === result.[[hour12]]) {
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
    return SupportedLocales(this.[[availableLocales]], CanonicalizeLocaleList(arg0), arguments[1]);
  } else {
    const _TypeError = TypeError;
    const typeError = new TypeError("supportedLocalesOf() is not a constructor");
    throw typeError;
  }
}
function resolveDateString(calendars, [[calendar]], days, arg3, arg4) {
  if (calendars[__calendar__]) {
    if (calendars[__calendar__][days]) {
      let tmp = calendars[__calendar__][days];
    }
    const obj = { narrow: [-0.00000000000000000000000000000000000000000000019705760091967055, 16122372870314360000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000], short: [true, true], long: [null, null] };
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
      tmp7 = closure_48;
      callResult = arg0 instanceof closure_48;
      if (callResult) {
      } else {
        tmp2 = closure_5;
        callResult = closure_5.call(arg0, key10005);
      }
      if (!callResult) {
        continue;
      } else {
        tmp4 = closure_6;
        obj = { -9223372036854775808: true, 0: true, -9223372036854775808: true, 0: true };
        obj.value = arg0[key10005];
        tmp5 = closure_6(tmp, key10005, obj);
        // continue
      }
      continue;
    }
    return;
  }
}
class List {
  constructor() {
    tmp = f120919(this, "length", { 1644126463: "rules", 1711236095: "message" });
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
      let tmp7 = closure_11;
      let callResult = closure_11.call(tmp2, replaced1.slice(0, replaced1.indexOf("(") + 1));
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
    // break
  }
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
  let closure_7 = Array.prototype.indexOf || function(arg0) {
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
  };
  let _Object4 = Object;
  let tmp6 = Object.create || (arg0, obj) => {
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
      if (!closure_5.call(arg1, key10011)) {
        continue;
      } else {
        let tmp2 = closure_6;
        class F {
          constructor() {
            return;
          }
        }
        // continue
      }
      continue;
    }
    return f;
  };
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
        if (tmp.[[initializedNumberFormat]]) {
          if (undefined === tmp.[[boundFormat]]) {
            tmp4 = f120923;
            tmp.[[boundFormat]] = f120923.call(function F(arg0) {
              return callback(this, Number(arg0));
            }, self);
          }
          return tmp.[[boundFormat]];
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
        if (tmp.[[initializedDateTimeFormat]]) {
          if (undefined === tmp.[[boundFormat]]) {
            tmp4 = f120923;
            tmp.[[boundFormat]] = f120923.call(function F() {
              if (0 === arguments.length) {
                const _Date = Date;
                let timestamp = Date.now();
              } else {
                timestamp = arguments[0];
              }
              return closure_46(this, Number(timestamp));
            }, self);
          }
          return tmp.[[boundFormat]];
        }
      }
      typeError = new TypeError("`this` value for format() is not an initialized Intl.DateTimeFormat object.");
      throw typeError;
    }
  }
  let _Function = Function;
  let obj2 = Function.prototype.bind || function(arg0) {
    const arg1 = arg0;
    const arg6 = this;
    let closure_2 = slice.call(arguments, 1);
    return 1 === this.length ? (arg0) => self.apply(arg0, callback2.call(closure_2, callback.call(arguments))) : () => self.apply(arg0, callback2.call(closure_2, callback.call(arguments)));
  };
  class Record {
    constructor(arg0) {
      for (const key10005 in arg0) {
        tmp6 = key10005;
        tmp7 = closure_48;
        callResult = arg0 instanceof closure_48;
        if (callResult) {
        } else {
          tmp2 = closure_5;
          callResult = closure_5.call(arg0, key10005);
        }
        if (!callResult) {
          continue;
        } else {
          tmp4 = closure_6;
          obj = { -9223372036854775808: true, 0: true, -9223372036854775808: true, 0: true };
          obj.value = arg0[key10005];
          tmp5 = closure_6(tmp, key10005, obj);
          // continue
        }
        continue;
      }
      return;
    }
  }
  let tmp6Result = tmp6(null);
  class List {
    constructor() {
      tmp = f120919(this, "length", { 1644126463: "rules", 1711236095: "message" });
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
  let closure_18 = false;
  let closure_19 = false;
  let closure_20 = /^[A-Z]{3}$/;
  let closure_21 = /-u(?:-[0-9a-z]{2,8})+/gi;
  let obj1 = { tags: {}, subtags: {} };
  obj2 = { aao: [], abh: [null, null], abv: [null, null], acm: [null, null], acq: [], acw: [null, null], acx: [], acy: ["cdo", "zh"], adf: ["cds", "sgn"], ads: ["Array", "installParams"], aeb: ["accessible", "diversity"], aec: ["accessible", "d"], aed: [null, null], aen: [false, false], afb: [-120061948, -314441727], afg: [], ajp: [], apc: [null, null], apd: [], arb: [], arq: ["csl", "sgn"], ars: ["Array", "initialScope"], ary: ["face_in_clouds", "handleRemoveAvatarSelect"], arz: [615727616, -120061948], ase: [false, false], asf: [true, true], asp: ["nativeEventPath", "GUILD_MEMBER_ACTION_UPDATE"], asq: ["zh", "doq"], asw: [953696768, -120061948], auz: [-1801502208, -120061948], avl: [true, true], ayh: [], ayl: [null, null], ayn: [null, null], ayp: [], bbz: [], bfi: [null, null], bfk: [null, null], bjn: [null, null], bog: [], bqn: [], bqy: [], btj: [], bve: ["x", "style"], bvl: [], bvu: [null, null], bzs: [], cdo: [], cds: ["gsm", "sgn"], cjy: ["gss", "sgn"], cmn: ["Array", "confirmRemoveGameFriend"], coa: [null, null], cpx: [1039745536, -120061948], csc: [-67567764413708370000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 995125351847425700000000000000000000000000000000000000000000000000000000000000000000000], csd: [false, false], cse: [null, null], csf: [-609791488, -1606286578], csg: [false, false], csl: ["enable", "handleRemoveAvatarSelect"], csn: ["ht", "handleRemoveAvatarSelect"], csq: [-120061948, -649003007], csr: ["handleSetForegroundRequested", "%isNaN%"], czh: [false, false], czo: ["<string:4174905348>", "<string:3696295937>"], doq: ["handleSetForegroundRequested", "%isNaN%"], dse: ["y", "trumpet"], dsl: [0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001124902786160505, 0.000000000000000000000000000000000000000000000000000000005735140467632891], dup: [null, null], ecs: [], esl: [], esn: [], eso: [null, null], eth: [], fcs: [], fse: [], fsl: [], fss: [true, true], gan: [], gds: [null, null], gom: [null, null], gse: [], gsg: [null, null], gsm: [], gss: ["a", "x"], gus: [-465743360, 861012750], hab: [0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005891576215824011, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003709722921403068], haf: ["lls", "sgn"], hak: ["lsg", "sgn"], hds: ["Array", "sectionItemAtFront"], hji: [734020096, -120061948], hks: [false, false], hos: ["y", "isArray"], hps: ["y", "isArray"], hsh: ["y", "isArray"], hsl: ["GameDepthTier3SmallBadge", "HYPESQUAD_HOUSE_1"], hsn: ["mdl", "sgn"], icl: [663638528, -1890450674], ils: [null, null], inl: [null, null], ins: [], ise: [], isg: [1784693248, -120061948], isr: [-379694592, -1975385330], jak: [null, null], jax: [775705088, -599653618], jcs: [false, false], jhs: [-1612496384, -120061948], jls: [-1613282816, -120061948], jos: [905204224, -465410761], jsl: ["y", "isArray"], jus: [null, null], kgi: ["<string:3623879725>", "<string:1107296760>"], knn: [null, null], kvb: [1459241472, -120061948], kvk: ["y", "trumpet"], kvr: [], kxd: [], lbs: [null, null], lce: [null, null], lcf: [], liw: [null, null], lls: [null, null], lsg: [true, true], lsl: [], lso: [1733181952, -120061948], lsp: [1475887616, -120061948], lst: [1286816256, -120061948], lsy: [679760384, 356647694], ltg: ["isArray", "__initData"], lvs: [-1579069184, 69663810], lzh: [true, true], max: [828064256, -120061948], mdl: [], meo: [true, true], mfa: [1246380544, -120061948], mfb: ["<string:4174905348>", "<string:792854529>"], mfs: [], min: [], mnp: [0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006556208502232263, 38981341254357260000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000], mqg: [null, null], mre: [], msd: [], msi: [], msr: [], mui: [], mzc: ["sfb", "sgn"], mzg: ["sfs", "sgn"], mzy: ["sgg", "sgn"], nan: ["sgx", "sgn"], nbs: ["Array", "payment_source_id"], ncs: ["slf", "sgn"], nsi: ["sls", "sgn"], nsl: ["sqk", "sgn"], nsp: ["sqs", "sgn"], nsr: ["ssh", "ar"], nzs: ["Array", "%AsyncFunctionPrototype%"], okl: ["Array", "isVisibleToUser"], orn: ["Array", "resolvedReason"], ors: [-120061948, 374472705], pel: [-686403072, 591528718], pga: ["MEDIA_KEYBOARD_BAR_PADDING_HORIZONTAL", "SHOOT_EM_UP"], pks: ["y", "trumpet"], prl: ["y", "isArray"], prz: [], psc: [null, null], psd: ["y", "isArray"], pse: [null, null], psg: [], psl: [], pso: [], psp: [], psr: [], pys: [-619687323, -1992137424], rms: [null, null], rsi: [false, false], rsl: ["vsi", "sgn"], sdl: ["vsl", "sgn"], sfb: ["vsv", "sgn"], sfs: ["wuu", "zh"], sgg: [], sgx: [null, null], shu: [], slf: [], sls: [], sqk: ["x", "apply"], sqs: [], ssh: [null, null], ssp: [null, null], ssr: [52318723, 1901200441], svk: [false, false], swc: [null, null], swh: [true, true], swl: [1391048538, true], syy: ["short", "short"], tmw: [-31251288051979377000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000013116370981179369], tse: [1849255639050782400000000000000000000000000000000000000000000000000000000000000000000000000000000000, -1746378870730152300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000], tsm: [true, true], tsq: [false, false], tss: [null, null], tsy: [], tza: ["generic", "hebrew"], ugn: ["<string:1967587332>", "<string:1955463172>"], ugy: [null, null], ukl: [], uks: [1972174850, 338034689], urk: [null, null], uzn: [], uzs: [-721420008, 704643343], vgt: [null, null], vkk: [null, null], vkt: [], vsi: [1275069011, 110460], vsl: [-18022363652752875000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 52439436244102560000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000], vsv: ["timeLabel", "%GeneratorPrototype%"], wuu: [null, null], xki: [], xml: ["<string:1351375244>", "<string:1284266636>"], xmm: [167772591, 1526726931], xms: [true, true], yds: [], ysl: [], yue: [], zib: [9895937, 75694081], zlm: [null, null], zmi: [], zsl: [], zsm: ["Tout", "Baba"] };
  obj1.extLang = obj2;
  let closure_23 = {};
  let obj3 = { 1577016319: null, 1493131263: null };
  let flag2 = true;
  obj3.value = NumberFormatConstructor;
  let str = "NumberFormat";
  let fnResult = fn(obj, "NumberFormat", obj3);
  let obj4 = { writable: false };
  let str2 = "prototype";
  let fnResult1 = fn(obj.NumberFormat, "prototype", obj4);
  let obj5 = { [[availableLocales]]: [], [[relevantExtensionKeys]]: [null], [[localeData]]: {} };
  tmp6Result.NumberFormat = obj5;
  let obj6 = { 1577016319: null, 1493131263: null, value: obj2.call(supportedLocalesOf, tmp6Result.NumberFormat) };
  let str3 = "supportedLocalesOf";
  let fnResult2 = fn(obj.NumberFormat, "supportedLocalesOf", obj6);
  let obj7 = { configurable: true, get: GetFormatNumber };
  let str4 = "format";
  let fnResult3 = fn(obj.NumberFormat.prototype, "format", obj7);
  let obj8 = { arab: [true, true, true, true, true, true, true, true, true, true], arabext: [null, null, null, null, null, null, null, null, null, null], bali: [450906879, 450953220, 451018756, 451084292, 451149828, 451215364, 451280900, 451346436, 451411972, 451477508], beng: [true, true, true, true, true, true, true, true, true, true], deva: ["<string:3586542080>", "<string:3399548932>", "<string:4050255876>", "<string:4050649090>", "<string:4051173378>", "<string:4055498754>", "<string:4055957506>", "<string:4055105538>", "<string:4055826434>", "<string:4055302146>"], fullwide: [true, true, true, true, true, true, true, true, true, true], gujr: [null, null, null, null, null, null, null, null, null, null], guru: ["RNScreensTurboModule", "undelete", "RegistrationSteps", "undelete", "eachConnection", "undelete", "SEO_PAGE_VIEWED", "undelete", "addDetail", "undelete"], hanidec: ["isAuthorized", "horiz", "isFileUploadSupported", "isLocked", "horiz", "isReactingToThermalState", "navigateToCreateThread", "inc", "nestedUpdate", "y"], khmr: ["revolving_hearts", "hideLegacyUsername", "isDehydrated", "hideLegacyUsername", "includeFrecency", "hideLegacyUsername", "insetBlockEnd", "hideLegacyUsername", "isAuthorized", "hideLegacyUsername"], knda: ["size_online", "hideLegacyUsername", "loopClonesPerSide", "hideLegacyUsername", "man_police_officer", "hideLegacyUsername", "scrollAffordanceVariant", "hideLegacyUsername", "mobileSummary", "hideLegacyUsername"], laoo: ["previousRoutes", "hideLegacyUsername", "queryKey", "hideLegacyUsername", "rtc_state", "hideLegacyUsername", "requestWorkTimeout", "hideLegacyUsername", "ru-BY", "hideLegacyUsername"], latn: [], limb: [true, true, true, true, true, true, true, true, true, true], mlym: [0.088, 0.062, 0.186, 0, 0.741, 0.103, 0.245, 0.619, 0.24, 0.689], mong: [true, true, true, true, true, true, true, true, true, true], mymr: ["mm", "horiz", "dz", "lG6a5x", "horiz", "avatarId", "RBTree", "horiz", "nestedUpdate", "__KvStorage"], orya: [true, true, true, true, true, true, true, true, true, true], tamldec: ["includeFrecency", "__KvStorage", "insetBlockEnd", "__KvStorage", "insetBlockEnd", "default_auto_archive_duration", "isAuthorized", "default_auto_archive_duration", "isAuthorized", "__KvStorage"], telu: [true, true, true, true, true, true, true, true, true, true], thai: [], tibt: ["001-status-grouping", "002", "005", "009", "011", "013", "014", "015", "017", "018"] };
  let obj9 = {
    1577016319: null,
    1493131263: null,
    value() {
        const self = this;
        const tmp = new Record();
        const items = [];
        let tmp2 = null != this;
        if (tmp2) {
          tmp2 = "object" === typeof self;
        }
        if (tmp2) {
          tmp2 = getInternalProperties(self);
        }
        if (tmp2) {
          if (tmp2.[[initializedNumberFormat]]) {
            let num = 0;
            if (0 < items.length) {
              do {
                let tmp5 = closure_5;
                let text = `${"[[" + arr[num]}]]`;
                if (closure_5.call(tmp2, `${"[[" + arr[num]}]]`)) {
                  let obj = { value: tmp2[`${"[[" + arr[num]}]]`] };
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
  let obj10 = { 1577016319: null, 1493131263: null, value: DateTimeFormatConstructor };
  let str6 = "DateTimeFormat";
  let fnResult5 = fn(obj, "DateTimeFormat", obj10);
  let obj11 = { writable: false };
  let fnResult6 = fn(DateTimeFormatConstructor, "prototype", obj11);
  let obj12 = { weekday: [], era: [], year: [null, null], month: [false, false, false, false, false], day: [null, null], hour: [null, null], minute: [null, null], second: [null, null], timeZoneName: [-0.00000000000000000000000000000000000000000000019705760091967055, 16122372870314360000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000] };
  let obj13 = { [[availableLocales]]: [], [[relevantExtensionKeys]]: ["<string:513474561>", "<string:1296891905>"], [[localeData]]: {} };
  tmp6Result.DateTimeFormat = obj13;
  let obj14 = { 1577016319: null, 1493131263: null, value: obj2.call(supportedLocalesOf, tmp6Result.DateTimeFormat) };
  let fnResult7 = fn(obj.DateTimeFormat, "supportedLocalesOf", obj14);
  let obj15 = { configurable: true, get: GetFormatDateTime };
  let fnResult8 = fn(obj.DateTimeFormat.prototype, "format", obj15);
  let obj16 = {
    "": null,
    "": null,
    value() {
        const self = this;
        const tmp = new Record();
        const items = [true, true, true, true, true, true, true, true, true, true, true, true, true, true];
        let tmp2 = null != this;
        if (tmp2) {
          tmp2 = "object" === typeof self;
        }
        if (tmp2) {
          tmp2 = getInternalProperties(self);
        }
        if (tmp2) {
          if (tmp2.[[initializedDateTimeFormat]]) {
            let num = 0;
            if (0 < items.length) {
              do {
                let tmp5 = closure_5;
                let text = `${"[[" + arr[num]}]]`;
                if (closure_5.call(tmp2, `${"[[" + arr[num]}]]`)) {
                  let obj = { value: tmp2[`${"[[" + arr[num]}]]`] };
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
      const tmp = +this;
      const _isNaN = isNaN;
      let str = "Invalid Date";
      if (!isNaN(tmp)) {
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
      const tmp = +this;
      const _isNaN = isNaN;
      let str = "Invalid Date";
      if (!isNaN(tmp)) {
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
      const tmp = +this;
      const _isNaN = isNaN;
      let str = "Invalid Date";
      if (!isNaN(tmp)) {
        const first = arguments[0];
        const prototype = DateTimeFormatConstructor.prototype;
        const tmp9 = new DateTimeFormatConstructor(first, ToDateTimeOptions(arguments[1], "time", "time"));
        str = FormatDateTime(tmp9, tmp);
      }
      return str;
    }
  };
  let obj18 = {
    "": null,
    "": null,
    value() {
        let obj = { "": null, "": null, value: obj17.Number.toLocaleString };
        fn(Number.prototype, "toLocaleString", obj);
        obj = { "": null, "": null, value: obj17.Date.toLocaleString };
        fn(Date.prototype, "toLocaleString", obj);
        for (const key10022 in closure_26.Date) {
          let tmp6 = key10022;
          let tmp7 = closure_5;
          let tmp8 = closure_26;
          if (!closure_5.call(closure_26.Date, key10022)) {
            continue;
          } else {
            let tmp3 = closure_6;
            let _Date = Date;
            obj = { "": null, "": null };
            let tmp4 = closure_26;
            obj.value = closure_26.Date[key10022];
            let tmp5 = closure_6(Date.prototype, key10022, obj);
            // continue
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
              let callResult2 = push.call(closure_15.NumberFormat.[[availableLocales]], callResult1);
              let tmp19 = closure_15;
              closure_15.NumberFormat.[[localeData]][callResult1] = locale.number;
              let tmp20 = callResult1;
              if (locale.date) {
                locale.date.nu = locale.number.nu;
                let tmp21 = push;
                let tmp22 = closure_15;
                let callResult3 = push.call(closure_15.DateTimeFormat.[[availableLocales]], callResult1);
                let tmp24 = closure_15;
                closure_15.DateTimeFormat.[[localeData]][callResult1] = locale.date;
              }
              let tmp25 = shift;
              callResult1 = shift.call(items);
            }
            if (!closure_18) {
              InitializeNumberFormat(obj.NumberFormat.prototype);
              closure_18 = true;
            }
            let date = locale.date;
            if (date) {
              date = !closure_19;
            }
            if (date) {
              InitializeDateTimeFormat(obj.DateTimeFormat.prototype);
              closure_19 = true;
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

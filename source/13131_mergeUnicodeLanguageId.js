// Module ID: 13131
// Function ID: 101172
// Name: mergeUnicodeLanguageId
// Dependencies: [1257, 13132, 13133, 13197, 13204, 13209, 13224, 13225]

// Module 13131 (mergeUnicodeLanguageId)
import createExporter from "createExporter";
import getInternalSlots from "getInternalSlots";

function mergeUnicodeLanguageId(arg0, script, region, variants, lang) {
  lang = arg0;
  let items = variants;
  if (undefined === variants) {
    items = [];
  }
  const obj = {};
  if (lang) {
    if (!lang) {
      lang = lang.lang;
    }
    obj.lang = lang;
    if (!script) {
      script = lang.script;
    }
    obj.script = script;
    if (!region) {
      region = lang.region;
    }
    obj.region = region;
    const obj2 = require(1257) /* createExporter */;
    obj.variants = obj2.__spreadArray(require(1257) /* createExporter */.__spreadArray([], items, true), lang.variants, true);
    let tmp = obj;
    const obj3 = require(1257) /* createExporter */;
  } else {
    let str = lang;
    if (!lang) {
      str = "und";
    }
    obj.lang = str;
    obj.script = script;
    obj.region = region;
    obj.variants = items;
    tmp = obj;
  }
  return tmp;
}
function addLikelySubtags(locale) {
  let lang;
  let region;
  let script;
  let variants;
  const parseUnicodeLocaleIdResult = require(13197) /* isStructurallyValidLanguageTag */.parseUnicodeLocaleId(locale);
  ({ lang, script, region, variants } = parseUnicodeLocaleIdResult.lang);
  if (script) {
    if (region) {
      let obj = { lang, script, region, variants: [] };
      const tmp4 = require(13197) /* isStructurallyValidLanguageTag */.likelySubtags[require(undefined, 13197) /* isStructurallyValidLanguageTag */.emitUnicodeLanguageId(undefined, obj)];
      if (tmp4) {
        parseUnicodeLocaleIdResult.lang = mergeUnicodeLanguageId(undefined, undefined, undefined, variants, require(13197) /* isStructurallyValidLanguageTag */.parseUnicodeLanguageId(tmp4));
        return require(13197) /* isStructurallyValidLanguageTag */.emitUnicodeLocaleId(parseUnicodeLocaleIdResult);
      }
    }
  }
  if (script) {
    obj = { lang, script, variants: [] };
    const tmp7 = require(13197) /* isStructurallyValidLanguageTag */.likelySubtags[require(undefined, 13197) /* isStructurallyValidLanguageTag */.emitUnicodeLanguageId(undefined, obj)];
    if (tmp7) {
      parseUnicodeLocaleIdResult.lang = mergeUnicodeLanguageId(undefined, undefined, region, variants, require(13197) /* isStructurallyValidLanguageTag */.parseUnicodeLanguageId(tmp7));
      return require(13197) /* isStructurallyValidLanguageTag */.emitUnicodeLocaleId(parseUnicodeLocaleIdResult);
    }
  }
  if (region) {
    obj = { lang, region, variants: [] };
    const tmp10 = require(13197) /* isStructurallyValidLanguageTag */.likelySubtags[require(undefined, 13197) /* isStructurallyValidLanguageTag */.emitUnicodeLanguageId(undefined, obj)];
    if (tmp10) {
      parseUnicodeLocaleIdResult.lang = mergeUnicodeLanguageId(undefined, script, undefined, variants, require(13197) /* isStructurallyValidLanguageTag */.parseUnicodeLanguageId(tmp10));
      return require(13197) /* isStructurallyValidLanguageTag */.emitUnicodeLocaleId(parseUnicodeLocaleIdResult);
    }
  }
  let tmp11 = require(13197) /* isStructurallyValidLanguageTag */.likelySubtags[lang];
  if (!tmp11) {
    const obj1 = { lang: "und", script, variants: [] };
    tmp11 = require(13197) /* isStructurallyValidLanguageTag */.likelySubtags[require(undefined, 13197) /* isStructurallyValidLanguageTag */.emitUnicodeLanguageId(undefined, obj1)];
  }
  if (tmp11) {
    parseUnicodeLocaleIdResult.lang = mergeUnicodeLanguageId(undefined, script, region, variants, require(13197) /* isStructurallyValidLanguageTag */.parseUnicodeLanguageId(tmp11));
    return require(13197) /* isStructurallyValidLanguageTag */.emitUnicodeLocaleId(parseUnicodeLocaleIdResult);
  } else {
    const _Error = Error;
    const error = new Error("No match for addLikelySubtags");
    throw error;
  }
}
function createArrayFromListOrRestricted(arg0, arg1) {
  let tmp = arg0;
  if (undefined !== arg1) {
    const items = [arg1];
    tmp = items;
  }
  return Array.from(tmp);
}
const re3 = /^[a-z0-9]{3,8}$/i;
let closure_4 = ["ca", "co", "hc", "kf", "kn", "nu", "fw"];
const re5 = /^[a-z0-9]{3,8}(-[a-z0-9]{3,8})*$/i;
let closure_6 = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
let tmp2 = (() => {
  class Locale {
    constructor(arg0, arg1) {
      self = this;
      constructor = undefined;
      if (this) {
        tmp2 = Locale;
        if (self instanceof Locale) {
          constructor = self.constructor;
        }
      }
      if (constructor) {
        tmp8 = Locale;
        prop = Locale.relevantExtensionKeys;
        items = ["initializedLocale", "locale", "calendar", "collation", "hourCycle", "numberingSystem"];
        str2 = "kf";
        num = -1;
        if (prop.indexOf("kf") > -1) {
          str3 = "caseFirst";
          arr = items.push("caseFirst");
        }
        str4 = "kn";
        if (prop.indexOf("kn") > -1) {
          str5 = "numeric";
          arr1 = items.push("numeric");
        }
        if (undefined === arg0) {
          constructor = globalThis;
          _TypeError3 = TypeError;
          prototype7 = TypeError.prototype;
          constructor = new.target;
          str44 = "First argument to Intl.Locale constructor can't be empty or missing";
          constructor = new.target;
          constructor = new TypeError("First argument to Intl.Locale constructor can't be empty or missing");
          throw constructor;
        } else {
          constructor = typeof arg0;
          str45 = "string";
          if ("string" !== constructor) {
            str6 = "object";
            if ("object" !== constructor) {
              constructor = globalThis;
              _TypeError2 = TypeError;
              prototype6 = TypeError.prototype;
              constructor = new.target;
              str43 = "tag must be a string or object";
              constructor = new.target;
              constructor = new TypeError("tag must be a string or object");
              throw constructor;
            }
          }
          str7 = "object";
          if ("object" === constructor) {
            tmp11 = outer1_2;
            defaultResult = outer1_2.default(arg0);
            if (defaultResult) {
              tmp13 = Locale;
              tmp14 = outer1_1;
              num2 = 2;
              str8 = "initializedLocale";
              if (Locale(outer1_1[2]).HasOwnProperty(defaultResult, "initializedLocale")) {
                locale = defaultResult.locale;
              }
              tmp15 = outer1_2;
              defaultResult1 = outer1_2.default(self, items);
              num3 = 2;
              tmp17 = Locale;
              tmp18 = outer1_1;
              tmp19 = arg1;
              result = Locale(outer1_1[2]).CoerceOptionsToObject(arg1);
              str9 = "language tag must be a string";
              invariantResult = Locale(outer1_1[2]).invariant("string" === typeof locale, "language tag must be a string");
              num4 = 3;
              tmp22 = globalThis;
              _RangeError = RangeError;
              str10 = "malformed language tag";
              invariantResult1 = Locale(outer1_1[2]).invariant(Locale(outer1_1[3]).isStructurallyValidLanguageTag(locale), "malformed language tag", RangeError);
              str11 = "language";
              tmp24 = result;
              str12 = "string";
              GetOptionResult = Locale(outer1_1[2]).GetOption(result, "language", "string", undefined, undefined);
              tmp26 = undefined !== GetOptionResult;
              tmp27 = locale;
              if (tmp26) {
                tmp28 = Locale;
                tmp29 = outer1_1;
                _RangeError2 = RangeError;
                str13 = "Malformed unicode_language_subtag";
                invariantResult2 = Locale(outer1_1[2]).invariant(Locale(outer1_1[3]).isUnicodeLanguageSubtag(GetOptionResult), "Malformed unicode_language_subtag", RangeError);
              }
              tmp31 = Locale;
              tmp32 = outer1_1;
              str14 = "script";
              tmp33 = result;
              str15 = "string";
              GetOptionResult1 = Locale(outer1_1[2]).GetOption(result, "script", "string", undefined, undefined);
              tmp35 = undefined !== GetOptionResult1;
              if (tmp35) {
                tmp36 = Locale;
                tmp37 = outer1_1;
                _RangeError3 = RangeError;
                str16 = "Malformed unicode_script_subtag";
                invariantResult3 = Locale(outer1_1[2]).invariant(Locale(outer1_1[3]).isUnicodeScriptSubtag(GetOptionResult1), "Malformed unicode_script_subtag", RangeError);
              }
              tmp39 = Locale;
              tmp40 = outer1_1;
              str17 = "region";
              tmp41 = result;
              str18 = "string";
              GetOptionResult2 = Locale(outer1_1[2]).GetOption(result, "region", "string", undefined, undefined);
              tmp43 = undefined !== GetOptionResult2;
              if (tmp43) {
                tmp44 = Locale;
                tmp45 = outer1_1;
                _RangeError4 = RangeError;
                str19 = "Malformed unicode_region_subtag";
                invariantResult4 = Locale(outer1_1[2]).invariant(Locale(outer1_1[3]).isUnicodeRegionSubtag(GetOptionResult2), "Malformed unicode_region_subtag", RangeError);
              }
              tmp47 = Locale;
              tmp48 = outer1_1;
              result1 = Locale(outer1_1[3]).parseUnicodeLanguageId(locale);
              if (tmp26) {
                result1.lang = GetOptionResult;
              }
              if (tmp35) {
                result1.script = GetOptionResult1;
              }
              if (tmp43) {
                result1.region = GetOptionResult2;
              }
              _Intl = Intl;
              tmp50 = Locale;
              tmp51 = outer1_1;
              num5 = 0;
              obj = Locale(outer1_1[0]);
              obj2 = Locale(outer1_1[0]);
              obj = {};
              obj.lang = result1;
              _Object = Object;
              tmp52 = null;
              obj1 = Object.create(null);
              str20 = "calendar";
              tmp54 = result;
              str21 = "string";
              GetOptionResult3 = tmp17(tmp18[2]).GetOption(result, "calendar", "string", undefined, undefined);
              if (undefined !== GetOptionResult3) {
                tmp56 = outer1_5;
                if (!outer1_5.test(GetOptionResult3)) {
                  _RangeError5 = RangeError;
                  prototype2 = RangeError.prototype;
                  tmp57 = new.target;
                  str22 = "invalid calendar";
                  tmp58 = new.target;
                  rangeError = new RangeError("invalid calendar");
                  tmp60 = rangeError;
                  throw rangeError;
                }
              }
              obj1.ca = GetOptionResult3;
              tmp61 = Locale;
              tmp62 = outer1_1;
              str23 = "collation";
              tmp63 = result;
              str24 = "string";
              GetOptionResult4 = Locale(outer1_1[2]).GetOption(result, "collation", "string", undefined, undefined);
              if (undefined !== GetOptionResult4) {
                tmp65 = outer1_5;
                if (!outer1_5.test(GetOptionResult4)) {
                  _RangeError6 = RangeError;
                  prototype3 = RangeError.prototype;
                  tmp66 = new.target;
                  str25 = "invalid collation";
                  tmp67 = new.target;
                  rangeError1 = new RangeError("invalid collation");
                  tmp69 = rangeError1;
                  throw rangeError1;
                }
              }
              obj1.co = GetOptionResult4;
              tmp70 = Locale;
              tmp71 = outer1_1;
              str26 = "firstDayOfWeek";
              tmp72 = result;
              str27 = "string";
              GetOptionResult5 = Locale(outer1_1[2]).GetOption(result, "firstDayOfWeek", "string", undefined, undefined);
              tmp74 = GetOptionResult5;
              if (undefined !== GetOptionResult5) {
                tmp75 = outer1_6;
                tmp76 = outer1_6[+GetOptionResult5];
                tmp77 = outer1_3;
                tmp74 = tmp76;
                if (!outer1_3.test(tmp76)) {
                  _RangeError7 = RangeError;
                  prototype4 = RangeError.prototype;
                  tmp78 = new.target;
                  str28 = "Invalid firstDayOfWeek";
                  tmp79 = new.target;
                  rangeError2 = new RangeError("Invalid firstDayOfWeek");
                  tmp81 = rangeError2;
                  throw rangeError2;
                }
              }
              obj1.fw = tmp74;
              tmp82 = Locale;
              tmp83 = outer1_1;
              str29 = "hourCycle";
              tmp84 = result;
              str30 = "string";
              obj1.hc = Locale(outer1_1[2]).GetOption(result, "hourCycle", "string", ["h11", "h12", "h23", "h24"], undefined);
              str31 = "caseFirst";
              tmp85 = result;
              obj1.kf = Locale(outer1_1[2]).GetOption(result, "caseFirst", "string", ["upper", "lower", "false"], undefined);
              str32 = "numeric";
              str33 = "boolean";
              tmp86 = result;
              GetOptionResult6 = Locale(outer1_1[2]).GetOption(result, "numeric", "boolean", undefined, undefined);
              StringResult = undefined;
              if (undefined !== GetOptionResult6) {
                _String = String;
                StringResult = String(GetOptionResult6);
              }
              obj1.kn = StringResult;
              tmp89 = Locale;
              tmp90 = outer1_1;
              str34 = "numberingSystem";
              tmp91 = result;
              str35 = "string";
              GetOptionResult7 = Locale(outer1_1[2]).GetOption(result, "numberingSystem", "string", undefined, undefined);
              if (undefined !== GetOptionResult7) {
                tmp93 = outer1_5;
                if (!outer1_5.test(GetOptionResult7)) {
                  _RangeError8 = RangeError;
                  prototype5 = RangeError.prototype;
                  tmp94 = new.target;
                  str36 = "Invalid numberingSystem";
                  tmp95 = new.target;
                  rangeError3 = new RangeError("Invalid numberingSystem");
                  tmp97 = rangeError3;
                  throw rangeError3;
                }
              }
              obj1.nu = GetOptionResult7;
              items1 = [];
              tmp98 = Locale;
              tmp99 = outer1_1;
              constructor = Locale(outer1_1[3]).parseUnicodeLocaleId(Intl.getCanonicalLocales(Locale(outer1_1[3]).emitUnicodeLocaleId(obj.__assign(obj2.__assign({}, Locale(outer1_1[3]).parseUnicodeLocaleId(locale)), obj)))[0]);
              extensions = constructor.extensions;
              str37 = "u";
              num6 = 0;
              constructor = undefined;
              arr5 = items1;
              if (0 < extensions.length) {
                do {
                  constructor = extensions[num6];
                  constructor = items1;
                  if ("u" === constructor.type) {
                    _Array = Array;
                    if (Array.isArray(constructor.keywords)) {
                      items1 = constructor.keywords;
                    }
                    constructor = items1;
                  }
                  num6 = num6 + 1;
                  items1 = constructor;
                  arr5 = constructor;
                } while (num6 < extensions.length);
              }
              _Object2 = Object;
              constructor = Object.create(null);
              num7 = 1;
              str38 = "Value for ";
              str39 = " must be a string";
              str40 = "";
              str41 = " must be in options";
              for (let num8 = 0; num8 < prop.length; num8 = num8 + 1) {
                constructor = prop[num8];
                num9 = 0;
                constructor = undefined;
                if (0 < arr5.length) {
                  do {
                    constructor = arr5[num9];
                    if (constructor[0] === constructor) {
                      constructor = constructor[1];
                    }
                    num9 = num9 + 1;
                  } while (num9 < arr5.length);
                }
                constructor = Locale;
                constructor = outer1_1;
                concat = "".concat;
                constructor = constructor in obj1;
                constructor = Locale(outer1_1[2]).invariant(constructor, "".concat(constructor, " must be in options"));
                constructor = obj1[constructor];
                if (undefined !== constructor) {
                  constructor = Locale;
                  constructor = outer1_1;
                  concat2 = "Value for ".concat;
                  constructor = Locale(outer1_1[2]).invariant("string" === typeof constructor, "Value for ".concat(constructor, " must be a string"));
                  if (constructor) {
                    constructor[1] = constructor;
                  } else {
                    items2 = [, ];
                    items2[0] = constructor;
                    items2[1] = constructor;
                    constructor = arr5.push(items2);
                  }
                }
                constructor[constructor] = constructor;
              }
              if (constructor) {
                constructor.keywords = arr5;
              } else if (arr5.length) {
                extensions1 = constructor.extensions;
                obj2 = {};
                obj2.type = "u";
                obj2.keywords = arr5;
                obj2.attributes = [];
                constructor = extensions1.push(obj2);
              }
              _Intl2 = Intl;
              constructor = Locale;
              constructor = outer1_1;
              constructor.locale = Intl.getCanonicalLocales(Locale(outer1_1[3]).emitUnicodeLocaleId(constructor))[0];
              ({ locale: tmp16.locale, ca: tmp16.calendar, co: tmp16.collation, fw: tmp16.firstDayOfWeek, hc: tmp16.hourCycle } = constructor);
              if (prop.indexOf("kf") > -1) {
                defaultResult1.caseFirst = constructor.kf;
              }
              if (prop.indexOf("kn") > -1) {
                constructor = Locale;
                constructor = outer1_1;
                str42 = "true";
                defaultResult1.numeric = Locale(outer1_1[2]).SameValue(constructor.kn, "true");
              }
              defaultResult1.numberingSystem = constructor.nu;
              return;
            }
          }
          locale = arg0.toString();
        }
      } else {
        tmp3 = globalThis;
        _TypeError = TypeError;
        prototype = TypeError.prototype;
        tmp4 = new.target;
        str = "Intl.Locale must be called with 'new'";
        tmp5 = new.target;
        typeError = new TypeError("Intl.Locale must be called with 'new'");
        tmp7 = typeError;
        throw typeError;
      }
      return;
    }
    maximize() {
      tmp = new Locale(outer1_8(outer1_2.default(this).locale));
      return tmp;
    }
    minimize() {
      locale = outer1_2.default(this).locale;
      tmp = Locale;
      tmp2 = outer1_8(locale);
      if (!tmp2) {
        prototype = tmp.prototype;
        tmp37 = new.target;
        tmp38 = new.target;
        tmp39 = locale;
        tmp = new tmp(tmp3);
        tmp41 = tmp;
        return tmp;
      } else {
        tmp4 = Locale;
        tmp5 = outer1_1;
        num = 3;
        num2 = 0;
        obj = Locale(outer1_1[0]);
        obj2 = Locale(outer1_1[0]);
        obj = {};
        obj.variants = [];
        result = Locale(outer1_1[3]).emitUnicodeLanguageId(obj.__assign(obj2.__assign({}, Locale(outer1_1[3]).parseUnicodeLanguageId(tmp2)), obj));
        parseUnicodeLocaleIdResult = Locale(outer1_1[3]).parseUnicodeLocaleId(locale);
        ({ lang, script, region, variants } = parseUnicodeLocaleIdResult.lang);
        tmp8 = outer1_8;
        obj1 = {};
        obj1.lang = lang;
        obj1.variants = [];
        if (outer1_8(Locale(outer1_1[3]).emitUnicodeLanguageId(obj1)) === result) {
          tmp30 = Locale;
          tmp31 = outer1_1;
          num = Locale(outer1_1[num]).emitUnicodeLocaleId;
          obj13 = Locale(outer1_1[num2]);
          num2 = Locale(outer1_1[num2]);
          obj2 = {};
          tmp33 = outer1_7;
          tmp34 = lang;
          tmp35 = variants;
          __assignResult = num2.__assign({}, parseUnicodeLocaleIdResult);
          obj2.lang = outer1_7(lang, undefined, undefined, variants);
          numResult = num(obj13.__assign(__assignResult, obj2));
        } else {
          if (region) {
            tmp9 = outer1_8;
            tmp10 = Locale;
            tmp11 = outer1_1;
            obj3 = {};
            obj3.lang = lang;
            obj3.region = region;
            obj3.variants = [];
            if (outer1_8(Locale(outer1_1[num]).emitUnicodeLanguageId(obj3)) === result) {
              tmp23 = Locale;
              tmp24 = outer1_1;
              obj10 = Locale(outer1_1[num2]);
              obj11 = Locale(outer1_1[num2]);
              obj4 = {};
              tmp26 = outer1_7;
              tmp27 = lang;
              tmp28 = region;
              tmp29 = variants;
              __assignResult1 = obj11.__assign({}, parseUnicodeLocaleIdResult);
              obj4.lang = outer1_7(lang, undefined, region, variants);
              numResult = Locale(outer1_1[num]).emitUnicodeLocaleId(obj10.__assign(__assignResult1, obj4));
            }
          }
          numResult = locale;
          if (script) {
            tmp13 = outer1_8;
            tmp14 = Locale;
            tmp15 = outer1_1;
            obj5 = {};
            obj5.lang = lang;
            obj5.script = script;
            obj5.variants = [];
            numResult = locale;
            if (outer1_8(Locale(outer1_1[num]).emitUnicodeLanguageId(obj5)) === result) {
              tmp16 = Locale;
              tmp17 = outer1_1;
              obj7 = Locale(outer1_1[num2]);
              obj8 = Locale(outer1_1[num2]);
              obj6 = {};
              tmp19 = outer1_7;
              tmp20 = lang;
              tmp21 = script;
              tmp22 = variants;
              __assignResult2 = obj8.__assign({}, parseUnicodeLocaleIdResult);
              obj6.lang = outer1_7(lang, script, undefined, variants);
              numResult = Locale(outer1_1[num]).emitUnicodeLocaleId(obj7.__assign(__assignResult2, obj6));
            }
          }
        }
        tmp36 = numResult;
      }
      return;
    }
    toString() {
      return outer1_2.default(this).locale;
    }
    getCalendars() {
      self = this;
      defaultResult = outer1_2.default(this);
      region = undefined;
      if ("root" !== defaultResult.locale) {
        region = self.maximize().region;
      }
      return outer1_9(Locale(outer1_1[4]).getCalendarPreferenceDataForRegion(region), defaultResult.calendar);
    }
    getCollations() {
      return (function collationsOfLocale(defaultResult1) {
        let collation;
        let locale;
        ({ collation, locale } = outer2_2.default(defaultResult1));
        const defaultResult = outer2_2.default(defaultResult1);
        const found = Locale(outer2_1[5]).supportedValuesOf("collation", locale).filter((arg0) => {
          let tmp = "standard" !== arg0;
          if (tmp) {
            tmp = "search" !== arg0;
          }
          return tmp;
        });
        const sorted = found.sort();
        return outer2_9(found, collation);
      })(this);
    }
    getHourCycles() {
      self = this;
      defaultResult = outer1_2.default(this);
      if (Locale(outer1_1[2]).HasOwnProperty(defaultResult, "initializedLocale")) {
        tmp7 = outer1_2;
        defaultResult1 = outer1_2.default(self);
        locale = defaultResult1.locale;
        str2 = "root";
        region = undefined;
        if ("root" !== locale) {
          region = self.maximize().region;
        }
        tmp10 = outer1_9;
        tmp11 = Locale;
        tmp12 = outer1_1;
        num = 4;
        return outer1_9(Locale(outer1_1[4]).getHourCyclesPreferenceDataForLocaleOrRegion(locale, region), defaultResult1.hourCycle);
      } else {
        tmp2 = globalThis;
        _TypeError = TypeError;
        prototype = TypeError.prototype;
        tmp3 = new.target;
        str = "Error uninitialized locale";
        tmp4 = new.target;
        typeError = new TypeError("Error uninitialized locale");
        tmp6 = typeError;
        throw typeError;
      }
    }
    getNumberingSystems() {
      defaultResult = outer1_2.default(this);
      ({ numberingSystem, locale } = defaultResult);
      tmp2 = Locale(outer1_1[6]).numberingSystems[locale];
      if (null === tmp2) {
        tmp3 = Locale;
        tmp4 = outer1_1;
        tmp2 = Locale(outer1_1[6]).numberingSystems[this.language];
      }
      tmp5 = outer1_9;
      if (tmp2) {
        tmp6 = Locale;
        tmp7 = outer1_1;
        num = 0;
        obj = Locale(outer1_1[0]);
        flag = true;
        __spreadArrayResult = obj.__spreadArray([], tmp2, true);
      } else {
        __spreadArrayResult = [];
      }
      return tmp5(__spreadArrayResult, numberingSystem);
    }
    getTimeZones() {
      region = Locale(outer1_1[3]).parseUnicodeLanguageId(outer1_2.default(this).locale).region;
      arr = undefined;
      if (region) {
        tmp2 = Locale;
        tmp3 = outer1_1;
        num = 4;
        timeZonePreferenceForRegion = Locale(outer1_1[4]).getTimeZonePreferenceForRegion(region);
        sorted = timeZonePreferenceForRegion.sort();
        tmp5 = globalThis;
        _Array = Array;
        arr = Array.from(timeZonePreferenceForRegion);
      }
      return arr;
    }
    getTextInfo() {
      obj = Object.create(Object.prototype);
      tmp2 = (function characterDirectionOfLocale(minimize) {
        let str = minimize.minimize();
        str = str.toString();
        let str2 = "ltr";
        if ("right-to-left" === Locale(outer2_1[7]).characterOrders[str]) {
          str2 = "rtl";
        }
        return str2;
      })(this);
      dataProperty = Locale(outer1_1[2]).createDataProperty(obj, "direction", tmp2);
      return obj;
    }
    getWeekInfo() {
      self = this;
      obj = Object.create(Object.prototype);
      defaultResult = outer1_2.default(this);
      if (Locale(outer1_1[2]).HasOwnProperty(defaultResult, "initializedLocale")) {
        tmp7 = outer1_2;
        str2 = "root";
        region = undefined;
        if ("root" !== outer1_2.default(self).locale) {
          region = self.maximize().region;
        }
        tmp9 = Locale;
        tmp10 = outer1_1;
        num = 4;
        weekDataForRegion = Locale(outer1_1[4]).getWeekDataForRegion(region);
        str3 = "firstDay";
        dataProperty = Locale(outer1_1[2]).createDataProperty(obj, "firstDay", weekDataForRegion.firstDay);
        str4 = "weekend";
        dataProperty1 = Locale(outer1_1[2]).createDataProperty(obj, "weekend", weekDataForRegion.weekend);
        str5 = "minimalDays";
        dataProperty2 = Locale(outer1_1[2]).createDataProperty(obj, "minimalDays", weekDataForRegion.minimalDays);
        firstDayOfWeek = defaultResult.firstDayOfWeek;
        if (undefined !== firstDayOfWeek) {
          obj.firstDay = firstDayOfWeek;
        }
        return obj;
      } else {
        _TypeError = TypeError;
        prototype = TypeError.prototype;
        tmp3 = new.target;
        str = "Error uninitialized locale";
        tmp4 = new.target;
        typeError = new TypeError("Error uninitialized locale");
        tmp6 = typeError;
        throw typeError;
      }
    }
  }
  let obj = {
    get() {
      return Locale(outer1_1[3]).emitUnicodeLanguageId(Locale(outer1_1[3]).parseUnicodeLanguageId(outer1_2.default(this).locale));
    },
    enumerable: false,
    configurable: true
  };
  Object.defineProperty(Locale.prototype, "baseName", obj);
  obj = {
    get() {
      return outer1_2.default(this).calendar;
    },
    enumerable: false,
    configurable: true
  };
  Object.defineProperty(Locale.prototype, "calendar", obj);
  obj = {
    get() {
      return outer1_2.default(this).collation;
    },
    enumerable: false,
    configurable: true
  };
  Object.defineProperty(Locale.prototype, "collation", obj);
  let obj1 = {
    get() {
      return outer1_2.default(this).caseFirst;
    },
    enumerable: false,
    configurable: true
  };
  Object.defineProperty(Locale.prototype, "caseFirst", obj1);
  let obj2 = {
    get() {
      return outer1_2.default(this).numeric;
    },
    enumerable: false,
    configurable: true
  };
  Object.defineProperty(Locale.prototype, "numeric", obj2);
  let obj3 = {
    get() {
      return outer1_2.default(this).numberingSystem;
    },
    enumerable: false,
    configurable: true
  };
  Object.defineProperty(Locale.prototype, "numberingSystem", obj3);
  let obj4 = {
    get() {
      return Locale(outer1_1[3]).parseUnicodeLanguageId(outer1_2.default(this).locale).lang;
    },
    enumerable: false,
    configurable: true
  };
  Object.defineProperty(Locale.prototype, "language", obj4);
  let obj5 = {
    get() {
      return Locale(outer1_1[3]).parseUnicodeLanguageId(outer1_2.default(this).locale).script;
    },
    enumerable: false,
    configurable: true
  };
  Object.defineProperty(Locale.prototype, "script", obj5);
  const obj6 = {
    get() {
      return Locale(outer1_1[3]).parseUnicodeLanguageId(outer1_2.default(this).locale).region;
    },
    enumerable: false,
    configurable: true
  };
  Object.defineProperty(Locale.prototype, "region", obj6);
  let obj7 = {
    get() {
      const defaultResult = outer1_2.default(this);
      if (Locale(outer1_1[2]).HasOwnProperty(defaultResult, "initializedLocale")) {
        return defaultResult.firstDayOfWeek;
      } else {
        const _TypeError = TypeError;
        const typeError = new TypeError("Error uninitialized locale");
        throw typeError;
      }
    },
    enumerable: false,
    configurable: true
  };
  Object.defineProperty(Locale.prototype, "firstDayOfWeek", obj7);
  let obj8 = {
    get() {
      const defaultResult = outer1_2.default(this);
      if (Locale(outer1_1[2]).HasOwnProperty(defaultResult, "initializedLocale")) {
        return defaultResult.hourCycle;
      } else {
        const _TypeError = TypeError;
        const typeError = new TypeError("Error uninitialized locale");
        throw typeError;
      }
    },
    enumerable: false,
    configurable: true
  };
  Object.defineProperty(Locale.prototype, "hourCycle", obj8);
  Locale.relevantExtensionKeys = closure_4;
  Locale.polyfilled = true;
  return Locale;
})();
if ("undefined" !== typeof Symbol) {
  let _Object = Object;
  const _Symbol = Symbol;
  Object.defineProperty(tmp3.prototype, Symbol.toStringTag, { value: "Intl.Locale", writable: false, enumerable: false, configurable: true });
}
Object.defineProperty(tmp2.prototype.constructor, "length", { value: 1, writable: false, enumerable: false, configurable: true });

export const Locale = tmp2;
export default tmp2;

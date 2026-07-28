// Module ID: 13279
// Function ID: 102130
// Name: __exportStarResult23
// Dependencies: [13243, 13245, 13253, 13280, 13248, 13294, 13268, 13295, 13255]

// Module 13279 (__exportStarResult23)
const require = arg1;
const dependencyMap = arg6;
arg5.InitializeNumberFormat = function InitializeNumberFormat(arg0, arg1, arg2, arg3) {
  let availableLocales;
  let currencyDigitsData;
  let getDefaultLocale;
  let getInternalSlots;
  let localeData;
  let numberingSystemNames;
  ({ localeData, numberingSystemNames, getDefaultLocale } = arg3);
  ({ getInternalSlots, availableLocales, currencyDigitsData } = arg3);
  const result = require(13243) /* CanonicalizeLocaleList */.CanonicalizeLocaleList(arg1);
  const result1 = require(13245) /* __exportStarResult2 */.CoerceOptionsToObject(arg2);
  let obj = Object.create(null);
  obj.localeMatcher = require(13253) /* __exportStarResult4 */.GetOption(result1, "localeMatcher", "string", ["lookup", "best fit"], "best fit");
  const GetOptionResult = require(13253) /* __exportStarResult4 */.GetOption(result1, "numberingSystem", "string", undefined, undefined);
  if (undefined !== GetOptionResult) {
    if (numberingSystemNames.indexOf(GetOptionResult) < 0) {
      const _RangeError = RangeError;
      const concat = "Invalid numberingSystems: ".concat;
      throw RangeError("Invalid numberingSystems: ".concat(GetOptionResult));
    }
  }
  obj.nu = GetOptionResult;
  let num = 3;
  const ResolveLocaleResult = require(13280) /* match */.ResolveLocale(Array.from(availableLocales), result, obj, ["nu"], localeData, getDefaultLocale);
  require(13248) /* setInternalSlot */.invariant(!!localeData[ResolveLocaleResult.dataLocale], "Missing locale data for ".concat(ResolveLocaleResult.dataLocale));
  const internalSlots = getInternalSlots(arg0);
  ({ locale: tmp9.locale, dataLocale: tmp9.dataLocale, nu: tmp9.numberingSystem } = ResolveLocaleResult);
  internalSlots.dataLocaleData = localeData[ResolveLocaleResult.dataLocale];
  const result2 = require(13294) /* __exportStarResult27 */.SetNumberFormatUnitOptions(internalSlots, result1);
  const style = internalSlots.style;
  const GetOptionResult1 = require(13253) /* __exportStarResult4 */.GetOption(result1, "notation", "string", ["standard", "scientific", "engineering", "compact"], "standard");
  internalSlots.notation = GetOptionResult1;
  if ("currency" === style) {
    if ("standard" === GetOptionResult1) {
      obj = { currencyDigitsData };
      let num2 = require(13268) /* __exportStarResult15 */.CurrencyDigits(internalSlots.currency, obj);
      num = num2;
    }
    const result3 = require(13295) /* __exportStarResult26 */.SetNumberFormatDigitOptions(internalSlots, result1, num2, num, GetOptionResult1);
    let str6 = "auto";
    if ("compact" === GetOptionResult1) {
      internalSlots.compactDisplay = require(13253) /* __exportStarResult4 */.GetOption(result1, "compactDisplay", "string", ["short", "long"], "short");
      str6 = "min2";
    }
    internalSlots.useGrouping = require(13255) /* __exportStarResult6 */.GetStringOrBooleanOption(result1, "useGrouping", ["min2", "auto", "always"], "always", false, str6);
    internalSlots.signDisplay = require(13253) /* __exportStarResult4 */.GetOption(result1, "signDisplay", "string", ["auto", "never", "always", "exceptZero", "negative"], "auto");
    return arg0;
  }
  if ("percent" === style) {
    num = 0;
  }
  num2 = 0;
};

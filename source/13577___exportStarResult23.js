// Module ID: 13577
// Function ID: 13578
// Name: __exportStarResult23
// Dependencies: [13541, 13543, 13551, 13578, 13546, 13592, 13566, 13593, 13553]

// Module 13577 (__exportStarResult23)
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
  const result = require(13541) /* CanonicalizeLocaleList */.CanonicalizeLocaleList(arg1);
  const result1 = require(13543) /* __exportStarResult2 */.CoerceOptionsToObject(arg2);
  let obj = Object.create(null);
  obj.localeMatcher = require(13551) /* __exportStarResult4 */.GetOption(result1, "localeMatcher", "string", ["lookup", "best fit"], "best fit");
  const GetOptionResult = require(13551) /* __exportStarResult4 */.GetOption(result1, "numberingSystem", "string", undefined, undefined);
  if (undefined !== GetOptionResult) {
    if (numberingSystemNames.indexOf(GetOptionResult) < 0) {
      const _RangeError = RangeError;
      const concat = "Invalid numberingSystems: ".concat;
      throw RangeError("Invalid numberingSystems: ".concat(GetOptionResult));
    }
  }
  obj.nu = GetOptionResult;
  const ResolveLocaleResult = require(13578) /* match */.ResolveLocale(Array.from(availableLocales), result, obj, ["nu"], localeData, getDefaultLocale);
  require(13546) /* getMultiInternalSlots */.invariant(!!localeData[ResolveLocaleResult.dataLocale], "Missing locale data for ".concat(ResolveLocaleResult.dataLocale));
  const internalSlots = getInternalSlots(arg0);
  ({ locale: tmp11.locale, dataLocale: tmp11.dataLocale, nu: tmp11.numberingSystem } = ResolveLocaleResult);
  internalSlots.dataLocaleData = localeData[ResolveLocaleResult.dataLocale];
  const result2 = tmp(13592).SetNumberFormatUnitOptions(internalSlots, result1);
  const style = internalSlots.style;
  const GetOptionResult1 = require(13551) /* __exportStarResult4 */.GetOption(result1, "notation", "string", ["standard", "scientific", "engineering", "compact"], "standard");
  internalSlots.notation = GetOptionResult1;
  if ("currency" === style) {
    if ("standard" === GetOptionResult1) {
      obj = { currencyDigitsData: null };
      obj[0] = currencyDigitsData;
      let num2 = tmp(13566).CurrencyDigits(internalSlots.currency, obj);
      let num3 = num2;
    }
    const result3 = tmp(13593).SetNumberFormatDigitOptions(internalSlots, result1, num3, num2, GetOptionResult1);
    let str6 = "auto";
    if ("compact" === GetOptionResult1) {
      internalSlots.compactDisplay = tmp(13551).GetOption(result1, "compactDisplay", "string", ["short", "long"], "short");
      str6 = "min2";
    }
    internalSlots.useGrouping = tmp(13553).GetStringOrBooleanOption(result1, "useGrouping", ["min2", "auto", "always"], "always", false, str6);
    internalSlots.signDisplay = tmp(13551).GetOption(result1, "signDisplay", "string", ["auto", "never", "always", "exceptZero", "negative"], "auto");
    return arg0;
  }
  num2 = 3;
  if ("percent" === style) {
    num2 = 0;
  }
  num3 = 0;
};

// Module ID: 14517
// Function ID: 14518
// Name: InitializeNumberFormat
// Dependencies: [14481, 14483, 14491, 14518, 14486, 14532, 14506, 14533, 14493]
// Exports: InitializeNumberFormat

// Module 14517 (InitializeNumberFormat)
import _mod14481 from "module_14481" /* 14481 */;
import CoerceOptionsToObject from "CoerceOptionsToObject" /* 14483 */;
import _mod14486 from "module_14486" /* 14486 */;
import GetOption from "GetOption" /* 14491 */;
import LookupSupportedLocales from "LookupSupportedLocales" /* 14518 */;

require = arg1;
const dependencyMap = arg6;

export const InitializeNumberFormat = function InitializeNumberFormat(arg0, arg1, arg2, arg3) {
  ({ localeData, numberingSystemNames, getDefaultLocale } = arg3);
  ({ getInternalSlots, availableLocales, currencyDigitsData } = arg3);
  const result = _mod14481.CanonicalizeLocaleList(arg1);
  const result1 = CoerceOptionsToObject.CoerceOptionsToObject(arg2);
  const obj2 = Object.create(null);
  obj2.localeMatcher = GetOption.GetOption(result1, "localeMatcher", "string", ["lookup", "best fit"], "best fit");
  const GetOptionResult = GetOption.GetOption(result1, "numberingSystem", "string", undefined, undefined);
  if (undefined !== GetOptionResult) {
    if (numberingSystemNames.indexOf(GetOptionResult) < 0) {
      const _RangeError = RangeError;
      const concat = "Invalid numberingSystems: ".concat;
      throw RangeError("Invalid numberingSystems: ".concat(GetOptionResult));
    }
  }
  obj2.nu = GetOptionResult;
  const ResolveLocaleResult = LookupSupportedLocales.ResolveLocale(Array.from(availableLocales), result, obj2, ["nu"], localeData, getDefaultLocale);
  _mod14486.invariant(!!localeData[ResolveLocaleResult.dataLocale], "Missing locale data for ".concat(ResolveLocaleResult.dataLocale));
  const internalSlots = getInternalSlots(arg0);
  ({ locale: tmp11.locale, dataLocale: tmp11.dataLocale, nu: tmp11.numberingSystem } = ResolveLocaleResult);
  internalSlots.dataLocaleData = localeData[ResolveLocaleResult.dataLocale];
  const result2 = tmp(14532).SetNumberFormatUnitOptions(internalSlots, result1);
  const style = internalSlots.style;
  const GetOptionResult1 = GetOption.GetOption(result1, "notation", "string", ["standard", "scientific", "engineering", "compact"], "standard");
  internalSlots.notation = GetOptionResult1;
  if ("currency" === style) {
    if ("standard" === GetOptionResult1) {
      const obj = { currencyDigitsData };
      let num2 = tmp(14506).CurrencyDigits(internalSlots.currency, obj);
      let num3 = num2;
    }
    const result3 = tmp(14533).SetNumberFormatDigitOptions(internalSlots, result1, num3, num2, GetOptionResult1);
    let str6 = "auto";
    if ("compact" === GetOptionResult1) {
      internalSlots.compactDisplay = tmp(14491).GetOption(result1, "compactDisplay", "string", ["short", "long"], "short");
      str6 = "min2";
    }
    internalSlots.useGrouping = tmp(14493).GetStringOrBooleanOption(result1, "useGrouping", ["min2", "auto", "always"], "always", false, str6);
    internalSlots.signDisplay = tmp(14491).GetOption(result1, "signDisplay", "string", ["auto", "never", "always", "exceptZero", "negative"], "auto");
    return arg0;
  }
  num2 = 3;
  if ("percent" === style) {
    num2 = 0;
  }
  num3 = 0;
};

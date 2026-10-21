// Module ID: 15382
// Function ID: 15383
// Name: InitializeNumberFormat
// Dependencies: [15346, 15348, 15356, 15383, 15351, 15397, 15371, 15398, 15358]
// Exports: InitializeNumberFormat

// Module 15382 (InitializeNumberFormat)
import CanonicalizeLocaleList from "CanonicalizeLocaleList" /* 15346 */;
import CoerceOptionsToObject from "CoerceOptionsToObject" /* 15348 */;
import UNICODE_EXTENSION_SEQUENCE_REGEX from "UNICODE_EXTENSION_SEQUENCE_REGEX" /* 15351 */;
import GetOption from "GetOption" /* 15356 */;
import GetStringOrBooleanOption from "GetStringOrBooleanOption" /* 15358 */;
import LookupSupportedLocales from "LookupSupportedLocales" /* 15383 */;


export const InitializeNumberFormat = function InitializeNumberFormat(arg0, arg1, arg2, arg3) {
  let availableLocales;
  let currencyDigitsData;
  let getDefaultLocale;
  let getInternalSlots;
  let localeData;
  let num2;
  let numberingSystemNames;
  ({ localeData, numberingSystemNames, getDefaultLocale } = arg3);
  ({ getInternalSlots, availableLocales, currencyDigitsData } = arg3);
  const result = CanonicalizeLocaleList.CanonicalizeLocaleList(arg1);
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
  const tmp9 = !localeData[ResolveLocaleResult.dataLocale];
  UNICODE_EXTENSION_SEQUENCE_REGEX.invariant(!tmp9, "Missing locale data for ".concat(ResolveLocaleResult.dataLocale));
  const internalSlots = getInternalSlots(arg0);
  ({ locale: tmp11.locale, dataLocale: tmp11.dataLocale, nu: tmp11.numberingSystem } = ResolveLocaleResult);
  internalSlots.dataLocaleData = localeData[ResolveLocaleResult.dataLocale];
  const result2 = tmp(15397).SetNumberFormatUnitOptions(internalSlots, result1);
  const style = internalSlots.style;
  const GetOptionResult1 = GetOption.GetOption(result1, "notation", "string", ["standard", "scientific", "engineering", "compact"], "standard");
  internalSlots.notation = GetOptionResult1;
  if ("currency" === style) {
    let num3;
    if ("standard" === GetOptionResult1) {
      const obj = { currencyDigitsData };
      num2 = tmp(15371).CurrencyDigits(internalSlots.currency, obj);
      num3 = num2;
    }
    const result3 = tmp(15398).SetNumberFormatDigitOptions(internalSlots, result1, num3, num2, GetOptionResult1);
    let str6 = "auto";
    if ("compact" === GetOptionResult1) {
      internalSlots.compactDisplay = GetOption.GetOption(result1, "compactDisplay", "string", ["short", "long"], "short");
      str6 = "min2";
    }
    internalSlots.useGrouping = GetStringOrBooleanOption.GetStringOrBooleanOption(result1, "useGrouping", ["min2", "auto", "always"], "always", false, str6);
    internalSlots.signDisplay = GetOption.GetOption(result1, "signDisplay", "string", ["auto", "never", "always", "exceptZero", "negative"], "auto");
    return arg0;
  }
  num2 = 3;
  if ("percent" === style) {
    num2 = 0;
  }
  num3 = 0;
};

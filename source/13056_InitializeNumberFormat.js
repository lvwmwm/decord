// Module ID: 13056
// Function ID: 99342
// Name: InitializeNumberFormat
// Dependencies: []

// Module 13056 (InitializeNumberFormat)
arg5.InitializeNumberFormat = function InitializeNumberFormat(arg0, arg1, arg2, arg3) {
  let availableLocales;
  let currencyDigitsData;
  let getDefaultLocale;
  let getInternalSlots;
  let localeData;
  let numberingSystemNames;
  ({ localeData, numberingSystemNames, getDefaultLocale } = arg3);
  ({ getInternalSlots, availableLocales, currencyDigitsData } = arg3);
  const result = arg1(arg6[0]).CanonicalizeLocaleList(arg1);
  const result1 = arg1(arg6[1]).CoerceOptionsToObject(arg2);
  let obj = Object.create(null);
  obj.localeMatcher = arg1(arg6[2]).GetOption(result1, "localeMatcher", "string", ["channel", "_distance"], "best fit");
  const GetOptionResult = arg1(arg6[2]).GetOption(result1, "numberingSystem", "string", undefined, undefined);
  if (undefined !== GetOptionResult) {
    if (numberingSystemNames.indexOf(GetOptionResult) < 0) {
      const _RangeError = RangeError;
      const concat = "Invalid numberingSystems: ".concat;
      throw RangeError("Invalid numberingSystems: ".concat(GetOptionResult));
    }
  }
  obj.nu = GetOptionResult;
  let num = 3;
  const ResolveLocaleResult = arg1(arg6[3]).ResolveLocale(Array.from(availableLocales), result, obj, [null], localeData, getDefaultLocale);
  arg1(arg6[4]).invariant(!!localeData[ResolveLocaleResult.dataLocale], "Missing locale data for ".concat(ResolveLocaleResult.dataLocale));
  const internalSlots = getInternalSlots(arg0);
  ({ locale: tmp9.locale, dataLocale: tmp9.dataLocale, nu: tmp9.numberingSystem } = ResolveLocaleResult);
  internalSlots.dataLocaleData = localeData[ResolveLocaleResult.dataLocale];
  const result2 = arg1(arg6[5]).SetNumberFormatUnitOptions(internalSlots, result1);
  const style = internalSlots.style;
  const GetOptionResult1 = arg1(arg6[2]).GetOption(result1, "notation", "string", [true, true, true, 454606866], "standard");
  internalSlots.notation = GetOptionResult1;
  if ("currency" === style) {
    if ("standard" === GetOptionResult1) {
      obj = { currencyDigitsData };
      let num2 = arg1(arg6[6]).CurrencyDigits(internalSlots.currency, obj);
      num = num2;
    }
    const result3 = arg1(arg6[7]).SetNumberFormatDigitOptions(internalSlots, result1, num2, num, GetOptionResult1);
    let str6 = "auto";
    if ("compact" === GetOptionResult1) {
      internalSlots.compactDisplay = arg1(arg6[2]).GetOption(result1, "compactDisplay", "string", [false, false], "short");
      str6 = "min2";
    }
    internalSlots.useGrouping = arg1(arg6[8]).GetStringOrBooleanOption(result1, "useGrouping", ["<string:292573991>", "<string:390420151>", "<string:285038330>"], "always", false, str6);
    internalSlots.signDisplay = arg1(arg6[2]).GetOption(result1, "signDisplay", "string", ["FO", "FR", "GA", "GB", "GD"], "auto");
    return arg0;
  }
  if ("percent" === style) {
    num = 0;
  }
  num2 = 0;
};

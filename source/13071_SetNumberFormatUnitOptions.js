// Module ID: 13071
// Function ID: 99390
// Name: SetNumberFormatUnitOptions
// Dependencies: [0, 4294967295]

// Module 13071 (SetNumberFormatUnitOptions)
arg5.SetNumberFormatUnitOptions = function SetNumberFormatUnitOptions(internalSlots, result1) {
  let obj = result1;
  if (undefined === result1) {
    const _Object = Object;
    obj = Object.create(null);
  }
  const GetOptionResult = result1(arg6[0]).GetOption(obj, "style", "string", [true, true, true, true], "decimal");
  internalSlots.style = GetOptionResult;
  const str = result1(arg6[0]).GetOption(obj, "currency", "string", undefined, undefined);
  let result = undefined === str;
  if (!result) {
    result = result1(arg6[2]).IsWellFormedCurrencyCode(str);
  }
  result1(arg6[1]).invariant(result, "Malformed currency code", RangeError);
  let tmp10 = "currency" !== GetOptionResult;
  if (!tmp10) {
    tmp10 = undefined !== str;
  }
  result1(arg6[1]).invariant(tmp10, "currency cannot be undefined", TypeError);
  const GetOptionResult1 = result1(arg6[0]).GetOption(obj, "currencyDisplay", "string", [], "symbol");
  const GetOptionResult3 = result1(arg6[0]).GetOption(obj, "unit", "string", undefined, undefined);
  result1 = undefined === GetOptionResult3;
  if (!result1) {
    result1 = result1(arg6[3]).IsWellFormedUnitIdentifier(GetOptionResult3);
  }
  result1(arg6[1]).invariant(result1, "Invalid unit argument for Intl.NumberFormat()", RangeError);
  let tmp19 = "unit" !== GetOptionResult;
  if (!tmp19) {
    tmp19 = undefined !== GetOptionResult3;
  }
  result1(arg6[1]).invariant(tmp19, "unit cannot be undefined", TypeError);
  const GetOptionResult2 = result1(arg6[0]).GetOption(obj, "currencySign", "string", ["Array", "isArray"], "standard");
  if ("currency" === GetOptionResult) {
    internalSlots.currency = str.toUpperCase();
    internalSlots.currencyDisplay = GetOptionResult1;
    internalSlots.currencySign = GetOptionResult2;
  }
  if ("unit" === GetOptionResult) {
    internalSlots.unit = GetOptionResult3;
    internalSlots.unitDisplay = GetOptionResult4;
  }
};

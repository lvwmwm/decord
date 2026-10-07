// Module ID: 14016
// Function ID: 14017
// Name: SetNumberFormatUnitOptions
// Dependencies: [13975, 13970, 13980, 13981]
// Exports: SetNumberFormatUnitOptions

// Module 14016 (SetNumberFormatUnitOptions)
import UNICODE_EXTENSION_SEQUENCE_REGEX from "UNICODE_EXTENSION_SEQUENCE_REGEX" /* 13970 */;
import GetOption from "GetOption" /* 13975 */;


export const SetNumberFormatUnitOptions = function SetNumberFormatUnitOptions(internalSlots, result1) {
  let obj = result1;
  if (undefined === result1) {
    const _Object = Object;
    obj = Object.create(null);
  }
  const GetOptionResult = GetOption.GetOption(obj, "style", "string", ["decimal", "percent", "currency", "unit"], "decimal");
  internalSlots.style = GetOptionResult;
  const str = GetOption.GetOption(obj, "currency", "string", undefined, undefined);
  let result = undefined === str;
  const invariant = UNICODE_EXTENSION_SEQUENCE_REGEX.invariant;
  if (!result) {
    result = tmp4(13980).IsWellFormedCurrencyCode(str);
  }
  invariant(result, "Malformed currency code", RangeError);
  let tmp10 = "currency" !== GetOptionResult;
  const invariant2 = tmp4(13970).invariant;
  if (!tmp10) {
    tmp10 = undefined !== str;
  }
  invariant2(tmp10, "currency cannot be undefined", TypeError);
  const GetOptionResult1 = GetOption.GetOption(obj, "currencyDisplay", "string", ["code", "symbol", "narrowSymbol", "name"], "symbol");
  const GetOptionResult2 = GetOption.GetOption(obj, "currencySign", "string", ["standard", "accounting"], "standard");
  const GetOptionResult3 = GetOption.GetOption(obj, "unit", "string", undefined, undefined);
  result1 = undefined === GetOptionResult3;
  const invariant3 = tmp4(13970).invariant;
  if (!result1) {
    result1 = tmp4(13981).IsWellFormedUnitIdentifier(GetOptionResult3);
  }
  invariant3(result1, "Invalid unit argument for Intl.NumberFormat()", RangeError);
  let tmp17 = "unit" !== GetOptionResult;
  const invariant4 = tmp4(13970).invariant;
  if (!tmp17) {
    tmp17 = undefined !== GetOptionResult3;
  }
  invariant4(tmp17, "unit cannot be undefined", TypeError);
  const GetOptionResult4 = GetOption.GetOption(obj, "unitDisplay", "string", ["short", "narrow", "long"], "short");
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

// Module ID: 13185
// Function ID: 101546
// Name: __exportStarResult27
// Dependencies: [13144, 13139, 13149, 13150]

// Module 13185 (__exportStarResult27)
const require = arg1;
const dependencyMap = arg6;
arg5.SetNumberFormatUnitOptions = function SetNumberFormatUnitOptions(internalSlots, result1) {
  let obj = result1;
  if (undefined === result1) {
    const _Object = Object;
    obj = Object.create(null);
  }
  const GetOptionResult = require(13144) /* __exportStarResult4 */.GetOption(obj, "style", "string", ["decimal", "percent", "currency", "unit"], "decimal");
  internalSlots.style = GetOptionResult;
  const str = require(13144) /* __exportStarResult4 */.GetOption(obj, "currency", "string", undefined, undefined);
  let result = undefined === str;
  if (!result) {
    result = require(13149) /* __exportStarResult9 */.IsWellFormedCurrencyCode(str);
  }
  require(13139) /* setInternalSlot */.invariant(result, "Malformed currency code", RangeError);
  let tmp10 = "currency" !== GetOptionResult;
  if (!tmp10) {
    tmp10 = undefined !== str;
  }
  require(13139) /* setInternalSlot */.invariant(tmp10, "currency cannot be undefined", TypeError);
  const GetOptionResult1 = require(13144) /* __exportStarResult4 */.GetOption(obj, "currencyDisplay", "string", ["code", "symbol", "narrowSymbol", "name"], "symbol");
  const GetOptionResult3 = require(13144) /* __exportStarResult4 */.GetOption(obj, "unit", "string", undefined, undefined);
  result1 = undefined === GetOptionResult3;
  if (!result1) {
    result1 = require(13150) /* __exportStarResult10 */.IsWellFormedUnitIdentifier(GetOptionResult3);
  }
  require(13139) /* setInternalSlot */.invariant(result1, "Invalid unit argument for Intl.NumberFormat()", RangeError);
  let tmp19 = "unit" !== GetOptionResult;
  if (!tmp19) {
    tmp19 = undefined !== GetOptionResult3;
  }
  require(13139) /* setInternalSlot */.invariant(tmp19, "unit cannot be undefined", TypeError);
  const GetOptionResult2 = require(13144) /* __exportStarResult4 */.GetOption(obj, "currencySign", "string", ["standard", "accounting"], "standard");
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

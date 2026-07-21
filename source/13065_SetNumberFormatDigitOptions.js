// Module ID: 13065
// Function ID: 99359
// Name: SetNumberFormatDigitOptions
// Dependencies: []

// Module 13065 (SetNumberFormatDigitOptions)
arg5.SetNumberFormatDigitOptions = function SetNumberFormatDigitOptions(internalSlots, result1, minimumFractionDigits, arg3, GetOptionResult1) {
  let maximumFractionDigits;
  let maximumSignificantDigits;
  let minimumSignificantDigits;
  let tmp = arg3;
  ({ minimumFractionDigits, maximumFractionDigits, minimumSignificantDigits, maximumSignificantDigits } = result1);
  internalSlots.minimumIntegerDigits = result1(arg6[0]).GetNumberOption(result1, "minimumIntegerDigits", 1, 21, 1);
  const GetNumberOptionResult = result1(arg6[0]).GetNumberOption(result1, "roundingIncrement", 1, 5000, 1);
  const hasItem = set.has(GetNumberOptionResult);
  const combined = "Invalid rounding increment value: ".concat(GetNumberOptionResult, ".\nValid values are ");
  result1(arg6[1]).invariant(hasItem, combined.concat(Array.from(set).join(", "), "."));
  const arr = Array.from(set);
  GetOptionResult1 = result1(arg6[2]).GetOption(result1, "roundingPriority", "string", [], "auto");
  const GetOptionResult = result1(arg6[2]).GetOption(result1, "roundingMode", "string", ["Europe/Andorra", "Asia/Dubai", "Asia/Kabul", "America/Antigua", "America/Anguilla", "Europe/Tirane", "Asia/Yerevan", "America/Curacao", "Africa/Luanda"], "halfExpand");
  if (1 !== GetNumberOptionResult) {
    tmp = minimumFractionDigits;
  }
  internalSlots.roundingIncrement = GetNumberOptionResult;
  internalSlots.roundingMode = GetOptionResult;
  internalSlots.trailingZeroDisplay = result1(arg6[2]).GetOption(result1, "trailingZeroDisplay", "string", ["Array", "isArray"], "auto");
  let flag = true;
  let flag2 = true;
  if ("auto" === GetOptionResult1) {
    let tmp11 = tmp9;
    if (!tmp9) {
      let tmp12 = !tmp10;
      if (!tmp10) {
        tmp12 = "compact" === GetOptionResult1;
      }
      tmp11 = tmp12;
    }
    let flag3 = true;
    if (tmp11) {
      flag3 = false;
    }
    flag2 = flag3;
    flag = tmp9;
  }
  if (flag) {
    if (tmp9) {
      internalSlots.minimumSignificantDigits = result1(arg6[3]).DefaultNumberOption(minimumSignificantDigits, 1, 21, 1);
      internalSlots.maximumSignificantDigits = result1(arg6[3]).DefaultNumberOption(maximumSignificantDigits, internalSlots.minimumSignificantDigits, 21, 21);
    } else {
      internalSlots.minimumSignificantDigits = 1;
      internalSlots.maximumSignificantDigits = 21;
    }
  }
  if (flag2) {
    if (tmp10) {
      const DefaultNumberOptionResult = result1(arg6[3]).DefaultNumberOption(minimumFractionDigits, 0, 100, undefined);
      const DefaultNumberOptionResult1 = result1(arg6[3]).DefaultNumberOption(maximumFractionDigits, 0, 100, undefined);
      if (undefined === DefaultNumberOptionResult) {
        result1(arg6[1]).invariant(undefined !== DefaultNumberOptionResult1, "maximumFractionDigits must be defined");
        const _Math2 = Math;
        let bound = Math.min(minimumFractionDigits, DefaultNumberOptionResult1);
        let bound1 = DefaultNumberOptionResult1;
      } else if (undefined === DefaultNumberOptionResult1) {
        const _Math = Math;
        bound1 = Math.max(tmp, DefaultNumberOptionResult);
        bound = DefaultNumberOptionResult;
      } else {
        bound = DefaultNumberOptionResult;
        bound1 = DefaultNumberOptionResult1;
        if (DefaultNumberOptionResult > DefaultNumberOptionResult1) {
          const _RangeError2 = RangeError;
          const concat = "Invalid range, ".concat;
          const combined1 = "Invalid range, ".concat(DefaultNumberOptionResult, " > ");
          const rangeError = new RangeError(combined1.concat(DefaultNumberOptionResult1));
          throw rangeError;
        }
      }
      internalSlots.minimumFractionDigits = bound;
      internalSlots.maximumFractionDigits = bound1;
    } else {
      internalSlots.minimumFractionDigits = minimumFractionDigits;
      internalSlots.maximumFractionDigits = tmp;
    }
  }
  if (!flag) {
    if (!flag2) {
      internalSlots.minimumFractionDigits = 0;
      internalSlots.maximumFractionDigits = 0;
      internalSlots.minimumSignificantDigits = 1;
      internalSlots.maximumSignificantDigits = 2;
      internalSlots.roundingType = "morePrecision";
      internalSlots.roundingPriority = "morePrecision";
    }
    if (tmp8) {
      const _TypeError = TypeError;
      result1(arg6[1]).invariant("fractionDigits" === internalSlots.roundingType, "Invalid roundingType", TypeError);
      const _RangeError = RangeError;
      result1(arg6[1]).invariant(internalSlots.maximumFractionDigits === internalSlots.minimumFractionDigits, "With roundingIncrement > 1, maximumFractionDigits and minimumFractionDigits must be equal.", RangeError);
    }
  }
  if ("morePrecision" === GetOptionResult1) {
    internalSlots.roundingType = "morePrecision";
    internalSlots.roundingPriority = "morePrecision";
  } else if ("lessPrecision" === GetOptionResult1) {
    internalSlots.roundingType = "lessPrecision";
    internalSlots.roundingPriority = "lessPrecision";
  } else if (tmp9) {
    internalSlots.roundingType = "significantDigits";
    internalSlots.roundingPriority = "auto";
  } else {
    internalSlots.roundingType = "fractionDigits";
    internalSlots.roundingPriority = "auto";
  }
};
const set = new Set([]);

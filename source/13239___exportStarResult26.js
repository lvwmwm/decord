// Module ID: 13239
// Function ID: 101875
// Name: __exportStarResult26
// Dependencies: [13195, 13192, 13197, 13196]

// Module 13239 (__exportStarResult26)
const require = arg1;
const dependencyMap = arg6;
arg5.SetNumberFormatDigitOptions = function SetNumberFormatDigitOptions(internalSlots, result1, minimumFractionDigits, arg3, GetOptionResult1) {
  let maximumFractionDigits;
  let maximumSignificantDigits;
  let minimumSignificantDigits;
  let tmp = arg3;
  ({ minimumFractionDigits, maximumFractionDigits, minimumSignificantDigits, maximumSignificantDigits } = result1);
  internalSlots.minimumIntegerDigits = require(13195) /* __exportStarResult3 */.GetNumberOption(result1, "minimumIntegerDigits", 1, 21, 1);
  const GetNumberOptionResult = require(13195) /* __exportStarResult3 */.GetNumberOption(result1, "roundingIncrement", 1, 5000, 1);
  const hasItem = set.has(GetNumberOptionResult);
  const combined = "Invalid rounding increment value: ".concat(GetNumberOptionResult, ".\nValid values are ");
  require(13192) /* setInternalSlot */.invariant(hasItem, combined.concat(Array.from(set).join(", "), "."));
  const arr = Array.from(set);
  GetOptionResult1 = require(13197) /* __exportStarResult4 */.GetOption(result1, "roundingPriority", "string", ["auto", "morePrecision", "lessPrecision"], "auto");
  const GetOptionResult = require(13197) /* __exportStarResult4 */.GetOption(result1, "roundingMode", "string", ["ceil", "floor", "expand", "trunc", "halfCeil", "halfFloor", "halfExpand", "halfTrunc", "halfEven"], "halfExpand");
  if (1 !== GetNumberOptionResult) {
    tmp = minimumFractionDigits;
  }
  internalSlots.roundingIncrement = GetNumberOptionResult;
  internalSlots.roundingMode = GetOptionResult;
  internalSlots.trailingZeroDisplay = require(13197) /* __exportStarResult4 */.GetOption(result1, "trailingZeroDisplay", "string", ["auto", "stripIfInteger"], "auto");
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
      internalSlots.minimumSignificantDigits = require(13196) /* DefaultNumberOption */.DefaultNumberOption(minimumSignificantDigits, 1, 21, 1);
      internalSlots.maximumSignificantDigits = require(13196) /* DefaultNumberOption */.DefaultNumberOption(maximumSignificantDigits, internalSlots.minimumSignificantDigits, 21, 21);
    } else {
      internalSlots.minimumSignificantDigits = 1;
      internalSlots.maximumSignificantDigits = 21;
    }
  }
  if (flag2) {
    if (tmp10) {
      const DefaultNumberOptionResult = require(13196) /* DefaultNumberOption */.DefaultNumberOption(minimumFractionDigits, 0, 100, undefined);
      const DefaultNumberOptionResult1 = require(13196) /* DefaultNumberOption */.DefaultNumberOption(maximumFractionDigits, 0, 100, undefined);
      if (undefined === DefaultNumberOptionResult) {
        require(13192) /* setInternalSlot */.invariant(undefined !== DefaultNumberOptionResult1, "maximumFractionDigits must be defined");
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
      require(13192) /* setInternalSlot */.invariant("fractionDigits" === internalSlots.roundingType, "Invalid roundingType", TypeError);
      const _RangeError = RangeError;
      require(13192) /* setInternalSlot */.invariant(internalSlots.maximumFractionDigits === internalSlots.minimumFractionDigits, "With roundingIncrement > 1, maximumFractionDigits and minimumFractionDigits must be equal.", RangeError);
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
const set = new Set([1, 2, 5, 10, 20, 25, 50, 100, 200, 250, 500, 1000, 2000, 2500, 5000]);

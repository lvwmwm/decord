// Module ID: 13041
// Function ID: 99303
// Name: FormatNumericToString
// Dependencies: []

// Module 13041 (FormatNumericToString)
arg5.FormatNumericToString = function FormatNumericToString(roundingType, timesResult) {
  let formattedString;
  let roundedNumber;
  if (timesResult.isZero()) {
    if (timesResult.isNegative()) {
      let ZERO = timesResult(arg6[0]).ZERO;
      let str2 = "negative";
    }
    roundingType = roundingType.roundingType;
    const result = timesResult(arg6[2]).GetUnsignedRoundingMode(roundingType.roundingMode, tmp6);
    if ("significantDigits" === roundingType) {
      let ToRawPrecisionResult = timesResult(arg6[3]).ToRawPrecision(ZERO, roundingType.minimumSignificantDigits, roundingType.maximumSignificantDigits, result);
    } else if ("fractionDigits" === roundingType) {
      ToRawPrecisionResult = timesResult(arg6[4]).ToRawFixed(ZERO, roundingType.minimumFractionDigits, roundingType.maximumFractionDigits, roundingType.roundingIncrement, result);
    } else {
      const ToRawPrecisionResult1 = timesResult(arg6[3]).ToRawPrecision(ZERO, roundingType.minimumSignificantDigits, roundingType.maximumSignificantDigits, result);
      let ToRawFixedResult = timesResult(arg6[4]).ToRawFixed(ZERO, roundingType.minimumFractionDigits, roundingType.maximumFractionDigits, roundingType.roundingIncrement, result);
      if ("morePrecision" === roundingType.roundingType) {
        if (ToRawPrecisionResult1.roundingMagnitude <= ToRawFixedResult.roundingMagnitude) {
          ToRawFixedResult = ToRawPrecisionResult1;
        }
        ToRawPrecisionResult = ToRawFixedResult;
      } else {
        timesResult(arg6[1]).invariant("lessPrecision" === roundingType.roundingType, "Invalid roundingType");
        ToRawPrecisionResult = ToRawPrecisionResult1;
        if (ToRawPrecisionResult1.roundingMagnitude <= ToRawFixedResult.roundingMagnitude) {
          ToRawPrecisionResult = ToRawFixedResult;
        }
      }
    }
    ({ roundedNumber, formattedString } = ToRawPrecisionResult);
    let substr = formattedString;
    if ("stripIfInteger" === roundingType.trailingZeroDisplay) {
      substr = formattedString;
      if (roundedNumber.isInteger()) {
        const index = formattedString.indexOf(".");
        substr = formattedString;
        if (index > -1) {
          substr = formattedString.slice(0, index);
        }
      }
    }
    const integerDigitsCount = ToRawPrecisionResult.integerDigitsCount;
    const minimumIntegerDigits = roundingType.minimumIntegerDigits;
    let sum = substr;
    if (integerDigitsCount < minimumIntegerDigits) {
      sum = timesResult(arg6[1]).repeat("0", minimumIntegerDigits - integerDigitsCount) + substr;
    }
    if ("negative" !== str2) {
      const obj = { roundedNumber, formattedString: sum };
      return obj;
    } else if (roundedNumber.isZero()) {
      let NEGATIVE_ZERO = timesResult(arg6[0]).NEGATIVE_ZERO;
    } else {
      NEGATIVE_ZERO = roundedNumber.negated();
    }
  }
  timesResult(arg6[1]).invariant(timesResult.isFinite(), "NumberFormatDigitInternalSlots value is not finite");
  let str = "positive";
  if (timesResult.lessThan(0)) {
    str = "negative";
  }
  str2 = str;
  ZERO = timesResult;
  if ("negative" === str) {
    ZERO = timesResult.negated();
    str2 = str;
  }
};

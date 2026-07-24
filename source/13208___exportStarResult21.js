// Module ID: 13208
// Function ID: 101786
// Name: __exportStarResult21
// Dependencies: [13194, 13192, 13209, 13210, 13211]

// Module 13208 (__exportStarResult21)
const require = arg1;
const dependencyMap = arg6;
arg5.FormatNumericToString = function FormatNumericToString(roundingType, timesResult) {
  let formattedString;
  let roundedNumber;
  if (timesResult.isZero()) {
    if (timesResult.isNegative()) {
      let ZERO = require(13194) /* TEN */.ZERO;
      let str2 = "negative";
    }
    roundingType = roundingType.roundingType;
    const result = require(13209) /* __exportStarResult22 */.GetUnsignedRoundingMode(roundingType.roundingMode, tmp6);
    if ("significantDigits" === roundingType) {
      let ToRawPrecisionResult = require(13210) /* __exportStarResult29 */.ToRawPrecision(ZERO, roundingType.minimumSignificantDigits, roundingType.maximumSignificantDigits, result);
    } else if ("fractionDigits" === roundingType) {
      ToRawPrecisionResult = require(13211) /* __exportStarResult28 */.ToRawFixed(ZERO, roundingType.minimumFractionDigits, roundingType.maximumFractionDigits, roundingType.roundingIncrement, result);
    } else {
      const ToRawPrecisionResult1 = require(13210) /* __exportStarResult29 */.ToRawPrecision(ZERO, roundingType.minimumSignificantDigits, roundingType.maximumSignificantDigits, result);
      let ToRawFixedResult = require(13211) /* __exportStarResult28 */.ToRawFixed(ZERO, roundingType.minimumFractionDigits, roundingType.maximumFractionDigits, roundingType.roundingIncrement, result);
      if ("morePrecision" === roundingType.roundingType) {
        if (ToRawPrecisionResult1.roundingMagnitude <= ToRawFixedResult.roundingMagnitude) {
          ToRawFixedResult = ToRawPrecisionResult1;
        }
        ToRawPrecisionResult = ToRawFixedResult;
      } else {
        require(13192) /* setInternalSlot */.invariant("lessPrecision" === roundingType.roundingType, "Invalid roundingType");
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
      sum = require(13192) /* setInternalSlot */.repeat("0", minimumIntegerDigits - integerDigitsCount) + substr;
    }
    if ("negative" !== str2) {
      const obj = { roundedNumber, formattedString: sum };
      return obj;
    } else if (roundedNumber.isZero()) {
      let NEGATIVE_ZERO = require(13194) /* TEN */.NEGATIVE_ZERO;
    } else {
      NEGATIVE_ZERO = roundedNumber.negated();
    }
  }
  require(13192) /* setInternalSlot */.invariant(timesResult.isFinite(), "NumberFormatDigitInternalSlots value is not finite");
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

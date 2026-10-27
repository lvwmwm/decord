// Module ID: 15506
// Function ID: 15507
// Name: FormatNumericToString
// Dependencies: [15492, 15490, 15507, 15508, 15509]
// Exports: FormatNumericToString

// Module 15506 (FormatNumericToString)
import UNICODE_EXTENSION_SEQUENCE_REGEX from "UNICODE_EXTENSION_SEQUENCE_REGEX" /* 15490 */;
import TEN from "TEN" /* 15492 */;


export const FormatNumericToString = function FormatNumericToString(roundingType, timesResult) {
  let ZERO;
  let formattedString;
  let roundedNumber;
  let str2;
  let tmp5;
  if (timesResult.isZero()) {
    let ToRawPrecisionResult;
    if (timesResult.isNegative()) {
      ZERO = TEN.ZERO;
      str2 = "negative";
      tmp5 = require;
    }
    roundingType = roundingType.roundingType;
    const result = tmp5(15507).GetUnsignedRoundingMode(roundingType.roundingMode, tmp9);
    if ("significantDigits" === roundingType) {
      ToRawPrecisionResult = tmp5(15508).ToRawPrecision(ZERO, roundingType.minimumSignificantDigits, roundingType.maximumSignificantDigits, result);
    } else if ("fractionDigits" === roundingType) {
      ToRawPrecisionResult = tmp5(15509).ToRawFixed(ZERO, roundingType.minimumFractionDigits, roundingType.maximumFractionDigits, roundingType.roundingIncrement, result);
    } else {
      const ToRawPrecisionResult1 = tmp5(15508).ToRawPrecision(ZERO, roundingType.minimumSignificantDigits, roundingType.maximumSignificantDigits, result);
      let ToRawFixedResult = tmp5(15509).ToRawFixed(ZERO, roundingType.minimumFractionDigits, roundingType.maximumFractionDigits, roundingType.roundingIncrement, result);
      if ("morePrecision" === roundingType.roundingType) {
        if (ToRawPrecisionResult1.roundingMagnitude <= ToRawFixedResult.roundingMagnitude) {
          ToRawFixedResult = ToRawPrecisionResult1;
        }
        ToRawPrecisionResult = ToRawFixedResult;
      } else {
        tmp5(15490).invariant("lessPrecision" === roundingType.roundingType, "Invalid roundingType");
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
      sum = tmp5(15490).repeat("0", minimumIntegerDigits - integerDigitsCount) + substr;
    }
    let tmp22 = roundedNumber;
    if ("negative" === str2) {
      let NEGATIVE_ZERO;
      if (roundedNumber.isZero()) {
        NEGATIVE_ZERO = tmp5(15492).NEGATIVE_ZERO;
      } else {
        NEGATIVE_ZERO = roundedNumber.negated();
      }
      tmp22 = NEGATIVE_ZERO;
    }
    return { roundedNumber: tmp22, formattedString: sum };
  }
  UNICODE_EXTENSION_SEQUENCE_REGEX.invariant(timesResult.isFinite(), "NumberFormatDigitInternalSlots value is not finite");
  let str = "positive";
  if (timesResult.lessThan(0)) {
    str = "negative";
  }
  ZERO = timesResult;
  str2 = str;
  tmp5 = tmp;
  if ("negative" === str) {
    ZERO = timesResult.negated();
    str2 = str;
    tmp5 = tmp;
  }
};

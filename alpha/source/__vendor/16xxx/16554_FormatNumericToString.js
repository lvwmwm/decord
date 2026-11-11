// Module ID: 16554
// Function ID: 16555
// Name: FormatNumericToString
// Dependencies: [16540, 16538, 16555, 16556, 16557]
// Exports: FormatNumericToString

// Module 16554 (FormatNumericToString)
import UNICODE_EXTENSION_SEQUENCE_REGEX from "UNICODE_EXTENSION_SEQUENCE_REGEX" /* 16538 */;
import TEN from "TEN" /* 16540 */;


export function FormatNumericToString(roundingType, timesResult) {
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
    const result = tmp5(16555).GetUnsignedRoundingMode(roundingType.roundingMode, tmp9);
    if ("significantDigits" === roundingType) {
      ToRawPrecisionResult = tmp5(16556).ToRawPrecision(ZERO, roundingType.minimumSignificantDigits, roundingType.maximumSignificantDigits, result);
    } else if ("fractionDigits" === roundingType) {
      ToRawPrecisionResult = tmp5(16557).ToRawFixed(ZERO, roundingType.minimumFractionDigits, roundingType.maximumFractionDigits, roundingType.roundingIncrement, result);
    } else {
      const ToRawPrecisionResult1 = tmp5(16556).ToRawPrecision(ZERO, roundingType.minimumSignificantDigits, roundingType.maximumSignificantDigits, result);
      let ToRawFixedResult = tmp5(16557).ToRawFixed(ZERO, roundingType.minimumFractionDigits, roundingType.maximumFractionDigits, roundingType.roundingIncrement, result);
      if ("morePrecision" === roundingType.roundingType) {
        if (ToRawPrecisionResult1.roundingMagnitude <= ToRawFixedResult.roundingMagnitude) {
          ToRawFixedResult = ToRawPrecisionResult1;
        }
        ToRawPrecisionResult = ToRawFixedResult;
      } else {
        tmp5(16538).invariant("lessPrecision" === roundingType.roundingType, "Invalid roundingType");
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
      sum = tmp5(16538).repeat("0", minimumIntegerDigits - integerDigitsCount) + substr;
    }
    let tmp22 = roundedNumber;
    if ("negative" === str2) {
      let NEGATIVE_ZERO;
      if (roundedNumber.isZero()) {
        NEGATIVE_ZERO = tmp5(16540).NEGATIVE_ZERO;
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
}

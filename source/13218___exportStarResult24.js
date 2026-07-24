// Module ID: 13218
// Function ID: 101810
// Name: __exportStarResult24
// Dependencies: [1257, 13191, 13213, 13192, 13206, 13208]
// Exports: PartitionNumberPattern

// Module 13218 (__exportStarResult24)
import createExporter from "createExporter";
import digitsToString from "digitsToString";
import createExporter from "createExporter";
import partitionNumberIntoParts from "partitionNumberIntoParts";


export const PartitionNumberPattern = function PartitionNumberPattern(internalSlots, isNaN) {
  let dataLocaleData;
  let formattedString;
  let pl;
  let roundedNumber;
  ({ pl, dataLocaleData } = internalSlots);
  let tmp = dataLocaleData.numbers.symbols[internalSlots.numberingSystem];
  if (!tmp) {
    tmp = dataLocaleData.numbers.symbols[dataLocaleData.numbers.nu[0]];
  }
  if (isNaN.isNaN()) {
    formattedString = tmp.nan;
    let num2 = 0;
    roundedNumber = isNaN;
    let num3 = 0;
  } else if (isNaN.isFinite()) {
    let timesResult1 = isNaN;
    let num5 = 0;
    let num6 = 0;
    if (!isNaN.isZero()) {
      require(13192) /* setInternalSlot */.invariant(isNaN.isFinite(), "Input must be a mathematical value");
      let timesResult = isNaN;
      if ("percent" == internalSlots.style) {
        timesResult = isNaN.times(100);
      }
      const ComputeExponentResult = require(13206) /* __exportStarResult13 */.ComputeExponent(internalSlots, timesResult);
      const first = ComputeExponentResult[0];
      num5 = ComputeExponentResult[1];
      timesResult1 = timesResult.times(digitsToString.default.pow(10, -first));
      num6 = first;
      const _default = digitsToString.default;
    }
    const result = require(13208) /* __exportStarResult21 */.FormatNumericToString(internalSlots, timesResult1);
    ({ formattedString, roundedNumber } = result);
    num2 = num5;
    num3 = num6;
  } else {
    formattedString = tmp.infinity;
    num2 = 0;
    roundedNumber = isNaN;
    num3 = 0;
  }
  const signDisplay = internalSlots.signDisplay;
  let num13 = 0;
  if ("never" !== signDisplay) {
    if ("auto" === signDisplay) {
      if (roundedNumber.isPositive()) {
        let num19 = 0;
      } else {
        num19 = -1;
      }
      num13 = num19;
    } else if ("always" === signDisplay) {
      if (roundedNumber.isPositive()) {
        let num18 = 1;
      } else {
        num18 = -1;
      }
      num13 = num18;
    } else if ("exceptZero" === signDisplay) {
      let num16 = 0;
      if (!roundedNumber.isZero()) {
        let num17 = 1;
        if (roundedNumber.isNegative()) {
          num17 = -1;
        }
        num16 = num17;
      }
      num13 = num16;
    } else {
      require(13192) /* setInternalSlot */.invariant("negative" === signDisplay, "signDisplay must be \"negative\"");
      let num15 = 0;
      if (roundedNumber.isNegative()) {
        num15 = 0;
        if (!roundedNumber.isZero()) {
          num15 = -1;
        }
      }
      num13 = num15;
    }
  }
  const obj = { roundedNumber, formattedString, exponent: num3, magnitude: num2, sign: num13 };
  return partitionNumberIntoParts.default(obj, internalSlots.dataLocaleData, pl, internalSlots);
};

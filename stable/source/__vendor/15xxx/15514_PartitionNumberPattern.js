// Module ID: 15514
// Function ID: 15515
// Name: PartitionNumberPattern
// Dependencies: [1174, 15487, 15509, 15488, 15502, 15504]
// Exports: PartitionNumberPattern

// Module 15514 (PartitionNumberPattern)
import _mod15487 from "module_15487" /* 15487 */;
import UNICODE_EXTENSION_SEQUENCE_REGEX from "UNICODE_EXTENSION_SEQUENCE_REGEX" /* 15488 */;
import ComputeExponent from "ComputeExponent" /* 15502 */;
import FormatNumericToString from "FormatNumericToString" /* 15504 */;
import formatToParts2 from "formatToParts" /* 15509 */;
import module_1174_mod from "module_1174" /* 1174 */;

let module_1174 = module_1174_mod;
const module_15487 = module_1174.__importDefault(_mod15487);
module_1174 = module_1174_mod;
const formatToParts = module_1174.__importDefault(formatToParts2);

export const PartitionNumberPattern = function PartitionNumberPattern(internalSlots, isNaN) {
  let dataLocaleData;
  let formattedString;
  let num;
  let num2;
  let num4;
  let pl;
  let roundedNumber;
  let tmp7;
  ({ pl, dataLocaleData } = internalSlots);
  const tmp = dataLocaleData.numbers.symbols[internalSlots.numberingSystem] || dataLocaleData.numbers.symbols[dataLocaleData.numbers.nu[0]];
  if (isNaN.isNaN()) {
    formattedString = tmp.nan;
    num = 0;
    num2 = 0;
    roundedNumber = isNaN;
  } else if (isNaN.isFinite()) {
    let num3 = 0;
    let timesResult1 = isNaN;
    if (!isNaN.isZero()) {
      UNICODE_EXTENSION_SEQUENCE_REGEX.invariant(isNaN.isFinite(), "Input must be a mathematical value");
      let timesResult = isNaN;
      if ("percent" == internalSlots.style) {
        timesResult = isNaN.times(100);
      }
      [tmp7, num4] = ComputeExponent.ComputeExponent(internalSlots, timesResult);
      ComputeExponent.ComputeExponent(internalSlots, timesResult);
      const _default = module_15487.default;
      timesResult1 = timesResult.times(_default.pow(10, -tmp7));
      num3 = tmp7;
    }
    const result = FormatNumericToString.FormatNumericToString(internalSlots, timesResult1);
    ({ formattedString, roundedNumber } = result);
    num = num3;
    num2 = num4;
  } else {
    formattedString = tmp.infinity;
    num = 0;
    num2 = 0;
    roundedNumber = isNaN;
  }
  const signDisplay = internalSlots.signDisplay;
  let num7 = 0;
  if ("never" !== signDisplay) {
    if ("auto" === signDisplay) {
      let num12;
      if (roundedNumber.isPositive()) {
        num12 = 0;
      } else {
        num12 = -1;
      }
      num7 = num12;
    } else if ("always" === signDisplay) {
      let num11;
      if (roundedNumber.isPositive()) {
        num11 = 1;
      } else {
        num11 = -1;
      }
      num7 = num11;
    } else if ("exceptZero" === signDisplay) {
      let num9 = 0;
      if (!roundedNumber.isZero()) {
        let num10 = 1;
        if (roundedNumber.isNegative()) {
          num10 = -1;
        }
        num9 = num10;
      }
      num7 = num9;
    } else {
      UNICODE_EXTENSION_SEQUENCE_REGEX.invariant("negative" === signDisplay, "signDisplay must be \"negative\"");
      let num8 = 0;
      if (roundedNumber.isNegative()) {
        num8 = 0;
        if (!roundedNumber.isZero()) {
          num8 = -1;
        }
      }
      num7 = num8;
    }
  }
  const obj = { roundedNumber, formattedString, exponent: num, magnitude: num2, sign: num7 };
  return formatToParts.default(obj, internalSlots.dataLocaleData, pl, internalSlots);
};

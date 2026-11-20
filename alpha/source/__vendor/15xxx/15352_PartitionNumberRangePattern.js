// Module ID: 15352
// Function ID: 15353
// Name: PartitionNumberRangePattern
// Dependencies: [15324, 15350, 15349, 15348, 15337]
// Exports: PartitionNumberRangePattern

// Module 15352 (PartitionNumberRangePattern)
import UNICODE_EXTENSION_SEQUENCE_REGEX from "UNICODE_EXTENSION_SEQUENCE_REGEX" /* 15324 */;
import CollapseNumberRange from "CollapseNumberRange" /* 15337 */;
import FormatApproximately from "FormatApproximately" /* 15348 */;
import FormatNumeric from "FormatNumeric" /* 15349 */;


export function PartitionNumberRangePattern(arg0, isNaN, isNaN2, getInternalSlots) {
  getInternalSlots = getInternalSlots.getInternalSlots;
  const invariant = UNICODE_EXTENSION_SEQUENCE_REGEX.invariant;
  const isNaNResult = isNaN.isNaN();
  const tmp4 = !isNaNResult && !isNaN2.isNaN();
  invariant(tmp4, "Input must be a number", RangeError);
  const internalSlots = getInternalSlots(arg0);
  const result = tmp(15350).PartitionNumberPattern(internalSlots, isNaN);
  const result1 = tmp(15350).PartitionNumberPattern(internalSlots, isNaN2);
  const FormatNumericResult = FormatNumeric.FormatNumeric(internalSlots, isNaN);
  if (FormatNumericResult === FormatNumeric.FormatNumeric(internalSlots, isNaN2)) {
    const FormatApproximatelyResult = FormatApproximately.FormatApproximately(internalSlots, result);
    const item = FormatApproximatelyResult.forEach((item) => {
      item.source = "shared";
    });
    return FormatApproximatelyResult;
  } else {
    const items = [];
    const item1 = result.forEach((item) => {
      item.source = "startRange";
      items.push(item);
    });
    const obj = { type: "literal", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].rangeSign, source: "shared" };
    items.push(obj);
    const item2 = result1.forEach((item) => {
      item.source = "endRange";
      items.push(item);
    });
    const obj2 = { getInternalSlots };
    return CollapseNumberRange.CollapseNumberRange(arg0, items, obj2);
  }
}

// Module ID: 16566
// Function ID: 16567
// Name: PartitionNumberRangePattern
// Dependencies: [16538, 16564, 16563, 16562, 16551]
// Exports: PartitionNumberRangePattern

// Module 16566 (PartitionNumberRangePattern)
import UNICODE_EXTENSION_SEQUENCE_REGEX from "UNICODE_EXTENSION_SEQUENCE_REGEX" /* 16538 */;
import CollapseNumberRange from "CollapseNumberRange" /* 16551 */;
import FormatApproximately from "FormatApproximately" /* 16562 */;
import FormatNumeric from "FormatNumeric" /* 16563 */;


export function PartitionNumberRangePattern(arg0, isNaN, isNaN2, getInternalSlots) {
  getInternalSlots = getInternalSlots.getInternalSlots;
  const invariant = UNICODE_EXTENSION_SEQUENCE_REGEX.invariant;
  const isNaNResult = isNaN.isNaN();
  const tmp4 = !isNaNResult && !isNaN2.isNaN();
  invariant(tmp4, "Input must be a number", RangeError);
  const internalSlots = getInternalSlots(arg0);
  const result = tmp(16564).PartitionNumberPattern(internalSlots, isNaN);
  const result1 = tmp(16564).PartitionNumberPattern(internalSlots, isNaN2);
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

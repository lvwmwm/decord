// Module ID: 14520
// Function ID: 14521
// Name: PartitionNumberRangePattern
// Dependencies: [14492, 14518, 14517, 14516, 14505]
// Exports: PartitionNumberRangePattern

// Module 14520 (PartitionNumberRangePattern)
import _mod14492 from "module_14492" /* 14492 */;
import FormatNumeric from "FormatNumeric" /* 14517 */;

require = arg1;
const dependencyMap = arg6;

export const PartitionNumberRangePattern = function PartitionNumberRangePattern(arg0, isNaN, isNaN2, getInternalSlots) {
  getInternalSlots = getInternalSlots.getInternalSlots;
  const isNaNResult = isNaN.isNaN();
  let tmp4 = !isNaNResult;
  if (!isNaNResult) {
    tmp4 = !isNaN2.isNaN();
  }
  _mod14492.invariant(tmp4, "Input must be a number", RangeError);
  const internalSlots = getInternalSlots(arg0);
  const result = tmp(14518).PartitionNumberPattern(internalSlots, isNaN);
  const result1 = tmp(14518).PartitionNumberPattern(internalSlots, isNaN2);
  if (FormatNumericResult === FormatNumeric.FormatNumeric(internalSlots, isNaN2)) {
    const FormatApproximatelyResult = tmp(14516).FormatApproximately(internalSlots, result);
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
    return tmp(14505).CollapseNumberRange(arg0, items, obj2);
  }
  FormatNumericResult = FormatNumeric.FormatNumeric(internalSlots, isNaN);
};

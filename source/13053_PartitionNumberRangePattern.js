// Module ID: 13053
// Function ID: 99332
// Name: PartitionNumberRangePattern
// Dependencies: []

// Module 13053 (PartitionNumberRangePattern)
arg5.PartitionNumberRangePattern = function PartitionNumberRangePattern(arg0, isNaN, isNaN2, getInternalSlots) {
  getInternalSlots = getInternalSlots.getInternalSlots;
  isNaN(arg6[0]).invariant(!isNaN.isNaN() && !isNaN2.isNaN(), "Input must be a number", RangeError);
  const internalSlots = getInternalSlots(arg0);
  const result = isNaN(arg6[1]).PartitionNumberPattern(internalSlots, isNaN);
  const result1 = isNaN(arg6[1]).PartitionNumberPattern(internalSlots, isNaN2);
  const tmp = !isNaN.isNaN() && !isNaN2.isNaN();
  if (FormatNumericResult === isNaN(arg6[2]).FormatNumeric(internalSlots, isNaN2)) {
    const FormatApproximatelyResult = isNaN(arg6[3]).FormatApproximately(internalSlots, result);
    const item = FormatApproximatelyResult.forEach((arg0) => {
      arg0.source = "shared";
    });
    return FormatApproximatelyResult;
  } else {
    const items = [];
    isNaN = items;
    const item1 = result.forEach((arg0) => {
      arg0.source = "startRange";
      items.push(arg0);
    });
    let obj = { "Null": false, "Null": false, "Null": false, value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].rangeSign };
    items.push(obj);
    const item2 = result1.forEach((arg0) => {
      arg0.source = "endRange";
      items.push(arg0);
    });
    obj = { getInternalSlots };
    return isNaN(arg6[4]).CollapseNumberRange(arg0, items, obj);
  }
  const FormatNumericResult = isNaN(arg6[2]).FormatNumeric(internalSlots, isNaN);
};

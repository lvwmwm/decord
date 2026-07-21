// Module ID: 13045
// Function ID: 99282
// Name: FormatNumericRangeToParts
// Dependencies: [0]

// Module 13045 (FormatNumericRangeToParts)
arg5.FormatNumericRangeToParts = function FormatNumericRangeToParts(arg0, isNaN, isNaN2, getInternalSlots) {
  const result = isNaN(arg6[0]).PartitionNumberRangePattern(arg0, isNaN, isNaN2, { getInternalSlots: getInternalSlots.getInternalSlots });
  return result.map((type) => ({ type: type.type, value: type.value, source: type.source, result: arg1.toString() }));
};

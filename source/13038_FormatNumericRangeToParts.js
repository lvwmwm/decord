// Module ID: 13038
// Function ID: 99259
// Name: FormatNumericRangeToParts
// Dependencies: []

// Module 13038 (FormatNumericRangeToParts)
arg5.FormatNumericRangeToParts = function FormatNumericRangeToParts(arg0, isNaN, isNaN2, getInternalSlots) {
  const result = isNaN(arg6[0]).PartitionNumberRangePattern(arg0, isNaN, isNaN2, { getInternalSlots: getInternalSlots.getInternalSlots });
  return result.map((type) => ({ type: type.type, value: type.value, source: type.source, result: arg1.toString() }));
};

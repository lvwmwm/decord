// Module ID: 13043
// Function ID: 99274
// Name: FormatNumericRange
// Dependencies: [0]

// Module 13043 (FormatNumericRange)
arg5.FormatNumericRange = function FormatNumericRange(arg0, isNaN, isNaN2, getInternalSlots) {
  const result = isNaN(arg6[0]).PartitionNumberRangePattern(arg0, isNaN, isNaN2, { getInternalSlots: getInternalSlots.getInternalSlots });
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};

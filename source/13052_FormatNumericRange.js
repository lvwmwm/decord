// Module ID: 13052
// Function ID: 99329
// Name: FormatNumericRange
// Dependencies: []

// Module 13052 (FormatNumericRange)
arg5.FormatNumericRange = function FormatNumericRange(arg0, isNaN, isNaN2, getInternalSlots) {
  const result = isNaN(arg6[0]).PartitionNumberRangePattern(arg0, isNaN, isNaN2, { getInternalSlots: getInternalSlots.getInternalSlots });
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};

// Module ID: 13041
// Function ID: 99269
// Name: FormatNumeric
// Dependencies: []

// Module 13041 (FormatNumeric)
arg5.FormatNumeric = function FormatNumeric(internalSlots, isNaN) {
  const result = isNaN(arg6[0]).PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};

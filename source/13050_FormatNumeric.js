// Module ID: 13050
// Function ID: 99324
// Name: FormatNumeric
// Dependencies: []

// Module 13050 (FormatNumeric)
arg5.FormatNumeric = function FormatNumeric(internalSlots, isNaN) {
  const result = isNaN(arg6[0]).PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};

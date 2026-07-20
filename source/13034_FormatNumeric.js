// Module ID: 13034
// Function ID: 99246
// Name: FormatNumeric
// Dependencies: []

// Module 13034 (FormatNumeric)
arg5.FormatNumeric = function FormatNumeric(internalSlots, isNaN) {
  const result = isNaN(arg6[0]).PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};

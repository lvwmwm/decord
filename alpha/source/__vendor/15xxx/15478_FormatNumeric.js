// Module ID: 15478
// Function ID: 15479
// Name: FormatNumeric
// Dependencies: [15479]
// Exports: FormatNumeric

// Module 15478 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 15479 */;


export const FormatNumeric = function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};

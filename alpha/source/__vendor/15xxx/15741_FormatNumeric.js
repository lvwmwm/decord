// Module ID: 15741
// Function ID: 15742
// Name: FormatNumeric
// Dependencies: [15742]
// Exports: FormatNumeric

// Module 15741 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 15742 */;


export const FormatNumeric = function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};

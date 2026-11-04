// Module ID: 16294
// Function ID: 16295
// Name: FormatNumeric
// Dependencies: [16295]
// Exports: FormatNumeric

// Module 16294 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 16295 */;


export function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
}

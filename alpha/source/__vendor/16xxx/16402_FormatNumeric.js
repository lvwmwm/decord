// Module ID: 16402
// Function ID: 16403
// Name: FormatNumeric
// Dependencies: [16403]
// Exports: FormatNumeric

// Module 16402 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 16403 */;


export function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
}

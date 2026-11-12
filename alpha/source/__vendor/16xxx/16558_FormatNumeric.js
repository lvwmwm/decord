// Module ID: 16558
// Function ID: 16559
// Name: FormatNumeric
// Dependencies: [16559]
// Exports: FormatNumeric

// Module 16558 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 16559 */;


export function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
}

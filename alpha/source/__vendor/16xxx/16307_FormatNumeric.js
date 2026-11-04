// Module ID: 16307
// Function ID: 16308
// Name: FormatNumeric
// Dependencies: [16308]
// Exports: FormatNumeric

// Module 16307 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 16308 */;


export function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
}

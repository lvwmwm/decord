// Module ID: 16365
// Function ID: 16366
// Name: FormatNumeric
// Dependencies: [16366]
// Exports: FormatNumeric

// Module 16365 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 16366 */;


export function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
}

// Module ID: 15349
// Function ID: 15350
// Name: FormatNumeric
// Dependencies: [15350]
// Exports: FormatNumeric

// Module 15349 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 15350 */;


export function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
}

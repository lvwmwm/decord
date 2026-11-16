// Module ID: 16681
// Function ID: 16682
// Name: FormatNumeric
// Dependencies: [16682]
// Exports: FormatNumeric

// Module 16681 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 16682 */;


export function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
}

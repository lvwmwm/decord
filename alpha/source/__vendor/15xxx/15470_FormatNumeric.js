// Module ID: 15470
// Function ID: 15471
// Name: FormatNumeric
// Dependencies: [15471]
// Exports: FormatNumeric

// Module 15470 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 15471 */;


export function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
}

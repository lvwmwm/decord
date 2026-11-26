// Module ID: 15666
// Function ID: 15667
// Name: FormatNumeric
// Dependencies: [15667]
// Exports: FormatNumeric

// Module 15666 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 15667 */;


export function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
}

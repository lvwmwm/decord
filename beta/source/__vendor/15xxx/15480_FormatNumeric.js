// Module ID: 15480
// Function ID: 15481
// Name: FormatNumeric
// Dependencies: [15481]
// Exports: FormatNumeric

// Module 15480 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 15481 */;


export function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
}

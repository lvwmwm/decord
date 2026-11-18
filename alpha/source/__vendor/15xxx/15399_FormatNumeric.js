// Module ID: 15399
// Function ID: 15400
// Name: FormatNumeric
// Dependencies: [15400]
// Exports: FormatNumeric

// Module 15399 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 15400 */;


export function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
}

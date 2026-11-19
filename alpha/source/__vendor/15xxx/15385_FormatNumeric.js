// Module ID: 15385
// Function ID: 15386
// Name: FormatNumeric
// Dependencies: [15386]
// Exports: FormatNumeric

// Module 15385 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 15386 */;


export function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
}

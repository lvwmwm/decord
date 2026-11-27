// Module ID: 15673
// Function ID: 15674
// Name: FormatNumeric
// Dependencies: [15674]
// Exports: FormatNumeric

// Module 15673 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 15674 */;


export function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
}

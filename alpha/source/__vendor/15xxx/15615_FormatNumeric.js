// Module ID: 15615
// Function ID: 15616
// Name: FormatNumeric
// Dependencies: [15616]
// Exports: FormatNumeric

// Module 15615 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 15616 */;


export function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
}

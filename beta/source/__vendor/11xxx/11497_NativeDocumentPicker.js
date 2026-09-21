// Module ID: 11497
// Function ID: 11498
// Name: NativeDocumentPicker
// Dependencies: [11498]
// Exports: isKnownType

// Module 11497 (NativeDocumentPicker)
import _mod11498 from "module_11498" /* 11498 */;

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11498.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};

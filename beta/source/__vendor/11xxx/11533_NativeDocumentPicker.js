// Module ID: 11533
// Function ID: 11534
// Name: NativeDocumentPicker
// Dependencies: [11534]
// Exports: isKnownType

// Module 11533 (NativeDocumentPicker)
import _mod11534 from "module_11534" /* 11534 */;

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11534.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};

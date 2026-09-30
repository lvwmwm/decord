// Module ID: 11000
// Function ID: 11001
// Name: NativeDocumentPicker
// Dependencies: [11001]
// Exports: isKnownType

// Module 11000 (NativeDocumentPicker)
import _mod11001 from "module_11001" /* 11001 */;

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11001.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};

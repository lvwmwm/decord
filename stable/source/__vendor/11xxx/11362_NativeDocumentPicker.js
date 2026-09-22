// Module ID: 11362
// Function ID: 11363
// Name: NativeDocumentPicker
// Dependencies: [11363]
// Exports: isKnownType

// Module 11362 (NativeDocumentPicker)
import _mod11363 from "module_11363" /* 11363 */;

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11363.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};

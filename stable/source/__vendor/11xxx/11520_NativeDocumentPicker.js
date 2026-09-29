// Module ID: 11520
// Function ID: 11521
// Name: NativeDocumentPicker
// Dependencies: [11521]
// Exports: isKnownType

// Module 11520 (NativeDocumentPicker)
import _mod11521 from "module_11521" /* 11521 */;

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11521.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};

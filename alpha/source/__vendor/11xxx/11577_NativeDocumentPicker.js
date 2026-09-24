// Module ID: 11577
// Function ID: 11578
// Name: NativeDocumentPicker
// Dependencies: [11578]
// Exports: isKnownType

// Module 11577 (NativeDocumentPicker)
import _mod11578 from "module_11578" /* 11578 */;

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11578.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};

// Module ID: 10825
// Function ID: 10826
// Name: isKnownType
// Dependencies: [10826]

// Module 10825 (isKnownType)
import NativeDocumentPicker2 from "NativeDocumentPicker" /* 10826 */;

require = arg1;
const dependencyMap = arg6;
arg5.isKnownType = function isKnownType(kind, value) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = NativeDocumentPicker2.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};

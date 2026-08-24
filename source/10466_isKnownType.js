// Module ID: 10466
// Function ID: 10467
// Name: isKnownType
// Dependencies: [10467]

// Module 10466 (isKnownType)
import NativeDocumentPicker2 from "NativeDocumentPicker" /* 10467 */;

require = arg1;
const dependencyMap = arg6;
arg5.isKnownType = function isKnownType(kind, value) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = NativeDocumentPicker2.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};

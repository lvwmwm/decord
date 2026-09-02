// Module ID: 11083
// Function ID: 11084
// Name: isKnownType
// Dependencies: [11084]

// Module 11083 (isKnownType)
import NativeDocumentPicker2 from "NativeDocumentPicker" /* 11084 */;

require = arg1;
const dependencyMap = arg6;
arg5.isKnownType = function isKnownType(kind, value) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = NativeDocumentPicker2.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};

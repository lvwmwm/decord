// Module ID: 10783
// Function ID: 10784
// Name: isKnownType
// Dependencies: [10784]

// Module 10783 (isKnownType)
import NativeDocumentPicker2 from "NativeDocumentPicker" /* 10784 */;

require = arg1;
const dependencyMap = arg6;
arg5.isKnownType = function isKnownType(kind, value) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = NativeDocumentPicker2.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};

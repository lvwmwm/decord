// Module ID: 11087
// Function ID: 11088
// Name: isKnownType
// Dependencies: [11088]

// Module 11087 (isKnownType)
import NativeDocumentPicker2 from "NativeDocumentPicker" /* 11088 */;

require = arg1;
const dependencyMap = arg6;
arg5.isKnownType = function isKnownType(kind, value) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = NativeDocumentPicker2.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};

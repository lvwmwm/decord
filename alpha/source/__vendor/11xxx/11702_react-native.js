// Module ID: 11702
// Function ID: 11703
// Name: react-native
// Dependencies: [11703]
// Exports: isKnownType

// Module 11702 (react-native)
import react_native from "react-native" /* 11703 */;


export const isKnownType = function isKnownType(kind) {
  let value;
  ({ kind, value } = kind);
  const NativeDocumentPicker = react_native.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};

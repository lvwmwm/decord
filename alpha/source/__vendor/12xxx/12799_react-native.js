// Module ID: 12799
// Function ID: 12800
// Name: react-native
// Dependencies: [12800]
// Exports: isKnownType

// Module 12799 (react-native)
import react_native from "react-native" /* 12800 */;


export const isKnownType = function isKnownType(kind) {
  let value;
  ({ kind, value } = kind);
  const NativeDocumentPicker = react_native.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};

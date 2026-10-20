// Module ID: 12804
// Function ID: 12805
// Name: react-native
// Dependencies: [12805]
// Exports: isKnownType

// Module 12804 (react-native)
import react_native from "react-native" /* 12805 */;


export const isKnownType = function isKnownType(kind) {
  let value;
  ({ kind, value } = kind);
  const NativeDocumentPicker = react_native.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};

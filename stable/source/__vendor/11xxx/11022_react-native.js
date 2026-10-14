// Module ID: 11022
// Function ID: 11023
// Name: react-native
// Dependencies: [11023]
// Exports: isKnownType

// Module 11022 (react-native)
import react_native from "react-native" /* 11023 */;


export const isKnownType = function isKnownType(kind) {
  let value;
  ({ kind, value } = kind);
  const NativeDocumentPicker = react_native.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};

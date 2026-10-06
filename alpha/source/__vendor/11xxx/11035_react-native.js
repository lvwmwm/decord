// Module ID: 11035
// Function ID: 11036
// Name: react-native
// Dependencies: [11036]
// Exports: isKnownType

// Module 11035 (react-native)
import react_native from "react-native" /* 11036 */;


export const isKnownType = function isKnownType(kind) {
  let value;
  ({ kind, value } = kind);
  const NativeDocumentPicker = react_native.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};

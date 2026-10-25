// Module ID: 11761
// Function ID: 11762
// Name: react-native
// Dependencies: [11762]
// Exports: isKnownType

// Module 11761 (react-native)
import react_native from "react-native" /* 11762 */;


export const isKnownType = function isKnownType(kind) {
  let value;
  ({ kind, value } = kind);
  const NativeDocumentPicker = react_native.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};

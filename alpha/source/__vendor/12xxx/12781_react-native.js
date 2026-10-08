// Module ID: 12781
// Function ID: 12782
// Name: react-native
// Dependencies: [12782]
// Exports: isKnownType

// Module 12781 (react-native)
import react_native from "react-native" /* 12782 */;


export const isKnownType = function isKnownType(kind) {
  let value;
  ({ kind, value } = kind);
  const NativeDocumentPicker = react_native.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};

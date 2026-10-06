// Module ID: 10777
// Function ID: 10778
// Name: react-native
// Dependencies: [10778]
// Exports: isKnownType

// Module 10777 (react-native)
import react_native from "react-native" /* 10778 */;


export const isKnownType = function isKnownType(kind) {
  let value;
  ({ kind, value } = kind);
  const NativeDocumentPicker = react_native.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};

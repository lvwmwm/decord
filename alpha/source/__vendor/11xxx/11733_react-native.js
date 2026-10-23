// Module ID: 11733
// Function ID: 11734
// Name: react-native
// Dependencies: [11734]
// Exports: isKnownType

// Module 11733 (react-native)
import react_native from "react-native" /* 11734 */;


export const isKnownType = function isKnownType(kind) {
  let value;
  ({ kind, value } = kind);
  const NativeDocumentPicker = react_native.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};

// Module ID: 11585
// Function ID: 11586
// Name: react-native
// Dependencies: [11586]
// Exports: isKnownType

// Module 11585 (react-native)
import react_native from "react-native" /* 11586 */;


export const isKnownType = function isKnownType(kind) {
  let value;
  ({ kind, value } = kind);
  const NativeDocumentPicker = react_native.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};

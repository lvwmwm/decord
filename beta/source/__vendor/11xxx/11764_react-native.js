// Module ID: 11764
// Function ID: 11765
// Name: react-native
// Dependencies: [11765]
// Exports: isKnownType

// Module 11764 (react-native)
import react_native from "react-native" /* 11765 */;


export const isKnownType = function isKnownType(kind) {
  let value;
  ({ kind, value } = kind);
  const NativeDocumentPicker = react_native.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};

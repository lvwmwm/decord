// Module ID: 10795
// Function ID: 10796
// Name: react-native
// Dependencies: [10796]
// Exports: isKnownType

// Module 10795 (react-native)
import react_native from "react-native" /* 10796 */;


export const isKnownType = function isKnownType(kind) {
  let value;
  ({ kind, value } = kind);
  const NativeDocumentPicker = react_native.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};

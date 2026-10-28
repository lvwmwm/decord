// Module ID: 11796
// Function ID: 11797
// Name: react-native
// Dependencies: [11797]
// Exports: isKnownType

// Module 11796 (react-native)
import react_native from "react-native" /* 11797 */;


export const isKnownType = function isKnownType(kind) {
  let value;
  ({ kind, value } = kind);
  const NativeDocumentPicker = react_native.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};

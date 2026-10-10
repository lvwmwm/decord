// Module ID: 12797
// Function ID: 12798
// Name: react-native
// Dependencies: [12798]
// Exports: isKnownType

// Module 12797 (react-native)
import react_native from "react-native" /* 12798 */;


export const isKnownType = function isKnownType(kind) {
  let value;
  ({ kind, value } = kind);
  const NativeDocumentPicker = react_native.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};

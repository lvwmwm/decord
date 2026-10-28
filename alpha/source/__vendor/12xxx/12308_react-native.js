// Module ID: 12308
// Function ID: 12309
// Name: react-native
// Dependencies: [12309]
// Exports: isKnownType

// Module 12308 (react-native)
import react_native from "react-native" /* 12309 */;


export const isKnownType = function isKnownType(kind) {
  let value;
  ({ kind, value } = kind);
  const NativeDocumentPicker = react_native.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};

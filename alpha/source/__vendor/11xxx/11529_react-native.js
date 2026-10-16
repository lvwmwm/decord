// Module ID: 11529
// Function ID: 11530
// Name: react-native
// Dependencies: [11530]
// Exports: isKnownType

// Module 11529 (react-native)
import react_native from "react-native" /* 11530 */;


export const isKnownType = function isKnownType(kind) {
  let value;
  ({ kind, value } = kind);
  const NativeDocumentPicker = react_native.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};

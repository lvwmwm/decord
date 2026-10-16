// Module ID: 11526
// Function ID: 11527
// Name: react-native
// Dependencies: [11527]
// Exports: isKnownType

// Module 11526 (react-native)
import react_native from "react-native" /* 11527 */;


export const isKnownType = function isKnownType(kind) {
  let value;
  ({ kind, value } = kind);
  const NativeDocumentPicker = react_native.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};

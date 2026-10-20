// Module ID: 11635
// Function ID: 11636
// Name: react-native
// Dependencies: [11636]
// Exports: isKnownType

// Module 11635 (react-native)
import react_native from "react-native" /* 11636 */;


export const isKnownType = function isKnownType(kind) {
  let value;
  ({ kind, value } = kind);
  const NativeDocumentPicker = react_native.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};

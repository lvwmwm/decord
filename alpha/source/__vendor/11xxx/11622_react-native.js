// Module ID: 11622
// Function ID: 11623
// Name: react-native
// Dependencies: [11623]
// Exports: isKnownType

// Module 11622 (react-native)
import react_native from "react-native" /* 11623 */;


export const isKnownType = function isKnownType(kind) {
  let value;
  ({ kind, value } = kind);
  const NativeDocumentPicker = react_native.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};

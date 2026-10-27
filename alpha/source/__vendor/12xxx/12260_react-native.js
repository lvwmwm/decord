// Module ID: 12260
// Function ID: 12261
// Name: react-native
// Dependencies: [12261]
// Exports: isKnownType

// Module 12260 (react-native)
import react_native from "react-native" /* 12261 */;


export const isKnownType = function isKnownType(kind) {
  let value;
  ({ kind, value } = kind);
  const NativeDocumentPicker = react_native.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};

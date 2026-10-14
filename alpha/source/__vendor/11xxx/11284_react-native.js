// Module ID: 11284
// Function ID: 11285
// Name: react-native
// Dependencies: [11285]
// Exports: isKnownType

// Module 11284 (react-native)
import react_native from "react-native" /* 11285 */;


export const isKnownType = function isKnownType(kind) {
  let value;
  ({ kind, value } = kind);
  const NativeDocumentPicker = react_native.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};

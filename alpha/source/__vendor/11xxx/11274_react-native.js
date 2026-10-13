// Module ID: 11274
// Function ID: 11275
// Name: react-native
// Dependencies: [11275]
// Exports: isKnownType

// Module 11274 (react-native)
import react_native from "react-native" /* 11275 */;


export const isKnownType = function isKnownType(kind) {
  let value;
  ({ kind, value } = kind);
  const NativeDocumentPicker = react_native.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};

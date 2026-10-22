// Module ID: 11713
// Function ID: 11714
// Name: react-native
// Dependencies: [11714]
// Exports: isKnownType

// Module 11713 (react-native)
import react_native from "react-native" /* 11714 */;


export const isKnownType = function isKnownType(kind) {
  let value;
  ({ kind, value } = kind);
  const NativeDocumentPicker = react_native.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};

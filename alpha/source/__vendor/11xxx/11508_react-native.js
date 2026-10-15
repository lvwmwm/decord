// Module ID: 11508
// Function ID: 11509
// Name: react-native
// Dependencies: [11509]
// Exports: isKnownType

// Module 11508 (react-native)
import react_native from "react-native" /* 11509 */;


export const isKnownType = function isKnownType(kind) {
  let value;
  ({ kind, value } = kind);
  const NativeDocumentPicker = react_native.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};

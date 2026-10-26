// Module ID: 11763
// Function ID: 11764
// Name: react-native
// Dependencies: [11764]
// Exports: isKnownType

// Module 11763 (react-native)
import react_native from "react-native" /* 11764 */;


export const isKnownType = function isKnownType(kind) {
  let value;
  ({ kind, value } = kind);
  const NativeDocumentPicker = react_native.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};

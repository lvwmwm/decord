// Module ID: 11760
// Function ID: 11761
// Name: react-native
// Dependencies: [11761]
// Exports: isKnownType

// Module 11760 (react-native)
import react_native from "react-native" /* 11761 */;


export const isKnownType = function isKnownType(kind) {
  let value;
  ({ kind, value } = kind);
  const NativeDocumentPicker = react_native.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};

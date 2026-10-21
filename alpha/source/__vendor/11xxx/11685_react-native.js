// Module ID: 11685
// Function ID: 11686
// Name: react-native
// Dependencies: [11686]
// Exports: isKnownType

// Module 11685 (react-native)
import react_native from "react-native" /* 11686 */;


export const isKnownType = function isKnownType(kind) {
  let value;
  ({ kind, value } = kind);
  const NativeDocumentPicker = react_native.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};

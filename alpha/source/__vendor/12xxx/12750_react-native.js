// Module ID: 12750
// Function ID: 12751
// Name: react-native
// Dependencies: [12751]
// Exports: isKnownType

// Module 12750 (react-native)
import react_native from "react-native" /* 12751 */;


export const isKnownType = function isKnownType(kind) {
  let value;
  ({ kind, value } = kind);
  const NativeDocumentPicker = react_native.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};

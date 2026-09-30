// Module ID: 11002
// Function ID: 11003
// Dependencies: [11001]
// Exports: keepLocalCopy

// Module 11002
import _mod11001 from "module_11001" /* 11001 */;

require = arg1;
const dependencyMap = arg6;

export const keepLocalCopy = function keepLocalCopy(arg0) {
  const NativeDocumentPicker = _mod11001.NativeDocumentPicker;
  return NativeDocumentPicker.keepLocalCopy(arg0);
};

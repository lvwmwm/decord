// Module ID: 8284
// Function ID: 8285
// Name: RowGeneratorStyleSheet
// Dependencies: [17, 2]
// Exports: processColorOrThrow

// Module 8284 (RowGeneratorStyleSheet)
import _mod17 from "module_17" /* 17 */;
import size from "module_2" /* 2 */;

const processColor = _mod17.processColor;
const result = size.fileFinishedImporting("modules/messages/native/renderer/RowGeneratorStyleSheet.tsx");

export const processColorOrThrow = function processColorOrThrow(arg0) {
  const tmp = processColor(arg0);
  if (null == tmp) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("Unable to parse color: \"" + arg0 + "\"");
    throw error;
  } else {
    return tmp;
  }
};

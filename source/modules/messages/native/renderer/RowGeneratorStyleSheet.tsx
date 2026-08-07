// Module ID: 7985
// Function ID: 7986
// Name: processColorOrThrow
// Dependencies: [17, 2]
// Exports: processColorOrThrow

// Module 7985 (processColorOrThrow)
import { processColor } from "get ActivityIndicator";

const result = require("set").fileFinishedImporting("modules/messages/native/renderer/RowGeneratorStyleSheet.tsx");

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

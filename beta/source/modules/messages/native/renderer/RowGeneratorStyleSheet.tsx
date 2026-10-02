// Module ID: 7382
// Function ID: 7383
// Name: react-native
// Dependencies: [17, 2]
// Exports: processColorOrThrow

// Module 7382 (react-native)
import react_native from "react-native" /* 17 */;
import size from "module_2" /* 2 */;

const processColor = react_native.processColor;
const result = size.fileFinishedImporting("modules/messages/native/renderer/RowGeneratorStyleSheet.tsx");

export const processColorOrThrow = function processColorOrThrow(arg0) {
  const tmp = processColor(arg0);
  if (null == tmp) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const error = new Error("Unable to parse color: \"" + arg0 + "\"");
    throw error;
  } else {
    return tmp;
  }
};

// Module ID: 7614
// Function ID: 61004
// Name: processColorOrThrow
// Dependencies: []
// Exports: processColorOrThrow

// Module 7614 (processColorOrThrow)
const processColor = require(dependencyMap[0]).processColor;
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/messages/native/renderer/RowGeneratorStyleSheet.tsx");

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

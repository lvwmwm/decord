// Module ID: 7619
// Function ID: 61038
// Name: processColorOrThrow
// Dependencies: []
// Exports: processColorOrThrow

// Module 7619 (processColorOrThrow)
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

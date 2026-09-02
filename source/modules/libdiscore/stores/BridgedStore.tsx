// Module ID: 1913
// Function ID: 1914
// Name: ensureValidMode
// Dependencies: [1914, 2]
// Exports: ensureValidMode

// Module 1913 (ensureValidMode)
import set from "set" /* 2 */;
import fluxApi from "fluxApi" /* 1914 */;

const result = set.fileFinishedImporting("modules/libdiscore/stores/BridgedStore.tsx");

export const ensureValidMode = function ensureValidMode(arg0) {
  let str = "typescript";
  if ("typescript" === arg0) {
    str = arg0;
  } else {
    const obj = fluxApi;
  }
  return str;
};

// Module ID: 1914
// Function ID: 1915
// Name: ensureValidMode
// Dependencies: [1915, 2]
// Exports: ensureValidMode

// Module 1914 (ensureValidMode)
import set from "set" /* 2 */;
import fluxApi from "fluxApi" /* 1915 */;

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

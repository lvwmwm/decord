// Module ID: 1915
// Function ID: 1916
// Name: ensureValidMode
// Dependencies: [1916, 2]
// Exports: ensureValidMode

// Module 1915 (ensureValidMode)
import set from "set" /* 2 */;
import fluxApi from "fluxApi" /* 1916 */;

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

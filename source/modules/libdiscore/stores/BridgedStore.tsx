// Module ID: 1984
// Function ID: 1985
// Name: ensureValidMode
// Dependencies: [1985, 2]
// Exports: ensureValidMode

// Module 1984 (ensureValidMode)
import set from "set" /* 2 */;
import fluxApi from "fluxApi" /* 1985 */;

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

// Module ID: 1842
// Function ID: 20237
// Name: ensureValidMode
// Dependencies: [1843, 2]
// Exports: ensureValidMode

// Module 1842 (ensureValidMode)
const result = require("set").fileFinishedImporting("modules/libdiscore/stores/BridgedStore.tsx");

export const ensureValidMode = function ensureValidMode(arg0) {
  let str = "typescript";
  if ("typescript" === arg0) {
    str = arg0;
  } else {
    const obj = require(1843) /* fluxApi */;
  }
  return str;
};

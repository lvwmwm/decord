// Module ID: 560
// Function ID: 561
// Name: BridgedStore
// Dependencies: [561, 2]
// Exports: ensureValidMode

// Module 560 (BridgedStore)
import FluxApi from "FluxApi" /* 561 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/libdiscore/stores/BridgedStore.tsx");

export const ensureValidMode = function ensureValidMode(typescript) {
  let str = "typescript";
  if ("typescript" === typescript) {
    str = typescript;
  } else {
    FluxApi;
  }
  return str;
};

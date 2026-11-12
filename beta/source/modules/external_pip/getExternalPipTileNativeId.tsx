// Module ID: 6037
// Function ID: 6038
// Name: getExternalPipTileNativeId
// Dependencies: [2]
// Exports: getExternalPipTileNativeId

// Module 6037 (getExternalPipTileNativeId)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/external_pip/getExternalPipTileNativeId.tsx");

export function getExternalPipTileNativeId(card, id) {
  return "external-pip-tile:" + card + ":" + id;
}

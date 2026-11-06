// Module ID: 6032
// Function ID: 6033
// Name: getExternalPipTileNativeId
// Dependencies: [2]
// Exports: getExternalPipTileNativeId

// Module 6032 (getExternalPipTileNativeId)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/external_pip/getExternalPipTileNativeId.tsx");

export function getExternalPipTileNativeId(card, id) {
  return "external-pip-tile:" + card + ":" + id;
}

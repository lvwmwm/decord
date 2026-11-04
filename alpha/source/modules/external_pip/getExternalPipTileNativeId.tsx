// Module ID: 6010
// Function ID: 6011
// Name: getExternalPipTileNativeId
// Dependencies: [2]
// Exports: getExternalPipTileNativeId

// Module 6010 (getExternalPipTileNativeId)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/external_pip/getExternalPipTileNativeId.tsx");

export function getExternalPipTileNativeId(card, id) {
  return "external-pip-tile:" + card + ":" + id;
}

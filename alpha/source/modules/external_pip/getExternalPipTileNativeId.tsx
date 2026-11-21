// Module ID: 5767
// Function ID: 5768
// Name: getExternalPipTileNativeId
// Dependencies: [2]
// Exports: getExternalPipTileNativeId

// Module 5767 (getExternalPipTileNativeId)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/external_pip/getExternalPipTileNativeId.tsx");

export function getExternalPipTileNativeId(card, id) {
  return "external-pip-tile:" + card + ":" + id;
}

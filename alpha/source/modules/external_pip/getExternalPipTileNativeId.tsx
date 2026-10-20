// Module ID: 5786
// Function ID: 5787
// Name: getExternalPipTileNativeId
// Dependencies: [2]
// Exports: getExternalPipTileNativeId

// Module 5786 (getExternalPipTileNativeId)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/external_pip/getExternalPipTileNativeId.tsx");

export const getExternalPipTileNativeId = function getExternalPipTileNativeId(pip, id) {
  return "external-pip-tile:" + pip + ":" + id;
};

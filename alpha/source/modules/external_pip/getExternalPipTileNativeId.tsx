// Module ID: 5806
// Function ID: 5807
// Name: getExternalPipTileNativeId
// Dependencies: [2]
// Exports: getExternalPipTileNativeId

// Module 5806 (getExternalPipTileNativeId)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/external_pip/getExternalPipTileNativeId.tsx");

export const getExternalPipTileNativeId = function getExternalPipTileNativeId(pip, id) {
  return "external-pip-tile:" + pip + ":" + id;
};

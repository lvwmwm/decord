// Module ID: 14263
// Function ID: 14264
// Name: GameStoreAsset
// Dependencies: [2]
// Exports: transformStoreAssetFromServer

// Module 14263 (GameStoreAsset)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_store/GameStoreAsset.tsx");

export const transformStoreAssetFromServer = function transformStoreAssetFromServer(box_art) {
  const size = { id: box_art.id, filename: box_art.filename, size: box_art.size, width: box_art.width, height: box_art.height, mimeType: box_art.mime_type };
  return size;
};

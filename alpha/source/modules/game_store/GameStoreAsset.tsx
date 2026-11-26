// Module ID: 15920
// Function ID: 15921
// Name: GameStoreAsset
// Dependencies: [2]
// Exports: transformStoreAssetFromServer

// Module 15920 (GameStoreAsset)
import size_mod from "module_2" /* 2 */;

let size = size_mod;
const result = size.fileFinishedImporting("modules/game_store/GameStoreAsset.tsx");

export function transformStoreAssetFromServer(box_art) {
  size = { id: box_art.id, filename: box_art.filename, size: box_art.size, width: box_art.width, height: box_art.height, mimeType: box_art.mime_type };
  return size;
}

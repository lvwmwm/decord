// Module ID: 13767
// Function ID: 13768
// Name: transformStoreAssetFromServer
// Dependencies: [2]
// Exports: transformStoreAssetFromServer

// Module 13767 (transformStoreAssetFromServer)
const result = require("set").fileFinishedImporting("modules/game_store/GameStoreAsset.tsx");

export const transformStoreAssetFromServer = function transformStoreAssetFromServer(box_art) {
  return { id: box_art.id, filename: box_art.filename, size: box_art.size, width: box_art.width, height: box_art.height, mimeType: box_art.mime_type };
};

// Module ID: 13302
// Function ID: 101086
// Name: transformStoreAssetFromServer
// Dependencies: [284214097]
// Exports: transformStoreAssetFromServer

// Module 13302 (transformStoreAssetFromServer)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/game_store/GameStoreAsset.tsx");

export const transformStoreAssetFromServer = function transformStoreAssetFromServer(box_art) {
  return { id: box_art.id, filename: box_art.filename, size: box_art.size, width: box_art.width, height: box_art.height, mimeType: box_art.mime_type };
};

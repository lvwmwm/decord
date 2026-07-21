// Module ID: 15561
// Function ID: 118743
// Name: updateVideoSize
// Dependencies: [646840323, 899088385]
// Exports: updateVideoSize

// Module 15561 (updateVideoSize)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/media/VideoActionCreators.tsx");

export const updateVideoSize = function updateVideoSize(streamId, dimensions, scale) {
  let obj = importDefault(dependencyMap[0]);
  obj = { type: "VIDEO_SIZE_UPDATE", streamId, dimensions, zoom: scale };
  obj.dispatch(obj);
};

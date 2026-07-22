// Module ID: 15569
// Function ID: 118786
// Name: updateVideoSize
// Dependencies: []
// Exports: updateVideoSize

// Module 15569 (updateVideoSize)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/media/VideoActionCreators.tsx");

export const updateVideoSize = function updateVideoSize(streamId, dimensions, scale) {
  let obj = importDefault(dependencyMap[0]);
  obj = { type: "VIDEO_SIZE_UPDATE", streamId, dimensions, zoom: scale };
  obj.dispatch(obj);
};

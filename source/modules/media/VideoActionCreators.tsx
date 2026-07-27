// Module ID: 15756
// Function ID: 121497
// Name: updateVideoSize
// Dependencies: [686, 2]
// Exports: updateVideoSize

// Module 15756 (updateVideoSize)
const result = require("set").fileFinishedImporting("modules/media/VideoActionCreators.tsx");

export const updateVideoSize = function updateVideoSize(streamId, dimensions, scale) {
  let obj = importDefault(686);
  obj = { type: "VIDEO_SIZE_UPDATE", streamId, dimensions, zoom: scale };
  obj.dispatch(obj);
};

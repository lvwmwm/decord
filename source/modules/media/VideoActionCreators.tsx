// Module ID: 16096
// Function ID: 16097
// Name: updateVideoSize
// Dependencies: [709, 2]
// Exports: updateVideoSize

// Module 16096 (updateVideoSize)
const result = require("set").fileFinishedImporting("modules/media/VideoActionCreators.tsx");

export const updateVideoSize = function updateVideoSize(streamId, dimensions, sharedValue2) {
  let obj = importDefault(709);
  obj = { type: "VIDEO_SIZE_UPDATE", streamId, dimensions, zoom: sharedValue2 };
  obj.dispatch(obj);
};

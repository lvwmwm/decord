// Module ID: 15949
// Function ID: 15950
// Name: updateVideoSize
// Dependencies: [709, 2]
// Exports: updateVideoSize

// Module 15949 (updateVideoSize)
const result = require("set").fileFinishedImporting("modules/media/VideoActionCreators.tsx");

export const updateVideoSize = function updateVideoSize(streamId, dimensions, sharedValue2) {
  let obj = importDefault(709);
  obj = { type: "VIDEO_SIZE_UPDATE", streamId, dimensions, zoom: sharedValue2 };
  obj.dispatch(obj);
};

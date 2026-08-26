// Module ID: 16433
// Function ID: 16434
// Name: updateVideoSize
// Dependencies: [709, 2]
// Exports: updateVideoSize

// Module 16433 (updateVideoSize)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const result = set.fileFinishedImporting("modules/media/VideoActionCreators.tsx");

export const updateVideoSize = function updateVideoSize(streamId, dimensions, sharedValue2) {
  let obj = dispatcherDefault;
  obj = { type: "VIDEO_SIZE_UPDATE", streamId, dimensions, zoom: sharedValue2 };
  obj.dispatch(obj);
};

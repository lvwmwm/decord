// Module ID: 16820
// Function ID: 16821
// Name: updateVideoSize
// Dependencies: [706, 2]
// Exports: updateVideoSize

// Module 16820 (updateVideoSize)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 706 */;

const result = set.fileFinishedImporting("modules/media/VideoActionCreators.tsx");

export const updateVideoSize = function updateVideoSize(streamId, dimensions, sharedValue2) {
  let obj = dispatcherDefault;
  obj = { type: "VIDEO_SIZE_UPDATE", streamId, dimensions, zoom: sharedValue2 };
  obj.dispatch(obj);
};

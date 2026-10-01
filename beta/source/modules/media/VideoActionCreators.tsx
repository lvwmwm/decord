// Module ID: 16828
// Function ID: 16829
// Name: VideoActionCreators
// Dependencies: [573, 2]
// Exports: updateVideoSize

// Module 16828 (VideoActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media/VideoActionCreators.tsx");

export const updateVideoSize = function updateVideoSize(streamId, size, sharedValue2) {
  const obj = DispatcherDefault;
  const obj2 = { type: "VIDEO_SIZE_UPDATE", streamId, dimensions: size, zoom: sharedValue2 };
  obj.dispatch(obj2);
};

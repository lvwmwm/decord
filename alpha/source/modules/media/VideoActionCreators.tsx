// Module ID: 17072
// Function ID: 17073
// Name: VideoActionCreators
// Dependencies: [573, 2]
// Exports: updateVideoSize

// Module 17072 (VideoActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media/VideoActionCreators.tsx");

export const updateVideoSize = function updateVideoSize(streamId, size, sharedValue2) {
  DispatcherDefault.dispatch({ type: "VIDEO_SIZE_UPDATE", streamId, dimensions: size, zoom: sharedValue2 });
};

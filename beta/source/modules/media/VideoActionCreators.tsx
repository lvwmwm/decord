// Module ID: 17438
// Function ID: 17439
// Name: VideoActionCreators
// Dependencies: [577, 2]
// Exports: updateVideoSize

// Module 17438 (VideoActionCreators)
import DispatcherDefault from "Dispatcher" /* 577 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media/VideoActionCreators.tsx");

export const updateVideoSize = function updateVideoSize(streamId, size, scale) {
  DispatcherDefault.dispatch({ type: "VIDEO_SIZE_UPDATE", streamId, dimensions: size, zoom: scale });
};

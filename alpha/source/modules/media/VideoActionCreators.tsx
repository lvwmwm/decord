// Module ID: 17788
// Function ID: 17789
// Name: VideoActionCreators
// Dependencies: [584, 2]
// Exports: updateVideoSize

// Module 17788 (VideoActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media/VideoActionCreators.tsx");

export const updateVideoSize = function updateVideoSize(streamId, size, scale) {
  const obj = DispatcherDefault;
  const obj2 = { type: "VIDEO_SIZE_UPDATE", streamId, dimensions: size, zoom: scale };
  obj.dispatch(obj2);
};

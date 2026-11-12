// Module ID: 19696
// Function ID: 19697
// Name: VideoActionCreators
// Dependencies: [572, 2]
// Exports: updateVideoSize

// Module 19696 (VideoActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media/VideoActionCreators.tsx");

export function updateVideoSize(streamId, size, sharedValue2) {
  const obj = DispatcherDefault;
  const obj2 = { type: "VIDEO_SIZE_UPDATE", streamId, dimensions: size, zoom: sharedValue2 };
  obj.dispatch(obj2);
}

// Module ID: 11768
// Function ID: 11769
// Name: VideoStreamReadyActionCreators
// Dependencies: [572, 2]
// Exports: clearVideoStreamTimeout, videoStreamTimedOut

// Module 11768 (VideoStreamReadyActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/errors/VideoStreamReadyActionCreators.tsx");

export function videoStreamTimedOut(current, userId, mediaContext, streamKey) {
  const obj = DispatcherDefault;
  const obj2 = { type: "VIDEO_STREAM_READY_TIMEOUT", videoStreamId: current, mediaContext, userId, streamKey };
  obj.dispatch(obj2);
}
export function clearVideoStreamTimeout(DEFAULT, userId) {
  const obj = DispatcherDefault;
  const obj2 = { type: "CLEAR_VIDEO_STREAM_READY_TIMEOUT", mediaContext: DEFAULT, userId };
  obj.dispatch(obj2);
}

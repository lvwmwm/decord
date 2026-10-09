// Module ID: 10859
// Function ID: 10860
// Name: VideoStreamReadyActionCreators
// Dependencies: [584, 2]
// Exports: clearVideoStreamTimeout, videoStreamTimedOut

// Module 10859 (VideoStreamReadyActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/errors/VideoStreamReadyActionCreators.tsx");

export const videoStreamTimedOut = function videoStreamTimedOut(current, userId, mediaContext, streamKey) {
  const obj = DispatcherDefault;
  const obj2 = { type: "VIDEO_STREAM_READY_TIMEOUT", videoStreamId: current, mediaContext, userId, streamKey };
  obj.dispatch(obj2);
};
export const clearVideoStreamTimeout = function clearVideoStreamTimeout(DEFAULT, userId) {
  const obj = DispatcherDefault;
  const obj2 = { type: "CLEAR_VIDEO_STREAM_READY_TIMEOUT", mediaContext: DEFAULT, userId };
  obj.dispatch(obj2);
};

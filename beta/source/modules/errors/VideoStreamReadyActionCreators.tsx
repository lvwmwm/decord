// Module ID: 9698
// Function ID: 9699
// Name: VideoStreamReadyActionCreators
// Dependencies: [577, 2]
// Exports: clearVideoStreamTimeout, videoStreamTimedOut

// Module 9698 (VideoStreamReadyActionCreators)
import DispatcherDefault from "Dispatcher" /* 577 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/errors/VideoStreamReadyActionCreators.tsx");

export const videoStreamTimedOut = function videoStreamTimedOut(current, userId, mediaContext, streamKey) {
  DispatcherDefault.dispatch({ type: "VIDEO_STREAM_READY_TIMEOUT", videoStreamId: current, mediaContext, userId, streamKey });
};
export const clearVideoStreamTimeout = function clearVideoStreamTimeout(DEFAULT, userId) {
  DispatcherDefault.dispatch({ type: "CLEAR_VIDEO_STREAM_READY_TIMEOUT", mediaContext: DEFAULT, userId });
};

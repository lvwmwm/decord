// Module ID: 9778
// Function ID: 9779
// Name: VideoStreamReadyActionCreators
// Dependencies: [573, 2]
// Exports: clearVideoStreamTimeout, videoStreamTimedOut

// Module 9778 (VideoStreamReadyActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/errors/VideoStreamReadyActionCreators.tsx");

export const videoStreamTimedOut = function videoStreamTimedOut(current, userId, mediaContext, streamKey) {
  DispatcherDefault.dispatch({ type: "VIDEO_STREAM_READY_TIMEOUT", videoStreamId: current, mediaContext, userId, streamKey });
};
export const clearVideoStreamTimeout = function clearVideoStreamTimeout(DEFAULT, userId) {
  DispatcherDefault.dispatch({ type: "CLEAR_VIDEO_STREAM_READY_TIMEOUT", mediaContext: DEFAULT, userId });
};

// Module ID: 10758
// Function ID: 10759
// Name: videoStreamTimedOut
// Dependencies: [709, 2]
// Exports: clearVideoStreamTimeout, videoStreamTimedOut

// Module 10758 (videoStreamTimedOut)
const result = require("set").fileFinishedImporting("modules/errors/VideoStreamReadyActionCreators.tsx");

export const videoStreamTimedOut = function videoStreamTimedOut(current, closure_1, closure_6, closure_2) {
  let obj = importDefault(709);
  obj = { type: "VIDEO_STREAM_READY_TIMEOUT", videoStreamId: current, mediaContext: closure_6, userId: closure_1, streamKey: closure_2 };
  obj.dispatch(obj);
};
export const clearVideoStreamTimeout = function clearVideoStreamTimeout(DEFAULT, closure_0) {
  let obj = importDefault(709);
  obj = { type: "CLEAR_VIDEO_STREAM_READY_TIMEOUT", mediaContext: DEFAULT, userId: closure_0 };
  obj.dispatch(obj);
};

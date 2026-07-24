// Module ID: 10610
// Function ID: 82791
// Name: videoStreamTimedOut
// Dependencies: [686, 2]
// Exports: clearVideoStreamTimeout, videoStreamTimedOut

// Module 10610 (videoStreamTimedOut)
const result = require("set").fileFinishedImporting("modules/errors/VideoStreamReadyActionCreators.tsx");

export const videoStreamTimedOut = function videoStreamTimedOut(current, outer1_1, outer1_6, outer1_2) {
  let obj = importDefault(686);
  obj = { type: "VIDEO_STREAM_READY_TIMEOUT", videoStreamId: current, mediaContext: outer1_6, userId: outer1_1, streamKey: outer1_2 };
  obj.dispatch(obj);
};
export const clearVideoStreamTimeout = function clearVideoStreamTimeout(DEFAULT, userId) {
  let obj = importDefault(686);
  obj = { type: "CLEAR_VIDEO_STREAM_READY_TIMEOUT", mediaContext: DEFAULT, userId };
  obj.dispatch(obj);
};

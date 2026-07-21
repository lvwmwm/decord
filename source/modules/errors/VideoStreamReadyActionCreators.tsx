// Module ID: 10570
// Function ID: 82536
// Name: videoStreamTimedOut
// Dependencies: [646840323, 899088385]
// Exports: clearVideoStreamTimeout, videoStreamTimedOut

// Module 10570 (videoStreamTimedOut)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/errors/VideoStreamReadyActionCreators.tsx");

export const videoStreamTimedOut = function videoStreamTimedOut(current, closure_1, closure_6, closure_2) {
  let obj = importDefault(dependencyMap[0]);
  obj = { type: "VIDEO_STREAM_READY_TIMEOUT", videoStreamId: current, mediaContext: closure_6, userId: closure_1, streamKey: closure_2 };
  obj.dispatch(obj);
};
export const clearVideoStreamTimeout = function clearVideoStreamTimeout(DEFAULT, userId) {
  let obj = importDefault(dependencyMap[0]);
  obj = { type: "CLEAR_VIDEO_STREAM_READY_TIMEOUT", mediaContext: DEFAULT, userId };
  obj.dispatch(obj);
};

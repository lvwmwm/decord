// Module ID: 10493
// Function ID: 81378
// Name: useVideoSpinnerTimer
// Dependencies: [57, 31, 10494, 2]
// Exports: default

// Module 10493 (useVideoSpinnerTimer)
import _slicedToArray from "_slicedToArray";
import result from "result";

const require = arg1;
const result = require("map").fileFinishedImporting("modules/video_calls/useVideoSpinnerTimer.tsx");

export default function useVideoSpinnerTimer(userId) {
  let require;
  let videoSpinnerContext;
  ({ location: require, videoSpinnerContext } = userId);
  userId = userId.userId;
  const streamId = userId.streamId;
  const loading = userId.loading;
  let flag = userId.paused;
  if (flag === undefined) {
    flag = false;
  }
  let first;
  first = userId(streamId.useState(() => {
    const videoSpinnerTimer = new outer1_0(videoSpinnerContext[2]).VideoSpinnerTimer(closure_0);
    return videoSpinnerTimer;
  }), 1)[0];
  const items = [loading, flag, streamId, first, videoSpinnerContext, userId];
  const effect = streamId.useEffect(() => {
    if (!flag) {
      if (loading) {
        first.onSpinnerStarted();
      } else if (null != streamId) {
        first.trackSpinnerDuration(videoSpinnerContext, userId, streamId);
      }
    }
  }, items);
};

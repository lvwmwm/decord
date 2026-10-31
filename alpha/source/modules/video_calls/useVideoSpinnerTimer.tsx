// Module ID: 11765
// Function ID: 11766
// Name: useVideoSpinnerTimer
// Dependencies: [32, 19, 11766, 2]
// Exports: default

// Module 11765 (useVideoSpinnerTimer)
import VideoSpinnerTimer from "VideoSpinnerTimer" /* 11766 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/video_calls/useVideoSpinnerTimer.tsx");

export default function useVideoSpinnerTimer(userId) {
  let videoSpinnerContext;
  ({ location: require, videoSpinnerContext } = userId);
  userId = userId.userId;
  const streamId = userId.streamId;
  const loading = userId.loading;
  let flag = userId.paused;
  if (flag === undefined) {
    flag = false;
  }
  const first = userId(streamId.useState(() => {
    const videoSpinnerTimer = new VideoSpinnerTimer.VideoSpinnerTimer(require);
    return videoSpinnerTimer;
  }), 1)[0];
  const items = [loading, flag, streamId, first, videoSpinnerContext, userId];
  const effect = streamId.useEffect(() => {
    const tmp = flag;
    if (!tmp) {
      const tmp2 = loading;
      if (tmp2) {
        first.onSpinnerStarted();
      } else if (null != streamId) {
        first.trackSpinnerDuration(videoSpinnerContext, userId, tmp3);
      }
    }
  }, items);
};

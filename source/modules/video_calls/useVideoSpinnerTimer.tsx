// Module ID: 10566
// Function ID: 82521
// Name: useVideoSpinnerTimer
// Dependencies: []
// Exports: default

// Module 10566 (useVideoSpinnerTimer)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/video_calls/useVideoSpinnerTimer.tsx");

export default function useVideoSpinnerTimer(userId) {
  let videoSpinnerContext;
  ({ location: closure_0, videoSpinnerContext } = userId);
  const dependencyMap = videoSpinnerContext;
  userId = userId.userId;
  const callback = userId;
  const streamId = userId.streamId;
  const React = streamId;
  const loading = userId.loading;
  let flag = userId.paused;
  if (flag === undefined) {
    flag = false;
  }
  let first;
  first = callback(React.useState(() => {
    const videoSpinnerTimer = new callback(videoSpinnerContext[2]).VideoSpinnerTimer(callback);
    return videoSpinnerTimer;
  }), 1)[0];
  const items = [loading, flag, streamId, first, videoSpinnerContext, userId];
  const effect = React.useEffect(() => {
    if (!flag) {
      if (loading) {
        first.onSpinnerStarted();
      } else if (null != streamId) {
        first.trackSpinnerDuration(videoSpinnerContext, userId, streamId);
      }
    }
  }, items);
};

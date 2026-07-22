// Module ID: 10568
// Function ID: 82530
// Name: useVideoReadyTimeout
// Dependencies: []
// Exports: default

// Module 10568 (useVideoReadyTimeout)
let closure_2 = importAll(dependencyMap[0]);
let closure_3 = 20 * importDefault(dependencyMap[1]).Millis.SECOND;
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/errors/hooks/useVideoReadyTimeout.tsx");

export default function useVideoReadyTimeout(streamId) {
  let streamKey;
  let videoSpinnerContext;
  streamId = streamId.streamId;
  const arg1 = streamId;
  const userId = streamId.userId;
  const dependencyMap = userId;
  ({ videoSpinnerContext, streamKey } = streamId);
  const React = streamKey;
  const loading = streamId.loading;
  let closure_3 = loading;
  let flag = streamId.paused;
  if (flag === undefined) {
    flag = false;
  }
  let closure_5;
  let STREAM;
  const timeout = new arg1(dependencyMap[2]).Timeout();
  closure_5 = React.useRef(timeout);
  if (videoSpinnerContext !== arg1(dependencyMap[3]).VideoSpinnerContext.SELF_STREAM) {
    if (videoSpinnerContext !== arg1(dependencyMap[3]).VideoSpinnerContext.REMOTE_STREAM) {
      STREAM = arg1(dependencyMap[4]).MediaEngineContextTypes.DEFAULT;
    }
    const items = [flag, streamId, loading, STREAM, streamKey, userId];
    const effect = React.useEffect(() => {
      if (loading) {
        if (!flag) {
          const WindowVisibilityVideoManager = streamId(userId[5]).WindowVisibilityVideoManager;
          if (WindowVisibilityVideoManager.isIncomingVideoEnabled()) {
            const current = ref.current;
            const streamId = current;
            current.start(loading, () => {
              current(closure_1[6]).videoStreamTimedOut(current, closure_1, closure_6, closure_2);
            });
            return () => {
              current.stop();
            };
          }
        }
      }
    }, items);
    const obj = {};
    const items1 = [userId, STREAM];
    obj.onReady = React.useCallback(() => {
      const current = ref.current;
      current.stop();
      const result = streamId(userId[6]).clearVideoStreamTimeout(STREAM, userId);
    }, items1);
    return obj;
  }
  STREAM = arg1(dependencyMap[4]).MediaEngineContextTypes.STREAM;
};

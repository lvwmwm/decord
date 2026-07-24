// Module ID: 10607
// Function ID: 82772
// Name: useVideoReadyTimeout
// Dependencies: [31, 664, 4015, 10606, 4227, 10608, 10610, 2]
// Exports: default

// Module 10607 (useVideoReadyTimeout)
import result from "result";

const require = arg1;
let closure_3 = 20 * require("set").Millis.SECOND;
let result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/errors/hooks/useVideoReadyTimeout.tsx");

export default function useVideoReadyTimeout(streamId) {
  let streamKey;
  let videoSpinnerContext;
  streamId = streamId.streamId;
  const userId = streamId.userId;
  ({ videoSpinnerContext, streamKey } = streamId);
  const loading = streamId.loading;
  let flag = streamId.paused;
  if (flag === undefined) {
    flag = false;
  }
  let closure_5;
  let STREAM;
  const timeout = new streamId(userId[2]).Timeout();
  closure_5 = streamKey.useRef(timeout);
  if (videoSpinnerContext !== streamId(userId[3]).VideoSpinnerContext.SELF_STREAM) {
    if (videoSpinnerContext !== streamId(userId[3]).VideoSpinnerContext.REMOTE_STREAM) {
      STREAM = streamId(userId[4]).MediaEngineContextTypes.DEFAULT;
    }
    const items = [flag, streamId, loading, STREAM, streamKey, userId];
    const effect = streamKey.useEffect(() => {
      if (loading) {
        if (!flag) {
          const WindowVisibilityVideoManager = streamId(userId[5]).WindowVisibilityVideoManager;
          if (WindowVisibilityVideoManager.isIncomingVideoEnabled()) {
            const current = ref.current;
            current.start(loading, () => {
              streamId(userId[6]).videoStreamTimedOut(current, outer1_1, outer1_6, outer1_2);
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
    obj.onReady = streamKey.useCallback(() => {
      const current = ref.current;
      current.stop();
      const result = streamId(userId[6]).clearVideoStreamTimeout(STREAM, userId);
    }, items1);
    return obj;
  }
  STREAM = streamId(userId[4]).MediaEngineContextTypes.STREAM;
};

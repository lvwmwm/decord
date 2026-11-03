// Module ID: 11905
// Function ID: 11906
// Name: useVideoReadyTimeout
// Dependencies: [19, 1089, 4985, 11904, 5909, 5993, 11906, 2]
// Exports: default

// Module 11905 (useVideoReadyTimeout)
import DurationsDefault from "Durations" /* 1089 */;
import VideoStreamReadyActionCreators from "VideoStreamReadyActionCreators" /* 11906 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let closure_3 = 20 * DurationsDefault.Millis.SECOND;
let result = size.fileFinishedImporting("modules/errors/hooks/useVideoReadyTimeout.tsx");

export default function useVideoReadyTimeout(streamId) {
  let items1;
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
  let STREAM;
  let obj = streamKey;
  let tmp = streamId;
  let tmp2 = userId;
  const useRef = streamKey.useRef;
  const timeout = new streamId(userId[2]).Timeout();
  const ref = useRef(timeout);
  if (videoSpinnerContext !== streamId(userId[3]).VideoSpinnerContext.SELF_STREAM) {
    if (videoSpinnerContext !== tmp(tmp2[3]).VideoSpinnerContext.REMOTE_STREAM) {
      STREAM = tmp(tmp2[4]).MediaEngineContextTypes.DEFAULT;
    }
    const items = [flag, streamId, loading, STREAM, streamKey, userId];
    const effect = obj.useEffect(() => {
      const tmp = loading;
      if (tmp) {
        const tmp2 = flag;
        if (!tmp2) {
          const WindowVisibilityVideoManager = streamId(userId[5]).WindowVisibilityVideoManager;
          if (WindowVisibilityVideoManager.isIncomingVideoEnabled()) {
            const current = ref.current;
            current.start(loading, () => {
              const obj = streamId(userId[6]);
              obj.videoStreamTimedOut(current, closure_1_1, STREAM, streamKey);
            });
            return () => {
              current.stop();
            };
          }
        }
      }
    }, items);
    const obj2 = {
      onReady: obj.useCallback(() => {
          const current = ref.current;
          current.stop();
          const obj = VideoStreamReadyActionCreators;
          const result = obj.clearVideoStreamTimeout(STREAM, userId);
        }, items1)
    };
    items1 = [userId, STREAM];
    return obj2;
  }
  STREAM = tmp(tmp2[4]).MediaEngineContextTypes.STREAM;
};

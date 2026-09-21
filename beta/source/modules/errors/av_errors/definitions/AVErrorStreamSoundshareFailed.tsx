// Module ID: 18303
// Function ID: 18304
// Name: AVErrorStreamSoundshareFailed
// Dependencies: [4780, 4806, 1078, 9681, 18295, 4810, 2]

// Module 18303 (AVErrorStreamSoundshareFailed)
import StreamKeyUtils from "StreamKeyUtils" /* 4810 */;
import AVError from "AVError" /* 9681 */;
import AVErrorContext from "AVErrorContext" /* 18295 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4780 */;
import HookErrorStore from "HookErrorStore" /* 4806 */;

require = fn;
const MediaEngineHookTypes = fn(1078).MediaEngineHookTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamSoundshareFailed.tsx");

export const AVErrorStreamSoundshareFailedDefinition = {
  getActiveErrors() {
    const currentUserActiveStream = ApplicationStreamingStore.getCurrentUserActiveStream();
    let tmp2;
    if (null != currentUserActiveStream) {
      if (null != HookErrorStore.getHookError(MediaEngineHookTypes.SOUND)) {
        const obj = { type: AVError.AVError.STREAM_SOUNDSHARE_FAILED };
        const obj2 = AVErrorContext;
        const merged = Object.assign(obj2.getStreamErrorContext(StreamKeyUtils.encodeStreamKey(currentUserActiveStream)));
        const items = [obj];
        tmp2 = items;
      }
    }
    return tmp2;
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};

// Module ID: 18314
// Function ID: 18315
// Name: AVErrorStreamSoundshareFailed
// Dependencies: [4812, 4838, 1078, 9713, 18306, 4842, 2]

// Module 18314 (AVErrorStreamSoundshareFailed)
import StreamKeyUtils from "StreamKeyUtils" /* 4842 */;
import AVError from "AVError" /* 9713 */;
import AVErrorContext from "AVErrorContext" /* 18306 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4812 */;
import HookErrorStore from "HookErrorStore" /* 4838 */;

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

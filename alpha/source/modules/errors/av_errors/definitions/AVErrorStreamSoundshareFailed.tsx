// Module ID: 18531
// Function ID: 18532
// Name: AVErrorStreamSoundshareFailed
// Dependencies: [5894, 7431, 1085, 5288, 18523, 5897, 2]

// Module 18531 (AVErrorStreamSoundshareFailed)
import Constants from "Constants" /* 1085 */;
import AVError from "AVError" /* 5288 */;
import StreamKeyUtils from "StreamKeyUtils" /* 5897 */;
import AVErrorContext from "AVErrorContext" /* 18523 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 5894 */;
import HookErrorStore from "HookErrorStore" /* 7431 */;
import size from "module_2" /* 2 */;

const MediaEngineHookTypes = Constants.MediaEngineHookTypes;
let obj = {
  getActiveErrors() {
    const currentUserActiveStream = ApplicationStreamingStore.getCurrentUserActiveStream();
    let tmp2;
    if (null != currentUserActiveStream) {
      if (null != HookErrorStore.getHookError(MediaEngineHookTypes.SOUND)) {
        const obj = { type: AVError.AVError.STREAM_SOUNDSHARE_FAILED };
        const getStreamErrorContext = AVErrorContext.getStreamErrorContext;
        AVErrorContext;
        const obj2 = StreamKeyUtils;
        const merged = Object.assign(getStreamErrorContext(obj2.encodeStreamKey(currentUserActiveStream)));
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
const result = size.fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamSoundshareFailed.tsx");

export const AVErrorStreamSoundshareFailedDefinition = obj;

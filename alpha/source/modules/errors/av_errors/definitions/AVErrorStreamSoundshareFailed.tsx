// Module ID: 18984
// Function ID: 18985
// Name: AVErrorStreamSoundshareFailed
// Dependencies: [6115, 7650, 1087, 5351, 18976, 6118, 2]

// Module 18984 (AVErrorStreamSoundshareFailed)
import Constants from "Constants" /* 1087 */;
import AVError from "AVError" /* 5351 */;
import StreamKeyUtils from "StreamKeyUtils" /* 6118 */;
import AVErrorContext from "AVErrorContext" /* 18976 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6115 */;
import HookErrorStore from "HookErrorStore" /* 7650 */;
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

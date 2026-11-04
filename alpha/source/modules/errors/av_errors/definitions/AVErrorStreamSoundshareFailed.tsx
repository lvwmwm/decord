// Module ID: 20338
// Function ID: 20339
// Name: AVErrorStreamSoundshareFailed
// Dependencies: [6849, 8027, 1072, 6082, 20330, 6852, 2]

// Module 20338 (AVErrorStreamSoundshareFailed)
import Constants from "Constants" /* 1072 */;
import AVError from "AVError" /* 6082 */;
import StreamKeyUtils from "StreamKeyUtils" /* 6852 */;
import AVErrorContext from "AVErrorContext" /* 20330 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6849 */;
import HookErrorStore from "HookErrorStore" /* 8027 */;
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

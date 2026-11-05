// Module ID: 20374
// Function ID: 20375
// Name: AVErrorStreamSoundshareFailed
// Dependencies: [6852, 8032, 1072, 6085, 20366, 6855, 2]

// Module 20374 (AVErrorStreamSoundshareFailed)
import Constants from "Constants" /* 1072 */;
import AVError from "AVError" /* 6085 */;
import StreamKeyUtils from "StreamKeyUtils" /* 6855 */;
import AVErrorContext from "AVErrorContext" /* 20366 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6852 */;
import HookErrorStore from "HookErrorStore" /* 8032 */;
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

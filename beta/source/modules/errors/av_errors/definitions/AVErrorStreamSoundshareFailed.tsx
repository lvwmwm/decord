// Module ID: 20501
// Function ID: 20502
// Name: AVErrorStreamSoundshareFailed
// Dependencies: [6801, 7997, 1072, 6111, 20493, 6804, 2]

// Module 20501 (AVErrorStreamSoundshareFailed)
import Constants from "Constants" /* 1072 */;
import AVError from "AVError" /* 6111 */;
import StreamKeyUtils from "StreamKeyUtils" /* 6804 */;
import AVErrorContext from "AVErrorContext" /* 20493 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6801 */;
import HookErrorStore from "HookErrorStore" /* 7997 */;
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

// Module ID: 19059
// Function ID: 19060
// Name: AVErrorStreamSoundshareFailed
// Dependencies: [6153, 7697, 1087, 5389, 19051, 6156, 2]

// Module 19059 (AVErrorStreamSoundshareFailed)
import Constants from "Constants" /* 1087 */;
import AVError from "AVError" /* 5389 */;
import StreamKeyUtils from "StreamKeyUtils" /* 6156 */;
import AVErrorContext from "AVErrorContext" /* 19051 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6153 */;
import HookErrorStore from "HookErrorStore" /* 7697 */;
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

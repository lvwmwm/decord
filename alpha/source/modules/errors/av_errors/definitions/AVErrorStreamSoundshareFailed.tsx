// Module ID: 19992
// Function ID: 19993
// Name: AVErrorStreamSoundshareFailed
// Dependencies: [6708, 7880, 1072, 5942, 19984, 6711, 2]

// Module 19992 (AVErrorStreamSoundshareFailed)
import Constants from "Constants" /* 1072 */;
import AVError from "AVError" /* 5942 */;
import StreamKeyUtils from "StreamKeyUtils" /* 6711 */;
import AVErrorContext from "AVErrorContext" /* 19984 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6708 */;
import HookErrorStore from "HookErrorStore" /* 7880 */;
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

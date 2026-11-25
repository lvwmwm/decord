// Module ID: 20125
// Function ID: 20126
// Name: AVErrorStreamSoundshareFailed
// Dependencies: [6400, 6442, 1071, 5843, 20117, 6401, 2]

// Module 20125 (AVErrorStreamSoundshareFailed)
import Constants from "Constants" /* 1071 */;
import AVError from "AVError" /* 5843 */;
import StreamKeyUtils from "StreamKeyUtils" /* 6401 */;
import AVErrorContext from "AVErrorContext" /* 20117 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6400 */;
import HookErrorStore from "HookErrorStore" /* 6442 */;
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

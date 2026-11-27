// Module ID: 20386
// Function ID: 20387
// Name: AVErrorStreamSoundshareFailed
// Dependencies: [6813, 8406, 1071, 6035, 20378, 6816, 2]

// Module 20386 (AVErrorStreamSoundshareFailed)
import Constants from "Constants" /* 1071 */;
import AVError from "AVError" /* 6035 */;
import StreamKeyUtils from "StreamKeyUtils" /* 6816 */;
import AVErrorContext from "AVErrorContext" /* 20378 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6813 */;
import HookErrorStore from "HookErrorStore" /* 8406 */;
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

// Module ID: 19990
// Function ID: 19991
// Name: AVErrorStreamSoundshareFailed
// Dependencies: [6281, 6323, 1071, 5724, 19982, 6282, 2]

// Module 19990 (AVErrorStreamSoundshareFailed)
import Constants from "Constants" /* 1071 */;
import AVError from "AVError" /* 5724 */;
import StreamKeyUtils from "StreamKeyUtils" /* 6282 */;
import AVErrorContext from "AVErrorContext" /* 19982 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6281 */;
import HookErrorStore from "HookErrorStore" /* 6323 */;
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

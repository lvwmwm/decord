// Module ID: 20170
// Function ID: 20171
// Name: AVErrorStreamSoundshareFailed
// Dependencies: [6279, 6321, 1072, 5722, 20162, 6280, 2]

// Module 20170 (AVErrorStreamSoundshareFailed)
import Constants from "Constants" /* 1072 */;
import AVError from "AVError" /* 5722 */;
import StreamKeyUtils from "StreamKeyUtils" /* 6280 */;
import AVErrorContext from "AVErrorContext" /* 20162 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6279 */;
import HookErrorStore from "HookErrorStore" /* 6321 */;
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

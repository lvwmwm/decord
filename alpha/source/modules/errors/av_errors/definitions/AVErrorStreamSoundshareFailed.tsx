// Module ID: 19289
// Function ID: 19290
// Name: AVErrorStreamSoundshareFailed
// Dependencies: [6627, 7801, 1087, 5883, 19281, 6630, 2]

// Module 19289 (AVErrorStreamSoundshareFailed)
import Constants from "Constants" /* 1087 */;
import AVError from "AVError" /* 5883 */;
import StreamKeyUtils from "StreamKeyUtils" /* 6630 */;
import AVErrorContext from "AVErrorContext" /* 19281 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6627 */;
import HookErrorStore from "HookErrorStore" /* 7801 */;
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

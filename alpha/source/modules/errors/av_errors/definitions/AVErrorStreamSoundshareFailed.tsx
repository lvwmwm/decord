// Module ID: 18997
// Function ID: 18998
// Name: AVErrorStreamSoundshareFailed
// Dependencies: [6116, 7651, 1087, 5352, 18989, 6119, 2]

// Module 18997 (AVErrorStreamSoundshareFailed)
import Constants from "Constants" /* 1087 */;
import AVError from "AVError" /* 5352 */;
import StreamKeyUtils from "StreamKeyUtils" /* 6119 */;
import AVErrorContext from "AVErrorContext" /* 18989 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6116 */;
import HookErrorStore from "HookErrorStore" /* 7651 */;
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

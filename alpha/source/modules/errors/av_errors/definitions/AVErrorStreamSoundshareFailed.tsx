// Module ID: 18942
// Function ID: 18943
// Name: AVErrorStreamSoundshareFailed
// Dependencies: [6113, 7648, 1085, 5349, 18934, 6116, 2]

// Module 18942 (AVErrorStreamSoundshareFailed)
import Constants from "Constants" /* 1085 */;
import AVError from "AVError" /* 5349 */;
import StreamKeyUtils from "StreamKeyUtils" /* 6116 */;
import AVErrorContext from "AVErrorContext" /* 18934 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6113 */;
import HookErrorStore from "HookErrorStore" /* 7648 */;
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

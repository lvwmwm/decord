// Module ID: 19929
// Function ID: 19930
// Name: AVErrorStreamSoundshareFailed
// Dependencies: [6701, 7874, 1084, 5935, 19921, 6704, 2]

// Module 19929 (AVErrorStreamSoundshareFailed)
import Constants from "Constants" /* 1084 */;
import AVError from "AVError" /* 5935 */;
import StreamKeyUtils from "StreamKeyUtils" /* 6704 */;
import AVErrorContext from "AVErrorContext" /* 19921 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6701 */;
import HookErrorStore from "HookErrorStore" /* 7874 */;
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

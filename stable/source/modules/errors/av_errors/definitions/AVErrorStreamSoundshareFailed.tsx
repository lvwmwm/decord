// Module ID: 17672
// Function ID: 17673
// Name: AVErrorStreamSoundshareFailed
// Dependencies: [4859, 4885, 1086, 8869, 17664, 4889, 2]

// Module 17672 (AVErrorStreamSoundshareFailed)
import Constants from "Constants" /* 1086 */;
import StreamKeyUtils from "StreamKeyUtils" /* 4889 */;
import AVError from "AVError" /* 8869 */;
import AVErrorContext from "AVErrorContext" /* 17664 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4859 */;
import HookErrorStore from "HookErrorStore" /* 4885 */;
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

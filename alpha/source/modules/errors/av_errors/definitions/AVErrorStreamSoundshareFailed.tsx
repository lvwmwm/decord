// Module ID: 19707
// Function ID: 19708
// Name: AVErrorStreamSoundshareFailed
// Dependencies: [6677, 7851, 1084, 5933, 19699, 6680, 2]

// Module 19707 (AVErrorStreamSoundshareFailed)
import Constants from "Constants" /* 1084 */;
import AVError from "AVError" /* 5933 */;
import StreamKeyUtils from "StreamKeyUtils" /* 6680 */;
import AVErrorContext from "AVErrorContext" /* 19699 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6677 */;
import HookErrorStore from "HookErrorStore" /* 7851 */;
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

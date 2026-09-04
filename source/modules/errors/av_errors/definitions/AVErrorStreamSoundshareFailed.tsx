// Module ID: 17762
// Function ID: 17763
// Name: AVErrorStreamSoundshareFailedDefinition
// Dependencies: [4503, 4576, 673, 9039, 17754, 4547, 2]

// Module 17762 (AVErrorStreamSoundshareFailedDefinition)
import isStreamKey from "isStreamKey" /* 4547 */;
import mapped from "mapped" /* 9039 */;
import getVoiceChannelErrorContext from "getVoiceChannelErrorContext" /* 17754 */;
import closure_2 from "reset" /* 4503 */;
import closure_3 from "getHookError" /* 4576 */;
import { MediaEngineHookTypes } from "ME" /* 673 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamSoundshareFailed.tsx");

export const AVErrorStreamSoundshareFailedDefinition = {
  getActiveErrors() {
    currentUserActiveStream = currentUserActiveStream.getCurrentUserActiveStream();
    let tmp2;
    if (null != currentUserActiveStream) {
      if (null != hookError.getHookError(MediaEngineHookTypes.SOUND)) {
        const obj = { type: null };
        obj[0] = mapped.AVError.STREAM_SOUNDSHARE_FAILED;
        const obj2 = getVoiceChannelErrorContext;
        const merged = Object.assign(obj2.getStreamErrorContext(isStreamKey.encodeStreamKey(currentUserActiveStream)));
        const items = [obj];
        tmp2 = items;
        const obj3 = isStreamKey;
      }
    }
    return tmp2;
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};

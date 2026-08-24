// Module ID: 17156
// Function ID: 17157
// Name: AVErrorStreamSoundshareFailedDefinition
// Dependencies: [4658, 4568, 676, 9707, 17148, 4536, 2]

// Module 17156 (AVErrorStreamSoundshareFailedDefinition)
import isStreamKey from "isStreamKey" /* 4536 */;
import mapped from "mapped" /* 9707 */;
import getVoiceChannelErrorContext from "getVoiceChannelErrorContext" /* 17148 */;
import closure_2 from "reset" /* 4658 */;
import closure_3 from "getHookError" /* 4568 */;
import { MediaEngineHookTypes } from "ME" /* 676 */;

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

// Module ID: 16682
// Function ID: 16683
// Name: AVErrorStreamSoundshareFailedDefinition
// Dependencies: [4208, 4280, 676, 8852, 16674, 4253, 2]

// Module 16682 (AVErrorStreamSoundshareFailedDefinition)
import reset from "reset";
import getHookError from "getHookError";
import { MediaEngineHookTypes } from "ME";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamSoundshareFailed.tsx");

export const AVErrorStreamSoundshareFailedDefinition = {
  getActiveErrors() {
    currentUserActiveStream = currentUserActiveStream.getCurrentUserActiveStream();
    let tmp2;
    if (null != currentUserActiveStream) {
      if (null != hookError.getHookError(MediaEngineHookTypes.SOUND)) {
        const obj = { type: null };
        obj[0] = require(8852) /* mapped */.AVError.STREAM_SOUNDSHARE_FAILED;
        const obj2 = require(16674) /* getVoiceChannelErrorContext */;
        const merged = Object.assign(obj2.getStreamErrorContext(require(4253) /* isStreamKey */.encodeStreamKey(currentUserActiveStream)));
        const items = [obj];
        tmp2 = items;
        const obj3 = require(4253) /* isStreamKey */;
      }
    }
    return tmp2;
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};

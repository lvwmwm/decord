// Module ID: 16823
// Function ID: 16824
// Name: AVErrorStreamSoundshareFailedDefinition
// Dependencies: [4304, 4375, 676, 9092, 16815, 4348, 2]

// Module 16823 (AVErrorStreamSoundshareFailedDefinition)
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
        obj[0] = require(9092) /* mapped */.AVError.STREAM_SOUNDSHARE_FAILED;
        const obj2 = require(16815) /* getVoiceChannelErrorContext */;
        const merged = Object.assign(obj2.getStreamErrorContext(require(4348) /* isStreamKey */.encodeStreamKey(currentUserActiveStream)));
        const items = [obj];
        tmp2 = items;
        const obj3 = require(4348) /* isStreamKey */;
      }
    }
    return tmp2;
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};

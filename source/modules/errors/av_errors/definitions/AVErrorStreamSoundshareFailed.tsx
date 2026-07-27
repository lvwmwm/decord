// Module ID: 16606
// Function ID: 129519
// Name: AVErrorStreamSoundshareFailedDefinition
// Dependencies: [4150, 4222, 653, 8784, 16598, 4195, 2]

// Module 16606 (AVErrorStreamSoundshareFailedDefinition)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import { MediaEngineHookTypes } from "ME";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamSoundshareFailed.tsx");

export const AVErrorStreamSoundshareFailedDefinition = {
  getActiveErrors() {
    currentUserActiveStream = currentUserActiveStream.getCurrentUserActiveStream();
    let tmp2;
    if (null != currentUserActiveStream) {
      if (null != hookError.getHookError(MediaEngineHookTypes.SOUND)) {
        const obj = { type: require(8784) /* validateUniqueErrorCodes */.AVError.STREAM_SOUNDSHARE_FAILED };
        const obj2 = require(16598) /* getCommonErrorContext */;
        const merged = Object.assign(obj2.getStreamErrorContext(require(4195) /* isStreamKey */.encodeStreamKey(currentUserActiveStream)));
        const items = [obj];
        tmp2 = items;
        const obj3 = require(4195) /* isStreamKey */;
      }
    }
    return tmp2;
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};

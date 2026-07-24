// Module ID: 16583
// Function ID: 129304
// Name: AVErrorStreamSoundshareFailedDefinition
// Dependencies: [4149, 4221, 653, 8896, 16575, 4194, 2]

// Module 16583 (AVErrorStreamSoundshareFailedDefinition)
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
        const obj = { type: require(8896) /* validateUniqueErrorCodes */.AVError.STREAM_SOUNDSHARE_FAILED };
        const obj2 = require(16575) /* getCommonErrorContext */;
        const merged = Object.assign(obj2.getStreamErrorContext(require(4194) /* isStreamKey */.encodeStreamKey(currentUserActiveStream)));
        const items = [obj];
        tmp2 = items;
        const obj3 = require(4194) /* isStreamKey */;
      }
    }
    return tmp2;
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};

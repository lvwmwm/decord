// Module ID: 16396
// Function ID: 126672
// Name: AVErrorStreamSoundshareFailedDefinition
// Dependencies: []

// Module 16396 (AVErrorStreamSoundshareFailedDefinition)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const MediaEngineHookTypes = arg1(dependencyMap[2]).MediaEngineHookTypes;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamSoundshareFailed.tsx");

export const AVErrorStreamSoundshareFailedDefinition = {
  getActiveErrors() {
    const currentUserActiveStream = currentUserActiveStream.getCurrentUserActiveStream();
    let tmp2;
    if (null != currentUserActiveStream) {
      if (null != hookError.getHookError(MediaEngineHookTypes.SOUND)) {
        const obj = { type: arg1(dependencyMap[3]).AVError.STREAM_SOUNDSHARE_FAILED };
        const obj2 = arg1(dependencyMap[4]);
        const merged = Object.assign(obj2.getStreamErrorContext(arg1(dependencyMap[5]).encodeStreamKey(currentUserActiveStream)));
        const items = [obj];
        tmp2 = items;
        const obj3 = arg1(dependencyMap[5]);
      }
    }
    return tmp2;
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};

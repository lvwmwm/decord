// Module ID: 16402
// Function ID: 126699
// Name: AVErrorStreamBadNetworkQualityDefinition
// Dependencies: []

// Module 16402 (AVErrorStreamBadNetworkQualityDefinition)
let closure_2 = importDefault(dependencyMap[0]);
const RTCConnectionQuality = arg1(dependencyMap[1]).RTCConnectionQuality;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamBadNetworkQuality.tsx");

export const AVErrorStreamBadNetworkQualityDefinition = {
  getActiveErrors() {
    const allActiveStreamKeys = allActiveStreamKeys.getAllActiveStreamKeys();
    const mapped = allActiveStreamKeys.map((streamKey) => {
      let tmp = null;
      if (quality.getQuality(streamKey) === constants.BAD) {
        const obj = { type: callback(closure_1[2]).AVError.STREAM_BAD_NETWORK_QUALITY };
        const merged = Object.assign(callback(closure_1[3]).getStreamErrorContext(streamKey));
        tmp = obj;
        const obj2 = callback(closure_1[3]);
      }
      return tmp;
    });
    return mapped.filter(arg1(dependencyMap[4]).isNotNullish);
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};

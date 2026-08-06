// Module ID: 16822
// Function ID: 16823
// Name: AVErrorStreamBadNetworkQualityDefinition
// Dependencies: [4370, 676, 9092, 16815, 1351, 2]

// Module 16822 (AVErrorStreamBadNetworkQualityDefinition)
import initialize from "initialize";
import { RTCConnectionQuality } from "ME";

const require = arg1;
const result = require("mapped").fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamBadNetworkQuality.tsx");

export const AVErrorStreamBadNetworkQualityDefinition = {
  getActiveErrors() {
    allActiveStreamKeys = allActiveStreamKeys.getAllActiveStreamKeys();
    const mapped = allActiveStreamKeys.map((streamKey) => {
      let tmp = null;
      if (quality.getQuality(streamKey) === constants.BAD) {
        const obj = { type: null };
        obj[0] = callback(9092).AVError.STREAM_BAD_NETWORK_QUALITY;
        const merged = Object.assign(callback(16815).getStreamErrorContext(streamKey));
        tmp = obj;
        const obj2 = callback(16815);
      }
      return tmp;
    });
    return mapped.filter(require(1351) /* isDiscordFrontendDevelopment */.isNotNullish);
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};

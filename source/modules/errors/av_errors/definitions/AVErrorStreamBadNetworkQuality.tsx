// Module ID: 16940
// Function ID: 16941
// Name: AVErrorStreamBadNetworkQualityDefinition
// Dependencies: [4389, 676, 9175, 16933, 1370, 2]

// Module 16940 (AVErrorStreamBadNetworkQualityDefinition)
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
        obj[0] = callback(9175).AVError.STREAM_BAD_NETWORK_QUALITY;
        const merged = Object.assign(callback(16933).getStreamErrorContext(streamKey));
        tmp = obj;
        const obj2 = callback(16933);
      }
      return tmp;
    });
    return mapped.filter(require(1370) /* isDiscordFrontendDevelopment */.isNotNullish);
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};

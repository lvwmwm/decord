// Module ID: 17062
// Function ID: 17063
// Name: AVErrorStreamBadNetworkQualityDefinition
// Dependencies: [4558, 676, 9668, 17055, 1370, 2]

// Module 17062 (AVErrorStreamBadNetworkQualityDefinition)
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
        obj[0] = callback(9668).AVError.STREAM_BAD_NETWORK_QUALITY;
        const merged = Object.assign(callback(17055).getStreamErrorContext(streamKey));
        tmp = obj;
        const obj2 = callback(17055);
      }
      return tmp;
    });
    return mapped.filter(require(1370) /* isDiscordFrontendDevelopment */.isNotNullish);
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};

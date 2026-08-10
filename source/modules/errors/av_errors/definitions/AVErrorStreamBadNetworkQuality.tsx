// Module ID: 16928
// Function ID: 16929
// Name: AVErrorStreamBadNetworkQualityDefinition
// Dependencies: [4389, 676, 9169, 16921, 1351, 2]

// Module 16928 (AVErrorStreamBadNetworkQualityDefinition)
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
        obj[0] = callback(9169).AVError.STREAM_BAD_NETWORK_QUALITY;
        const merged = Object.assign(callback(16921).getStreamErrorContext(streamKey));
        tmp = obj;
        const obj2 = callback(16921);
      }
      return tmp;
    });
    return mapped.filter(require(1351) /* isDiscordFrontendDevelopment */.isNotNullish);
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};

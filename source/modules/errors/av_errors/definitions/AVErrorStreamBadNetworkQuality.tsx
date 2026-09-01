// Module ID: 17425
// Function ID: 17426
// Name: AVErrorStreamBadNetworkQualityDefinition
// Dependencies: [4568, 676, 9565, 17418, 1471, 2]

// Module 17425 (AVErrorStreamBadNetworkQualityDefinition)
import isDiscordFrontendDevelopment from "isDiscordFrontendDevelopment" /* 1471 */;
import closure_2 from "initialize" /* 4568 */;
import { RTCConnectionQuality } from "ME" /* 676 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamBadNetworkQuality.tsx");

export const AVErrorStreamBadNetworkQualityDefinition = {
  getActiveErrors() {
    allActiveStreamKeys = allActiveStreamKeys.getAllActiveStreamKeys();
    const mapped = allActiveStreamKeys.map((streamKey) => {
      let tmp = null;
      if (quality.getQuality(streamKey) === constants.BAD) {
        const obj = { type: null };
        obj[0] = callback(9565).AVError.STREAM_BAD_NETWORK_QUALITY;
        const merged = Object.assign(callback(17418).getStreamErrorContext(streamKey));
        tmp = obj;
        const obj2 = callback(17418);
      }
      return tmp;
    });
    return mapped.filter(isDiscordFrontendDevelopment.isNotNullish);
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};

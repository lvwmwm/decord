// Module ID: 17841
// Function ID: 17842
// Name: AVErrorStreamBadNetworkQualityDefinition
// Dependencies: [4599, 1074, 9110, 17834, 1369, 2]

// Module 17841 (AVErrorStreamBadNetworkQualityDefinition)
import isDiscordFrontendDevelopment from "isDiscordFrontendDevelopment" /* 1369 */;
import closure_2 from "initialize" /* 4599 */;
import { RTCConnectionQuality } from "ME" /* 1074 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamBadNetworkQuality.tsx");

export const AVErrorStreamBadNetworkQualityDefinition = {
  getActiveErrors() {
    allActiveStreamKeys = allActiveStreamKeys.getAllActiveStreamKeys();
    const mapped = allActiveStreamKeys.map((streamKey) => {
      let tmp = null;
      if (quality.getQuality(streamKey) === constants.BAD) {
        const obj = { type: null };
        obj[0] = callback(9110).AVError.STREAM_BAD_NETWORK_QUALITY;
        const merged = Object.assign(callback(17834).getStreamErrorContext(streamKey));
        tmp = obj;
        const obj2 = callback(17834);
      }
      return tmp;
    });
    return mapped.filter(isDiscordFrontendDevelopment.isNotNullish);
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};

// Module ID: 17761
// Function ID: 17762
// Name: AVErrorStreamBadNetworkQualityDefinition
// Dependencies: [4571, 673, 9039, 17754, 1394, 2]

// Module 17761 (AVErrorStreamBadNetworkQualityDefinition)
import isDiscordFrontendDevelopment from "isDiscordFrontendDevelopment" /* 1394 */;
import closure_2 from "initialize" /* 4571 */;
import { RTCConnectionQuality } from "ME" /* 673 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamBadNetworkQuality.tsx");

export const AVErrorStreamBadNetworkQualityDefinition = {
  getActiveErrors() {
    allActiveStreamKeys = allActiveStreamKeys.getAllActiveStreamKeys();
    const mapped = allActiveStreamKeys.map((streamKey) => {
      let tmp = null;
      if (quality.getQuality(streamKey) === constants.BAD) {
        const obj = { type: null };
        obj[0] = callback(9039).AVError.STREAM_BAD_NETWORK_QUALITY;
        const merged = Object.assign(callback(17754).getStreamErrorContext(streamKey));
        tmp = obj;
        const obj2 = callback(17754);
      }
      return tmp;
    });
    return mapped.filter(isDiscordFrontendDevelopment.isNotNullish);
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};

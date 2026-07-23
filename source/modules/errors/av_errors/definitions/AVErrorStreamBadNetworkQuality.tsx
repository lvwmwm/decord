// Module ID: 16535
// Function ID: 128976
// Name: AVErrorStreamBadNetworkQualityDefinition
// Dependencies: [4216, 653, 8857, 16528, 1327, 2]

// Module 16535 (AVErrorStreamBadNetworkQualityDefinition)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { RTCConnectionQuality } from "ME";

const require = arg1;
const result = require("validateUniqueErrorCodes").fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamBadNetworkQuality.tsx");

export const AVErrorStreamBadNetworkQualityDefinition = {
  getActiveErrors() {
    allActiveStreamKeys = allActiveStreamKeys.getAllActiveStreamKeys();
    const mapped = allActiveStreamKeys.map((streamKey) => {
      let tmp = null;
      if (outer1_2.getQuality(streamKey) === outer1_3.BAD) {
        const obj = { type: outer1_0(outer1_1[2]).AVError.STREAM_BAD_NETWORK_QUALITY };
        const merged = Object.assign(outer1_0(outer1_1[3]).getStreamErrorContext(streamKey));
        tmp = obj;
        const obj2 = outer1_0(outer1_1[3]);
      }
      return tmp;
    });
    return mapped.filter(require(1327) /* isDiscordFrontendDevelopment */.isNotNullish);
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};

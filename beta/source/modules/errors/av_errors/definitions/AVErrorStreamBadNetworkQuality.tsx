// Module ID: 17671
// Function ID: 17672
// Name: AVErrorStreamBadNetworkQuality
// Dependencies: [4876, 1086, 8869, 17664, 1376, 2]

// Module 17671 (AVErrorStreamBadNetworkQuality)
import Constants from "Constants" /* 1086 */;
import GlobalUtils from "GlobalUtils" /* 1376 */;
import AVError from "AVError" /* 8869 */;
import AVErrorContext from "AVErrorContext" /* 17664 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 4876 */;
import size from "module_2" /* 2 */;

const RTCConnectionQuality = Constants.RTCConnectionQuality;
let obj = {
  getActiveErrors() {
    let quality;
    const allActiveStreamKeys = StreamRTCConnectionStore.getAllActiveStreamKeys();
    const mapped = allActiveStreamKeys.map((item) => {
      let tmp = null;
      if (quality.getQuality(item) === constants.BAD) {
        const obj = { type: AVError.AVError.STREAM_BAD_NETWORK_QUALITY };
        const obj2 = AVErrorContext;
        const merged = Object.assign(obj2.getStreamErrorContext(item));
        tmp = obj;
      }
      return tmp;
    });
    return mapped.filter(GlobalUtils.isNotNullish);
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};
const result = size.fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamBadNetworkQuality.tsx");

export const AVErrorStreamBadNetworkQualityDefinition = obj;

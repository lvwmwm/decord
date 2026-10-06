// Module ID: 18081
// Function ID: 18082
// Name: AVErrorStreamBadNetworkQuality
// Dependencies: [4935, 1085, 9131, 18074, 1375, 2]

// Module 18081 (AVErrorStreamBadNetworkQuality)
import Constants from "Constants" /* 1085 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import AVError from "AVError" /* 9131 */;
import AVErrorContext from "AVErrorContext" /* 18074 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 4935 */;
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

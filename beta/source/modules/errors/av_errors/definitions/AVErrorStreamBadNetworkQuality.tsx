// Module ID: 20124
// Function ID: 20125
// Name: AVErrorStreamBadNetworkQuality
// Dependencies: [6396, 1071, 5843, 20117, 1254, 2]

// Module 20124 (AVErrorStreamBadNetworkQuality)
import Constants from "Constants" /* 1071 */;
import GlobalUtils from "GlobalUtils" /* 1254 */;
import AVError from "AVError" /* 5843 */;
import AVErrorContext from "AVErrorContext" /* 20117 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 6396 */;
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

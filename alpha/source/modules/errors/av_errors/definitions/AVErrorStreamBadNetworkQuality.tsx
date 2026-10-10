// Module ID: 18604
// Function ID: 18605
// Name: AVErrorStreamBadNetworkQuality
// Dependencies: [7428, 1085, 5289, 18597, 1388, 2]

// Module 18604 (AVErrorStreamBadNetworkQuality)
import Constants from "Constants" /* 1085 */;
import GlobalUtils from "GlobalUtils" /* 1388 */;
import AVError from "AVError" /* 5289 */;
import AVErrorContext from "AVErrorContext" /* 18597 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 7428 */;
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

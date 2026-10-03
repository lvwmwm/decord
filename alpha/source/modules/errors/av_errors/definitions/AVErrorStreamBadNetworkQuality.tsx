// Module ID: 18014
// Function ID: 18015
// Name: AVErrorStreamBadNetworkQuality
// Dependencies: [4929, 1085, 9095, 18007, 1375, 2]

// Module 18014 (AVErrorStreamBadNetworkQuality)
import Constants from "Constants" /* 1085 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import AVError from "AVError" /* 9095 */;
import AVErrorContext from "AVErrorContext" /* 18007 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 4929 */;
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

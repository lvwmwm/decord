// Module ID: 19443
// Function ID: 19444
// Name: AVErrorStreamBadNetworkQuality
// Dependencies: [7815, 1084, 5898, 19436, 1385, 2]

// Module 19443 (AVErrorStreamBadNetworkQuality)
import Constants from "Constants" /* 1084 */;
import GlobalUtils from "GlobalUtils" /* 1385 */;
import AVError from "AVError" /* 5898 */;
import AVErrorContext from "AVErrorContext" /* 19436 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 7815 */;
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

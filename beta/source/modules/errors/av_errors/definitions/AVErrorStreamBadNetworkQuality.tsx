// Module ID: 17669
// Function ID: 17670
// Name: AVErrorStreamBadNetworkQuality
// Dependencies: [4875, 1074, 8875, 17662, 1370, 2]

// Module 17669 (AVErrorStreamBadNetworkQuality)
import Constants from "Constants" /* 1074 */;
import GlobalUtils from "GlobalUtils" /* 1370 */;
import AVError from "AVError" /* 8875 */;
import AVErrorContext from "AVErrorContext" /* 17662 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 4875 */;
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

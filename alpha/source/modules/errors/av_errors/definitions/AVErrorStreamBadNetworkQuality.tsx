// Module ID: 18983
// Function ID: 18984
// Name: AVErrorStreamBadNetworkQuality
// Dependencies: [7647, 1087, 5351, 18976, 1388, 2]

// Module 18983 (AVErrorStreamBadNetworkQuality)
import Constants from "Constants" /* 1087 */;
import GlobalUtils from "GlobalUtils" /* 1388 */;
import AVError from "AVError" /* 5351 */;
import AVErrorContext from "AVErrorContext" /* 18976 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 7647 */;
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

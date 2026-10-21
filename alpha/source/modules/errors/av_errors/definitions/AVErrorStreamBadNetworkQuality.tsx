// Module ID: 19200
// Function ID: 19201
// Name: AVErrorStreamBadNetworkQuality
// Dependencies: [7789, 1087, 5877, 19193, 1388, 2]

// Module 19200 (AVErrorStreamBadNetworkQuality)
import Constants from "Constants" /* 1087 */;
import GlobalUtils from "GlobalUtils" /* 1388 */;
import AVError from "AVError" /* 5877 */;
import AVErrorContext from "AVErrorContext" /* 19193 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 7789 */;
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

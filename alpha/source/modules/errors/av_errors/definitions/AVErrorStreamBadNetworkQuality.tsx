// Module ID: 20838
// Function ID: 20839
// Name: AVErrorStreamBadNetworkQuality
// Dependencies: [6792, 1072, 6247, 20831, 1255, 2]

// Module 20838 (AVErrorStreamBadNetworkQuality)
import Constants from "Constants" /* 1072 */;
import GlobalUtils from "GlobalUtils" /* 1255 */;
import AVError from "AVError" /* 6247 */;
import AVErrorContext from "AVErrorContext" /* 20831 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 6792 */;
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

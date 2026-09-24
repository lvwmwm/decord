// Module ID: 18313
// Function ID: 18314
// Name: AVErrorStreamBadNetworkQuality
// Dependencies: [4829, 1078, 9713, 18306, 1374, 2]

// Module 18313 (AVErrorStreamBadNetworkQuality)
import GlobalUtils from "GlobalUtils" /* 1374 */;
import AVError from "AVError" /* 9713 */;
import AVErrorContext from "AVErrorContext" /* 18306 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 4829 */;

require = fn;
const RTCConnectionQuality = fn(1078).RTCConnectionQuality;
const size = fn(2);
const result = size.fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamBadNetworkQuality.tsx");

export const AVErrorStreamBadNetworkQualityDefinition = {
  getActiveErrors() {
    const allActiveStreamKeys = StreamRTCConnectionStore.getAllActiveStreamKeys();
    const mapped = allActiveStreamKeys.map((item) => {
      let tmp = null;
      if (quality.getQuality(item) === constants.BAD) {
        const obj = { type: AVError.AVError.STREAM_BAD_NETWORK_QUALITY };
        const merged = Object.assign(AVErrorContext.getStreamErrorContext(item));
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

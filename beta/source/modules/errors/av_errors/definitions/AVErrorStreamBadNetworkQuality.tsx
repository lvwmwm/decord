// Module ID: 18302
// Function ID: 18303
// Name: AVErrorStreamBadNetworkQuality
// Dependencies: [4797, 1078, 9681, 18295, 1374, 2]

// Module 18302 (AVErrorStreamBadNetworkQuality)
import GlobalUtils from "GlobalUtils" /* 1374 */;
import AVError from "AVError" /* 9681 */;
import AVErrorContext from "AVErrorContext" /* 18295 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 4797 */;

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

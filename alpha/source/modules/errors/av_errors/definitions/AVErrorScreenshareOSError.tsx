// Module ID: 20889
// Function ID: 20890
// Name: AVErrorScreenshareOSError
// Dependencies: [1380, 6255, 20878, 6805, 2]

// Module 20889 (AVErrorScreenshareOSError)
import PlatformUtils from "PlatformUtils" /* 1380 */;
import AVError from "AVError" /* 6255 */;
import StreamKeyUtils from "StreamKeyUtils" /* 6805 */;
import AVErrorContext from "AVErrorContext" /* 20878 */;
import size from "module_2" /* 2 */;

let closure_2 = BigInt(-3821);
let obj = {
  getActiveErrors(activeStreams) {
    activeStreams = activeStreams.activeStreams;
    const found = activeStreams.filter((errorCode) => null != errorCode.errorCode);
    return found.map((errorCode) => {
      const obj = { type: AVError.AVError.SCREENSHARE_OS_ERROR, errorMessage: null };
      const obj2 = PlatformUtils;
      if (obj2.isMac()) {
        let combined;
        if (errorCode.errorCode === closure_1_2) {
          const _HermesInternal = HermesInternal;
          combined = "" + str + " - your Mac may be low on disk space";
        }
        obj.errorMessage = combined;
        const getStreamErrorContext = AVErrorContext.getStreamErrorContext;
        AVErrorContext;
        const tmpResult2 = StreamKeyUtils;
        const merged = Object.assign(getStreamErrorContext(tmpResult2.encodeStreamKey(errorCode)));
        return obj;
      }
      combined = str.toString();
    });
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};
const result = size.fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorScreenshareOSError.tsx");

export const AVErrorScreenshareOSErrorDefinition = obj;

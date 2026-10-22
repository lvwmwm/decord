// Module ID: 19269
// Function ID: 19270
// Name: AVErrorScreenshareOSError
// Dependencies: [1384, 5884, 19258, 6631, 2]

// Module 19269 (AVErrorScreenshareOSError)
import PlatformUtils from "PlatformUtils" /* 1384 */;
import AVError from "AVError" /* 5884 */;
import StreamKeyUtils from "StreamKeyUtils" /* 6631 */;
import AVErrorContext from "AVErrorContext" /* 19258 */;
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

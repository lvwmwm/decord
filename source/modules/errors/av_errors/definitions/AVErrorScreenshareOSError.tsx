// Module ID: 17765
// Function ID: 17766
// Name: AVErrorScreenshareOSErrorDefinition
// Dependencies: [1234, 9039, 17754, 4547, 2]

// Module 17765 (AVErrorScreenshareOSErrorDefinition)
import set from "set" /* 2 */;
import closure_2 from "module_4294963475" /* 4294963475 */;

const result = set.fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorScreenshareOSError.tsx");

export const AVErrorScreenshareOSErrorDefinition = {
  getActiveErrors(activeStreams) {
    activeStreams = activeStreams.activeStreams;
    const found = activeStreams.filter((errorCode) => null != errorCode.errorCode);
    return found.map((errorCode) => {
      const obj = { type: callback(9039).AVError.SCREENSHARE_OS_ERROR, errorMessage: null };
      if (obj2.isMac()) {
        if (str === closure_2) {
          const _HermesInternal = HermesInternal;
          let combined = "" + str + " - your Mac may be low on disk space";
        }
        obj[1] = combined;
        let tmpResult = tmp(17754);
        tmpResult = tmp(4547);
        const merged = Object.assign(tmpResult.getStreamErrorContext(tmpResult.encodeStreamKey(errorCode)));
        return obj;
      }
      combined = str.toString();
    });
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};

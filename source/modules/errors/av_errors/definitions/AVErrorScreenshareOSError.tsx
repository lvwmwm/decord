// Module ID: 17191
// Function ID: 17192
// Name: AVErrorScreenshareOSErrorDefinition
// Dependencies: [500, 9317, 17180, 4446, 2]

// Module 17191 (AVErrorScreenshareOSErrorDefinition)
import set from "set" /* 2 */;
import closure_2 from "module_4294963475" /* 4294963475 */;

const result = set.fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorScreenshareOSError.tsx");

export const AVErrorScreenshareOSErrorDefinition = {
  getActiveErrors(activeStreams) {
    activeStreams = activeStreams.activeStreams;
    const found = activeStreams.filter((errorCode) => null != errorCode.errorCode);
    return found.map((errorCode) => {
      const obj = { type: callback(9317).AVError.SCREENSHARE_OS_ERROR, errorMessage: null };
      if (obj2.isMac()) {
        if (str === closure_2) {
          const _HermesInternal = HermesInternal;
          let combined = "" + str + " - your Mac may be low on disk space";
        }
        obj[1] = combined;
        let tmpResult = tmp(17180);
        tmpResult = tmp(4446);
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

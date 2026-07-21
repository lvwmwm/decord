// Module ID: 16414
// Function ID: 126777
// Name: AVErrorScreenshareOSErrorDefinition
// Dependencies: [31, 27, 33, 8849, 1212]

// Module 16414 (AVErrorScreenshareOSErrorDefinition)
import module_4294963475 from "module_4294963475";
import getSystemLocale from "getSystemLocale";

const result = getSystemLocale.fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorScreenshareOSError.tsx");

export const AVErrorScreenshareOSErrorDefinition = {
  getActiveErrors(activeStreams) {
    activeStreams = activeStreams.activeStreams;
    const found = activeStreams.filter((errorCode) => null != errorCode.errorCode);
    return found.map((errorCode) => {
      const obj = { type: callback(closure_1[1]).AVError.SCREENSHARE_OS_ERROR };
      if (obj2.isMac()) {
        if (str === module_4294963475) {
          const _HermesInternal = HermesInternal;
          let combined = "" + str + " - your Mac may be low on disk space";
        }
        obj.errorMessage = combined;
        const obj3 = callback(closure_1[2]);
        const merged = Object.assign(obj3.getStreamErrorContext(callback(closure_1[3]).encodeStreamKey(errorCode)));
        return obj;
      }
      combined = str.toString();
    });
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};

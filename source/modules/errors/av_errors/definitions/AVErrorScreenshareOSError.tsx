// Module ID: 16586
// Function ID: 129317
// Name: AVErrorScreenshareOSErrorDefinition
// Dependencies: [477, 8896, 16575, 4194, 2]

// Module 16586 (AVErrorScreenshareOSErrorDefinition)
import module_4294963475 from "module_4294963475";

const result = require("getCommonErrorContext").fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorScreenshareOSError.tsx");

export const AVErrorScreenshareOSErrorDefinition = {
  getActiveErrors(activeStreams) {
    activeStreams = activeStreams.activeStreams;
    const found = activeStreams.filter((errorCode) => null != errorCode.errorCode);
    return found.map((errorCode) => {
      const obj = { type: outer1_0(outer1_1[1]).AVError.SCREENSHARE_OS_ERROR };
      if (obj2.isMac()) {
        if (str === outer1_2) {
          const _HermesInternal = HermesInternal;
          let combined = "" + str + " - your Mac may be low on disk space";
        }
        obj.errorMessage = combined;
        const obj3 = outer1_0(outer1_1[2]);
        const merged = Object.assign(obj3.getStreamErrorContext(outer1_0(outer1_1[3]).encodeStreamKey(errorCode)));
        return obj;
      }
      combined = str.toString();
    });
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};

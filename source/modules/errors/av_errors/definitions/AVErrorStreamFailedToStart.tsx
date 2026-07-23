// Module ID: 16537
// Function ID: 128983
// Name: AVErrorStreamFailedToStartDefinition
// Dependencies: [653, 8857, 16528, 4194, 2]

// Module 16537 (AVErrorStreamFailedToStartDefinition)
import { ApplicationStreamStates } from "ME";

const result = require("getCommonErrorContext").fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamFailedToStart.tsx");

export const AVErrorStreamFailedToStartDefinition = {
  getActiveErrors(activeStreams) {
    activeStreams = activeStreams.activeStreams;
    const found = activeStreams.filter((state) => {
      let tmp = state.state === outer1_2.FAILED;
      if (tmp) {
        tmp = null == state.errorCode;
      }
      return tmp;
    });
    return found.map((currentUserActiveStream) => {
      const obj = { type: outer1_0(outer1_1[1]).AVError.STREAM_FAILED_TO_START };
      const obj2 = outer1_0(outer1_1[2]);
      const merged = Object.assign(obj2.getStreamErrorContext(outer1_0(outer1_1[3]).encodeStreamKey(currentUserActiveStream)));
      return obj;
    });
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};

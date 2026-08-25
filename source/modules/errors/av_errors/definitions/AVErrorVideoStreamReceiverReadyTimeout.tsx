// Module ID: 17194
// Function ID: 17195
// Name: AVErrorVideoStreamReceiverReadyTimeoutDefinition
// Dependencies: [1218, 10727, 9317, 2]

// Module 17194 (AVErrorVideoStreamReceiverReadyTimeoutDefinition)
import closure_2 from "fetchFingerprint" /* 1218 */;
import closure_3 from "makeTimeoutKey" /* 10727 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorVideoStreamReceiverReadyTimeout.tsx");

export const AVErrorVideoStreamReceiverReadyTimeoutDefinition = {
  getActiveErrors() {
    const values = Object.values(timedoutVideos.getTimedoutVideos());
    const found = values.filter((arg0) => {
      ({ userId, videoStreamId } = arg0);
      let tmp = id.getId() !== userId;
      if (tmp) {
        tmp = null != videoStreamId;
      }
      return tmp;
    });
    return found.map((arg0) => {
      const merged = Object.assign(arg0);
      return { type: callback(table[2]).AVError.VIDEO_STREAM_RECEIVER_READY_TIMEOUT };
    });
  },
  makeErrorContextKey(mediaContext) {
    return "" + mediaContext.mediaContext + ":" + mediaContext.userId;
  }
};

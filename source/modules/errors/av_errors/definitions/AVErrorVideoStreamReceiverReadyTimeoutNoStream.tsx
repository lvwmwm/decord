// Module ID: 17434
// Function ID: 17435
// Name: AVErrorVideoStreamReceiverReadyTimeoutNoStreamDefinition
// Dependencies: [1218, 9491, 9565, 2]

// Module 17434 (AVErrorVideoStreamReceiverReadyTimeoutNoStreamDefinition)
import closure_2 from "fetchFingerprint" /* 1218 */;
import closure_3 from "makeTimeoutKey" /* 9491 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorVideoStreamReceiverReadyTimeoutNoStream.tsx");

export const AVErrorVideoStreamReceiverReadyTimeoutNoStreamDefinition = {
  getActiveErrors() {
    const values = Object.values(timedoutVideos.getTimedoutVideos());
    const found = values.filter((arg0) => {
      ({ userId, videoStreamId } = arg0);
      let tmp = id.getId() !== userId;
      if (tmp) {
        tmp = null == videoStreamId;
      }
      return tmp;
    });
    return found.map((arg0) => {
      const merged = Object.assign(arg0);
      return { type: callback(table[2]).AVError.VIDEO_STREAM_RECEIVER_READY_TIMEOUT_NO_STREAM };
    });
  },
  makeErrorContextKey(mediaContext) {
    return "" + mediaContext.mediaContext + ":" + mediaContext.userId;
  }
};

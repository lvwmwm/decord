// Module ID: 16789
// Function ID: 16790
// Name: AVErrorVideoStreamReceiverReadyTimeoutDefinition
// Dependencies: [1218, 10533, 9063, 2]

// Module 16789 (AVErrorVideoStreamReceiverReadyTimeoutDefinition)
import fetchFingerprint from "fetchFingerprint";
import makeTimeoutKey from "makeTimeoutKey";

const require = arg1;
const result = require("mapped").fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorVideoStreamReceiverReadyTimeout.tsx");

export const AVErrorVideoStreamReceiverReadyTimeoutDefinition = {
  getActiveErrors() {
    const values = Object.values(timedoutVideos.getTimedoutVideos());
    const found = values.filter((arg0) => {
      let userId;
      let videoStreamId;
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

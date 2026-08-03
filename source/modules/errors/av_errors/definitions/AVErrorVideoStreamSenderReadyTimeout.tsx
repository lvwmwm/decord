// Module ID: 16776
// Function ID: 16777
// Name: AVErrorVideoStreamSenderReadyTimeoutDefinition
// Dependencies: [1218, 10711, 9038, 2]

// Module 16776 (AVErrorVideoStreamSenderReadyTimeoutDefinition)
import fetchFingerprint from "fetchFingerprint";
import makeTimeoutKey from "makeTimeoutKey";

const require = arg1;
const result = require("mapped").fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorVideoStreamSenderReadyTimeout.tsx");

export const AVErrorVideoStreamSenderReadyTimeoutDefinition = {
  getActiveErrors() {
    const values = Object.values(timedoutVideos.getTimedoutVideos());
    const found = values.filter((arg0) => {
      let userId;
      let videoStreamId;
      ({ userId, videoStreamId } = arg0);
      let tmp = id.getId() === userId;
      if (tmp) {
        tmp = null != videoStreamId;
      }
      return tmp;
    });
    return found.map((arg0) => {
      const merged = Object.assign(arg0);
      return { type: callback(table[2]).AVError.VIDEO_STREAM_SENDER_READY_TIMEOUT };
    });
  },
  makeErrorContextKey(mediaContext) {
    return "" + mediaContext.mediaContext + ":" + mediaContext.userId;
  }
};

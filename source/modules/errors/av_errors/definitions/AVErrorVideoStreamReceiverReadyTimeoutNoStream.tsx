// Module ID: 16591
// Function ID: 129341
// Name: AVErrorVideoStreamReceiverReadyTimeoutNoStreamDefinition
// Dependencies: [1194, 10562, 8896, 2]

// Module 16591 (AVErrorVideoStreamReceiverReadyTimeoutNoStreamDefinition)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";

const require = arg1;
const result = require("validateUniqueErrorCodes").fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorVideoStreamReceiverReadyTimeoutNoStream.tsx");

export const AVErrorVideoStreamReceiverReadyTimeoutNoStreamDefinition = {
  getActiveErrors() {
    const values = Object.values(timedoutVideos.getTimedoutVideos());
    const found = values.filter((arg0) => {
      let userId;
      let videoStreamId;
      ({ userId, videoStreamId } = arg0);
      let tmp = outer1_2.getId() !== userId;
      if (tmp) {
        tmp = null == videoStreamId;
      }
      return tmp;
    });
    return found.map((arg0) => {
      const merged = Object.assign(arg0);
      return { type: outer1_0(outer1_1[2]).AVError.VIDEO_STREAM_RECEIVER_READY_TIMEOUT_NO_STREAM };
    });
  },
  makeErrorContextKey(mediaContext) {
    return "" + mediaContext.mediaContext + ":" + mediaContext.userId;
  }
};

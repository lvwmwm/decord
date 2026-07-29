// Module ID: 16683
// Function ID: 16684
// Name: AVErrorStreamFailedToStartDefinition
// Dependencies: [676, 8852, 16674, 4253, 2]

// Module 16683 (AVErrorStreamFailedToStartDefinition)
import { ApplicationStreamStates } from "ME";

const result = require("getVoiceChannelErrorContext").fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamFailedToStart.tsx");

export const AVErrorStreamFailedToStartDefinition = {
  getActiveErrors(activeStreams) {
    activeStreams = activeStreams.activeStreams;
    const found = activeStreams.filter((state) => {
      let tmp = state.state === constants.FAILED;
      if (tmp) {
        tmp = null == state.errorCode;
      }
      return tmp;
    });
    return found.map((currentUserActiveStream) => {
      const obj = { type: callback(8852).AVError.STREAM_FAILED_TO_START };
      const obj2 = callback(16674);
      const merged = Object.assign(obj2.getStreamErrorContext(callback(4253).encodeStreamKey(currentUserActiveStream)));
      return obj;
    });
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};

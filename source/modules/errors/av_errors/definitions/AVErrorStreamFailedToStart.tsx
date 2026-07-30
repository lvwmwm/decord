// Module ID: 16677
// Function ID: 16678
// Name: AVErrorStreamFailedToStartDefinition
// Dependencies: [676, 8848, 16668, 4253, 2]

// Module 16677 (AVErrorStreamFailedToStartDefinition)
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
      const obj = { type: callback(8848).AVError.STREAM_FAILED_TO_START };
      const obj2 = callback(16668);
      const merged = Object.assign(obj2.getStreamErrorContext(callback(4253).encodeStreamKey(currentUserActiveStream)));
      return obj;
    });
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};

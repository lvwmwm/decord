// Module ID: 17000
// Function ID: 17001
// Name: AVErrorStreamFailedToStartDefinition
// Dependencies: [676, 9215, 16991, 4407, 2]

// Module 17000 (AVErrorStreamFailedToStartDefinition)
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
      const obj = { type: callback(9215).AVError.STREAM_FAILED_TO_START };
      const obj2 = callback(16991);
      const merged = Object.assign(obj2.getStreamErrorContext(callback(4407).encodeStreamKey(currentUserActiveStream)));
      return obj;
    });
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};

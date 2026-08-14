// Module ID: 17018
// Function ID: 17019
// Name: AVErrorStreamFailedToStartDefinition
// Dependencies: [676, 9233, 17009, 4408, 2]

// Module 17018 (AVErrorStreamFailedToStartDefinition)
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
      const obj = { type: callback(9233).AVError.STREAM_FAILED_TO_START };
      const obj2 = callback(17009);
      const merged = Object.assign(obj2.getStreamErrorContext(callback(4408).encodeStreamKey(currentUserActiveStream)));
      return obj;
    });
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};

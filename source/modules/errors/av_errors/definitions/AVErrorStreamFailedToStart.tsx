// Module ID: 16844
// Function ID: 16845
// Name: AVErrorStreamFailedToStartDefinition
// Dependencies: [676, 9109, 16835, 4365, 2]

// Module 16844 (AVErrorStreamFailedToStartDefinition)
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
      const obj = { type: callback(9109).AVError.STREAM_FAILED_TO_START };
      const obj2 = callback(16835);
      const merged = Object.assign(obj2.getStreamErrorContext(callback(4365).encodeStreamKey(currentUserActiveStream)));
      return obj;
    });
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};

// Module ID: 17001
// Function ID: 17002
// Name: AVErrorStreamReconnectingDefinition
// Dependencies: [676, 9215, 16991, 4407, 2]

// Module 17001 (AVErrorStreamReconnectingDefinition)
import { ApplicationStreamStates } from "ME";

const result = require("getVoiceChannelErrorContext").fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamReconnecting.tsx");

export const AVErrorStreamReconnectingDefinition = {
  getActiveErrors(activeStreams) {
    activeStreams = activeStreams.activeStreams;
    const found = activeStreams.filter((state) => state.state === constants.RECONNECTING);
    return found.map((currentUserActiveStream) => {
      const obj = { type: callback(9215).AVError.STREAM_RECONNECTING };
      const obj2 = callback(16991);
      const merged = Object.assign(obj2.getStreamErrorContext(callback(4407).encodeStreamKey(currentUserActiveStream)));
      return obj;
    });
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};

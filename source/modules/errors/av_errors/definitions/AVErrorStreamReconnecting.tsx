// Module ID: 16804
// Function ID: 16805
// Name: AVErrorStreamReconnectingDefinition
// Dependencies: [676, 9091, 16794, 4348, 2]

// Module 16804 (AVErrorStreamReconnectingDefinition)
import { ApplicationStreamStates } from "ME";

const result = require("getVoiceChannelErrorContext").fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamReconnecting.tsx");

export const AVErrorStreamReconnectingDefinition = {
  getActiveErrors(activeStreams) {
    activeStreams = activeStreams.activeStreams;
    const found = activeStreams.filter((state) => state.state === constants.RECONNECTING);
    return found.map((currentUserActiveStream) => {
      const obj = { type: callback(9091).AVError.STREAM_RECONNECTING };
      const obj2 = callback(16794);
      const merged = Object.assign(obj2.getStreamErrorContext(callback(4348).encodeStreamKey(currentUserActiveStream)));
      return obj;
    });
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};

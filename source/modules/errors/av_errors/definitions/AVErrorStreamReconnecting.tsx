// Module ID: 16785
// Function ID: 16786
// Name: AVErrorStreamReconnectingDefinition
// Dependencies: [676, 9063, 16775, 4318, 2]

// Module 16785 (AVErrorStreamReconnectingDefinition)
import { ApplicationStreamStates } from "ME";

const result = require("getVoiceChannelErrorContext").fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamReconnecting.tsx");

export const AVErrorStreamReconnectingDefinition = {
  getActiveErrors(activeStreams) {
    activeStreams = activeStreams.activeStreams;
    const found = activeStreams.filter((state) => state.state === constants.RECONNECTING);
    return found.map((currentUserActiveStream) => {
      const obj = { type: callback(9063).AVError.STREAM_RECONNECTING };
      const obj2 = callback(16775);
      const merged = Object.assign(obj2.getStreamErrorContext(callback(4318).encodeStreamKey(currentUserActiveStream)));
      return obj;
    });
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};

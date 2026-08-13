// Module ID: 17012
// Function ID: 17013
// Name: AVErrorStreamReconnectingDefinition
// Dependencies: [676, 9219, 17002, 4408, 2]

// Module 17012 (AVErrorStreamReconnectingDefinition)
import { ApplicationStreamStates } from "ME";

const result = require("getVoiceChannelErrorContext").fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamReconnecting.tsx");

export const AVErrorStreamReconnectingDefinition = {
  getActiveErrors(activeStreams) {
    activeStreams = activeStreams.activeStreams;
    const found = activeStreams.filter((state) => state.state === constants.RECONNECTING);
    return found.map((currentUserActiveStream) => {
      const obj = { type: callback(9219).AVError.STREAM_RECONNECTING };
      const obj2 = callback(17002);
      const merged = Object.assign(obj2.getStreamErrorContext(callback(4408).encodeStreamKey(currentUserActiveStream)));
      return obj;
    });
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};

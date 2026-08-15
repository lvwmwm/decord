// Module ID: 17065
// Function ID: 17066
// Name: AVErrorStreamReconnectingDefinition
// Dependencies: [676, 9668, 17055, 4531, 2]

// Module 17065 (AVErrorStreamReconnectingDefinition)
import { ApplicationStreamStates } from "ME";

const result = require("getVoiceChannelErrorContext").fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamReconnecting.tsx");

export const AVErrorStreamReconnectingDefinition = {
  getActiveErrors(activeStreams) {
    activeStreams = activeStreams.activeStreams;
    const found = activeStreams.filter((state) => state.state === constants.RECONNECTING);
    return found.map((currentUserActiveStream) => {
      const obj = { type: callback(9668).AVError.STREAM_RECONNECTING };
      const obj2 = callback(17055);
      const merged = Object.assign(obj2.getStreamErrorContext(callback(4531).encodeStreamKey(currentUserActiveStream)));
      return obj;
    });
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};

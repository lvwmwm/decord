// Module ID: 16943
// Function ID: 16944
// Name: AVErrorStreamReconnectingDefinition
// Dependencies: [676, 9175, 16933, 4367, 2]

// Module 16943 (AVErrorStreamReconnectingDefinition)
import { ApplicationStreamStates } from "ME";

const result = require("getVoiceChannelErrorContext").fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamReconnecting.tsx");

export const AVErrorStreamReconnectingDefinition = {
  getActiveErrors(activeStreams) {
    activeStreams = activeStreams.activeStreams;
    const found = activeStreams.filter((state) => state.state === constants.RECONNECTING);
    return found.map((currentUserActiveStream) => {
      const obj = { type: callback(9175).AVError.STREAM_RECONNECTING };
      const obj2 = callback(16933);
      const merged = Object.assign(obj2.getStreamErrorContext(callback(4367).encodeStreamKey(currentUserActiveStream)));
      return obj;
    });
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};

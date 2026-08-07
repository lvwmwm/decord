// Module ID: 16845
// Function ID: 16846
// Name: AVErrorStreamReconnectingDefinition
// Dependencies: [676, 9109, 16835, 4365, 2]

// Module 16845 (AVErrorStreamReconnectingDefinition)
import { ApplicationStreamStates } from "ME";

const result = require("getVoiceChannelErrorContext").fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamReconnecting.tsx");

export const AVErrorStreamReconnectingDefinition = {
  getActiveErrors(activeStreams) {
    activeStreams = activeStreams.activeStreams;
    const found = activeStreams.filter((state) => state.state === constants.RECONNECTING);
    return found.map((currentUserActiveStream) => {
      const obj = { type: callback(9109).AVError.STREAM_RECONNECTING };
      const obj2 = callback(16835);
      const merged = Object.assign(obj2.getStreamErrorContext(callback(4365).encodeStreamKey(currentUserActiveStream)));
      return obj;
    });
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};

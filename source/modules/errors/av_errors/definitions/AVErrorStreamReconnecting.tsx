// Module ID: 16678
// Function ID: 16679
// Name: AVErrorStreamReconnectingDefinition
// Dependencies: [676, 8848, 16668, 4253, 2]

// Module 16678 (AVErrorStreamReconnectingDefinition)
import { ApplicationStreamStates } from "ME";

const result = require("getVoiceChannelErrorContext").fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamReconnecting.tsx");

export const AVErrorStreamReconnectingDefinition = {
  getActiveErrors(activeStreams) {
    activeStreams = activeStreams.activeStreams;
    const found = activeStreams.filter((state) => state.state === constants.RECONNECTING);
    return found.map((currentUserActiveStream) => {
      const obj = { type: callback(8848).AVError.STREAM_RECONNECTING };
      const obj2 = callback(16668);
      const merged = Object.assign(obj2.getStreamErrorContext(callback(4253).encodeStreamKey(currentUserActiveStream)));
      return obj;
    });
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};

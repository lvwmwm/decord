// Module ID: 16538
// Function ID: 128988
// Name: AVErrorStreamReconnectingDefinition
// Dependencies: [653, 8857, 16528, 4194, 2]

// Module 16538 (AVErrorStreamReconnectingDefinition)
import { ApplicationStreamStates } from "ME";

const result = require("getCommonErrorContext").fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamReconnecting.tsx");

export const AVErrorStreamReconnectingDefinition = {
  getActiveErrors(activeStreams) {
    activeStreams = activeStreams.activeStreams;
    const found = activeStreams.filter((state) => state.state === outer1_2.RECONNECTING);
    return found.map((currentUserActiveStream) => {
      const obj = { type: outer1_0(outer1_1[1]).AVError.STREAM_RECONNECTING };
      const obj2 = outer1_0(outer1_1[2]);
      const merged = Object.assign(obj2.getStreamErrorContext(outer1_0(outer1_1[3]).encodeStreamKey(currentUserActiveStream)));
      return obj;
    });
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};

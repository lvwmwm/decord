// Module ID: 17764
// Function ID: 17765
// Name: AVErrorStreamReconnectingDefinition
// Dependencies: [673, 9039, 17754, 4547, 2]

// Module 17764 (AVErrorStreamReconnectingDefinition)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;

const ApplicationStreamStates = ME.ApplicationStreamStates;
const result = set.fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamReconnecting.tsx");

export const AVErrorStreamReconnectingDefinition = {
  getActiveErrors(activeStreams) {
    activeStreams = activeStreams.activeStreams;
    const found = activeStreams.filter((state) => state.state === constants.RECONNECTING);
    return found.map((currentUserActiveStream) => {
      const obj = { type: callback(9039).AVError.STREAM_RECONNECTING };
      const obj2 = callback(17754);
      const merged = Object.assign(obj2.getStreamErrorContext(callback(4547).encodeStreamKey(currentUserActiveStream)));
      return obj;
    });
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};

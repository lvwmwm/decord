// Module ID: 18316
// Function ID: 18317
// Name: AVErrorStreamReconnecting
// Dependencies: [1078, 9713, 18306, 4842, 2]

// Module 18316 (AVErrorStreamReconnecting)
import Constants from "Constants" /* 1078 */;
import StreamKeyUtils from "StreamKeyUtils" /* 4842 */;
import AVError from "AVError" /* 9713 */;
import AVErrorContext from "AVErrorContext" /* 18306 */;
import size from "module_2" /* 2 */;

const ApplicationStreamStates = Constants.ApplicationStreamStates;
const result = size.fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamReconnecting.tsx");

export const AVErrorStreamReconnectingDefinition = {
  getActiveErrors(activeStreams) {
    activeStreams = activeStreams.activeStreams;
    const found = activeStreams.filter((state) => state.state === constants.RECONNECTING);
    return found.map((item) => {
      const obj = { type: AVError.AVError.STREAM_RECONNECTING };
      const obj2 = AVErrorContext;
      const merged = Object.assign(obj2.getStreamErrorContext(StreamKeyUtils.encodeStreamKey(item)));
      return obj;
    });
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};

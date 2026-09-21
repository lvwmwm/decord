// Module ID: 18305
// Function ID: 18306
// Name: AVErrorStreamReconnecting
// Dependencies: [1078, 9681, 18295, 4810, 2]

// Module 18305 (AVErrorStreamReconnecting)
import Constants from "Constants" /* 1078 */;
import StreamKeyUtils from "StreamKeyUtils" /* 4810 */;
import AVError from "AVError" /* 9681 */;
import AVErrorContext from "AVErrorContext" /* 18295 */;
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

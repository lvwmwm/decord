// Module ID: 18017
// Function ID: 18018
// Name: AVErrorStreamReconnecting
// Dependencies: [1085, 9095, 18007, 4942, 2]

// Module 18017 (AVErrorStreamReconnecting)
import Constants from "Constants" /* 1085 */;
import StreamKeyUtils from "StreamKeyUtils" /* 4942 */;
import AVError from "AVError" /* 9095 */;
import AVErrorContext from "AVErrorContext" /* 18007 */;
import size from "module_2" /* 2 */;

const ApplicationStreamStates = Constants.ApplicationStreamStates;
let obj = {
  getActiveErrors(activeStreams) {
    activeStreams = activeStreams.activeStreams;
    const found = activeStreams.filter((state) => state.state === constants.RECONNECTING);
    return found.map((item) => {
      const obj = { type: AVError.AVError.STREAM_RECONNECTING };
      const getStreamErrorContext = AVErrorContext.getStreamErrorContext;
      AVErrorContext;
      const obj2 = StreamKeyUtils;
      const merged = Object.assign(getStreamErrorContext(obj2.encodeStreamKey(item)));
      return obj;
    });
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};
const result = size.fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamReconnecting.tsx");

export const AVErrorStreamReconnectingDefinition = obj;

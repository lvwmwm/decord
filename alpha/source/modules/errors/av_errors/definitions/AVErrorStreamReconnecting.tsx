// Module ID: 20263
// Function ID: 20264
// Name: AVErrorStreamReconnecting
// Dependencies: [1071, 6004, 20253, 6785, 2]

// Module 20263 (AVErrorStreamReconnecting)
import Constants from "Constants" /* 1071 */;
import AVError from "AVError" /* 6004 */;
import StreamKeyUtils from "StreamKeyUtils" /* 6785 */;
import AVErrorContext from "AVErrorContext" /* 20253 */;
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

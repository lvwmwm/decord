// Module ID: 20329
// Function ID: 20330
// Name: AVErrorStreamFailedToStart
// Dependencies: [1071, 6035, 20320, 6816, 2]

// Module 20329 (AVErrorStreamFailedToStart)
import Constants from "Constants" /* 1071 */;
import AVError from "AVError" /* 6035 */;
import StreamKeyUtils from "StreamKeyUtils" /* 6816 */;
import AVErrorContext from "AVErrorContext" /* 20320 */;
import size from "module_2" /* 2 */;

const ApplicationStreamStates = Constants.ApplicationStreamStates;
let obj = {
  getActiveErrors(activeStreams) {
    activeStreams = activeStreams.activeStreams;
    const found = activeStreams.filter((state) => state.state === constants.FAILED && null == state.errorCode);
    return found.map((item) => {
      const obj = { type: AVError.AVError.STREAM_FAILED_TO_START };
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
const result = size.fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamFailedToStart.tsx");

export const AVErrorStreamFailedToStartDefinition = obj;

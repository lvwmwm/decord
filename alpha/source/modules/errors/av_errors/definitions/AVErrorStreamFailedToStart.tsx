// Module ID: 19991
// Function ID: 19992
// Name: AVErrorStreamFailedToStart
// Dependencies: [1071, 5724, 19982, 6282, 2]

// Module 19991 (AVErrorStreamFailedToStart)
import Constants from "Constants" /* 1071 */;
import AVError from "AVError" /* 5724 */;
import StreamKeyUtils from "StreamKeyUtils" /* 6282 */;
import AVErrorContext from "AVErrorContext" /* 19982 */;
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

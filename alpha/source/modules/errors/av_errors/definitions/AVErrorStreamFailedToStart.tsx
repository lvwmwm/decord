// Module ID: 20262
// Function ID: 20263
// Name: AVErrorStreamFailedToStart
// Dependencies: [1071, 6004, 20253, 6785, 2]

// Module 20262 (AVErrorStreamFailedToStart)
import Constants from "Constants" /* 1071 */;
import AVError from "AVError" /* 6004 */;
import StreamKeyUtils from "StreamKeyUtils" /* 6785 */;
import AVErrorContext from "AVErrorContext" /* 20253 */;
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

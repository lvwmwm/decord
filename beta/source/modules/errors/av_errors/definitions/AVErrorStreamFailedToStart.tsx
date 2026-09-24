// Module ID: 18315
// Function ID: 18316
// Name: AVErrorStreamFailedToStart
// Dependencies: [1078, 9713, 18306, 4842, 2]

// Module 18315 (AVErrorStreamFailedToStart)
import Constants from "Constants" /* 1078 */;
import StreamKeyUtils from "StreamKeyUtils" /* 4842 */;
import AVError from "AVError" /* 9713 */;
import AVErrorContext from "AVErrorContext" /* 18306 */;
import size from "module_2" /* 2 */;

const ApplicationStreamStates = Constants.ApplicationStreamStates;
const result = size.fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamFailedToStart.tsx");

export const AVErrorStreamFailedToStartDefinition = {
  getActiveErrors(activeStreams) {
    activeStreams = activeStreams.activeStreams;
    const found = activeStreams.filter((state) => {
      let tmp = state.state === constants.FAILED;
      if (tmp) {
        tmp = null == state.errorCode;
      }
      return tmp;
    });
    return found.map((item) => {
      const obj = { type: AVError.AVError.STREAM_FAILED_TO_START };
      const obj2 = AVErrorContext;
      const merged = Object.assign(obj2.getStreamErrorContext(StreamKeyUtils.encodeStreamKey(item)));
      return obj;
    });
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};

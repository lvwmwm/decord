// Module ID: 18606
// Function ID: 18607
// Name: AVErrorStreamFailedToStart
// Dependencies: [1085, 5289, 18597, 5900, 2]

// Module 18606 (AVErrorStreamFailedToStart)
import Constants from "Constants" /* 1085 */;
import AVError from "AVError" /* 5289 */;
import StreamKeyUtils from "StreamKeyUtils" /* 5900 */;
import AVErrorContext from "AVErrorContext" /* 18597 */;
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

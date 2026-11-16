// Module ID: 20505
// Function ID: 20506
// Name: AVErrorStreamFailedToStart
// Dependencies: [1072, 6111, 20496, 6804, 2]

// Module 20505 (AVErrorStreamFailedToStart)
import Constants from "Constants" /* 1072 */;
import AVError from "AVError" /* 6111 */;
import StreamKeyUtils from "StreamKeyUtils" /* 6804 */;
import AVErrorContext from "AVErrorContext" /* 20496 */;
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

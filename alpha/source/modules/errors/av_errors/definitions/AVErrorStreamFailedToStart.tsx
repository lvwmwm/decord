// Module ID: 19993
// Function ID: 19994
// Name: AVErrorStreamFailedToStart
// Dependencies: [1072, 5942, 19984, 6711, 2]

// Module 19993 (AVErrorStreamFailedToStart)
import Constants from "Constants" /* 1072 */;
import AVError from "AVError" /* 5942 */;
import StreamKeyUtils from "StreamKeyUtils" /* 6711 */;
import AVErrorContext from "AVErrorContext" /* 19984 */;
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

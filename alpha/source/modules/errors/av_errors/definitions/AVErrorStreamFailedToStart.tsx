// Module ID: 19334
// Function ID: 19335
// Name: AVErrorStreamFailedToStart
// Dependencies: [1087, 5895, 19325, 6643, 2]

// Module 19334 (AVErrorStreamFailedToStart)
import Constants from "Constants" /* 1087 */;
import AVError from "AVError" /* 5895 */;
import StreamKeyUtils from "StreamKeyUtils" /* 6643 */;
import AVErrorContext from "AVErrorContext" /* 19325 */;
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

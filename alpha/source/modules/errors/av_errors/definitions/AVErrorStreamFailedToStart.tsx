// Module ID: 19267
// Function ID: 19268
// Name: AVErrorStreamFailedToStart
// Dependencies: [1087, 5884, 19258, 6631, 2]

// Module 19267 (AVErrorStreamFailedToStart)
import Constants from "Constants" /* 1087 */;
import AVError from "AVError" /* 5884 */;
import StreamKeyUtils from "StreamKeyUtils" /* 6631 */;
import AVErrorContext from "AVErrorContext" /* 19258 */;
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

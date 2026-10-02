// Module ID: 17673
// Function ID: 17674
// Name: AVErrorStreamFailedToStart
// Dependencies: [1086, 8869, 17664, 4889, 2]

// Module 17673 (AVErrorStreamFailedToStart)
import Constants from "Constants" /* 1086 */;
import StreamKeyUtils from "StreamKeyUtils" /* 4889 */;
import AVError from "AVError" /* 8869 */;
import AVErrorContext from "AVErrorContext" /* 17664 */;
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

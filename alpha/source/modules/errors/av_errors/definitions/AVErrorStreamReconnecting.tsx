// Module ID: 19709
// Function ID: 19710
// Name: AVErrorStreamReconnecting
// Dependencies: [1084, 5933, 19699, 6680, 2]

// Module 19709 (AVErrorStreamReconnecting)
import Constants from "Constants" /* 1084 */;
import AVError from "AVError" /* 5933 */;
import StreamKeyUtils from "StreamKeyUtils" /* 6680 */;
import AVErrorContext from "AVErrorContext" /* 19699 */;
import size from "module_2" /* 2 */;

const ApplicationStreamStates = Constants.ApplicationStreamStates;
let obj = {
  getActiveErrors(activeStreams) {
    activeStreams = activeStreams.activeStreams;
    const found = activeStreams.filter((state) => state.state === constants.RECONNECTING);
    return found.map((item) => {
      const obj = { type: AVError.AVError.STREAM_RECONNECTING };
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
const result = size.fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamReconnecting.tsx");

export const AVErrorStreamReconnectingDefinition = obj;

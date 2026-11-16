// Module ID: 20506
// Function ID: 20507
// Name: AVErrorStreamReconnecting
// Dependencies: [1072, 6111, 20496, 6804, 2]

// Module 20506 (AVErrorStreamReconnecting)
import Constants from "Constants" /* 1072 */;
import AVError from "AVError" /* 6111 */;
import StreamKeyUtils from "StreamKeyUtils" /* 6804 */;
import AVErrorContext from "AVErrorContext" /* 20496 */;
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

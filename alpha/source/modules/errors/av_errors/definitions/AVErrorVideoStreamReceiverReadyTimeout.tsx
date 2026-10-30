// Module ID: 19998
// Function ID: 19999
// Name: AVErrorVideoStreamReceiverReadyTimeout
// Dependencies: [502, 6844, 5942, 2]

// Module 19998 (AVErrorVideoStreamReceiverReadyTimeout)
import AVError from "AVError" /* 5942 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import VideoStreamStore from "VideoStreamStore" /* 6844 */;
import size from "module_2" /* 2 */;

let obj = {
  getActiveErrors() {
    let id;
    const values = Object.values(VideoStreamStore.getTimedoutVideos());
    const found = values.filter((item) => {
      let userId;
      let videoStreamId;
      ({ userId, videoStreamId } = item);
      const tmp = id.getId() !== userId && null != videoStreamId;
      return tmp;
    });
    return found.map((item) => {
      const obj = { type: AVError.AVError.VIDEO_STREAM_RECEIVER_READY_TIMEOUT };
      const merged = Object.assign(item);
      return obj;
    });
  },
  makeErrorContextKey(mediaContext) {
    return "" + mediaContext.mediaContext + ":" + mediaContext.userId;
  }
};
const result = size.fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorVideoStreamReceiverReadyTimeout.tsx");

export const AVErrorVideoStreamReceiverReadyTimeoutDefinition = obj;

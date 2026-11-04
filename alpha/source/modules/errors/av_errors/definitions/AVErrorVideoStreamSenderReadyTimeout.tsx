// Module ID: 20330
// Function ID: 20331
// Name: AVErrorVideoStreamSenderReadyTimeout
// Dependencies: [502, 6985, 6082, 2]

// Module 20330 (AVErrorVideoStreamSenderReadyTimeout)
import AVError from "AVError" /* 6082 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import VideoStreamStore from "VideoStreamStore" /* 6985 */;
import size from "module_2" /* 2 */;

let obj = {
  getActiveErrors() {
    let id;
    const values = Object.values(VideoStreamStore.getTimedoutVideos());
    const found = values.filter((item) => {
      let userId;
      let videoStreamId;
      ({ userId, videoStreamId } = item);
      const tmp = id.getId() === userId && null != videoStreamId;
      return tmp;
    });
    return found.map((item) => {
      const obj = { type: AVError.AVError.VIDEO_STREAM_SENDER_READY_TIMEOUT };
      const merged = Object.assign(item);
      return obj;
    });
  },
  makeErrorContextKey(mediaContext) {
    return "" + mediaContext.mediaContext + ":" + mediaContext.userId;
  }
};
const result = size.fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorVideoStreamSenderReadyTimeout.tsx");

export const AVErrorVideoStreamSenderReadyTimeoutDefinition = obj;

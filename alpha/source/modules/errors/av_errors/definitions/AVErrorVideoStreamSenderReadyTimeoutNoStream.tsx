// Module ID: 18376
// Function ID: 18377
// Name: AVErrorVideoStreamSenderReadyTimeoutNoStream
// Dependencies: [502, 6042, 5287, 2]

// Module 18376 (AVErrorVideoStreamSenderReadyTimeoutNoStream)
import AVError from "AVError" /* 5287 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import VideoStreamStore from "VideoStreamStore" /* 6042 */;
import size from "module_2" /* 2 */;

let obj = {
  getActiveErrors() {
    let id;
    const values = Object.values(VideoStreamStore.getTimedoutVideos());
    const found = values.filter((item) => {
      let userId;
      let videoStreamId;
      ({ userId, videoStreamId } = item);
      const tmp = id.getId() === userId && null == videoStreamId;
      return tmp;
    });
    return found.map((item) => {
      const obj = { type: AVError.AVError.VIDEO_STREAM_SENDER_READY_TIMEOUT_NO_STREAM };
      const merged = Object.assign(item);
      return obj;
    });
  },
  makeErrorContextKey(mediaContext) {
    return "" + mediaContext.mediaContext + ":" + mediaContext.userId;
  }
};
const result = size.fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorVideoStreamSenderReadyTimeoutNoStream.tsx");

export const AVErrorVideoStreamSenderReadyTimeoutNoStreamDefinition = obj;

// Module ID: 18612
// Function ID: 18613
// Name: AVErrorVideoStreamSenderReadyTimeoutNoStream
// Dependencies: [502, 6037, 5289, 2]

// Module 18612 (AVErrorVideoStreamSenderReadyTimeoutNoStream)
import AVError from "AVError" /* 5289 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import VideoStreamStore from "VideoStreamStore" /* 6037 */;
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

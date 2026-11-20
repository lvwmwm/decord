// Module ID: 19998
// Function ID: 19999
// Name: AVErrorVideoStreamReceiverReadyTimeoutNoStream
// Dependencies: [502, 6509, 5724, 2]

// Module 19998 (AVErrorVideoStreamReceiverReadyTimeoutNoStream)
import AVError from "AVError" /* 5724 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import VideoStreamStore from "VideoStreamStore" /* 6509 */;
import size from "module_2" /* 2 */;

let obj = {
  getActiveErrors() {
    let id;
    const values = Object.values(VideoStreamStore.getTimedoutVideos());
    const found = values.filter((item) => {
      let userId;
      let videoStreamId;
      ({ userId, videoStreamId } = item);
      const tmp = id.getId() !== userId && null == videoStreamId;
      return tmp;
    });
    return found.map((item) => {
      const obj = { type: AVError.AVError.VIDEO_STREAM_RECEIVER_READY_TIMEOUT_NO_STREAM };
      const merged = Object.assign(item);
      return obj;
    });
  },
  makeErrorContextKey(mediaContext) {
    return "" + mediaContext.mediaContext + ":" + mediaContext.userId;
  }
};
const result = size.fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorVideoStreamReceiverReadyTimeoutNoStream.tsx");

export const AVErrorVideoStreamReceiverReadyTimeoutNoStreamDefinition = obj;

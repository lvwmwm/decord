// Module ID: 20382
// Function ID: 20383
// Name: AVErrorVideoStreamReceiverReadyTimeoutNoStream
// Dependencies: [502, 6988, 6085, 2]

// Module 20382 (AVErrorVideoStreamReceiverReadyTimeoutNoStream)
import AVError from "AVError" /* 6085 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import VideoStreamStore from "VideoStreamStore" /* 6988 */;
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

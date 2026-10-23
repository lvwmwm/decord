// Module ID: 19330
// Function ID: 19331
// Name: AVErrorStreamSendHighPacketLoss
// Dependencies: [6640, 7812, 6643, 19328, 5895, 19325, 2]

// Module 19330 (AVErrorStreamSendHighPacketLoss)
import AVError from "AVError" /* 5895 */;
import StreamKeyUtils from "StreamKeyUtils" /* 6643 */;
import AVErrorContext from "AVErrorContext" /* 19325 */;
import AVErrorUtils from "AVErrorUtils" /* 19328 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6640 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 7812 */;
import size from "module_2" /* 2 */;

let obj = {
  getActiveErrors() {
    const currentUserActiveStream = ApplicationStreamingStore.getCurrentUserActiveStream();
    const obj = ApplicationStreamingStore;
    if (null == currentUserActiveStream) {
      return null;
    } else if (0 === obj.getViewerIds(currentUserActiveStream).length) {
      return null;
    } else {
      const getRTCConnection = StreamRTCConnectionStore.getRTCConnection;
      const obj4 = StreamKeyUtils;
      const rTCConnection = getRTCConnection(obj4.encodeStreamKey(currentUserActiveStream));
      let mediaEngineConnectionId;
      if (rTCConnection != null) {
        mediaEngineConnectionId = rTCConnection.getMediaEngineConnectionId();
      }
      if (null == mediaEngineConnectionId) {
        return null;
      } else {
        const tmp9Result = AVErrorUtils;
        const accumulatedStatsWithMinDatapoints = tmp9Result.getAccumulatedStatsWithMinDatapoints(mediaEngineConnectionId, currentUserActiveStream.ownerId);
        let tmp7 = null;
        if (null != accumulatedStatsWithMinDatapoints) {
          let tmp3;
          if (10 < 100 * accumulatedStatsWithMinDatapoints.short.packetLossRate) {
            const obj2 = { type: AVError.AVError.STREAM_SEND_HIGH_PACKET_LOSS };
            const getStreamErrorContext = AVErrorContext.getStreamErrorContext;
            AVErrorContext;
            const tmp9Result4 = StreamKeyUtils;
            const merged = Object.assign(getStreamErrorContext(tmp9Result4.encodeStreamKey(currentUserActiveStream)));
            const items = [obj2];
            tmp3 = items;
          }
          tmp7 = tmp3;
        }
        return tmp7;
      }
    }
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};
const result = size.fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamSendHighPacketLoss.tsx");

export const AVErrorStreamSendHighPacketLossDefinition = obj;

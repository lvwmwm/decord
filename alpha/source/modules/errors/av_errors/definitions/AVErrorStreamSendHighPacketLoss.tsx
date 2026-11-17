// Module ID: 20883
// Function ID: 20884
// Name: AVErrorStreamSendHighPacketLoss
// Dependencies: [6804, 6800, 6805, 20881, 6255, 20878, 2]

// Module 20883 (AVErrorStreamSendHighPacketLoss)
import AVError from "AVError" /* 6255 */;
import StreamKeyUtils from "StreamKeyUtils" /* 6805 */;
import AVErrorContext from "AVErrorContext" /* 20878 */;
import AVErrorUtils from "AVErrorUtils" /* 20881 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6804 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 6800 */;
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

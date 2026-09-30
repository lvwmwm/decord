// Module ID: 17891
// Function ID: 17892
// Name: AVErrorStreamSendHighPacketLoss
// Dependencies: [4888, 4905, 4918, 17889, 9074, 17886, 2]

// Module 17891 (AVErrorStreamSendHighPacketLoss)
import StreamKeyUtils from "StreamKeyUtils" /* 4918 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4888 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 4905 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamSendHighPacketLoss.tsx");

export const AVErrorStreamSendHighPacketLossDefinition = {
  getActiveErrors() {
    const currentUserActiveStream = ApplicationStreamingStore.getCurrentUserActiveStream();
    if (null == currentUserActiveStream) {
      return null;
    } else if (0 === obj.getViewerIds(currentUserActiveStream).length) {
      return null;
    } else {
      const rTCConnection = StreamRTCConnectionStore.getRTCConnection(StreamKeyUtils.encodeStreamKey(currentUserActiveStream));
      let mediaEngineConnectionId;
      if (rTCConnection != null) {
        mediaEngineConnectionId = rTCConnection.getMediaEngineConnectionId();
      }
      if (null == mediaEngineConnectionId) {
        return null;
      } else {
        const accumulatedStatsWithMinDatapoints = tmp8(17889).getAccumulatedStatsWithMinDatapoints(mediaEngineConnectionId, currentUserActiveStream.ownerId);
        let tmp6 = null;
        if (null != accumulatedStatsWithMinDatapoints) {
          if (10 < 100 * accumulatedStatsWithMinDatapoints.short.packetLossRate) {
            const obj2 = { type: tmp8(9074).AVError.STREAM_SEND_HIGH_PACKET_LOSS };
            const tmp8Result3 = tmp8(17886);
            const merged = Object.assign(tmp8Result3.getStreamErrorContext(tmp8(4918).encodeStreamKey(currentUserActiveStream)));
            const items = [obj2];
            const tmp3 = items;
            const tmp8Result4 = tmp8(4918);
          }
          tmp6 = tmp3;
        }
        return tmp6;
      }
    }
    obj = ApplicationStreamingStore;
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};

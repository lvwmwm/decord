// Module ID: 18297
// Function ID: 18298
// Name: AVErrorStreamSendHighPacketLoss
// Dependencies: [4778, 4795, 4808, 18295, 9686, 18292, 2]

// Module 18297 (AVErrorStreamSendHighPacketLoss)
import StreamKeyUtils from "StreamKeyUtils" /* 4808 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4778 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 4795 */;

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
        const accumulatedStatsWithMinDatapoints = tmp8(18295).getAccumulatedStatsWithMinDatapoints(mediaEngineConnectionId, currentUserActiveStream.ownerId);
        let tmp6 = null;
        if (null != accumulatedStatsWithMinDatapoints) {
          if (10 < 100 * accumulatedStatsWithMinDatapoints.short.packetLossRate) {
            const obj2 = { type: tmp8(9686).AVError.STREAM_SEND_HIGH_PACKET_LOSS };
            const tmp8Result3 = tmp8(18292);
            const merged = Object.assign(tmp8Result3.getStreamErrorContext(tmp8(4808).encodeStreamKey(currentUserActiveStream)));
            const items = [obj2];
            const tmp3 = items;
            const tmp8Result4 = tmp8(4808);
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

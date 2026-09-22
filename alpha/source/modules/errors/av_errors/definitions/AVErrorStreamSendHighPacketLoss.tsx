// Module ID: 18310
// Function ID: 18311
// Name: AVErrorStreamSendHighPacketLoss
// Dependencies: [4779, 4796, 4809, 18308, 9692, 18305, 2]

// Module 18310 (AVErrorStreamSendHighPacketLoss)
import StreamKeyUtils from "StreamKeyUtils" /* 4809 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4779 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 4796 */;

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
        const accumulatedStatsWithMinDatapoints = tmp8(18308).getAccumulatedStatsWithMinDatapoints(mediaEngineConnectionId, currentUserActiveStream.ownerId);
        let tmp6 = null;
        if (null != accumulatedStatsWithMinDatapoints) {
          if (10 < 100 * accumulatedStatsWithMinDatapoints.short.packetLossRate) {
            const obj2 = { type: tmp8(9692).AVError.STREAM_SEND_HIGH_PACKET_LOSS };
            const tmp8Result3 = tmp8(18305);
            const merged = Object.assign(tmp8Result3.getStreamErrorContext(tmp8(4809).encodeStreamKey(currentUserActiveStream)));
            const items = [obj2];
            const tmp3 = items;
            const tmp8Result4 = tmp8(4809);
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

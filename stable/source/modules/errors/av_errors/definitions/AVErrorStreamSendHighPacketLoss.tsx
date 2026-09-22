// Module ID: 17955
// Function ID: 17956
// Name: AVErrorStreamSendHighPacketLoss
// Dependencies: [4658, 4675, 4688, 17953, 9239, 17950, 2]

// Module 17955 (AVErrorStreamSendHighPacketLoss)
import StreamKeyUtils from "StreamKeyUtils" /* 4688 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4658 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 4675 */;

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
        const accumulatedStatsWithMinDatapoints = tmp8(17953).getAccumulatedStatsWithMinDatapoints(mediaEngineConnectionId, currentUserActiveStream.ownerId);
        let tmp6 = null;
        if (null != accumulatedStatsWithMinDatapoints) {
          if (10 < 100 * accumulatedStatsWithMinDatapoints.short.packetLossRate) {
            const obj2 = { type: tmp8(9239).AVError.STREAM_SEND_HIGH_PACKET_LOSS };
            const tmp8Result3 = tmp8(17950);
            const merged = Object.assign(tmp8Result3.getStreamErrorContext(tmp8(4688).encodeStreamKey(currentUserActiveStream)));
            const items = [obj2];
            const tmp3 = items;
            const tmp8Result4 = tmp8(4688);
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

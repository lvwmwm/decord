// Module ID: 17954
// Function ID: 17955
// Name: AVErrorStreamViewHighPacketLoss
// Dependencies: [4658, 502, 4675, 17953, 4688, 9239, 17950, 2]

// Module 17954 (AVErrorStreamViewHighPacketLoss)
import StreamKeyUtils from "StreamKeyUtils" /* 4688 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4658 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 4675 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamViewHighPacketLoss.tsx");

export const AVErrorStreamViewHighPacketLossDefinition = {
  getActiveErrors() {
    let reduced = null;
    if (obj.getReportInboundErrors()) {
      const allActiveStreams = ApplicationStreamingStore.getAllActiveStreams();
      reduced = allActiveStreams.reduce((arr, ownerId) => {
        rTCConnection = rTCConnection.getRTCConnection(StreamKeyUtils.encodeStreamKey(ownerId));
        let mediaEngineConnectionId;
        if (rTCConnection != null) {
          mediaEngineConnectionId = rTCConnection.getMediaEngineConnectionId();
        }
        if (null == mediaEngineConnectionId) {
          return arr;
        } else if (ownerId.ownerId === id.getId()) {
          return arr;
        } else {
          const accumulatedStatsWithMinDatapoints = tmp(tmp2[3]).getAccumulatedStatsWithMinDatapoints(mediaEngineConnectionId, ownerId.ownerId);
          if (null != accumulatedStatsWithMinDatapoints) {
            if (10 < 100 * accumulatedStatsWithMinDatapoints.short.packetLossRate) {
              const obj2 = { type: tmp(tmp2[5]).AVError.STREAM_VIEW_HIGH_PACKET_LOSS };
              const tmpResult3 = tmp(tmp2[6]);
              const merged = Object.assign(tmpResult3.getStreamErrorContext(tmp(tmp2[4]).encodeStreamKey(ownerId)));
              arr.push(obj2);
              const tmpResult4 = tmp(tmp2[4]);
            }
          }
          return arr;
        }
      }, []);
    }
    return reduced;
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};

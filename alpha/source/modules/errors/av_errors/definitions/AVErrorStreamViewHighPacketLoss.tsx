// Module ID: 20682
// Function ID: 20683
// Name: AVErrorStreamViewHighPacketLoss
// Dependencies: [6757, 502, 6739, 20681, 6745, 6194, 20678, 2]

// Module 20682 (AVErrorStreamViewHighPacketLoss)
import AVError from "AVError" /* 6194 */;
import StreamKeyUtils from "StreamKeyUtils" /* 6745 */;
import AVErrorContext from "AVErrorContext" /* 20678 */;
import AVErrorUtils from "AVErrorUtils" /* 20681 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6757 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 6739 */;
import size from "module_2" /* 2 */;

let getRTCConnection;

let obj = {
  getActiveErrors() {
    let id;
    let obj = AVErrorUtils;
    let reduced = null;
    if (obj.getReportInboundErrors()) {
      const allActiveStreams = ApplicationStreamingStore.getAllActiveStreams();
      reduced = allActiveStreams.reduce((acc, ownerId) => {
        getRTCConnection = getRTCConnection.getRTCConnection;
        const obj = StreamKeyUtils;
        const rTCConnection = getRTCConnection(obj.encodeStreamKey(ownerId));
        let mediaEngineConnectionId;
        if (rTCConnection != null) {
          mediaEngineConnectionId = rTCConnection.getMediaEngineConnectionId();
        }
        if (null == mediaEngineConnectionId) {
          return acc;
        } else if (ownerId.ownerId === id.getId()) {
          return acc;
        } else {
          const tmpResult = AVErrorUtils;
          const accumulatedStatsWithMinDatapoints = tmpResult.getAccumulatedStatsWithMinDatapoints(mediaEngineConnectionId, ownerId.ownerId);
          if (null != accumulatedStatsWithMinDatapoints) {
            if (10 < 100 * accumulatedStatsWithMinDatapoints.short.packetLossRate) {
              const push = acc.push;
              const obj2 = { type: AVError.AVError.STREAM_VIEW_HIGH_PACKET_LOSS };
              const getStreamErrorContext = AVErrorContext.getStreamErrorContext;
              AVErrorContext;
              const tmpResult4 = StreamKeyUtils;
              const merged = Object.assign(getStreamErrorContext(tmpResult4.encodeStreamKey(ownerId)));
              push(obj2);
            }
          }
          return acc;
        }
      }, []);
    }
    return reduced;
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};
const result = size.fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamViewHighPacketLoss.tsx");

export const AVErrorStreamViewHighPacketLossDefinition = obj;

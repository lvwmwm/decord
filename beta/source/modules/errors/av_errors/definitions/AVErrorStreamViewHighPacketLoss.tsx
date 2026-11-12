// Module ID: 20497
// Function ID: 20498
// Name: AVErrorStreamViewHighPacketLoss
// Dependencies: [6801, 502, 7995, 20496, 6804, 6111, 20493, 2]

// Module 20497 (AVErrorStreamViewHighPacketLoss)
import AVError from "AVError" /* 6111 */;
import StreamKeyUtils from "StreamKeyUtils" /* 6804 */;
import AVErrorContext from "AVErrorContext" /* 20493 */;
import AVErrorUtils from "AVErrorUtils" /* 20496 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6801 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 7995 */;
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

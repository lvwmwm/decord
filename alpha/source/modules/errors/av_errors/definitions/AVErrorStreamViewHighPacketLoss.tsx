// Module ID: 19122
// Function ID: 19123
// Name: AVErrorStreamViewHighPacketLoss
// Dependencies: [6593, 502, 7761, 19121, 6596, 5855, 19118, 2]

// Module 19122 (AVErrorStreamViewHighPacketLoss)
import AVError from "AVError" /* 5855 */;
import StreamKeyUtils from "StreamKeyUtils" /* 6596 */;
import AVErrorContext from "AVErrorContext" /* 19118 */;
import AVErrorUtils from "AVErrorUtils" /* 19121 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6593 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 7761 */;
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

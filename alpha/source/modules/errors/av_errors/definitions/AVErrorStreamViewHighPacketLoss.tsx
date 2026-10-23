// Module ID: 19329
// Function ID: 19330
// Name: AVErrorStreamViewHighPacketLoss
// Dependencies: [6640, 502, 7812, 19328, 6643, 5895, 19325, 2]

// Module 19329 (AVErrorStreamViewHighPacketLoss)
import AVError from "AVError" /* 5895 */;
import StreamKeyUtils from "StreamKeyUtils" /* 6643 */;
import AVErrorContext from "AVErrorContext" /* 19325 */;
import AVErrorUtils from "AVErrorUtils" /* 19328 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6640 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 7812 */;
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

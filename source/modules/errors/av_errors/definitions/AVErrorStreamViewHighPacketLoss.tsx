// Module ID: 16642
// Function ID: 129666
// Name: AVErrorStreamViewHighPacketLossDefinition
// Dependencies: [4184, 1194, 4251, 16641, 4229, 8828, 16638, 2]

// Module 16642 (AVErrorStreamViewHighPacketLossDefinition)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamViewHighPacketLoss.tsx");

export const AVErrorStreamViewHighPacketLossDefinition = {
  getActiveErrors() {
    let reduced = null;
    if (obj.getReportInboundErrors()) {
      allActiveStreams = allActiveStreams.getAllActiveStreams();
      reduced = allActiveStreams.reduce((arr, ownerId) => {
        let obj = outer1_0(outer1_1[4]);
        const rTCConnection = outer1_4.getRTCConnection(obj.encodeStreamKey(ownerId));
        let mediaEngineConnectionId;
        if (null != rTCConnection) {
          mediaEngineConnectionId = rTCConnection.getMediaEngineConnectionId();
        }
        if (null == mediaEngineConnectionId) {
          return arr;
        } else if (ownerId.ownerId === outer1_3.getId()) {
          return arr;
        } else {
          const accumulatedStatsWithMinDatapoints = outer1_0(outer1_1[3]).getAccumulatedStatsWithMinDatapoints(mediaEngineConnectionId, ownerId.ownerId);
          if (null != accumulatedStatsWithMinDatapoints) {
            if (100 * accumulatedStatsWithMinDatapoints.short.packetLossRate > 10) {
              obj = { type: outer1_0(outer1_1[5]).AVError.STREAM_VIEW_HIGH_PACKET_LOSS };
              const obj4 = outer1_0(outer1_1[6]);
              const merged = Object.assign(obj4.getStreamErrorContext(outer1_0(outer1_1[4]).encodeStreamKey(ownerId)));
              arr.push(obj);
              const obj5 = outer1_0(outer1_1[4]);
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

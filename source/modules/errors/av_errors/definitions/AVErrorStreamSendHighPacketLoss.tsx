// Module ID: 16643
// Function ID: 129670
// Name: AVErrorStreamSendHighPacketLossDefinition
// Dependencies: [4184, 4251, 4229, 16641, 8828, 16638, 2]

// Module 16643 (AVErrorStreamSendHighPacketLossDefinition)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";

const require = arg1;
const result = require("isStreamKey").fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamSendHighPacketLoss.tsx");

export const AVErrorStreamSendHighPacketLossDefinition = {
  getActiveErrors() {
    const currentUserActiveStream = authStore.getCurrentUserActiveStream();
    if (null == currentUserActiveStream) {
      return null;
    } else if (0 === authStore.getViewerIds(currentUserActiveStream).length) {
      return null;
    } else {
      rTCConnection = rTCConnection.getRTCConnection(require(4229) /* isStreamKey */.encodeStreamKey(currentUserActiveStream));
      let mediaEngineConnectionId;
      if (null != rTCConnection) {
        mediaEngineConnectionId = rTCConnection.getMediaEngineConnectionId();
      }
      if (null == mediaEngineConnectionId) {
        return null;
      } else {
        const accumulatedStatsWithMinDatapoints = require(16641) /* getReportInboundErrors */.getAccumulatedStatsWithMinDatapoints(mediaEngineConnectionId, currentUserActiveStream.ownerId);
        let tmp8 = null;
        if (null != accumulatedStatsWithMinDatapoints) {
          if (100 * accumulatedStatsWithMinDatapoints.short.packetLossRate > 10) {
            const obj = { type: require(8828) /* validateUniqueErrorCodes */.AVError.STREAM_SEND_HIGH_PACKET_LOSS };
            const obj2 = require(16638) /* getCommonErrorContext */;
            const merged = Object.assign(obj2.getStreamErrorContext(require(4229) /* isStreamKey */.encodeStreamKey(currentUserActiveStream)));
            const items = [obj];
            const obj3 = require(4229) /* isStreamKey */;
            const tmp3 = items;
          }
          tmp8 = tmp3;
        }
        return tmp8;
      }
      const obj4 = require(4229) /* isStreamKey */;
    }
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};

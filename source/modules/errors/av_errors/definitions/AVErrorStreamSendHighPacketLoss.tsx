// Module ID: 16998
// Function ID: 16999
// Name: AVErrorStreamSendHighPacketLossDefinition
// Dependencies: [4364, 4430, 4408, 16996, 9219, 16993, 2]

// Module 16998 (AVErrorStreamSendHighPacketLossDefinition)
import reset from "reset";
import initialize from "initialize";

const require = arg1;
const result = require("isStreamKey").fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamSendHighPacketLoss.tsx");

export const AVErrorStreamSendHighPacketLossDefinition = {
  getActiveErrors() {
    let obj = currentUserActiveStream;
    currentUserActiveStream = currentUserActiveStream.getCurrentUserActiveStream();
    if (null == currentUserActiveStream) {
      return null;
    } else if (0 === obj.getViewerIds(currentUserActiveStream).length) {
      return null;
    } else {
      rTCConnection = rTCConnection.getRTCConnection(require(4408) /* isStreamKey */.encodeStreamKey(currentUserActiveStream));
      let mediaEngineConnectionId;
      if (rTCConnection != null) {
        mediaEngineConnectionId = rTCConnection.getMediaEngineConnectionId();
      }
      if (null == mediaEngineConnectionId) {
        return null;
      } else {
        let tmp8Result = tmp8(16996);
        const accumulatedStatsWithMinDatapoints = tmp8Result.getAccumulatedStatsWithMinDatapoints(mediaEngineConnectionId, currentUserActiveStream.ownerId);
        let tmp6 = null;
        if (null != accumulatedStatsWithMinDatapoints) {
          if (10 < 100 * accumulatedStatsWithMinDatapoints.short.packetLossRate) {
            obj = { type: null };
            obj[0] = tmp8(9219).AVError.STREAM_SEND_HIGH_PACKET_LOSS;
            tmp8Result = tmp8(16993);
            const merged = Object.assign(tmp8Result.getStreamErrorContext(tmp8(4408).encodeStreamKey(currentUserActiveStream)));
            const items = [obj];
            const tmp3 = items;
            const tmp8Result1 = tmp8(4408);
          }
          tmp6 = tmp3;
        }
        return tmp6;
      }
      const obj5 = require(4408) /* isStreamKey */;
    }
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};

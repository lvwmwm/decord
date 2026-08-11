// Module ID: 16938
// Function ID: 16939
// Name: AVErrorStreamSendHighPacketLossDefinition
// Dependencies: [4322, 4389, 4367, 16936, 9175, 16933, 2]

// Module 16938 (AVErrorStreamSendHighPacketLossDefinition)
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
      rTCConnection = rTCConnection.getRTCConnection(require(4367) /* isStreamKey */.encodeStreamKey(currentUserActiveStream));
      let mediaEngineConnectionId;
      if (rTCConnection != null) {
        mediaEngineConnectionId = rTCConnection.getMediaEngineConnectionId();
      }
      if (null == mediaEngineConnectionId) {
        return null;
      } else {
        let tmp8Result = tmp8(16936);
        const accumulatedStatsWithMinDatapoints = tmp8Result.getAccumulatedStatsWithMinDatapoints(mediaEngineConnectionId, currentUserActiveStream.ownerId);
        let tmp6 = null;
        if (null != accumulatedStatsWithMinDatapoints) {
          if (10 < 100 * accumulatedStatsWithMinDatapoints.short.packetLossRate) {
            obj = { type: null };
            obj[0] = tmp8(9175).AVError.STREAM_SEND_HIGH_PACKET_LOSS;
            tmp8Result = tmp8(16933);
            const merged = Object.assign(tmp8Result.getStreamErrorContext(tmp8(4367).encodeStreamKey(currentUserActiveStream)));
            const items = [obj];
            const tmp3 = items;
            const tmp8Result1 = tmp8(4367);
          }
          tmp6 = tmp3;
        }
        return tmp6;
      }
      const obj5 = require(4367) /* isStreamKey */;
    }
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};

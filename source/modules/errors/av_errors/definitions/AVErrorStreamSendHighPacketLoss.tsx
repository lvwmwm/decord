// Module ID: 17759
// Function ID: 17760
// Name: AVErrorStreamSendHighPacketLossDefinition
// Dependencies: [4503, 4571, 4547, 17757, 9039, 17754, 2]

// Module 17759 (AVErrorStreamSendHighPacketLossDefinition)
import isStreamKey from "isStreamKey" /* 4547 */;
import closure_2 from "reset" /* 4503 */;
import closure_3 from "initialize" /* 4571 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamSendHighPacketLoss.tsx");

export const AVErrorStreamSendHighPacketLossDefinition = {
  getActiveErrors() {
    let obj = currentUserActiveStream;
    currentUserActiveStream = currentUserActiveStream.getCurrentUserActiveStream();
    if (null == currentUserActiveStream) {
      return null;
    } else if (0 === obj.getViewerIds(currentUserActiveStream).length) {
      return null;
    } else {
      rTCConnection = rTCConnection.getRTCConnection(isStreamKey.encodeStreamKey(currentUserActiveStream));
      let mediaEngineConnectionId;
      if (rTCConnection != null) {
        mediaEngineConnectionId = rTCConnection.getMediaEngineConnectionId();
      }
      if (null == mediaEngineConnectionId) {
        return null;
      } else {
        let tmp8Result = tmp8(17757);
        const accumulatedStatsWithMinDatapoints = tmp8Result.getAccumulatedStatsWithMinDatapoints(mediaEngineConnectionId, currentUserActiveStream.ownerId);
        let tmp6 = null;
        if (null != accumulatedStatsWithMinDatapoints) {
          if (10 < 100 * accumulatedStatsWithMinDatapoints.short.packetLossRate) {
            obj = { type: null };
            obj[0] = tmp8(9039).AVError.STREAM_SEND_HIGH_PACKET_LOSS;
            tmp8Result = tmp8(17754);
            const merged = Object.assign(tmp8Result.getStreamErrorContext(tmp8(4547).encodeStreamKey(currentUserActiveStream)));
            const items = [obj];
            const tmp3 = items;
            const tmp8Result1 = tmp8(4547);
          }
          tmp6 = tmp3;
        }
        return tmp6;
      }
      const obj5 = isStreamKey;
    }
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};

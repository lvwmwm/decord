// Module ID: 16997
// Function ID: 16998
// Name: AVErrorStreamViewHighPacketLossDefinition
// Dependencies: [4364, 1218, 4430, 16996, 4408, 9219, 16993, 2]

// Module 16997 (AVErrorStreamViewHighPacketLossDefinition)
import reset from "reset";
import fetchFingerprint from "fetchFingerprint";
import initialize from "initialize";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamViewHighPacketLoss.tsx");

export const AVErrorStreamViewHighPacketLossDefinition = {
  getActiveErrors() {
    let reduced = null;
    if (obj.getReportInboundErrors()) {
      allActiveStreams = allActiveStreams.getAllActiveStreams();
      reduced = allActiveStreams.reduce((arr, ownerId) => {
        let obj = callback(table[4]);
        rTCConnection = rTCConnection.getRTCConnection(obj.encodeStreamKey(ownerId));
        let mediaEngineConnectionId;
        if (rTCConnection != null) {
          mediaEngineConnectionId = rTCConnection.getMediaEngineConnectionId();
        }
        if (null == mediaEngineConnectionId) {
          return arr;
        } else if (ownerId.ownerId === id.getId()) {
          return arr;
        } else {
          let tmpResult = tmp(tmp2[3]);
          const accumulatedStatsWithMinDatapoints = tmpResult.getAccumulatedStatsWithMinDatapoints(mediaEngineConnectionId, ownerId.ownerId);
          if (null != accumulatedStatsWithMinDatapoints) {
            if (10 < 100 * accumulatedStatsWithMinDatapoints.short.packetLossRate) {
              obj = { type: null };
              obj[0] = tmp(tmp2[5]).AVError.STREAM_VIEW_HIGH_PACKET_LOSS;
              tmpResult = tmp(tmp2[6]);
              const merged = Object.assign(tmpResult.getStreamErrorContext(tmp(tmp2[4]).encodeStreamKey(ownerId)));
              arr.push(obj);
              const tmpResult1 = tmp(tmp2[4]);
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

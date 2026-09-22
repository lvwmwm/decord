// Module ID: 18298
// Function ID: 18299
// Name: AVErrorStreamViewLowFPS
// Dependencies: [4774, 4780, 502, 4797, 1078, 18299, 4810, 9688, 9681, 18296, 2]

// Module 18298 (AVErrorStreamViewLowFPS)
import StreamKeyUtils from "StreamKeyUtils" /* 4810 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4774 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4780 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 4797 */;

require = fn;
const ApplicationStreamStates = fn(1078).ApplicationStreamStates;
const size = fn(2);
const result = size.fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamViewLowFPS.tsx");

export const AVErrorStreamViewLowFPSDefinition = {
  getActiveErrors() {
    let reduced = null;
    if (obj.getReportInboundErrors()) {
      const allActiveStreams = ApplicationStreamingStore.getAllActiveStreams();
      reduced = allActiveStreams.reduce((arr, ownerId) => {
        rTCConnection = rTCConnection.getRTCConnection(StreamKeyUtils.encodeStreamKey(ownerId));
        let mediaEngineConnectionId;
        if (rTCConnection != null) {
          mediaEngineConnectionId = rTCConnection.getMediaEngineConnectionId();
        }
        if (null == mediaEngineConnectionId) {
          return arr;
        } else {
          if (ownerId.ownerId !== id.getId()) {
            if (ownerId.state !== constants.PAUSED) {
              const accumulatedStatsWithMinDatapoints = tmp(tmp2[5]).getAccumulatedStatsWithMinDatapoints(mediaEngineConnectionId, ownerId.ownerId);
              if (null == accumulatedStatsWithMinDatapoints) {
                return arr;
              } else {
                participant = participant.getParticipant(ownerId.channelId, tmp(tmp2[6]).encodeStreamKey(ownerId));
                if (null == participant) {
                  return arr;
                } else {
                  const maxQuality = tmp(tmp2[7]).getMaxQuality(participant);
                  if (null != maxQuality) {
                    if (accumulatedStatsWithMinDatapoints.short.frameRate < tmpResult9.getWarningFrameRate(maxQuality.maxFrameRate)) {
                      const obj2 = { type: tmp(tmp2[8]).AVError.STREAM_VIEW_LOW_FPS };
                      const tmpResult10 = tmp(tmp2[9]);
                      const merged = Object.assign(tmpResult10.getStreamErrorContext(tmp(tmp2[6]).encodeStreamKey(ownerId)));
                      arr.push(obj2);
                      const tmpResult11 = tmp(tmp2[6]);
                    } else {
                      const tmpResult12 = tmp(tmp2[5]);
                    }
                    tmpResult9 = tmp(tmp2[5]);
                  }
                  return arr;
                }
                const tmpResult7 = tmp(tmp2[6]);
              }
              const tmpResult = tmp(tmp2[5]);
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

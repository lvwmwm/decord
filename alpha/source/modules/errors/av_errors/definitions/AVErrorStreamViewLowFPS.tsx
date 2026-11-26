// Module ID: 20322
// Function ID: 20323
// Name: AVErrorStreamViewLowFPS
// Dependencies: [6933, 6813, 502, 8403, 1071, 20323, 6816, 6028, 6035, 20320, 2]

// Module 20322 (AVErrorStreamViewLowFPS)
import Constants from "Constants" /* 1071 */;
import StreamQualityUtils from "StreamQualityUtils" /* 6028 */;
import AVError from "AVError" /* 6035 */;
import StreamKeyUtils from "StreamKeyUtils" /* 6816 */;
import AVErrorContext from "AVErrorContext" /* 20320 */;
import AVErrorUtils from "AVErrorUtils" /* 20323 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6933 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6813 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 8403 */;
import size from "module_2" /* 2 */;

let getParticipant, getRTCConnection;

const ApplicationStreamStates = Constants.ApplicationStreamStates;
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
        } else {
          if (ownerId.ownerId !== id.getId()) {
            if (ownerId.state !== constants.PAUSED) {
              const tmpResult = AVErrorUtils;
              const accumulatedStatsWithMinDatapoints = tmpResult.getAccumulatedStatsWithMinDatapoints(mediaEngineConnectionId, ownerId.ownerId);
              if (null == accumulatedStatsWithMinDatapoints) {
                return acc;
              } else {
                getParticipant = getParticipant.getParticipant;
                const channelId = ownerId.channelId;
                const tmpResult7 = StreamKeyUtils;
                const participant = getParticipant(channelId, tmpResult7.encodeStreamKey(ownerId));
                if (null == participant) {
                  return acc;
                } else {
                  const tmpResult8 = StreamQualityUtils;
                  const maxQuality = tmpResult8.getMaxQuality(participant);
                  if (null != maxQuality) {
                    const frameRate2 = accumulatedStatsWithMinDatapoints.short.frameRate;
                    const tmpResult9 = AVErrorUtils;
                    if (frameRate2 < tmpResult9.getWarningFrameRate(maxQuality.maxFrameRate)) {
                      const push = acc.push;
                      const obj2 = { type: AVError.AVError.STREAM_VIEW_LOW_FPS };
                      const getStreamErrorContext = AVErrorContext.getStreamErrorContext;
                      AVErrorContext;
                      const tmpResult11 = StreamKeyUtils;
                      const merged = Object.assign(getStreamErrorContext(tmpResult11.encodeStreamKey(ownerId)));
                      push(obj2);
                    } else {
                      const frameRate = accumulatedStatsWithMinDatapoints.long.frameRate;
                      AVErrorUtils;
                    }
                  }
                  return acc;
                }
              }
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
const result = size.fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamViewLowFPS.tsx");

export const AVErrorStreamViewLowFPSDefinition = obj;

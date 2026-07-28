// Module ID: 16644
// Function ID: 129673
// Name: AVErrorStreamSendLowFPSDefinition
// Dependencies: [4178, 4184, 4251, 653, 664, 4229, 16641, 8827, 8828, 16638, 2]

// Module 16644 (AVErrorStreamSendLowFPSDefinition)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import { ApplicationStreamStates } from "ME";

const require = arg1;
let closure_6 = 20 * require("set").Millis.SECOND;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamSendLowFPS.tsx");

export const AVErrorStreamSendLowFPSDefinition = {
  getActiveErrors() {
    const currentUserActiveStream = authStore.getCurrentUserActiveStream();
    if (null != currentUserActiveStream) {
      if (currentUserActiveStream.state !== ApplicationStreamStates.PAUSED) {
        if (0 === authStore.getViewerIds(currentUserActiveStream).length) {
          return null;
        } else {
          const encodeStreamKeyResult = require(4229) /* isStreamKey */.encodeStreamKey(currentUserActiveStream);
          const rTCConnection = store.getRTCConnection(encodeStreamKeyResult);
          if (null == rTCConnection) {
            return null;
          } else {
            const mediaEngineConnectionId = rTCConnection.getMediaEngineConnectionId();
            if (null == mediaEngineConnectionId) {
              return null;
            } else {
              const lastNonZeroRemoteVideoSinkWantsTime = store.getLastNonZeroRemoteVideoSinkWantsTime(encodeStreamKeyResult);
              if (null != lastNonZeroRemoteVideoSinkWantsTime) {
                const _performance = performance;
                if (performance.now() - lastNonZeroRemoteVideoSinkWantsTime < closure_6) {
                  return null;
                }
              }
              if (rTCConnection.hasActiveRemoteWants()) {
                let obj = require(4229) /* isStreamKey */;
                participant = participant.getParticipant(currentUserActiveStream.channelId, obj.encodeStreamKey(currentUserActiveStream));
                if (null == participant) {
                  return null;
                } else {
                  const accumulatedStatsWithMinDatapoints = require(16641) /* getReportInboundErrors */.getAccumulatedStatsWithMinDatapoints(mediaEngineConnectionId, currentUserActiveStream.ownerId);
                  if (null == accumulatedStatsWithMinDatapoints) {
                    return null;
                  } else {
                    const maxQuality = require(8827) /* isPremiumRequirement */.getMaxQuality(participant);
                    let tmp17 = null;
                    if (null != maxQuality) {
                      if (accumulatedStatsWithMinDatapoints.short.frameRate < obj2.getWarningFrameRate(maxQuality.maxFrameRate)) {
                        obj = { type: require(8828) /* validateUniqueErrorCodes */.AVError.STREAM_SEND_LOW_FPS };
                        const obj5 = require(16638) /* getCommonErrorContext */;
                        const merged = Object.assign(obj5.getStreamErrorContext(require(4229) /* isStreamKey */.encodeStreamKey(currentUserActiveStream)));
                        const items = [obj];
                        let tmp12 = items;
                        const obj6 = require(4229) /* isStreamKey */;
                      } else {
                        tmp12 = null;
                        const obj3 = require(16641) /* getReportInboundErrors */;
                      }
                      tmp17 = tmp12;
                      obj2 = require(16641) /* getReportInboundErrors */;
                    }
                    return tmp17;
                  }
                  const obj9 = require(16641) /* getReportInboundErrors */;
                }
              } else {
                return null;
              }
            }
          }
          const obj7 = require(4229) /* isStreamKey */;
        }
      }
    }
    return null;
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};

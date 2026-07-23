// Module ID: 16534
// Function ID: 128973
// Name: AVErrorStreamSendLowFPSDefinition
// Dependencies: [4143, 4149, 4216, 653, 664, 4194, 16531, 8856, 8857, 16528, 2]

// Module 16534 (AVErrorStreamSendLowFPSDefinition)
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
          const encodeStreamKeyResult = require(4194) /* isStreamKey */.encodeStreamKey(currentUserActiveStream);
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
                let obj = require(4194) /* isStreamKey */;
                participant = participant.getParticipant(currentUserActiveStream.channelId, obj.encodeStreamKey(currentUserActiveStream));
                if (null == participant) {
                  return null;
                } else {
                  const accumulatedStatsWithMinDatapoints = require(16531) /* getReportInboundErrors */.getAccumulatedStatsWithMinDatapoints(mediaEngineConnectionId, currentUserActiveStream.ownerId);
                  if (null == accumulatedStatsWithMinDatapoints) {
                    return null;
                  } else {
                    const maxQuality = require(8856) /* isPremiumRequirement */.getMaxQuality(participant);
                    let tmp17 = null;
                    if (null != maxQuality) {
                      if (accumulatedStatsWithMinDatapoints.short.frameRate < obj2.getWarningFrameRate(maxQuality.maxFrameRate)) {
                        obj = { type: require(8857) /* validateUniqueErrorCodes */.AVError.STREAM_SEND_LOW_FPS };
                        const obj5 = require(16528) /* getCommonErrorContext */;
                        const merged = Object.assign(obj5.getStreamErrorContext(require(4194) /* isStreamKey */.encodeStreamKey(currentUserActiveStream)));
                        const items = [obj];
                        let tmp12 = items;
                        const obj6 = require(4194) /* isStreamKey */;
                      } else {
                        tmp12 = null;
                        const obj3 = require(16531) /* getReportInboundErrors */;
                      }
                      tmp17 = tmp12;
                      obj2 = require(16531) /* getReportInboundErrors */;
                    }
                    return tmp17;
                  }
                  const obj9 = require(16531) /* getReportInboundErrors */;
                }
              } else {
                return null;
              }
            }
          }
          const obj7 = require(4194) /* isStreamKey */;
        }
      }
    }
    return null;
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};

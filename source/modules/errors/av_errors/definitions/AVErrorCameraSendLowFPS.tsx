// Module ID: 16545
// Function ID: 129022
// Name: AVErrorCameraSendLowFPSDefinition
// Dependencies: [1194, 4177, 4202, 664, 16531, 8857, 16528, 2]

// Module 16545 (AVErrorCameraSendLowFPSDefinition)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";

const require = arg1;
let closure_5 = 20 * require("set").Millis.SECOND;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorCameraSendLowFPS.tsx");

export const AVErrorCameraSendLowFPSDefinition = {
  getActiveErrors() {
    const rTCConnection = store2.getRTCConnection();
    if (null == rTCConnection) {
      return null;
    } else {
      const mediaEngineConnectionId = rTCConnection.getMediaEngineConnectionId();
      if (null == mediaEngineConnectionId) {
        return null;
      } else if (videoEnabled.isVideoEnabled()) {
        const lastNonZeroRemoteVideoSinkWantsTime = store2.getLastNonZeroRemoteVideoSinkWantsTime();
        if (null != lastNonZeroRemoteVideoSinkWantsTime) {
          const _performance = performance;
          if (performance.now() - lastNonZeroRemoteVideoSinkWantsTime < closure_5) {
            return null;
          }
        }
        if (rTCConnection.hasActiveRemoteWants()) {
          const accumulatedStatsWithMinDatapoints = require(16531) /* getReportInboundErrors */.getAccumulatedStatsWithMinDatapoints(mediaEngineConnectionId, store.getId());
          let tmp9 = null;
          if (null != accumulatedStatsWithMinDatapoints) {
            if (accumulatedStatsWithMinDatapoints.short.frameRate < 10) {
              const obj = { type: require(8857) /* validateUniqueErrorCodes */.AVError.CAMERA_SEND_LOW_FPS, userId: store.getId() };
              const merged = Object.assign(require(16528) /* getCommonErrorContext */.getVoiceChannelErrorContext());
              const items = [obj];
              const obj4 = require(16528) /* getCommonErrorContext */;
              const tmp10 = items;
            }
            tmp9 = tmp10;
          }
          return tmp9;
        } else {
          return null;
        }
      } else {
        return null;
      }
    }
  },
  makeErrorContextKey(mediaSessionId) {
    return "" + mediaSessionId.mediaSessionId;
  }
};

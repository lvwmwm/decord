// Module ID: 16852
// Function ID: 16853
// Name: AVErrorCameraSendLowFPSDefinition
// Dependencies: [1218, 4349, 4373, 687, 16838, 9109, 16835, 2]

// Module 16852 (AVErrorCameraSendLowFPSDefinition)
import fetchFingerprint from "fetchFingerprint";
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import createRTCConnection from "createRTCConnection";

const require = arg1;
let closure_5 = 20 * require("set").Millis.SECOND;
const result = require("createRTCConnection").fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorCameraSendLowFPS.tsx");

export const AVErrorCameraSendLowFPSDefinition = {
  getActiveErrors() {
    let obj = rTCConnection;
    rTCConnection = rTCConnection.getRTCConnection();
    if (null == rTCConnection) {
      return null;
    } else {
      const mediaEngineConnectionId = rTCConnection.getMediaEngineConnectionId();
      if (null == mediaEngineConnectionId) {
        return null;
      } else if (videoEnabled.isVideoEnabled()) {
        const lastNonZeroRemoteVideoSinkWantsTime = obj.getLastNonZeroRemoteVideoSinkWantsTime();
        if (null != lastNonZeroRemoteVideoSinkWantsTime) {
          const _performance = performance;
          if (performance.now() - lastNonZeroRemoteVideoSinkWantsTime < closure_5) {
            return null;
          }
        }
        if (rTCConnection.hasActiveRemoteWants()) {
          const accumulatedStatsWithMinDatapoints = require(16838) /* getReportInboundErrors */.getAccumulatedStatsWithMinDatapoints(mediaEngineConnectionId, id.getId());
          let tmp7 = null;
          if (null != accumulatedStatsWithMinDatapoints) {
            if (accumulatedStatsWithMinDatapoints.short.frameRate < 10) {
              obj = { type: null, userId: null };
              obj[0] = tmp4(9109).AVError.CAMERA_SEND_LOW_FPS;
              obj[1] = id.getId();
              const merged = Object.assign(tmp4(16835).getVoiceChannelErrorContext());
              const items = [obj];
              const tmp4Result = tmp4(16835);
              const tmp8 = items;
            }
            tmp7 = tmp8;
          }
          return tmp7;
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

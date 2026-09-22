// Module ID: 18322
// Function ID: 18323
// Name: AVErrorCameraSendLowFPS
// Dependencies: [502, 1992, 4780, 1091, 18308, 9692, 18305, 2]

// Module 18322 (AVErrorCameraSendLowFPS)
import DurationsDefault from "Durations" /* 1091 */;
import AVErrorUtils from "AVErrorUtils" /* 18308 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 1992 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4780 */;

require = fn;
let closure_5 = 20 * DurationsDefault.Millis.SECOND;
const size = fn(2);
const result = size.fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorCameraSendLowFPS.tsx");

export const AVErrorCameraSendLowFPSDefinition = {
  getActiveErrors() {
    const rTCConnection = RTCConnectionStore.getRTCConnection();
    if (null == rTCConnection) {
      return null;
    } else {
      const mediaEngineConnectionId = rTCConnection.getMediaEngineConnectionId();
      if (null == mediaEngineConnectionId) {
        return null;
      } else if (MediaEngineStore.isVideoEnabled()) {
        const lastNonZeroRemoteVideoSinkWantsTime = obj.getLastNonZeroRemoteVideoSinkWantsTime();
        if (null != lastNonZeroRemoteVideoSinkWantsTime) {
          const _performance = performance;
          if (performance.now() - lastNonZeroRemoteVideoSinkWantsTime < closure_5) {
            return null;
          }
        }
        if (rTCConnection.hasActiveRemoteWants()) {
          const accumulatedStatsWithMinDatapoints = AVErrorUtils.getAccumulatedStatsWithMinDatapoints(mediaEngineConnectionId, AuthenticationStore.getId());
          let tmp7 = null;
          if (null != accumulatedStatsWithMinDatapoints) {
            if (accumulatedStatsWithMinDatapoints.short.frameRate < 10) {
              const obj2 = { type: tmp4(9692).AVError.CAMERA_SEND_LOW_FPS, userId: AuthenticationStore.getId() };
              const merged = Object.assign(tmp4(18305).getVoiceChannelErrorContext());
              const items = [obj2];
              const tmp4Result = tmp4(18305);
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
    obj = RTCConnectionStore;
  },
  makeErrorContextKey(mediaSessionId) {
    return "" + mediaSessionId.mediaSessionId;
  }
};

// Module ID: 17967
// Function ID: 17968
// Name: AVErrorCameraSendLowFPS
// Dependencies: [502, 1908, 4659, 1090, 17953, 9239, 17950, 2]

// Module 17967 (AVErrorCameraSendLowFPS)
import DurationsDefault from "Durations" /* 1090 */;
import AVErrorUtils from "AVErrorUtils" /* 17953 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 1908 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4659 */;

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
              const obj2 = { type: tmp4(9239).AVError.CAMERA_SEND_LOW_FPS, userId: AuthenticationStore.getId() };
              const merged = Object.assign(tmp4(17950).getVoiceChannelErrorContext());
              const items = [obj2];
              const tmp4Result = tmp4(17950);
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

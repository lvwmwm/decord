// Module ID: 18046
// Function ID: 18047
// Name: AVErrorCameraSendLowFPS
// Dependencies: [502, 1999, 4913, 1102, 18032, 9095, 18029, 2]

// Module 18046 (AVErrorCameraSendLowFPS)
import DurationsDefault from "Durations" /* 1102 */;
import AVError from "AVError" /* 9095 */;
import AVErrorContext from "AVErrorContext" /* 18029 */;
import AVErrorUtils from "AVErrorUtils" /* 18032 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 1999 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4913 */;
import size from "module_2" /* 2 */;

let closure_5 = 20 * DurationsDefault.Millis.SECOND;
let obj = {
  getActiveErrors() {
    const rTCConnection = RTCConnectionStore.getRTCConnection();
    const obj = RTCConnectionStore;
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
          const obj3 = AVErrorUtils;
          const accumulatedStatsWithMinDatapoints = obj3.getAccumulatedStatsWithMinDatapoints(mediaEngineConnectionId, AuthenticationStore.getId());
          let tmp7 = null;
          const obj4 = AuthenticationStore;
          if (null != accumulatedStatsWithMinDatapoints) {
            let tmp8;
            if (accumulatedStatsWithMinDatapoints.short.frameRate < 10) {
              const obj2 = { type: AVError.AVError.CAMERA_SEND_LOW_FPS, userId: obj4.getId() };
              const tmp4Result = AVErrorContext;
              const merged = Object.assign(tmp4Result.getVoiceChannelErrorContext());
              const items = [obj2];
              tmp8 = items;
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
const result = size.fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorCameraSendLowFPS.tsx");

export const AVErrorCameraSendLowFPSDefinition = obj;

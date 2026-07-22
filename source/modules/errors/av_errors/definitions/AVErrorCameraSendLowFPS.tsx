// Module ID: 16428
// Function ID: 126848
// Name: AVErrorCameraSendLowFPSDefinition
// Dependencies: []

// Module 16428 (AVErrorCameraSendLowFPSDefinition)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = 20 * importDefault(dependencyMap[3]).Millis.SECOND;
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorCameraSendLowFPS.tsx");

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
          const accumulatedStatsWithMinDatapoints = arg1(dependencyMap[4]).getAccumulatedStatsWithMinDatapoints(mediaEngineConnectionId, store.getId());
          let tmp9 = null;
          if (null != accumulatedStatsWithMinDatapoints) {
            if (accumulatedStatsWithMinDatapoints.short.frameRate < 10) {
              const obj = { type: arg1(dependencyMap[5]).AVError.CAMERA_SEND_LOW_FPS, userId: store.getId() };
              const merged = Object.assign(arg1(dependencyMap[6]).getVoiceChannelErrorContext());
              const items = [obj];
              const obj4 = arg1(dependencyMap[6]);
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

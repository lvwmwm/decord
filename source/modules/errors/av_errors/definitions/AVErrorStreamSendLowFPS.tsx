// Module ID: 16417
// Function ID: 126799
// Name: AVErrorStreamSendLowFPSDefinition
// Dependencies: []

// Module 16417 (AVErrorStreamSendLowFPSDefinition)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const ApplicationStreamStates = arg1(dependencyMap[3]).ApplicationStreamStates;
let closure_6 = 20 * importDefault(dependencyMap[4]).Millis.SECOND;
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamSendLowFPS.tsx");

export const AVErrorStreamSendLowFPSDefinition = {
  getActiveErrors() {
    const currentUserActiveStream = authStore.getCurrentUserActiveStream();
    if (null != currentUserActiveStream) {
      if (currentUserActiveStream.state !== ApplicationStreamStates.PAUSED) {
        if (0 === authStore.getViewerIds(currentUserActiveStream).length) {
          return null;
        } else {
          const encodeStreamKeyResult = arg1(dependencyMap[5]).encodeStreamKey(currentUserActiveStream);
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
                let obj = arg1(dependencyMap[5]);
                const participant = participant.getParticipant(currentUserActiveStream.channelId, obj.encodeStreamKey(currentUserActiveStream));
                if (null == participant) {
                  return null;
                } else {
                  const accumulatedStatsWithMinDatapoints = arg1(dependencyMap[6]).getAccumulatedStatsWithMinDatapoints(mediaEngineConnectionId, currentUserActiveStream.ownerId);
                  if (null == accumulatedStatsWithMinDatapoints) {
                    return null;
                  } else {
                    const maxQuality = arg1(dependencyMap[7]).getMaxQuality(participant);
                    let tmp17 = null;
                    if (null != maxQuality) {
                      if (accumulatedStatsWithMinDatapoints.short.frameRate < obj2.getWarningFrameRate(maxQuality.maxFrameRate)) {
                        obj = { type: arg1(dependencyMap[8]).AVError.STREAM_SEND_LOW_FPS };
                        const obj5 = arg1(dependencyMap[9]);
                        const merged = Object.assign(obj5.getStreamErrorContext(arg1(dependencyMap[5]).encodeStreamKey(currentUserActiveStream)));
                        const items = [obj];
                        let tmp12 = items;
                        const obj6 = arg1(dependencyMap[5]);
                      } else {
                        tmp12 = null;
                        const obj3 = arg1(dependencyMap[6]);
                      }
                      tmp17 = tmp12;
                      const obj2 = arg1(dependencyMap[6]);
                    }
                    return tmp17;
                  }
                  const obj9 = arg1(dependencyMap[6]);
                }
              } else {
                return null;
              }
            }
          }
          const obj7 = arg1(dependencyMap[5]);
        }
      }
    }
    return null;
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};

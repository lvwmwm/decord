// Module ID: 16397
// Function ID: 126681
// Name: AVErrorStreamViewLowFPSDefinition
// Dependencies: []

// Module 16397 (AVErrorStreamViewLowFPSDefinition)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
const ApplicationStreamStates = arg1(dependencyMap[4]).ApplicationStreamStates;
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamViewLowFPS.tsx");

export const AVErrorStreamViewLowFPSDefinition = {
  getActiveErrors() {
    let reduced = null;
    if (obj.getReportInboundErrors()) {
      const allActiveStreams = allActiveStreams.getAllActiveStreams();
      reduced = allActiveStreams.reduce((arr, ownerId) => {
        let obj = callback(closure_1[6]);
        const rTCConnection = rTCConnection.getRTCConnection(obj.encodeStreamKey(ownerId));
        let mediaEngineConnectionId;
        if (null != rTCConnection) {
          mediaEngineConnectionId = rTCConnection.getMediaEngineConnectionId();
        }
        if (null == mediaEngineConnectionId) {
          return arr;
        } else {
          if (ownerId.ownerId !== id.getId()) {
            if (ownerId.state !== constants.PAUSED) {
              const accumulatedStatsWithMinDatapoints = callback(closure_1[5]).getAccumulatedStatsWithMinDatapoints(mediaEngineConnectionId, ownerId.ownerId);
              if (null == accumulatedStatsWithMinDatapoints) {
                return arr;
              } else {
                const participant = participant.getParticipant(ownerId.channelId, callback(closure_1[6]).encodeStreamKey(ownerId));
                if (null == participant) {
                  return arr;
                } else {
                  const maxQuality = callback(closure_1[7]).getMaxQuality(participant);
                  if (null != maxQuality) {
                    if (accumulatedStatsWithMinDatapoints.short.frameRate < obj10.getWarningFrameRate(maxQuality.maxFrameRate)) {
                      obj = { type: callback(closure_1[8]).AVError.STREAM_VIEW_LOW_FPS };
                      const obj5 = callback(closure_1[9]);
                      const merged = Object.assign(obj5.getStreamErrorContext(callback(closure_1[6]).encodeStreamKey(ownerId)));
                      arr.push(obj);
                      const obj6 = callback(closure_1[6]);
                    } else {
                      const obj3 = callback(closure_1[5]);
                    }
                    const obj10 = callback(closure_1[5]);
                  }
                  return arr;
                }
                const obj8 = callback(closure_1[6]);
              }
              const obj7 = callback(closure_1[5]);
            }
          }
          return arr;
        }
      }, []);
    }
    return reduced;
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};

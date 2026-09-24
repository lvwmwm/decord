// Module ID: 18312
// Function ID: 18313
// Name: AVErrorStreamSendLowFPS
// Dependencies: [4806, 4812, 4829, 1078, 1095, 4842, 18309, 9720, 9713, 18306, 2]

// Module 18312 (AVErrorStreamSendLowFPS)
import DurationsDefault from "Durations" /* 1095 */;
import StreamKeyUtils from "StreamKeyUtils" /* 4842 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4806 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4812 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 4829 */;

require = fn;
const ApplicationStreamStates = fn(1078).ApplicationStreamStates;
let closure_6 = 20 * DurationsDefault.Millis.SECOND;
const size = fn(2);
const result = size.fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamSendLowFPS.tsx");

export const AVErrorStreamSendLowFPSDefinition = {
  getActiveErrors() {
    const currentUserActiveStream = ApplicationStreamingStore.getCurrentUserActiveStream();
    if (null != currentUserActiveStream) {
      if (currentUserActiveStream.state !== ApplicationStreamStates.PAUSED) {
        if (0 === ApplicationStreamingStore.getViewerIds(currentUserActiveStream).length) {
          return null;
        } else {
          const encodeStreamKeyResult = StreamKeyUtils.encodeStreamKey(currentUserActiveStream);
          const rTCConnection = StreamRTCConnectionStore.getRTCConnection(encodeStreamKeyResult);
          if (null == rTCConnection) {
            return null;
          } else {
            const mediaEngineConnectionId = rTCConnection.getMediaEngineConnectionId();
            if (null == mediaEngineConnectionId) {
              return null;
            } else {
              const lastNonZeroRemoteVideoSinkWantsTime = obj9.getLastNonZeroRemoteVideoSinkWantsTime(encodeStreamKeyResult);
              if (null != lastNonZeroRemoteVideoSinkWantsTime) {
                const _performance = performance;
                if (performance.now() - lastNonZeroRemoteVideoSinkWantsTime < closure_6) {
                  return null;
                }
              }
              if (rTCConnection.hasActiveRemoteWants()) {
                const participant = ChannelRTCStore.getParticipant(currentUserActiveStream.channelId, tmp11(4842).encodeStreamKey(currentUserActiveStream));
                if (null == participant) {
                  return null;
                } else {
                  const accumulatedStatsWithMinDatapoints = tmp11(18309).getAccumulatedStatsWithMinDatapoints(mediaEngineConnectionId, currentUserActiveStream.ownerId);
                  if (null == accumulatedStatsWithMinDatapoints) {
                    return null;
                  } else {
                    const maxQuality = tmp11(9720).getMaxQuality(participant);
                    let tmp9 = null;
                    if (null != maxQuality) {
                      if (accumulatedStatsWithMinDatapoints.short.frameRate < tmp11Result9.getWarningFrameRate(maxQuality.maxFrameRate)) {
                        const obj2 = { type: tmp11(9713).AVError.STREAM_SEND_LOW_FPS };
                        const tmp11Result10 = tmp11(18306);
                        const merged = Object.assign(tmp11Result10.getStreamErrorContext(tmp11(4842).encodeStreamKey(currentUserActiveStream)));
                        const items = [obj2];
                        let tmp6 = items;
                        const tmp11Result11 = tmp11(4842);
                      } else {
                        tmp6 = null;
                        const tmp11Result12 = tmp11(18309);
                      }
                      tmp9 = tmp6;
                      tmp11Result9 = tmp11(18309);
                    }
                    return tmp9;
                  }
                  const tmp11Result7 = tmp11(18309);
                }
                const tmp11Result = tmp11(4842);
              } else {
                return null;
              }
            }
          }
          obj9 = StreamRTCConnectionStore;
        }
      }
    }
    return null;
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};

// Module ID: 17892
// Function ID: 17893
// Name: AVErrorStreamSendLowFPS
// Dependencies: [4882, 4888, 4905, 1074, 1091, 4918, 17889, 9095, 9074, 17886, 2]

// Module 17892 (AVErrorStreamSendLowFPS)
import DurationsDefault from "Durations" /* 1091 */;
import StreamKeyUtils from "StreamKeyUtils" /* 4918 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4882 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4888 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 4905 */;

require = fn;
const ApplicationStreamStates = fn(1074).ApplicationStreamStates;
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
                const participant = ChannelRTCStore.getParticipant(currentUserActiveStream.channelId, tmp11(4918).encodeStreamKey(currentUserActiveStream));
                if (null == participant) {
                  return null;
                } else {
                  const accumulatedStatsWithMinDatapoints = tmp11(17889).getAccumulatedStatsWithMinDatapoints(mediaEngineConnectionId, currentUserActiveStream.ownerId);
                  if (null == accumulatedStatsWithMinDatapoints) {
                    return null;
                  } else {
                    const maxQuality = tmp11(9095).getMaxQuality(participant);
                    let tmp9 = null;
                    if (null != maxQuality) {
                      if (accumulatedStatsWithMinDatapoints.short.frameRate < tmp11Result9.getWarningFrameRate(maxQuality.maxFrameRate)) {
                        const obj2 = { type: tmp11(9074).AVError.STREAM_SEND_LOW_FPS };
                        const tmp11Result10 = tmp11(17886);
                        const merged = Object.assign(tmp11Result10.getStreamErrorContext(tmp11(4918).encodeStreamKey(currentUserActiveStream)));
                        const items = [obj2];
                        let tmp6 = items;
                        const tmp11Result11 = tmp11(4918);
                      } else {
                        tmp6 = null;
                        const tmp11Result12 = tmp11(17889);
                      }
                      tmp9 = tmp6;
                      tmp11Result9 = tmp11(17889);
                    }
                    return tmp9;
                  }
                  const tmp11Result7 = tmp11(17889);
                }
                const tmp11Result = tmp11(4918);
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

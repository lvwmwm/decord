// Module ID: 18302
// Function ID: 18303
// Name: AVErrorStreamSendLowFPS
// Dependencies: [4774, 4780, 4797, 1078, 1095, 4810, 18299, 9688, 9681, 18296, 2]

// Module 18302 (AVErrorStreamSendLowFPS)
import DurationsDefault from "Durations" /* 1095 */;
import StreamKeyUtils from "StreamKeyUtils" /* 4810 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4774 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4780 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 4797 */;

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
                const participant = ChannelRTCStore.getParticipant(currentUserActiveStream.channelId, tmp11(4810).encodeStreamKey(currentUserActiveStream));
                if (null == participant) {
                  return null;
                } else {
                  const accumulatedStatsWithMinDatapoints = tmp11(18299).getAccumulatedStatsWithMinDatapoints(mediaEngineConnectionId, currentUserActiveStream.ownerId);
                  if (null == accumulatedStatsWithMinDatapoints) {
                    return null;
                  } else {
                    const maxQuality = tmp11(9688).getMaxQuality(participant);
                    let tmp9 = null;
                    if (null != maxQuality) {
                      if (accumulatedStatsWithMinDatapoints.short.frameRate < tmp11Result9.getWarningFrameRate(maxQuality.maxFrameRate)) {
                        const obj2 = { type: tmp11(9681).AVError.STREAM_SEND_LOW_FPS };
                        const tmp11Result10 = tmp11(18296);
                        const merged = Object.assign(tmp11Result10.getStreamErrorContext(tmp11(4810).encodeStreamKey(currentUserActiveStream)));
                        const items = [obj2];
                        let tmp6 = items;
                        const tmp11Result11 = tmp11(4810);
                      } else {
                        tmp6 = null;
                        const tmp11Result12 = tmp11(18299);
                      }
                      tmp9 = tmp6;
                      tmp11Result9 = tmp11(18299);
                    }
                    return tmp9;
                  }
                  const tmp11Result7 = tmp11(18299);
                }
                const tmp11Result = tmp11(4810);
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

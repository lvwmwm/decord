// Module ID: 18298
// Function ID: 18299
// Name: AVErrorStreamSendLowFPS
// Dependencies: [4772, 4778, 4795, 1074, 1091, 4808, 18295, 9707, 9686, 18292, 2]

// Module 18298 (AVErrorStreamSendLowFPS)
import DurationsDefault from "Durations" /* 1091 */;
import StreamKeyUtils from "StreamKeyUtils" /* 4808 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4772 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4778 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 4795 */;

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
                const participant = ChannelRTCStore.getParticipant(currentUserActiveStream.channelId, tmp11(4808).encodeStreamKey(currentUserActiveStream));
                if (null == participant) {
                  return null;
                } else {
                  const accumulatedStatsWithMinDatapoints = tmp11(18295).getAccumulatedStatsWithMinDatapoints(mediaEngineConnectionId, currentUserActiveStream.ownerId);
                  if (null == accumulatedStatsWithMinDatapoints) {
                    return null;
                  } else {
                    const maxQuality = tmp11(9707).getMaxQuality(participant);
                    let tmp9 = null;
                    if (null != maxQuality) {
                      if (accumulatedStatsWithMinDatapoints.short.frameRate < tmp11Result9.getWarningFrameRate(maxQuality.maxFrameRate)) {
                        const obj2 = { type: tmp11(9686).AVError.STREAM_SEND_LOW_FPS };
                        const tmp11Result10 = tmp11(18292);
                        const merged = Object.assign(tmp11Result10.getStreamErrorContext(tmp11(4808).encodeStreamKey(currentUserActiveStream)));
                        const items = [obj2];
                        let tmp6 = items;
                        const tmp11Result11 = tmp11(4808);
                      } else {
                        tmp6 = null;
                        const tmp11Result12 = tmp11(18295);
                      }
                      tmp9 = tmp6;
                      tmp11Result9 = tmp11(18295);
                    }
                    return tmp9;
                  }
                  const tmp11Result7 = tmp11(18295);
                }
                const tmp11Result = tmp11(4808);
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

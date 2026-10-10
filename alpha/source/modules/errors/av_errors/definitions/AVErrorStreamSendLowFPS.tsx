// Module ID: 18603
// Function ID: 18604
// Name: AVErrorStreamSendLowFPS
// Dependencies: [6036, 5897, 7428, 1085, 1102, 5900, 18600, 5270, 5289, 18597, 2]

// Module 18603 (AVErrorStreamSendLowFPS)
import Constants from "Constants" /* 1085 */;
import DurationsDefault from "Durations" /* 1102 */;
import StreamQualityUtils from "StreamQualityUtils" /* 5270 */;
import AVError from "AVError" /* 5289 */;
import StreamKeyUtils from "StreamKeyUtils" /* 5900 */;
import AVErrorContext from "AVErrorContext" /* 18597 */;
import AVErrorUtils from "AVErrorUtils" /* 18600 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6036 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 5897 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 7428 */;
import size from "module_2" /* 2 */;

const ApplicationStreamStates = Constants.ApplicationStreamStates;
let closure_6 = 20 * DurationsDefault.Millis.SECOND;
let obj = {
  getActiveErrors() {
    const currentUserActiveStream = ApplicationStreamingStore.getCurrentUserActiveStream();
    const obj = ApplicationStreamingStore;
    if (null != currentUserActiveStream) {
      if (currentUserActiveStream.state !== ApplicationStreamStates.PAUSED) {
        if (0 === obj.getViewerIds(currentUserActiveStream).length) {
          return null;
        } else {
          const obj7 = StreamKeyUtils;
          const encodeStreamKeyResult = obj7.encodeStreamKey(currentUserActiveStream);
          const rTCConnection = StreamRTCConnectionStore.getRTCConnection(encodeStreamKeyResult);
          const obj8 = StreamRTCConnectionStore;
          if (null == rTCConnection) {
            return null;
          } else {
            const mediaEngineConnectionId = rTCConnection.getMediaEngineConnectionId();
            if (null == mediaEngineConnectionId) {
              return null;
            } else {
              const lastNonZeroRemoteVideoSinkWantsTime = obj8.getLastNonZeroRemoteVideoSinkWantsTime(encodeStreamKeyResult);
              if (null != lastNonZeroRemoteVideoSinkWantsTime) {
                const _performance = performance;
                if (performance.now() - lastNonZeroRemoteVideoSinkWantsTime < closure_6) {
                  return null;
                }
              }
              if (rTCConnection.hasActiveRemoteWants()) {
                const getParticipant = ChannelRTCStore.getParticipant;
                const channelId = currentUserActiveStream.channelId;
                const tmp12Result = StreamKeyUtils;
                const participant = getParticipant(channelId, tmp12Result.encodeStreamKey(currentUserActiveStream));
                if (null == participant) {
                  return null;
                } else {
                  const tmp12Result7 = AVErrorUtils;
                  const accumulatedStatsWithMinDatapoints = tmp12Result7.getAccumulatedStatsWithMinDatapoints(mediaEngineConnectionId, currentUserActiveStream.ownerId);
                  if (null == accumulatedStatsWithMinDatapoints) {
                    return null;
                  } else {
                    const tmp12Result8 = StreamQualityUtils;
                    const maxQuality = tmp12Result8.getMaxQuality(participant);
                    let tmp10 = null;
                    if (null != maxQuality) {
                      let tmp6;
                      const frameRate = accumulatedStatsWithMinDatapoints.short.frameRate;
                      const tmp12Result9 = AVErrorUtils;
                      if (frameRate < tmp12Result9.getWarningFrameRate(maxQuality.maxFrameRate)) {
                        const obj2 = { type: AVError.AVError.STREAM_SEND_LOW_FPS };
                        const getStreamErrorContext = AVErrorContext.getStreamErrorContext;
                        AVErrorContext;
                        const tmp12Result11 = StreamKeyUtils;
                        const merged = Object.assign(getStreamErrorContext(tmp12Result11.encodeStreamKey(currentUserActiveStream)));
                        const items = [obj2];
                        tmp6 = items;
                      } else {
                        const frameRate2 = accumulatedStatsWithMinDatapoints.long.frameRate;
                        tmp6 = null;
                        AVErrorUtils;
                      }
                      tmp10 = tmp6;
                    }
                    return tmp10;
                  }
                }
              } else {
                return null;
              }
            }
          }
        }
      }
    }
    return null;
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};
const result = size.fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamSendLowFPS.tsx");

export const AVErrorStreamSendLowFPSDefinition = obj;

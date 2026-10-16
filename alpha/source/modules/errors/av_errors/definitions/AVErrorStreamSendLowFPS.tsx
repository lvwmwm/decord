// Module ID: 18982
// Function ID: 18983
// Name: AVErrorStreamSendLowFPS
// Dependencies: [6254, 6115, 7647, 1087, 1104, 6118, 18979, 5332, 5351, 18976, 2]

// Module 18982 (AVErrorStreamSendLowFPS)
import Constants from "Constants" /* 1087 */;
import DurationsDefault from "Durations" /* 1104 */;
import StreamQualityUtils from "StreamQualityUtils" /* 5332 */;
import AVError from "AVError" /* 5351 */;
import StreamKeyUtils from "StreamKeyUtils" /* 6118 */;
import AVErrorContext from "AVErrorContext" /* 18976 */;
import AVErrorUtils from "AVErrorUtils" /* 18979 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6254 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6115 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 7647 */;
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

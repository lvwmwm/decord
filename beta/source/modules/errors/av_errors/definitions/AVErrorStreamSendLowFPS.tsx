// Module ID: 17668
// Function ID: 17669
// Name: AVErrorStreamSendLowFPS
// Dependencies: [4852, 4858, 4875, 1074, 1091, 4888, 17665, 8896, 8875, 17662, 2]

// Module 17668 (AVErrorStreamSendLowFPS)
import Constants from "Constants" /* 1074 */;
import DurationsDefault from "Durations" /* 1091 */;
import StreamKeyUtils from "StreamKeyUtils" /* 4888 */;
import AVError from "AVError" /* 8875 */;
import StreamQualityUtils from "StreamQualityUtils" /* 8896 */;
import AVErrorContext from "AVErrorContext" /* 17662 */;
import AVErrorUtils from "AVErrorUtils" /* 17665 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4852 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4858 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 4875 */;
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

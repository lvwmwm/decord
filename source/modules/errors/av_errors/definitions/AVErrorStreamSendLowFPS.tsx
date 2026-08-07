// Module ID: 16841
// Function ID: 16842
// Name: AVErrorStreamSendLowFPSDefinition
// Dependencies: [4315, 4321, 4387, 676, 687, 4365, 16838, 9108, 9109, 16835, 2]

// Module 16841 (AVErrorStreamSendLowFPSDefinition)
import getParticipants from "getParticipants";
import reset from "reset";
import initialize from "initialize";
import { ApplicationStreamStates } from "ME";

const require = arg1;
let closure_6 = 20 * require("set").Millis.SECOND;
const result = require("initialize").fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamSendLowFPS.tsx");

export const AVErrorStreamSendLowFPSDefinition = {
  getActiveErrors() {
    let obj = currentUserActiveStream;
    currentUserActiveStream = currentUserActiveStream.getCurrentUserActiveStream();
    if (null != currentUserActiveStream) {
      if (currentUserActiveStream.state !== ApplicationStreamStates.PAUSED) {
        if (0 === obj.getViewerIds(currentUserActiveStream).length) {
          return null;
        } else {
          const encodeStreamKeyResult = require(4365) /* isStreamKey */.encodeStreamKey(currentUserActiveStream);
          rTCConnection = rTCConnection.getRTCConnection(encodeStreamKeyResult);
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
                let tmp11Result = tmp11(4365);
                participant = participant.getParticipant(currentUserActiveStream.channelId, tmp11Result.encodeStreamKey(currentUserActiveStream));
                if (null == participant) {
                  return null;
                } else {
                  tmp11Result = tmp11(16838);
                  const accumulatedStatsWithMinDatapoints = tmp11Result.getAccumulatedStatsWithMinDatapoints(mediaEngineConnectionId, currentUserActiveStream.ownerId);
                  if (null == accumulatedStatsWithMinDatapoints) {
                    return null;
                  } else {
                    const maxQuality = tmp11(9108).getMaxQuality(participant);
                    let tmp9 = null;
                    if (null != maxQuality) {
                      if (accumulatedStatsWithMinDatapoints.short.frameRate < tmp11Result2.getWarningFrameRate(maxQuality.maxFrameRate)) {
                        obj = { type: null };
                        obj[0] = tmp11(9109).AVError.STREAM_SEND_LOW_FPS;
                        const tmp11Result3 = tmp11(16835);
                        const merged = Object.assign(tmp11Result3.getStreamErrorContext(tmp11(4365).encodeStreamKey(currentUserActiveStream)));
                        const items = [obj];
                        let tmp6 = items;
                        const tmp11Result4 = tmp11(4365);
                      } else {
                        tmp6 = null;
                        const tmp11Result5 = tmp11(16838);
                      }
                      tmp9 = tmp6;
                      tmp11Result2 = tmp11(16838);
                    }
                    return tmp9;
                  }
                }
              } else {
                return null;
              }
            }
          }
          const obj8 = require(4365) /* isStreamKey */;
          obj9 = rTCConnection;
        }
      }
    }
    return null;
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};

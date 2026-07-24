// Module ID: 16577
// Function ID: 129282
// Name: AVErrorStreamViewLowFPSDefinition
// Dependencies: [4143, 4149, 1194, 4216, 653, 16578, 4194, 8895, 8896, 16575, 2]

// Module 16577 (AVErrorStreamViewLowFPSDefinition)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { ApplicationStreamStates } from "ME";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamViewLowFPS.tsx");

export const AVErrorStreamViewLowFPSDefinition = {
  getActiveErrors() {
    let reduced = null;
    if (obj.getReportInboundErrors()) {
      allActiveStreams = allActiveStreams.getAllActiveStreams();
      reduced = allActiveStreams.reduce((arr, ownerId) => {
        let obj = outer1_0(outer1_1[6]);
        const rTCConnection = outer1_5.getRTCConnection(obj.encodeStreamKey(ownerId));
        let mediaEngineConnectionId;
        if (null != rTCConnection) {
          mediaEngineConnectionId = rTCConnection.getMediaEngineConnectionId();
        }
        if (null == mediaEngineConnectionId) {
          return arr;
        } else {
          if (ownerId.ownerId !== outer1_4.getId()) {
            if (ownerId.state !== outer1_6.PAUSED) {
              const accumulatedStatsWithMinDatapoints = outer1_0(outer1_1[5]).getAccumulatedStatsWithMinDatapoints(mediaEngineConnectionId, ownerId.ownerId);
              if (null == accumulatedStatsWithMinDatapoints) {
                return arr;
              } else {
                const participant = outer1_2.getParticipant(ownerId.channelId, outer1_0(outer1_1[6]).encodeStreamKey(ownerId));
                if (null == participant) {
                  return arr;
                } else {
                  const maxQuality = outer1_0(outer1_1[7]).getMaxQuality(participant);
                  if (null != maxQuality) {
                    if (accumulatedStatsWithMinDatapoints.short.frameRate < obj10.getWarningFrameRate(maxQuality.maxFrameRate)) {
                      obj = { type: outer1_0(outer1_1[8]).AVError.STREAM_VIEW_LOW_FPS };
                      const obj5 = outer1_0(outer1_1[9]);
                      const merged = Object.assign(obj5.getStreamErrorContext(outer1_0(outer1_1[6]).encodeStreamKey(ownerId)));
                      arr.push(obj);
                      const obj6 = outer1_0(outer1_1[6]);
                    } else {
                      const obj3 = outer1_0(outer1_1[5]);
                    }
                    obj10 = outer1_0(outer1_1[5]);
                  }
                  return arr;
                }
                const obj8 = outer1_0(outer1_1[6]);
              }
              const obj7 = outer1_0(outer1_1[5]);
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

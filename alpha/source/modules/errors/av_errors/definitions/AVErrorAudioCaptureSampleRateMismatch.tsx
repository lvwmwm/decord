// Module ID: 19001
// Function ID: 19002
// Name: AVErrorAudioCaptureSampleRateMismatch
// Dependencies: [5192, 2014, 5172, 1104, 5352, 18989, 2]

// Module 19001 (AVErrorAudioCaptureSampleRateMismatch)
import DurationsDefault from "Durations" /* 1104 */;
import AVError from "AVError" /* 5352 */;
import AVErrorContext from "AVErrorContext" /* 18989 */;
import MediaEngineStatsStore from "MediaEngineStatsStore" /* 5192 */;
import MediaEngineStore from "MediaEngineStore" /* 2014 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5172 */;
import size from "module_2" /* 2 */;

let closure_5 = 10 * DurationsDefault.Millis.SECOND;
let obj = {
  getActiveErrors() {
    const rTCConnection = RTCConnectionStore.getRTCConnection();
    let num;
    const obj = RTCConnectionStore;
    if (rTCConnection != null) {
      num = rTCConnection.getDurationSeconds();
    }
    if (num == null) {
      num = 0;
    }
    if (num >= 30) {
      const _performance = performance;
      const nowResult = performance.now();
      if (nowResult - MediaEngineStore.getLastAudioInputDeviceChangeTimestamp() >= closure_5) {
        const getConnectionStats = MediaEngineStatsStore.getConnectionStats;
        const rTCConnection1 = obj.getRTCConnection();
        let mediaEngineConnectionId;
        if (rTCConnection1 != null) {
          mediaEngineConnectionId = rTCConnection1.getMediaEngineConnectionId();
        }
        const connectionStats = getConnectionStats(mediaEngineConnectionId);
        let num2;
        if (connectionStats != null) {
          const outbound = connectionStats.stats.rtp.outbound;
          const found = outbound.find((type) => "audio" === type.type);
          if (found != null) {
            num2 = found.sampleRateMismatchPercent;
          }
        }
        if (num2 == null) {
          num2 = 0;
        }
        const _Math = Math;
        let tmp5;
        if (Math.abs(num2) > 30) {
          const obj2 = { type: AVError.AVError.AUDIO_CAPTURE_SAMPLE_RATE_MISMATCH, audioCaptureSampleRateMismatchPercent: num2 };
          const obj4 = AVErrorContext;
          const merged = Object.assign(obj4.getVoiceChannelErrorContext());
          const items = [obj2];
          tmp5 = items;
        }
        return tmp5;
      }
    }
  },
  makeErrorContextKey(mediaSessionId) {
    return "" + mediaSessionId.mediaSessionId + ":" + mediaSessionId.audioInputDeviceName;
  }
};
const result = size.fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorAudioCaptureSampleRateMismatch.tsx");

export const AVErrorAudioCaptureSampleRateMismatchDefinition = obj;

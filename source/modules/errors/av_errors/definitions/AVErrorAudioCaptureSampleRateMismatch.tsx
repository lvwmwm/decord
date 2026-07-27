// Module ID: 16610
// Function ID: 129537
// Name: AVErrorAudioCaptureSampleRateMismatchDefinition
// Dependencies: [4216, 4178, 4203, 664, 8784, 16598, 2]

// Module 16610 (AVErrorAudioCaptureSampleRateMismatchDefinition)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";

const require = arg1;
let closure_5 = 10 * require("set").Millis.SECOND;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorAudioCaptureSampleRateMismatch.tsx");

export const AVErrorAudioCaptureSampleRateMismatchDefinition = {
  getActiveErrors() {
    const rTCConnection = store.getRTCConnection();
    let durationSeconds;
    if (null != rTCConnection) {
      durationSeconds = rTCConnection.getDurationSeconds();
    }
    let num = 0;
    if (null != durationSeconds) {
      num = durationSeconds;
    }
    if (num >= 30) {
      const _performance = performance;
      if (nowResult - lastAudioInputDeviceChangeTimestamp.getLastAudioInputDeviceChangeTimestamp() >= closure_5) {
        const rTCConnection1 = store.getRTCConnection();
        let mediaEngineConnectionId;
        if (null != rTCConnection1) {
          mediaEngineConnectionId = rTCConnection1.getMediaEngineConnectionId();
        }
        connectionStats = connectionStats.getConnectionStats(mediaEngineConnectionId);
        let prop;
        if (null != connectionStats) {
          const outbound = connectionStats.stats.rtp.outbound;
          const found = outbound.find((type) => "audio" === type.type);
          if (null != found) {
            prop = found.sampleRateMismatchPercent;
          }
        }
        let num2 = 0;
        if (null != prop) {
          num2 = prop;
        }
        const _Math = Math;
        let tmp7;
        if (Math.abs(num2) > 30) {
          const obj = { type: require(8784) /* validateUniqueErrorCodes */.AVError.AUDIO_CAPTURE_SAMPLE_RATE_MISMATCH, audioCaptureSampleRateMismatchPercent: num2 };
          const merged = Object.assign(require(16598) /* getCommonErrorContext */.getVoiceChannelErrorContext());
          const items = [obj];
          tmp7 = items;
          const obj3 = require(16598) /* getCommonErrorContext */;
        }
        return tmp7;
      }
      nowResult = performance.now();
    }
  },
  makeErrorContextKey(mediaSessionId) {
    return "" + mediaSessionId.mediaSessionId + ":" + mediaSessionId.audioInputDeviceName;
  }
};

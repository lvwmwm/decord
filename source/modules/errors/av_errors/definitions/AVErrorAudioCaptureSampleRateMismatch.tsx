// Module ID: 16423
// Function ID: 126824
// Name: AVErrorAudioCaptureSampleRateMismatchDefinition
// Dependencies: []

// Module 16423 (AVErrorAudioCaptureSampleRateMismatchDefinition)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = 10 * importDefault(dependencyMap[3]).Millis.SECOND;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorAudioCaptureSampleRateMismatch.tsx");

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
        const connectionStats = connectionStats.getConnectionStats(mediaEngineConnectionId);
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
          const obj = { type: arg1(dependencyMap[4]).AVError.AUDIO_CAPTURE_SAMPLE_RATE_MISMATCH, audioCaptureSampleRateMismatchPercent: num2 };
          const merged = Object.assign(arg1(dependencyMap[5]).getVoiceChannelErrorContext());
          const items = [obj];
          tmp7 = items;
          const obj3 = arg1(dependencyMap[5]);
        }
        return tmp7;
      }
      const nowResult = performance.now();
    }
  },
  makeErrorContextKey(mediaSessionId) {
    return "" + mediaSessionId.mediaSessionId + ":" + mediaSessionId.audioInputDeviceName;
  }
};

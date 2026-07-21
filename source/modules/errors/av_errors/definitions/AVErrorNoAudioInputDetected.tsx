// Module ID: 16402
// Function ID: 126732
// Name: AVErrorNoAudioInputDetectedDefinition
// Dependencies: []

// Module 16402 (AVErrorNoAudioInputDetectedDefinition)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
({ InputModes: closure_5, RTCConnectionStates: closure_6 } = arg1(dependencyMap[3]));
const obj = {
  getActiveErrors(voiceState) {
    voiceState = voiceState.voiceState;
    const channel = channel.getChannel(voiceState.voiceChannelId);
    let isGuildStageVoiceResult;
    if (null != channel) {
      isGuildStageVoiceResult = channel.isGuildStageVoice();
    }
    if (isGuildStageVoiceResult) {
      let suppress;
      if (null != voiceState) {
        suppress = voiceState.suppress;
      }
      isGuildStageVoiceResult = suppress;
    }
    if (null != channel) {
      if (null != store2.getMediaSessionId()) {
        if (!store.getInputDetectedThisConnection()) {
          if (store2.getState() === constants2.RTC_CONNECTED) {
            if (store.getSettings().mode === constants.VOICE_ACTIVITY) {
              if (store.getSettings().silenceWarning) {
                if (false === store.getInputDetected()) {
                  if (!isGuildStageVoiceResult) {
                    if (!store.isSelfMute()) {
                      const obj = { type: arg1(dependencyMap[4]).AVError.NO_AUDIO_INPUT_DETECTED };
                      const merged = Object.assign(arg1(dependencyMap[5]).getVoiceChannelErrorContext());
                      const items = [obj];
                      return items;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  makeErrorContextKey(mediaSessionId) {
    return "" + mediaSessionId.mediaSessionId + ":" + mediaSessionId.audioInputDeviceName;
  }
};
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorNoAudioInputDetected.tsx");

export const AVErrorNoAudioInputDetectedDefinition = obj;

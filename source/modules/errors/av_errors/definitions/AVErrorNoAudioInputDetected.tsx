// Module ID: 16637
// Function ID: 129648
// Name: AVErrorNoAudioInputDetectedDefinition
// Dependencies: [1348, 4212, 4237, 653, 8828, 16638, 2]

// Module 16637 (AVErrorNoAudioInputDetectedDefinition)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import ME from "ME";

let closure_5;
let closure_6;
const require = arg1;
({ InputModes: closure_5, RTCConnectionStates: closure_6 } = ME);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorNoAudioInputDetected.tsx");

export const AVErrorNoAudioInputDetectedDefinition = {
  getActiveErrors(voiceState) {
    voiceState = voiceState.voiceState;
    channel = channel.getChannel(voiceState.voiceChannelId);
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
                      const obj = { type: require(8828) /* validateUniqueErrorCodes */.AVError.NO_AUDIO_INPUT_DETECTED };
                      const merged = Object.assign(require(16638) /* getCommonErrorContext */.getVoiceChannelErrorContext());
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

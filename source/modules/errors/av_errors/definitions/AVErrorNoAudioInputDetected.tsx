// Module ID: 17753
// Function ID: 17754
// Name: AVErrorNoAudioInputDetectedDefinition
// Dependencies: [1386, 4532, 4557, 673, 9039, 17754, 2]

// Module 17753 (AVErrorNoAudioInputDetectedDefinition)
import mapped from "mapped" /* 9039 */;
import getVoiceChannelErrorContext from "getVoiceChannelErrorContext" /* 17754 */;
import closure_2 from "ensureGuildLoaded" /* 1386 */;
import closure_3 from "_detectH265HardwareDecode" /* 4532 */;
import closure_4 from "createRTCConnection" /* 4557 */;
import ME from "ME" /* 673 */;

require = arg1;
({ InputModes: c5, RTCConnectionStates: closure_6 } = ME);
const result = require("set").fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorNoAudioInputDetected.tsx");

export const AVErrorNoAudioInputDetectedDefinition = {
  getActiveErrors(voiceState) {
    voiceState = voiceState.voiceState;
    channel = channel.getChannel(voiceState.voiceChannelId);
    let isGuildStageVoiceResult;
    if (channel != null) {
      isGuildStageVoiceResult = channel.isGuildStageVoice();
    }
    if (isGuildStageVoiceResult) {
      let suppress;
      if (voiceState != null) {
        suppress = voiceState.suppress;
      }
      isGuildStageVoiceResult = suppress;
    }
    if (null != channel) {
      if (null != mediaSessionId.getMediaSessionId()) {
        if (!inputDetectedThisConnection.getInputDetectedThisConnection()) {
          if (mediaSessionId.getState() === constants2.RTC_CONNECTED) {
            if (obj5.getSettings().mode === constants.VOICE_ACTIVITY) {
              if (obj5.getSettings().silenceWarning) {
                if (false === obj5.getInputDetected()) {
                  if (!isGuildStageVoiceResult) {
                    if (!obj5.isSelfMute()) {
                      const obj = { type: null };
                      obj[0] = mapped.AVError.NO_AUDIO_INPUT_DETECTED;
                      const merged = Object.assign(getVoiceChannelErrorContext.getVoiceChannelErrorContext());
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

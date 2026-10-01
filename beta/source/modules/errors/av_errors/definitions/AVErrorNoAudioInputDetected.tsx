// Module ID: 17661
// Function ID: 17662
// Name: AVErrorNoAudioInputDetected
// Dependencies: [2045, 1993, 4859, 1074, 8875, 17662, 2]

// Module 17661 (AVErrorNoAudioInputDetected)
import AVError from "AVError" /* 8875 */;
import AVErrorContext from "AVErrorContext" /* 17662 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import MediaEngineStore from "MediaEngineStore" /* 1993 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4859 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
({ InputModes: hasOwnProperty, RTCConnectionStates: metroRequire } = Constants);
let obj = {
  getActiveErrors(voiceState) {
    voiceState = voiceState.voiceState;
    const channel = ChannelStore.getChannel(voiceState.voiceChannelId);
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
    const obj2 = RTCConnectionStore;
    if (null != channel) {
      if (null != RTCConnectionStore.getMediaSessionId()) {
        if (!MediaEngineStore.getInputDetectedThisConnection()) {
          if (obj2.getState() === metroRequire.RTC_CONNECTED) {
            if (MediaEngineStore.getSettings().mode === hasOwnProperty.VOICE_ACTIVITY) {
              if (MediaEngineStore.getSettings().silenceWarning) {
                if (false === MediaEngineStore.getInputDetected()) {
                  if (!isGuildStageVoiceResult) {
                    if (!MediaEngineStore.isSelfMute()) {
                      const obj = { type: AVError.AVError.NO_AUDIO_INPUT_DETECTED };
                      const obj4 = AVErrorContext;
                      const merged = Object.assign(obj4.getVoiceChannelErrorContext());
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
const result = size.fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorNoAudioInputDetected.tsx");

export const AVErrorNoAudioInputDetectedDefinition = obj;

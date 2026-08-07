// Module ID: 16836
// Function ID: 16837
// Name: AVErrorNoInputDevicesDefinition
// Dependencies: [1372, 4349, 4373, 9109, 16835, 2]

// Module 16836 (AVErrorNoInputDevicesDefinition)
import ensureGuildLoaded from "ensureGuildLoaded";
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import createRTCConnection from "createRTCConnection";

const require = arg1;
const result = require("createRTCConnection").fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorNoInputDevices.tsx");

export const AVErrorNoInputDevicesDefinition = {
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
    if (0 === Object.keys(inputDevices.getInputDevices()).length) {
      if (null != channel) {
        if (null != mediaSessionId.getMediaSessionId()) {
          if (!isGuildStageVoiceResult) {
            const obj = { type: null };
            obj[0] = require(9109) /* mapped */.AVError.NO_INPUT_DEVICES;
            const merged = Object.assign(require(16835) /* getVoiceChannelErrorContext */.getVoiceChannelErrorContext());
            const items = [obj];
            return items;
          }
        }
      }
    }
  },
  makeErrorContextKey(mediaSessionId) {
    return "" + mediaSessionId.mediaSessionId;
  }
};

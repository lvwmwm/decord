// Module ID: 17350
// Function ID: 17351
// Name: AVErrorNoInputDevicesDefinition
// Dependencies: [1391, 4497, 4520, 9504, 17349, 2]

// Module 17350 (AVErrorNoInputDevicesDefinition)
import mapped from "mapped" /* 9504 */;
import getVoiceChannelErrorContext from "getVoiceChannelErrorContext" /* 17349 */;
import closure_2 from "ensureGuildLoaded" /* 1391 */;
import closure_3 from "_detectH265HardwareDecode" /* 4497 */;
import closure_4 from "createRTCConnection" /* 4520 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorNoInputDevices.tsx");

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
            obj[0] = mapped.AVError.NO_INPUT_DEVICES;
            const merged = Object.assign(getVoiceChannelErrorContext.getVoiceChannelErrorContext());
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

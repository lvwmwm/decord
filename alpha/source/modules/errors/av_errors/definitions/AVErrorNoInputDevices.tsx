// Module ID: 20321
// Function ID: 20322
// Name: AVErrorNoInputDevices
// Dependencies: [4892, 2132, 5851, 6035, 20320, 2]

// Module 20321 (AVErrorNoInputDevices)
import AVError from "AVError" /* 6035 */;
import AVErrorContext from "AVErrorContext" /* 20320 */;
import ChannelStore from "ChannelStore" /* 4892 */;
import MediaEngineStore from "MediaEngineStore" /* 2132 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5851 */;
import size from "module_2" /* 2 */;

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
    if (0 === Object.keys(MediaEngineStore.getInputDevices()).length) {
      if (null != channel) {
        if (null != RTCConnectionStore.getMediaSessionId()) {
          if (!isGuildStageVoiceResult) {
            const obj = { type: AVError.AVError.NO_INPUT_DEVICES };
            const obj3 = AVErrorContext;
            const merged = Object.assign(obj3.getVoiceChannelErrorContext());
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
const result = size.fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorNoInputDevices.tsx");

export const AVErrorNoInputDevicesDefinition = obj;

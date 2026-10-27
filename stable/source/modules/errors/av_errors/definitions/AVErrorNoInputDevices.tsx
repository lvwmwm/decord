// Module ID: 19056
// Function ID: 19057
// Name: AVErrorNoInputDevices
// Dependencies: [2068, 2014, 5209, 5389, 19055, 2]

// Module 19056 (AVErrorNoInputDevices)
import AVError from "AVError" /* 5389 */;
import AVErrorContext from "AVErrorContext" /* 19055 */;
import ChannelStore from "ChannelStore" /* 2068 */;
import MediaEngineStore from "MediaEngineStore" /* 2014 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5209 */;
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

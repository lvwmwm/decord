// Module ID: 18307
// Function ID: 18308
// Name: AVErrorNoInputDevices
// Dependencies: [2045, 1996, 4813, 9713, 18306, 2]

// Module 18307 (AVErrorNoInputDevices)
import AVError from "AVError" /* 9713 */;
import AVErrorContext from "AVErrorContext" /* 18306 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import MediaEngineStore from "MediaEngineStore" /* 1996 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4813 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorNoInputDevices.tsx");

export const AVErrorNoInputDevicesDefinition = {
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
            const merged = Object.assign(AVErrorContext.getVoiceChannelErrorContext());
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

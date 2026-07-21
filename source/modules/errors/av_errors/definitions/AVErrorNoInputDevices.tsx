// Module ID: 16404
// Function ID: 126739
// Name: AVErrorNoInputDevicesDefinition
// Dependencies: []

// Module 16404 (AVErrorNoInputDevicesDefinition)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorNoInputDevices.tsx");

export const AVErrorNoInputDevicesDefinition = {
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
    if (0 === Object.keys(inputDevices.getInputDevices()).length) {
      if (null != channel) {
        if (null != mediaSessionId.getMediaSessionId()) {
          if (!isGuildStageVoiceResult) {
            const obj = { type: arg1(dependencyMap[3]).AVError.NO_INPUT_DEVICES };
            const merged = Object.assign(arg1(dependencyMap[4]).getVoiceChannelErrorContext());
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

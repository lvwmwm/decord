// Module ID: 12239
// Function ID: 93901
// Name: maybeOpenSpoilerGateForVoiceChannel
// Dependencies: []
// Exports: maybeOpenSpoilerGateForVoiceChannel

// Module 12239 (maybeOpenSpoilerGateForVoiceChannel)
let closure_3 = importDefault(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/spoiler_channels/maybeOpenSpoilerGateForVoiceChannel.native.tsx");

export const maybeOpenSpoilerGateForVoiceChannel = function maybeOpenSpoilerGateForVoiceChannel(id) {
  const channel = channel.getChannel(id);
  let tmp2 = null == channel;
  if (!tmp2) {
    let obj = arg1(dependencyMap[2]);
    tmp2 = !obj.shouldShowSpoilerGateForChannelId(id);
  }
  let flag = !tmp2;
  if (!tmp2) {
    obj = { channelId: channel.id };
    arg1(dependencyMap[3]).openAlert(arg1(dependencyMap[4]).VOICE_PANEL_SPOILER_KEY, jsx(importDefault(dependencyMap[4]), obj));
    flag = true;
    const obj2 = arg1(dependencyMap[3]);
  }
  return flag;
};

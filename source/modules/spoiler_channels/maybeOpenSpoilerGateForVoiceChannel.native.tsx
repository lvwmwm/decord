// Module ID: 12400
// Function ID: 96276
// Name: maybeOpenSpoilerGateForVoiceChannel
// Dependencies: [1348, 33, 7704, 4507, 12401, 2]
// Exports: maybeOpenSpoilerGateForVoiceChannel

// Module 12400 (maybeOpenSpoilerGateForVoiceChannel)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("getSpoilerGatingChannelId").fileFinishedImporting("modules/spoiler_channels/maybeOpenSpoilerGateForVoiceChannel.native.tsx");

export const maybeOpenSpoilerGateForVoiceChannel = function maybeOpenSpoilerGateForVoiceChannel(closure_0) {
  channel = channel.getChannel(closure_0);
  let tmp2 = null == channel;
  if (!tmp2) {
    let obj = require(7704) /* getSpoilerGatingChannelId */;
    tmp2 = !obj.shouldShowSpoilerGateForChannelId(closure_0);
  }
  let flag = !tmp2;
  if (!tmp2) {
    obj = { channelId: channel.id };
    require(4507) /* useAlertStore */.openAlert(require(12401) /* VoicePanelSpoilerAlert */.VOICE_PANEL_SPOILER_KEY, jsx(importDefault(12401), { channelId: channel.id }));
    flag = true;
    const obj2 = require(4507) /* useAlertStore */;
  }
  return flag;
};

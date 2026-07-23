// Module ID: 12353
// Function ID: 96052
// Name: maybeOpenSpoilerGateForVoiceChannel
// Dependencies: [1348, 33, 5723, 4472, 12354, 2]
// Exports: maybeOpenSpoilerGateForVoiceChannel

// Module 12353 (maybeOpenSpoilerGateForVoiceChannel)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("getSpoilerGatingChannelId").fileFinishedImporting("modules/spoiler_channels/maybeOpenSpoilerGateForVoiceChannel.native.tsx");

export const maybeOpenSpoilerGateForVoiceChannel = function maybeOpenSpoilerGateForVoiceChannel(closure_0) {
  channel = channel.getChannel(closure_0);
  let tmp2 = null == channel;
  if (!tmp2) {
    let obj = require(5723) /* getSpoilerGatingChannelId */;
    tmp2 = !obj.shouldShowSpoilerGateForChannelId(closure_0);
  }
  let flag = !tmp2;
  if (!tmp2) {
    obj = { channelId: channel.id };
    require(4472) /* useAlertStore */.openAlert(require(12354) /* VoicePanelSpoilerAlert */.VOICE_PANEL_SPOILER_KEY, jsx(importDefault(12354), { channelId: channel.id }));
    flag = true;
    const obj2 = require(4472) /* useAlertStore */;
  }
  return flag;
};

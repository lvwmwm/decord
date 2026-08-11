// Module ID: 12673
// Function ID: 12674
// Name: maybeOpenSpoilerGateForVoiceChannel
// Dependencies: [1391, 21, 5946, 4644, 12674, 2]
// Exports: maybeOpenSpoilerGateForVoiceChannel

// Module 12673 (maybeOpenSpoilerGateForVoiceChannel)
import ensureGuildLoaded from "ensureGuildLoaded";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("isChannelSpoilerGated").fileFinishedImporting("modules/spoiler_channels/maybeOpenSpoilerGateForVoiceChannel.native.tsx");

export const maybeOpenSpoilerGateForVoiceChannel = function maybeOpenSpoilerGateForVoiceChannel(id) {
  channel = channel.getChannel(id);
  let tmp2 = null == channel;
  if (!tmp2) {
    let obj = require(5946) /* isChannelSpoilerGated */;
    tmp2 = !obj.shouldShowSpoilerGateForChannelId(id);
  }
  let flag = !tmp2;
  if (!tmp2) {
    obj = { channelId: null };
    obj[0] = channel.id;
    require(4644) /* useAlertStore */.openAlert(require(12674) /* VoicePanelSpoilerAlert */.VOICE_PANEL_SPOILER_KEY, jsx(importDefault(12674), { channelId: null }));
    flag = true;
    const obj2 = require(4644) /* useAlertStore */;
  }
  return flag;
};

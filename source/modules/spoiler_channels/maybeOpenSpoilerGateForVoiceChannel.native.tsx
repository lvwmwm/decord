// Module ID: 12597
// Function ID: 12598
// Name: maybeOpenSpoilerGateForVoiceChannel
// Dependencies: [1372, 21, 5884, 4642, 12598, 2]
// Exports: maybeOpenSpoilerGateForVoiceChannel

// Module 12597 (maybeOpenSpoilerGateForVoiceChannel)
import ensureGuildLoaded from "ensureGuildLoaded";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("isChannelSpoilerGated").fileFinishedImporting("modules/spoiler_channels/maybeOpenSpoilerGateForVoiceChannel.native.tsx");

export const maybeOpenSpoilerGateForVoiceChannel = function maybeOpenSpoilerGateForVoiceChannel(id) {
  channel = channel.getChannel(id);
  let tmp2 = null == channel;
  if (!tmp2) {
    let obj = require(5884) /* isChannelSpoilerGated */;
    tmp2 = !obj.shouldShowSpoilerGateForChannelId(id);
  }
  let flag = !tmp2;
  if (!tmp2) {
    obj = { channelId: null };
    obj[0] = channel.id;
    require(4642) /* useAlertStore */.openAlert(require(12598) /* VoicePanelSpoilerAlert */.VOICE_PANEL_SPOILER_KEY, jsx(importDefault(12598), { channelId: null }));
    flag = true;
    const obj2 = require(4642) /* useAlertStore */;
  }
  return flag;
};

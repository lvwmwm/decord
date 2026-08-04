// Module ID: 12574
// Function ID: 12575
// Name: maybeOpenSpoilerGateForVoiceChannel
// Dependencies: [1372, 21, 5853, 4625, 12575, 2]
// Exports: maybeOpenSpoilerGateForVoiceChannel

// Module 12574 (maybeOpenSpoilerGateForVoiceChannel)
import ensureGuildLoaded from "ensureGuildLoaded";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("isChannelSpoilerGated").fileFinishedImporting("modules/spoiler_channels/maybeOpenSpoilerGateForVoiceChannel.native.tsx");

export const maybeOpenSpoilerGateForVoiceChannel = function maybeOpenSpoilerGateForVoiceChannel(id) {
  channel = channel.getChannel(id);
  let tmp2 = null == channel;
  if (!tmp2) {
    let obj = require(5853) /* isChannelSpoilerGated */;
    tmp2 = !obj.shouldShowSpoilerGateForChannelId(id);
  }
  let flag = !tmp2;
  if (!tmp2) {
    obj = { channelId: null };
    obj[0] = channel.id;
    require(4625) /* useAlertStore */.openAlert(require(12575) /* VoicePanelSpoilerAlert */.VOICE_PANEL_SPOILER_KEY, jsx(importDefault(12575), { channelId: null }));
    flag = true;
    const obj2 = require(4625) /* useAlertStore */;
  }
  return flag;
};

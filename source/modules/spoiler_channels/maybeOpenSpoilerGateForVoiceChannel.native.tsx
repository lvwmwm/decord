// Module ID: 12829
// Function ID: 12830
// Name: maybeOpenSpoilerGateForVoiceChannel
// Dependencies: [1391, 21, 5267, 4657, 12830, 2]
// Exports: maybeOpenSpoilerGateForVoiceChannel

// Module 12829 (maybeOpenSpoilerGateForVoiceChannel)
import ensureGuildLoaded from "ensureGuildLoaded";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("isChannelSpoilerGated").fileFinishedImporting("modules/spoiler_channels/maybeOpenSpoilerGateForVoiceChannel.native.tsx");

export const maybeOpenSpoilerGateForVoiceChannel = function maybeOpenSpoilerGateForVoiceChannel(id) {
  channel = channel.getChannel(id);
  let tmp2 = null == channel;
  if (!tmp2) {
    let obj = require(5267) /* isChannelSpoilerGated */;
    tmp2 = !obj.shouldShowSpoilerGateForChannelId(id);
  }
  let flag = !tmp2;
  if (!tmp2) {
    obj = { channelId: null };
    obj[0] = channel.id;
    require(4657) /* useAlertStore */.openAlert(require(12830) /* VoicePanelSpoilerAlert */.VOICE_PANEL_SPOILER_KEY, jsx(importDefault(12830), { channelId: null }));
    flag = true;
    const obj2 = require(4657) /* useAlertStore */;
  }
  return flag;
};

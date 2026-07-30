// Module ID: 12416
// Function ID: 12417
// Name: maybeOpenSpoilerGateForVoiceChannel
// Dependencies: [1372, 21, 7724, 4530, 12417, 2]
// Exports: maybeOpenSpoilerGateForVoiceChannel

// Module 12416 (maybeOpenSpoilerGateForVoiceChannel)
import ensureGuildLoaded from "ensureGuildLoaded";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("isChannelSpoilerGated").fileFinishedImporting("modules/spoiler_channels/maybeOpenSpoilerGateForVoiceChannel.native.tsx");

export const maybeOpenSpoilerGateForVoiceChannel = function maybeOpenSpoilerGateForVoiceChannel(id) {
  channel = channel.getChannel(id);
  let tmp2 = null == channel;
  if (!tmp2) {
    let obj = require(7724) /* isChannelSpoilerGated */;
    tmp2 = !obj.shouldShowSpoilerGateForChannelId(id);
  }
  let flag = !tmp2;
  if (!tmp2) {
    obj = { channelId: null };
    obj[0] = channel.id;
    require(4530) /* useAlertStore */.openAlert(require(12417) /* VoicePanelSpoilerAlert */.VOICE_PANEL_SPOILER_KEY, jsx(importDefault(12417), { channelId: null }));
    flag = true;
    const obj2 = require(4530) /* useAlertStore */;
  }
  return flag;
};

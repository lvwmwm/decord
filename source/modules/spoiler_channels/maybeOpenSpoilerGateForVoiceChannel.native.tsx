// Module ID: 12545
// Function ID: 12546
// Name: maybeOpenSpoilerGateForVoiceChannel
// Dependencies: [1372, 21, 5838, 4595, 12546, 2]
// Exports: maybeOpenSpoilerGateForVoiceChannel

// Module 12545 (maybeOpenSpoilerGateForVoiceChannel)
import ensureGuildLoaded from "ensureGuildLoaded";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("isChannelSpoilerGated").fileFinishedImporting("modules/spoiler_channels/maybeOpenSpoilerGateForVoiceChannel.native.tsx");

export const maybeOpenSpoilerGateForVoiceChannel = function maybeOpenSpoilerGateForVoiceChannel(id) {
  channel = channel.getChannel(id);
  let tmp2 = null == channel;
  if (!tmp2) {
    let obj = require(5838) /* isChannelSpoilerGated */;
    tmp2 = !obj.shouldShowSpoilerGateForChannelId(id);
  }
  let flag = !tmp2;
  if (!tmp2) {
    obj = { channelId: null };
    obj[0] = channel.id;
    require(4595) /* useAlertStore */.openAlert(require(12546) /* VoicePanelSpoilerAlert */.VOICE_PANEL_SPOILER_KEY, jsx(importDefault(12546), { channelId: null }));
    flag = true;
    const obj2 = require(4595) /* useAlertStore */;
  }
  return flag;
};

// Module ID: 12733
// Function ID: 12734
// Name: maybeOpenSpoilerGateForVoiceChannel
// Dependencies: [1391, 21, 5987, 4685, 12734, 2]
// Exports: maybeOpenSpoilerGateForVoiceChannel

// Module 12733 (maybeOpenSpoilerGateForVoiceChannel)
import ensureGuildLoaded from "ensureGuildLoaded";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("isChannelSpoilerGated").fileFinishedImporting("modules/spoiler_channels/maybeOpenSpoilerGateForVoiceChannel.native.tsx");

export const maybeOpenSpoilerGateForVoiceChannel = function maybeOpenSpoilerGateForVoiceChannel(id) {
  channel = channel.getChannel(id);
  let tmp2 = null == channel;
  if (!tmp2) {
    let obj = require(5987) /* isChannelSpoilerGated */;
    tmp2 = !obj.shouldShowSpoilerGateForChannelId(id);
  }
  let flag = !tmp2;
  if (!tmp2) {
    obj = { channelId: null };
    obj[0] = channel.id;
    require(4685) /* useAlertStore */.openAlert(require(12734) /* VoicePanelSpoilerAlert */.VOICE_PANEL_SPOILER_KEY, jsx(importDefault(12734), { channelId: null }));
    flag = true;
    const obj2 = require(4685) /* useAlertStore */;
  }
  return flag;
};

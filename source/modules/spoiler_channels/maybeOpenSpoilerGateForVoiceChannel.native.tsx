// Module ID: 12864
// Function ID: 12865
// Name: maybeOpenSpoilerGateForVoiceChannel
// Dependencies: [1386, 21, 7267, 4867, 12865, 2]
// Exports: maybeOpenSpoilerGateForVoiceChannel

// Module 12864 (maybeOpenSpoilerGateForVoiceChannel)
import useAlertStore from "useAlertStore" /* 4867 */;
import isChannelSpoilerGated from "isChannelSpoilerGated" /* 7267 */;
import VoicePanelSpoilerAlert from "VoicePanelSpoilerAlert" /* 12865 */;
import VoicePanelSpoilerAlertDefault from "VoicePanelSpoilerAlert" /* 12865 */;
import closure_3 from "ensureGuildLoaded" /* 1386 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/spoiler_channels/maybeOpenSpoilerGateForVoiceChannel.native.tsx");

export const maybeOpenSpoilerGateForVoiceChannel = function maybeOpenSpoilerGateForVoiceChannel(id) {
  channel = channel.getChannel(id);
  let tmp2 = null == channel;
  if (!tmp2) {
    let obj = isChannelSpoilerGated;
    tmp2 = !obj.shouldShowSpoilerGateForChannelId(id);
  }
  let flag = !tmp2;
  if (!tmp2) {
    obj = { channelId: null };
    obj[0] = channel.id;
    useAlertStore.openAlert(VoicePanelSpoilerAlert.VOICE_PANEL_SPOILER_KEY, jsx(VoicePanelSpoilerAlertDefault, { channelId: null }));
    flag = true;
    const obj2 = useAlertStore;
  }
  return flag;
};

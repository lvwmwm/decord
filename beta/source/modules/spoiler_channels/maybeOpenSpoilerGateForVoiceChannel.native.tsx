// Module ID: 13228
// Function ID: 13229
// Name: maybeOpenSpoilerGateForVoiceChannel
// Dependencies: [2045, 21, 7573, 5112, 13229, 2]
// Exports: maybeOpenSpoilerGateForVoiceChannel

// Module 13228 (maybeOpenSpoilerGateForVoiceChannel)
import useAlertStore from "useAlertStore" /* 5112 */;
import SpoilerChannelUtils from "SpoilerChannelUtils" /* 7573 */;
import VoicePanelSpoilerAlert from "VoicePanelSpoilerAlert" /* 13229 */;
import ChannelStore from "ChannelStore" /* 2045 */;

const VoicePanelSpoilerAlertDefault = VoicePanelSpoilerAlert;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/spoiler_channels/maybeOpenSpoilerGateForVoiceChannel.native.tsx");

export const maybeOpenSpoilerGateForVoiceChannel = function maybeOpenSpoilerGateForVoiceChannel(id) {
  const channel = ChannelStore.getChannel(id);
  let tmp2 = null == channel;
  if (!tmp2) {
    tmp2 = !SpoilerChannelUtils.shouldShowSpoilerGateForChannelId(id);
  }
  let flag = !tmp2;
  if (!tmp2) {
    const obj3 = { channelId: channel.id };
    useAlertStore.openAlert(VoicePanelSpoilerAlert.VOICE_PANEL_SPOILER_KEY, jsx(VoicePanelSpoilerAlertDefault, { channelId: channel.id }));
    flag = true;
  }
  return flag;
};

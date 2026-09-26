// Module ID: 13254
// Function ID: 13255
// Name: maybeOpenSpoilerGateForVoiceChannel
// Dependencies: [2041, 21, 7603, 5142, 13255, 2]
// Exports: maybeOpenSpoilerGateForVoiceChannel

// Module 13254 (maybeOpenSpoilerGateForVoiceChannel)
import useAlertStore from "useAlertStore" /* 5142 */;
import SpoilerChannelUtils from "SpoilerChannelUtils" /* 7603 */;
import VoicePanelSpoilerAlert from "VoicePanelSpoilerAlert" /* 13255 */;
import ChannelStore from "ChannelStore" /* 2041 */;

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

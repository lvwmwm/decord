// Module ID: 13066
// Function ID: 13067
// Name: maybeOpenSpoilerGateForVoiceChannel
// Dependencies: [1957, 21, 7432, 4982, 13067, 2]
// Exports: maybeOpenSpoilerGateForVoiceChannel

// Module 13066 (maybeOpenSpoilerGateForVoiceChannel)
import useAlertStore from "useAlertStore" /* 4982 */;
import SpoilerChannelUtils from "SpoilerChannelUtils" /* 7432 */;
import VoicePanelSpoilerAlert from "VoicePanelSpoilerAlert" /* 13067 */;
import ChannelStore from "ChannelStore" /* 1957 */;

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

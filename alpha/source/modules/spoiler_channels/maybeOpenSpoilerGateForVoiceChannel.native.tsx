// Module ID: 14137
// Function ID: 14138
// Name: maybeOpenSpoilerGateForVoiceChannel
// Dependencies: [4821, 21, 6667, 5896, 14138, 2]
// Exports: maybeOpenSpoilerGateForVoiceChannel

// Module 14137 (maybeOpenSpoilerGateForVoiceChannel)
import Fragment from "Fragment" /* 21 */;
import useAlertStore from "useAlertStore" /* 5896 */;
import SpoilerChannelUtils from "SpoilerChannelUtils" /* 6667 */;
import VoicePanelSpoilerAlert from "VoicePanelSpoilerAlert" /* 14138 */;
import ChannelStore from "ChannelStore" /* 4821 */;
import size from "module_2" /* 2 */;

const VoicePanelSpoilerAlertDefault = VoicePanelSpoilerAlert;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/spoiler_channels/maybeOpenSpoilerGateForVoiceChannel.native.tsx");

export const maybeOpenSpoilerGateForVoiceChannel = function maybeOpenSpoilerGateForVoiceChannel(id) {
  const channel = ChannelStore.getChannel(id);
  let tmp2 = null == channel;
  if (!tmp2) {
    const obj = SpoilerChannelUtils;
    tmp2 = !obj.shouldShowSpoilerGateForChannelId(id);
  }
  let flag = !tmp2;
  if (flag) {
    const openAlert = useAlertStore.openAlert;
    useAlertStore;
    openAlert(VoicePanelSpoilerAlert.VOICE_PANEL_SPOILER_KEY, jsx(VoicePanelSpoilerAlertDefault, { channelId: channel.id }));
    flag = true;
  }
  return flag;
};

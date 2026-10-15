// Module ID: 13848
// Function ID: 13849
// Name: maybeOpenSpoilerGateForVoiceChannel
// Dependencies: [2065, 21, 6160, 5361, 13849, 2]
// Exports: maybeOpenSpoilerGateForVoiceChannel

// Module 13848 (maybeOpenSpoilerGateForVoiceChannel)
import Fragment from "Fragment" /* 21 */;
import useAlertStore from "useAlertStore" /* 5361 */;
import SpoilerChannelUtils from "SpoilerChannelUtils" /* 6160 */;
import VoicePanelSpoilerAlert from "VoicePanelSpoilerAlert" /* 13849 */;
import ChannelStore from "ChannelStore" /* 2065 */;
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

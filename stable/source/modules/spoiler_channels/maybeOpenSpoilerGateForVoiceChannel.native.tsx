// Module ID: 14217
// Function ID: 14218
// Name: maybeOpenSpoilerGateForVoiceChannel
// Dependencies: [4855, 21, 6714, 5942, 14218, 2]
// Exports: maybeOpenSpoilerGateForVoiceChannel

// Module 14217 (maybeOpenSpoilerGateForVoiceChannel)
import Fragment from "Fragment" /* 21 */;
import useAlertStore from "useAlertStore" /* 5942 */;
import SpoilerChannelUtils from "SpoilerChannelUtils" /* 6714 */;
import VoicePanelSpoilerAlert from "VoicePanelSpoilerAlert" /* 14218 */;
import ChannelStore from "ChannelStore" /* 4855 */;
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

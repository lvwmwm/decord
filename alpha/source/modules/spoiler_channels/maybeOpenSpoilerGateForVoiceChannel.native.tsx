// Module ID: 13959
// Function ID: 13960
// Name: maybeOpenSpoilerGateForVoiceChannel
// Dependencies: [2068, 21, 6200, 5401, 13960, 2]
// Exports: maybeOpenSpoilerGateForVoiceChannel

// Module 13959 (maybeOpenSpoilerGateForVoiceChannel)
import Fragment from "Fragment" /* 21 */;
import useAlertStore from "useAlertStore" /* 5401 */;
import SpoilerChannelUtils from "SpoilerChannelUtils" /* 6200 */;
import VoicePanelSpoilerAlert from "VoicePanelSpoilerAlert" /* 13960 */;
import ChannelStore from "ChannelStore" /* 2068 */;
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

// Module ID: 12898
// Function ID: 12899
// Name: maybeOpenSpoilerGateForVoiceChannel
// Dependencies: [2063, 21, 5949, 5299, 12899, 2]
// Exports: maybeOpenSpoilerGateForVoiceChannel

// Module 12898 (maybeOpenSpoilerGateForVoiceChannel)
import Fragment from "Fragment" /* 21 */;
import useAlertStore from "useAlertStore" /* 5299 */;
import SpoilerChannelUtils from "SpoilerChannelUtils" /* 5949 */;
import VoicePanelSpoilerAlert from "VoicePanelSpoilerAlert" /* 12899 */;
import ChannelStore from "ChannelStore" /* 2063 */;
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

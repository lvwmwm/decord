// Module ID: 14670
// Function ID: 14671
// Name: maybeOpenSpoilerGateForVoiceChannel
// Dependencies: [4857, 21, 6740, 5948, 14671, 2]
// Exports: maybeOpenSpoilerGateForVoiceChannel

// Module 14670 (maybeOpenSpoilerGateForVoiceChannel)
import Fragment from "Fragment" /* 21 */;
import useAlertStore from "useAlertStore" /* 5948 */;
import SpoilerChannelUtils from "SpoilerChannelUtils" /* 6740 */;
import VoicePanelSpoilerAlert from "VoicePanelSpoilerAlert" /* 14671 */;
import ChannelStore from "ChannelStore" /* 4857 */;
import size from "module_2" /* 2 */;

const VoicePanelSpoilerAlertDefault = VoicePanelSpoilerAlert;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/spoiler_channels/maybeOpenSpoilerGateForVoiceChannel.native.tsx");

export function maybeOpenSpoilerGateForVoiceChannel(id) {
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
}

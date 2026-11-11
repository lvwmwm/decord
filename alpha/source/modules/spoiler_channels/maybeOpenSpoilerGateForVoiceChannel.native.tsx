// Module ID: 15821
// Function ID: 15822
// Name: maybeOpenSpoilerGateForVoiceChannel
// Dependencies: [5092, 21, 6795, 6207, 15822, 2]
// Exports: maybeOpenSpoilerGateForVoiceChannel

// Module 15821 (maybeOpenSpoilerGateForVoiceChannel)
import Fragment from "Fragment" /* 21 */;
import useAlertStore from "useAlertStore" /* 6207 */;
import SpoilerChannelUtils from "SpoilerChannelUtils" /* 6795 */;
import VoicePanelSpoilerAlert from "VoicePanelSpoilerAlert" /* 15822 */;
import ChannelStore from "ChannelStore" /* 5092 */;
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

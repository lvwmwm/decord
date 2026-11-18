// Module ID: 14617
// Function ID: 14618
// Name: maybeOpenSpoilerGateForVoiceChannel
// Dependencies: [4672, 21, 6347, 5770, 14618, 2]
// Exports: maybeOpenSpoilerGateForVoiceChannel

// Module 14617 (maybeOpenSpoilerGateForVoiceChannel)
import Fragment from "Fragment" /* 21 */;
import useAlertStore from "useAlertStore" /* 5770 */;
import SpoilerChannelUtils from "SpoilerChannelUtils" /* 6347 */;
import VoicePanelSpoilerAlert from "VoicePanelSpoilerAlert" /* 14618 */;
import ChannelStore from "ChannelStore" /* 4672 */;
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

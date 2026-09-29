// Module ID: 17659
// Function ID: 17660
// Name: VoicePanelMaxCapacityAlert
// Dependencies: [19, 2041, 21, 563, 5146, 5146, 17657, 1115, 2]
// Exports: default

// Module 17659 (VoicePanelMaxCapacityAlert)
import VoicePanelLockedIconDefault from "VoicePanelLockedIcon" /* 17657 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2041 */;

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/alerts/VoicePanelMaxCapacityAlert.tsx");

export default function VoicePanelMaxCapacityAlert(channelId) {
  channelId = channelId.channelId;
  const items = [ChannelStore];
  const items1 = [channelId];
  const stateFromStores = channelId(563).useStateFromStores(items, () => {
    const channel = ChannelStore.getChannel(channelId);
    let num;
    if (channel != null) {
      num = channel.userLimit;
    }
    if (num == null) {
      num = 0;
    }
    return num;
  }, items1);
  const obj = channelId(563);
  const obj2 = channelId(5146);
  const obj3 = { header: jsx(VoicePanelLockedIconDefault, {}), title: null, content: null, actions: null };
  const intl = channelId(1115).intl;
  obj3.title = intl.string(channelId(1115).t.hHbsQj);
  const intl2 = channelId(1115).intl;
  obj3.content = intl2.formatToPlainString(channelId(1115).t["387SQH"], { count: stateFromStores });
  const obj4 = { variant: "secondary", text: null, onPress: null };
  const intl3 = channelId(1115).intl;
  obj4.text = intl3.string(channelId(1115).t["NX+WJN"]);
  obj4.onPress = channelId(5146).useDismissModalCallback();
  obj3.actions = jsx(channelId(5146).AlertActionButton, { variant: "secondary", text: null, onPress: null });
  return jsx(channelId(5146).AlertModal, { header: jsx(VoicePanelLockedIconDefault, {}), title: null, content: null, actions: null });
};
export const VOICE_PANEL_MAX_CAPACITY_KEY = "voice-panel-max-capacity";

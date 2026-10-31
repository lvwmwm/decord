// Module ID: 19309
// Function ID: 19310
// Name: VoicePanelMaxCapacityAlert
// Dependencies: [19, 4863, 21, 563, 5964, 5964, 19307, 1113, 2]
// Exports: default

// Module 19309 (VoicePanelMaxCapacityAlert)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/voice_panel/native/alerts/VoicePanelMaxCapacityAlert.tsx");

export default function VoicePanelMaxCapacityAlert(channelId) {
  let intl3;
  channelId = channelId.channelId;
  const items = [ChannelStore];
  const items1 = [channelId];
  const obj = channelId(563);
  const stateFromStores = obj.useStateFromStores(items, () => {
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
  const obj2 = channelId(5964);
  const dismissModalCallback = obj2.useDismissModalCallback();
  const AlertModal = channelId(5964).AlertModal;
  const intl = channelId(1113).intl;
  const intl2 = channelId(1113).intl;
  ({ variant: "secondary", text: intl3.string(channelId(1113).t["NX+WJN"]), onPress: dismissModalCallback });
  const AlertActionButton = channelId(5964).AlertActionButton;
  intl3 = channelId(1113).intl;
  return <AlertModal header={null} title={intl.string(channelId(1113).t.hHbsQj)} content={intl2.formatToPlainString(channelId(1113).t["387SQH"], { count: stateFromStores })} actions={null} />;
};
export const VOICE_PANEL_MAX_CAPACITY_KEY = "voice-panel-max-capacity";

// Module ID: 19253
// Function ID: 19254
// Name: VoicePanelMaxCapacityAlert
// Dependencies: [19, 4858, 21, 563, 5959, 5959, 19251, 1114, 2]
// Exports: default

// Module 19253 (VoicePanelMaxCapacityAlert)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4858 */;
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
  const obj2 = channelId(5959);
  const dismissModalCallback = obj2.useDismissModalCallback();
  const AlertModal = channelId(5959).AlertModal;
  const intl = channelId(1114).intl;
  const intl2 = channelId(1114).intl;
  ({ variant: "secondary", text: intl3.string(channelId(1114).t["NX+WJN"]), onPress: dismissModalCallback });
  const AlertActionButton = channelId(5959).AlertActionButton;
  intl3 = channelId(1114).intl;
  return <AlertModal header={null} title={intl.string(channelId(1114).t.hHbsQj)} content={intl2.formatToPlainString(channelId(1114).t["387SQH"], { count: stateFromStores })} actions={null} />;
};
export const VOICE_PANEL_MAX_CAPACITY_KEY = "voice-panel-max-capacity";

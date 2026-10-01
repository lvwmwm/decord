// Module ID: 11696
// Function ID: 11697
// Name: ScheduledMessageCard
// Dependencies: [19, 17, 2045, 1074, 21, 4836, 576, 504, 1101, 5039, 5919, 11697, 5889, 11698, 9571, 4832, 1115, 7265, 11699, 11691, 11700, 2]

// Module 11696 (ScheduledMessageCard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import router_utils from "router_utils" /* 1101 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import ScheduledMessageUtils from "ScheduledMessageUtils" /* 7265 */;
import CalendarPlusIcon from "CalendarPlusIcon" /* 11691 */;
import ForLaterCardStatusHeader2 from "ForLaterCardStatusHeader" /* 11699 */;
import ScheduledMessageCardActionButtonsDefault from "ScheduledMessageCardActionButtons" /* 11700 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let obj2;
function ScheduledMessageCardStatusHeader(scheduledMessage) {
  let date;
  let isError;
  let stateMessage;
  scheduledMessage = scheduledMessage.scheduledMessage;
  const isPendingRemoval = scheduledMessage.isPendingRemoval;
  const obj = ScheduledMessageUtils;
  const messageForState = obj.getMessageForState(scheduledMessage.state);
  ({ isError, stateMessage } = messageForState);
  const obj2 = { IconComponent: CalendarPlusIcon.CalendarPlusIcon, label: stateMessage, isCritical: isError, lineClamp: 2, actions: metroImportDefault(ScheduledMessageCardActionButtonsDefault, { scheduledMessage, isPendingRemoval }) };
  const ForLaterCardStatusHeader = ForLaterCardStatusHeader2.ForLaterCardStatusHeader;
  if (!isError) {
    const intl = tmp(1115).intl;
    const formatToPlainString = intl.formatToPlainString;
    const _Date = Date;
    const self = this;
    const self2 = this;
    const obj3 = { timestamp: date.valueOf() };
    const ZN3tIx = tmp(1115).t.ZN3tIx;
    date = new Date(scheduledMessage.sendAtTimestamp);
    stateMessage = formatToPlainString(ZN3tIx, obj3);
  }
  return metroImportDefault(ForLaterCardStatusHeader, obj2);
}
const View = react_native.View;
const Routes = Constants.Routes;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { card: { gap: 16, marginBottom: 16 }, cardDivider: obj2, attachmentCount: { flexDirection: "row", alignItems: "center", gap: 4 }, pendingRemoval: { alignItems: "center", paddingVertical: 16 } };
obj2 = { marginHorizontal: -16, height: 1, alignSelf: "stretch", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
let closure_9 = createStyles.createStyles(obj);
const memoResult = react.memo(function ScheduledMessageCard(scheduledMessage) {
  let intl;
  let items1;
  let items2;
  let obj11;
  let tmp9Result;
  scheduledMessage = scheduledMessage.scheduledMessage;
  const isPendingRemoval = scheduledMessage.isPendingRemoval;
  const tmp = closure_9();
  const items = [ChannelStore];
  const obj = scheduledMessage(504);
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(scheduledMessage.createArgs.channelId));
  [][0] = stateFromStores;
  if (null == stateFromStores) {
    return null;
  } else {
    let tmp10Result;
    let obj2 = { variant: "primary", border: "subtle", shadow: "none", style: tmp.card, onPress: tmp5, children: items1 };
    const obj3 = { scheduledMessage, isPendingRemoval };
    const Card = tmp2(5919).Card;
    items1 = [closure_7(ScheduledMessageCardStatusHeader, obj3), , , ];
    const obj4 = { channel: stateFromStores, actions: null };
    items1[1] = closure_7(scheduledMessage(11697).ForLaterCardHeader, obj4);
    const obj5 = { style: tmp.cardDivider };
    items1[2] = closure_7(View, obj5);
    if (isPendingRemoval) {
      const obj6 = { style: tmp.pendingRemoval, children: closure_7(scheduledMessage(5889).ActivityIndicator, { size: "small" }) };
      tmp10Result = tmp10(tmp12, obj6);
    } else {
      const obj7 = { message: scheduledMessage.record, lineClamp: 10, maxHeight: 400, footer: tmp9Result };
      tmp9Result = undefined;
      const ForLaterMessageRow = tmp2(11698).ForLaterMessageRow;
      if (scheduledMessage.attachmentUploads.length > 0) {
        const obj8 = { style: tmp.attachmentCount, children: items2 };
        const obj9 = { size: "xxs", color: stateFromStores(576).colors.TEXT_MUTED };
        const AttachmentIcon = tmp2(9571).AttachmentIcon;
        items2 = [closure_7(AttachmentIcon, obj9), ];
        const obj10 = { variant: "text-sm/normal", color: "text-muted", children: intl.format(scheduledMessage(1115).t.ZJ1tPW, obj11) };
        const Text = tmp2(4832).Text;
        intl = tmp2(1115).intl;
        obj11 = { count: scheduledMessage.attachmentUploads.length };
        items2[1] = closure_7(Text, obj10);
        tmp9Result = tmp9(tmp12, obj8);
      }
      tmp10Result = tmp10(ForLaterMessageRow, obj7);
    }
    items1[3] = tmp10Result;
    return closure_8(Card, obj2);
  }
});
const result = size.fileFinishedImporting("modules/scheduled_messages/native/ScheduledMessageCard.tsx");

export default memoResult;

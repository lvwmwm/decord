// Module ID: 12496
// Function ID: 12497
// Name: ScheduledMessageCard
// Dependencies: [19, 17, 2041, 1074, 21, 4788, 576, 504, 1101, 4991, 5856, 12497, 5826, 12498, 10407, 4784, 1115, 8120, 12499, 12491, 12500, 2]

// Module 12496 (ScheduledMessageCard)
import nativeDefault from "native" /* 576 */;
import router_utils from "router_utils" /* 1101 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4991 */;
import ScheduledMessageUtils from "ScheduledMessageUtils" /* 8120 */;
import CalendarPlusIcon from "CalendarPlusIcon" /* 12491 */;
import ForLaterCardStatusHeader from "ForLaterCardStatusHeader" /* 12499 */;
import ScheduledMessageCardActionButtonsDefault from "ScheduledMessageCardActionButtons" /* 12500 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2041 */;

require = fn;
function ScheduledMessageCardStatusHeader(isPendingRemoval) {
  const scheduledMessage = isPendingRemoval.scheduledMessage;
  const messageForState = ScheduledMessageUtils.getMessageForState(scheduledMessage.state);
  ({ isError, stateMessage } = messageForState);
  const obj2 = { IconComponent: CalendarPlusIcon.CalendarPlusIcon, label: null, isCritical: null, lineClamp: 2, actions: null };
  if (!isError) {
    const intl = tmp(1115).intl;
    const obj3 = { timestamp: null };
    const _Date = Date;
    const date = new Date(scheduledMessage.sendAtTimestamp);
    obj3.timestamp = date.valueOf();
    stateMessage = intl.formatToPlainString(tmp(1115).t.ZN3tIx, obj3);
  }
  obj2.label = stateMessage;
  obj2.isCritical = isError;
  obj2.actions = React5(ScheduledMessageCardActionButtonsDefault, { scheduledMessage, isPendingRemoval: isPendingRemoval.isPendingRemoval });
  return React5(ForLaterCardStatusHeader.ForLaterCardStatusHeader, obj2);
}
const View = fn(17).View;
const Routes = fn(1074).Routes;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4788);
let obj = { card: { gap: 16, marginBottom: 16 }, cardDivider: { marginHorizontal: -16, height: 1, alignSelf: "stretch", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED }, attachmentCount: { flexDirection: "row", alignItems: "center", gap: 4 }, pendingRemoval: { alignItems: "center", paddingVertical: 16 } };
let closure_9 = createStyles.createStyles(obj);
let obj3 = { marginHorizontal: -16, height: 1, alignSelf: "stretch", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
const size = fn(2);
const result = size.fileFinishedImporting("modules/scheduled_messages/native/ScheduledMessageCard.tsx");

export default noop.memo(function ScheduledMessageCard(scheduledMessage) {
  scheduledMessage = scheduledMessage.scheduledMessage;
  const isPendingRemoval = scheduledMessage.isPendingRemoval;
  const tmp = closure_9();
  const items = [ChannelStore];
  const stateFromStores = scheduledMessage(504).useStateFromStores(items, () => ChannelStore.getChannel(scheduledMessage.createArgs.channelId));
  [][0] = stateFromStores;
  if (null == stateFromStores) {
    return null;
  } else {
    let obj2 = { variant: "primary", border: "subtle", shadow: "none", style: tmp.card, onPress: tmp5, children: null };
    const obj3 = { scheduledMessage, isPendingRemoval };
    const items1 = [closure_7(ScheduledMessageCardStatusHeader, obj3), , , ];
    const obj4 = { channel: stateFromStores, actions: null };
    items1[1] = closure_7(tmp2(12497).ForLaterCardHeader, obj4);
    const obj5 = { style: tmp.cardDivider };
    items1[2] = closure_7(View, obj5);
    if (isPendingRemoval) {
      const obj6 = { style: tmp.pendingRemoval, children: tmp10(tmp2(5826).ActivityIndicator, { size: "small" }) };
      let tmp10Result = tmp10(tmp12, obj6);
    } else {
      const obj7 = { message: scheduledMessage.record, lineClamp: 10, maxHeight: 400, footer: null };
      let tmp9Result;
      if (length > 0) {
        const obj8 = { style: tmp.attachmentCount, children: null };
        const obj9 = { size: "xxs", color: stateFromStores(576).colors.TEXT_MUTED };
        const items2 = [tmp10(tmp2(10407).AttachmentIcon, obj9), ];
        const obj10 = { variant: "text-sm/normal", color: "text-muted", children: null };
        const intl = tmp2(1115).intl;
        const obj11 = { count: length };
        obj10.children = intl.format(tmp2(1115).t.ZJ1tPW, obj11);
        items2[1] = tmp10(tmp2(4784).Text, obj10);
        obj8.children = items2;
        tmp9Result = tmp9(tmp12, obj8);
      }
      obj7.footer = tmp9Result;
      tmp10Result = tmp10(tmp2(12498).ForLaterMessageRow, obj7);
    }
    items1[3] = tmp10Result;
    obj2.children = items1;
    return closure_8(tmp2(5856).Card, obj2);
  }
  const obj = scheduledMessage(504);
});

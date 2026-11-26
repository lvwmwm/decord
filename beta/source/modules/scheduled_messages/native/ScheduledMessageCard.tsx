// Module ID: 14407
// Function ID: 14408
// Name: ScheduledMessageCard
// Dependencies: [19, 17, 4762, 1071, 21, 4913, 575, 504, 1098, 6429, 7047, 11710, 7020, 11711, 10109, 5504, 1112, 8540, 11709, 13087, 14408, 2]

// Module 14407 (ScheduledMessageCard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1071 */;
import router_utils from "router_utils" /* 1098 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6429 */;
import ScheduledMessageUtils from "ScheduledMessageUtils" /* 8540 */;
import ForLaterCardStatusHeader2 from "ForLaterCardStatusHeader" /* 11709 */;
import CalendarPlusIcon from "CalendarPlusIcon" /* 13087 */;
import ScheduledMessageCardActionButtonsDefault from "ScheduledMessageCardActionButtons" /* 14408 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4762 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4913 */;
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
    const intl = tmp(1112).intl;
    const formatToPlainString = intl.formatToPlainString;
    const _Date = Date;
    const self = this;
    const self2 = this;
    const obj3 = { timestamp: date.valueOf() };
    const ZN3tIx = tmp(1112).t.ZN3tIx;
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
    const Card = tmp2(7047).Card;
    items1 = [closure_7(ScheduledMessageCardStatusHeader, obj3), , , ];
    const obj4 = { channel: stateFromStores, actions: null };
    items1[1] = closure_7(scheduledMessage(11710).ForLaterCardHeader, obj4);
    const obj5 = { style: tmp.cardDivider };
    items1[2] = closure_7(View, obj5);
    if (isPendingRemoval) {
      const obj6 = { style: tmp.pendingRemoval, children: closure_7(scheduledMessage(7020).ActivityIndicator, { size: "small" }) };
      tmp10Result = tmp10(tmp12, obj6);
    } else {
      const obj7 = { message: scheduledMessage.record, lineClamp: 10, maxHeight: 400, footer: tmp9Result };
      tmp9Result = undefined;
      const ForLaterMessageRow = tmp2(11711).ForLaterMessageRow;
      if (scheduledMessage.attachmentUploads.length > 0) {
        const obj8 = { style: tmp.attachmentCount, children: items2 };
        const obj9 = { size: "xxs", color: stateFromStores(575).colors.TEXT_MUTED };
        const AttachmentIcon = tmp2(10109).AttachmentIcon;
        items2 = [closure_7(AttachmentIcon, obj9), ];
        const obj10 = { variant: "body-sm/normal", color: "text-muted", children: intl.format(scheduledMessage(1112).t.ZJ1tPW, obj11) };
        const Text = tmp2(5504).Text;
        intl = tmp2(1112).intl;
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

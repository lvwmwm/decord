// Module ID: 10860
// Function ID: 10861
// Name: ReminderNotification
// Dependencies: [19, 17, 2045, 2067, 9555, 1074, 21, 4836, 1177, 4795, 576, 9554, 9634, 504, 1095, 9632, 9566, 9568, 7304, 38, 1115, 5039, 7284, 7285, 1241, 9630, 2]

// Module 10860 (ReminderNotification)
import react_native from "react-native" /* 17 */;
import _modDef38 from "module_38" /* 38 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import native from "native" /* 1177 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import ClockIcon2 from "ClockIcon" /* 4795 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import showForLaterModal from "showForLaterModal" /* 7284 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 7285 */;
import InAppNotificationUtils from "InAppNotificationUtils" /* 9554 */;
import MessagePreviewTextDefault from "MessagePreviewText" /* 9566 */;
import MessageNotificationHeaderDefault from "MessageNotificationHeader" /* 9632 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildStore from "GuildStore" /* 2067 */;
import InAppNotificationConstants from "InAppNotificationConstants" /* 9555 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let RIGHT_ACCESSORY_LEFT_MARGIN;
let c10;
let closure_12;
let metroImportAll;
let metroImportDefault;
let tmp2;
let unpackModuleId;
const MediaPreviewRightAccessory = tmp2(9634);
function NotificationAvatar(arg0) {
  let ClockIcon;
  let guildId;
  let items;
  let obj4;
  let user;
  ({ user, guildId } = arg0);
  const tmp = closure_13();
  const obj = { style: tmp.avatarContainer, children: items };
  obj2 = { user, guildId, size: native.AvatarSizes.NORMAL, cutout: obj2 };
  const Avatar = native.Avatar;
  items = [authStore(Avatar, obj2), ];
  const obj3 = { style: tmp.cutoutIconContainer, children: authStore(ClockIcon, obj4) };
  obj4 = { size: "xs", color: nativeDefault.colors.ICON_SUBTLE };
  ClockIcon = ClockIcon2.ClockIcon;
  items[1] = authStore(View, obj3);
  return unpackModuleId(View, obj);
}
function NotificationBody(channel) {
  channel = channel.channel;
  const message = channel.message;
  const items = [GuildStore];
  const obj = channel(504);
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(channel.guild_id));
  const items1 = [ChannelStore];
  obj2 = channel(504);
  const stateFromStores1 = obj2.useStateFromStores(items1, () => ChannelStore.getChannel(channel.parent_id));
  const obj3 = channel(9554);
  const hasPreviewableMedia = obj3.useHasPreviewableMedia(message);
  const tmp6 = channel.type === channel(1095).ChannelTypes.DM;
  let num = 1;
  if (tmp6) {
    num = closure_8;
  }
  let tmp10 = null;
  const tmpResult = channel(9554);
  const messagePreviewTextVariant = tmpResult.getMessagePreviewTextVariant();
  const tmp8 = closure_11;
  const tmp9 = closure_12;
  if (!tmp6) {
    const obj4 = { channel, parentChannel: stateFromStores1, guild: stateFromStores, author: null };
    tmp10 = closure_10(MessageNotificationHeaderDefault, obj4);
  }
  const items2 = [tmp10, ];
  if (!hasPreviewableMedia) {
    let tmp14;
    if (null == message.poll) {
      const obj5 = { channel, message, color: "text-default", layout: channel(7304).ChannelListLayoutTypes.COZY, variant: messagePreviewTextVariant, muted: false, lineClamp: num };
      const ChannelRowPreview = tmp(9568).ChannelRowPreview;
      tmp14 = closure_10(ChannelRowPreview, obj5);
    }
    const obj6 = { children: items2 };
    items2[1] = tmp14;
    return tmp8(tmp9, obj6);
  }
  const obj7 = { message, lineClamp: num, showMessageAuthor: true, maxHeight };
  tmp14 = closure_10(MessagePreviewTextDefault, obj7);
}
const View = react_native.View;
({ IN_APP_NOTIFICATION_MAX_HEIGHT: metroImportDefault, NOTIFICATION_PREVIEW_LINE_CLAMP: metroImportAll, RIGHT_ACCESSORY_LEFT_MARGIN } = InAppNotificationConstants);
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = Fragment);
let obj = { cutoutIconContainer: { position: "absolute", right: 0, bottom: 0 }, avatarContainer: { position: "relative" }, rightAccessoryContainer: { marginLeft: RIGHT_ACCESSORY_LEFT_MARGIN } };
let closure_13 = createStyles.createStyles(obj);
let obj2 = { direction: native.CutoutDirection.BOTTOM_RIGHT, radius: 10, inset: -2 };
let closure_16 = react.memo((message) => {
  let obj3;
  message = message.message;
  let tmp4 = null;
  const tmp = closure_13();
  const obj = InAppNotificationUtils;
  if (obj.useHasPreviewableMedia(message)) {
    obj2 = { style: tmp.rightAccessoryContainer, children: authStore(MediaPreviewRightAccessory.MediaPreviewRightAccessory, obj3) };
    obj3 = { message };
    tmp4 = authStore(View, obj2);
  }
  return tmp4;
});
const memoResult = react.memo(function ReminderNotification(notification) {
  notification = notification.notification;
  const channel = notification.channel;
  const message = notification.savedMessage.message;
  const author = notification.author;
  _modDef38(null != message, "Message in a notification should not be null.");
  let obj = { user: author, guildId: channel.guild_id };
  const items = [notification];
  const tmp2 = closure_10(NotificationAvatar, obj);
  const memo = react.useMemo(() => {
    let intl;
    const obj = { type: "simple", text: intl.string(notification(dependencyMap[20]).t.Whs8tE) };
    intl = notification(dependencyMap[20]).intl;
    return obj;
  }, []);
  const callback = react.useCallback(() => {
    let author;
    let savedMessage;
    const obj = ModalActionCreatorsDefault;
    obj.popAll();
    obj2 = showForLaterModal;
    obj2.showForLaterModal(SavedMessagesTypes.SavedMessageSortTypes.REMINDER);
    ({ savedMessage, author } = notification);
    const obj3 = AnalyticsUtilsDefault;
    const obj4 = { message_id: savedMessage.saveData.messageId, message_author_id: author.id, notification_type: "IN_APP" };
    obj3.track(AnalyticEvents.FOR_LATER_REMINDER_NOTIFICATION_CLICKED, obj4);
  }, items);
  obj2 = { icon: tmp2, header: memo, onPress: callback, notification, rightAccessory: closure_10(closure_16, { message }), children: closure_10(NotificationBody, { channel, message }) };
  const NotificationPressable = notification(9630).NotificationPressable;
  return closure_10(NotificationPressable, obj2);
});
const result = size.fileFinishedImporting("modules/in_app_notifications/native/ReminderNotification.tsx");

export default memoResult;

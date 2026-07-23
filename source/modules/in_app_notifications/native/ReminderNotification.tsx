// Module ID: 10354
// Function ID: 79898
// Name: NotificationAvatar
// Dependencies: [31, 27, 1348, 1838, 10237, 653, 33, 4130, 1273, 4094, 689, 10236, 10309, 566, 669, 10313, 10254, 10255, 3808, 44, 1212, 4337, 9914, 9533, 675, 10310, 2]

// Module 10354 (NotificationAvatar)
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_createForOfIteratorHelperLoose";
import set from "set";
import { AnalyticEvents } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import set from "_isNativeReflectConstruct";

let closure_10;
let closure_11;
let closure_12;
let closure_7;
let closure_8;
const require = arg1;
function NotificationAvatar(arg0) {
  let guildId;
  let user;
  ({ user, guildId } = arg0);
  const tmp = callback3();
  let obj = { style: tmp.avatarContainer };
  obj = { user, guildId, size: require(1273) /* Button */.AvatarSizes.NORMAL };
  obj.cutout = obj;
  const items = [callback(require(1273) /* Button */.Avatar, obj), ];
  obj = { style: tmp.cutoutIconContainer };
  const obj1 = { size: "xs", color: importDefault(689).colors.ICON_SUBTLE };
  obj.children = callback(require(4094) /* ClockIcon */.ClockIcon, obj1);
  items[1] = callback(View, obj);
  obj.children = items;
  return callback2(View, obj);
}
function NotificationBody(channel) {
  channel = channel.channel;
  const message = channel.message;
  let obj = channel(566);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_6.getGuild(channel.guild_id));
  let obj1 = channel(566);
  const items1 = [_isNativeReflectConstruct];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => outer1_5.getChannel(channel.parent_id));
  let obj2 = channel(10236);
  const hasPreviewableMedia = obj2.useHasPreviewableMedia(message);
  const tmp4 = channel.type === channel(669).ChannelTypes.DM;
  let num = 1;
  if (tmp4) {
    num = closure_8;
  }
  obj = {};
  let tmp8 = null;
  const messagePreviewTextVariant = channel(10236).getMessagePreviewTextVariant();
  if (!tmp4) {
    obj = { channel, parentChannel: stateFromStores1, guild: stateFromStores, author: null };
    tmp8 = callback(importDefault(10313), obj);
  }
  const items2 = [tmp8, ];
  if (!hasPreviewableMedia) {
    if (null == message.poll) {
      obj1 = { channel, message, color: "text-default", layout: channel(3808).ChannelListLayoutTypes.COZY, variant: messagePreviewTextVariant, muted: false, lineClamp: num };
      let tmp15 = callback(channel(10255).ChannelRowPreview, obj1);
    }
    items2[1] = tmp15;
    obj.children = items2;
    return closure_11(closure_12, obj);
  }
  obj2 = { message, lineClamp: num, showMessageAuthor: true, maxHeight: closure_7 };
  tmp15 = callback(importDefault(10254), obj2);
}
({ IN_APP_NOTIFICATION_MAX_HEIGHT: closure_7, NOTIFICATION_PREVIEW_LINE_CLAMP: closure_8 } = set);
({ jsx: closure_10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
let closure_13 = _createForOfIteratorHelperLoose.createStyles({ cutoutIconContainer: { position: "absolute", right: 0, bottom: 0 }, avatarContainer: { position: "relative" }, rightAccessoryContainer: { marginLeft: set.RIGHT_ACCESSORY_LEFT_MARGIN } });
let obj = { direction: require("Button").CutoutDirection.BOTTOM_RIGHT, radius: 10, inset: -2 };
let closure_15 = importAllResult.memo((message) => {
  message = message.message;
  let obj = require(10236) /* hasMedia */;
  let tmp2 = null;
  if (obj.useHasPreviewableMedia(message)) {
    obj = { style: tmp.rightAccessoryContainer };
    obj = { message };
    obj.children = callback(require(10309) /* VideoBadge */.MediaPreviewRightAccessory, obj);
    tmp2 = callback(View, obj);
  }
  return tmp2;
});
const result = set.fileFinishedImporting("modules/in_app_notifications/native/ReminderNotification.tsx");

export default importAllResult.memo(function ReminderNotification(notification) {
  notification = notification.notification;
  const channel = notification.channel;
  const message = notification.savedMessage.message;
  importDefault(44)(null != message, "Message in a notification should not be null.");
  let obj = { user: notification.author, guildId: channel.guild_id };
  const items = [notification];
  const memo = importAllResult.useMemo(() => {
    const obj = { type: "simple" };
    const intl = notification(outer1_2[20]).intl;
    obj.text = intl.string(notification(outer1_2[20]).t.Whs8tE);
    return obj;
  }, []);
  const callback = importAllResult.useCallback(() => {
    let author;
    let savedMessage;
    let obj = outer1_1(outer1_2[21]);
    obj.popAll();
    notification(outer1_2[22]).showForLaterModal(notification(outer1_2[23]).SavedMessageSortTypes.REMINDER);
    ({ savedMessage, author } = notification);
    const obj2 = notification(outer1_2[22]);
    obj = { message_id: savedMessage.saveData.messageId, message_author_id: author.id, notification_type: "IN_APP" };
    outer1_1(outer1_2[24]).track(outer1_9.FOR_LATER_REMINDER_NOTIFICATION_CLICKED, obj);
  }, items);
  obj = { icon: callback(NotificationAvatar, obj), header: memo, onPress: callback, notification, rightAccessory: callback(closure_15, { message }), children: callback(NotificationBody, { channel, message }) };
  return callback(notification(10310).NotificationPressable, obj);
});

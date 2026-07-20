// Module ID: 10337
// Function ID: 79805
// Name: NotificationAvatar
// Dependencies: []

// Module 10337 (NotificationAvatar)
function NotificationAvatar(arg0) {
  let guildId;
  let user;
  ({ user, guildId } = arg0);
  const tmp = callback3();
  let obj = { style: tmp.avatarContainer };
  obj = { user, guildId, size: arg1(dependencyMap[7]).AvatarSizes.LARGE_48, cutout: obj1 };
  const items = [callback(arg1(dependencyMap[7]).Avatar, obj), ];
  obj = { style: tmp.cutoutIconContainer };
  const obj1 = { size: "xxs", color: importDefault(dependencyMap[6]).colors.WHITE };
  obj.children = callback(arg1(dependencyMap[8]).ClockIcon, obj1);
  items[1] = callback(View, obj);
  obj.children = items;
  return callback2(View, obj);
}
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = arg1(dependencyMap[2]).NOTIFICATION_PREVIEW_LINE_CLAMP;
const AnalyticEvents = arg1(dependencyMap[3]).AnalyticEvents;
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
let obj1 = arg1(dependencyMap[5]);
let obj = {};
obj = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BRAND, borderRadius: importDefault(dependencyMap[6]).radii.round };
obj.cutoutIconContainer = obj;
obj.avatarContainer = { position: "relative" };
let closure_9 = obj1.createStyles(obj);
obj1 = { animated: "/assets/images/channel_following", hasHandledScroll: 400, isAtBottom: 96, direction: arg1(dependencyMap[7]).CutoutDirection.BOTTOM_RIGHT };
const tmp2 = arg1(dependencyMap[4]);
const memoResult = importAllResult.memo(function ReminderNotification(notification) {
  notification = notification.notification;
  const arg1 = notification;
  const channel = notification.channel;
  const message = notification.savedMessage.message;
  importDefault(dependencyMap[9])(null != message, "Message in a notification should not be null.");
  let obj = { user: notification.author, guildId: channel.guild_id };
  const items = [notification];
  const memo = importAllResult.useMemo(() => {
    const obj = { type: "simple" };
    const intl = notification(closure_2[10]).intl;
    obj.text = intl.string(notification(closure_2[10]).t.Whs8tE);
    return obj;
  }, []);
  const callback = importAllResult.useCallback(() => {
    let author;
    let savedMessage;
    let obj = callback(paths[11]);
    obj.popAll();
    obj = { presentation: "modal" };
    callback(paths[11]).pushLazy(notification(paths[13])(paths[12], paths.paths), {}, "for-later-modal", obj);
    ({ savedMessage, author } = notification);
    const obj2 = callback(paths[11]);
    obj = { message_id: savedMessage.saveData.messageId, message_author_id: author.id, notification_type: "IN_APP" };
    callback(paths[14]).track(constants.FOR_LATER_REMINDER_NOTIFICATION_CLICKED, obj);
  }, items);
  obj = { icon: callback(NotificationAvatar, obj), header: memo, onPress: callback, notification };
  obj = { channel, message, color: "text-default", layout: arg1(dependencyMap[17]).ChannelListLayoutTypes.COZY, muted: false, lineClamp: closure_5 };
  obj.children = callback(arg1(dependencyMap[16]).ChannelRowPreview, obj);
  return callback(arg1(dependencyMap[15]).NotificationPressable, obj);
});
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/in_app_notifications/native/ReminderNotification.tsx");

export default memoResult;

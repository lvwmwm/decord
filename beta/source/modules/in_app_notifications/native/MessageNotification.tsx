// Module ID: 9565
// Function ID: 9566
// Name: MessageNotification
// Dependencies: [19, 4825, 9555, 21, 4836, 9566, 504, 1177, 1115, 5083, 9597, 7095, 4541, 5039, 4847, 9598, 1981, 9630, 9634, 2]

// Module 9565 (MessageNotification)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1115 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4541 */;
import transitionToChannel from "transitionToChannel" /* 4847 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import MessageParserDefault from "MessageParser" /* 7095 */;
import MessagePreviewTextDefault from "MessagePreviewText" /* 9566 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import InAppNotificationConstants from "InAppNotificationConstants" /* 9555 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
({ IN_APP_NOTIFICATION_MAX_HEIGHT: hasOwnProperty, NOTIFICATION_PREVIEW_LINE_CLAMP: metroRequire } = InAppNotificationConstants);
const jsx = Fragment.jsx;
let closure_8 = createStyles.createStyles({ newContainerRoleDot: { paddingRight: 4, paddingTop: 0 } });
let closure_9 = react.memo((message) => jsx(MessagePreviewTextDefault, { message: message.message, lineClamp: metroRequire, maxHeight: hasOwnProperty }));
const memoResult = react.memo(function MessageNotification(notification) {
  let colorStrings;
  let id;
  notification = notification.notification;
  let nullableMessageAuthor;
  let handleDismissNotification;
  const message = notification.message;
  const channel = notification.channel;
  const parentChannel = notification.parentChannel;
  const guild = notification.guild;
  let tmp2 = 0 === message.content.length;
  const tmp = closure_8();
  if (tmp2) {
    tmp2 = null !== message.interaction;
  }
  if (tmp2) {
    tmp2 = undefined !== message.interaction;
  }
  if (tmp2) {
    tmp2 = null !== message.activityInstance;
  }
  if (tmp2) {
    tmp2 = undefined !== message.activityInstance;
  }
  if (tmp2) {
    let intl = message(parentChannel[8]).intl;
    let formatToPlainString = intl.formatToPlainString;
    const v7eikg1 = message(parentChannel[8]).t["7eikg1"];
    const interaction = message.interaction;
    let user;
    const getUserAuthor = message(parentChannel[9]).getUserAuthor;
    message(parentChannel[9]);
    if (interaction != null) {
      user = interaction.user;
    }
    let obj = { username: getUserAuthor(user, channel).nick };
    message.content = formatToPlainString(v7eikg1, obj);
  }
  let obj2 = message(parentChannel[9]);
  nullableMessageAuthor = obj2.useNullableMessageAuthor(message);
  const newContainerRoleDot = tmp.newContainerRoleDot;
  const items = [nullableMessageAuthor];
  let colorString;
  const obj3 = message(parentChannel[6]);
  const stateFromStores = obj3.useStateFromStores(items, () => nullableMessageAuthor.roleStyle);
  if (nullableMessageAuthor != null) {
    colorString = nullableMessageAuthor.colorString;
  }
  let tmp17Result;
  if ("dot" === stateFromStores) {
    if (undefined !== colorString) {
      const obj4 = { color: colorString, colors: colorStrings, containerStyles: newContainerRoleDot };
      colorStrings = undefined;
      const RoleDot = tmp11(tmp12[7]).RoleDot;
      const tmp17 = jsx;
      if (nullableMessageAuthor != null) {
        colorStrings = nullableMessageAuthor.colorStrings;
      }
      tmp17Result = tmp17(RoleDot, obj4);
    }
  }
  const tmp11Result = message(parentChannel[10]);
  handleDismissNotification = tmp11Result.useInAppNotificationContext().handleDismissNotification;
  const items1 = [nullableMessageAuthor.nick, channel.id, message.content];
  const effect = guild.useEffect(() => {
    let obj2;
    const intl = intl2.intl;
    const formatToPlainString = intl.formatToPlainString;
    const obj = { userName: nullableMessageAuthor.nick, message: obj2.unparse(message.content, channel.id, true) };
    const Hjp1LH = intl2.t.Hjp1LH;
    obj2 = MessageParserDefault;
    const formatToPlainStringResult = formatToPlainString(Hjp1LH, obj);
    const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
    AccessibilityAnnouncer.announce(formatToPlainStringResult);
  }, items1);
  const items2 = [channel.id, message.id];
  const items3 = [channel.id];
  const callback = guild.useCallback(() => {
    const obj = ModalActionCreatorsDefault;
    obj.popAll();
    const obj2 = transitionToChannel;
    obj2.transitionToMessage(channel.id, message.id, { navigationReplace: true });
  }, items2);
  const items4 = [channel, parentChannel, guild, nullableMessageAuthor, handleDismissNotification];
  const callback1 = guild.useCallback(() => {
    const obj = ModalActionCreatorsDefault;
    const obj2 = { channelId: channel.id };
    return obj.pushLazy(asyncRequire(9598, dependencyMap.paths), obj2, "in-app-notification-settings-modal");
  }, items3);
  const memo = guild.useMemo(() => ({ type: "message", channel, parentChannel, guild, author: nullableMessageAuthor, onDismiss: handleDismissNotification }), items4);
  const NotificationPressable = tmp11(tmp12[17]).NotificationPressable;
  ({ user: message.author, guildId: id, size: message(parentChannel[7]).AvatarSizes.NORMAL });
  const guild2 = notification.guild;
  id = undefined;
  const Avatar = tmp11(tmp12[7]).Avatar;
  if (guild2 != null) {
    id = guild2.id;
  }
  return <NotificationPressable icon={null} accessoryLabelNode={tmp17Result} rightAccessory={null} header={memo} notification={notification} onPress={callback} onSettingsPress={callback1}>{null}</NotificationPressable>;
});
const result = size.fileFinishedImporting("modules/in_app_notifications/native/MessageNotification.tsx");

export default memoResult;

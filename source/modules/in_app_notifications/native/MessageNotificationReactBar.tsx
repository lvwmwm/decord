// Module ID: 10302
// Function ID: 79533
// Name: MessageNotificationReactBar
// Dependencies: []
// Exports: MessageNotificationReactBar

// Module 10302 (MessageNotificationReactBar)
let closure_3 = importAll(dependencyMap[0]);
({ Keyboard: closure_4, View: closure_5 } = arg1(dependencyMap[1]));
const NOTIFICATION_MAX_WIDTH = arg1(dependencyMap[2]).NOTIFICATION_MAX_WIDTH;
const EmojiPickerSource = arg1(dependencyMap[3]).EmojiPickerSource;
const EmojiIntention = arg1(dependencyMap[4]).EmojiIntention;
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = { container: {} };
obj = { backgroundColor: importDefault(dependencyMap[7]).colors.BORDER_SUBTLE };
obj.divider = obj;
const tmp3 = arg1(dependencyMap[5]);
obj.roundButton = { borderRadius: importDefault(dependencyMap[7]).radii.round };
let closure_11 = obj.createStyles(obj);
const obj1 = { borderRadius: importDefault(dependencyMap[7]).radii.round };
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/in_app_notifications/native/MessageNotificationReactBar.tsx");

export const MessageNotificationReactBar = function MessageNotificationReactBar(notification) {
  notification = notification.notification;
  const arg1 = notification;
  const onReactionPress = notification.onReactionPress;
  const importDefault = onReactionPress;
  const tmp = callback3();
  const dependencyMap = tmp;
  const bound = Math.min(NOTIFICATION_MAX_WIDTH, importDefault(dependencyMap[8])().width - 2 * importDefault(dependencyMap[7]).space.PX_24);
  let obj = arg1(dependencyMap[9]);
  const emojisForReactionRow = obj.useEmojisForReactionRow(notification.channel, bound, 48);
  const items = [onReactionPress, notification];
  const items1 = [notification, onReactionPress];
  const callback = React.useCallback(() => {
    closure_4.dismiss();
    let obj = notification(tmp[10]);
    const result = obj.trackInAppNotificationAccessoryClicked(notification, notification(tmp[11]).InAppNotificationAccessoryTypes.REACTION_PICKER_BUTTON);
    obj = { onPressEmoji: onReactionPress, channel: notification.channel, pickerIntention: constants2.REACTION, reactionType: notification(tmp[13]).ReactionTypes.NORMAL, analyticsObject: notification(tmp[14]).ReactionLocations.IN_APP_NOTIFICATION, startExpanded: false, source: constants.NOTIFICATION };
    const result1 = notification(tmp[12]).openEmojiPickerActionSheet(obj);
  }, items);
  const React = React.useCallback((MessageNotificationReactBar) => {
    const result = notification(tmp[10]).trackInAppNotificationAccessoryClicked(notification, notification(tmp[11]).InAppNotificationAccessoryTypes.REACTION_BUTTON);
    if (null != MessageNotificationReactBar) {
      onReactionPress(MessageNotificationReactBar);
    }
  }, items1);
  obj = { style: notification.animationStyle };
  obj = { style: tmp.divider };
  const items2 = [callback(closure_5, obj), ];
  const obj1 = { style: tmp.container };
  const items3 = [
    emojisForReactionRow.map((type) => {
      const notification = type;
      const obj = {};
      let tmp2 = null;
      if (null != type) {
        tmp2 = type;
      }
      obj.emoji = tmp2;
      obj.onPress = function onPress() {
        return callback(arg0);
      };
      obj.styles = closure_9.roundButton;
      return closure_9(notification(closure_9[16]).EmojiReactionRowButton, obj, notification(closure_9[16]).getEmojiKey(type, arg1));
    }),
    callback(arg1(dependencyMap[16]).EmojiPickerRowButton, { onPress: callback, styles: tmp.roundButton })
  ];
  obj1.children = items3;
  items2[1] = callback2(closure_5, obj1);
  obj.children = items2;
  return callback2(importDefault(dependencyMap[15]).View, obj);
};

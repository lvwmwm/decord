// Module ID: 10315
// Function ID: 79606
// Name: PX_12
// Dependencies: [31, 27, 10237, 9329, 1852, 33, 689, 4130, 1450, 9946, 10236, 10316, 9326, 7006, 7005, 3991, 9947, 2]
// Exports: MessageNotificationReactBar

// Module 10315 (PX_12)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import set from "set";
import { EmojiPickerSource } from "IMAGE_SIZE";
import { EmojiIntention } from "set";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import set from "set";

let closure_10;
let closure_11;
let closure_4;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ Keyboard: closure_4, View: closure_5 } = get_ActivityIndicator);
({ NOTIFICATION_CONTAINER_MARGIN: closure_6, NOTIFICATION_MAX_WIDTH: closure_7 } = set);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
const PX_12 = require("_createForOfIteratorHelperLoose").space.PX_12;
_createForOfIteratorHelperLoose = { container: _createForOfIteratorHelperLoose };
_createForOfIteratorHelperLoose = { alignSelf: "center", flexDirection: "row", gap: 8, alignItems: "center", justifyContent: "space-between", paddingHorizontal: PX_12, paddingVertical: 10, width: "100%" };
let obj1 = { height: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, margin: 0, padding: 0 };
_createForOfIteratorHelperLoose.divider = obj1;
_createForOfIteratorHelperLoose.roundButton = { borderRadius: require("_createForOfIteratorHelperLoose").radii.round };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = set.fileFinishedImporting("modules/in_app_notifications/native/MessageNotificationReactBar.tsx");

export const MessageNotificationReactBar = function MessageNotificationReactBar(notification) {
  notification = notification.notification;
  const onReactionPress = notification.onReactionPress;
  const tmp = _createForOfIteratorHelperLoose();
  const dependencyMap = tmp;
  const width = onReactionPress(1450)().width;
  const items = [width];
  const memo = width.useMemo(() => {
    const result = 2 * outer1_12;
    return Math.min(outer1_7 - result, width - result - 2 * outer1_6);
  }, items);
  let obj = notification(9946);
  const emojisForReactionRow = obj.useEmojisForReactionRow(notification.channel, memo, 48);
  const items1 = [onReactionPress, notification];
  const items2 = [notification, onReactionPress];
  const callback = width.useCallback(() => {
    closure_4.dismiss();
    let obj = notification(tmp[10]);
    const result = obj.trackInAppNotificationAccessoryClicked(notification, notification(tmp[11]).InAppNotificationAccessoryTypes.REACTION_PICKER_BUTTON);
    obj = { onPressEmoji: onReactionPress, channel: notification.channel, pickerIntention: outer1_9.REACTION, reactionType: notification(tmp[13]).ReactionTypes.NORMAL, analyticsObject: notification(tmp[14]).ReactionLocations.IN_APP_NOTIFICATION, startExpanded: false, source: outer1_8.NOTIFICATION };
    const result1 = notification(tmp[12]).openEmojiPickerActionSheet(obj);
  }, items1);
  let closure_4 = width.useCallback((MessageNotificationReactBar) => {
    const result = notification(tmp[10]).trackInAppNotificationAccessoryClicked(notification, notification(tmp[11]).InAppNotificationAccessoryTypes.REACTION_BUTTON);
    if (null != MessageNotificationReactBar) {
      onReactionPress(MessageNotificationReactBar);
    }
  }, items2);
  obj = { style: notification.animationStyle };
  obj = { style: tmp.divider };
  const items3 = [callback(closure_5, obj), ];
  const obj1 = { style: tmp.container };
  const items4 = [
    emojisForReactionRow.map((type) => {
      let closure_0 = type;
      const obj = { emoji: null, onPress: null, emojiSize: 20, emojiFontSize: 16, emojiContainerSize: 40, emojiLineHeight: 22 };
      let tmp2 = null;
      if (null != type) {
        tmp2 = type;
      }
      obj.emoji = tmp2;
      obj.onPress = function onPress() {
        return outer1_4(closure_0);
      };
      obj.styles = outer1_10.roundButton;
      return outer1_10(notification(outer1_10[16]).EmojiReactionRowButton, obj, notification(outer1_10[16]).getEmojiKey(type, arg1));
    }),

  ];
  const obj2 = { emojiContainerSize: 40, onPress: callback, iconSize: "sm", styles: tmp.roundButton };
  items4[1] = callback(notification(9947).EmojiPickerRowButton, obj2);
  obj1.children = items4;
  items3[1] = callback2(closure_5, obj1);
  obj.children = items3;
  return callback2(onReactionPress(3991).View, obj);
};

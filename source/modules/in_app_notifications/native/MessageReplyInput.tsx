// Module ID: 10390
// Function ID: 80118
// Name: AnimatedChatInputReplyBar
// Dependencies: [5, 57, 31, 27, 1348, 1852, 33, 4130, 689, 1324, 3991, 4131, 10391, 5160, 4360, 4320, 5780, 10266, 10345, 4099, 6923, 6691, 9362, 10395, 7533, 9983, 1212, 5783, 7437, 4076, 2]
// Exports: MessageReplyInput

// Module 10390 (AnimatedChatInputReplyBar)
import set from "set";
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "useKeyboardBlurring";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { EmojiIntention } from "set";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_6;
let closure_7;
const require = arg1;
function AnimatedChatInputReplyBar(replying) {
  let onToggleReplyMention;
  let pendingReply;
  let pendingReplyAuthor;
  replying = replying.replying;
  ({ pendingReply, pendingReplyAuthor, onToggleReplyMention } = replying);
  let obj = replying(1324);
  const tmp = _createForOfIteratorHelperLoose();
  const sharedValue = replying(3991).useSharedValue(0);
  const items = [replying, sharedValue];
  const effect = React.useEffect(() => {
    const withTiming = replying(outer1_2[11]).withTiming;
    const obj = { duration: 150 };
    if (replying) {
      const result = set(withTiming(1, obj));
    } else {
      const result1 = set(withTiming(0, obj));
    }
  }, items);
  const obj2 = replying(3991);
  const fn = function y() {
    const obj = { height: replying(outer1_2[10]).interpolate(sharedValue.get(), [0, 1], [0, 40]), opacity: sharedValue.get() };
    return obj;
  };
  obj = { interpolate: replying(3991).interpolate, sv: sharedValue, REPLY_BAR_HEIGHT: 40 };
  fn.__closure = obj;
  fn.__workletHash = 878601267127;
  fn.__initData = closure_13;
  const animatedStyle = replying(3991).useAnimatedStyle(fn);
  obj = { style: items1 };
  items1 = [tmp.replyBarContainer, obj.useMobileVisualRefreshConfig({ location: "MessageReplyInput" }).chatInputFloating ? tmp.replyBarRedesign : tmp.replyBarNoRedesign, animatedStyle];
  obj.children = callback2(replying(10391).ChatInputReplyBar, { pendingReply, pendingReplyAuthor, onToggleReplyMention, chatInputFloatingOverride: true });
  return callback2(sharedValue(3991).View, obj);
}
({ Keyboard: closure_6, View: closure_7 } = get_ActivityIndicator);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flexDirection: "column", gap: 0, backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_ALERT_BACKGROUND_DEFAULT, padding: 0, marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_4, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, overflow: "hidden" };
_createForOfIteratorHelperLoose.inputContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.iconsContainer = { flexDirection: "row", alignItems: "center", gap: 4 };
let obj1 = { flex: 1, borderRadius: require("_createForOfIteratorHelperLoose").radii.none, border: 0, color: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT };
_createForOfIteratorHelperLoose.input = obj1;
let obj2 = { flexDirection: "row", alignItems: "center", gap: 8, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_12, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.inputRow = obj2;
_createForOfIteratorHelperLoose.placeholderText = { color: require("_createForOfIteratorHelperLoose").colors.INPUT_PLACEHOLDER_TEXT_DEFAULT };
let obj4 = { justifyContent: "center", alignContent: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_STRONG, borderBottomWidth: get_ActivityIndicator.StyleSheet.hairlineWidth, borderBottomColor: require("_createForOfIteratorHelperLoose").colors.BORDER_MUTED, overflow: "hidden" };
_createForOfIteratorHelperLoose.replyBarContainer = obj4;
let obj3 = { color: require("_createForOfIteratorHelperLoose").colors.INPUT_PLACEHOLDER_TEXT_DEFAULT };
_createForOfIteratorHelperLoose.replyBarNoRedesign = { paddingLeft: require("_createForOfIteratorHelperLoose").space.PX_12, paddingRight: require("_createForOfIteratorHelperLoose").space.PX_8 };
let obj5 = { paddingLeft: require("_createForOfIteratorHelperLoose").space.PX_12, paddingRight: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.replyBarRedesign = { paddingLeft: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_13 = { code: "function MessageReplyInputTsx1(){const{interpolate,sv,REPLY_BAR_HEIGHT}=this.__closure;return{height:interpolate(sv.get(),[0,1],[0,REPLY_BAR_HEIGHT]),opacity:sv.get()};}" };
let obj6 = { paddingLeft: require("_createForOfIteratorHelperLoose").space.PX_4 };
let result = require("result").fileFinishedImporting("modules/in_app_notifications/native/MessageReplyInput.tsx");

export const MessageReplyInput = function MessageReplyInput(notification) {
  let guild;
  notification = notification.notification;
  const onMessageSent = notification.onMessageSent;
  const ref = first1.useRef(null);
  let tmp2 = callback(first1.useState(""), 2);
  const first = tmp2[0];
  callback = tmp4;
  const tmp5 = callback(first1.useState(false), 2);
  first1 = tmp5[0];
  let closure_6 = tmp5[1];
  const tmp7 = callback(first1.useState(false), 2);
  const first2 = tmp7[0];
  let _isNativeReflectConstruct = tmp7[1];
  const tmp9 = callback(first1.useState(true), 2);
  const first3 = tmp9[0];
  const callback2 = tmp9[1];
  const tmp11 = channel();
  const message = notification.message;
  channel = notification.channel;
  let obj = notification(ref[14]);
  const nullableMessageAuthor = obj.useNullableMessageAuthor(message);
  let obj1 = notification(ref[16]);
  const items = [first3, channel, message];
  const inputStyles = obj1.useInputStyles({});
  const memo = first1.useMemo(() => ({ shouldMention: first3, showMentionToggle: !channel.isPrivate(), channel, message }), items);
  const layoutEffect = first1.useLayoutEffect(() => {
    const current = ref.current;
    if (null != current) {
      current.focus();
    }
  }, []);
  const items1 = [first, onMessageSent, memo, first2, first1];
  let closure_14 = first1.useCallback((() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = first(tmp);
    return function() {
      return callback(...arguments);
    };
  })(), items1);
  const items2 = [, ];
  ({ channel: arr3[0], guild } = notification);
  let id;
  if (null != guild) {
    id = guild.id;
  }
  items2[1] = id;
  obj = { style: obj };
  obj = { paddingBottom: onMessageSent(ref[13])({ includeKeyboardHeight: true }).insets.bottom };
  obj1 = { style: tmp11.inputContainer };
  callback = first1.useCallback(() => {
    closure_6.dismiss();
    let obj = notification(ref[22]);
    obj = {
      onPressEmoji(arg0) {
        let closure_0 = onMessageSent(ref[23])(arg0);
        outer1_4((arg0) => "" + arg0 + " " + closure_0);
        const current = outer1_2.current;
        if (null != current) {
          current.focus();
        }
      },
      pickerIntention: first3.CHAT
    };
    const channel = notification.channel;
    let tmp2;
    if (null != channel) {
      tmp2 = channel;
    }
    obj.channel = tmp2;
    const guild = notification.guild;
    let id;
    if (null != guild) {
      id = guild.id;
    }
    let tmp4;
    if (null != id) {
      tmp4 = id;
    }
    obj.guildId = tmp4;
    obj.startExpanded = false;
    const result = obj.openEmojiPickerActionSheet(obj);
  }, items2);
  const items3 = [
    callback2(closure_14, {
      replying: first2,
      pendingReply: memo,
      pendingReplyAuthor: nullableMessageAuthor,
      onToggleReplyMention() {
        return callback2(!first3);
      }
    }),

  ];
  const obj3 = { style: tmp11.inputRow };
  const obj4 = {};
  let str = "icon-only";
  if (first2) {
    str = "secondary";
  }
  obj4.variant = str;
  obj4.size = "sm";
  const obj5 = { size: "sm", color: onMessageSent(ref[8]).colors.CHAT_INPUT_ICON_DEFAULT_TINT };
  obj4.icon = callback2(notification(ref[25]).ArrowAngleLeftUpIcon, obj5);
  obj4.onPress = function onPress() {
    const result = notification(ref[17]).trackInAppNotificationAccessoryClicked(notification, notification(ref[18]).InAppNotificationAccessoryTypes.REPLY_TOGGLE);
    callback(!first2);
  };
  const intl = notification(ref[26]).intl;
  obj4.accessibilityLabel = intl.string(notification(ref[26]).t["5IEsGx"]);
  const items4 = [callback2(notification(ref[24]).IconButton, obj4), , ];
  const obj6 = { ref, style: items5, placeholderTextColor: tmp11.placeholderText.color };
  items5 = [tmp11.input, inputStyles.text];
  const intl2 = notification(ref[26]).intl;
  obj6.placeholder = intl2.formatToPlainString(notification(ref[26]).t["8lzR/R"], { channel: onMessageSent(ref[15])(channel, true) });
  obj6.autoFocus = true;
  obj6.value = first;
  obj6.onChangeText = tmp2[1];
  items4[1] = callback2(notification(ref[27]).NativeTextInput, obj6);
  const obj7 = { style: tmp11.iconsContainer };
  const obj8 = { variant: "icon-only", size: "sm" };
  const obj9 = { size: "sm", color: onMessageSent(ref[8]).colors.CHAT_INPUT_ICON_DEFAULT_TINT };
  obj8.icon = callback2(notification(ref[28]).ReactionIcon, obj9);
  obj8.onPress = callback;
  const intl3 = notification(ref[26]).intl;
  obj8.accessibilityLabel = intl3.string(notification(ref[26]).t.sMOuuS);
  const items6 = [callback2(notification(ref[24]).IconButton, obj8), ];
  const obj10 = { variant: "primary", size: "sm" };
  const intl4 = notification(ref[26]).intl;
  obj10.accessibilityLabel = intl4.string(notification(ref[26]).t.TXNS7S);
  const obj11 = { size: "sm", color: onMessageSent(ref[8]).colors.WHITE };
  obj10.icon = callback2(notification(ref[29]).SendMessageIcon, obj11);
  obj10.onPress = function onPress() {
    return callback3(notification);
  };
  obj10.loading = first1;
  items6[1] = callback2(notification(ref[24]).IconButton, obj10);
  obj7.children = items6;
  items4[2] = message(first2, obj7);
  obj3.children = items4;
  items3[1] = message(first2, obj3);
  obj1.children = items3;
  obj.children = message(first2, obj1);
  return callback2(first2, obj);
};

// Module ID: 10344
// Function ID: 79829
// Name: AnimatedChatInputReplyBar
// Dependencies: []
// Exports: MessageReplyInput

// Module 10344 (AnimatedChatInputReplyBar)
function AnimatedChatInputReplyBar(replying) {
  let onToggleReplyMention;
  let pendingReply;
  let pendingReplyAuthor;
  replying = replying.replying;
  const arg1 = replying;
  ({ pendingReply, pendingReplyAuthor, onToggleReplyMention } = replying);
  let obj = arg1(dependencyMap[9]);
  const tmp = callback3();
  const sharedValue = arg1(dependencyMap[10]).useSharedValue(0);
  const importDefault = sharedValue;
  const items = [replying, sharedValue];
  const effect = React.useEffect(() => {
    const withTiming = replying(closure_2[11]).withTiming;
    const obj = { duration: 150 };
    if (replying) {
      const result = set(withTiming(1, obj));
    } else {
      const result1 = set(withTiming(0, obj));
    }
  }, items);
  const obj2 = arg1(dependencyMap[10]);
  const fn = function y() {
    const obj = { height: replying(closure_2[10]).interpolate(sharedValue.get(), [null, null], [true, true]), opacity: sharedValue.get() };
    return obj;
  };
  obj = { interpolate: arg1(dependencyMap[10]).interpolate, sv: sharedValue, REPLY_BAR_HEIGHT: 40 };
  fn.__closure = obj;
  fn.__workletHash = 878601267127;
  fn.__initData = closure_13;
  const animatedStyle = arg1(dependencyMap[10]).useAnimatedStyle(fn);
  obj = { style: items1 };
  const items1 = [tmp.replyBarContainer, obj.useMobileVisualRefreshConfig({ location: "MessageReplyInput" }).chatInputFloating ? tmp.replyBarRedesign : tmp.replyBarNoRedesign, animatedStyle];
  obj.children = callback2(arg1(dependencyMap[12]).ChatInputReplyBar, { pendingReply, pendingReplyAuthor, onToggleReplyMention, chatInputFloatingOverride: true });
  return callback2(importDefault(dependencyMap[10]).View, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
const tmp2 = arg1(dependencyMap[3]);
({ Keyboard: closure_6, View: closure_7 } = tmp2);
let closure_8 = importDefault(dependencyMap[4]);
const EmojiIntention = arg1(dependencyMap[5]).EmojiIntention;
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[6]));
let obj = arg1(dependencyMap[7]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[8]).colors.MOBILE_ALERT_BACKGROUND_DEFAULT, marginHorizontal: importDefault(dependencyMap[8]).space.PX_16, marginBottom: importDefault(dependencyMap[8]).space.PX_4, borderRadius: importDefault(dependencyMap[8]).radii.lg, overflow: "hidden" };
obj.inputContainer = obj;
obj.iconsContainer = {};
const tmp3 = arg1(dependencyMap[6]);
obj.input = { borderRadius: importDefault(dependencyMap[8]).radii.none, color: importDefault(dependencyMap[8]).colors.TEXT_DEFAULT };
const obj1 = { borderRadius: importDefault(dependencyMap[8]).radii.none, color: importDefault(dependencyMap[8]).colors.TEXT_DEFAULT };
obj.inputRow = { paddingHorizontal: importDefault(dependencyMap[8]).space.PX_12, paddingVertical: importDefault(dependencyMap[8]).space.PX_12 };
const obj2 = { paddingHorizontal: importDefault(dependencyMap[8]).space.PX_12, paddingVertical: importDefault(dependencyMap[8]).space.PX_12 };
obj.placeholderText = { color: importDefault(dependencyMap[8]).colors.INPUT_PLACEHOLDER_TEXT_DEFAULT };
const obj3 = { color: importDefault(dependencyMap[8]).colors.INPUT_PLACEHOLDER_TEXT_DEFAULT };
obj.replyBarContainer = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_MOD_STRONG, borderBottomWidth: tmp2.StyleSheet.hairlineWidth, borderBottomColor: importDefault(dependencyMap[8]).colors.BORDER_MUTED, overflow: "hidden" };
const obj4 = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_MOD_STRONG, borderBottomWidth: tmp2.StyleSheet.hairlineWidth, borderBottomColor: importDefault(dependencyMap[8]).colors.BORDER_MUTED, overflow: "hidden" };
obj.replyBarNoRedesign = { paddingLeft: importDefault(dependencyMap[8]).space.PX_12, paddingRight: importDefault(dependencyMap[8]).space.PX_8 };
const obj5 = { paddingLeft: importDefault(dependencyMap[8]).space.PX_12, paddingRight: importDefault(dependencyMap[8]).space.PX_8 };
obj.replyBarRedesign = { paddingLeft: importDefault(dependencyMap[8]).space.PX_4 };
let closure_12 = obj.createStyles(obj);
let closure_13 = { code: "function MessageReplyInputTsx1(){const{interpolate,sv,REPLY_BAR_HEIGHT}=this.__closure;return{height:interpolate(sv.get(),[0,1],[0,REPLY_BAR_HEIGHT]),opacity:sv.get()};}" };
const obj6 = { paddingLeft: importDefault(dependencyMap[8]).space.PX_4 };
const result = arg1(dependencyMap[30]).fileFinishedImporting("modules/in_app_notifications/native/MessageReplyInput.tsx");

export const MessageReplyInput = function MessageReplyInput(notification) {
  let guild;
  notification = notification.notification;
  const arg1 = notification;
  const onMessageSent = notification.onMessageSent;
  const importDefault = onMessageSent;
  const ref = React.useRef(null);
  const dependencyMap = ref;
  const tmp2 = callback(React.useState(""), 2);
  const first = tmp2[0];
  let closure_3 = first;
  let callback = tmp4;
  const tmp5 = callback(React.useState(false), 2);
  const first1 = tmp5[0];
  const React = first1;
  let closure_6 = tmp5[1];
  const tmp7 = callback(React.useState(false), 2);
  const first2 = tmp7[0];
  let closure_8 = tmp7[1];
  const tmp9 = callback(React.useState(true), 2);
  const first3 = tmp9[0];
  const EmojiIntention = first3;
  const callback2 = tmp9[1];
  const tmp11 = callback3();
  const message = notification.message;
  const channel = notification.channel;
  const callback3 = channel;
  let obj = arg1(dependencyMap[14]);
  const nullableMessageAuthor = obj.useNullableMessageAuthor(message);
  let obj1 = arg1(dependencyMap[16]);
  const items = [first3, channel, message];
  const inputStyles = obj1.useInputStyles({});
  const memo = React.useMemo(() => ({ shouldMention: first3, showMentionToggle: !channel.isPrivate(), channel, message }), items);
  let closure_13 = memo;
  const layoutEffect = React.useLayoutEffect(() => {
    const current = ref.current;
    if (null != current) {
      current.focus();
    }
  }, []);
  const items1 = [first, onMessageSent, memo, first2, first1];
  let closure_14 = React.useCallback(() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = first(tmp);
    return function() {
      return callback(...arguments);
    };
  }(), items1);
  const items2 = [, ];
  ({ channel: arr3[0], guild } = notification);
  let id;
  if (null != guild) {
    id = guild.id;
  }
  items2[1] = id;
  obj = { style: obj };
  obj = { paddingBottom: importDefault(dependencyMap[13])({ includeKeyboardHeight: true }).insets.bottom };
  obj1 = { style: tmp11.inputContainer };
  callback = React.useCallback(() => {
    closure_6.dismiss();
    let obj = notification(ref[22]);
    obj = {
      onPressEmoji(arg0) {
        let closure_0 = callback(ref[23])(arg0);
        callback2((arg0) => "" + arg0 + " " + closure_0);
        const current = ref.current;
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
  const obj5 = { size: "sm", color: importDefault(dependencyMap[8]).colors.CHAT_INPUT_ICON_DEFAULT_TINT };
  obj4.icon = callback2(arg1(dependencyMap[25]).ArrowAngleLeftUpIcon, obj5);
  obj4.onPress = function onPress() {
    const result = notification(ref[17]).trackInAppNotificationAccessoryClicked(notification, notification(ref[18]).InAppNotificationAccessoryTypes.REPLY_TOGGLE);
    callback(!first2);
  };
  const intl = arg1(dependencyMap[26]).intl;
  obj4.accessibilityLabel = intl.string(arg1(dependencyMap[26]).t.5IEsGx);
  const items4 = [callback2(arg1(dependencyMap[24]).IconButton, obj4), , ];
  const obj6 = { ref, style: items5, placeholderTextColor: tmp11.placeholderText.color };
  const items5 = [tmp11.input, inputStyles.text];
  const intl2 = arg1(dependencyMap[26]).intl;
  obj6.placeholder = intl2.formatToPlainString(arg1(dependencyMap[26]).t.8lzR/R, { channel: importDefault(dependencyMap[15])(channel, true) });
  obj6.autoFocus = true;
  obj6.value = first;
  obj6.onChangeText = tmp2[1];
  items4[1] = callback2(arg1(dependencyMap[27]).NativeTextInput, obj6);
  const obj7 = { style: tmp11.iconsContainer };
  const obj8 = { <string:1522289750>: null, <string:570601313>: null };
  const obj9 = { size: "sm", color: importDefault(dependencyMap[8]).colors.CHAT_INPUT_ICON_DEFAULT_TINT };
  obj8.icon = callback2(arg1(dependencyMap[28]).ReactionIcon, obj9);
  obj8.onPress = callback;
  const intl3 = arg1(dependencyMap[26]).intl;
  obj8.accessibilityLabel = intl3.string(arg1(dependencyMap[26]).t.sMOuuS);
  const items6 = [callback2(arg1(dependencyMap[24]).IconButton, obj8), ];
  const obj10 = {};
  const intl4 = arg1(dependencyMap[26]).intl;
  obj10.accessibilityLabel = intl4.string(arg1(dependencyMap[26]).t.TXNS7S);
  const obj11 = { size: "sm", color: importDefault(dependencyMap[8]).colors.WHITE };
  obj10.icon = callback2(arg1(dependencyMap[29]).SendMessageIcon, obj11);
  obj10.onPress = function onPress() {
    return callback3(notification);
  };
  obj10.loading = first1;
  items6[1] = callback2(arg1(dependencyMap[24]).IconButton, obj10);
  obj7.children = items6;
  items4[2] = message(first2, obj7);
  obj3.children = items4;
  items3[1] = message(first2, obj3);
  obj1.children = items3;
  obj.children = message(first2, obj1);
  return callback2(first2, obj);
};

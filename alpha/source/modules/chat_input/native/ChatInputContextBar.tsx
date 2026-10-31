// Module ID: 13970
// Function ID: 13971
// Name: ChatInputContextBar
// Dependencies: [19, 17, 5015, 7701, 1383, 1072, 21, 1187, 5014, 575, 5596, 5624, 1113, 6980, 7106, 504, 5082, 6439, 9290, 8419, 13971, 5192, 5095, 5254, 10201, 1252, 10199, 1099, 6438, 13972, 8343, 9807, 9809, 2]

// Module 13970 (ChatInputContextBar)
import nativeDefault from "native" /* 575 */;
import intl9 from "intl" /* 1113 */;
import native from "native" /* 1187 */;
import useToken from "useToken" /* 5596 */;
import Text_Text from "Text/Text" /* 5624 */;
import Pressables from "Pressables" /* 6980 */;
import DraftStore2 from "DraftStore" /* 7701 */;
import DraftActionCreatorsDefault from "DraftActionCreators" /* 8343 */;
import ScheduledMessagesUtils from "ScheduledMessagesUtils" /* 9807 */;
import ScheduledMessageTypes from "ScheduledMessageTypes" /* 9809 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5015 */;
import UserStore from "UserStore" /* 1383 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

const DraftStore = DraftStore2;
let currentUser, id, set;

let c10;
let closure_12;
let closure_14;
let closure_4;
let hasOwnProperty;
let map1;
let tmp4;
let unpackModuleId;
const AssetRegistryDefault = tmp4(7106);
function ChatInputReplyBarNoAuthor(onCancelReplying) {
  let Icon;
  let PressableOpacity;
  let intl;
  let intl2;
  let items;
  let obj6;
  let obj7;
  let tmp10;
  onCancelReplying = onCancelReplying.onCancelReplying;
  const tmp = closure_17();
  obj = useToken;
  const token = obj.useToken(nativeDefault.modules.mobile.CHAT_INPUT_BUTTON_MIN_TOUCH_TARGET_SIZE);
  const obj2 = useToken;
  const bound = Math.max(0, (token - obj2.useToken(nativeDefault.modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_SIZE)) / 2);
  const obj3 = { style: tmp.contextBarRow, children: items };
  const obj4 = { lineClamp: 1, variant: "text-sm/normal", color: "text-strong", style: tmp.floatingReplyTextWrapper, children: intl.string(intl9.t["5IEsGx"]) };
  const Text = Text_Text.Text;
  intl = intl9.intl;
  items = [authStore2(Text, obj4), ];
  const obj5 = { style: tmp.floatingRightActions, children: authStore2(PressableOpacity, obj6) };
  obj6 = { activeOpacity: 0.5, accessibilityRole: "button", accessibilityLabel: intl2.string(intl9.t.jSnJGT), hitSlop: tmp10, onPress: onCancelReplying, children: authStore2(Icon, obj7) };
  PressableOpacity = Pressables.PressableOpacity;
  intl2 = intl9.intl;
  tmp10 = undefined;
  const tmp7 = map1;
  if (bound > 0) {
    tmp10 = bound;
  }
  obj7 = { source: AssetRegistryDefault, size: native.Icon.Sizes.CUSTOM, style: tmp.floatingCloseIcon };
  Icon = tmp2(1187).Icon;
  items[1] = authStore2(hasOwnProperty, obj5);
  return tmp7(hasOwnProperty, obj3);
}
class ChatInputReplyBar {
  constructor(pendingReply) {
    let Icon;
    let Text3;
    let accessibilityRole;
    let accessibilityState;
    let intl;
    let intl2;
    let intl3;
    let intl6;
    let intl7;
    let intl8;
    let items2;
    let items3;
    let items4;
    let items5;
    let items6;
    let obj11;
    let obj13;
    let obj14;
    let obj15;
    let obj17;
    let onCancelReplying;
    let onTapContextBarReply;
    let pendingReplyAuthor;
    let string2Result;
    let stringResult;
    let tmp12;
    let tmp13;
    let tmp15;
    let tmp20;
    function userHook(arg0, arg1) {
      let items1;
      let tmp19;
      let tmp6;
      if ("dot" === stateFromStores) {
        let tmp3Result;
        if (null != colorString) {
          const obj2 = { color: tmp, colors: colorStrings, guildId, size: "small" };
          const items = [authStore2(native.RoleDot, obj2), ];
          const obj3 = { variant: "text-sm/semibold", style: tmp19, children: nick };
          tmp19 = undefined;
          const Text2 = Text_Text.Text;
          const tmp15 = authStore2;
          const tmp8 = map1;
          const tmp9 = authStore3;
          if (null != closure_7) {
            tmp19 = { fontFamily: tmp18 };
            const obj4 = { fontFamily: tmp18 };
          }
          const obj5 = { children: items };
          items[1] = tmp15(Text2, obj3, arg1);
          tmp3Result = tmp8(tmp9, obj5);
        }
        return tmp3Result;
      }
      obj = { variant: "text-sm/semibold", style: items1, gradientColors: tmp6, children: nick };
      items1 = [roleStyle, ];
      let tmp5 = null != closure_7;
      const Text = Text_Text.Text;
      const tmp3 = authStore2;
      if (tmp5) {
        tmp5 = { fontFamily: tmp4 };
        const obj6 = { fontFamily: tmp4 };
      }
      items1[1] = tmp5;
      tmp6 = undefined;
      if (closure_9) {
        tmp6 = processColorStringsArray;
      }
      tmp3Result = tmp3(Text, obj, "" + arg1 + "-" + pendingReply.message.author.id);
    }
    pendingReply = pendingReply.pendingReply;
    ({ pendingReplyAuthor, onTapContextBarReply, onCancelReplying } = pendingReply);
    let stateFromStores;
    let colorString;
    let roleStyle;
    const onToggleReplyMention = pendingReply.onToggleReplyMention;
    let tmp = closure_17();
    const tmp2 = pendingReply;
    let tmp3 = colorString;
    obj = pendingReply(colorString[10]);
    const tmp4 = stateFromStores;
    const token = obj.useToken(stateFromStores(colorString[9]).modules.mobile.CHAT_INPUT_BUTTON_MIN_TOUCH_TARGET_SIZE);
    let obj2 = pendingReply(colorString[10]);
    const bound = Math.max(0, (token - obj2.useToken(stateFromStores(colorString[9]).modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_SIZE)) / 2);
    let obj3 = pendingReply(colorString[15]);
    let items = [roleStyle];
    stateFromStores = obj3.useStateFromStores(items, () => roleStyle.roleStyle);
    let obj4 = pendingReply(colorString[16]);
    let obj5 = { checked: pendingReply.shouldMention };
    const checkboxA11yNative = obj4.useCheckboxA11yNative(obj5);
    colorString = pendingReplyAuthor.colorString;
    const colorStrings = pendingReplyAuthor.colorStrings;
    const nick = pendingReplyAuthor.nick;
    const guildId = pendingReplyAuthor.guildId;
    let items1 = [colorString, stateFromStores];
    ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
    roleStyle = colorStrings.useMemo(() => {
      let tmp;
      if ("hidden" !== stateFromStores) {
        if (null != colorString) {
          const items = [{ color: tmp2 }];
          tmp = items;
          obj = { color: tmp2 };
        }
      }
      return tmp;
    }, items1);
    let obj6 = { userId: pendingReply.message.author.id, guildId };
    let tmp9 = stateFromStores(colorString[17])(obj6);
    const obj7 = pendingReply(colorString[18]);
    let closure_7 = obj7.useDisplayNameStylesFont({ displayNameStyles: tmp9 });
    const obj8 = pendingReply(colorString[19]);
    const processColorStringsArray = obj8.useProcessColorStringsArray(colorStrings);
    const obj9 = pendingReply(colorString[19]);
    let closure_9 = obj9.useIsRoleStyleAndRoleColorsEligibleForERC(guildId, pendingReply.message.author.id, stateFromStores, processColorStringsArray);
    if (null == onTapContextBarReply) {
      const obj10 = { lineClamp: 1, variant: "text-sm/normal", color: "text-strong", children: intl.format(tmp2(tmp3[12]).t["8E4GxS"], obj11) };
      let Text = tmp2(tmp3[11]).Text;
      intl = tmp2(tmp3[12]).intl;
      obj11 = { userHook };
      tmp12 = closure_12(Text, obj10);
      tmp13 = closure_12;
    } else {
      tmp13 = closure_12;
      const obj12 = { style: tmp.floatingReplyTextWrapper, accessibilityRole: "link", accessibilityLabel: intl6.formatToPlainString(tmp2(tmp3[12]).t.EpJL4E, obj13), accessibilityHint: intl7.string(tmp2(tmp3[12]).t["0CfCVW"]), activeOpacity: 0.5, onPress: onTapContextBarReply, children: closure_12(Text3, obj14) };
      const PressableOpacity3 = tmp2(tmp3[13]).PressableOpacity;
      intl6 = tmp2(tmp3[12]).intl;
      obj13 = { username: nick };
      intl7 = tmp2(tmp3[12]).intl;
      obj14 = { lineClamp: 1, variant: "text-sm/normal", color: "text-strong", children: intl8.format(tmp2(tmp3[12]).t["8E4GxS"], obj15) };
      Text3 = tmp2(tmp3[11]).Text;
      intl8 = tmp2(tmp3[12]).intl;
      obj15 = { userHook };
      tmp12 = closure_12(PressableOpacity3, obj12);
    }
    let tmp13Result = null;
    if (null != onCancelReplying) {
      const obj16 = { accessibilityRole: "button", accessibilityLabel: intl2.string(tmp2(tmp3[12]).t.jSnJGT), activeOpacity: 0.5, hitSlop: tmp15, onPress: onCancelReplying, children: tmp13(Icon, obj17) };
      const PressableOpacity = tmp2(tmp3[13]).PressableOpacity;
      intl2 = tmp2(tmp3[12]).intl;
      tmp15 = undefined;
      if (bound > 0) {
        tmp15 = bound;
      }
      obj17 = { source: tmp4(tmp3[14]), size: tmp2(tmp3[7]).Icon.Sizes.CUSTOM, style: tmp.floatingCloseIcon };
      Icon = tmp2(tmp3[7]).Icon;
      tmp13Result = tmp13(PressableOpacity, obj16);
    }
    let showMentionToggle;
    if (pendingReply != null) {
      showMentionToggle = pendingReply.showMentionToggle;
    }
    let tmp18Result = null;
    if (showMentionToggle) {
      const tmp18 = closure_13;
      const obj18 = { accessibilityRole, accessibilityState, accessibilityLabel: intl3.string(tmp2(tmp3[12]).t.P8tvKG), accessibilityHint: stringResult, activeOpacity: 0.5, hitSlop: tmp20, onPress: onToggleReplyMention, style: tmp.floatingMentionGroup, children: items3 };
      const PressableOpacity2 = tmp2(tmp3[13]).PressableOpacity;
      intl3 = tmp2(tmp3[12]).intl;
      const shouldMention = pendingReply.shouldMention;
      const intl4 = tmp2(tmp3[12]).intl;
      const string = intl4.string;
      const t = tmp2(tmp3[12]).t;
      if (shouldMention) {
        stringResult = string(t.PBgTSF);
      } else {
        stringResult = string(t["+LXBxU"]);
      }
      tmp20 = undefined;
      if (bound > 0) {
        tmp20 = bound;
      }
      const obj19 = { source: tmp4(tmp3[20]), size: tmp2(tmp3[7]).Icon.Sizes.CUSTOM, style: items2 };
      const Icon2 = tmp2(tmp3[7]).Icon;
      items2 = [tmp.replyMentionIcon, pendingReply.shouldMention && tmp.replyMentionIconActive];
      items3 = [tmp13(Icon2, obj19), ];
      let prop;
      let Text2 = tmp2(tmp3[11]).Text;
      if (pendingReply.shouldMention) {
        prop = tmp.replyMentionButtonActive;
      }
      const shouldMention2 = pendingReply.shouldMention;
      const obj20 = { variant: "text-sm/semibold", color: "text-muted", style: prop, children: string2Result };
      const intl5 = tmp2(tmp3[12]).intl;
      const string2 = intl5.string;
      const t2 = tmp2(tmp3[12]).t;
      if (shouldMention2) {
        string2Result = string2(t2.p9jC2r);
      } else {
        string2Result = string2(t2.U7f3bK);
      }
      items3[1] = tmp13(Text2, obj20);
      tmp18Result = tmp18(PressableOpacity2, obj18);
    }
    let showMentionToggle1;
    if (pendingReply != null) {
      showMentionToggle1 = pendingReply.showMentionToggle;
    }
    let tmp13Result2 = null;
    if (showMentionToggle1) {
      tmp13Result2 = null;
      if (null != tmp13Result) {
        const obj21 = { style: tmp.floatingDivider };
        tmp13Result2 = tmp13(guildId, obj21);
      }
    }
    const obj22 = { style: tmp.contextBarRow, children: items4 };
    items4 = [tmp12, ];
    const obj23 = { style: items5, children: items6 };
    items5 = [tmp.floatingRightActions, { gap: bound }];
    items6 = [tmp18Result, tmp13Result2, tmp13Result];
    items4[1] = closure_13(guildId, obj23);
    return closure_13(guildId, obj22);
  }
}
function ChatInputEditBar(onCancelEditing) {
  let Icon;
  let intl;
  let intl2;
  let items;
  let obj5;
  let obj7;
  let tmp9;
  onCancelEditing = onCancelEditing.onCancelEditing;
  const tmp = closure_17();
  obj = useToken;
  const token = obj.useToken(nativeDefault.modules.mobile.CHAT_INPUT_BUTTON_MIN_TOUCH_TARGET_SIZE);
  const obj2 = useToken;
  const bound = Math.max(0, (token - obj2.useToken(nativeDefault.modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_SIZE)) / 2);
  const obj3 = { lineClamp: 1, variant: "text-sm/normal", color: "text-strong", style: tmp.floatingReplyTextWrapper, children: intl.string(intl9.t.rtNXxN) };
  const Text = Text_Text.Text;
  intl = intl9.intl;
  const obj4 = { accessibilityRole: "button", accessibilityLabel: intl2.string(intl9.t.qv9j1K), activeOpacity: 0.5, hitSlop: tmp9, onPress: onCancelEditing, children: authStore2(Icon, obj5) };
  const tmp8 = authStore2(Text, obj3);
  const PressableOpacity = Pressables.PressableOpacity;
  intl2 = intl9.intl;
  tmp9 = undefined;
  if (bound > 0) {
    tmp9 = bound;
  }
  obj5 = { source: AssetRegistryDefault, size: native.Icon.Sizes.CUSTOM, style: tmp.floatingCloseIcon };
  Icon = tmp2(1187).Icon;
  const obj6 = { style: tmp.contextBarRow, children: map1(authStore3, obj7) };
  obj7 = { children: items };
  items = [tmp8, ];
  const obj8 = { style: tmp.floatingRightActions, children: authStore2(PressableOpacity, obj4) };
  items[1] = authStore2(hasOwnProperty, obj8);
  return authStore2(hasOwnProperty, obj6);
}
function ChatInputScheduledMessageBar(scheduledTimestamp) {
  let Icon;
  let date;
  let intl2;
  let intl3;
  let items;
  let obj6;
  let obj8;
  let onCancelScheduling;
  let onEditSchedule;
  let tmp10;
  scheduledTimestamp = scheduledTimestamp.scheduledTimestamp;
  ({ onCancelScheduling, onEditSchedule } = scheduledTimestamp);
  const tmp = closure_17();
  obj = useToken;
  const token = obj.useToken(nativeDefault.modules.mobile.CHAT_INPUT_BUTTON_MIN_TOUCH_TARGET_SIZE);
  const obj2 = useToken;
  const bound = Math.max(0, (token - obj2.useToken(nativeDefault.modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_SIZE)) / 2);
  const intl = intl9.intl;
  const formatToPlainString = intl.formatToPlainString;
  const obj3 = { timestamp: date.valueOf() };
  const ZN3tIx = intl9.t.ZN3tIx;
  date = new Date(scheduledTimestamp);
  const formatToPlainStringResult = formatToPlainString(ZN3tIx, obj3);
  const obj4 = { style: tmp.floatingReplyTextWrapper, accessibilityRole: "button", accessibilityLabel: formatToPlainStringResult, accessibilityHint: intl2.string(intl9.t.SBcdAN), activeOpacity: 0.5, onPress: onEditSchedule, children: authStore2(Text_Text.Text, { lineClamp: 1, variant: "text-sm/normal", color: "text-strong", children: formatToPlainStringResult }) };
  const PressableOpacity = Pressables.PressableOpacity;
  intl2 = intl9.intl;
  const obj5 = { accessibilityRole: "button", accessibilityLabel: intl3.string(intl9.t.cpT0Cq), activeOpacity: 0.5, hitSlop: tmp10, onPress: onCancelScheduling, children: authStore2(Icon, obj6) };
  const tmp9 = authStore2(PressableOpacity, obj4);
  const PressableOpacity2 = Pressables.PressableOpacity;
  intl3 = intl9.intl;
  tmp10 = undefined;
  if (bound > 0) {
    tmp10 = bound;
  }
  obj6 = { source: AssetRegistryDefault, size: native.Icon.Sizes.CUSTOM, style: tmp.floatingCloseIcon };
  Icon = tmp2(1187).Icon;
  const obj7 = { style: tmp.contextBarRow, children: map1(authStore3, obj8) };
  obj8 = { children: items };
  items = [tmp9, ];
  const obj9 = { style: tmp.floatingRightActions, children: authStore2(PressableOpacity2, obj5) };
  items[1] = authStore2(hasOwnProperty, obj9);
  return authStore2(hasOwnProperty, obj7);
}
function ContextBarItem(arg0) {
  let children;
  let closure_3;
  let items1;
  let ref;
  let backgroundColor;
  let ref1;
  react = undefined;
  ({ children, ref } = arg0);
  obj = backgroundColor(ref1[21]);
  backgroundColor = closure_16(obj.useGradientValue(backgroundColor(ref1[21]).GradientPercentage.END)).contextBar.backgroundColor;
  let tmp = closure_17();
  const obj2 = backgroundColor(ref1[22]);
  const sharedValue = obj2.useSharedValue(0);
  let fn = function o() {
    obj = { backgroundColor, maxHeight: sharedValue.get() };
    return obj;
  };
  fn.__closure = { stylesBackgroundColor: backgroundColor, heightSv: sharedValue };
  fn.__workletHash = 16731072716488;
  fn.__initData = __initData;
  const obj3 = backgroundColor(ref1[22]);
  const animatedStyle = obj3.useAnimatedStyle(fn);
  ref1 = react.useRef(null);
  const items = [ref1];
  react = react.useCallback(() => {
    const current = ref1.current;
    if (current != null) {
      current();
    }
  }, items);
  const imperativeHandle = react.useImperativeHandle(ref, () => {
    let handleTransitionFinished;
    obj = {
      componentDidAppear() {
        set = sharedValue.set;
        obj = backgroundColor(ref1[23]);
        const result = set(obj.withTiming(60, closure_2_15));
      },
      componentDidEnter() {
        set = sharedValue.set;
        obj = backgroundColor(ref1[23]);
        const result = set(obj.withTiming(60, closure_2_15));
      },
      componentWillLeave(current) {
        closure_1_2.current = current;
        set = sharedValue.set;
        obj = backgroundColor(ref1[23]);
        const fn = function n(arg0) {
          const tmp = arg0;
          if (tmp) {
            obj = backgroundColor(ref1[22]);
            obj.runOnJS(handleTransitionFinished)();
          }
        };
        fn.__closure = { runOnJS: backgroundColor(ref1[22]).runOnJS, handleTransitionFinished };
        fn.__workletHash = 10908592279914;
        fn.__initData = __initData;
        ({ runOnJS: backgroundColor(ref1[22]).runOnJS, handleTransitionFinished });
        const result = set(obj.withTiming(0, closure_2_15, "respect-motion-settings", fn));
      }
    };
    return obj;
  });
  const obj4 = { style: items1, children };
  items1 = [animatedStyle, tmp.floatingContextBar];
  return closure_12(sharedValue(ref1[22]).View, obj4);
}
let react = react_mod;
({ StyleSheet: closure_4, View: hasOwnProperty } = react_native);
const DraftType = DraftStore2.DraftType;
({ AnalyticEvents: c10, Routes: unpackModuleId } = Constants);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = Fragment);
let obj = { duration: 250, easing: native.STANDARD_EASING };
let createStyles = createStyles_mod;
let closure_16 = createStyles.createStyles((arg0) => {
  let MOBILE_FLOATING_ACCESSORY_BACKGROUND = arg0;
  if (arg0 == null) {
    MOBILE_FLOATING_ACCESSORY_BACKGROUND = nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND;
  }
  return { contextBar: { backgroundColor: MOBILE_FLOATING_ACCESSORY_BACKGROUND } };
});
createStyles = createStyles_mod;
let closure_17 = createStyles.createStyles(() => {
  let size1;
  obj = { contextBarRow: { overflow: "hidden", flexDirection: "row", alignItems: "center", paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_CONTEXT_BAR_PADDING_HORIZONTAL, paddingVertical: nativeDefault.modules.mobile.CHAT_INPUT_CONTEXT_BAR_PADDING_VERTICAL, gap: nativeDefault.modules.mobile.CHAT_INPUT_CONTEXT_BAR_GAP }, floatingReplyTextWrapper: { flexShrink: 1, minWidth: 0 }, floatingContextBar: { borderBottomWidth: React3.hairlineWidth, borderBottomColor: nativeDefault.colors.BORDER_MUTED, overflow: "hidden" }, replyMentionButtonActive: { color: nativeDefault.colors.CONTROL_BRAND_FOREGROUND }, replyMentionIcon: size, replyMentionIconActive: { tintColor: nativeDefault.colors.CONTROL_BRAND_FOREGROUND }, floatingRightActions: { flexGrow: 1, flexShrink: 0, flexDirection: "row", alignItems: "center", justifyContent: "flex-end", gap: 8 }, floatingMentionGroup: { flexDirection: "row", alignItems: "center", gap: 2 }, floatingDivider: { width: React3.hairlineWidth, alignSelf: "stretch", backgroundColor: nativeDefault.colors.BORDER_SUBTLE }, floatingCloseIcon: size1 };
  ({ overflow: "hidden", flexDirection: "row", alignItems: "center", paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_CONTEXT_BAR_PADDING_HORIZONTAL, paddingVertical: nativeDefault.modules.mobile.CHAT_INPUT_CONTEXT_BAR_PADDING_VERTICAL, gap: nativeDefault.modules.mobile.CHAT_INPUT_CONTEXT_BAR_GAP });
  ({ borderBottomWidth: React3.hairlineWidth, borderBottomColor: nativeDefault.colors.BORDER_MUTED, overflow: "hidden" });
  ({ color: nativeDefault.colors.CONTROL_BRAND_FOREGROUND });
  size = { width: nativeDefault.modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_SIZE, height: nativeDefault.modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_SIZE, tintColor: nativeDefault.colors.TEXT_MUTED, marginRight: nativeDefault.modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_MARGIN_RIGHT };
  ({ tintColor: nativeDefault.colors.CONTROL_BRAND_FOREGROUND });
  ({ width: React3.hairlineWidth, alignSelf: "stretch", backgroundColor: nativeDefault.colors.BORDER_SUBTLE });
  size1 = { width: nativeDefault.modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_SIZE, height: nativeDefault.modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_SIZE, tintColor: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT };
  return obj;
});
const __initData = { code: "function ChatInputContextBarTsx1(){const{stylesBackgroundColor,heightSv}=this.__closure;return{backgroundColor:stylesBackgroundColor,...{maxHeight:heightSv.get()}};}" };
let closure_23 = { code: "function ChatInputContextBarTsx2(finished){const{runOnJS,handleTransitionFinished}=this.__closure;if(finished){runOnJS(handleTransitionFinished)();}}" };
const memoResult = react.memo(function ChatInputContextBar(channel) {
  let items2;
  let obj3;
  let obj5;
  let obj7;
  let obj9;
  let onCancelEditing;
  let onTapContextBarReply;
  let onToggleReplyMention;
  channel = channel.channel;
  const chatInputRef = channel.chatInputRef;
  const pendingReply = channel.pendingReply;
  let stateFromStores;
  const items = [channel, chatInputRef, pendingReply];
  const pendingEdit = channel.pendingEdit;
  const memo = stateFromStores.useMemo(() => {
    let ref;
    obj = {
      onCancelEditing() {
        const current = ref.current;
        if (current != null) {
          current.handleCancelEditing();
        }
      },
      onCancelReplying() {
        let id1;
        let id2;
        let tmp8Result;
        if (null != closure_1_2) {
          const obj3 = channel(pendingReply[24]);
          obj3.deletePendingReply(id.id);
          const tmp10 = id;
          id = undefined;
          const track = chatInputRef(pendingReply[25]).track;
          const CHAT_CONTEXT_BAR_ACTION_CANCELED = constants.CHAT_CONTEXT_BAR_ACTION_CANCELED;
          chatInputRef(pendingReply[25]);
          const tmp8 = channel;
          const tmp9 = pendingReply;
          if (closure_1_2 != null) {
            id = tmp.message.id;
          }
          obj = { message_id: id, channel_id: null, guild_id: null, context_action: "reply", reason: tmp8Result.getContextBarCancelReason("reply", "cancel"), is_own_message: id1 === id2 };
          ({ id: obj.channel_id, guild_id: obj.guild_id } = tmp10);
          tmp8Result = tmp8(tmp9[26]);
          currentUser = currentUser.getCurrentUser();
          id1 = undefined;
          if (currentUser != null) {
            id1 = currentUser.id;
          }
          id2 = undefined;
          if (closure_1_2 != null) {
            id2 = tmp.message.author.id;
          }
          track(CHAT_CONTEXT_BAR_ACTION_CANCELED, obj);
        }
      },
      onTapContextBarReply() {
        if (null != closure_1_2) {
          obj = channel(pendingReply[27]);
          channel = tmp.channel;
          obj.transitionTo(closure_2_11.CHANNEL(channel.getGuildId(), closure_1_2.channel.id, closure_1_2.message.id));
        }
      },
      onToggleReplyMention() {
        if (null != closure_1_2) {
          obj = channel(pendingReply[24]);
          const result = obj.setPendingReplyShouldMention(tmp.channel.id, !tmp.shouldMention);
        }
      }
    };
    return obj;
  }, items);
  const onCancelReplying = memo.onCancelReplying;
  ({ onCancelEditing, onTapContextBarReply, onToggleReplyMention } = memo);
  let message;
  const useNullableMessageAuthor = channel(pendingReply[28]).useNullableMessageAuthor;
  const tmp4 = channel(pendingReply[28]);
  if (pendingReply != null) {
    message = pendingReply.message;
  }
  const nullableMessageAuthor = useNullableMessageAuthor(message);
  const items1 = [DraftStore];
  const tmp2Result = channel(pendingReply[15]);
  stateFromStores = tmp2Result.useStateFromStores(items1, () => DraftStore.getScheduledMessage(channel.id));
  let tmp8 = closure_13;
  obj = { component, children: items2 };
  let tmp9 = null != pendingReply;
  const TransitionGroup = tmp2(tmp3[29]).TransitionGroup;
  if (tmp9) {
    tmp9 = null != nullableMessageAuthor;
  }
  if (tmp9) {
    let tmp10 = closure_12;
    const obj2 = { children: closure_12(ChatInputReplyBar, obj3) };
    obj3 = { pendingReply, pendingReplyAuthor: nullableMessageAuthor, onTapContextBarReply, onCancelReplying, onToggleReplyMention };
    tmp9 = closure_12(ContextBarItem, obj2);
  }
  items2 = [tmp9, , , ];
  let tmp13 = null != pendingReply && null == nullableMessageAuthor;
  if (tmp13) {
    const obj4 = { children: closure_12(ChatInputReplyBarNoAuthor, obj5) };
    obj5 = { onCancelReplying };
    tmp13 = closure_12(ContextBarItem, obj4);
  }
  items2[1] = tmp13;
  let tmp17 = null != pendingEdit;
  if (tmp17) {
    const obj6 = { children: closure_12(ChatInputEditBar, obj7) };
    obj7 = { onCancelEditing };
    tmp17 = closure_12(ContextBarItem, obj6);
  }
  items2[2] = tmp17;
  let tmp21 = null != stateFromStores;
  if (tmp21) {
    const obj8 = { children: closure_12(ChatInputScheduledMessageBar, obj9) };
    obj9 = {
      scheduledTimestamp: stateFromStores.scheduledTimestamp,
      onCancelScheduling() {
          obj = DraftActionCreatorsDefault;
          return obj.clearDraft(channel.id, DraftType.ScheduledMessage);
        },
      onEditSchedule() {
          obj = ScheduledMessagesUtils;
          return obj.openScheduleMessageActionSheet(channel.id, ScheduledMessageTypes.ScheduledMessageEntryPoint.COMPOSER_BAR, stateFromStores.scheduledTimestamp);
        }
    };
    tmp21 = closure_12(ContextBarItem, obj8);
  }
  items2[3] = tmp21;
  return tmp8(TransitionGroup, obj);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/chat_input/native/ChatInputContextBar.tsx");

export default memoResult;
export { ChatInputReplyBar };

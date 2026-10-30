// Module ID: 18519
// Function ID: 18520
// Name: ICYMICardInteractionRow
// Dependencies: [32, 19, 17, 7471, 4858, 6702, 4941, 1072, 1387, 21, 4953, 8397, 5009, 575, 1376, 5006, 504, 7479, 7629, 9918, 6974, 1114, 9430, 5619, 10076, 1091, 4834, 1410, 9873, 5712, 10746, 11128, 13341, 12710, 18511, 8635, 5610, 8421, 10173, 8915, 13329, 10181, 5591, 5582, 671, 7372, 2]
// Exports: default, onAddReaction, useThread

// Module 18519 (ICYMICardInteractionRow)
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1114 */;
import PlatformUtils from "PlatformUtils" /* 1376 */;
import EmojiConstants from "EmojiConstants" /* 1387 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1410 */;
import ReactionUtils from "ReactionUtils" /* 4953 */;
import MessageReactionsTypes from "MessageReactionsTypes" /* 5610 */;
import Pressables from "Pressables" /* 6974 */;
import ReactionActionCreators from "ReactionActionCreators" /* 8397 */;
import canAddNewReactionsDefault from "canAddNewReactions" /* 8421 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 8915 */;
import messages_MessagesUtils from "messages/MessagesUtils" /* 9873 */;
import openEmojiPickerActionSheet2 from "openEmojiPickerActionSheet" /* 9918 */;
import PendingReplyActionCreators from "PendingReplyActionCreators" /* 10181 */;
import ArrowAngleLeftUpIcon from "ArrowAngleLeftUpIcon" /* 12710 */;
import ForwardModalUtils from "ForwardModalUtils" /* 13329 */;
import ForwardingIconDefault from "ForwardingIcon" /* 13341 */;
import ICYMIShared from "ICYMIShared" /* 18511 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ThreadMessageStore from "ThreadMessageStore" /* 7471 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import GuildVerificationStore from "GuildVerificationStore" /* 6702 */;
import PermissionStore from "PermissionStore" /* 4941 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, nativeEvent;

let closure_12;
let closure_15;
let closure_16;
let closure_17;
let hasOwnProperty;
let map1;
let metroRequire;
let tmp4;
let unpackModuleId;
const ColorUtils = tmp4(5006);
function AddEmojiButton(channel) {
  let disabled;
  let handleItemInteracted;
  let intl;
  let intl2;
  let items1;
  let items2;
  let showText;
  channel = channel.channel;
  const onPressEmoji = channel.onPressEmoji;
  ({ showText, disabled, handleItemInteracted } = channel);
  const tmp = closure_19();
  const items = [channel, onPressEmoji, handleItemInteracted];
  const callback = react.useCallback(() => {
    let guild_id;
    handleItemInteracted("press_reaction_picker", { actionGestureType: "press", actionTargetElement: "reaction_picker_button", actionIntentType: "open", actionDestinationType: null });
    const obj = { pickerIntention: EmojiIntention.REACTION, autoFocus: false, startExpanded: false, onPressEmoji, channel, guildId: guild_id };
    guild_id = undefined;
    const openEmojiPickerActionSheet = openEmojiPickerActionSheet2.openEmojiPickerActionSheet;
    openEmojiPickerActionSheet2;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    const result = openEmojiPickerActionSheet(obj);
  }, items);
  let obj = { onPress: callback, style: items1, accessible: true, accessibilityLabel: intl.string(channel(handleItemInteracted[21]).t.lfIHs4), disabled, children: items2 };
  items1 = [, , ];
  ({ emojiContainer: arr2[0], addEmojiContainer: arr2[1] } = tmp);
  let disabled1 = null;
  const PressableOpacity = channel(handleItemInteracted[20]).PressableOpacity;
  const tmp3 = closure_16;
  if (disabled) {
    disabled1 = tmp.disabled;
  }
  items1[2] = disabled1;
  intl = tmp4(tmp5[21]).intl;
  items2 = [closure_15(channel(handleItemInteracted[22]).ReactionIcon, { size: "sm" }), ];
  const tmp7 = closure_15;
  if (showText) {
    const obj2 = { variant: "text-sm/semibold", color: "redesign-button-tertiary-text", children: intl2.string(channel(handleItemInteracted[21]).t.m9O1gd) };
    const Text = tmp4(tmp5[23]).Text;
    intl2 = tmp4(tmp5[21]).intl;
    showText = tmp7(Text, obj2);
  }
  items2[1] = showText;
  return tmp3(PressableOpacity, obj);
}
function EmojiReaction(messageId) {
  let backgroundColor1;
  let items5;
  let items6;
  let items7;
  let obj9;
  let tmp18Result;
  let tmp23;
  let tmp24;
  messageId = messageId.messageId;
  const channel = messageId.channel;
  const reaction = messageId.reaction;
  const isBurstReaction = messageId.isBurstReaction;
  const handleItemInteracted = messageId.handleItemInteracted;
  let emoji;
  let setting;
  const count = messageId.count;
  let tmp = closure_19();
  let tmp2 = messageId;
  let burst_colors = reaction.burst_colors;
  const useEmojiColorPalette = messageId(reaction[24]).useEmojiColorPalette;
  const tmp4 = messageId(reaction[24]);
  if (burst_colors == null) {
    burst_colors = [];
  }
  const emojiColorPalette = useEmojiColorPalette(burst_colors);
  let str = "";
  if (null != emojiColorPalette) {
    let backgroundColor;
    const hex2rgb = tmp2(tmp3[25]).hex2rgb;
    tmp2(reaction[25]);
    if (emojiColorPalette != null) {
      backgroundColor = emojiColorPalette.backgroundColor;
    }
    let num;
    if (emojiColorPalette != null) {
      num = emojiColorPalette.opacity;
    }
    if (num == null) {
      num = 0.15;
    }
    let str2 = hex2rgb(backgroundColor, num);
    if (str2 == null) {
      str2 = "";
    }
    str = str2;
  }
  let obj = { backgroundColor: str, borderColor: backgroundColor1 };
  backgroundColor1 = undefined;
  if (emojiColorPalette != null) {
    backgroundColor1 = emojiColorPalette.backgroundColor;
  }
  let accentColor;
  if (emojiColorPalette != null) {
    accentColor = emojiColorPalette.accentColor;
  }
  let tmp10 = null;
  if (null != accentColor) {
    let obj2 = { color: emojiColorPalette.accentColor };
    tmp10 = obj2;
  }
  emoji = reaction.emoji;
  let selectedInnerTextContainer = isBurstReaction ? reaction.me_burst : reaction.me;
  let selected;
  if (selectedInnerTextContainer) {
    selected = tmp.selected;
  }
  const items = [GuildVerificationStore];
  const tmp2Result3 = tmp2(reaction[16]);
  const stateFromStores = tmp2Result3.useStateFromStores(items, () => {
    const canChatInGuildResult = null != channel.guild_id && GuildVerificationStore.canChatInGuild(tmp.guild_id);
    return canChatInGuildResult;
  });
  const AnimateEmoji = tmp2(tmp3[26]).AnimateEmoji;
  setting = AnimateEmoji.useSetting();
  const items1 = [emoji, setting];
  const items2 = [channel, isBurstReaction, messageId, reaction, handleItemInteracted];
  const memo = handleItemInteracted.useMemo(() => {
    let animated;
    let tmp2;
    const tmp = emoji;
    if (null != emoji.id) {
      const obj = { id: null, animated, size: 48 };
      ({ id: obj.id, animated } = tmp);
      const getEmojiURL = AvatarUtilsDefault.getEmojiURL;
      AvatarUtilsDefault;
      if (animated) {
        animated = setting;
      }
      tmp2 = { uri: getEmojiURL(obj) };
      const obj2 = { uri: getEmojiURL(obj) };
    }
    return tmp2;
  }, items1);
  const callback = handleItemInteracted.useCallback(() => {
    handleItemInteracted("press_reaction", { actionGestureType: "press", actionTargetElement: "toggle_existing_reaction_button", actionIntentType: "react", actionDestinationType: null });
    const obj = messages_MessagesUtils;
    const result = obj.handleAddOrRemoveReaction(messageId, channel, reaction, isBurstReaction, ReactionActionCreators.ReactionLocations.MESSAGE);
  }, items2);
  const items3 = [tmp.emojiContainer, selected, ];
  let tmp17 = isBurstReaction;
  const PressableOpacity = tmp2(tmp3[20]).PressableOpacity;
  const tmp16 = closure_16;
  if (isBurstReaction) {
    tmp17 = obj;
  }
  const obj3 = { style: items3, onPress: callback, accessible: true, accessibilityLabel: emoji.name, disabled: !stateFromStores, children: items7 };
  items3[2] = tmp17;
  const items4 = [tmp.innerEmojiContainer, ];
  const obj4 = { style: items4, children: tmp18Result };
  const tmp20 = selectedInnerTextContainer && tmp.selectedInnerEmojiContainer;
  items4[1] = tmp20;
  if (null == emoji.id) {
    const obj5 = { variant: "text-md/medium", color: "interactive-text-default", style: items5, allowFontScaling: false, children: emoji.name };
    items5 = [, ];
    ({ defaultEmoji: arr8[0], emojiText: arr8[1] } = tmp);
    tmp18Result = tmp18(tmp2(tmp3[23]).Text, obj5);
  } else {
    const tmp2Result4 = tmp2(reaction[14]);
    if (tmp2Result4.isAndroid()) {
      const obj6 = { style: items6, source: memo };
      items6 = [, ];
      ({ defaultEmoji: arr7[0], emojiImage: arr7[1] } = tmp);
      tmp18Result = tmp18(tmp25(tmp3[29]), obj6);
    } else {
      const obj7 = { emoji, size: v20, style: tmp.defaultEmoji, animate: true };
      tmp18Result = tmp18(tmp25(tmp3[30]), obj7);
    }
  }
  items7 = [closure_15(emoji, obj4), ];
  const items8 = [tmp.innerTextContainer, ];
  if (selectedInnerTextContainer) {
    selectedInnerTextContainer = tmp.selectedInnerTextContainer;
  }
  items8[1] = selectedInnerTextContainer;
  const obj8 = { style: items8, children: closure_15(tmp23, obj9) };
  obj9 = { animate: true, count, textStyle: tmp24, textVariant: "text-md/semibold" };
  tmp24 = null;
  tmp23 = channel(reaction[31]);
  if (isBurstReaction) {
    tmp24 = tmp10;
  }
  items7[1] = closure_15(emoji, obj8);
  return tmp16(PressableOpacity, obj3);
}
function ForwardButton(disabled) {
  let intl;
  let items;
  disabled = disabled.disabled;
  const onPress = disabled.onPress;
  const tmp = closure_19();
  const obj = { onPress, style: items, accessible: true, disabled, accessibilityLabel: intl.string(intl3.t.xIUfJS), children: closure_15(ForwardingIconDefault, { size: "sm" }) };
  items = [, , ];
  ({ emojiContainer: arr[0], addEmojiContainer: arr[1] } = tmp);
  let disabled1 = null;
  const PressableOpacity = Pressables.PressableOpacity;
  if (disabled) {
    disabled1 = tmp.disabled;
  }
  items[2] = disabled1;
  intl = tmp3(1114).intl;
  return closure_15(PressableOpacity, obj);
}
function ReplyButton(disabled) {
  let intl;
  let items;
  disabled = disabled.disabled;
  const onPress = disabled.onPress;
  const tmp = closure_19();
  const obj = { onPress, style: items, accessible: true, disabled, accessibilityLabel: intl.string(intl3.t["5NwaNY"]), children: closure_15(ArrowAngleLeftUpIcon.ArrowAngleLeftUpIcon, { size: "sm" }) };
  items = [, , ];
  ({ emojiContainer: arr[0], addEmojiContainer: arr[1] } = tmp);
  let disabled1 = null;
  const PressableOpacity = Pressables.PressableOpacity;
  if (disabled) {
    disabled1 = tmp.disabled;
  }
  items[2] = disabled1;
  intl = tmp3(1114).intl;
  return closure_15(PressableOpacity, obj);
}
function ThreadAsCommentsButton(parentMessage) {
  let handleItemInteracted;
  let items2;
  let items3;
  let items4;
  let obj3;
  let obj7;
  let obj8;
  let style;
  parentMessage = parentMessage.parentMessage;
  const threadData = parentMessage.threadData;
  ({ style, handleItemInteracted } = parentMessage);
  const tmp = closure_19();
  let tmp2 = parentMessage;
  let obj = parentMessage(handleItemInteracted[16]);
  const items = [PermissionStore];
  const items1 = [parentMessage, threadData.thread, handleItemInteracted];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const obj = { channelId: parentMessage.id };
    return PermissionStore.canWithPartialContext(constants.VIEW_CHANNEL, obj);
  });
  const callback = react.useCallback(() => {
    handleItemInteracted("press_comments", { actionGestureType: "press", actionTargetElement: "thread_comments_button", actionIntentType: "navigate", actionDestinationType: "channel" });
    const tmp2 = null != parentMessage && null != threadData.thread;
    if (tmp2) {
      const obj2 = ICYMIShared;
      obj2.navigateToPost(parentMessage.getChannelId(), threadData.thread.guild_id, parentMessage.id);
    }
  }, items1);
  if (stateFromStores) {
    if (0 !== threadData.messageCount) {
      if (null != threadData.thread) {
        if (null != threadData.mostRecentMessage) {
          let str = "9+";
          if (threadData.messageCount <= 9) {
            str = threadData.messageCount;
          }
          let obj2 = { style: items2, onPress: callback, children: closure_16(closure_5, obj3) };
          items2 = [tmp.comments, style];
          obj3 = { style: tmp.commentCount, children: items3 };
          const PressableHighlight2 = tmp2(tmp3[20]).PressableHighlight;
          const obj4 = { style: tmp.commentsIcon };
          items3 = [closure_15(tmp2(tmp3[35]).ChatIcon, obj4), ];
          const obj5 = { variant: "text-md/semibold", color: "text-strong", children: str };
          items3[1] = closure_15(tmp2(handleItemInteracted[23]).Text, obj5);
          return closure_15(PressableHighlight2, obj2);
        }
      }
      const obj6 = { style: items4, onPress: callback, children: closure_15(closure_5, obj7) };
      items4 = [tmp.comments, style];
      obj7 = { style: tmp.commentCount, children: closure_15(tmp2(handleItemInteracted[35]).ChatIcon, obj8) };
      const PressableHighlight = tmp2(tmp3[20]).PressableHighlight;
      obj8 = { style: tmp.commentsIcon };
      return closure_15(PressableHighlight, obj6);
    }
  }
  return null;
}
({ View: hasOwnProperty, ScrollView: metroRequire } = react_native);
({ MessageFlags: unpackModuleId, Permissions: closure_12, HorizontalGradient: map1 } = Constants);
const EmojiIntention = EmojiConstants.EmojiIntention;
({ jsx: closure_15, jsxs: closure_16, Fragment: closure_17 } = Fragment);
let c18 = 20;
let closure_19 = createStyles.createStyles(() => {
  let num;
  let obj3;
  let size1;
  let tmp4Result;
  const obj = { container: { flexDirection: "row", alignItems: "center", flexWrap: "wrap", justifyContent: "space-between" }, replyForwardButtonContainer: { flexDirection: "row", alignItems: "center", flexWrap: "wrap", gap: 6 }, emojisRowContainer: { position: "relative", flexDirection: "row", alignItems: "center", flexWrap: "wrap", gap: 6 }, emojisContainer: { position: "relative", flexDirection: "row", alignItems: "center", flexWrap: "wrap", gap: 6 }, emojiContainer: { flexDirection: "row", backgroundColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND, borderRadius: nativeDefault.radii.sm, flexShrink: 3, paddingHorizontal: 8, gap: 6 }, innerEmojiContainer: { paddingVertical: 5 }, selectedInnerEmojiContainer: { paddingVertical: 4 }, addEmojiContainer: { minHeight: 30, alignItems: "center" }, disabled: { opacity: 0.4 }, defaultEmoji: size, emojiText: { lineHeight: num, fontSize: 16, textAlign: "center", paddingTop: 2 }, selectedInnerTextContainer: { paddingBottom: 3.5 }, innerTextContainer: { alignSelf: "flex-end", paddingBottom: 4.5 }, emojiImage: { resizeMode: "contain", width: v20, height: v20 }, selected: obj3, gradient: { position: "absolute", right: 0, top: 0, bottom: 0, width: 48 }, overflowChevron: { position: "absolute", right: 0 }, comments: { paddingVertical: 6, paddingHorizontal: 8, backgroundColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND, borderRadius: nativeDefault.radii.sm, display: "flex", flexDirection: "row", alignItems: "center", gap: 8 }, commentCount: { display: "flex", flexDirection: "row", alignItems: "center", gap: 4, justifySelf: "end" }, commentsIcon: size1 };
  size = { width: v20, height: v20 };
  ({ flexDirection: "row", backgroundColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND, borderRadius: nativeDefault.radii.sm, flexShrink: 3, paddingHorizontal: 8, gap: 6 });
  num = 16;
  const obj4 = PlatformUtils;
  if (!obj4.isAndroid()) {
    num = tmp3;
  }
  obj3 = { borderColor: nativeDefault.unsafe_rawColors.BRAND_560, borderWidth: 1, paddingHorizontal: 7, backgroundColor: tmp4Result.hexWithOpacity(nativeDefault.unsafe_rawColors.BRAND_500, 0.3) };
  tmp4Result = ColorUtils;
  ({ paddingVertical: 6, paddingHorizontal: 8, backgroundColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND, borderRadius: nativeDefault.radii.sm, display: "flex", flexDirection: "row", alignItems: "center", gap: 8 });
  size1 = { width: 20, height: 20, tintColor: tmp(575).colors.INTERACTIVE_TEXT_DEFAULT };
  return obj;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/icymi/native/ICYMICardInteractionRow.tsx");

export default function ICYMICardInteractionRow(message) {
  let _undefined;
  let c12;
  let guild;
  let hasOverflow;
  let hideAdditionalButtons;
  let items11;
  let items12;
  let items13;
  let items14;
  let items15;
  let items16;
  let messageCount;
  let mostRecentMessage;
  let obj5;
  let showReplyForwardButtons;
  let showThreadAsComments;
  let thread;
  let tmp18;
  let tmp22Result2;
  let tmp25Result4;
  message = message.message;
  let channel = message.channel;
  ({ guild, hideAdditionalButtons } = message);
  if (hideAdditionalButtons === undefined) {
    hideAdditionalButtons = false;
  }
  let flag = message.isKeyMessage;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = message.inForum;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let str = message.backgroundVariant;
  if (str === undefined) {
    str = "primary";
  }
  let id = message.id;
  const itemType = message.itemType;
  let obj3;
  let memo;
  let canForwardMessage;
  let stateFromStores;
  let handleItemInteracted;
  c12 = undefined;
  let tmp = closure_19();
  let tmp2 = message;
  let obj = message(hideAdditionalButtons[16]);
  let items = [memo, obj3];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let num;
    let obj2;
    if (null != message) {
      let obj;
      if (null != guild) {
        channel = memo.getChannel(tmp.id);
        if (channel == null) {
          channel = null;
        }
        obj = { thread: channel, messageCount: num, mostRecentMessage: obj2.getMostRecentMessage(message.id) };
        num = obj3.getCount(tmp.id);
        obj2 = obj3;
        if (num == null) {
          num = 0;
        }
      }
      return obj;
    }
    obj = { thread: null, messageCount: 0, mostRecentMessage: null };
  });
  let obj2 = str;
  let id1;
  ({ thread, messageCount, mostRecentMessage } = stateFromStoresObject);
  const useEffect = str.useEffect;
  if (guild != null) {
    id1 = guild.id;
  }
  const items1 = [id1, flag2, message, guild];
  const effect = useEffect(() => {
    let tmp = null != message && null != guild;
    if (tmp) {
      tmp = message.hasFlag(callback.HAS_THREAD) || flag2;
      message.hasFlag(callback.HAS_THREAD) || flag2;
    }
    if (tmp) {
      tmp = null == obj3.getMostRecentMessage(obj.id);
    }
    if (tmp) {
      const obj2 = channel(hideAdditionalButtons[17]);
      obj2.preload(guild.id, message.id);
      obj3 = channel(hideAdditionalButtons[18]);
      const obj4 = { channelId: message.id, isPreload: true, limit: 25 };
      const messages = obj3.fetchMessages(obj4);
    }
  }, items1);
  obj3 = { thread, messageCount, mostRecentMessage };
  const items2 = [message.reactions];
  memo = obj2.useMemo(() => {
    const items = [];
    const reactions = message.reactions;
    const item = reactions.forEach((me_vote) => {
      if (null == me_vote.me_vote) {
        if (me_vote.burst_count > 0) {
          const push = items.push;
          const obj = { type: message(hideAdditionalButtons[36]).ReactionTypes.BURST };
          const merged = Object.assign(me_vote);
          push(obj);
        }
        if (me_vote.count > 0) {
          const push2 = items.push;
          const obj2 = { type: message(hideAdditionalButtons[36]).ReactionTypes.NORMAL };
          const merged1 = Object.assign(me_vote);
          push2(obj2);
        }
      }
    });
    return items;
  }, items2);
  const items3 = [channel];
  const memo1 = obj2.useMemo(() => {
    const tmp2 = null != channel && canAddNewReactionsDefault(tmp);
    return tmp2;
  }, items3);
  const tmp2Result = tmp2(hideAdditionalButtons[38]);
  canForwardMessage = tmp2Result.useCanForwardMessage(message);
  const items4 = [stateFromStores];
  const tmp2Result3 = tmp2(hideAdditionalButtons[16]);
  stateFromStores = tmp2Result3.useStateFromStores(items4, () => PermissionStore.can(_undefined.SEND_MESSAGES, channel));
  const items5 = [hideAdditionalButtons, obj3.messageCount, memo.length, stateFromStores, canForwardMessage];
  const memo2 = obj2.useMemo(() => {
    let tmp4;
    let tmp5;
    let num = 4;
    if (hideAdditionalButtons) {
      num = 6;
    }
    let diff = num;
    const tmp2 = obj3;
    if (obj3.messageCount > 0) {
      diff = num - 1;
    }
    let num3 = 0;
    if (memo.length > diff) {
      num3 = memo.length - diff;
    }
    const obj = { hasOverflow: num3 > 0, showReplyForwardButtons: tmp5, showThreadAsComments: tmp4 };
    tmp5 = !tmp;
    tmp4 = tmp2.messageCount > 0;
    if (!hideAdditionalButtons) {
      tmp5 = stateFromStores || canForwardMessage;
    }
    return obj;
  }, items5);
  ({ hasOverflow, showReplyForwardButtons, showThreadAsComments } = memo2);
  const items6 = [id, itemType];
  handleItemInteracted = obj2.useCallback((open_profile, actionParameters) => {
    const obj = ICYMIActionCreatorsDefault;
    obj.itemInteracted(id, itemType, open_profile);
    const obj2 = ICYMIActionCreatorsDefault;
    obj3 = { itemId: id, itemType, actionParameters };
    obj2.feedItemActioned(obj3);
  }, items6);
  const items7 = [channel.id, message.id, handleItemInteracted];
  const items8 = [message, handleItemInteracted];
  const callback1 = obj2.useCallback((byName, burst) => {
    callback("press_reaction", { actionGestureType: "press", actionTargetElement: "add_new_reaction_button", actionIntentType: "open", actionDestinationType: null });
    id = channel.id;
    const id2 = message.id;
    if (null != byName) {
      const obj = ReactionUtils;
      const toReactionEmojiResult = obj.toReactionEmoji(byName);
      const obj2 = ReactionActionCreators;
      obj3 = { burst };
      obj2.addReaction(id, id2, toReactionEmojiResult, ReactionActionCreators.ReactionLocations.MESSAGE, obj3);
    }
  }, items7);
  const items9 = [channel, message, handleItemInteracted];
  const callback2 = obj2.useCallback(() => {
    callback("press_forward", { actionGestureType: "press", actionTargetElement: "forward_button", actionIntentType: "share", actionDestinationType: "channel" });
    const obj = ForwardModalUtils;
    const obj2 = { message, source: "icymi-tab" };
    obj.openForwardModal(obj2);
  }, items8);
  const items10 = [str, flag];
  const callback3 = obj2.useCallback(() => {
    callback("press_reply", { actionGestureType: "press", actionTargetElement: "reply_button", actionIntentType: "reply", actionDestinationType: "channel" });
    const obj = ICYMIShared;
    obj.navigateToPost(channel.id, channel.guild_id, message.id);
    const obj2 = PendingReplyActionCreators;
    obj3 = { channel, message, shouldMention: true, showMentionToggle: true };
    const pendingReply = obj2.createPendingReply(obj3);
  }, items9);
  const memo3 = obj2.useMemo(() => {
    const tmp = flag;
    if (tmp) {
      return nativeDefault.colors.MESSAGE_HIGHLIGHT_BACKGROUND_DEFAULT;
    } else if ("primary" === "primary") {
      return nativeDefault.colors.CARD_BACKGROUND_DEFAULT;
    } else if ("secondary" === str) {
      return nativeDefault.colors.CARD_SECONDARY_BG;
    } else if ("base" === str) {
      return nativeDefault.colors.BACKGROUND_BASE_LOW;
    }
  }, items10);
  const tmp2Result4 = tmp2(hideAdditionalButtons[42]);
  const token = tmp2Result4.useToken(memo3);
  [tmp18, c12] = flag(obj2.useState(true), 2);
  [][0] = handleItemInteracted;
  flag(obj2.useState(true), 2);
  const callback4 = obj2.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    _undefined(nativeEvent.contentOffset.x + nativeEvent.layoutMeasurement.width < nativeEvent.contentSize.width);
  }, []);
  if (0 !== memo.length) {
    let obj4 = { style: tmp.container, children: closure_15(id, obj5) };
    obj5 = { style: tmp.emojisRowContainer, children: tmp25Result4 };
    if (memo.length > 0) {
      let tmp25Result = !hideAdditionalButtons;
      const obj6 = { style: tmp.emojisContainer, children: items14 };
      const obj7 = { horizontal: true, scrollEnabled: hasOverflow, contentContainerStyle: { gap: 6 }, onScroll: callback4, onScrollEndDrag: tmp20, showsHorizontalScrollIndicator: false, children: items13 };
      const tmp26 = itemType;
      if (!hideAdditionalButtons) {
        tmp25Result = showReplyForwardButtons || showThreadAsComments;
      }
      if (tmp25Result) {
        const obj8 = { style: tmp.replyForwardButtonContainer, children: items11 };
        if (showThreadAsComments) {
          const obj9 = { threadData: obj3, parentMessage: message, handleItemInteracted };
          showThreadAsComments = tmp22(ThreadAsCommentsButton, obj9);
        }
        items11 = [showThreadAsComments, ];
        if (showReplyForwardButtons) {
          const obj10 = { children: items12 };
          const obj11 = { onPress: callback3, disabled: !stateFromStores };
          items12 = [closure_15(ReplyButton, obj11), ];
          const obj12 = { onPress: callback2, disabled: !canForwardMessage };
          items12[1] = closure_15(ForwardButton, obj12);
          showReplyForwardButtons = tmp25(closure_17, obj10);
        }
        items11[1] = showReplyForwardButtons;
        tmp25Result = tmp25(tmp23, obj8);
      }
      items13 = [
        tmp25Result,
        memo.map((reaction, index) => {
              const obj = { messageId: message.id, channel, reaction, count: reaction.type === MessageReactionsTypes.ReactionTypes.BURST ? reaction.burst_count : reaction.count, isBurstReaction: reaction.type === MessageReactionsTypes.ReactionTypes.BURST, handleItemInteracted };
              const obj2 = { children: closure_15(EmojiReaction, obj) };
              return closure_15(hasOwnProperty, obj2, "reaction-" + index);
            }),

      ];
      let tmp22Result = null;
      if (!hideAdditionalButtons) {
        tmp22Result = null;
        if (memo1) {
          const obj13 = { channel, onPressEmoji: callback1, handleItemInteracted };
          tmp22Result = tmp22(AddEmojiButton, obj13);
        }
      }
      items13[2] = tmp22Result;
      items14 = [closure_16(tmp26, obj7), ];
      let tmp25Result3 = null;
      if (hasOverflow) {
        tmp25Result3 = null;
        if (tmp18) {
          const obj14 = { children: items16 };
          const obj15 = { style: tmp.gradient, start: null, end: null, colors: items15, locations: [0, 0.8, 1] };
          ({ START: obj18.start, END: obj18.end } = closure_13);
          const tmp38 = channel(hideAdditionalButtons[43]);
          items15 = [, , ];
          const obj19 = channel(hideAdditionalButtons[44])(token);
          const alphaResult = obj19.alpha(0);
          items15[0] = alphaResult.hex();
          items15[1] = token;
          items15[2] = token;
          items16 = [closure_15(tmp38, obj15), ];
          const obj16 = { style: tmp.overflowChevron, size: "xs", color: "icon-muted" };
          items16[1] = closure_15(tmp2(hideAdditionalButtons[45]).ChevronSmallRightIcon, obj16);
          tmp25Result3 = tmp25(closure_17, obj14);
        }
      }
      items14[1] = tmp25Result3;
      tmp25Result4 = tmp25(tmp23, obj6);
    } else {
      tmp25Result4 = null;
    }
    tmp22Result2 = tmp22(tmp23, obj4);
  } else {
    tmp22Result2 = null;
  }
  return tmp22Result2;
};
export function onAddReaction(arg0, arg1, byName, burst) {
  if (null != byName) {
    const obj = ReactionUtils;
    const toReactionEmojiResult = obj.toReactionEmoji(byName);
    const obj2 = ReactionActionCreators;
    const obj3 = { burst };
    obj2.addReaction(arg0, arg1, toReactionEmojiResult, ReactionActionCreators.ReactionLocations.MESSAGE, obj3);
  }
}
export function useThread(id, arg1, arg2) {
  let closure_2;
  let messageCount;
  let mostRecentMessage;
  let thread;
  _require = id;
  let closure_1 = arg1;
  dependencyMap = arg2;
  const items = [ChannelStore, ThreadMessageStore];
  const obj = require("get initialized");
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let num;
    let obj2;
    if (null != message) {
      let obj;
      if (null != guild) {
        channel = memo.getChannel(tmp.id);
        if (channel == null) {
          channel = null;
        }
        obj = { thread: channel, messageCount: num, mostRecentMessage: obj2.getMostRecentMessage(message.id) };
        num = obj3.getCount(tmp.id);
        obj2 = obj3;
        if (num == null) {
          num = 0;
        }
      }
      return obj;
    }
    obj = { thread: null, messageCount: 0, mostRecentMessage: null };
  });
  id = undefined;
  ({ thread, messageCount, mostRecentMessage } = stateFromStoresObject);
  const useEffect = react.useEffect;
  if (id != null) {
    id = id.id;
  }
  const items1 = [id, arg2, arg1, id];
  const effect = useEffect(() => {
    let tmp = null != message && null != guild;
    if (tmp) {
      tmp = message.hasFlag(callback.HAS_THREAD) || flag2;
      message.hasFlag(callback.HAS_THREAD) || flag2;
    }
    if (tmp) {
      tmp = null == obj3.getMostRecentMessage(obj.id);
    }
    if (tmp) {
      const obj2 = channel(hideAdditionalButtons[17]);
      obj2.preload(guild.id, message.id);
      obj3 = channel(hideAdditionalButtons[18]);
      const obj4 = { channelId: message.id, isPreload: true, limit: 25 };
      const messages = obj3.fetchMessages(obj4);
    }
  }, items1);
  return { thread, messageCount, mostRecentMessage };
}

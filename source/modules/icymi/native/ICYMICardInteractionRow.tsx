// Module ID: 15273
// Function ID: 116445
// Name: onAddReaction
// Dependencies: [57, 31, 27, 5683, 1348, 4946, 3758, 653, 1852, 33, 3769, 7004, 4130, 689, 477, 3974, 566, 4140, 6691, 9362, 4660, 1212, 7437, 4126, 9467, 665, 1392, 9348, 9125, 10381, 9912, 9983, 15265, 4629, 7005, 9998, 9570, 8365, 9904, 9580, 3834, 4554, 666, 5512, 2]
// Exports: default

// Module 15273 (onAddReaction)
import _slicedToArray from "_slicedToArray";
import ArrowAngleLeftUpIcon from "ArrowAngleLeftUpIcon";
import get_ActivityIndicator from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import ME from "ME";
import { EmojiIntention } from "set";
import jsxProd from "ChatIcon";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_12;
let closure_13;
let closure_14;
let closure_16;
let closure_17;
let closure_18;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
function onAddReaction(id, id2, byName, burst) {
  if (null != byName) {
    let obj = require(3769) /* getReactionEmojiName */;
    const obj2 = require(7004) /* checkReactionResponse */;
    obj = { burst };
    obj2.addReaction(id, id2, obj.toReactionEmoji(byName), require(7004) /* checkReactionResponse */.ReactionLocations.MESSAGE, obj);
    const toReactionEmojiResult = obj.toReactionEmoji(byName);
  }
}
function useThread(id) {
  let messageCount;
  let mostRecentMessage;
  let thread;
  const _require = id;
  let closure_1 = arg1;
  const dependencyMap = arg2;
  id = undefined;
  const items = [closure_9, _isNativeReflectConstruct];
  const stateFromStoresObject = _require(566).useStateFromStoresObject(items, () => {
    if (null != lib) {
      if (null != closure_0) {
        let obj = {};
        const channel = outer1_9.getChannel(lib.id);
        let tmp4 = null;
        if (null != channel) {
          tmp4 = channel;
        }
        obj.thread = tmp4;
        const count = outer1_8.getCount(lib.id);
        let num = 0;
        if (null != count) {
          num = count;
        }
        obj.messageCount = num;
        obj.mostRecentMessage = outer1_8.getMostRecentMessage(lib.id);
      }
      return obj;
    }
    obj = { thread: null, messageCount: 0, mostRecentMessage: null };
  });
  ({ thread, messageCount, mostRecentMessage } = stateFromStoresObject);
  if (null != id) {
    id = id.id;
  }
  const items1 = [id, arg2, arg1, id];
  const effect = React.useEffect(() => {
    let tmp = null != lib;
    if (tmp) {
      tmp = null != id;
    }
    if (tmp) {
      tmp = lib.hasFlag(outer1_12.HAS_THREAD) || dependencyMap;
      const tmp5 = lib.hasFlag(outer1_12.HAS_THREAD) || dependencyMap;
    }
    if (tmp) {
      tmp = null == outer1_8.getMostRecentMessage(lib.id);
    }
    if (tmp) {
      let obj = lib(4140);
      obj.preload(id.id, lib.id);
      obj = { channelId: lib.id, isPreload: true, limit: 25 };
      const messages = lib(6691).fetchMessages(obj);
      const obj2 = lib(6691);
    }
  }, items1);
  return { thread, messageCount, mostRecentMessage };
}
function AddEmojiButton(channel) {
  let disabled;
  let handleItemInteracted;
  let showText;
  channel = channel.channel;
  const onPressEmoji = channel.onPressEmoji;
  ({ showText, disabled, handleItemInteracted } = channel);
  const tmp = callback3();
  const items = [channel, onPressEmoji, handleItemInteracted];
  const callback = React.useCallback(() => {
    handleItemInteracted("press_reaction_picker", { actionGestureType: "press", actionTargetElement: "reaction_picker_button", actionIntentType: "open", actionDestinationType: null });
    let obj = channel(handleItemInteracted[19]);
    obj = { pickerIntention: outer1_15.REACTION, autoFocus: false, startExpanded: false, onPressEmoji, channel };
    let guild_id;
    if (null != channel) {
      guild_id = channel.guild_id;
    }
    obj.guildId = guild_id;
    const result = obj.openEmojiPickerActionSheet(obj);
  }, items);
  let obj = { onPress: callback };
  const items1 = [, , ];
  ({ emojiContainer: arr2[0], addEmojiContainer: arr2[1] } = tmp);
  disabled = null;
  if (disabled) {
    disabled = tmp.disabled;
  }
  items1[2] = disabled;
  obj.style = items1;
  obj.accessible = true;
  const intl = channel(handleItemInteracted[21]).intl;
  obj.accessibilityLabel = intl.string(channel(handleItemInteracted[21]).t.lfIHs4);
  obj.disabled = disabled;
  const items2 = [callback(channel(handleItemInteracted[22]).ReactionIcon, { size: "sm" }), ];
  if (showText) {
    obj = { variant: "text-sm/semibold", color: "redesign-button-tertiary-text" };
    const intl2 = channel(handleItemInteracted[21]).intl;
    obj.children = intl2.string(channel(handleItemInteracted[21]).t.m9O1gd);
    showText = callback(channel(handleItemInteracted[23]).Text, obj);
  }
  items2[1] = showText;
  obj.children = items2;
  return closure_17(channel(handleItemInteracted[20]).PressableOpacity, obj);
}
function EmojiReaction(count) {
  const messageId = count.messageId;
  const channel = count.channel;
  const reaction = count.reaction;
  const isBurstReaction = count.isBurstReaction;
  const handleItemInteracted = count.handleItemInteracted;
  let emoji;
  let tmp = callback3();
  let obj = messageId(reaction[24]);
  let burst_colors = reaction.burst_colors;
  if (null == burst_colors) {
    burst_colors = [];
  }
  const emojiColorPalette = obj.useEmojiColorPalette(burst_colors);
  obj = {};
  let str = "";
  if (null != emojiColorPalette) {
    let obj2 = messageId(reaction[25]);
    let backgroundColor;
    if (null != emojiColorPalette) {
      backgroundColor = emojiColorPalette.backgroundColor;
    }
    let opacity;
    if (null != emojiColorPalette) {
      opacity = emojiColorPalette.opacity;
    }
    let num2 = 0.15;
    if (null != opacity) {
      num2 = opacity;
    }
    const hex2rgbResult = obj2.hex2rgb(backgroundColor, num2);
    str = "";
    if (null != hex2rgbResult) {
      str = hex2rgbResult;
    }
  }
  obj.backgroundColor = str;
  let backgroundColor1;
  if (null != emojiColorPalette) {
    backgroundColor1 = emojiColorPalette.backgroundColor;
  }
  obj.borderColor = backgroundColor1;
  let accentColor;
  if (null != emojiColorPalette) {
    accentColor = emojiColorPalette.accentColor;
  }
  let tmp10 = null;
  if (null != accentColor) {
    obj = { color: emojiColorPalette.accentColor };
    tmp10 = obj;
  }
  emoji = reaction.emoji;
  let selectedInnerTextContainer = isBurstReaction ? reaction.me_burst : reaction.me;
  let selected;
  if (selectedInnerTextContainer) {
    selected = tmp.selected;
  }
  let obj4 = messageId(reaction[16]);
  const items = [closure_10];
  const items1 = [emoji];
  const stateFromStores = obj4.useStateFromStores(items, () => {
    let canChatInGuildResult = null != channel.guild_id;
    if (canChatInGuildResult) {
      canChatInGuildResult = outer1_10.canChatInGuild(channel.guild_id);
    }
    return canChatInGuildResult;
  });
  const items2 = [channel, isBurstReaction, messageId, reaction, handleItemInteracted];
  const memo = handleItemInteracted.useMemo(() => {
    let tmp;
    if (null != emoji.id) {
      let obj = {};
      obj = { id: emoji.id, animated: emoji.animated, size: 48 };
      obj.uri = channel(reaction[26]).getEmojiURL(obj);
      tmp = obj;
      const obj2 = channel(reaction[26]);
    }
    return tmp;
  }, items1);
  const callback = handleItemInteracted.useCallback(() => {
    handleItemInteracted("press_reaction", { actionGestureType: "press", actionTargetElement: "toggle_existing_reaction_button", actionIntentType: "react", actionDestinationType: null });
    const result = messageId(reaction[27]).handleAddOrRemoveReaction(messageId, channel, reaction, isBurstReaction, messageId(reaction[11]).ReactionLocations.MESSAGE);
  }, items2);
  const obj1 = {};
  const items3 = [tmp.emojiContainer, selected, ];
  let tmp16 = isBurstReaction;
  if (isBurstReaction) {
    tmp16 = obj;
  }
  items3[2] = tmp16;
  obj1.style = items3;
  obj1.onPress = callback;
  obj1.accessible = true;
  obj1.accessibilityLabel = emoji.name;
  obj1.disabled = !stateFromStores;
  obj2 = {};
  const items4 = [tmp.innerEmojiContainer, ];
  let selectedInnerEmojiContainer = selectedInnerTextContainer;
  if (selectedInnerTextContainer) {
    selectedInnerEmojiContainer = tmp.selectedInnerEmojiContainer;
  }
  items4[1] = selectedInnerEmojiContainer;
  obj2.style = items4;
  if (null == emoji.id) {
    const obj3 = { variant: "text-md/medium", color: "interactive-text-default", style: null, allowFontScaling: false };
    const items5 = [, ];
    ({ defaultEmoji: arr8[0], emojiText: arr8[1] } = tmp);
    obj3.style = items5;
    obj3.children = emoji.name;
    let tmp34Result = callback(messageId(reaction[23]).Text, obj3);
  } else {
    if (obj13.isAndroid()) {
      obj4 = {};
      const items6 = [, ];
      ({ defaultEmoji: arr7[0], emojiImage: arr7[1] } = tmp);
      obj4.style = items6;
      obj4.source = memo;
      tmp34Result = tmp34(closure_6, obj4);
    } else {
      const obj5 = { emoji, size: c19, style: tmp.defaultEmoji, animate: true };
      tmp34Result = tmp34(channel(reaction[28]), obj5);
    }
    obj13 = messageId(reaction[14]);
  }
  obj2.children = tmp34Result;
  const items7 = [callback(emoji, obj2), ];
  const obj6 = {};
  const items8 = [tmp.innerTextContainer, ];
  if (selectedInnerTextContainer) {
    selectedInnerTextContainer = tmp.selectedInnerTextContainer;
  }
  items8[1] = selectedInnerTextContainer;
  obj6.style = items8;
  const obj7 = { animate: true, count: count.count };
  let tmp31 = null;
  if (isBurstReaction) {
    tmp31 = tmp10;
  }
  obj7.textStyle = tmp31;
  obj7.textVariant = "text-md/semibold";
  obj6.children = callback(channel(reaction[29]), obj7);
  items7[1] = callback(emoji, obj6);
  obj1.children = items7;
  return closure_17(messageId(reaction[20]).PressableOpacity, obj1);
}
function ForwardButton(disabled) {
  disabled = disabled.disabled;
  const tmp = callback3();
  const obj = { onPress: disabled.onPress };
  const items = [, , ];
  ({ emojiContainer: arr[0], addEmojiContainer: arr[1] } = tmp);
  disabled = null;
  if (disabled) {
    disabled = tmp.disabled;
  }
  items[2] = disabled;
  obj.style = items;
  obj.accessible = true;
  obj.disabled = disabled;
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.accessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t.xIUfJS);
  obj.children = callback(importDefault(9912), { size: "sm" });
  return callback(require(4660) /* PressableBase */.PressableOpacity, obj);
}
function ReplyButton(disabled) {
  disabled = disabled.disabled;
  const tmp = callback3();
  const obj = { onPress: disabled.onPress };
  const items = [, , ];
  ({ emojiContainer: arr[0], addEmojiContainer: arr[1] } = tmp);
  disabled = null;
  if (disabled) {
    disabled = tmp.disabled;
  }
  items[2] = disabled;
  obj.style = items;
  obj.accessible = true;
  obj.disabled = disabled;
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.accessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t["5NwaNY"]);
  obj.children = callback(require(9983) /* ArrowAngleLeftUpIcon */.ArrowAngleLeftUpIcon, { size: "sm" });
  return callback(require(4660) /* PressableBase */.PressableOpacity, obj);
}
function ThreadAsCommentsButton(parentMessage) {
  let handleItemInteracted;
  let style;
  parentMessage = parentMessage.parentMessage;
  const threadData = parentMessage.threadData;
  ({ style, handleItemInteracted } = parentMessage);
  const tmp = callback3();
  let obj = parentMessage(handleItemInteracted[16]);
  const items = [closure_11];
  const items1 = [parentMessage, threadData.thread, handleItemInteracted];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_11.canWithPartialContext(outer1_13.VIEW_CHANNEL, { channelId: parentMessage.id }));
  const callback = React.useCallback(() => {
    handleItemInteracted("press_comments", { actionGestureType: "press", actionTargetElement: "thread_comments_button", actionIntentType: "navigate", actionDestinationType: "channel" });
    let tmp2 = null != parentMessage;
    if (tmp2) {
      tmp2 = null != threadData.thread;
    }
    if (tmp2) {
      parentMessage(handleItemInteracted[32]).navigateToPost(parentMessage.getChannelId(), threadData.thread.guild_id, parentMessage.id);
      const obj = parentMessage(handleItemInteracted[32]);
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
          obj = {};
          const items2 = [tmp.comments, style];
          obj.style = items2;
          obj.onPress = callback;
          obj = { style: tmp.commentCount };
          const obj1 = { style: tmp.commentsIcon };
          const items3 = [callback(parentMessage(handleItemInteracted[33]).ChatIcon, obj1), ];
          const obj2 = { variant: "text-md/semibold", color: "text-strong", children: str };
          items3[1] = callback(parentMessage(handleItemInteracted[23]).Text, obj2);
          obj.children = items3;
          obj.children = callback2(closure_5, obj);
          return callback(parentMessage(handleItemInteracted[20]).PressableHighlight, obj);
        }
      }
      const obj3 = {};
      const items4 = [tmp.comments, style];
      obj3.style = items4;
      obj3.onPress = callback;
      const obj4 = { style: tmp.commentCount };
      const obj5 = { style: tmp.commentsIcon };
      obj4.children = callback(parentMessage(handleItemInteracted[33]).ChatIcon, obj5);
      obj3.children = callback(closure_5, obj4);
      return callback(parentMessage(handleItemInteracted[20]).PressableHighlight, obj3);
    }
  }
  return null;
}
({ View: closure_5, Image: closure_6, ScrollView: closure_7 } = get_ActivityIndicator);
({ MessageFlags: closure_12, Permissions: closure_13, HorizontalGradient: closure_14 } = ME);
({ jsx: closure_16, jsxs: closure_17, Fragment: closure_18 } = jsxProd);
let c19 = 20;
let closure_20 = _createForOfIteratorHelperLoose.createStyles(() => {
  let obj = { container: { flexDirection: "row", alignItems: "center", flexWrap: "wrap", justifyContent: "space-between" }, replyForwardButtonContainer: { flexDirection: "row", alignItems: "center", flexWrap: "wrap", gap: 6 }, emojisRowContainer: { position: "relative", flexDirection: "row", alignItems: "center", flexWrap: "wrap", gap: 6 }, emojisContainer: { position: "relative", flexDirection: "row", alignItems: "center", flexWrap: "wrap", gap: 6 } };
  obj = { flexDirection: "row", backgroundColor: importDefault(689).colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND, borderRadius: importDefault(689).radii.sm, flexShrink: 3, paddingHorizontal: 8, gap: 6 };
  obj.emojiContainer = obj;
  obj.innerEmojiContainer = { paddingVertical: 5 };
  obj.selectedInnerEmojiContainer = { paddingVertical: 4 };
  obj.addEmojiContainer = { minHeight: 30, alignItems: "center" };
  obj.disabled = { opacity: 0.4 };
  obj = { width: c19, height: c19 };
  obj.defaultEmoji = obj;
  const obj1 = { lineHeight: null, fontSize: 16, textAlign: "center", paddingTop: 2 };
  let obj4 = require(477) /* set */;
  let num = 16;
  if (!obj4.isAndroid()) {
    num = c19;
  }
  obj1.lineHeight = num;
  obj.emojiText = obj1;
  obj.selectedInnerTextContainer = { paddingBottom: 3.5 };
  obj.innerTextContainer = { alignSelf: "flex-end", paddingBottom: 4.5 };
  obj.emojiImage = { resizeMode: "contain", width: c19, height: c19 };
  const obj3 = { borderColor: importDefault(689).unsafe_rawColors.BRAND_560, borderWidth: 1, paddingHorizontal: 7, backgroundColor: require(3974) /* hexToRgb */.hexWithOpacity(importDefault(689).unsafe_rawColors.BRAND_500, 0.3) };
  obj.selected = obj3;
  obj.gradient = { position: "absolute", right: 0, top: 0, bottom: 0, width: 48 };
  obj.overflowChevron = { position: "absolute", right: 0 };
  obj4 = { paddingVertical: 6, paddingHorizontal: 8, backgroundColor: importDefault(689).colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND, borderRadius: importDefault(689).radii.sm, display: "flex", flexDirection: "row", alignItems: "center", gap: 8 };
  obj.comments = obj4;
  obj.commentCount = { display: "flex", flexDirection: "row", alignItems: "center", gap: 4, justifySelf: "end" };
  const obj5 = { width: 20, height: 20, tintColor: importDefault(689).colors.INTERACTIVE_TEXT_DEFAULT };
  obj.commentsIcon = obj5;
  return obj;
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/icymi/native/ICYMICardInteractionRow.tsx");

export default function ICYMICardInteractionRow(message) {
  let hasOverflow;
  let showReplyForwardButtons;
  let showThreadAsComments;
  message = message.message;
  const channel = message.channel;
  let flag = message.hideAdditionalButtons;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = message.isKeyMessage;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = message.inForum;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let str = message.backgroundVariant;
  if (str === undefined) {
    str = "primary";
  }
  const id = message.id;
  const itemType = message.itemType;
  let c7;
  let memo;
  let canForwardMessage;
  let stateFromStores;
  let callback;
  let closure_12;
  let tmp = callback3();
  const tmp2 = useThread(message.guild, message, flag3);
  c7 = tmp2;
  let items = [message.reactions];
  memo = str.useMemo(() => {
    const items = [];
    const reactions = items.reactions;
    const item = reactions.forEach((me_vote) => {
      if (null == me_vote.me_vote) {
        if (me_vote.burst_count > 0) {
          let obj = {};
          const merged = Object.assign(me_vote);
          obj["type"] = message(flag[34]).ReactionTypes.BURST;
          items.push(obj);
        }
        if (me_vote.count > 0) {
          obj = {};
          const merged1 = Object.assign(me_vote);
          obj["type"] = message(flag[34]).ReactionTypes.NORMAL;
          items.push(obj);
        }
      }
    });
    return items;
  }, items);
  const items1 = [channel];
  const memo1 = str.useMemo(() => {
    let tmp = null != channel;
    if (tmp) {
      tmp = channel(flag[35])(channel);
    }
    return tmp;
  }, items1);
  let obj = message(flag[36]);
  canForwardMessage = obj.useCanForwardMessage(message);
  let obj1 = message(flag[16]);
  const items2 = [callback];
  stateFromStores = obj1.useStateFromStores(items2, () => callback.can(outer1_13.SEND_MESSAGES, channel));
  const items3 = [flag, tmp2.messageCount, memo.length, stateFromStores, canForwardMessage];
  const memo2 = str.useMemo(() => {
    let num = 4;
    if (flag) {
      num = 6;
    }
    let diff = num;
    if (_undefined.messageCount > 0) {
      diff = num - 1;
    }
    let num3 = 0;
    if (memo.length > diff) {
      num3 = memo.length - diff;
    }
    const obj = { hasOverflow: num3 > 0 };
    let tmp4 = !flag;
    if (tmp4) {
      let tmp5 = stateFromStores;
      if (!stateFromStores) {
        tmp5 = canForwardMessage;
      }
      tmp4 = tmp5;
    }
    obj.showReplyForwardButtons = tmp4;
    obj.showThreadAsComments = _undefined.messageCount > 0;
    return obj;
  }, items3);
  ({ hasOverflow, showReplyForwardButtons, showThreadAsComments } = memo2);
  const items4 = [id, itemType];
  callback = str.useCallback((open_profile, actionParameters) => {
    let obj = channel(flag[37]);
    obj.itemInteracted(id, itemType, open_profile);
    obj = { itemId: id, itemType, actionParameters };
    channel(flag[37]).feedItemActioned(obj);
  }, items4);
  const items5 = [channel.id, message.id, callback];
  const items6 = [message, callback];
  const callback1 = str.useCallback((arg0, arg1) => {
    callback("press_reaction", { actionGestureType: "press", actionTargetElement: "add_new_reaction_button", actionIntentType: "open", actionDestinationType: null });
    outer1_21(channel.id, message.id, arg0, arg1);
  }, items5);
  const items7 = [channel, message, callback];
  const callback2 = str.useCallback(() => {
    callback("press_forward", { actionGestureType: "press", actionTargetElement: "forward_button", actionIntentType: "share", actionDestinationType: "channel" });
    let obj = message(flag[38]);
    obj = { message, source: "icymi-tab" };
    obj.openForwardModal(obj);
  }, items6);
  const items8 = [str, flag2];
  callback3 = str.useCallback(() => {
    callback("press_reply", { actionGestureType: "press", actionTargetElement: "reply_button", actionIntentType: "reply", actionDestinationType: "channel" });
    let obj = message(flag[32]);
    obj.navigateToPost(channel.id, channel.guild_id, message.id);
    obj = { channel, message, shouldMention: true, showMentionToggle: true };
    const pendingReply = message(flag[39]).createPendingReply(obj);
  }, items7);
  const memo3 = str.useMemo(() => {
    if (flag2) {
      return channel(flag[13]).colors.MESSAGE_HIGHLIGHT_BACKGROUND_DEFAULT;
    } else if ("primary" === "primary") {
      return channel(flag[13]).colors.CARD_BACKGROUND_DEFAULT;
    } else if ("secondary" === tmp) {
      return channel(flag[13]).colors.CARD_SECONDARY_BG;
    } else if ("base" === tmp) {
      return channel(flag[13]).colors.BACKGROUND_BASE_LOW;
    }
  }, items8);
  let obj2 = message(flag[40]);
  const token = obj2.useToken(memo3);
  const tmp13 = flag2(str.useState(true), 2);
  closure_12 = tmp13[1];
  [][0] = callback;
  const callback4 = str.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    callback(nativeEvent.contentOffset.x + nativeEvent.layoutMeasurement.width < nativeEvent.contentSize.width);
  }, []);
  if (0 !== memo.length) {
    obj = { style: tmp.container };
    obj = { style: tmp.emojisRowContainer };
    if (memo.length > 0) {
      obj1 = {};
      const items9 = [tmp.emojisContainer];
      obj1.style = items9;
      obj2 = { horizontal: true, scrollEnabled: hasOverflow };
      const obj3 = { gap: 6 };
      obj2.contentContainerStyle = obj3;
      obj2.onScroll = callback4;
      obj2.onScrollEndDrag = tmp15;
      obj2.showsHorizontalScrollIndicator = false;
      let tmp28Result = !flag;
      if (tmp28Result) {
        let tmp27 = showReplyForwardButtons;
        if (!showReplyForwardButtons) {
          tmp27 = showThreadAsComments;
        }
        tmp28Result = tmp27;
      }
      if (tmp28Result) {
        const obj4 = { style: tmp.replyForwardButtonContainer };
        if (showThreadAsComments) {
          const obj5 = { threadData: tmp2, parentMessage: message, handleItemInteracted: callback };
          showThreadAsComments = callback(ThreadAsCommentsButton, obj5);
        }
        const items10 = [showThreadAsComments, ];
        if (showReplyForwardButtons) {
          const obj6 = {};
          const obj7 = { onPress: callback3, disabled: !stateFromStores };
          const items11 = [callback(ReplyButton, obj7), ];
          const obj8 = { onPress: callback2, disabled: !canForwardMessage };
          items11[1] = callback(ForwardButton, obj8);
          obj6.children = items11;
          showReplyForwardButtons = callback2(closure_18, obj6);
        }
        items10[1] = showReplyForwardButtons;
        obj4.children = items10;
        tmp28Result = callback2(id, obj4);
        const tmp28 = callback2;
        const tmp29 = id;
      }
      const items12 = [
        tmp28Result,
        memo.map((reaction) => {
              let obj = {};
              obj = { messageId: message.id, channel, reaction, count: reaction.type === message(flag[34]).ReactionTypes.BURST ? reaction.burst_count : reaction.count, isBurstReaction: reaction.type === message(flag[34]).ReactionTypes.BURST, handleItemInteracted: callback };
              obj.children = outer1_16(outer1_24, obj);
              return outer1_16(id, obj, "reaction-" + arg1);
            }),

      ];
      let tmp38 = null;
      if (!flag) {
        tmp38 = null;
        if (memo1) {
          const obj9 = { channel, onPressEmoji: callback1, handleItemInteracted: callback };
          tmp38 = callback(AddEmojiButton, obj9);
        }
      }
      items12[2] = tmp38;
      obj2.children = items12;
      const items13 = [callback2(c7, obj2), ];
      let tmp41 = null;
      if (hasOverflow) {
        tmp41 = null;
        if (tmp13[0]) {
          const obj10 = {};
          const obj11 = { style: tmp.gradient };
          ({ START: obj16.start, END: obj16.end } = closure_14);
          const tmp47 = channel(flag[41]);
          const obj17 = channel(flag[42])(token);
          const items14 = [channel(flag[42])(token).alpha(0).hex(), token, token];
          obj11.colors = items14;
          obj11.locations = [0, 0.8, 1];
          const items15 = [callback(tmp47, obj11), ];
          const obj12 = { style: null, size: "xs", color: "icon-muted" };
          const items16 = [tmp.overflowChevron];
          obj12.style = items16;
          items15[1] = callback(message(flag[43]).ChevronSmallRightIcon, obj12);
          obj10.children = items15;
          tmp41 = callback2(closure_18, obj10);
          const alphaResult = channel(flag[42])(token).alpha(0);
        }
      }
      items13[1] = tmp41;
      obj1.children = items13;
      let tmp22Result = callback2(id, obj1);
      const tmp22 = callback2;
      const tmp23 = id;
      const tmp24 = callback2;
      const tmp25 = c7;
    } else {
      tmp22Result = null;
    }
    obj.children = tmp22Result;
    obj.children = callback(id, obj);
    let tmp17Result = callback(id, obj);
    const tmp17 = callback;
    const tmp18 = id;
    const tmp19 = callback;
    const tmp20 = id;
  } else {
    tmp17Result = null;
  }
  return tmp17Result;
};
export { onAddReaction };
export { useThread };

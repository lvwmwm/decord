// Module ID: 15093
// Function ID: 113853
// Name: onAddReaction
// Dependencies: []
// Exports: default

// Module 15093 (onAddReaction)
function onAddReaction(id, id2, byName, burst) {
  if (null != byName) {
    let obj = id2(dependencyMap[10]);
    const obj2 = id2(dependencyMap[11]);
    obj = { burst };
    obj2.addReaction(id, id2, obj.toReactionEmoji(byName), id2(dependencyMap[11]).ReactionLocations.MESSAGE, obj);
    const toReactionEmojiResult = obj.toReactionEmoji(byName);
  }
}
function useThread(id) {
  let messageCount;
  let mostRecentMessage;
  let thread;
  const arg1 = id;
  const importDefault = arg1;
  const dependencyMap = arg2;
  id = undefined;
  const items = [closure_9, closure_8];
  const stateFromStoresObject = arg1(dependencyMap[16]).useStateFromStoresObject(items, () => {
    if (null != arg1) {
      if (null != arg0) {
        let obj = {};
        const channel = channel.getChannel(arg1.id);
        let tmp4 = null;
        if (null != channel) {
          tmp4 = channel;
        }
        obj.thread = tmp4;
        const count = store.getCount(arg1.id);
        let num = 0;
        if (null != count) {
          num = count;
        }
        obj.messageCount = num;
        obj.mostRecentMessage = store.getMostRecentMessage(arg1.id);
      }
      return obj;
    }
    obj = {};
  });
  ({ thread, messageCount, mostRecentMessage } = stateFromStoresObject);
  if (null != id) {
    id = id.id;
  }
  const items1 = [id, arg2, arg1, id];
  const effect = React.useEffect((arg0, self) => {
    let tmp = null != self;
    if (tmp) {
      tmp = null != arg0;
    }
    if (tmp) {
      tmp = self.hasFlag(constants.HAS_THREAD) || arg2;
      const tmp5 = self.hasFlag(constants.HAS_THREAD) || arg2;
    }
    if (tmp) {
      tmp = null == store.getMostRecentMessage(self.id);
    }
    if (tmp) {
      let obj = self(arg2[17]);
      obj.preload(arg0.id, self.id);
      obj = { channelId: self.id };
      const messages = self(arg2[18]).fetchMessages(obj);
      const obj2 = self(arg2[18]);
    }
  }, items1);
  return { thread, messageCount, mostRecentMessage };
}
function AddEmojiButton(channel) {
  let disabled;
  let handleItemInteracted;
  let showText;
  channel = channel.channel;
  const arg1 = channel;
  const onPressEmoji = channel.onPressEmoji;
  const importDefault = onPressEmoji;
  ({ showText, disabled, handleItemInteracted } = channel);
  const dependencyMap = handleItemInteracted;
  const tmp = callback4();
  const items = [channel, onPressEmoji, handleItemInteracted];
  const callback = React.useCallback(() => {
    handleItemInteracted("press_reaction_picker", { "Bool(false)": "secondary", "Bool(false)": "md", "Bool(false)": null, "Bool(false)": null });
    let obj = channel(handleItemInteracted[19]);
    obj = { "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, pickerIntention: constants.REACTION, onPressEmoji, channel };
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
  const intl = arg1(dependencyMap[21]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[21]).t.lfIHs4);
  obj.disabled = disabled;
  const items2 = [callback2(arg1(dependencyMap[22]).ReactionIcon, { size: "sm" }), ];
  if (showText) {
    obj = { INTEGRATION_CREATE: null, ConstraintReasonCode: null };
    const intl2 = arg1(dependencyMap[21]).intl;
    obj.children = intl2.string(arg1(dependencyMap[21]).t.m9O1gd);
    showText = callback2(arg1(dependencyMap[23]).Text, obj);
  }
  items2[1] = showText;
  obj.children = items2;
  return closure_17(arg1(dependencyMap[20]).PressableOpacity, obj);
}
function EmojiReaction(count) {
  const messageId = count.messageId;
  const arg1 = messageId;
  const channel = count.channel;
  const importDefault = channel;
  const reaction = count.reaction;
  const dependencyMap = reaction;
  const isBurstReaction = count.isBurstReaction;
  let closure_3 = isBurstReaction;
  const handleItemInteracted = count.handleItemInteracted;
  const React = handleItemInteracted;
  let emoji;
  const tmp = callback4();
  let obj = arg1(dependencyMap[24]);
  let burst_colors = reaction.burst_colors;
  if (null == burst_colors) {
    burst_colors = [];
  }
  const emojiColorPalette = obj.useEmojiColorPalette(burst_colors);
  obj = {};
  let str = "";
  if (null != emojiColorPalette) {
    let obj2 = arg1(dependencyMap[25]);
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
  let obj4 = arg1(dependencyMap[16]);
  const items = [closure_10];
  const items1 = [emoji];
  const stateFromStores = obj4.useStateFromStores(items, () => {
    let canChatInGuildResult = null != channel.guild_id;
    if (canChatInGuildResult) {
      canChatInGuildResult = closure_10.canChatInGuild(channel.guild_id);
    }
    return canChatInGuildResult;
  });
  const items2 = [channel, isBurstReaction, messageId, reaction, handleItemInteracted];
  const memo = React.useMemo(() => {
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
  const callback = React.useCallback(() => {
    handleItemInteracted("press_reaction", { "Bool(false)": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000169759663292044, "Bool(false)": 0, "Bool(false)": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000023836675337674025, "Bool(false)": -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005118891932088445 });
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
    const obj3 = {};
    const items5 = [, ];
    ({ defaultEmoji: arr8[0], emojiText: arr8[1] } = tmp);
    obj3.style = items5;
    obj3.children = emoji.name;
    let tmp34Result = callback2(arg1(dependencyMap[23]).Text, obj3);
  } else {
    if (obj13.isAndroid()) {
      obj4 = {};
      const items6 = [, ];
      ({ defaultEmoji: arr7[0], emojiImage: arr7[1] } = tmp);
      obj4.style = items6;
      obj4.source = memo;
      tmp34Result = tmp34(closure_6, obj4);
    } else {
      const obj5 = { emoji, size: closure_19, style: tmp.defaultEmoji, animate: true };
      tmp34Result = tmp34(importDefault(dependencyMap[28]), obj5);
    }
    const obj13 = arg1(dependencyMap[14]);
  }
  obj2.children = tmp34Result;
  const items7 = [callback2(emoji, obj2), ];
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
  obj6.children = callback2(importDefault(dependencyMap[29]), obj7);
  items7[1] = callback2(emoji, obj6);
  obj1.children = items7;
  return closure_17(arg1(dependencyMap[20]).PressableOpacity, obj1);
}
function ForwardButton(disabled) {
  disabled = disabled.disabled;
  const tmp = callback4();
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
  const intl = arg1(dependencyMap[21]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[21]).t.xIUfJS);
  obj.children = callback2(importDefault(dependencyMap[30]), { size: "sm" });
  return callback2(arg1(dependencyMap[20]).PressableOpacity, obj);
}
function ReplyButton(disabled) {
  disabled = disabled.disabled;
  const tmp = callback4();
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
  const intl = arg1(dependencyMap[21]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[21]).t.5NwaNY);
  obj.children = callback2(arg1(dependencyMap[31]).ArrowAngleLeftUpIcon, { size: "sm" });
  return callback2(arg1(dependencyMap[20]).PressableOpacity, obj);
}
function ThreadAsCommentsButton(parentMessage) {
  let handleItemInteracted;
  let style;
  parentMessage = parentMessage.parentMessage;
  const arg1 = parentMessage;
  const threadData = parentMessage.threadData;
  const importDefault = threadData;
  ({ style, handleItemInteracted } = parentMessage);
  const dependencyMap = handleItemInteracted;
  const tmp = callback4();
  let obj = arg1(dependencyMap[16]);
  const items = [closure_11];
  const items1 = [parentMessage, threadData.thread, handleItemInteracted];
  const stateFromStores = obj.useStateFromStores(items, () => closure_11.canWithPartialContext(constants.VIEW_CHANNEL, { channelId: parentMessage.id }));
  const callback = React.useCallback(() => {
    handleItemInteracted("press_comments", { "Bool(false)": 0, "Bool(false)": 0, "Bool(false)": 0, "Bool(false)": 150 });
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
          const items3 = [callback2(arg1(dependencyMap[33]).ChatIcon, obj1), ];
          const obj2 = { children: str };
          items3[1] = callback2(arg1(dependencyMap[23]).Text, obj2);
          obj.children = items3;
          obj.children = callback3(closure_5, obj);
          return callback2(arg1(dependencyMap[20]).PressableHighlight, obj);
        }
      }
      const obj3 = {};
      const items4 = [tmp.comments, style];
      obj3.style = items4;
      obj3.onPress = callback;
      const obj4 = { style: tmp.commentCount };
      const obj5 = { style: tmp.commentsIcon };
      obj4.children = callback2(arg1(dependencyMap[33]).ChatIcon, obj5);
      obj3.children = callback2(closure_5, obj4);
      return callback2(arg1(dependencyMap[20]).PressableHighlight, obj3);
    }
  }
  return null;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ View: closure_5, Image: closure_6, ScrollView: closure_7 } = arg1(dependencyMap[2]));
let closure_8 = importDefault(dependencyMap[3]);
let closure_9 = importDefault(dependencyMap[4]);
let closure_10 = importDefault(dependencyMap[5]);
let closure_11 = importDefault(dependencyMap[6]);
const tmp2 = arg1(dependencyMap[2]);
({ MessageFlags: closure_12, Permissions: closure_13, HorizontalGradient: closure_14 } = arg1(dependencyMap[7]));
const EmojiIntention = arg1(dependencyMap[8]).EmojiIntention;
const tmp3 = arg1(dependencyMap[7]);
({ jsx: closure_16, jsxs: closure_17, Fragment: closure_18 } = arg1(dependencyMap[9]));
let closure_19 = 20;
const tmp4 = arg1(dependencyMap[9]);
let closure_20 = arg1(dependencyMap[12]).createStyles(() => {
  let obj = { container: {}, replyForwardButtonContainer: {}, emojisRowContainer: { justifyContent: "caught_up", variant: "caught_up", color: "press", style: "back_to_home_button", lineClamp: "navigate" }, emojisContainer: { justifyContent: "caught_up", variant: "caught_up", color: "press", style: "back_to_home_button", lineClamp: "navigate" } };
  obj = { 9223372036854775807: null, 0: null, 9223372036854775807: null, 9223372036854775807: null, 0: null, 0: null, backgroundColor: importDefault(dependencyMap[13]).colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND, borderRadius: importDefault(dependencyMap[13]).radii.sm };
  obj.emojiContainer = obj;
  obj.innerEmojiContainer = { paddingVertical: 5 };
  obj.selectedInnerEmojiContainer = { paddingVertical: 4 };
  obj.addEmojiContainer = { "Bool(false)": true, "Bool(false)": true };
  obj.disabled = { opacity: 0.4 };
  obj = { width: closure_19, height: closure_19 };
  obj.defaultEmoji = obj;
  const obj1 = { "Bool(false)": 13, "Bool(false)": 0.652, "Bool(false)": 0, "Bool(false)": 183.333 };
  let obj4 = arg1(dependencyMap[14]);
  let num = 16;
  if (!obj4.isAndroid()) {
    num = closure_19;
  }
  obj1.lineHeight = num;
  obj.emojiText = obj1;
  obj.selectedInnerTextContainer = { paddingBottom: 3.5 };
  obj.innerTextContainer = { "Null": false, "Null": false };
  obj.emojiImage = { resizeMode: "contain", width: closure_19, height: closure_19 };
  const obj3 = { 0: 0.000000000000000000000000000000000000000000000000000000000023647480886615764, -9223372036854775808: 2571622052040042200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 9223372036854775807: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000666295560653974, borderColor: importDefault(dependencyMap[13]).unsafe_rawColors.BRAND_560, backgroundColor: arg1(dependencyMap[15]).hexWithOpacity(importDefault(dependencyMap[13]).unsafe_rawColors.BRAND_500, 0.3) };
  obj.selected = obj3;
  obj.gradient = { month: "text-xs/normal", day: "text-muted", year: "press", hour: "item_body", minute: "navigate" };
  obj.overflowChevron = { <string:2423925279>: null, <string:2596769915>: null };
  obj4 = { "Bool(true)": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000013677476443, "Bool(true)": -103843524791655450000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Bool(true)": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000013677476443, "Bool(true)": -14212407964057540000000000000000000000000000000000000000000000000000000000000000000000000000000, "Bool(true)": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000013677476443, "Bool(true)": -15178759580223005000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Bool(true)": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020043463816, "Bool(true)": -2626373832237945400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, backgroundColor: importDefault(dependencyMap[13]).colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND, borderRadius: importDefault(dependencyMap[13]).radii.sm };
  obj.comments = obj4;
  obj.commentCount = { sl: false, so: false, sq: false, sr: false, ss: false };
  const obj5 = { aze: false, azj: false, tintColor: importDefault(dependencyMap[13]).colors.INTERACTIVE_TEXT_DEFAULT };
  obj.commentsIcon = obj5;
  return obj;
});
const obj = arg1(dependencyMap[12]);
const result = arg1(dependencyMap[44]).fileFinishedImporting("modules/icymi/native/ICYMICardInteractionRow.tsx");

export default function ICYMICardInteractionRow(message) {
  let hasOverflow;
  let showReplyForwardButtons;
  let showThreadAsComments;
  message = message.message;
  const arg1 = message;
  const channel = message.channel;
  const importDefault = channel;
  let flag = message.hideAdditionalButtons;
  if (flag === undefined) {
    flag = false;
  }
  const dependencyMap = flag;
  let flag2 = message.isKeyMessage;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let callback = flag2;
  let flag3 = message.inForum;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let str = message.backgroundVariant;
  if (str === undefined) {
    str = "primary";
  }
  const React = str;
  const id = message.id;
  const itemType = message.itemType;
  let tmp2;
  let closure_8;
  let closure_9;
  let closure_10;
  let closure_11;
  let closure_12;
  const tmp = callback4();
  tmp2 = useThread(message.guild, message, flag3);
  const items = [message.reactions];
  const memo = React.useMemo(() => {
    const items = [];
    const message = items;
    const reactions = message.reactions;
    const item = reactions.forEach((me_vote) => {
      if (null == me_vote.me_vote) {
        if (me_vote.burst_count > 0) {
          let obj = {};
          const merged = Object.assign(me_vote);
          obj["type"] = items(closure_2[34]).ReactionTypes.BURST;
          items.push(obj);
        }
        if (me_vote.count > 0) {
          obj = {};
          const merged1 = Object.assign(me_vote);
          obj["type"] = items(closure_2[34]).ReactionTypes.NORMAL;
          items.push(obj);
        }
      }
    });
    return items;
  }, items);
  closure_8 = memo;
  const items1 = [channel];
  const memo1 = React.useMemo(() => {
    let tmp = null != channel;
    if (tmp) {
      tmp = channel(flag[35])(channel);
    }
    return tmp;
  }, items1);
  let obj = arg1(dependencyMap[36]);
  const canForwardMessage = obj.useCanForwardMessage(message);
  closure_9 = canForwardMessage;
  let obj1 = arg1(dependencyMap[16]);
  const items2 = [closure_11];
  const stateFromStores = obj1.useStateFromStores(items2, () => callback.can(constants.SEND_MESSAGES, channel));
  closure_10 = stateFromStores;
  const items3 = [flag, tmp2.messageCount, memo.length, stateFromStores, canForwardMessage];
  const memo2 = React.useMemo(() => {
    let num = 4;
    if (flag) {
      num = 6;
    }
    let diff = num;
    if (tmp2.messageCount > 0) {
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
    obj.showThreadAsComments = tmp2.messageCount > 0;
    return obj;
  }, items3);
  ({ hasOverflow, showReplyForwardButtons, showThreadAsComments } = memo2);
  const items4 = [id, itemType];
  callback = React.useCallback((open_profile, actionParameters) => {
    let obj = channel(flag[37]);
    obj.itemInteracted(id, itemType, open_profile);
    obj = { itemId: id, itemType, actionParameters };
    channel(flag[37]).feedItemActioned(obj);
  }, items4);
  closure_11 = callback;
  const items5 = [channel.id, message.id, callback];
  const items6 = [message, callback];
  const callback1 = React.useCallback((arg0, arg1) => {
    callback("press_reaction", {});
    callback2(channel.id, message.id, arg0, arg1);
  }, items5);
  const items7 = [channel, message, callback];
  const callback2 = React.useCallback(() => {
    callback("press_forward", { "Bool(false)": 1, "Bool(false)": 1, "Bool(false)": null, "Bool(false)": "text-md/semibold" });
    let obj = message(flag[38]);
    obj = { message, source: "icymi-tab" };
    obj.openForwardModal(obj);
  }, items6);
  const items8 = [str, flag2];
  const callback3 = React.useCallback(() => {
    callback("press_reply", {});
    let obj = message(flag[32]);
    obj.navigateToPost(channel.id, channel.guild_id, message.id);
    obj = { channel, message, shouldMention: true, showMentionToggle: true };
    const pendingReply = message(flag[39]).createPendingReply(obj);
  }, items7);
  const memo3 = React.useMemo(() => {
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
  let obj2 = arg1(dependencyMap[40]);
  const token = obj2.useToken(memo3);
  const tmp13 = callback(React.useState(true), 2);
  closure_12 = tmp13[1];
  [][0] = callback;
  const callback4 = React.useCallback((nativeEvent) => {
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
          showThreadAsComments = callback2(ThreadAsCommentsButton, obj5);
        }
        const items10 = [showThreadAsComments, ];
        if (showReplyForwardButtons) {
          const obj6 = {};
          const obj7 = { onPress: callback3, disabled: !stateFromStores };
          const items11 = [callback2(ReplyButton, obj7), ];
          const obj8 = { onPress: callback2, disabled: !canForwardMessage };
          items11[1] = callback2(ForwardButton, obj8);
          obj6.children = items11;
          showReplyForwardButtons = callback3(closure_18, obj6);
        }
        items10[1] = showReplyForwardButtons;
        obj4.children = items10;
        tmp28Result = callback3(id, obj4);
        const tmp28 = callback3;
        const tmp29 = id;
      }
      const items12 = [
        tmp28Result,
        memo.map((reaction) => {
              let obj = {};
              obj = { messageId: message.id, channel, reaction, count: reaction.type === message(flag[34]).ReactionTypes.BURST ? reaction.burst_count : reaction.count, isBurstReaction: reaction.type === message(flag[34]).ReactionTypes.BURST, handleItemInteracted: callback };
              obj.children = closure_16(closure_24, obj);
              return closure_16(id, obj, "reaction-" + arg1);
            }),

      ];
      let tmp38 = null;
      if (!flag) {
        tmp38 = null;
        if (memo1) {
          const obj9 = { channel, onPressEmoji: callback1, handleItemInteracted: callback };
          tmp38 = callback2(AddEmojiButton, obj9);
        }
      }
      items12[2] = tmp38;
      obj2.children = items12;
      const items13 = [callback3(tmp2, obj2), ];
      let tmp41 = null;
      if (hasOverflow) {
        tmp41 = null;
        if (tmp13[0]) {
          const obj10 = {};
          const obj11 = { style: tmp.gradient };
          ({ START: obj16.start, END: obj16.end } = closure_14);
          const tmp47 = importDefault(dependencyMap[41]);
          const obj17 = importDefault(dependencyMap[42])(token);
          const items14 = [importDefault(dependencyMap[42])(token).alpha(0).hex(), token, token];
          obj11.colors = items14;
          obj11.locations = ["<string:6582592>", "<string:305266688>", "<string:2714419331>"];
          const items15 = [callback2(tmp47, obj11), ];
          const obj12 = { "Bool(true)": "png", "Bool(true)": "absolute", "Bool(true)": -3 };
          const items16 = [tmp.overflowChevron];
          obj12.style = items16;
          items15[1] = callback2(arg1(dependencyMap[43]).ChevronSmallRightIcon, obj12);
          obj10.children = items15;
          tmp41 = callback3(closure_18, obj10);
          const alphaResult = importDefault(dependencyMap[42])(token).alpha(0);
        }
      }
      items13[1] = tmp41;
      obj1.children = items13;
      let tmp22Result = callback3(id, obj1);
      const tmp22 = callback3;
      const tmp23 = id;
      const tmp24 = callback3;
      const tmp25 = tmp2;
    } else {
      tmp22Result = null;
    }
    obj.children = tmp22Result;
    obj.children = callback2(id, obj);
    let tmp17Result = callback2(id, obj);
    const tmp17 = callback2;
    const tmp18 = id;
    const tmp19 = callback2;
    const tmp20 = id;
  } else {
    tmp17Result = null;
  }
  return tmp17Result;
};
export { onAddReaction };
export { useThread };

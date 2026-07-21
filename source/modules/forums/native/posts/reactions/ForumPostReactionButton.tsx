// Module ID: 10324
// Function ID: 79698
// Name: BurstReactionButton
// Dependencies: []
// Exports: AddReactionButton, AdditionalReactionCount, ForumPostReactionButton

// Module 10324 (BurstReactionButton)
class BurstReactionButton {
  constructor(arg0) {
    ({ colors, emoji, onPress, onLongPress, containerStyle, count, emojiSize, selected, animate, animateCount, accessible } = global);
    obj = arg1(dependencyMap[13]);
    emojiColorPalette = obj.useEmojiColorPalette(colors);
    obj = {};
    str = "";
    if (null != emojiColorPalette) {
      tmp2 = arg1;
      tmp3 = dependencyMap;
      num = 14;
      obj3 = arg1(dependencyMap[14]);
      backgroundColor = undefined;
      if (null != emojiColorPalette) {
        backgroundColor = emojiColorPalette.backgroundColor;
      }
      opacity = undefined;
      if (null != emojiColorPalette) {
        opacity = emojiColorPalette.opacity;
      }
      num2 = 0.15;
      if (null != opacity) {
        num2 = opacity;
      }
      hex2rgbResult = obj3.hex2rgb(backgroundColor, num2);
      str = "";
      if (null != hex2rgbResult) {
        str = hex2rgbResult;
      }
    }
    obj.backgroundColor = str;
    backgroundColor1 = undefined;
    if (null != emojiColorPalette) {
      backgroundColor1 = emojiColorPalette.backgroundColor;
    }
    obj.borderColor = backgroundColor1;
    num3 = 0;
    if (selected) {
      num3 = 1;
    }
    obj.borderWidth = num3;
    obj1 = {};
    accentColor = undefined;
    if (null != emojiColorPalette) {
      accentColor = emojiColorPalette.accentColor;
    }
    obj1.color = accentColor;
    items = [, ];
    items[0] = containerStyle;
    items[1] = obj;
    return jsx(ReactionButton, { containerStyle: items, textStyle: obj1, selected: false, emoji, count, animate, onPress, onLongPress, emojiSize, animateCount, accessible });
  }
}
class ReactionButton {
  constructor(arg0) {
    ({ emoji, count, selected, animate, disabled } = global);
    ({ onPress, onLongPress, textStyle, containerStyle, emojiSize, animateCount, accessible } = global);
    if (disabled === undefined) {
      disabled = false;
    }
    tmp = closure_7();
    emojiURL = undefined;
    if (null != emoji.id) {
      tmp3 = importDefault;
      tmp4 = dependencyMap;
      num = 15;
      obj = importDefault(dependencyMap[15]);
      obj = {};
      obj.id = emoji.id;
      if (animate) {
        animate = emoji.animated;
      }
      obj.animated = animate;
      obj.size = emojiSize;
      emojiURL = obj.getEmojiURL(obj);
    }
    selected = undefined;
    if (selected) {
      selected = tmp.selected;
    }
    tmp6 = jsxs;
    obj1 = { style: items, accessible };
    items = [, , ];
    items[0] = tmp.container;
    items[1] = containerStyle;
    items[2] = selected;
    obj4 = arg1(dependencyMap[16]);
    obj1.accessibilityLabel = obj4.getAccessibleEmojiDisplayName(selected, count, emoji, false);
    obj1.onPress = onPress;
    obj1.onLongPress = onLongPress;
    obj1.disabled = disabled;
    obj2 = { textEmojiStyle: tmp.textEmoji, fastImageStyle: tmp.imageEmoji };
    obj2.src = emojiURL;
    obj2.name = emoji.name;
    items1 = [, ];
    items1[0] = jsx(importDefault(dependencyMap[17]), obj2);
    tmp7 = null != count;
    if (tmp7) {
      num2 = 0;
      tmp7 = count > 0;
    }
    if (tmp7) {
      tmp8 = jsx;
      tmp9 = View;
      obj3 = {};
      obj3.style = tmp.countContainer;
      tmp10 = jsx;
      tmp11 = importDefault;
      tmp12 = dependencyMap;
      num3 = 18;
      obj4 = {};
      obj4.textStyle = textStyle;
      obj4.count = count;
      obj4.animate = animateCount;
      obj3.children = jsx(importDefault(dependencyMap[18]), obj4);
      tmp7 = jsx(View, obj3);
    }
    items1[1] = tmp7;
    obj1.children = items1;
    return tmp6(arg1(dependencyMap[6]).PressableOpacity, obj1);
  }
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsxs: closure_5, jsx: closure_6 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { flex: null, accessible: "space-around", Symbol: "center", justifyContent: 1, View: 24, a: 16, accessible: 480, useEffect: "center", sa: 311, h: null, apply: 1, body: 345, borderRadius: importDefault(dependencyMap[4]).radii.sm, borderColor: importDefault(dependencyMap[4]).colors.REACTION_BORDER_DEFAULT, backgroundColor: importDefault(dependencyMap[4]).colors.REACTION_BACKGROUND_DEFAULT };
obj.container = obj;
const tmp2 = arg1(dependencyMap[2]);
obj.selected = { borderColor: importDefault(dependencyMap[4]).colors.REACTION_BORDER_REACTED_DEFAULT, backgroundColor: importDefault(dependencyMap[4]).colors.REACTION_BACKGROUND_REACTED_DEFAULT };
obj.textEmoji = { fontSize: 12 };
obj.imageEmoji = {};
obj.countContainer = { paddingStart: 4 };
let closure_7 = obj.createStyles(obj);
const obj1 = { borderColor: importDefault(dependencyMap[4]).colors.REACTION_BORDER_REACTED_DEFAULT, backgroundColor: importDefault(dependencyMap[4]).colors.REACTION_BACKGROUND_REACTED_DEFAULT };
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/forums/native/posts/reactions/ForumPostReactionButton.tsx");

export const DEFAULT_EMOJI_SIZE = 14;
export const AdditionalReactionCount = function AdditionalReactionCount(arg0) {
  let containerStyle;
  let count;
  let threadId;
  ({ count, threadId, containerStyle } = arg0);
  const obj = { accessible: true };
  const intl = arg1(dependencyMap[7]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[7]).t.N8hbZB);
  const items = [callback3().container, containerStyle];
  obj.style = items;
  obj.onPress = importDefault(dependencyMap[5])({ threadId }).onTapReactionCount;
  const items1 = ["fill", count];
  obj.children = callback(arg1(dependencyMap[8]).Text, { children: items1 });
  return callback2(arg1(dependencyMap[6]).PressableOpacity, obj);
};
export const AddReactionButton = function AddReactionButton(reactionType) {
  let containerStyle;
  let threadId;
  let NORMAL = reactionType.reactionType;
  ({ threadId, containerStyle } = reactionType);
  if (NORMAL === undefined) {
    NORMAL = arg1(dependencyMap[9]).ReactionTypes.NORMAL;
  }
  let obj = { threadId, reactionType: NORMAL };
  obj = { style: items, accessible: true };
  const items = [callback3().container, containerStyle];
  const intl = arg1(dependencyMap[7]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[7]).t.lfIHs4);
  obj.onPress = importDefault(dependencyMap[5])(obj).onTapAddReaction;
  obj.children = callback2(arg1(dependencyMap[10]).ADD_REACTION_ICON_COMPONENTS[NORMAL], { size: "xs" });
  return callback2(arg1(dependencyMap[6]).PressableOpacity, obj);
};
export const ForumPostReactionButton = function ForumPostReactionButton(emojiSize) {
  let animateCount;
  let burst_colors;
  let containerStyle;
  let locationAnalyticsObject;
  let reaction;
  let textStyle;
  let thread;
  ({ thread, reaction } = emojiSize);
  const arg1 = reaction;
  ({ animateCount, containerStyle, textStyle, locationAnalyticsObject } = emojiSize);
  const importDefault = locationAnalyticsObject;
  let num = emojiSize.emojiSize;
  if (num === undefined) {
    num = 14;
  }
  let dependencyMap;
  let React;
  let View;
  let onLongTapReaction;
  const tmp = importDefault(dependencyMap[11])(thread);
  const disableReactionCreates = tmp.disableReactionCreates;
  dependencyMap = disableReactionCreates;
  const disableReactionUpdates = tmp.disableReactionUpdates;
  React = disableReactionUpdates;
  let obj = { threadId: thread.id };
  const tmp2 = importDefault(dependencyMap[5])(obj);
  const onTapReaction = tmp2.onTapReaction;
  View = onTapReaction;
  onLongTapReaction = tmp2.onLongTapReaction;
  const AnimateEmoji = arg1(dependencyMap[12]).AnimateEmoji;
  const setting = AnimateEmoji.useSetting();
  const items = [disableReactionCreates, disableReactionUpdates, locationAnalyticsObject, onTapReaction, reaction];
  const callback = React.useCallback(() => {
    onTapReaction({ reaction, disableReactionCreates, disableReactionUpdates, locationAnalyticsObject });
  }, items);
  const items1 = [onLongTapReaction, reaction];
  const callback1 = React.useCallback(() => {
    onLongTapReaction(reaction);
  }, items1);
  if (reaction.burst_count > 0) {
    obj = { accessible: tmp6 };
    ({ emoji: obj3.emoji, me_burst: obj3.selected, burst_colors } = reaction);
    if (null == burst_colors) {
      burst_colors = [];
    }
    obj.colors = burst_colors;
    obj.count = reaction.burst_count;
    obj.onPress = callback;
    obj.onLongPress = callback1;
    obj.containerStyle = containerStyle;
    obj.textStyle = textStyle;
    obj.emojiSize = num;
    obj.animate = setting;
    obj.animateCount = animateCount;
    let tmp10Result = callback2(BurstReactionButton, obj);
    const tmp10 = callback2;
    const tmp11 = BurstReactionButton;
  } else {
    obj = { accessible: tmp6 };
    ({ emoji: obj2.emoji, me: obj2.selected, count: obj2.count } = reaction);
    obj.onPress = callback;
    obj.onLongPress = callback1;
    obj.containerStyle = containerStyle;
    obj.textStyle = textStyle;
    obj.emojiSize = num;
    obj.animate = setting;
    obj.animateCount = animateCount;
    tmp10Result = callback2(ReactionButton, obj);
  }
  return tmp10Result;
};
export { BurstReactionButton };
export { ReactionButton };

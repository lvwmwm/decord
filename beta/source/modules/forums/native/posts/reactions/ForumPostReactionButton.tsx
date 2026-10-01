// Module ID: 9679
// Function ID: 9680
// Name: ForumPostReactionButton
// Dependencies: [19, 17, 21, 4836, 576, 9680, 5435, 1115, 4832, 7182, 10824, 10856, 2021, 10829, 1092, 1397, 4481, 6551, 10858, 2]
// Exports: AddReactionButton, AdditionalReactionCount, ForumPostReactionButton

// Module 9679 (ForumPostReactionButton)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1092 */;
import intl2 from "intl" /* 1115 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import UserSettings from "UserSettings" /* 2021 */;
import ReactionUtils from "ReactionUtils" /* 4481 */;
import Text_Text from "Text/Text" /* 4832 */;
import Pressables from "Pressables" /* 5435 */;
import EmojiDefault from "Emoji" /* 6551 */;
import MessageReactionsTypes from "MessageReactionsTypes" /* 7182 */;
import useNativeForumPostHandlersDefault from "useNativeForumPostHandlers" /* 9680 */;
import reactions_ReactionUtils from "reactions/ReactionUtils" /* 10824 */;
import useEmojiColorPalette from "useEmojiColorPalette" /* 10829 */;
import useReactionPermissionsDefault from "useReactionPermissions" /* 10856 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let tmp10;
const AnimatedCounterDefault = tmp10(10858);
class BurstReactionButton {
  constructor(arg0) {
    let accentColor;
    let accessible;
    let animate;
    let animateCount;
    let backgroundColor1;
    let colors;
    let containerStyle;
    let count;
    let emoji;
    let emojiSize;
    let num2;
    let onLongPress;
    let onPress;
    let selected;
    ({ colors, emoji, onPress, onLongPress, containerStyle, count, emojiSize, selected, animate, animateCount, accessible } = arg0);
    const obj = useEmojiColorPalette;
    const emojiColorPalette = obj.useEmojiColorPalette(colors);
    let str = "";
    if (null != emojiColorPalette) {
      let backgroundColor;
      const hex2rgb = tmp(1092).hex2rgb;
      utils_ColorUtils;
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
    const items = [containerStyle, ];
    const obj2 = { backgroundColor: str, borderColor: backgroundColor1, borderWidth: num2 };
    backgroundColor1 = undefined;
    const tmp6 = metroRequire;
    const tmp7 = ReactionButton;
    if (emojiColorPalette != null) {
      backgroundColor1 = emojiColorPalette.backgroundColor;
    }
    num2 = 0;
    if (selected) {
      num2 = 1;
    }
    const obj3 = { containerStyle: items, textStyle: { color: accentColor }, selected: false, emoji, count, animate, onPress, onLongPress, emojiSize, animateCount, accessible };
    items[1] = obj2;
    accentColor = undefined;
    if (emojiColorPalette != null) {
      accentColor = emojiColorPalette.accentColor;
    }
    return tmp6(tmp7, obj3);
  }
}
class ReactionButton {
  constructor(arg0) {
    let accessible;
    let animate;
    let animateCount;
    let containerStyle;
    let count;
    let disabled;
    let emoji;
    let emojiSize;
    let items;
    let items1;
    let obj3;
    let obj6;
    let onLongPress;
    let onPress;
    let selected;
    let textStyle;
    ({ emoji, count, selected, animate, disabled } = arg0);
    ({ onPress, onLongPress, textStyle, containerStyle, emojiSize, animateCount, accessible } = arg0);
    if (disabled === undefined) {
      disabled = false;
    }
    const tmp = closure_7();
    let emojiURL;
    if (null != emoji.id) {
      const obj = { id: emoji.id, animated: animate, size: emojiSize };
      const getEmojiURL = AvatarUtilsDefault.getEmojiURL;
      AvatarUtilsDefault;
      if (animate) {
        animate = emoji.animated;
      }
      emojiURL = getEmojiURL(obj);
    }
    let selected1;
    if (selected) {
      selected1 = tmp.selected;
    }
    const obj2 = { style: items, accessible, accessibilityLabel: obj3.getAccessibleEmojiDisplayName(selected, count, emoji, false), onPress, onLongPress, disabled, children: items1 };
    items = [tmp.container, containerStyle, selected1];
    const PressableOpacity = Pressables.PressableOpacity;
    items1 = [, ];
    obj3 = ReactionUtils;
    const obj4 = { textEmojiStyle: tmp.textEmoji, fastImageStyle: tmp.imageEmoji, src: emojiURL, name: emoji.name };
    items1[0] = metroRequire(EmojiDefault, obj4);
    let tmp9Result = null != count;
    const tmp7 = hasOwnProperty;
    if (tmp9Result) {
      tmp9Result = count > 0;
    }
    if (tmp9Result) {
      const obj5 = { style: tmp.countContainer, children: metroRequire(AnimatedCounterDefault, obj6) };
      obj6 = { textStyle, count, animate: animateCount };
      tmp9Result = tmp9(View, obj5);
    }
    items1[1] = tmp9Result;
    return tmp7(PressableOpacity, obj2);
  }
}
const View = react_native.View;
({ jsxs: hasOwnProperty, jsx: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, selected: obj3, textEmoji: { fontSize: 12 }, imageEmoji: { height: 16, width: 16 }, countContainer: { paddingStart: 4 } };
obj2 = { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", paddingHorizontal: 8, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.REACTION_BORDER_DEFAULT, backgroundColor: nativeDefault.colors.REACTION_BACKGROUND_DEFAULT, minWidth: 32, minHeight: 26, maxHeight: 26 };
createStyles = createStyles.createStyles;
obj3 = { borderColor: nativeDefault.colors.REACTION_BORDER_REACTED_DEFAULT, backgroundColor: nativeDefault.colors.REACTION_BACKGROUND_REACTED_DEFAULT };
const metroImportDefault = createStyles(obj);
const result = size.fileFinishedImporting("modules/forums/native/posts/reactions/ForumPostReactionButton.tsx");

export const DEFAULT_EMOJI_SIZE = 14;
export const AdditionalReactionCount = function AdditionalReactionCount(arg0) {
  let containerStyle;
  let count;
  let intl;
  let items;
  let items1;
  let obj2;
  let threadId;
  ({ count, threadId, containerStyle } = arg0);
  const tmp = closure_7();
  const onTapReactionCount = useNativeForumPostHandlersDefault({ threadId }).onTapReactionCount;
  const obj = { accessible: true, accessibilityLabel: intl.string(intl2.t.N8hbZB), style: items, onPress: onTapReactionCount, children: hasOwnProperty(Text_Text.Text, obj2) };
  const PressableOpacity = Pressables.PressableOpacity;
  intl = intl2.intl;
  items = [tmp.container, containerStyle];
  obj2 = { variant: "heading-sm/medium", color: "interactive-text-default", children: items1 };
  items1 = ["+", count];
  return metroRequire(PressableOpacity, obj);
};
export const AddReactionButton = function AddReactionButton(reactionType) {
  let containerStyle;
  let intl;
  let items;
  let threadId;
  let tmp4;
  let NORMAL = reactionType.reactionType;
  ({ threadId, containerStyle } = reactionType);
  if (NORMAL === undefined) {
    NORMAL = MessageReactionsTypes.ReactionTypes.NORMAL;
  }
  const tmp3 = closure_7();
  const onTapAddReaction = useNativeForumPostHandlersDefault({ threadId, reactionType: NORMAL }).onTapAddReaction;
  const obj = { style: items, accessible: true, accessibilityLabel: intl.string(intl2.t.lfIHs4), onPress: onTapAddReaction, children: metroRequire(tmp4, { size: "xs" }) };
  items = [tmp3.container, containerStyle];
  tmp4 = reactions_ReactionUtils.ADD_REACTION_ICON_COMPONENTS[NORMAL];
  const PressableOpacity = Pressables.PressableOpacity;
  intl = intl2.intl;
  return metroRequire(PressableOpacity, obj);
};
export const ForumPostReactionButton = function ForumPostReactionButton(emojiSize) {
  let animateCount;
  let burst_colors;
  let containerStyle;
  let locationAnalyticsObject;
  let reaction;
  let textStyle;
  let thread;
  let tmp10Result;
  ({ thread, reaction } = emojiSize);
  ({ animateCount, containerStyle, textStyle, locationAnalyticsObject } = emojiSize);
  let num = emojiSize.emojiSize;
  if (num === undefined) {
    num = 14;
  }
  const tmp = useReactionPermissionsDefault(thread);
  const disableReactionCreates = tmp.disableReactionCreates;
  const disableReactionUpdates = tmp.disableReactionUpdates;
  let obj = { threadId: thread.id };
  const tmp2 = useNativeForumPostHandlersDefault(obj);
  const onTapReaction = tmp2.onTapReaction;
  const onLongTapReaction = tmp2.onLongTapReaction;
  const AnimateEmoji = UserSettings.AnimateEmoji;
  const setting = AnimateEmoji.useSetting();
  const items = [disableReactionCreates, disableReactionUpdates, locationAnalyticsObject, onTapReaction, reaction];
  const callback = react.useCallback(() => {
    const obj = { reaction, disableReactionCreates, disableReactionUpdates, locationAnalyticsObject };
    onTapReaction(obj);
  }, items);
  const items1 = [onLongTapReaction, reaction];
  const callback1 = react.useCallback(() => {
    onLongTapReaction(reaction);
  }, items1);
  let tmp6 = !disableReactionCreates;
  if (disableReactionCreates) {
    tmp6 = !disableReactionUpdates;
  }
  if (reaction.burst_count > 0) {
    const obj5 = { accessible: tmp6, emoji: null, selected: null, colors: burst_colors, count: reaction.burst_count, onPress: callback, onLongPress: callback1, containerStyle, textStyle, emojiSize: num, animate: setting, animateCount };
    ({ emoji: obj3.emoji, me_burst: obj3.selected, burst_colors } = reaction);
    const tmp10 = metroRequire;
    const tmp11 = BurstReactionButton;
    if (burst_colors == null) {
      burst_colors = [];
    }
    tmp10Result = tmp10(tmp11, obj5);
  } else {
    const obj6 = { accessible: tmp6, emoji: null, selected: null, count: null, onPress: callback, onLongPress: callback1, containerStyle, textStyle, emojiSize: num, animate: setting, animateCount };
    ({ emoji: obj2.emoji, me: obj2.selected, count: obj2.count } = reaction);
    tmp10Result = metroRequire(ReactionButton, obj6);
  }
  return tmp10Result;
};
export { BurstReactionButton };
export { ReactionButton };

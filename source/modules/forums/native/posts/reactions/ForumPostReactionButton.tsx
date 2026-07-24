// Module ID: 10367
// Function ID: 79992
// Name: BurstReactionButton
// Dependencies: [31, 27, 33, 4130, 689, 10368, 4660, 1212, 4126, 7005, 9351, 10379, 3803, 9467, 665, 1392, 3769, 5151, 10381, 2]
// Exports: AddReactionButton, AdditionalReactionCount, ForumPostReactionButton

// Module 10367 (BurstReactionButton)
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
class BurstReactionButton {
  constructor(arg0) {
    ({ colors, emoji, onPress, onLongPress, containerStyle, count, emojiSize, selected, animate, animateCount, accessible } = global);
    obj = require("useEmojiColorPalette");
    emojiColorPalette = obj.useEmojiColorPalette(colors);
    obj = {};
    str = "";
    if (null != emojiColorPalette) {
      tmp2 = closure_0;
      tmp3 = closure_2;
      num = 14;
      obj3 = require("pad2");
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
    tmp = c7();
    emojiURL = undefined;
    if (null != emoji.id) {
      tmp3 = closure_1;
      tmp4 = closure_2;
      num = 15;
      obj = require("getAvatarURL");
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
    obj4 = require("getReactionEmojiName");
    obj1.accessibilityLabel = obj4.getAccessibleEmojiDisplayName(selected, count, emoji, false);
    obj1.onPress = onPress;
    obj1.onLongPress = onLongPress;
    obj1.disabled = disabled;
    obj2 = { textEmojiStyle: tmp.textEmoji, fastImageStyle: tmp.imageEmoji };
    obj2.src = emojiURL;
    obj2.name = emoji.name;
    items1 = [, ];
    items1[0] = jsx(require("Emoji"), obj2);
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
      tmp11 = closure_1;
      tmp12 = closure_2;
      num3 = 18;
      obj4 = {};
      obj4.textStyle = textStyle;
      obj4.count = count;
      obj4.animate = animateCount;
      obj3.children = jsx(require("getStartPosition"), obj4);
      tmp7 = jsx(View, obj3);
    }
    items1[1] = tmp7;
    obj1.children = items1;
    return tmp6(require("PressableBase").PressableOpacity, obj1);
  }
}
({ jsxs: closure_5, jsx: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", paddingHorizontal: 8, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.REACTION_BORDER_DEFAULT, backgroundColor: require("_createForOfIteratorHelperLoose").colors.REACTION_BACKGROUND_DEFAULT, minWidth: 32, minHeight: 26, maxHeight: 26 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.selected = { borderColor: require("_createForOfIteratorHelperLoose").colors.REACTION_BORDER_REACTED_DEFAULT, backgroundColor: require("_createForOfIteratorHelperLoose").colors.REACTION_BACKGROUND_REACTED_DEFAULT };
_createForOfIteratorHelperLoose.textEmoji = { fontSize: 12 };
_createForOfIteratorHelperLoose.imageEmoji = { height: 16, width: 16 };
_createForOfIteratorHelperLoose.countContainer = { paddingStart: 4 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { borderColor: require("_createForOfIteratorHelperLoose").colors.REACTION_BORDER_REACTED_DEFAULT, backgroundColor: require("_createForOfIteratorHelperLoose").colors.REACTION_BACKGROUND_REACTED_DEFAULT };
const result = require("jsxProd").fileFinishedImporting("modules/forums/native/posts/reactions/ForumPostReactionButton.tsx");

export const DEFAULT_EMOJI_SIZE = 14;
export const AdditionalReactionCount = function AdditionalReactionCount(arg0) {
  let containerStyle;
  let count;
  let threadId;
  ({ count, threadId, containerStyle } = arg0);
  let obj = { accessible: true };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.accessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t.N8hbZB);
  const items = [_createForOfIteratorHelperLoose().container, containerStyle];
  obj.style = items;
  obj.onPress = importDefault(10368)({ threadId }).onTapReactionCount;
  obj = { variant: "heading-sm/medium", color: "interactive-text-default" };
  const items1 = ["+", count];
  obj.children = items1;
  obj.children = callback(require(4126) /* Text */.Text, obj);
  return callback2(require(4660) /* PressableBase */.PressableOpacity, obj);
};
export const AddReactionButton = function AddReactionButton(reactionType) {
  let containerStyle;
  let threadId;
  let NORMAL = reactionType.reactionType;
  ({ threadId, containerStyle } = reactionType);
  if (NORMAL === undefined) {
    NORMAL = require(7005) /* ReactionTypes */.ReactionTypes.NORMAL;
  }
  let obj = { threadId, reactionType: NORMAL };
  obj = { style: items, accessible: true };
  items = [_createForOfIteratorHelperLoose().container, containerStyle];
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.accessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t.lfIHs4);
  obj.onPress = importDefault(10368)(obj).onTapAddReaction;
  obj.children = callback2(require(9351) /* handleOutOfSuperReactions */.ADD_REACTION_ICON_COMPONENTS[NORMAL], { size: "xs" });
  return callback2(require(4660) /* PressableBase */.PressableOpacity, obj);
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
  ({ animateCount, containerStyle, textStyle, locationAnalyticsObject } = emojiSize);
  let num = emojiSize.emojiSize;
  if (num === undefined) {
    num = 14;
  }
  let disableReactionCreates;
  let disableReactionUpdates;
  let onTapReaction;
  let onLongTapReaction;
  const tmp = locationAnalyticsObject(disableReactionCreates[11])(thread);
  disableReactionCreates = tmp.disableReactionCreates;
  disableReactionUpdates = tmp.disableReactionUpdates;
  let obj = { threadId: thread.id };
  const tmp2 = locationAnalyticsObject(disableReactionCreates[5])(obj);
  onTapReaction = tmp2.onTapReaction;
  onLongTapReaction = tmp2.onLongTapReaction;
  const AnimateEmoji = reaction(disableReactionCreates[12]).AnimateEmoji;
  const setting = AnimateEmoji.useSetting();
  const items = [disableReactionCreates, disableReactionUpdates, locationAnalyticsObject, onTapReaction, reaction];
  const callback = disableReactionUpdates.useCallback(() => {
    onTapReaction({ reaction, disableReactionCreates, disableReactionUpdates, locationAnalyticsObject });
  }, items);
  const items1 = [onLongTapReaction, reaction];
  const callback1 = disableReactionUpdates.useCallback(() => {
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

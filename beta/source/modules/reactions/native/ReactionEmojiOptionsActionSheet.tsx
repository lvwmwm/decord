// Module ID: 10549
// Function ID: 10550
// Name: ReactionEmojiOptionsActionSheet
// Dependencies: [19, 17, 4750, 5678, 4580, 21, 4758, 580, 558, 568, 2023, 7435, 504, 10440, 1401, 4725, 10515, 10517, 4754, 1119, 10511, 4458, 7436, 4457, 8011, 7377, 5822, 5903, 7449, 2]

// Module 10549 (ReactionEmojiOptionsActionSheet)
import nativeDefault from "native" /* 580 */;
import ToastUtils from "ToastUtils" /* 4457 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4458 */;
import ClipboardUtils from "ClipboardUtils" /* 7436 */;
import ReactionActionCreatorsAll from "ReactionActionCreators" /* 8011 */;
import EmojiActionCreators from "EmojiActionCreators" /* 10511 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4750 */;
import EmojiStore from "EmojiStore" /* 5678 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4580 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4758);
let obj2 = { header: { alignItems: "center", paddingTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_16 }, reactionPill: null, emoji: null, emojiText: null, reactionText: null, starIcon: null, starIconSelected: null, starIconUnselected: null };
let obj3 = { alignItems: "center", paddingTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_16 };
obj2.reactionPill = { flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.MESSAGE_HIGHLIGHT_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.xl, borderWidth: 4, borderColor: nativeDefault.colors.BORDER_STRONG, paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
obj2.emoji = { width: 50, height: 50 };
obj2.emojiText = { fontSize: 24, lineHeight: 50, textAlign: "center" };
obj2.reactionText = { fontSize: 24, lineHeight: 50 };
obj2.starIcon = { height: 24, width: 24 };
let obj4 = { flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.MESSAGE_HIGHLIGHT_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.xl, borderWidth: 4, borderColor: nativeDefault.colors.BORDER_STRONG, paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
obj2.starIconSelected = { tintColor: nativeDefault.colors.ICON_FEEDBACK_WARNING };
let obj5 = { tintColor: nativeDefault.colors.ICON_FEEDBACK_WARNING };
obj2.starIconUnselected = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let closure_11 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj6 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
const size = fn(2);
let result = size.fileFinishedImporting("modules/reactions/native/ReactionEmojiOptionsActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  const cResult = channelId(emoji[9]).c(75);
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  ({ reaction, canRemoveReactions } = channelId);
  let obj = channelId(emoji[9]);
  const starIcon = closure_11();
  emoji = reaction.emoji;
  const DeveloperMode = channelId(emoji[10]).DeveloperMode;
  const setting = DeveloperMode.useSetting();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { location: "ReactionEmojiOptionsActionSheet" };
    let obj3 = { autoTrackExposure: false };
    cResult[0] = obj2;
    cResult[1] = obj3;
    tmp6 = obj2;
    tmp7 = obj3;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const tmp4 = closure_11();
  const tidaWebformEnabled = messageId(emoji[11]).useExperiment(tmp6, tmp7).tidaWebformEnabled;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SelectedGuildStore];
    const fn = function f() {
      return guildId.getGuildId();
    };
    cResult[2] = items;
    cResult[3] = fn;
    let tmp9 = fn;
    let tmp8 = items;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  let obj4 = messageId(emoji[11]);
  const stateFromStores = channelId(emoji[12]).useStateFromStores(tmp8, tmp9);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [EmojiStore];
    cResult[4] = items1;
    let tmp12 = items1;
  } else {
    tmp12 = cResult[4];
  }
  if (cResult[5] !== emoji.id) {
    class P {
      constructor() {
        customEmojiById = null;
        if (null != emoji.id) {
          tmp3 = closure_7;
          customEmojiById = closure_7.getCustomEmojiById(tmp.id);
        }
        return customEmojiById;
      }
    }
    const items2 = [emoji.id];
    cResult[5] = emoji.id;
    cResult[6] = P;
    cResult[7] = items2;
    let tmp15 = items2;
    const tmp14 = P;
  } else {
    class P {
      constructor() {
        customEmojiById = null;
        if (null != emoji.id) {
          tmp3 = closure_7;
          customEmojiById = closure_7.getCustomEmojiById(tmp.id);
        }
        return customEmojiById;
      }
    }
    tmp15 = cResult[7];
  }
  const tmpResult = channelId(emoji[12]);
  const stateFromStores1 = channelId(emoji[12]).useStateFromStores(tmp12, tmp14, tmp15);
  const tmpResult4 = channelId(emoji[12]);
  const isFavoriteEmoji = channelId(emoji[13]).useIsFavoriteEmoji(stateFromStores, stateFromStores1);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class P {
      constructor() {
        customEmojiById = null;
        if (null != emoji.id) {
          tmp3 = closure_7;
          customEmojiById = closure_7.getCustomEmojiById(tmp.id);
        }
        return customEmojiById;
      }
    }
    const items3 = [AccessibilityStore];
    const fn2 = function w() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[8] = items3;
    cResult[9] = fn2;
    let tmp19 = fn2;
    const tmp18 = items3;
  } else {
    class P {
      constructor() {
        customEmojiById = null;
        if (null != emoji.id) {
          tmp3 = closure_7;
          customEmojiById = closure_7.getCustomEmojiById(tmp.id);
        }
        return customEmojiById;
      }
    }
    tmp19 = cResult[9];
  }
  const tmpResult5 = channelId(emoji[13]);
  const stateFromStores2 = channelId(emoji[12]).useStateFromStores(tmp18, tmp19);
  const AnimateEmoji = tmp(tmp2[10]).AnimateEmoji;
  if (!stateFromStores2) {
    class P {
      constructor() {
        customEmojiById = null;
        if (null != emoji.id) {
          tmp3 = closure_7;
          customEmojiById = closure_7.getCustomEmojiById(tmp.id);
        }
        return customEmojiById;
      }
    }
  }
  if (cResult[10] === emoji.animated) {
    class P {
      constructor() {
        customEmojiById = null;
        if (null != emoji.id) {
          tmp3 = closure_7;
          customEmojiById = closure_7.getCustomEmojiById(tmp.id);
        }
        return customEmojiById;
      }
    }
  }
  let emojiURL;
  if (null != emoji.id) {
    class P {
      constructor() {
        customEmojiById = null;
        if (null != emoji.id) {
          tmp3 = closure_7;
          customEmojiById = closure_7.getCustomEmojiById(tmp.id);
        }
        return customEmojiById;
      }
    }
    let obj5 = { id: null, animated: null, size: 96 };
    ({ id: obj10.id, animated } = emoji);
    if (animated == null) {
      class P {
        constructor() {
          customEmojiById = null;
          if (null != emoji.id) {
            tmp3 = closure_7;
            customEmojiById = closure_7.getCustomEmojiById(tmp.id);
          }
          return customEmojiById;
        }
      }
    }
    if (animated) {
      class P {
        constructor() {
          customEmojiById = null;
          if (null != emoji.id) {
            tmp3 = closure_7;
            customEmojiById = closure_7.getCustomEmojiById(tmp.id);
          }
          return customEmojiById;
        }
      }
    }
    obj5.animated = animated;
    emojiURL = obj9.getEmojiURL(obj5);
  }
  cResult[10] = emoji.animated;
  cResult[11] = emoji.id;
  cResult[12] = !stateFromStores2;
  cResult[13] = emojiURL;
}) : ((channelId) => {
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  ({ reaction, canRemoveReactions } = channelId);
  let emojiURL;
  let callback;
  let callback1;
  const tmp = closure_11();
  const starIcon = tmp;
  const emoji = reaction.emoji;
  const DeveloperMode = channelId(emoji[10]).DeveloperMode;
  let tidaWebformEnabled = DeveloperMode.useSetting();
  let obj = messageId(emoji[11]);
  const items = [callback1];
  const stateFromStores = channelId(emoji[12]).useStateFromStores(items, () => callback1.getGuildId());
  let obj2 = channelId(emoji[12]);
  const items1 = [callback];
  const items2 = [emoji.id];
  const stateFromStores1 = channelId(emoji[12]).useStateFromStores(items1, () => {
    let customEmojiById = null;
    if (null != emoji.id) {
      customEmojiById = EmojiStore.getCustomEmojiById(tmp.id);
    }
    return customEmojiById;
  }, items2);
  let obj3 = channelId(emoji[12]);
  const isFavoriteEmoji = channelId(emoji[13]).useIsFavoriteEmoji(stateFromStores, stateFromStores1);
  let obj4 = channelId(emoji[13]);
  const items3 = [emojiURL];
  const stateFromStores2 = channelId(emoji[12]).useStateFromStores(items3, () => emojiURL.useReducedMotion);
  const AnimateEmoji = channelId(emoji[10]).AnimateEmoji;
  emojiURL = undefined;
  if (null != emoji.id) {
    const obj6 = { id: null, animated: null, size: 96 };
    ({ id: obj7.id, animated } = emoji);
    if (animated == null) {
      animated = false;
    }
    if (animated) {
      animated = !stateFromStores2;
    }
    if (animated) {
      animated = tmp10;
    }
    obj6.animated = animated;
    emojiURL = tmp5(tmp4[14]).getEmojiURL(obj6);
    const tmp5Result = tmp5(tmp4[14]);
  }
  callback = stateFromStores1.useCallback(() => {
    messageId(emoji[15]).hideActionSheet();
  }, []);
  const items4 = [tmp];
  callback1 = stateFromStores1.useCallback((arg0) => {
    const obj = {};
    const merged = Object.assign(starIcon.starIcon);
    if (arg0) {
      const merged1 = Object.assign(tmp.starIconSelected);
      let style = obj;
    } else {
      const merged2 = Object.assign(tmp.starIconUnselected);
      style = obj;
    }
    if (arg0) {
      let StarOutlineIcon = tmp9(10515).StarIcon;
    } else {
      StarOutlineIcon = tmp9(10517).StarOutlineIcon;
    }
    return options(StarOutlineIcon, { style });
  }, items4);
  const items5 = [callback, stateFromStores1, isFavoriteEmoji, callback1];
  const items6 = [emoji.id, callback];
  const callback2 = stateFromStores1.useCallback(() => {
    callback();
    if (null != stateFromStores1) {
      function content() {
        const obj = { style: { marginLeft: 8, marginTop: 2 }, variant: "text-md/bold", children: null };
        const intl = channelId(emoji[19]).intl;
        const string = intl.string;
        const t = channelId(emoji[19]).t;
        if (isFavoriteEmoji) {
          let stringResult = string(t.in1rga);
        } else {
          stringResult = string(t.mE2e8A);
        }
        obj.children = stringResult;
        return closure_2_9(channelId(emoji[18]).Text, obj);
      }
      const obj5 = EmojiActionCreators;
      if (isFavoriteEmoji) {
        obj5.unfavoriteEmoji(tmp2);
        const obj2 = {
          key: "EMOJI_UNFAVORITED",
          icon() {
                return callback1(false);
              },
          content
        };
        ToastActionCreatorsDefault.open(obj2);
      } else {
        obj5.favoriteEmoji(tmp2);
        const obj4 = {
          key: "EMOJI_FAVORITED",
          icon() {
                return callback1(true);
              },
          content
        };
        ToastActionCreatorsDefault.open(obj4);
      }
    }
  }, items5);
  const items7 = [emojiURL, callback];
  const callback3 = stateFromStores1.useCallback(() => {
    if (null != emoji.id) {
      ClipboardUtils.copy(tmp.id);
      const result = ToastUtils.presentCopiedToClipboard();
      callback();
    }
  }, items6);
  const items8 = [channelId, messageId, emoji, callback];
  const callback4 = stateFromStores1.useCallback(() => {
    if (null != emojiURL) {
      ClipboardUtils.copy(tmp);
      const result = ToastUtils.presentCopiedToClipboard();
      callback();
    }
  }, items7);
  let str = emoji.name;
  const callback5 = stateFromStores1.useCallback(() => {
    ReactionActionCreatorsAll.removeEmojiReactions(channelId, messageId, emoji);
    callback();
  }, items8);
  if (str == null) {
    str = "";
  }
  const obj8 = { style: tmp.header, children: null };
  const obj9 = { style: tmp.reactionPill, children: null };
  const items9 = [closure_9(messageId(emoji[25]), { src: emojiURL, name: str, textEmojiStyle: tmp.emojiText, fastImageStyle: tmp.emoji }), closure_9(channelId(emoji[18]).Text, { variant: "text-lg/bold", color: "text-default", style: tmp.reactionText, children: reaction.burst_count > 0 ? reaction.burst_count : reaction.count })];
  obj9.children = items9;
  const items10 = [closure_10(isFavoriteEmoji, obj9), ];
  let combined = str;
  if (null != emoji.id) {
    const _HermesInternal = HermesInternal;
    combined = ":" + str + ":";
  }
  items10[1] = closure_9(channelId(emoji[18]).Text, { variant: "text-lg/semibold", color: "text-default", children: combined });
  obj8.children = items10;
  const items11 = [closure_10(isFavoriteEmoji, obj8), ];
  let tmp24 = tmp2;
  if (null != emoji.id) {
    tmp24 = null != stateFromStores1;
  }
  if (!tmp24) {
    const items12 = [tmp24, , , ];
    let tmp21Result = tidaWebformEnabled;
    if (tidaWebformEnabled) {
      tmp21Result = tmp2;
    }
    if (tmp21Result) {
      const obj12 = { label: null, onPress: null };
      const intl2 = tmp3(tmp4[19]).intl;
      obj12.label = intl2.string(tmp3(tmp4[19]).t.Ap2oVy);
      obj12.onPress = callback3;
      tmp21Result = tmp21(tmp3(tmp4[26]).TableRow, obj12);
    }
    items12[1] = tmp21Result;
    if (tidaWebformEnabled) {
      tidaWebformEnabled = obj.useExperiment({ location: "ReactionEmojiOptionsActionSheet" }, { autoTrackExposure: false }).tidaWebformEnabled;
    }
    if (tidaWebformEnabled) {
      tidaWebformEnabled = tmp2;
    }
    if (tidaWebformEnabled) {
      tidaWebformEnabled = null != emojiURL;
    }
    if (tidaWebformEnabled) {
      const obj13 = { label: null, onPress: null };
      const intl3 = tmp3(tmp4[19]).intl;
      obj13.label = intl3.string(tmp3(tmp4[19]).t.cIoudn);
      obj13.onPress = callback4;
      tidaWebformEnabled = tmp21(tmp3(tmp4[26]).TableRow, obj13);
    }
    items12[2] = tidaWebformEnabled;
    if (canRemoveReactions) {
      const obj14 = { label: null, onPress: null };
      const obj15 = { variant: "text-md/semibold", color: "text-feedback-critical", children: null };
      const intl4 = tmp3(tmp4[19]).intl;
      obj15.children = intl4.string(tmp3(tmp4[19]).t["zx/e4P"]);
      obj14.label = tmp21(tmp3(tmp4[18]).Text, obj15);
      obj14.onPress = callback5;
      canRemoveReactions = tmp21(tmp3(tmp4[26]).TableRow, obj14);
    }
    const obj16 = { children: null };
    const obj17 = { hasIcons: false, children: null };
    items12[3] = canRemoveReactions;
    obj17.children = items12;
    items11[1] = tmp19(tmp3(tmp4[27]).TableRowGroup, obj17);
    obj16.children = items11;
    return tmp19(tmp3(tmp4[28]).ActionSheet, obj16);
  } else {
    let intl = tmp3(tmp4[19]).intl;
    let string = intl.string;
    let t = tmp3(tmp4[19]).t;
    if (isFavoriteEmoji) {
      let stringResult = string(t.Ay49KA);
    } else {
      stringResult = string(t.nNsr67);
    }
    t = { label: stringResult, onPress: callback2 };
    tmp21(tmp3(tmp4[26]).TableRow, t);
  }
});

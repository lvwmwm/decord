// Module ID: 9589
// Function ID: 9590
// Name: ReactionEmojiOptionsActionSheet
// Dependencies: [19, 17, 5081, 5987, 4939, 21, 5092, 587, 558, 576, 2041, 6884, 504, 9430, 1415, 5056, 9546, 4809, 1126, 9550, 9552, 6885, 4808, 7899, 6819, 5088, 6179, 6264, 6898, 2]

// Module 9589 (ReactionEmojiOptionsActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl5 from "intl" /* 1126 */;
import ToastUtils from "ToastUtils" /* 4808 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4809 */;
import ClipboardUtils from "ClipboardUtils" /* 6885 */;
import ReactionActionCreatorsAll from "ReactionActionCreators" /* 7899 */;
import EmojiActionCreators from "EmojiActionCreators" /* 9546 */;
import StarOutlineIcon from "StarOutlineIcon" /* 9550 */;
import StarIcon from "StarIcon" /* 9552 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5081 */;
import EmojiStore from "EmojiStore" /* 5987 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4939 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { header: obj2, reactionPill: obj3, emoji: { width: 50, height: 50 }, emojiText: { fontSize: 24, lineHeight: 50, textAlign: "center" }, reactionText: { fontSize: 24, lineHeight: 50 } };
obj2 = { alignItems: "center", paddingTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.MESSAGE_HIGHLIGHT_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.xl, borderWidth: 4, borderColor: nativeDefault.colors.BORDER_STRONG, paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
let closure_11 = createStyles(obj);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ReactionEmojiOptionsActionSheet(channelId) {
  let canRemoveReactions;
  let guildId;
  let reaction;
  let stateFromStores1;
  let tmp12;
  let tmp14;
  let tmp15;
  let tmp18;
  let tmp19;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  const tmp = channelId;
  let obj = channelId(stateFromStores1[9]);
  const cResult = obj.c(70);
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  ({ reaction, canRemoveReactions } = channelId);
  closure_11();
  const emoji = reaction.emoji;
  const DeveloperMode = channelId(stateFromStores1[10]).DeveloperMode;
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
  const obj4 = messageId(stateFromStores1[11]);
  const tidaWebformEnabled = obj4.useExperiment(tmp6, tmp7).tidaWebformEnabled;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SelectedGuildStore];
    const fn = function f() {
      return guildId.getGuildId();
    };
    cResult[2] = items;
    cResult[3] = fn;
    tmp9 = fn;
    tmp8 = items;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult = tmp(stateFromStores1[12]);
  const stateFromStores = tmpResult.useStateFromStores(tmp8, tmp9);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [EmojiStore];
    cResult[4] = items1;
    tmp12 = items1;
  } else {
    tmp12 = cResult[4];
  }
  if (cResult[5] !== emoji.id) {
    class O {
      constructor() {
        let customEmojiById = null;
        if (null != emoji.id) {
          customEmojiById = EmojiStore.getCustomEmojiById(tmp.id);
        }
        return customEmojiById;
      }
    }
    const items2 = [emoji.id];
    cResult[5] = emoji.id;
    cResult[6] = O;
    cResult[7] = items2;
    tmp15 = items2;
    tmp14 = O;
  } else {
    class O {
      constructor() {
        let customEmojiById = null;
        if (null != emoji.id) {
          customEmojiById = EmojiStore.getCustomEmojiById(tmp.id);
        }
        return customEmojiById;
      }
    }
    tmp15 = cResult[7];
  }
  const tmpResult4 = tmp(stateFromStores1[12]);
  stateFromStores1 = tmpResult4.useStateFromStores(tmp12, tmp14, tmp15);
  const tmpResult5 = tmp(stateFromStores1[13]);
  const isFavoriteEmoji = tmpResult5.useIsFavoriteEmoji(stateFromStores, stateFromStores1);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class O {
      constructor() {
        let customEmojiById = null;
        if (null != emoji.id) {
          customEmojiById = EmojiStore.getCustomEmojiById(tmp.id);
        }
        return customEmojiById;
      }
    }
    const items3 = [AccessibilityStore];
    class D {
      constructor() {
        return AccessibilityStore.useReducedMotion;
      }
    }
    cResult[8] = items3;
    cResult[9] = D;
    tmp19 = D;
    tmp18 = items3;
  } else {
    class O {
      constructor() {
        let customEmojiById = null;
        if (null != emoji.id) {
          customEmojiById = EmojiStore.getCustomEmojiById(tmp.id);
        }
        return customEmojiById;
      }
    }
    tmp19 = cResult[9];
  }
  const tmpResult6 = tmp(stateFromStores1[12]);
  const stateFromStores2 = tmpResult6.useStateFromStores(tmp18, tmp19);
  const AnimateEmoji = tmp(tmp2[10]).AnimateEmoji;
  const tmp21 = !stateFromStores2 && AnimateEmoji.useSetting();
  if (cResult[10] === emoji.animated) {
    class O {
      constructor() {
        let customEmojiById = null;
        if (null != emoji.id) {
          customEmojiById = EmojiStore.getCustomEmojiById(tmp.id);
        }
        return customEmojiById;
      }
    }
  }
  let emojiURL;
  if (null != emoji.id) {
    class O {
      constructor() {
        let customEmojiById = null;
        if (null != emoji.id) {
          customEmojiById = EmojiStore.getCustomEmojiById(tmp.id);
        }
        return customEmojiById;
      }
    }
    const obj5 = { id: emoji.id, animated: tmp24, size: 96 };
    class D {
      constructor() {
        return AccessibilityStore.useReducedMotion;
      }
    }
    const getEmojiURL = tmp23.getEmojiURL;
    if (tmp24 == null) {
      class O {
        constructor() {
          let customEmojiById = null;
          if (null != emoji.id) {
            customEmojiById = EmojiStore.getCustomEmojiById(tmp.id);
          }
          return customEmojiById;
        }
      }
    }
    if (tmp24) {
      class O {
        constructor() {
          let customEmojiById = null;
          if (null != emoji.id) {
            customEmojiById = EmojiStore.getCustomEmojiById(tmp.id);
          }
          return customEmojiById;
        }
      }
    }
    emojiURL = getEmojiURL(obj5);
  }
  cResult[10] = emoji.animated;
  cResult[11] = emoji.id;
  cResult[12] = tmp21;
  cResult[13] = emojiURL;
}) : (function ReactionEmojiOptionsActionSheet(channelId) {
  let Text2;
  let animated;
  let canRemoveReactions;
  let guildId;
  let intl2;
  let intl3;
  let intl4;
  let items8;
  let items9;
  let obj16;
  let reaction;
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  ({ reaction, canRemoveReactions } = channelId);
  let stateFromStores1;
  let callback;
  const tmp = closure_11();
  const emoji = reaction.emoji;
  const DeveloperMode = channelId(stateFromStores1[10]).DeveloperMode;
  let setting = DeveloperMode.useSetting();
  const tmp6 = messageId;
  let obj = messageId(stateFromStores1[11]);
  const tidaWebformEnabled = obj.useExperiment({ location: "ReactionEmojiOptionsActionSheet" }, { autoTrackExposure: false }).tidaWebformEnabled;
  let obj2 = channelId(stateFromStores1[12]);
  const items = [SelectedGuildStore];
  const stateFromStores = obj2.useStateFromStores(items, () => guildId.getGuildId());
  let obj3 = channelId(stateFromStores1[12]);
  const items1 = [EmojiStore];
  const items2 = [emoji.id];
  stateFromStores1 = obj3.useStateFromStores(items1, () => {
    let customEmojiById = null;
    if (null != emoji.id) {
      customEmojiById = EmojiStore.getCustomEmojiById(tmp.id);
    }
    return customEmojiById;
  }, items2);
  const obj4 = channelId(stateFromStores1[13]);
  const isFavoriteEmoji = obj4.useIsFavoriteEmoji(stateFromStores, stateFromStores1);
  const items3 = [callback];
  const obj5 = channelId(stateFromStores1[12]);
  const stateFromStores2 = obj5.useStateFromStores(items3, () => callback.useReducedMotion);
  const AnimateEmoji = channelId(stateFromStores1[10]).AnimateEmoji;
  let emojiURL;
  if (null != emoji.id) {
    const obj7 = { id: null, animated, size: 96 };
    ({ id: obj6.id, animated } = emoji);
    const getEmojiURL = tmp6(tmp4[14]).getEmojiURL;
    tmp6(stateFromStores1[14]);
    if (animated == null) {
      animated = false;
    }
    if (animated) {
      animated = !stateFromStores2;
    }
    if (animated) {
      animated = tmp11;
    }
    emojiURL = getEmojiURL(obj7);
  }
  const tmp14 = reaction.burst_count > 0 ? reaction.burst_count : reaction.count;
  callback = isFavoriteEmoji.useCallback(() => {
    const obj = messageId(stateFromStores1[15]);
    obj.hideActionSheet();
  }, []);
  const items4 = [callback, stateFromStores1, isFavoriteEmoji];
  const items5 = [emoji.id, callback];
  const callback1 = isFavoriteEmoji.useCallback(() => {
    let intl;
    let intl2;
    callback();
    if (null != stateFromStores1) {
      const obj3 = EmojiActionCreators;
      if (isFavoriteEmoji) {
        obj3.unfavoriteEmoji(stateFromStores1);
        const obj2 = { text: intl2.string(intl5.t.in1rga), icon: StarOutlineIcon.StarOutlineIcon };
        const open2 = ToastActionCreatorsDefault.open;
        ToastActionCreatorsDefault;
        intl2 = intl5.intl;
        open2("EMOJI_UNFAVORITED", obj2);
      } else {
        obj3.favoriteEmoji(stateFromStores1);
        const obj = { text: intl.string(intl5.t.mE2e8A), icon: StarIcon.StarIcon, iconColor: nativeDefault.colors.ICON_FEEDBACK_WARNING };
        const open = ToastActionCreatorsDefault.open;
        ToastActionCreatorsDefault;
        intl = intl5.intl;
        open("EMOJI_FAVORITED", obj);
      }
    }
  }, items4);
  const items6 = [emojiURL, callback];
  const callback2 = isFavoriteEmoji.useCallback(() => {
    if (null != emoji.id) {
      const obj = ClipboardUtils;
      obj.copy(tmp.id);
      const obj2 = ToastUtils;
      const result = obj2.presentCopiedToClipboard();
      callback();
    }
  }, items5);
  const items7 = [channelId, messageId, emoji, callback];
  const callback3 = isFavoriteEmoji.useCallback(() => {
    if (null != emojiURL) {
      const obj = ClipboardUtils;
      obj.copy(tmp);
      const obj2 = ToastUtils;
      const result = obj2.presentCopiedToClipboard();
      callback();
    }
  }, items6);
  let str = emoji.name;
  const callback4 = isFavoriteEmoji.useCallback(() => {
    const obj = ReactionActionCreatorsAll;
    obj.removeEmojiReactions(channelId, messageId, emoji);
    callback();
  }, items7);
  if (str == null) {
    str = "";
  }
  const obj8 = { style: tmp.header, children: items9 };
  const obj9 = { style: tmp.reactionPill, children: items8 };
  const ActionSheet = tmp3(tmp4[28]).ActionSheet;
  items8 = [, ];
  const obj10 = { src: emojiURL, name: str, textEmojiStyle: tmp.emojiText, fastImageStyle: tmp.emoji };
  items8[0] = closure_9(tmp6(stateFromStores1[24]), obj10);
  const obj11 = { variant: "text-lg/bold", color: "text-default", style: tmp.reactionText, children: tmp14 };
  items8[1] = closure_9(channelId(stateFromStores1[25]).Text, obj11);
  items9 = [closure_10(emojiURL, obj9), ];
  let combined = str;
  const Text = tmp3(tmp4[25]).Text;
  const tmp21 = emojiURL;
  if (null != emoji.id) {
    const _HermesInternal = HermesInternal;
    combined = ":" + str + ":";
  }
  items9[1] = closure_9(Text, { variant: "text-lg/semibold", color: "text-default", children: combined });
  const items10 = [tmp20(tmp21, obj8), ];
  let tmp22Result = tmp2;
  const TableRowGroup = tmp3(tmp4[27]).TableRowGroup;
  if (null != emoji.id) {
    tmp22Result = null != stateFromStores1;
  }
  if (tmp22Result) {
    let stringResult;
    const TableRow = tmp3(tmp4[26]).TableRow;
    let intl = tmp3(tmp4[18]).intl;
    const string = intl.string;
    const t = tmp3(tmp4[18]).t;
    if (isFavoriteEmoji) {
      stringResult = string(t.Ay49KA);
    } else {
      stringResult = string(t.nNsr67);
    }
    const obj12 = { label: stringResult, onPress: callback1 };
    tmp22Result = tmp22(TableRow, obj12);
  }
  const items11 = [tmp22Result, , , ];
  let tmp22Result2 = setting && tmp2;
  if (tmp22Result2) {
    const obj13 = { label: intl2.string(channelId(stateFromStores1[18]).t.Ap2oVy), onPress: callback2 };
    const TableRow2 = tmp3(tmp4[26]).TableRow;
    intl2 = tmp3(tmp4[18]).intl;
    tmp22Result2 = tmp22(TableRow2, obj13);
  }
  items11[1] = tmp22Result2;
  if (setting) {
    setting = tidaWebformEnabled;
  }
  if (setting) {
    setting = tmp2;
  }
  if (setting) {
    setting = null != emojiURL;
  }
  if (setting) {
    const obj14 = { label: intl3.string(channelId(stateFromStores1[18]).t.cIoudn), onPress: callback3 };
    const TableRow3 = tmp3(tmp4[26]).TableRow;
    intl3 = tmp3(tmp4[18]).intl;
    setting = tmp22(TableRow3, obj14);
  }
  items11[2] = setting;
  if (canRemoveReactions) {
    const obj15 = { label: closure_9(Text2, obj16), onPress: callback4 };
    const TableRow4 = tmp3(tmp4[26]).TableRow;
    obj16 = { variant: "text-md/semibold", color: "text-feedback-critical", children: intl4.string(channelId(stateFromStores1[18]).t["zx/e4P"]) };
    Text2 = tmp3(tmp4[25]).Text;
    intl4 = tmp3(tmp4[18]).intl;
    canRemoveReactions = tmp22(TableRow4, obj15);
  }
  const obj27 = { children: items10 };
  items11[3] = canRemoveReactions;
  items10[1] = closure_10(TableRowGroup, { hasIcons: false, children: items11 });
  return closure_10(ActionSheet, obj27);
});
let result = size.fileFinishedImporting("modules/reactions/native/ReactionEmojiOptionsActionSheet.tsx");

export default tmp4;

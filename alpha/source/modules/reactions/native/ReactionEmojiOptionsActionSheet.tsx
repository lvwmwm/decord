// Module ID: 9901
// Function ID: 9902
// Name: ReactionEmojiOptionsActionSheet
// Dependencies: [19, 17, 4946, 6673, 6832, 4971, 1087, 21, 4945, 587, 558, 576, 9860, 4776, 7230, 504, 9744, 1417, 5171, 9859, 5625, 1128, 9863, 9865, 7231, 5624, 8230, 7175, 5195, 4096, 2068, 6935, 6851, 7244, 2]

// Module 9901 (ReactionEmojiOptionsActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1087 */;
import intl7 from "intl" /* 1128 */;
import ToastUtils from "ToastUtils" /* 5624 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5625 */;
import ExpressionSourceRecord from "ExpressionSourceRecord" /* 6832 */;
import ClipboardUtils from "ClipboardUtils" /* 7231 */;
import ReactionActionCreatorsAll from "ReactionActionCreators" /* 8230 */;
import EmojiActionCreators from "EmojiActionCreators" /* 9859 */;
import StarOutlineIcon from "StarOutlineIcon" /* 9863 */;
import StarIcon from "StarIcon" /* 9865 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4946 */;
import EmojiStore from "EmojiStore" /* 6673 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4971 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4945 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp3;

let closure_12;
let obj2;
let obj3;
let obj4;
let unpackModuleId;
const View = react_native.View;
const EmojiSourceDataTypes = ExpressionSourceRecord.EmojiSourceDataTypes;
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { header: obj2, reactionPill: obj3, emoji: { width: 50, height: 50 }, emojiText: { fontSize: 24, lineHeight: 50, textAlign: "center" }, reactionText: { fontSize: 24, lineHeight: 50 }, packDescription: obj4 };
obj2 = { alignItems: "center", paddingTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.MESSAGE_HIGHLIGHT_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.xl, borderWidth: 4, borderColor: nativeDefault.colors.BORDER_STRONG, paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
obj4 = { textAlign: "center", paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_24 };
let closure_13 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ReactionEmojiOptionsActionSheet(channelId) {
  let canRemoveReactions;
  let guildId;
  let isEmojiPack;
  let reaction;
  let stateFromStores1;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp18;
  let tmp20;
  let tmp21;
  let tmp24;
  let tmp25;
  const tmp = channelId;
  let obj = channelId(stateFromStores1[11]);
  const cResult = obj.c(101);
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  ({ reaction, canRemoveReactions, isEmojiPack } = channelId);
  let tmp4 = undefined !== isEmojiPack && isEmojiPack;
  closure_13();
  const emoji = reaction.emoji;
  let tmp6;
  if (!tmp4) {
    const id = emoji.id;
    tmp6 = id;
  }
  if (cResult[0] !== tmp6) {
    let obj2 = { emojiId: tmp6, skipKnownGuildEmojiFetch: true };
    cResult[0] = tmp6;
    cResult[1] = obj2;
  }
  tmp(stateFromStores1[12]);
  if (!tmp4) {
    tmp4 = tmp9 === EmojiSourceDataTypes.PACK;
  }
  const DeveloperMode = tmp(tmp2[13]).DeveloperMode;
  const setting = DeveloperMode.useSetting();
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let obj3 = { location: "ReactionEmojiOptionsActionSheet" };
    const obj4 = { autoTrackExposure: false };
    cResult[2] = obj3;
    cResult[3] = obj4;
    tmp13 = obj4;
    tmp12 = obj3;
  } else {
    tmp12 = cResult[2];
    tmp13 = cResult[3];
  }
  const obj5 = messageId(stateFromStores1[14]);
  const tidaWebformEnabled = obj5.useExperiment(tmp12, tmp13).tidaWebformEnabled;
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SelectedGuildStore];
    class F {
      constructor() {
        return closure_1_9.getGuildId();
      }
    }
    cResult[4] = items;
    cResult[5] = F;
    tmp15 = F;
    tmp14 = items;
  } else {
    tmp14 = cResult[4];
    tmp15 = cResult[5];
  }
  const tmpResult5 = tmp(stateFromStores1[15]);
  const stateFromStores = tmpResult5.useStateFromStores(tmp14, tmp15);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [EmojiStore];
    class F {
      constructor() {
        return closure_1_9.getGuildId();
      }
    }
    cResult[6] = items1;
    tmp18 = items1;
  } else {
    tmp18 = cResult[6];
  }
  if (cResult[7] !== emoji.id) {
    class K {
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
    class F {
      constructor() {
        return closure_1_9.getGuildId();
      }
    }
    cResult[7] = emoji.id;
    cResult[8] = items2;
    cResult[9] = K;
    tmp21 = K;
    tmp20 = items2;
  } else {
    class K {
      constructor() {
        customEmojiById = null;
        if (null != emoji.id) {
          tmp3 = closure_7;
          customEmojiById = closure_7.getCustomEmojiById(tmp.id);
        }
        return customEmojiById;
      }
    }
    tmp21 = cResult[9];
  }
  const tmpResult6 = tmp(stateFromStores1[15]);
  stateFromStores1 = tmpResult6.useStateFromStores(tmp18, tmp21, tmp20);
  const tmpResult7 = tmp(stateFromStores1[16]);
  const isFavoriteEmoji = tmpResult7.useIsFavoriteEmoji(stateFromStores, stateFromStores1);
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    class K {
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
    class U {
      constructor() {
        return closure_6.useReducedMotion;
      }
    }
    cResult[10] = items3;
    cResult[11] = U;
    tmp25 = U;
    tmp24 = items3;
  } else {
    class K {
      constructor() {
        customEmojiById = null;
        if (null != emoji.id) {
          tmp3 = closure_7;
          customEmojiById = closure_7.getCustomEmojiById(tmp.id);
        }
        return customEmojiById;
      }
    }
    tmp25 = cResult[11];
  }
  const tmpResult8 = tmp(stateFromStores1[15]);
  const stateFromStores2 = tmpResult8.useStateFromStores(tmp24, tmp25);
  const AnimateEmoji = tmp(tmp2[13]).AnimateEmoji;
  const tmp27 = !stateFromStores2 && AnimateEmoji.useSetting();
  if (cResult[12] === emoji.animated) {
    class K {
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
    class K {
      constructor() {
        customEmojiById = null;
        if (null != emoji.id) {
          tmp3 = closure_7;
          customEmojiById = closure_7.getCustomEmojiById(tmp.id);
        }
        return customEmojiById;
      }
    }
    const obj6 = { id: emoji.id, animated: tmp30, size: 96 };
    class U {
      constructor() {
        return closure_6.useReducedMotion;
      }
    }
    const getEmojiURL = tmp29.getEmojiURL;
    if (tmp30 == null) {
      class K {
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
    if (tmp30) {
      class K {
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
    emojiURL = getEmojiURL(obj6);
  }
  cResult[12] = emoji.animated;
  cResult[13] = emoji.id;
  cResult[14] = tmp27;
  cResult[15] = emojiURL;
}) : (function ReactionEmojiOptionsActionSheet(channelId) {
  let TableRow5;
  let Text2;
  let Text4;
  let animated;
  let canRemoveReactions;
  let format;
  let guildId;
  let intl2;
  let intl3;
  let intl4;
  let intl6;
  let isEmojiPack;
  let items8;
  let obj11;
  let obj13;
  let obj14;
  let obj19;
  let prop;
  let reaction;
  let tmp10Result2;
  let tmp33;
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  ({ reaction, canRemoveReactions, isEmojiPack } = channelId);
  if (isEmojiPack === undefined) {
    isEmojiPack = false;
  }
  let stateFromStores1;
  let isFavoriteEmoji;
  let emojiURL;
  let callback;
  const tmp = closure_13();
  const emoji = reaction.emoji;
  channelId(stateFromStores1[12]);
  if (!isEmojiPack) {
    const id = emoji.id;
  }
  if (!isEmojiPack) {
    isEmojiPack = tmp7 === EmojiSourceDataTypes.PACK;
  }
  const DeveloperMode = tmp3(tmp4[13]).DeveloperMode;
  let setting = DeveloperMode.useSetting();
  let obj = messageId(tmp4[14]);
  const tidaWebformEnabled = obj.useExperiment({ location: "ReactionEmojiOptionsActionSheet" }, { autoTrackExposure: false }).tidaWebformEnabled;
  const items = [SelectedGuildStore];
  const tmp3Result = channelId(stateFromStores1[15]);
  const stateFromStores = tmp3Result.useStateFromStores(items, () => guildId.getGuildId());
  const items1 = [EmojiStore];
  const items2 = [emoji.id];
  const tmp3Result4 = channelId(stateFromStores1[15]);
  stateFromStores1 = tmp3Result4.useStateFromStores(items1, () => {
    let customEmojiById = null;
    if (null != emoji.id) {
      customEmojiById = EmojiStore.getCustomEmojiById(tmp.id);
    }
    return customEmojiById;
  }, items2);
  const tmp3Result5 = channelId(stateFromStores1[16]);
  isFavoriteEmoji = tmp3Result5.useIsFavoriteEmoji(stateFromStores, stateFromStores1);
  const items3 = [callback];
  const tmp3Result6 = channelId(stateFromStores1[15]);
  const stateFromStores2 = tmp3Result6.useStateFromStores(items3, () => callback.useReducedMotion);
  const AnimateEmoji = tmp3(tmp4[13]).AnimateEmoji;
  emojiURL = undefined;
  if (null != emoji.id) {
    let obj2 = { id: null, animated, size: 96 };
    ({ id: obj6.id, animated } = emoji);
    const getEmojiURL = tmp10(tmp4[17]).getEmojiURL;
    messageId(stateFromStores1[17]);
    if (animated == null) {
      animated = false;
    }
    if (animated) {
      animated = !stateFromStores2;
    }
    if (animated) {
      animated = tmp15;
    }
    emojiURL = getEmojiURL(obj2);
  }
  const tmp18 = reaction.burst_count > 0 ? reaction.burst_count : reaction.count;
  callback = isFavoriteEmoji.useCallback(() => {
    const obj = messageId(stateFromStores1[18]);
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
        const obj2 = { text: intl2.string(intl7.t.in1rga), icon: StarOutlineIcon.StarOutlineIcon };
        const open2 = ToastActionCreatorsDefault.open;
        ToastActionCreatorsDefault;
        intl2 = intl7.intl;
        open2("EMOJI_UNFAVORITED", obj2);
      } else {
        obj3.favoriteEmoji(stateFromStores1);
        const obj = { text: intl.string(intl7.t.mE2e8A), icon: StarIcon.StarIcon, iconColor: nativeDefault.colors.ICON_FEEDBACK_WARNING };
        const open = ToastActionCreatorsDefault.open;
        ToastActionCreatorsDefault;
        intl = intl7.intl;
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
  const callback4 = isFavoriteEmoji.useCallback(() => {
    const obj = ReactionActionCreatorsAll;
    obj.removeEmojiReactions(channelId, messageId, emoji);
    callback();
  }, items7);
  let str = emoji.name;
  if (str == null) {
    str = "";
  }
  let obj3 = { children: null };
  const obj4 = { style: tmp.header, children: null };
  const obj5 = { style: tmp.reactionPill, children: items8 };
  const ActionSheet = tmp3(tmp4[33]).ActionSheet;
  items8 = [, ];
  const obj7 = { src: emojiURL, name: str, textEmojiStyle: tmp.emojiText, fastImageStyle: tmp.emoji };
  items8[0] = closure_11(messageId(stateFromStores1[27]), obj7);
  const obj8 = { variant: "text-lg/bold", color: "text-default", style: tmp.reactionText, children: tmp18 };
  items8[1] = closure_11(channelId(stateFromStores1[28]).Text, obj8);
  const items9 = [closure_12(emojiURL, obj5), ];
  const Text = tmp3(tmp4[28]).Text;
  const obj9 = { variant: "text-lg/semibold", color: "text-default", children: null };
  if (isEmojiPack) {
    let combined = str;
    if (null != emoji.id) {
      const _HermesInternal2 = HermesInternal;
      combined = ":" + str + ":";
    }
    obj9.children = combined;
    items9[1] = closure_11(Text, obj9);
    obj4.children = items9;
    const items10 = [tmp24(tmp25, obj4), , ];
    const obj10 = { variant: "text-md/normal", color: "text-subtle", style: tmp.packDescription, children: format(prop, obj11) };
    const Text3 = tmp3(tmp4[28]).Text;
    const intl5 = tmp3(tmp4[21]).intl;
    format = intl5.format;
    obj11 = { helpdeskArticle: tmp10Result2.getArticleURL(HelpdeskArticles.NITRO_EMOJI_PACKS) };
    prop = tmp10(tmp4[29])["/jdd/7"];
    tmp10Result2 = messageId(stateFromStores1[30]);
    items10[1] = closure_11(Text3, obj10);
    if (canRemoveReactions) {
      const obj12 = { hasIcons: false, children: closure_11(TableRow5, obj13) };
      const TableRowGroup2 = tmp3(tmp4[31]).TableRowGroup;
      obj13 = { label: closure_11(Text4, obj14), onPress: callback4 };
      TableRow5 = tmp3(tmp4[32]).TableRow;
      obj14 = { variant: "text-md/semibold", color: "text-feedback-critical", children: intl6.string(channelId(stateFromStores1[21]).t["zx/e4P"]) };
      Text4 = tmp3(tmp4[28]).Text;
      intl6 = tmp3(tmp4[21]).intl;
      canRemoveReactions = tmp26(TableRowGroup2, obj12);
    }
    items10[2] = canRemoveReactions;
    obj3.children = items10;
    tmp33 = obj3;
  } else {
    let combined1 = str;
    if (null != emoji.id) {
      const _HermesInternal = HermesInternal;
      combined1 = ":" + str + ":";
    }
    obj9.children = combined1;
    items9[1] = closure_11(Text, obj9);
    obj4.children = items9;
    const items11 = [tmp24(tmp25, obj4), ];
    let tmp26Result = tmp2;
    const TableRowGroup = tmp3(tmp4[31]).TableRowGroup;
    if (null != emoji.id) {
      tmp26Result = null != stateFromStores1;
    }
    if (tmp26Result) {
      let stringResult;
      const TableRow = tmp3(tmp4[32]).TableRow;
      let intl = tmp3(tmp4[21]).intl;
      const string = intl.string;
      const t = tmp3(tmp4[21]).t;
      if (isFavoriteEmoji) {
        stringResult = string(t.Ay49KA);
      } else {
        stringResult = string(t.nNsr67);
      }
      const obj15 = { label: stringResult, onPress: callback1 };
      tmp26Result = tmp26(TableRow, obj15);
    }
    const items12 = [tmp26Result, , , ];
    let tmp26Result3 = setting && tmp2;
    if (tmp26Result3) {
      const obj16 = { label: intl2.string(channelId(stateFromStores1[21]).t.Ap2oVy), onPress: callback2 };
      const TableRow2 = tmp3(tmp4[32]).TableRow;
      intl2 = tmp3(tmp4[21]).intl;
      tmp26Result3 = tmp26(TableRow2, obj16);
    }
    items12[1] = tmp26Result3;
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
      const obj17 = { label: intl3.string(channelId(stateFromStores1[21]).t.cIoudn), onPress: callback3 };
      const TableRow3 = tmp3(tmp4[32]).TableRow;
      intl3 = tmp3(tmp4[21]).intl;
      setting = tmp26(TableRow3, obj17);
    }
    items12[2] = setting;
    let tmp26Result4 = canRemoveReactions;
    if (tmp26Result4) {
      const obj18 = { label: closure_11(Text2, obj19), onPress: callback4 };
      const TableRow4 = tmp3(tmp4[32]).TableRow;
      obj19 = { variant: "text-md/semibold", color: "text-feedback-critical", children: intl4.string(channelId(stateFromStores1[21]).t["zx/e4P"]) };
      Text2 = tmp3(tmp4[28]).Text;
      intl4 = tmp3(tmp4[21]).intl;
      tmp26Result4 = tmp26(TableRow4, obj18);
    }
    const obj20 = { hasIcons: false, children: items12 };
    items12[3] = tmp26Result4;
    items11[1] = closure_12(TableRowGroup, obj20);
    obj3.children = items11;
    tmp33 = obj3;
  }
  return closure_12(ActionSheet, tmp33);
});
let result = size.fileFinishedImporting("modules/reactions/native/ReactionEmojiOptionsActionSheet.tsx");

export default tmp4;

// Module ID: 10251
// Function ID: 10252
// Name: ReactionEmojiOptionsActionSheet
// Dependencies: [19, 17, 5171, 6884, 7054, 5203, 1072, 21, 5170, 575, 10211, 4995, 5849, 504, 10098, 1411, 5406, 10210, 5869, 1113, 10214, 10216, 7451, 5868, 8509, 7459, 7396, 5783, 4281, 2185, 7159, 7071, 2]
// Exports: default

// Module 10251 (ReactionEmojiOptionsActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import intl7 from "intl" /* 1113 */;
import ToastUtils from "ToastUtils" /* 5868 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5869 */;
import ExpressionSourceRecord from "ExpressionSourceRecord" /* 7054 */;
import ClipboardUtils from "ClipboardUtils" /* 7451 */;
import ReactionActionCreatorsAll from "ReactionActionCreators" /* 8509 */;
import EmojiActionCreators from "EmojiActionCreators" /* 10210 */;
import StarOutlineIcon from "StarOutlineIcon" /* 10214 */;
import StarIcon from "StarIcon" /* 10216 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5171 */;
import EmojiStore from "EmojiStore" /* 6884 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5203 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

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
let result = size.fileFinishedImporting("modules/reactions/native/ReactionEmojiOptionsActionSheet.tsx");

export default function ReactionEmojiOptionsActionSheet(channelId) {
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
  let obj10;
  let obj12;
  let obj13;
  let obj18;
  let prop;
  let reaction;
  let tmp28Result;
  let tmp35;
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
  channelId(stateFromStores1[10]);
  if (!isEmojiPack) {
    const id = emoji.id;
  }
  if (!isEmojiPack) {
    isEmojiPack = tmp7 === EmojiSourceDataTypes.PACK;
  }
  const DeveloperMode = tmp3(tmp4[11]).DeveloperMode;
  let setting = DeveloperMode.useSetting();
  const tmp3Result = channelId(stateFromStores1[12]);
  const isTidaMediaTakedownRegion = tmp3Result.useIsTidaMediaTakedownRegion();
  const items = [SelectedGuildStore];
  const tmp3Result5 = channelId(stateFromStores1[13]);
  const stateFromStores = tmp3Result5.useStateFromStores(items, () => guildId.getGuildId());
  const items1 = [EmojiStore];
  const items2 = [emoji.id];
  const tmp3Result6 = channelId(stateFromStores1[13]);
  stateFromStores1 = tmp3Result6.useStateFromStores(items1, () => {
    let customEmojiById = null;
    if (null != emoji.id) {
      customEmojiById = EmojiStore.getCustomEmojiById(tmp.id);
    }
    return customEmojiById;
  }, items2);
  const tmp3Result7 = channelId(stateFromStores1[14]);
  isFavoriteEmoji = tmp3Result7.useIsFavoriteEmoji(stateFromStores, stateFromStores1);
  const items3 = [callback];
  const tmp3Result8 = channelId(stateFromStores1[13]);
  const stateFromStores2 = tmp3Result8.useStateFromStores(items3, () => callback.useReducedMotion);
  const AnimateEmoji = tmp3(tmp4[11]).AnimateEmoji;
  emojiURL = undefined;
  if (null != emoji.id) {
    let obj = { id: null, animated, size: 96 };
    ({ id: obj6.id, animated } = emoji);
    const getEmojiURL = messageId(stateFromStores1[15]).getEmojiURL;
    const tmp18 = messageId(stateFromStores1[15]);
    if (animated == null) {
      animated = false;
    }
    if (animated) {
      animated = !stateFromStores2;
    }
    if (animated) {
      animated = tmp15;
    }
    emojiURL = getEmojiURL(obj);
  }
  const tmp19 = reaction.burst_count > 0 ? reaction.burst_count : reaction.count;
  callback = isFavoriteEmoji.useCallback(() => {
    const obj = messageId(stateFromStores1[16]);
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
  let obj2 = { children: null };
  let obj3 = { style: tmp.header, children: null };
  const obj4 = { style: tmp.reactionPill, children: items8 };
  const ActionSheet = tmp3(tmp4[25]).ActionSheet;
  items8 = [, ];
  const obj5 = { src: emojiURL, name: str, textEmojiStyle: tmp.emojiText, fastImageStyle: tmp.emoji };
  items8[0] = closure_11(messageId(stateFromStores1[26]), obj5);
  const obj7 = { variant: "body-lg/semibold", color: "text-default", style: tmp.reactionText, children: tmp19 };
  items8[1] = closure_11(channelId(stateFromStores1[27]).Text, obj7);
  const items9 = [closure_12(emojiURL, obj4), ];
  const Text = tmp3(tmp4[27]).Text;
  const obj8 = { variant: "body-lg/semibold", color: "text-default", children: null };
  if (isEmojiPack) {
    let combined = str;
    if (null != emoji.id) {
      const _HermesInternal2 = HermesInternal;
      combined = ":" + str + ":";
    }
    obj8.children = combined;
    items9[1] = closure_11(Text, obj8);
    obj3.children = items9;
    const items10 = [tmp25(emojiURL, obj3), , ];
    const obj9 = { variant: "body-md/normal", color: "text-subtle", style: tmp.packDescription, children: format(prop, obj10) };
    const Text3 = tmp3(tmp4[27]).Text;
    const intl5 = tmp3(tmp4[19]).intl;
    format = intl5.format;
    obj10 = { helpdeskArticle: tmp28Result.getArticleURL(HelpdeskArticles.NITRO_EMOJI_PACKS) };
    prop = tmp28(tmp4[28])["/jdd/7"];
    tmp28Result = messageId(stateFromStores1[29]);
    items10[1] = closure_11(Text3, obj9);
    if (canRemoveReactions) {
      const obj11 = { hasIcons: false, children: closure_11(TableRow5, obj12) };
      const TableRowGroup2 = tmp3(tmp4[30]).TableRowGroup;
      obj12 = { label: closure_11(Text4, obj13), onPress: callback4 };
      TableRow5 = tmp3(tmp4[31]).TableRow;
      obj13 = { variant: "body-md/semibold", color: "text-feedback-critical", children: intl6.string(channelId(stateFromStores1[19]).t["zx/e4P"]) };
      Text4 = tmp3(tmp4[27]).Text;
      intl6 = tmp3(tmp4[19]).intl;
      canRemoveReactions = tmp27(TableRowGroup2, obj11);
    }
    items10[2] = canRemoveReactions;
    obj2.children = items10;
    tmp35 = obj2;
  } else {
    let combined1 = str;
    if (null != emoji.id) {
      const _HermesInternal = HermesInternal;
      combined1 = ":" + str + ":";
    }
    obj8.children = combined1;
    items9[1] = closure_11(Text, obj8);
    obj3.children = items9;
    const items11 = [tmp25(emojiURL, obj3), ];
    let tmp27Result = tmp2;
    const TableRowGroup = tmp3(tmp4[30]).TableRowGroup;
    if (null != emoji.id) {
      tmp27Result = null != stateFromStores1;
    }
    if (tmp27Result) {
      let stringResult;
      const TableRow = tmp3(tmp4[31]).TableRow;
      let intl = tmp3(tmp4[19]).intl;
      const string = intl.string;
      const t = tmp3(tmp4[19]).t;
      if (isFavoriteEmoji) {
        stringResult = string(t.Ay49KA);
      } else {
        stringResult = string(t.nNsr67);
      }
      const obj14 = { label: stringResult, onPress: callback1 };
      tmp27Result = tmp27(TableRow, obj14);
    }
    const items12 = [tmp27Result, , , ];
    let tmp27Result3 = setting && tmp2;
    if (tmp27Result3) {
      const obj15 = { label: intl2.string(channelId(stateFromStores1[19]).t.Ap2oVy), onPress: callback2 };
      const TableRow2 = tmp3(tmp4[31]).TableRow;
      intl2 = tmp3(tmp4[19]).intl;
      tmp27Result3 = tmp27(TableRow2, obj15);
    }
    items12[1] = tmp27Result3;
    if (setting) {
      setting = isTidaMediaTakedownRegion;
    }
    if (setting) {
      setting = tmp2;
    }
    if (setting) {
      setting = null != emojiURL;
    }
    if (setting) {
      const obj16 = { label: intl3.string(channelId(stateFromStores1[19]).t.cIoudn), onPress: callback3 };
      const TableRow3 = tmp3(tmp4[31]).TableRow;
      intl3 = tmp3(tmp4[19]).intl;
      setting = tmp27(TableRow3, obj16);
    }
    items12[2] = setting;
    let tmp27Result4 = canRemoveReactions;
    if (tmp27Result4) {
      const obj17 = { label: closure_11(Text2, obj18), onPress: callback4 };
      const TableRow4 = tmp3(tmp4[31]).TableRow;
      obj18 = { variant: "body-md/semibold", color: "text-feedback-critical", children: intl4.string(channelId(stateFromStores1[19]).t["zx/e4P"]) };
      Text2 = tmp3(tmp4[27]).Text;
      intl4 = tmp3(tmp4[19]).intl;
      tmp27Result4 = tmp27(TableRow4, obj17);
    }
    const obj19 = { hasIcons: false, children: items12 };
    items12[3] = tmp27Result4;
    items11[1] = closure_12(TableRowGroup, obj19);
    obj2.children = items11;
    tmp35 = obj2;
  }
  return closure_12(ActionSheet, tmp35);
};

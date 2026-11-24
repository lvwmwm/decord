// Module ID: 12096
// Function ID: 12097
// Name: ReactionEmojiOptionsActionSheet
// Dependencies: [19, 17, 4918, 6757, 6927, 4950, 1071, 21, 4917, 575, 9621, 4742, 504, 9400, 1412, 5131, 9620, 5599, 1112, 9624, 9626, 7412, 5598, 8950, 7420, 7362, 5508, 4448, 2187, 6014, 6018, 2]
// Exports: default

// Module 12096 (ReactionEmojiOptionsActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1071 */;
import intl7 from "intl" /* 1112 */;
import ToastUtils from "ToastUtils" /* 5598 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5599 */;
import ExpressionSourceRecord from "ExpressionSourceRecord" /* 6927 */;
import ClipboardUtils from "ClipboardUtils" /* 7412 */;
import ReactionActionCreatorsAll from "ReactionActionCreators" /* 8950 */;
import EmojiActionCreators from "EmojiActionCreators" /* 9620 */;
import StarOutlineIcon from "StarOutlineIcon" /* 9624 */;
import StarIcon from "StarIcon" /* 9626 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4918 */;
import EmojiStore from "EmojiStore" /* 6757 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4950 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4917 */;
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
  let Text;
  let Text4;
  let animated;
  let canRemoveReactions;
  let format;
  let guildId;
  let intl2;
  let intl3;
  let intl4;
  let intl6;
  let items11;
  let items12;
  let items8;
  let items9;
  let obj11;
  let obj12;
  let obj24;
  let obj25;
  let obj9;
  let prop;
  let reaction;
  let tmp30Result;
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  ({ reaction, canRemoveReactions } = channelId);
  let stateFromStores1;
  let callback;
  const tmp = closure_13();
  const emoji = reaction.emoji;
  const id = emoji.id;
  const useEmojiAndSource = channelId(stateFromStores1[10]).useEmojiAndSource;
  const tmp5 = channelId(stateFromStores1[10]);
  const sourceType = useEmojiAndSource({ emojiId: id, skipKnownGuildEmojiFetch: true }).sourceType;
  const PACK = EmojiSourceDataTypes.PACK;
  const DeveloperMode = tmp3(tmp4[11]).DeveloperMode;
  let setting = DeveloperMode.useSetting();
  const items = [SelectedGuildStore];
  const tmp3Result = channelId(stateFromStores1[12]);
  const stateFromStores = tmp3Result.useStateFromStores(items, () => guildId.getGuildId());
  const items1 = [EmojiStore];
  const items2 = [emoji.id];
  const tmp3Result4 = channelId(stateFromStores1[12]);
  stateFromStores1 = tmp3Result4.useStateFromStores(items1, () => {
    let customEmojiById = null;
    if (null != emoji.id) {
      customEmojiById = EmojiStore.getCustomEmojiById(tmp.id);
    }
    return customEmojiById;
  }, items2);
  const tmp3Result5 = channelId(stateFromStores1[13]);
  const isFavoriteEmoji = tmp3Result5.useIsFavoriteEmoji(stateFromStores, stateFromStores1);
  const items3 = [callback];
  const tmp3Result6 = channelId(stateFromStores1[12]);
  const stateFromStores2 = tmp3Result6.useStateFromStores(items3, () => callback.useReducedMotion);
  const AnimateEmoji = tmp3(tmp4[11]).AnimateEmoji;
  let emojiURL;
  if (null != emoji.id) {
    let obj = { id: null, animated, size: 96 };
    ({ id: obj5.id, animated } = emoji);
    const getEmojiURL = messageId(stateFromStores1[14]).getEmojiURL;
    const tmp14 = messageId(stateFromStores1[14]);
    if (animated == null) {
      animated = false;
    }
    if (animated) {
      animated = !stateFromStores2;
    }
    if (animated) {
      animated = tmp11;
    }
    emojiURL = getEmojiURL(obj);
  }
  const tmp15 = reaction.burst_count > 0 ? reaction.burst_count : reaction.count;
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
  const ActionSheet = tmp3(tmp4[24]).ActionSheet;
  if (sourceType === PACK) {
    let obj2 = { style: tmp.header, children: items9 };
    let obj3 = { style: tmp.reactionPill, children: items8 };
    const obj4 = { src: emojiURL, name: str, textEmojiStyle: null, fastImageStyle: null };
    ({ emojiText: obj16.textEmojiStyle, emoji: obj16.fastImageStyle } = tmp);
    items8 = [closure_11(messageId(tmp4[25]), obj4), ];
    const obj6 = { variant: "body-lg/semibold", color: "text-default", style: tmp.reactionText, children: tmp15 };
    items8[1] = closure_11(channelId(stateFromStores1[26]).Text, obj6);
    items9 = [tmp21(emojiURL, obj3), ];
    let combined = str;
    const Text2 = tmp3(tmp4[26]).Text;
    const tmp28 = emojiURL;
    if (null != emoji.id) {
      const _HermesInternal2 = HermesInternal;
      combined = ":" + str + ":";
    }
    const obj7 = { variant: "body-lg/semibold", color: "text-default", children: combined };
    items9[1] = closure_11(Text2, obj7);
    const items10 = [tmp21(tmp28, obj2), , ];
    const obj8 = { variant: "body-md/normal", color: "text-subtle", style: tmp.packDescription, children: format(prop, obj9) };
    const Text3 = tmp3(tmp4[26]).Text;
    const intl5 = tmp3(tmp4[18]).intl;
    format = intl5.format;
    obj9 = { helpdeskArticle: tmp30Result.getArticleURL(HelpdeskArticles.NITRO_EMOJI_PACKS) };
    prop = tmp30(tmp4[27])["/jdd/7"];
    tmp30Result = messageId(stateFromStores1[28]);
    items10[1] = closure_11(Text3, obj8);
    if (canRemoveReactions) {
      const obj10 = { hasIcons: false, children: closure_11(TableRow5, obj11) };
      const TableRowGroup2 = tmp3(tmp4[29]).TableRowGroup;
      obj11 = { label: closure_11(Text4, obj12), onPress: callback4 };
      TableRow5 = tmp3(tmp4[30]).TableRow;
      obj12 = { variant: "body-md/semibold", color: "text-feedback-critical", children: intl6.string(channelId(stateFromStores1[18]).t["zx/e4P"]) };
      Text4 = tmp3(tmp4[26]).Text;
      intl6 = tmp3(tmp4[18]).intl;
      canRemoveReactions = tmp29(TableRowGroup2, obj10);
    }
    const obj13 = { children: items10 };
    items10[2] = canRemoveReactions;
    obj25 = obj13;
  } else {
    const obj14 = { style: tmp.header, children: items12 };
    const obj15 = { style: tmp.reactionPill, children: items11 };
    const obj17 = { src: emojiURL, name: str, textEmojiStyle: null, fastImageStyle: null };
    ({ emojiText: obj28.textEmojiStyle, emoji: obj28.fastImageStyle } = tmp);
    items11 = [closure_11(messageId(tmp4[25]), obj17), ];
    const obj18 = { variant: "body-lg/semibold", color: "text-default", style: tmp.reactionText, children: tmp15 };
    items11[1] = closure_11(channelId(stateFromStores1[26]).Text, obj18);
    items12 = [tmp21(emojiURL, obj15), ];
    let combined1 = str;
    const Text5 = tmp3(tmp4[26]).Text;
    const tmp35 = emojiURL;
    if (null != emoji.id) {
      const _HermesInternal = HermesInternal;
      combined1 = ":" + str + ":";
    }
    const obj19 = { variant: "body-lg/semibold", color: "text-default", children: combined1 };
    items12[1] = closure_11(Text5, obj19);
    const items13 = [tmp21(tmp35, obj14), ];
    let tmp36Result = tmp2;
    const TableRowGroup = tmp3(tmp4[29]).TableRowGroup;
    if (null != emoji.id) {
      tmp36Result = null != stateFromStores1;
    }
    if (tmp36Result) {
      let stringResult;
      const TableRow = tmp3(tmp4[30]).TableRow;
      let intl = tmp3(tmp4[18]).intl;
      const string = intl.string;
      const t = tmp3(tmp4[18]).t;
      if (isFavoriteEmoji) {
        stringResult = string(t.Ay49KA);
      } else {
        stringResult = string(t.nNsr67);
      }
      const obj20 = { label: stringResult, onPress: callback1 };
      tmp36Result = tmp36(TableRow, obj20);
    }
    const items14 = [tmp36Result, , , ];
    let tmp36Result3 = setting && tmp2;
    if (tmp36Result3) {
      const obj21 = { label: intl2.string(channelId(stateFromStores1[18]).t.Ap2oVy), onPress: callback2 };
      const TableRow2 = tmp3(tmp4[30]).TableRow;
      intl2 = tmp3(tmp4[18]).intl;
      tmp36Result3 = tmp36(TableRow2, obj21);
    }
    items14[1] = tmp36Result3;
    if (setting) {
      setting = tmp2;
    }
    if (setting) {
      setting = null != emojiURL;
    }
    if (setting) {
      const obj22 = { label: intl3.string(channelId(stateFromStores1[18]).t.cIoudn), onPress: callback3 };
      const TableRow3 = tmp3(tmp4[30]).TableRow;
      intl3 = tmp3(tmp4[18]).intl;
      setting = tmp36(TableRow3, obj22);
    }
    items14[2] = setting;
    let tmp36Result4 = canRemoveReactions;
    if (tmp36Result4) {
      const obj23 = { label: closure_11(Text, obj24), onPress: callback4 };
      const TableRow4 = tmp3(tmp4[30]).TableRow;
      obj24 = { variant: "body-md/semibold", color: "text-feedback-critical", children: intl4.string(channelId(stateFromStores1[18]).t["zx/e4P"]) };
      Text = tmp3(tmp4[26]).Text;
      intl4 = tmp3(tmp4[18]).intl;
      tmp36Result4 = tmp36(TableRow4, obj23);
    }
    obj25 = { children: items13 };
    const obj26 = { hasIcons: false, children: items14 };
    items14[3] = tmp36Result4;
    items13[1] = closure_12(TableRowGroup, obj26);
  }
  return closure_12(ActionSheet, obj25);
};

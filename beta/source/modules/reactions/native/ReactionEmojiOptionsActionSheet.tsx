// Module ID: 10831
// Function ID: 10832
// Name: ReactionEmojiOptionsActionSheet
// Dependencies: [19, 17, 4825, 5771, 4655, 21, 4836, 576, 2021, 6609, 504, 9748, 1397, 4800, 9698, 9704, 4832, 1115, 9797, 4528, 6610, 4527, 7183, 6618, 6551, 5999, 5917, 2]
// Exports: default

// Module 10831 (ReactionEmojiOptionsActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import ToastUtils from "ToastUtils" /* 4527 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4528 */;
import ClipboardUtils from "ClipboardUtils" /* 6610 */;
import ReactionActionCreatorsAll from "ReactionActionCreators" /* 7183 */;
import EmojiActionCreators from "EmojiActionCreators" /* 9797 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import EmojiStore from "EmojiStore" /* 5771 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4655 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let obj2;
let obj3;
let obj4;
let obj5;
const View = react_native.View;
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { header: obj2, reactionPill: obj3, emoji: { width: 50, height: 50 }, emojiText: { fontSize: 24, lineHeight: 50, textAlign: "center" }, reactionText: { fontSize: 24, lineHeight: 50 }, starIcon: { height: 24, width: 24 }, starIconSelected: obj4, starIconUnselected: obj5 };
obj2 = { alignItems: "center", paddingTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.MESSAGE_HIGHLIGHT_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.xl, borderWidth: 4, borderColor: nativeDefault.colors.BORDER_STRONG, paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
obj4 = { tintColor: nativeDefault.colors.ICON_FEEDBACK_WARNING };
obj5 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let closure_11 = createStyles(obj);
let result = size.fileFinishedImporting("modules/reactions/native/ReactionEmojiOptionsActionSheet.tsx");

export default function ReactionEmojiOptionsActionSheet(channelId) {
  let Text2;
  let animated;
  let canRemoveReactions;
  let intl2;
  let intl3;
  let intl4;
  let items10;
  let items9;
  let obj16;
  let reaction;
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  ({ reaction, canRemoveReactions } = channelId);
  let emojiURL;
  let callback;
  let callback1;
  let tmp = closure_11();
  const starIcon = tmp;
  const emoji = reaction.emoji;
  const DeveloperMode = channelId(emoji[8]).DeveloperMode;
  let setting = DeveloperMode.useSetting();
  let obj = messageId(emoji[9]);
  const tidaWebformEnabled = obj.useExperiment({ location: "ReactionEmojiOptionsActionSheet" }, { autoTrackExposure: false }).tidaWebformEnabled;
  let obj2 = channelId(emoji[10]);
  const items = [callback1];
  const stateFromStores = obj2.useStateFromStores(items, () => callback1.getGuildId());
  let obj3 = channelId(emoji[10]);
  const items1 = [callback];
  const items2 = [emoji.id];
  const stateFromStores1 = obj3.useStateFromStores(items1, () => {
    let customEmojiById = null;
    if (null != emoji.id) {
      customEmojiById = EmojiStore.getCustomEmojiById(tmp.id);
    }
    return customEmojiById;
  }, items2);
  let obj4 = channelId(emoji[11]);
  const isFavoriteEmoji = obj4.useIsFavoriteEmoji(stateFromStores, stateFromStores1);
  let obj5 = channelId(emoji[10]);
  const items3 = [emojiURL];
  const stateFromStores2 = obj5.useStateFromStores(items3, () => emojiURL.useReducedMotion);
  const AnimateEmoji = channelId(emoji[8]).AnimateEmoji;
  emojiURL = undefined;
  if (null != emoji.id) {
    const obj7 = { id: null, animated, size: 96 };
    ({ id: obj6.id, animated } = emoji);
    const getEmojiURL = tmp6(tmp4[12]).getEmojiURL;
    messageId(emoji[12]);
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
  callback = stateFromStores1.useCallback(() => {
    const obj = messageId(emoji[13]);
    obj.hideActionSheet();
  }, []);
  const items4 = [tmp];
  callback1 = stateFromStores1.useCallback((arg0) => {
    let StarOutlineIcon;
    let style;
    const obj = {};
    const merged = Object.assign(starIcon.starIcon);
    if (arg0) {
      const merged1 = Object.assign(tmp.starIconSelected);
      style = obj;
    } else {
      const merged2 = Object.assign(tmp.starIconUnselected);
      style = obj;
    }
    const tmp8 = React4;
    if (arg0) {
      StarOutlineIcon = tmp9(9698).StarIcon;
    } else {
      StarOutlineIcon = tmp9(9704).StarOutlineIcon;
    }
    return tmp8(StarOutlineIcon, { style });
  }, items4);
  const items5 = [callback, stateFromStores1, isFavoriteEmoji, callback1];
  const items6 = [emoji.id, callback];
  const callback2 = stateFromStores1.useCallback(() => {
    let tmp = callback();
    if (null != stateFromStores1) {
      function content() {
        let stringResult;
        const obj = { style: { marginLeft: 8, marginTop: 2 }, variant: "text-md/bold", children: stringResult };
        const Text = channelId(emoji[16]).Text;
        const intl = channelId(emoji[17]).intl;
        const string = intl.string;
        const t = channelId(emoji[17]).t;
        const tmp = closure_2_9;
        if (isFavoriteEmoji) {
          stringResult = string(t.in1rga);
        } else {
          stringResult = string(t.mE2e8A);
        }
        return tmp(Text, obj);
      }
      const obj5 = EmojiActionCreators;
      if (isFavoriteEmoji) {
        obj5.unfavoriteEmoji(stateFromStores1);
        const obj2 = {
          key: "EMOJI_UNFAVORITED",
          icon() {
                return callback1(false);
              },
          content
        };
        const obj3 = ToastActionCreatorsDefault;
        obj3.open(obj2);
      } else {
        obj5.favoriteEmoji(stateFromStores1);
        let obj = ToastActionCreatorsDefault;
        const obj4 = {
          key: "EMOJI_FAVORITED",
          icon() {
                return callback1(true);
              },
          content
        };
        obj.open(obj4);
      }
    }
  }, items5);
  const items7 = [emojiURL, callback];
  const callback3 = stateFromStores1.useCallback(() => {
    if (null != emoji.id) {
      const obj = ClipboardUtils;
      obj.copy(tmp.id);
      const obj2 = ToastUtils;
      const result = obj2.presentCopiedToClipboard();
      callback();
    }
  }, items6);
  const items8 = [channelId, messageId, emoji, callback];
  const callback4 = stateFromStores1.useCallback(() => {
    if (null != emojiURL) {
      const obj = ClipboardUtils;
      obj.copy(tmp);
      const obj2 = ToastUtils;
      const result = obj2.presentCopiedToClipboard();
      callback();
    }
  }, items7);
  let str = emoji.name;
  const callback5 = stateFromStores1.useCallback(() => {
    const obj = ReactionActionCreatorsAll;
    obj.removeEmojiReactions(channelId, messageId, emoji);
    callback();
  }, items8);
  if (str == null) {
    str = "";
  }
  const obj8 = { style: tmp.header, children: items10 };
  const obj9 = { style: tmp.reactionPill, children: items9 };
  const ActionSheet = tmp3(tmp4[23]).ActionSheet;
  items9 = [, ];
  const obj10 = { src: emojiURL, name: str, textEmojiStyle: tmp.emojiText, fastImageStyle: tmp.emoji };
  items9[0] = closure_9(messageId(emoji[24]), obj10);
  const obj11 = { variant: "text-lg/bold", color: "text-default", style: tmp.reactionText, children: tmp14 };
  items9[1] = closure_9(channelId(emoji[16]).Text, obj11);
  items10 = [closure_10(isFavoriteEmoji, obj9), ];
  let combined = str;
  let Text = tmp3(tmp4[16]).Text;
  const tmp22 = isFavoriteEmoji;
  if (null != emoji.id) {
    const _HermesInternal = HermesInternal;
    combined = ":" + str + ":";
  }
  items10[1] = closure_9(Text, { variant: "text-lg/semibold", color: "text-default", children: combined });
  const items11 = [closure_10(tmp22, obj8), ];
  let tmp23Result = tmp2;
  const TableRowGroup = tmp3(tmp4[25]).TableRowGroup;
  if (null != emoji.id) {
    tmp23Result = null != stateFromStores1;
  }
  if (tmp23Result) {
    let stringResult;
    const TableRow = tmp3(tmp4[26]).TableRow;
    let intl = tmp3(tmp4[17]).intl;
    let string = intl.string;
    let t = tmp3(tmp4[17]).t;
    if (isFavoriteEmoji) {
      stringResult = string(t.Ay49KA);
    } else {
      stringResult = string(t.nNsr67);
    }
    const obj12 = { label: stringResult, onPress: callback2 };
    tmp23Result = tmp23(TableRow, obj12);
  }
  const items12 = [tmp23Result, , , ];
  let tmp23Result2 = setting && tmp2;
  if (tmp23Result2) {
    const obj13 = { label: intl2.string(channelId(emoji[17]).t.Ap2oVy), onPress: callback3 };
    const TableRow2 = tmp3(tmp4[26]).TableRow;
    intl2 = tmp3(tmp4[17]).intl;
    tmp23Result2 = tmp23(TableRow2, obj13);
  }
  items12[1] = tmp23Result2;
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
    const obj14 = { label: intl3.string(channelId(emoji[17]).t.cIoudn), onPress: callback4 };
    const TableRow3 = tmp3(tmp4[26]).TableRow;
    intl3 = tmp3(tmp4[17]).intl;
    setting = tmp23(TableRow3, obj14);
  }
  items12[2] = setting;
  if (canRemoveReactions) {
    const obj15 = { label: closure_9(Text2, obj16), onPress: callback5 };
    const TableRow4 = tmp3(tmp4[26]).TableRow;
    obj16 = { variant: "text-md/semibold", color: "text-feedback-critical", children: intl4.string(channelId(emoji[17]).t["zx/e4P"]) };
    Text2 = tmp3(tmp4[16]).Text;
    intl4 = tmp3(tmp4[17]).intl;
    canRemoveReactions = tmp23(TableRow4, obj15);
  }
  const obj27 = { children: items11 };
  items12[3] = canRemoveReactions;
  items11[1] = closure_10(TableRowGroup, { hasIcons: false, children: items12 });
  return closure_10(ActionSheet, obj27);
};

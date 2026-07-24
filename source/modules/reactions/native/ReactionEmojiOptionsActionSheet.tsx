// Module ID: 9469
// Function ID: 73622
// Name: ReactionEmojiOptionsActionSheet
// Dependencies: [31, 27, 4122, 4991, 3947, 33, 4130, 689, 3803, 5489, 566, 9366, 1392, 4098, 9431, 9433, 4126, 1212, 9427, 3831, 5490, 3830, 7004, 5498, 5151, 5501, 5165, 2]
// Exports: default

// Module 9469 (ReactionEmojiOptionsActionSheet)
import result from "result";
import { View } from "set";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_9;
const require = arg1;
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { alignItems: "center", paddingTop: require("_createForOfIteratorHelperLoose").space.PX_8, gap: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.header = _createForOfIteratorHelperLoose;
let obj1 = { flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.MESSAGE_HIGHLIGHT_BACKGROUND_DEFAULT, borderRadius: require("_createForOfIteratorHelperLoose").radii.xl, borderWidth: 4, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_STRONG, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_8, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.reactionPill = obj1;
_createForOfIteratorHelperLoose.emoji = { width: 50, height: 50 };
_createForOfIteratorHelperLoose.emojiText = { fontSize: 24, lineHeight: 50, textAlign: "center" };
_createForOfIteratorHelperLoose.reactionText = { fontSize: 24, lineHeight: 50 };
_createForOfIteratorHelperLoose.starIcon = { height: 24, width: 24 };
_createForOfIteratorHelperLoose.starIconSelected = { tintColor: require("_createForOfIteratorHelperLoose").colors.ICON_FEEDBACK_WARNING };
let obj2 = { tintColor: require("_createForOfIteratorHelperLoose").colors.ICON_FEEDBACK_WARNING };
_createForOfIteratorHelperLoose.starIconUnselected = { tintColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj3 = { tintColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT };
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/reactions/native/ReactionEmojiOptionsActionSheet.tsx");

export default function ReactionEmojiOptionsActionSheet(channelId) {
  let animated;
  let canRemoveReactions;
  let reaction;
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  ({ reaction, canRemoveReactions } = channelId);
  let emojiURL;
  let callback;
  let callback1;
  const tmp = _createForOfIteratorHelperLoose();
  const importAll = tmp;
  const emoji = reaction.emoji;
  const DeveloperMode = channelId(emoji[8]).DeveloperMode;
  let tidaWebformEnabled = DeveloperMode.useSetting();
  let obj = messageId(emoji[9]);
  let obj1 = channelId(emoji[10]);
  const items = [callback1];
  const stateFromStores = obj1.useStateFromStores(items, () => callback1.getGuildId());
  let obj2 = channelId(emoji[10]);
  const items1 = [callback];
  const items2 = [emoji.id];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let customEmojiById = null;
    if (null != emoji.id) {
      customEmojiById = callback.getCustomEmojiById(emoji.id);
    }
    return customEmojiById;
  }, items2);
  let obj3 = channelId(emoji[11]);
  const isFavoriteEmoji = obj3.useIsFavoriteEmoji(stateFromStores, stateFromStores1);
  let obj4 = channelId(emoji[10]);
  const items3 = [emojiURL];
  const stateFromStores2 = obj4.useStateFromStores(items3, () => emojiURL.useReducedMotion);
  const AnimateEmoji = channelId(emoji[8]).AnimateEmoji;
  emojiURL = undefined;
  if (null != emoji.id) {
    let obj5 = messageId(emoji[12]);
    obj = {};
    ({ id: obj7.id, animated } = emoji);
    let tmp11 = null != animated;
    if (tmp11) {
      tmp11 = animated;
    }
    if (tmp11) {
      tmp11 = !stateFromStores2;
    }
    if (tmp11) {
      tmp11 = tmp7;
    }
    obj.animated = tmp11;
    obj.size = 96;
    emojiURL = obj5.getEmojiURL(obj);
  }
  callback = stateFromStores1.useCallback(() => {
    messageId(emoji[13]).hideActionSheet();
  }, []);
  const items4 = [tmp];
  callback1 = stateFromStores1.useCallback((arg0) => {
    let obj = {};
    const merged = Object.assign(tmp.starIcon);
    if (arg0) {
      const merged1 = Object.assign(tmp.starIconSelected);
      let tmp5 = obj;
    } else {
      const merged2 = Object.assign(tmp.starIconUnselected);
      tmp5 = obj;
    }
    if (arg0) {
      let StarOutlineIcon = tmp9(tmp10[14]).StarIcon;
    } else {
      StarOutlineIcon = tmp9(tmp10[15]).StarOutlineIcon;
    }
    obj = { style: tmp5 };
    return outer1_9(StarOutlineIcon, obj);
  }, items4);
  const items5 = [callback, stateFromStores1, isFavoriteEmoji, callback1];
  const items6 = [emoji.id, callback];
  const callback2 = stateFromStores1.useCallback(() => {
    function content() {
      const obj = { style: { marginLeft: 8, marginTop: 2 }, variant: "text-md/bold" };
      const intl = channelId(emoji[17]).intl;
      const string = intl.string;
      const t = channelId(emoji[17]).t;
      if (outer1_5) {
        let stringResult = string(t.in1rga);
      } else {
        stringResult = string(t.mE2e8A);
      }
      obj.children = stringResult;
      return outer2_9(channelId(emoji[16]).Text, obj);
    }
    callback();
    if (null != stateFromStores1) {
      const obj5 = channelId(emoji[18]);
      if (isFavoriteEmoji) {
        obj5.unfavoriteEmoji(stateFromStores1);
        let obj = {
          key: "EMOJI_UNFAVORITED",
          icon() {
                return outer1_8(false);
              },
          content
        };
        messageId(tmp12[19]).open(obj);
        const obj3 = messageId(tmp12[19]);
      } else {
        obj5.favoriteEmoji(stateFromStores1);
        obj = messageId(tmp12[19]);
        obj = {
          key: "EMOJI_FAVORITED",
          icon() {
                return outer1_8(true);
              },
          content
        };
        obj.open(obj);
      }
    }
  }, items5);
  const items7 = [emojiURL, callback];
  const callback3 = stateFromStores1.useCallback(() => {
    if (null != emoji.id) {
      channelId(emoji[20]).copy(emoji.id);
      const obj = channelId(emoji[20]);
      const result = channelId(emoji[21]).presentCopiedToClipboard();
      callback();
      const obj2 = channelId(emoji[21]);
    }
  }, items6);
  const items8 = [channelId, messageId, emoji, callback];
  const callback4 = stateFromStores1.useCallback(() => {
    if (null != emojiURL) {
      channelId(emoji[20]).copy(emojiURL);
      const obj = channelId(emoji[20]);
      const result = channelId(emoji[21]).presentCopiedToClipboard();
      callback();
      const obj2 = channelId(emoji[21]);
    }
  }, items7);
  const name = emoji.name;
  let str = "";
  const callback5 = stateFromStores1.useCallback(() => {
    tmp(emoji[22]).removeEmojiReactions(channelId, messageId, emoji);
    callback();
  }, items8);
  if (null != name) {
    str = name;
  }
  obj = {};
  obj1 = { style: tmp.header };
  obj2 = { style: tmp.reactionPill };
  obj3 = { src: emojiURL, name: str };
  ({ emojiText: obj11.textEmojiStyle, emoji: obj11.fastImageStyle } = tmp);
  const items9 = [callback(messageId(emoji[24]), obj3), ];
  obj4 = { variant: "text-lg/bold", color: "text-default", style: tmp.reactionText, children: reaction.burst_count > 0 ? reaction.burst_count : reaction.count };
  items9[1] = callback(channelId(emoji[16]).Text, obj4);
  obj2.children = items9;
  const items10 = [callback2(isFavoriteEmoji, obj2), ];
  obj5 = { variant: "text-lg/semibold", color: "text-default" };
  let combined = str;
  if (null != emoji.id) {
    const _HermesInternal = HermesInternal;
    combined = ":" + str + ":";
  }
  obj5.children = combined;
  items10[1] = callback(channelId(emoji[16]).Text, obj5);
  obj1.children = items10;
  const items11 = [callback2(isFavoriteEmoji, obj1), ];
  const obj6 = { hasIcons: false };
  let tmp25 = tmp2;
  if (null != emoji.id) {
    tmp25 = null != stateFromStores1;
  }
  if (!tmp25) {
    const items12 = [tmp25, , , ];
    let tmp33 = tidaWebformEnabled;
    if (tidaWebformEnabled) {
      tmp33 = tmp2;
    }
    if (tmp33) {
      const obj7 = {};
      const intl2 = channelId(emoji[17]).intl;
      obj7.label = intl2.string(channelId(emoji[17]).t.Ap2oVy);
      obj7.onPress = callback3;
      tmp33 = callback(channelId(emoji[26]).TableRow, obj7);
    }
    items12[1] = tmp33;
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
      const obj8 = {};
      const intl3 = channelId(emoji[17]).intl;
      obj8.label = intl3.string(channelId(emoji[17]).t.cIoudn);
      obj8.onPress = callback4;
      tidaWebformEnabled = callback(channelId(emoji[26]).TableRow, obj8);
    }
    items12[2] = tidaWebformEnabled;
    if (canRemoveReactions) {
      const obj9 = {};
      const obj10 = { variant: "text-md/semibold", color: "text-feedback-critical" };
      const intl4 = channelId(emoji[17]).intl;
      obj10.children = intl4.string(channelId(emoji[17]).t["zx/e4P"]);
      obj9.label = callback(channelId(emoji[16]).Text, obj10);
      obj9.onPress = callback5;
      canRemoveReactions = callback(channelId(emoji[26]).TableRow, obj9);
    }
    items12[3] = canRemoveReactions;
    obj6.children = items12;
    items11[1] = callback2(channelId(emoji[25]).TableRowGroup, obj6);
    obj.children = items11;
    return tmp19(channelId(emoji[23]).ActionSheet, obj);
  } else {
    const obj11 = {};
    let intl = channelId(emoji[17]).intl;
    let string = intl.string;
    let Ay49KA = channelId(emoji[17]).t;
    if (isFavoriteEmoji) {
      Ay49KA = Ay49KA.Ay49KA;
      let stringResult = string(Ay49KA);
    } else {
      stringResult = string(Ay49KA.nNsr67);
    }
    obj11.label = stringResult;
    obj11.onPress = callback2;
    callback(channelId(emoji[26]).TableRow, obj11);
    const tmp26 = callback;
  }
};

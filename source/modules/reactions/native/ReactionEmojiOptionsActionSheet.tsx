// Module ID: 9426
// Function ID: 73372
// Name: ReactionEmojiOptionsActionSheet
// Dependencies: []
// Exports: default

// Module 9426 (ReactionEmojiOptionsActionSheet)
let closure_4 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { alignItems: "center", paddingTop: importDefault(dependencyMap[7]).space.PX_8, gap: importDefault(dependencyMap[7]).space.PX_16 };
obj.header = obj;
const obj1 = { <string:328797103>: "Array", <string:1391485314>: "constructor", <string:247703438>: "op", <string:944838497>: "isArray", <string:1105551782>: "isArray", lastRequest: "isArray", backgroundColor: importDefault(dependencyMap[7]).colors.MESSAGE_HIGHLIGHT_BACKGROUND_DEFAULT, borderRadius: importDefault(dependencyMap[7]).radii.xl, borderColor: importDefault(dependencyMap[7]).colors.BORDER_STRONG, paddingVertical: importDefault(dependencyMap[7]).space.PX_8, paddingHorizontal: importDefault(dependencyMap[7]).space.PX_16, gap: importDefault(dependencyMap[7]).space.PX_8 };
obj.reactionPill = obj1;
obj.emoji = {};
obj.emojiText = {};
obj.reactionText = {};
obj.starIcon = {};
const tmp2 = arg1(dependencyMap[5]);
obj.starIconSelected = { tintColor: importDefault(dependencyMap[7]).colors.ICON_FEEDBACK_WARNING };
const obj2 = { tintColor: importDefault(dependencyMap[7]).colors.ICON_FEEDBACK_WARNING };
obj.starIconUnselected = { tintColor: importDefault(dependencyMap[7]).colors.INTERACTIVE_TEXT_DEFAULT };
let closure_11 = obj.createStyles(obj);
const obj3 = { tintColor: importDefault(dependencyMap[7]).colors.INTERACTIVE_TEXT_DEFAULT };
const result = arg1(dependencyMap[27]).fileFinishedImporting("modules/reactions/native/ReactionEmojiOptionsActionSheet.tsx");

export default function ReactionEmojiOptionsActionSheet(channelId) {
  let animated;
  let canRemoveReactions;
  let reaction;
  channelId = channelId.channelId;
  const arg1 = channelId;
  const messageId = channelId.messageId;
  const importDefault = messageId;
  ({ reaction, canRemoveReactions } = channelId);
  let closure_6;
  let closure_7;
  let closure_8;
  const tmp = callback3();
  const importAll = tmp;
  const emoji = reaction.emoji;
  const dependencyMap = emoji;
  const DeveloperMode = arg1(dependencyMap[8]).DeveloperMode;
  let tidaWebformEnabled = DeveloperMode.useSetting();
  let obj = importDefault(dependencyMap[9]);
  let obj1 = arg1(dependencyMap[10]);
  const items = [closure_8];
  const stateFromStores = obj1.useStateFromStores(items, () => callback1.getGuildId());
  let obj2 = arg1(dependencyMap[10]);
  const items1 = [closure_7];
  const items2 = [emoji.id];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let customEmojiById = null;
    if (null != emoji.id) {
      customEmojiById = callback.getCustomEmojiById(emoji.id);
    }
    return customEmojiById;
  }, items2);
  const React = stateFromStores1;
  let obj3 = arg1(dependencyMap[11]);
  const isFavoriteEmoji = obj3.useIsFavoriteEmoji(stateFromStores, stateFromStores1);
  const View = isFavoriteEmoji;
  let obj4 = arg1(dependencyMap[10]);
  const items3 = [closure_6];
  const stateFromStores2 = obj4.useStateFromStores(items3, () => emojiURL.useReducedMotion);
  const AnimateEmoji = arg1(dependencyMap[8]).AnimateEmoji;
  let emojiURL;
  if (null != emoji.id) {
    let obj5 = importDefault(dependencyMap[12]);
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
  closure_6 = emojiURL;
  const callback = React.useCallback(() => {
    messageId(emoji[13]).hideActionSheet();
  }, []);
  closure_7 = callback;
  const items4 = [tmp];
  const callback1 = React.useCallback((arg0) => {
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
    return closure_9(StarOutlineIcon, obj);
  }, items4);
  closure_8 = callback1;
  const items5 = [callback, stateFromStores1, isFavoriteEmoji, callback1];
  const items6 = [emoji.id, callback];
  const callback2 = React.useCallback(() => {
    function content() {
      const obj = { style: {}, variant: "text-md/bold" };
      const intl = callback(closure_3[17]).intl;
      const string = intl.string;
      const t = callback(closure_3[17]).t;
      if (closure_5) {
        let stringResult = string(t.in1rga);
      } else {
        stringResult = string(t.mE2e8A);
      }
      obj.children = stringResult;
      return closure_9(callback(closure_3[16]).Text, obj);
    }
    callback();
    if (null != stateFromStores1) {
      const obj5 = channelId(emoji[18]);
      if (isFavoriteEmoji) {
        obj5.unfavoriteEmoji(stateFromStores1);
        let obj = {
          key: "EMOJI_UNFAVORITED",
          icon() {
                return callback2(false);
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
                return callback2(true);
              },
          content
        };
        obj.open(obj);
      }
    }
  }, items5);
  const items7 = [emojiURL, callback];
  const callback3 = React.useCallback(() => {
    if (null != emoji.id) {
      channelId(emoji[20]).copy(emoji.id);
      const obj = channelId(emoji[20]);
      const result = channelId(emoji[21]).presentCopiedToClipboard();
      callback();
      const obj2 = channelId(emoji[21]);
    }
  }, items6);
  const items8 = [channelId, messageId, emoji, callback];
  const callback4 = React.useCallback(() => {
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
  const callback5 = React.useCallback(() => {
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
  const items9 = [callback(importDefault(dependencyMap[24]), obj3), ];
  obj4 = { cachedAt: null, edpbxy: null, style: tmp.reactionText, children: reaction.burst_count > 0 ? reaction.burst_count : reaction.count };
  items9[1] = callback(arg1(dependencyMap[16]).Text, obj4);
  obj2.children = items9;
  const items10 = [callback2(View, obj2), ];
  obj5 = { cachedAt: null, edpbxy: null };
  let combined = str;
  if (null != emoji.id) {
    const _HermesInternal = HermesInternal;
    combined = ":" + str + ":";
  }
  obj5.children = combined;
  items10[1] = callback(arg1(dependencyMap[16]).Text, obj5);
  obj1.children = items10;
  const items11 = [callback2(View, obj1), ];
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
      const intl2 = arg1(dependencyMap[17]).intl;
      obj7.label = intl2.string(arg1(dependencyMap[17]).t.Ap2oVy);
      obj7.onPress = callback3;
      tmp33 = callback(arg1(dependencyMap[26]).TableRow, obj7);
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
      const intl3 = arg1(dependencyMap[17]).intl;
      obj8.label = intl3.string(arg1(dependencyMap[17]).t.cIoudn);
      obj8.onPress = callback4;
      tidaWebformEnabled = callback(arg1(dependencyMap[26]).TableRow, obj8);
    }
    items12[2] = tidaWebformEnabled;
    if (canRemoveReactions) {
      const obj9 = {};
      const obj10 = {};
      const intl4 = arg1(dependencyMap[17]).intl;
      obj10.children = intl4.string(arg1(dependencyMap[17]).t.zx/e4P);
      obj9.label = callback(arg1(dependencyMap[16]).Text, obj10);
      obj9.onPress = callback5;
      canRemoveReactions = callback(arg1(dependencyMap[26]).TableRow, obj9);
    }
    items12[3] = canRemoveReactions;
    obj6.children = items12;
    items11[1] = callback2(arg1(dependencyMap[25]).TableRowGroup, obj6);
    obj.children = items11;
    return tmp19(arg1(dependencyMap[23]).ActionSheet, obj);
  } else {
    const obj11 = {};
    const intl = arg1(dependencyMap[17]).intl;
    const string = intl.string;
    let Ay49KA = arg1(dependencyMap[17]).t;
    if (isFavoriteEmoji) {
      Ay49KA = Ay49KA.Ay49KA;
      let stringResult = string(Ay49KA);
    } else {
      stringResult = string(Ay49KA.nNsr67);
    }
    obj11.label = stringResult;
    obj11.onPress = callback2;
    callback(arg1(dependencyMap[26]).TableRow, obj11);
    const tmp26 = callback;
  }
};

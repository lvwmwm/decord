// Module ID: 10047
// Function ID: 10048
// Name: EmojiGrid
// Dependencies: [19, 17, 21, 5009, 575, 4959, 1410, 7294, 10032, 10048, 10050, 2]
// Exports: EmojiGrid

// Module 10047 (EmojiGrid)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1410 */;
import EmojiUtilsDefault from "EmojiUtils" /* 4959 */;
import EmojiDefault from "Emoji" /* 7294 */;
import LayoutUtils from "LayoutUtils" /* 10050 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let size;
function Emoji(guildEmoji) {
  let uRL;
  guildEmoji = guildEmoji.guildEmoji;
  const tmp = closure_5();
  const tmp2 = jsx;
  const tmp5 = EmojiDefault;
  if (null == guildEmoji.id) {
    const tmp3Result = EmojiUtilsDefault;
    uRL = tmp3Result.getURL(guildEmoji.name);
  } else {
    const obj = { id: null, animated: null, size: 48 };
    ({ id: obj2.id, animated: obj2.animated } = guildEmoji);
    const tmp3Result2 = AvatarUtilsDefault;
    uRL = tmp3Result2.getEmojiURL(obj);
  }
  const obj3 = { src: uRL, fastImageStyle: tmp.gridEmojiFastImage, textEmojiStyle: tmp.gridEmojiText, name: guildEmoji.name };
  return tmp2(tmp5, obj3, guildEmoji.id);
}
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { gridEmojiFastImage: size, gridEmojiText: { fontSize: 18, lineHeight: 44 }, emojiGridRowContainer: { marginTop: 16, flexDirection: "row" }, emojiGridContainer: { marginTop: 8, alignItems: "center" } };
size = { height: 40, width: 40, borderRadius: nativeDefault.radii.sm };
let closure_5 = createStyles.createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/messages/native/emoji/EmojiGrid.tsx");

export function EmojiGrid(numberToShow) {
  let arr4;
  let doNotDisplayEmojiIds;
  let expressionSourceGuild;
  ({ expressionSourceGuild, doNotDisplayEmojiIds } = numberToShow);
  if (doNotDisplayEmojiIds === undefined) {
    doNotDisplayEmojiIds = [];
  }
  let num = numberToShow.numberToShow;
  if (num === undefined) {
    num = 10;
  }
  let num2 = numberToShow.maxPerRow;
  if (num2 === undefined) {
    num2 = 5;
  }
  let obj = {};
  const obj2 = doNotDisplayEmojiIds(10032);
  const merged = Object.assign(obj2.useSharedMessageEmojiStyles());
  const merged1 = Object.assign(closure_5());
  let emojis;
  const tmp = doNotDisplayEmojiIds;
  if (expressionSourceGuild != null) {
    emojis = expressionSourceGuild.emojis;
  }
  if (emojis == null) {
    emojis = [];
  }
  const substr = emojis.slice(0, num + 1);
  const found = substr.filter((id) => !doNotDisplayEmojiIds.includes(id.id));
  const substr1 = found.slice(0, num);
  ({
    gap: 8,
    children: arr4.map((arr, index) => {
      obj = { style: obj.emojiGridRowContainer, children: null };
      ({
        gap: 32,
        children: arr.map((guildEmoji) => {
          obj = { guildEmoji };
          return closure_1_4(closure_1_6, obj, guildEmoji.id);
        })
      });
      const GappedList = LayoutUtils.GappedList;
      return <View key={arg1} style={obj.emojiGridRowContainer}>{null}</View>;
    })
  });
  arr4 = obj(10048)(substr1, num2);
  let GappedList = tmp(10050).GappedList;
  return <View style={obj.emojiGridContainer}>{null}</View>;
}

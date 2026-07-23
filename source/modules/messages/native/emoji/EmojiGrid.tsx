// Module ID: 9402
// Function ID: 73268
// Name: Emoji
// Dependencies: [31, 27, 33, 4130, 689, 3775, 1392, 5151, 9387, 9403, 9405, 2]
// Exports: EmojiGrid

// Module 9402 (Emoji)
import "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
function Emoji(guildEmoji) {
  guildEmoji = guildEmoji.guildEmoji;
  let obj = {};
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = jsx;
  if (null == guildEmoji.id) {
    let uRL = importDefault(3775).getURL(guildEmoji.name);
    const obj4 = importDefault(3775);
  } else {
    obj = {};
    ({ id: obj3.id, animated: obj3.animated } = guildEmoji);
    obj.size = 48;
    uRL = importDefault(1392).getEmojiURL(obj);
    const obj2 = importDefault(1392);
  }
  obj.src = uRL;
  ({ gridEmojiFastImage: obj.fastImageStyle, gridEmojiText: obj.textEmojiStyle } = tmp);
  obj.name = guildEmoji.name;
  return tmp2(importDefault(5151), obj, guildEmoji.id);
}
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { height: 40, width: 40, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
_createForOfIteratorHelperLoose.gridEmojiFastImage = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.gridEmojiText = { fontSize: 18, lineHeight: 44 };
_createForOfIteratorHelperLoose.emojiGridRowContainer = { marginTop: 16, flexDirection: "row" };
_createForOfIteratorHelperLoose.emojiGridContainer = { marginTop: 8, alignItems: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/messages/native/emoji/EmojiGrid.tsx");

export const EmojiGrid = function EmojiGrid(numberToShow) {
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
  let obj;
  obj = {};
  const merged = Object.assign(doNotDisplayEmojiIds(9387).useSharedMessageEmojiStyles());
  const merged1 = Object.assign(_createForOfIteratorHelperLoose());
  let emojis;
  if (null != expressionSourceGuild) {
    emojis = expressionSourceGuild.emojis;
  }
  if (null == emojis) {
    emojis = [];
  }
  const substr = emojis.slice(0, num + 1);
  const found = substr.filter((id) => !doNotDisplayEmojiIds.includes(id.id));
  const substr1 = found.slice(0, num);
  const obj2 = doNotDisplayEmojiIds(9387);
  obj = { style: obj.emojiGridContainer };
  obj = { gap: 8 };
  obj.children = obj(9403)(substr1, num2).map((arr) => {
    obj = { style: obj.emojiGridRowContainer };
    obj = { gap: 32, children: arr.map((guildEmoji) => outer2_4(outer2_6, { guildEmoji }, guildEmoji.id)) };
    obj.children = outer1_4(doNotDisplayEmojiIds(outer1_2[10]).GappedList, obj);
    return outer1_4(outer1_3, obj, arg1);
  });
  obj.children = jsx(doNotDisplayEmojiIds(9405).GappedList, { gap: 8 });
  return <View gap={8} />;
};

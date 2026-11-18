// Module ID: 11290
// Function ID: 11291
// Name: EmojiGrid
// Dependencies: [19, 21, 4823, 575, 4773, 1414, 7407, 11281, 11291, 5837, 2]
// Exports: EmojiGrid

// Module 11290 (EmojiGrid)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1414 */;
import EmojiUtilsDefault from "EmojiUtils" /* 4773 */;
import Stack_Stack from "Stack/Stack" /* 5837 */;
import EmojiDefault from "Emoji" /* 7407 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4823 */;
import size_mod from "module_2" /* 2 */;

let size;
function Emoji(guildEmoji) {
  let uRL;
  guildEmoji = guildEmoji.guildEmoji;
  const tmp = closure_4();
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
const jsx = Fragment.jsx;
let obj = { gridEmojiFastImage: size, gridEmojiText: { fontSize: 18, lineHeight: 44 }, emojiGridRowContainer: { marginTop: 16 }, emojiGridContainer: { marginTop: 8 } };
size = { height: 40, width: 40, borderRadius: nativeDefault.radii.sm };
let closure_4 = createStyles.createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/messages/native/emoji/EmojiGrid.tsx");

export function EmojiGrid(numberToShow) {
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
  const obj2 = doNotDisplayEmojiIds(11281);
  const merged = Object.assign(obj2.useSharedMessageEmojiStyles());
  const merged1 = Object.assign(closure_4());
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
  const arr4 = obj(11291)(substr1, num2);
  let Stack = tmp(5837).Stack;
  return <Stack spacing={8} align="center" style={obj.emojiGridContainer}>{arr4.map((arr, index) => {
    const f128868 = (guildEmoji) => {
      obj = { guildEmoji };
      return closure_1_3(closure_1_5, obj, guildEmoji.id);
    };
    obj = { direction: "horizontal", spacing: 32, justify: "center", style: obj.emojiGridRowContainer, children: arr.map(f128868) };
    const Stack = Stack_Stack.Stack;
    return <Stack key={arg1} direction="horizontal" spacing={32} justify="center" style={obj.emojiGridRowContainer}>{arg0.map(f128868)}</Stack>;
  })}</Stack>;
}

// Module ID: 11312
// Function ID: 11313
// Name: EmojiGrid
// Dependencies: [19, 21, 5306, 575, 5256, 1414, 7894, 11301, 11313, 6337, 2]
// Exports: EmojiGrid

// Module 11312 (EmojiGrid)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1414 */;
import EmojiUtilsDefault from "EmojiUtils" /* 5256 */;
import Stack_Stack from "Stack/Stack" /* 6337 */;
import EmojiDefault from "Emoji" /* 7894 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5306 */;
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
  const obj2 = doNotDisplayEmojiIds(11301);
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
  const arr4 = obj(11313)(substr1, num2);
  let Stack = tmp(6337).Stack;
  return <Stack spacing={8} align="center" style={obj.emojiGridContainer}>{arr4.map((arr, index) => {
    const f131411 = (guildEmoji) => {
      obj = { guildEmoji };
      return closure_1_3(closure_1_5, obj, guildEmoji.id);
    };
    obj = { direction: "horizontal", spacing: 32, justify: "center", style: obj.emojiGridRowContainer, children: arr.map(f131411) };
    const Stack = Stack_Stack.Stack;
    return <Stack key={arg1} direction="horizontal" spacing={32} justify="center" style={obj.emojiGridRowContainer}>{arg0.map(f131411)}</Stack>;
  })}</Stack>;
}

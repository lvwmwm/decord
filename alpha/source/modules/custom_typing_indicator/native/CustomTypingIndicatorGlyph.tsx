// Module ID: 13731
// Function ID: 13732
// Name: CustomTypingIndicatorGlyph
// Dependencies: [19, 17, 21, 5014, 1405, 1187, 575, 13732, 2]
// Exports: default

// Module 13731 (CustomTypingIndicatorGlyph)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import CustomTypingIndicatorAnimatedEmojiDefault from "CustomTypingIndicatorAnimatedEmoji" /* 13732 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles({ emojiRow: { flexDirection: "row", alignItems: "center" } });
let size = size_mod;
const result = size.fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorGlyph.tsx");

export default function CustomTypingIndicatorGlyph(config) {
  let animation;
  let emojis;
  config = config.config;
  size = config.size;
  let emojisKey;
  const tmp = closure_5();
  const obj = config(1405);
  dependencyMap = obj.getEffectiveCustomTypingIndicatorAnimation(config);
  const obj2 = config(1405);
  if (obj2.hasCustomTypingIndicatorEmojis(config.emojis)) {
    let PX_4;
    const tmp2Result = config(1405);
    emojisKey = tmp2Result.getCustomTypingIndicatorEmojisKey(config.emojis);
    const items = [tmp.emojiRow, ];
    const tmp5 = jsx;
    const tmp6 = emojisKey;
    if (null == size) {
      PX_4 = size(575).space.PX_4;
    } else {
      PX_4 = size / 4;
    }
    const obj4 = { gap: PX_4 };
    items[1] = obj4;
    const obj3 = { style: items, children: emojis.map((emoji, index) => jsx(CustomTypingIndicatorAnimatedEmojiDefault, { emoji, emojisKey, index, emojiCount: config.emojis.length, animation, size }, index)) };
    emojis = config.emojis;
    return tmp5(tmp6, obj3);
  } else {
    return jsx(config(1187).Ellipsis, {});
  }
};

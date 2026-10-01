// Module ID: 11463
// Function ID: 11464
// Name: CustomTypingIndicatorGlyph
// Dependencies: [19, 17, 21, 4836, 1393, 1177, 576, 11464, 2]
// Exports: default

// Module 11463 (CustomTypingIndicatorGlyph)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import CustomTypingIndicatorAnimatedEmojiDefault from "CustomTypingIndicatorAnimatedEmoji" /* 11464 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
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
  let tmp4Result;
  config = config.config;
  size = config.size;
  const tmp = closure_5();
  const obj = config(1393);
  dependencyMap = obj.getEffectiveCustomTypingIndicatorAnimation(config);
  const obj2 = config(1393);
  const tmp2 = config;
  if (obj2.hasCustomTypingIndicatorEmojis(config.emojis)) {
    let PX_4;
    const items = [tmp.emojiRow, ];
    const tmp6 = View;
    if (null == size) {
      PX_4 = size(576).space.PX_4;
    } else {
      PX_4 = size / 4;
    }
    const obj4 = { gap: PX_4 };
    items[1] = obj4;
    const obj3 = { style: items, children: emojis.map((emoji, index) => jsx(CustomTypingIndicatorAnimatedEmojiDefault, { emoji, index, emojiCount: config.emojis.length, animation, size }, index)) };
    emojis = config.emojis;
    tmp4Result = tmp4(tmp6, obj3);
  } else {
    tmp4Result = tmp4(tmp2(1177).Ellipsis, {});
  }
  return tmp4Result;
};

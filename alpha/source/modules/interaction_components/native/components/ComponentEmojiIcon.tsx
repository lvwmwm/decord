// Module ID: 12404
// Function ID: 12405
// Name: ComponentEmojiIcon
// Dependencies: [19, 21, 5043, 575, 7488, 2]
// Exports: default

// Module 12404 (ComponentEmojiIcon)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import EmojiDefault from "Emoji" /* 7488 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 5043 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
createStyles = createStyles.createStyles;
const obj = { emojiWrapper: { flexShrink: 0, borderRadius: nativeDefault.radii.xs, overflow: "hidden" }, textEmoji: { fontSize: 16, color: nativeDefault.colors.TEXT_DEFAULT }, fastImageEmoji: { width: 24, height: 24 } };
({ flexShrink: 0, borderRadius: nativeDefault.radii.xs, overflow: "hidden" });
({ fontSize: 16, color: nativeDefault.colors.TEXT_DEFAULT });
let closure_3 = createStyles(obj);
const result = size.fileFinishedImporting("modules/interaction_components/native/components/ComponentEmojiIcon.tsx");

export default function ComponentEmojiIcon(emoji) {
  emoji = emoji.emoji;
  const tmp = closure_3();
  return jsx(EmojiDefault, { src: emoji.src, name: emoji.name, style: tmp.emojiWrapper, textEmojiStyle: tmp.textEmoji, fastImageStyle: tmp.fastImageEmoji });
};

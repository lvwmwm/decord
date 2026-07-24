// Module ID: 9435
// Function ID: 73468
// Name: EmojiOptionsActionSheet
// Dependencies: [31, 33, 5490, 3830, 4098, 5498, 5501, 5165, 4074, 1212, 2]
// Exports: default

// Module 9435 (EmojiOptionsActionSheet)
import result from "result";
import { jsx } from "jsxProd";

const require = arg1;
let result = require("_copy").fileFinishedImporting("modules/messages/native/emoji/EmojiOptionsActionSheet.tsx");

export default function EmojiOptionsActionSheet(emojiSrc) {
  emojiSrc = emojiSrc.emojiSrc;
  const items = [emojiSrc];
  const callback = React.useCallback(() => {
    emojiSrc(outer1_2[2]).copy(emojiSrc);
    const obj = emojiSrc(outer1_2[2]);
    const result = emojiSrc(outer1_2[3]).presentCopiedToClipboard();
    const obj2 = emojiSrc(outer1_2[3]);
    outer1_1(outer1_2[4]).hideActionSheet();
  }, items);
  let obj = {};
  obj = { hasIcons: true };
  obj = { icon: jsx(emojiSrc(4074).LinkIcon, {}) };
  const intl = emojiSrc(1212).intl;
  obj.label = intl.string(emojiSrc(1212).t.cIoudn);
  obj.onPress = callback;
  obj.children = jsx(emojiSrc(5165).TableRow, { icon: jsx(emojiSrc(4074).LinkIcon, {}) });
  obj.children = jsx(emojiSrc(5501).TableRowGroup, { icon: jsx(emojiSrc(4074).LinkIcon, {}) });
  return jsx(emojiSrc(5498).ActionSheet, { icon: jsx(emojiSrc(4074).LinkIcon, {}) });
};

// Module ID: 8642
// Function ID: 8643
// Name: EmojiOptionsActionSheet
// Dependencies: [19, 21, 5623, 3955, 4223, 5631, 5634, 5300, 4199, 1236, 2]
// Exports: default

// Module 8642 (EmojiOptionsActionSheet)
import noop from "noop";
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
  let obj = { children: null };
  obj = { hasIcons: true, children: null };
  obj = { icon: null, label: null, onPress: null };
  obj[0] = jsx(emojiSrc(4199).LinkIcon, {});
  const intl = emojiSrc(1236).intl;
  obj[1] = intl.string(emojiSrc(1236).t.cIoudn);
  obj[2] = callback;
  obj[1] = jsx(emojiSrc(5300).TableRow, { icon: null, label: null, onPress: null });
  obj[0] = jsx(emojiSrc(5634).TableRowGroup, { icon: null, label: null, onPress: null });
  return jsx(emojiSrc(5631).ActionSheet, { icon: null, label: null, onPress: null });
};

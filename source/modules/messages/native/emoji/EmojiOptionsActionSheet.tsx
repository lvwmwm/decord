// Module ID: 10340
// Function ID: 10341
// Name: EmojiOptionsActionSheet
// Dependencies: [19, 21, 7190, 4258, 4527, 7198, 5687, 5605, 4503, 1114, 2]
// Exports: default

// Module 10340 (EmojiOptionsActionSheet)
import closure_3 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
let result = require("set").fileFinishedImporting("modules/messages/native/emoji/EmojiOptionsActionSheet.tsx");

export default function EmojiOptionsActionSheet(emojiSrc) {
  emojiSrc = emojiSrc.emojiSrc;
  const items = [emojiSrc];
  const callback = React.useCallback(() => {
    emojiSrc(closure_1_2[2]).copy(emojiSrc);
    const obj = emojiSrc(closure_1_2[2]);
    const result = emojiSrc(closure_1_2[3]).presentCopiedToClipboard();
    const obj2 = emojiSrc(closure_1_2[3]);
    closure_1_1(closure_1_2[4]).hideActionSheet();
  }, items);
  let obj = { children: null };
  obj = { hasIcons: true, children: null };
  obj = { icon: jsx(emojiSrc(4503).LinkIcon, {}), label: null, onPress: null };
  const intl = emojiSrc(1114).intl;
  obj[1] = intl.string(emojiSrc(1114).t.cIoudn);
  obj[2] = callback;
  obj[1] = jsx(emojiSrc(5605).TableRow, { icon: jsx(emojiSrc(4503).LinkIcon, {}), label: null, onPress: null });
  obj[0] = jsx(emojiSrc(5687).TableRowGroup, { icon: jsx(emojiSrc(4503).LinkIcon, {}), label: null, onPress: null });
  return jsx(emojiSrc(7198).ActionSheet, { icon: jsx(emojiSrc(4503).LinkIcon, {}), label: null, onPress: null });
};

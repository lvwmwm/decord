// Module ID: 10681
// Function ID: 10682
// Name: EmojiOptionsActionSheet
// Dependencies: [19, 21, 7520, 4520, 4794, 7528, 5990, 5908, 4769, 1115, 2]
// Exports: default

// Module 10681 (EmojiOptionsActionSheet)
import ToastUtils from "ToastUtils" /* 4520 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4794 */;
import ClipboardUtils from "ClipboardUtils" /* 7520 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/emoji/EmojiOptionsActionSheet.tsx");

export default function EmojiOptionsActionSheet(emojiSrc) {
  emojiSrc = emojiSrc.emojiSrc;
  const items = [emojiSrc];
  const callback = noop.useCallback(() => {
    ClipboardUtils.copy(emojiSrc);
    const result = ToastUtils.presentCopiedToClipboard();
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, items);
  let obj = { children: null };
  let obj2 = { hasIcons: true, children: null };
  const obj3 = { icon: jsx(emojiSrc(4769).LinkIcon, {}), label: null, onPress: null };
  const intl = emojiSrc(1115).intl;
  obj3.label = intl.string(emojiSrc(1115).t.cIoudn);
  obj3.onPress = callback;
  obj2.children = jsx(emojiSrc(5908).TableRow, { icon: jsx(emojiSrc(4769).LinkIcon, {}), label: null, onPress: null });
  obj.children = jsx(emojiSrc(5990).TableRowGroup, { hasIcons: true, children: null });
  return jsx(emojiSrc(7528).ActionSheet, { children: null });
};

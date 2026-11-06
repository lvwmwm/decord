// Module ID: 10203
// Function ID: 10204
// Name: EmojiOptionsActionSheet
// Dependencies: [19, 21, 7441, 5866, 5404, 7449, 7151, 7063, 5882, 1113, 2]
// Exports: default

// Module 10203 (EmojiOptionsActionSheet)
import Fragment from "Fragment" /* 21 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5404 */;
import ToastUtils from "ToastUtils" /* 5866 */;
import ClipboardUtils from "ClipboardUtils" /* 7441 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/messages/native/emoji/EmojiOptionsActionSheet.tsx");

export default function EmojiOptionsActionSheet(emojiSrc) {
  let intl;
  emojiSrc = emojiSrc.emojiSrc;
  const items = [emojiSrc];
  const callback = react.useCallback(() => {
    const obj = ClipboardUtils;
    obj.copy(emojiSrc);
    const obj2 = ToastUtils;
    const result = obj2.presentCopiedToClipboard();
    const obj3 = ActionSheetActionCreatorsDefault;
    obj3.hideActionSheet();
  }, items);
  const ActionSheet = emojiSrc(7449).ActionSheet;
  let obj2 = { hasIcons: true, children: null };
  const TableRowGroup = emojiSrc(7151).TableRowGroup;
  let obj3 = { icon: null, label: intl.string(emojiSrc(1113).t.cIoudn), onPress: callback };
  const TableRow = emojiSrc(7063).TableRow;
  intl = emojiSrc(1113).intl;
  return <ActionSheet>{null}</ActionSheet>;
};

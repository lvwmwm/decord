// Module ID: 9801
// Function ID: 9802
// Name: EmojiOptionsActionSheet
// Dependencies: [19, 21, 6610, 4527, 4800, 6618, 5999, 5917, 4775, 1115, 2]
// Exports: default

// Module 9801 (EmojiOptionsActionSheet)
import Fragment from "Fragment" /* 21 */;
import ToastUtils from "ToastUtils" /* 4527 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import ClipboardUtils from "ClipboardUtils" /* 6610 */;
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
  const ActionSheet = emojiSrc(6618).ActionSheet;
  let obj2 = { hasIcons: true, children: null };
  const TableRowGroup = emojiSrc(5999).TableRowGroup;
  let obj3 = { icon: null, label: intl.string(emojiSrc(1115).t.cIoudn), onPress: callback };
  const TableRow = emojiSrc(5917).TableRow;
  intl = emojiSrc(1115).intl;
  return <ActionSheet>{null}</ActionSheet>;
};

// Module ID: 11332
// Function ID: 11333
// Name: EmojiOptionsActionSheet
// Dependencies: [19, 21, 7545, 5594, 5127, 7553, 7348, 7045, 5609, 1112, 2]
// Exports: default

// Module 11332 (EmojiOptionsActionSheet)
import Fragment from "Fragment" /* 21 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import ToastUtils from "ToastUtils" /* 5594 */;
import ClipboardUtils from "ClipboardUtils" /* 7545 */;
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
  const ActionSheet = emojiSrc(7553).ActionSheet;
  let obj2 = { hasIcons: true, children: null };
  const TableRowGroup = emojiSrc(7348).TableRowGroup;
  let obj3 = { icon: null, label: intl.string(emojiSrc(1112).t.cIoudn), onPress: callback };
  const TableRow = emojiSrc(7045).TableRow;
  intl = emojiSrc(1112).intl;
  return <ActionSheet>{null}</ActionSheet>;
};

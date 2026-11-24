// Module ID: 9628
// Function ID: 9629
// Name: EmojiOptionsActionSheet
// Dependencies: [19, 21, 7412, 5598, 5131, 7420, 6014, 6018, 5613, 1112, 2]
// Exports: default

// Module 9628 (EmojiOptionsActionSheet)
import Fragment from "Fragment" /* 21 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5131 */;
import ToastUtils from "ToastUtils" /* 5598 */;
import ClipboardUtils from "ClipboardUtils" /* 7412 */;
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
  const ActionSheet = emojiSrc(7420).ActionSheet;
  let obj2 = { hasIcons: true, children: null };
  const TableRowGroup = emojiSrc(6014).TableRowGroup;
  let obj3 = { icon: null, label: intl.string(emojiSrc(1112).t.cIoudn), onPress: callback };
  const TableRow = emojiSrc(6018).TableRow;
  intl = emojiSrc(1112).intl;
  return <ActionSheet>{null}</ActionSheet>;
};

// Module ID: 11207
// Function ID: 11208
// Name: EmojiOptionsActionSheet
// Dependencies: [19, 21, 7425, 5475, 5008, 7433, 7228, 6925, 5490, 1112, 2]
// Exports: default

// Module 11207 (EmojiOptionsActionSheet)
import Fragment from "Fragment" /* 21 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5008 */;
import ToastUtils from "ToastUtils" /* 5475 */;
import ClipboardUtils from "ClipboardUtils" /* 7425 */;
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
  const ActionSheet = emojiSrc(7433).ActionSheet;
  let obj2 = { hasIcons: true, children: null };
  const TableRowGroup = emojiSrc(7228).TableRowGroup;
  let obj3 = { icon: null, label: intl.string(emojiSrc(1112).t.cIoudn), onPress: callback };
  const TableRow = emojiSrc(6925).TableRow;
  intl = emojiSrc(1112).intl;
  return <ActionSheet>{null}</ActionSheet>;
};

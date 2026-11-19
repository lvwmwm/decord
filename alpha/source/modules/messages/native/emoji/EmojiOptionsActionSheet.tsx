// Module ID: 11265
// Function ID: 11266
// Name: EmojiOptionsActionSheet
// Dependencies: [19, 21, 7426, 5473, 5006, 7434, 7229, 6926, 5488, 1113, 2]
// Exports: default

// Module 11265 (EmojiOptionsActionSheet)
import Fragment from "Fragment" /* 21 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5006 */;
import ToastUtils from "ToastUtils" /* 5473 */;
import ClipboardUtils from "ClipboardUtils" /* 7426 */;
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
  const ActionSheet = emojiSrc(7434).ActionSheet;
  let obj2 = { hasIcons: true, children: null };
  const TableRowGroup = emojiSrc(7229).TableRowGroup;
  let obj3 = { icon: null, label: intl.string(emojiSrc(1113).t.cIoudn), onPress: callback };
  const TableRow = emojiSrc(6926).TableRow;
  intl = emojiSrc(1113).intl;
  return <ActionSheet>{null}</ActionSheet>;
};

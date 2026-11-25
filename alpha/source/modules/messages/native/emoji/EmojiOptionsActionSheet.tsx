// Module ID: 9727
// Function ID: 9728
// Name: EmojiOptionsActionSheet
// Dependencies: [19, 21, 7507, 5693, 5226, 7515, 6109, 6113, 5708, 1112, 2]
// Exports: default

// Module 9727 (EmojiOptionsActionSheet)
import Fragment from "Fragment" /* 21 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import ToastUtils from "ToastUtils" /* 5693 */;
import ClipboardUtils from "ClipboardUtils" /* 7507 */;
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
  const ActionSheet = emojiSrc(7515).ActionSheet;
  let obj2 = { hasIcons: true, children: null };
  const TableRowGroup = emojiSrc(6109).TableRowGroup;
  let obj3 = { icon: null, label: intl.string(emojiSrc(1112).t.cIoudn), onPress: callback };
  const TableRow = emojiSrc(6113).TableRow;
  intl = emojiSrc(1112).intl;
  return <ActionSheet>{null}</ActionSheet>;
};

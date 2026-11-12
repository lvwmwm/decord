// Module ID: 10218
// Function ID: 10219
// Name: EmojiOptionsActionSheet
// Dependencies: [19, 21, 7451, 5868, 5406, 7459, 7159, 7071, 5883, 1113, 2]
// Exports: default

// Module 10218 (EmojiOptionsActionSheet)
import Fragment from "Fragment" /* 21 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5406 */;
import ToastUtils from "ToastUtils" /* 5868 */;
import ClipboardUtils from "ClipboardUtils" /* 7451 */;
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
  const ActionSheet = emojiSrc(7459).ActionSheet;
  let obj2 = { hasIcons: true, children: null };
  const TableRowGroup = emojiSrc(7159).TableRowGroup;
  let obj3 = { icon: null, label: intl.string(emojiSrc(1113).t.cIoudn), onPress: callback };
  const TableRow = emojiSrc(7071).TableRow;
  intl = emojiSrc(1113).intl;
  return <ActionSheet>{null}</ActionSheet>;
};

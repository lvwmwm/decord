// Module ID: 10044
// Function ID: 10045
// Name: EmojiOptionsActionSheet
// Dependencies: [19, 21, 7352, 5706, 5253, 7360, 7054, 6969, 5722, 1114, 2]
// Exports: default

// Module 10044 (EmojiOptionsActionSheet)
import Fragment from "Fragment" /* 21 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import ToastUtils from "ToastUtils" /* 5706 */;
import ClipboardUtils from "ClipboardUtils" /* 7352 */;
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
  const ActionSheet = emojiSrc(7360).ActionSheet;
  let obj2 = { hasIcons: true, children: null };
  const TableRowGroup = emojiSrc(7054).TableRowGroup;
  let obj3 = { icon: null, label: intl.string(emojiSrc(1114).t.cIoudn), onPress: callback };
  const TableRow = emojiSrc(6969).TableRow;
  intl = emojiSrc(1114).intl;
  return <ActionSheet>{null}</ActionSheet>;
};

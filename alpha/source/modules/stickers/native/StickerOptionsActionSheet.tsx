// Module ID: 11387
// Function ID: 11388
// Name: StickerOptionsActionSheet
// Dependencies: [19, 21, 7545, 5594, 5127, 7553, 7348, 7045, 5609, 1112, 2]
// Exports: default

// Module 11387 (StickerOptionsActionSheet)
import Fragment from "Fragment" /* 21 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import ToastUtils from "ToastUtils" /* 5594 */;
import ClipboardUtils from "ClipboardUtils" /* 7545 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/stickers/native/StickerOptionsActionSheet.tsx");

export default function StickerOptionsActionSheet(stickerUrl) {
  let intl;
  stickerUrl = stickerUrl.stickerUrl;
  const items = [stickerUrl];
  const callback = react.useCallback(() => {
    const obj = ClipboardUtils;
    obj.copy(stickerUrl);
    const obj2 = ToastUtils;
    const result = obj2.presentCopiedToClipboard();
    const obj3 = ActionSheetActionCreatorsDefault;
    obj3.hideActionSheet();
  }, items);
  const ActionSheet = stickerUrl(7553).ActionSheet;
  let obj2 = { hasIcons: true, children: null };
  const TableRowGroup = stickerUrl(7348).TableRowGroup;
  let obj3 = { icon: null, label: intl.string(stickerUrl(1112).t.B1ubHx), onPress: callback };
  const TableRow = stickerUrl(7045).TableRow;
  intl = stickerUrl(1112).intl;
  return <ActionSheet>{null}</ActionSheet>;
};

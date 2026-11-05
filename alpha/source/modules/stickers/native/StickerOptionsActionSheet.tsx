// Module ID: 10472
// Function ID: 10473
// Name: StickerOptionsActionSheet
// Dependencies: [19, 21, 7496, 5848, 5384, 7504, 7204, 7119, 5864, 1113, 2]
// Exports: default

// Module 10472 (StickerOptionsActionSheet)
import Fragment from "Fragment" /* 21 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5384 */;
import ToastUtils from "ToastUtils" /* 5848 */;
import ClipboardUtils from "ClipboardUtils" /* 7496 */;
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
  const ActionSheet = stickerUrl(7504).ActionSheet;
  let obj2 = { hasIcons: true, children: null };
  const TableRowGroup = stickerUrl(7204).TableRowGroup;
  let obj3 = { icon: null, label: intl.string(stickerUrl(1113).t.B1ubHx), onPress: callback };
  const TableRow = stickerUrl(7119).TableRow;
  intl = stickerUrl(1113).intl;
  return <ActionSheet>{null}</ActionSheet>;
};

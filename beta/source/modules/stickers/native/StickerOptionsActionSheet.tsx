// Module ID: 9867
// Function ID: 9868
// Name: StickerOptionsActionSheet
// Dependencies: [19, 21, 6610, 4527, 4800, 6618, 5999, 5917, 4775, 1115, 2]
// Exports: default

// Module 9867 (StickerOptionsActionSheet)
import Fragment from "Fragment" /* 21 */;
import ToastUtils from "ToastUtils" /* 4527 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import ClipboardUtils from "ClipboardUtils" /* 6610 */;
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
  const ActionSheet = stickerUrl(6618).ActionSheet;
  let obj2 = { hasIcons: true, children: null };
  const TableRowGroup = stickerUrl(5999).TableRowGroup;
  let obj3 = { icon: null, label: intl.string(stickerUrl(1115).t.B1ubHx), onPress: callback };
  const TableRow = stickerUrl(5917).TableRow;
  intl = stickerUrl(1115).intl;
  return <ActionSheet>{null}</ActionSheet>;
};

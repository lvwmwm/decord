// Module ID: 10851
// Function ID: 10852
// Name: StickerOptionsActionSheet
// Dependencies: [19, 21, 7538, 5724, 5257, 7546, 6140, 6144, 5739, 1112, 2]
// Exports: default

// Module 10851 (StickerOptionsActionSheet)
import Fragment from "Fragment" /* 21 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import ToastUtils from "ToastUtils" /* 5724 */;
import ClipboardUtils from "ClipboardUtils" /* 7538 */;
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
  const ActionSheet = stickerUrl(7546).ActionSheet;
  let obj2 = { hasIcons: true, children: null };
  const TableRowGroup = stickerUrl(6140).TableRowGroup;
  let obj3 = { icon: null, label: intl.string(stickerUrl(1112).t.B1ubHx), onPress: callback };
  const TableRow = stickerUrl(6144).TableRow;
  intl = stickerUrl(1112).intl;
  return <ActionSheet>{null}</ActionSheet>;
};

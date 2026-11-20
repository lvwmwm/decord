// Module ID: 11267
// Function ID: 11268
// Name: StickerOptionsActionSheet
// Dependencies: [19, 21, 7425, 5475, 5008, 7433, 7228, 6925, 5490, 1112, 2]
// Exports: default

// Module 11267 (StickerOptionsActionSheet)
import Fragment from "Fragment" /* 21 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5008 */;
import ToastUtils from "ToastUtils" /* 5475 */;
import ClipboardUtils from "ClipboardUtils" /* 7425 */;
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
  const ActionSheet = stickerUrl(7433).ActionSheet;
  let obj2 = { hasIcons: true, children: null };
  const TableRowGroup = stickerUrl(7228).TableRowGroup;
  let obj3 = { icon: null, label: intl.string(stickerUrl(1112).t.B1ubHx), onPress: callback };
  const TableRow = stickerUrl(6925).TableRow;
  intl = stickerUrl(1112).intl;
  return <ActionSheet>{null}</ActionSheet>;
};

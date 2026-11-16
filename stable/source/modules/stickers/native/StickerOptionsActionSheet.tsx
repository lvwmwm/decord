// Module ID: 10439
// Function ID: 10440
// Name: StickerOptionsActionSheet
// Dependencies: [19, 21, 7451, 5868, 5406, 7459, 7159, 7071, 5883, 1113, 2]
// Exports: default

// Module 10439 (StickerOptionsActionSheet)
import Fragment from "Fragment" /* 21 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5406 */;
import ToastUtils from "ToastUtils" /* 5868 */;
import ClipboardUtils from "ClipboardUtils" /* 7451 */;
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
  const ActionSheet = stickerUrl(7459).ActionSheet;
  let obj2 = { hasIcons: true, children: null };
  const TableRowGroup = stickerUrl(7159).TableRowGroup;
  let obj3 = { icon: null, label: intl.string(stickerUrl(1113).t.B1ubHx), onPress: callback };
  const TableRow = stickerUrl(7071).TableRow;
  intl = stickerUrl(1113).intl;
  return <ActionSheet>{null}</ActionSheet>;
};

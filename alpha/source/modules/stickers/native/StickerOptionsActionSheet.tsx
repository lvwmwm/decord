// Module ID: 10268
// Function ID: 10269
// Name: StickerOptionsActionSheet
// Dependencies: [19, 21, 7352, 5706, 5253, 7360, 7054, 6969, 5722, 1114, 2]
// Exports: default

// Module 10268 (StickerOptionsActionSheet)
import Fragment from "Fragment" /* 21 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import ToastUtils from "ToastUtils" /* 5706 */;
import ClipboardUtils from "ClipboardUtils" /* 7352 */;
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
  const ActionSheet = stickerUrl(7360).ActionSheet;
  let obj2 = { hasIcons: true, children: null };
  const TableRowGroup = stickerUrl(7054).TableRowGroup;
  let obj3 = { icon: null, label: intl.string(stickerUrl(1114).t.B1ubHx), onPress: callback };
  const TableRow = stickerUrl(6969).TableRow;
  intl = stickerUrl(1114).intl;
  return <ActionSheet>{null}</ActionSheet>;
};

// Module ID: 9731
// Function ID: 9732
// Name: StickerOptionsActionSheet
// Dependencies: [19, 21, 558, 576, 6872, 4765, 5054, 5039, 1126, 6885, 6267, 6184, 2]

// Module 9731 (StickerOptionsActionSheet)
import Fragment from "Fragment" /* 21 */;
import ToastUtils from "ToastUtils" /* 4765 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import ClipboardUtils from "ClipboardUtils" /* 6872 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function StickerOptionsActionSheet(stickerUrl) {
  let tmp10;
  let tmp4;
  let obj = stickerUrl(576);
  const cResult = obj.c(6);
  stickerUrl = stickerUrl.stickerUrl;
  if (cResult[0] !== stickerUrl) {
    const fn = function o() {
      const obj = ClipboardUtils;
      obj.copy(stickerUrl);
      const obj2 = ToastUtils;
      const result = obj2.presentCopiedToClipboard();
      const obj3 = ActionSheetActionCreatorsDefault;
      obj3.hideActionSheet();
    };
    cResult[0] = stickerUrl;
    cResult[1] = fn;
    tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp8 = jsx(stickerUrl(5039).LinkIcon, {});
    const intl = tmp(1126).intl;
    const stringResult = intl.string(stickerUrl(1126).t.B1ubHx);
    cResult[2] = tmp8;
    cResult[3] = stringResult;
  }
  if (cResult[4] !== tmp4) {
    const ActionSheet = tmp(6885).ActionSheet;
    let obj3 = { hasIcons: true, children: null };
    const TableRowGroup = tmp(6267).TableRowGroup;
    const tmp12 = <ActionSheet>{null}</ActionSheet>;
    cResult[4] = tmp4;
    cResult[5] = tmp12;
    tmp10 = tmp12;
  } else {
    tmp10 = cResult[5];
  }
  return tmp10;
}) : (function StickerOptionsActionSheet(stickerUrl) {
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
  const ActionSheet = stickerUrl(6885).ActionSheet;
  let obj2 = { hasIcons: true, children: null };
  const TableRowGroup = stickerUrl(6267).TableRowGroup;
  let obj3 = { icon: null, label: intl.string(stickerUrl(1126).t.B1ubHx), onPress: callback };
  const TableRow = stickerUrl(6184).TableRow;
  intl = stickerUrl(1126).intl;
  return <ActionSheet>{null}</ActionSheet>;
});
let result = size.fileFinishedImporting("modules/stickers/native/StickerOptionsActionSheet.tsx");

export default tmp2;

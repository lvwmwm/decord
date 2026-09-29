// Module ID: 10700
// Function ID: 10701
// Name: StickerOptionsActionSheet
// Dependencies: [19, 21, 7466, 4485, 4755, 7474, 5936, 5854, 4730, 1115, 2]
// Exports: default

// Module 10700 (StickerOptionsActionSheet)
import ToastUtils from "ToastUtils" /* 4485 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4755 */;
import ClipboardUtils from "ClipboardUtils" /* 7466 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/stickers/native/StickerOptionsActionSheet.tsx");

export default function StickerOptionsActionSheet(stickerUrl) {
  stickerUrl = stickerUrl.stickerUrl;
  const items = [stickerUrl];
  const callback = noop.useCallback(() => {
    ClipboardUtils.copy(stickerUrl);
    const result = ToastUtils.presentCopiedToClipboard();
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, items);
  let obj = { children: null };
  let obj2 = { hasIcons: true, children: null };
  const obj3 = { icon: jsx(stickerUrl(4730).LinkIcon, {}), label: null, onPress: null };
  const intl = stickerUrl(1115).intl;
  obj3.label = intl.string(stickerUrl(1115).t.B1ubHx);
  obj3.onPress = callback;
  obj2.children = jsx(stickerUrl(5854).TableRow, { icon: jsx(stickerUrl(4730).LinkIcon, {}), label: null, onPress: null });
  obj.children = jsx(stickerUrl(5936).TableRowGroup, { hasIcons: true, children: null });
  return jsx(stickerUrl(7474).ActionSheet, { children: null });
};

// Module ID: 9638
// Function ID: 9639
// Name: StickerOptionsActionSheet
// Dependencies: [19, 21, 5543, 3889, 4157, 5551, 5554, 5220, 4133, 1236, 2]
// Exports: default

// Module 9638 (StickerOptionsActionSheet)
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
let result = require("_copy").fileFinishedImporting("modules/stickers/native/StickerOptionsActionSheet.tsx");

export default function StickerOptionsActionSheet(stickerUrl) {
  stickerUrl = stickerUrl.stickerUrl;
  const items = [stickerUrl];
  const callback = React.useCallback(() => {
    stickerUrl(outer1_2[2]).copy(stickerUrl);
    const obj = stickerUrl(outer1_2[2]);
    const result = stickerUrl(outer1_2[3]).presentCopiedToClipboard();
    const obj2 = stickerUrl(outer1_2[3]);
    outer1_1(outer1_2[4]).hideActionSheet();
  }, items);
  let obj = { children: null };
  obj = { hasIcons: true, children: null };
  obj = { icon: null, label: null, onPress: null };
  obj[0] = jsx(stickerUrl(4133).LinkIcon, {});
  const intl = stickerUrl(1236).intl;
  obj[1] = intl.string(stickerUrl(1236).t.B1ubHx);
  obj[2] = callback;
  obj[1] = jsx(stickerUrl(5220).TableRow, { icon: null, label: null, onPress: null });
  obj[0] = jsx(stickerUrl(5554).TableRowGroup, { icon: null, label: null, onPress: null });
  return jsx(stickerUrl(5551).ActionSheet, { icon: null, label: null, onPress: null });
};

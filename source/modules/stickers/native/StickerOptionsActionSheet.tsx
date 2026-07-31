// Module ID: 9653
// Function ID: 9654
// Name: StickerOptionsActionSheet
// Dependencies: [19, 21, 5547, 3893, 4161, 5555, 5558, 5224, 4137, 1236, 2]
// Exports: default

// Module 9653 (StickerOptionsActionSheet)
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
  obj[0] = jsx(stickerUrl(4137).LinkIcon, {});
  const intl = stickerUrl(1236).intl;
  obj[1] = intl.string(stickerUrl(1236).t.B1ubHx);
  obj[2] = callback;
  obj[1] = jsx(stickerUrl(5224).TableRow, { icon: null, label: null, onPress: null });
  obj[0] = jsx(stickerUrl(5558).TableRowGroup, { icon: null, label: null, onPress: null });
  return jsx(stickerUrl(5555).ActionSheet, { icon: null, label: null, onPress: null });
};

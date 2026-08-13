// Module ID: 10019
// Function ID: 10020
// Name: StickerOptionsActionSheet
// Dependencies: [19, 21, 5796, 4061, 4310, 5804, 5807, 5414, 4286, 1236, 2]
// Exports: default

// Module 10019 (StickerOptionsActionSheet)
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
  obj[0] = jsx(stickerUrl(4286).LinkIcon, {});
  const intl = stickerUrl(1236).intl;
  obj[1] = intl.string(stickerUrl(1236).t.B1ubHx);
  obj[2] = callback;
  obj[1] = jsx(stickerUrl(5414).TableRow, { icon: null, label: null, onPress: null });
  obj[0] = jsx(stickerUrl(5807).TableRowGroup, { icon: null, label: null, onPress: null });
  return jsx(stickerUrl(5804).ActionSheet, { icon: null, label: null, onPress: null });
};

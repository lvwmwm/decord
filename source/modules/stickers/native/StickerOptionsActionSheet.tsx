// Module ID: 9621
// Function ID: 74948
// Name: StickerOptionsActionSheet
// Dependencies: [31, 33, 5492, 3830, 4098, 5500, 5503, 5165, 4074, 1212, 2]
// Exports: default

// Module 9621 (StickerOptionsActionSheet)
import result from "result";
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
  let obj = {};
  obj = { hasIcons: true };
  obj = { icon: jsx(stickerUrl(4074).LinkIcon, {}) };
  const intl = stickerUrl(1212).intl;
  obj.label = intl.string(stickerUrl(1212).t.B1ubHx);
  obj.onPress = callback;
  obj.children = jsx(stickerUrl(5165).TableRow, { icon: jsx(stickerUrl(4074).LinkIcon, {}) });
  obj.children = jsx(stickerUrl(5503).TableRowGroup, { icon: jsx(stickerUrl(4074).LinkIcon, {}) });
  return jsx(stickerUrl(5500).ActionSheet, { icon: jsx(stickerUrl(4074).LinkIcon, {}) });
};

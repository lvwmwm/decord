// Module ID: 9619
// Function ID: 74879
// Name: StickerOptionsActionSheet
// Dependencies: [31, 33, 5525, 3865, 4133, 5533, 5536, 5198, 4109, 1212, 2]
// Exports: default

// Module 9619 (StickerOptionsActionSheet)
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
  obj = { icon: jsx(stickerUrl(4109).LinkIcon, {}) };
  const intl = stickerUrl(1212).intl;
  obj.label = intl.string(stickerUrl(1212).t.B1ubHx);
  obj.onPress = callback;
  obj.children = jsx(stickerUrl(5198).TableRow, { icon: jsx(stickerUrl(4109).LinkIcon, {}) });
  obj.children = jsx(stickerUrl(5536).TableRowGroup, { icon: jsx(stickerUrl(4109).LinkIcon, {}) });
  return jsx(stickerUrl(5533).ActionSheet, { icon: jsx(stickerUrl(4109).LinkIcon, {}) });
};

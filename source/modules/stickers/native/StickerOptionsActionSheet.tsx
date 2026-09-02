// Module ID: 10419
// Function ID: 10420
// Name: StickerOptionsActionSheet
// Dependencies: [19, 21, 5989, 4193, 4445, 5997, 6000, 5607, 4421, 1233, 2]
// Exports: default

// Module 10419 (StickerOptionsActionSheet)
import closure_3 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
let result = require("set").fileFinishedImporting("modules/stickers/native/StickerOptionsActionSheet.tsx");

export default function StickerOptionsActionSheet(stickerUrl) {
  stickerUrl = stickerUrl.stickerUrl;
  const items = [stickerUrl];
  const callback = React.useCallback(() => {
    stickerUrl(closure_1_2[2]).copy(stickerUrl);
    const obj = stickerUrl(closure_1_2[2]);
    const result = stickerUrl(closure_1_2[3]).presentCopiedToClipboard();
    const obj2 = stickerUrl(closure_1_2[3]);
    closure_1_1(closure_1_2[4]).hideActionSheet();
  }, items);
  let obj = { children: null };
  obj = { hasIcons: true, children: null };
  obj = { icon: jsx(stickerUrl(4421).LinkIcon, {}), label: null, onPress: null };
  const intl = stickerUrl(1233).intl;
  obj[1] = intl.string(stickerUrl(1233).t.B1ubHx);
  obj[2] = callback;
  obj[1] = jsx(stickerUrl(5607).TableRow, { icon: jsx(stickerUrl(4421).LinkIcon, {}), label: null, onPress: null });
  obj[0] = jsx(stickerUrl(6000).TableRowGroup, { icon: jsx(stickerUrl(4421).LinkIcon, {}), label: null, onPress: null });
  return jsx(stickerUrl(5997).ActionSheet, { icon: jsx(stickerUrl(4421).LinkIcon, {}), label: null, onPress: null });
};

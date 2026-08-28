// Module ID: 10334
// Function ID: 10335
// Name: StickerOptionsActionSheet
// Dependencies: [19, 21, 5946, 4162, 4413, 5954, 5957, 5564, 4389, 1236, 2]
// Exports: default

// Module 10334 (StickerOptionsActionSheet)
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
  obj = { icon: jsx(stickerUrl(4389).LinkIcon, {}), label: null, onPress: null };
  const intl = stickerUrl(1236).intl;
  obj[1] = intl.string(stickerUrl(1236).t.B1ubHx);
  obj[2] = callback;
  obj[1] = jsx(stickerUrl(5564).TableRow, { icon: jsx(stickerUrl(4389).LinkIcon, {}), label: null, onPress: null });
  obj[0] = jsx(stickerUrl(5957).TableRowGroup, { icon: jsx(stickerUrl(4389).LinkIcon, {}), label: null, onPress: null });
  return jsx(stickerUrl(5954).ActionSheet, { icon: jsx(stickerUrl(4389).LinkIcon, {}), label: null, onPress: null });
};

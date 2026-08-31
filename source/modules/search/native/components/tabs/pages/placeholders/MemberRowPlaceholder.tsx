// Module ID: 16228
// Function ID: 16229
// Name: MemberRowPlaceholderItem
// Dependencies: [19, 21, 4448, 16222, 2]
// Exports: default

// Module 16228 (MemberRowPlaceholderItem)
import noopAll from "noop" /* 19 */;
import FormRowPlaceholderItemDefault from "FormRowPlaceholderItem" /* 16222 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;

noopAll;
let closure_3 = createCacheKey.createStyles({ container: { paddingHorizontal: 0 } });
const result = require("set").fileFinishedImporting("modules/search/native/components/tabs/pages/placeholders/MemberRowPlaceholder.tsx");

export default function MemberRowPlaceholderItem() {
  const tmp = callback();
  return jsx(FormRowPlaceholderItemDefault, { style: callback().container });
};

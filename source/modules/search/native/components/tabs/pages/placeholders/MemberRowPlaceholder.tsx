// Module ID: 16000
// Function ID: 16001
// Name: MemberRowPlaceholderItem
// Dependencies: [19, 21, 4668, 15994, 2]
// Exports: default

// Module 16000 (MemberRowPlaceholderItem)
import noopAll from "noop" /* 19 */;
import FormRowPlaceholderItemDefault from "FormRowPlaceholderItem" /* 15994 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;

noopAll;
let closure_3 = createCacheKey.createStyles({ container: { paddingHorizontal: 0 } });
const result = require("set").fileFinishedImporting("modules/search/native/components/tabs/pages/placeholders/MemberRowPlaceholder.tsx");

export default function MemberRowPlaceholderItem() {
  const tmp = callback();
  return jsx(FormRowPlaceholderItemDefault, { style: callback().container });
};

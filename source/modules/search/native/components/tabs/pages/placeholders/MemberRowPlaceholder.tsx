// Module ID: 16516
// Function ID: 16517
// Name: MemberRowPlaceholderItem
// Dependencies: [19, 21, 4478, 16510, 2]
// Exports: default

// Module 16516 (MemberRowPlaceholderItem)
import noopAll from "noop" /* 19 */;
import FormRowPlaceholderItemDefault from "FormRowPlaceholderItem" /* 16510 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

noopAll;
let closure_3 = createCacheKey.createStyles({ container: { paddingHorizontal: 0 } });
const result = require("set").fileFinishedImporting("modules/search/native/components/tabs/pages/placeholders/MemberRowPlaceholder.tsx");

export default function MemberRowPlaceholderItem() {
  const tmp = callback();
  return jsx(FormRowPlaceholderItemDefault, { style: callback().container });
};

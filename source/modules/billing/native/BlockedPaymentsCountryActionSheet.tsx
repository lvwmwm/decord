// Module ID: 7589
// Function ID: 7590
// Name: BlockedPaymentsCountryActionSheet
// Dependencies: [19, 21, 5503, 7548, 2]
// Exports: default

// Module 7589 (BlockedPaymentsCountryActionSheet)
import noopAll from "noop" /* 19 */;
import Background from "Background" /* 5503 */;
import BlockedPaymentsCountryDisplayDefault from "BlockedPaymentsCountryDisplay" /* 7548 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/billing/native/BlockedPaymentsCountryActionSheet.tsx");

export default function BlockedPaymentsCountryActionSheet() {
  return jsx(Background.BottomSheet, { children: jsx(BlockedPaymentsCountryDisplayDefault, {}) });
};

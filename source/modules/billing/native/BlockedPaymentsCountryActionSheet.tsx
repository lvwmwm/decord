// Module ID: 8494
// Function ID: 8495
// Name: BlockedPaymentsCountryActionSheet
// Dependencies: [19, 21, 5630, 8495, 2]
// Exports: default

// Module 8494 (BlockedPaymentsCountryActionSheet)
import noopAll from "noop" /* 19 */;
import Background from "Background" /* 5630 */;
import BlockedPaymentsCountryDisplayDefault from "BlockedPaymentsCountryDisplay" /* 8495 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/billing/native/BlockedPaymentsCountryActionSheet.tsx");

export default function BlockedPaymentsCountryActionSheet() {
  return jsx(Background.BottomSheet, { children: jsx(BlockedPaymentsCountryDisplayDefault, {}) });
};

// Module ID: 11697
// Function ID: 11698
// Name: BlockedPaymentsCountryActionSheet
// Dependencies: [19, 21, 7395, 11698, 2]
// Exports: default

// Module 11697 (BlockedPaymentsCountryActionSheet)
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 7395 */;
import BlockedPaymentsCountryDisplayDefault from "BlockedPaymentsCountryDisplay" /* 11698 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/billing/native/BlockedPaymentsCountryActionSheet.tsx");

export default function BlockedPaymentsCountryActionSheet() {
  return jsx(Sheet_BottomSheet.BottomSheet, { children: jsx(BlockedPaymentsCountryDisplayDefault, {}) });
};

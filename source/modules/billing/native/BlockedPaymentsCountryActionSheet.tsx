// Module ID: 7367
// Function ID: 7368
// Name: BlockedPaymentsCountryActionSheet
// Dependencies: [19, 21, 5338, 7326, 2]
// Exports: default

// Module 7367 (BlockedPaymentsCountryActionSheet)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Background").fileFinishedImporting("modules/billing/native/BlockedPaymentsCountryActionSheet.tsx");

export default function BlockedPaymentsCountryActionSheet() {
  const obj = { children: null };
  obj[0] = jsx(importDefault(7326), {});
  return jsx(require(5338) /* Background */.BottomSheet, { children: null });
};

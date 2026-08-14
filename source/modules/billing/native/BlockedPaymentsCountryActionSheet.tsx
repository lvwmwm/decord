// Module ID: 7512
// Function ID: 7513
// Name: BlockedPaymentsCountryActionSheet
// Dependencies: [19, 21, 5458, 7471, 2]
// Exports: default

// Module 7512 (BlockedPaymentsCountryActionSheet)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Background").fileFinishedImporting("modules/billing/native/BlockedPaymentsCountryActionSheet.tsx");

export default function BlockedPaymentsCountryActionSheet() {
  const obj = { children: null };
  obj[0] = jsx(importDefault(7471), {});
  return jsx(require(5458) /* Background */.BottomSheet, { children: null });
};

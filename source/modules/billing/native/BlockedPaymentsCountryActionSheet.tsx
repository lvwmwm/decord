// Module ID: 7730
// Function ID: 7731
// Name: BlockedPaymentsCountryActionSheet
// Dependencies: [19, 21, 6950, 7689, 2]
// Exports: default

// Module 7730 (BlockedPaymentsCountryActionSheet)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Background").fileFinishedImporting("modules/billing/native/BlockedPaymentsCountryActionSheet.tsx");

export default function BlockedPaymentsCountryActionSheet() {
  const obj = { children: null };
  obj[0] = jsx(importDefault(7689), {});
  return jsx(require(6950) /* Background */.BottomSheet, { children: null });
};

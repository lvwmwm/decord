// Module ID: 7446
// Function ID: 7447
// Name: BlockedPaymentsCountryActionSheet
// Dependencies: [19, 21, 5397, 7405, 2]
// Exports: default

// Module 7446 (BlockedPaymentsCountryActionSheet)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Background").fileFinishedImporting("modules/billing/native/BlockedPaymentsCountryActionSheet.tsx");

export default function BlockedPaymentsCountryActionSheet() {
  const obj = { children: null };
  obj[0] = jsx(importDefault(7405), {});
  return jsx(require(5397) /* Background */.BottomSheet, { children: null });
};

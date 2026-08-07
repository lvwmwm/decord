// Module ID: 7386
// Function ID: 7387
// Name: BlockedPaymentsCountryActionSheet
// Dependencies: [19, 21, 5396, 7345, 2]
// Exports: default

// Module 7386 (BlockedPaymentsCountryActionSheet)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Background").fileFinishedImporting("modules/billing/native/BlockedPaymentsCountryActionSheet.tsx");

export default function BlockedPaymentsCountryActionSheet() {
  const obj = { children: null };
  obj[0] = jsx(importDefault(7345), {});
  return jsx(require(5396) /* Background */.BottomSheet, { children: null });
};

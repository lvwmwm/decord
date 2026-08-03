// Module ID: 7355
// Function ID: 7356
// Name: BlockedPaymentsCountryActionSheet
// Dependencies: [19, 21, 5309, 7314, 2]
// Exports: default

// Module 7355 (BlockedPaymentsCountryActionSheet)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Background").fileFinishedImporting("modules/billing/native/BlockedPaymentsCountryActionSheet.tsx");

export default function BlockedPaymentsCountryActionSheet() {
  const obj = { children: null };
  obj[0] = jsx(importDefault(7314), {});
  return jsx(require(5309) /* Background */.BottomSheet, { children: null });
};

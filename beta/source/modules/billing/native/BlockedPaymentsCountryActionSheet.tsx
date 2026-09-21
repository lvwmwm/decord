// Module ID: 11566
// Function ID: 11567
// Name: BlockedPaymentsCountryActionSheet
// Dependencies: [19, 21, 558, 568, 7397, 11567, 2]

// Module 11566 (BlockedPaymentsCountryActionSheet)
import c from "c" /* 568 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 7397 */;
import BlockedPaymentsCountryDisplayDefault from "BlockedPaymentsCountryDisplay" /* 11567 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/billing/native/BlockedPaymentsCountryActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { children: jsx(BlockedPaymentsCountryDisplayDefault, {}) };
    const tmp7 = jsx(Sheet_BottomSheet.BottomSheet, { children: jsx(BlockedPaymentsCountryDisplayDefault, {}) });
    cResult[0] = tmp7;
    let first = tmp7;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => jsx(Sheet_BottomSheet.BottomSheet, { children: jsx(BlockedPaymentsCountryDisplayDefault, {}) }));

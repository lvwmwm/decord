// Module ID: 14751
// Function ID: 112435
// Name: BenchmarkResultsList
// Dependencies: [31, 33, 5501, 5165, 14747, 2]
// Exports: default

// Module 14751 (BenchmarkResultsList)
import "result";
import jsxProd from "jsxProd";

let closure_2;
let closure_3;
const require = arg1;
({ jsx: closure_2, jsxs: closure_3 } = jsxProd);
const result = require("TableRowGroupTitle").fileFinishedImporting("modules/devtools/native/components/screens/performance/BenchmarkResultsList.tsx");

export default function BenchmarkResultsList(results) {
  results = results.results;
  let tmp2 = null;
  if (0 !== results.length) {
    let obj = { title: "Results (newest first)", hasIcons: false };
    const items = [
      results.map((kind) => {
          let elapsedMs;
          if ("mount" === kind.kind) {
            let obj = {};
            ({ label: obj.label, elapsedMs } = kind);
            const _HermesInternal = HermesInternal;
            obj.subLabel = "" + elapsedMs.toFixed(1) + " ms total";
            let tmp5 = outer1_2(outer1_0(outer1_1[3]).TableRow, obj, kind.id);
          } else {
            obj = {};
            const meanMs = kind.meanMs;
            const toFixedResult = meanMs.toFixed(1);
            const worstMs = kind.worstMs;
            const _HermesInternal2 = HermesInternal;
            obj.label = "Scroll \u00B7 mean " + toFixedResult + " ms \u00B7 worst " + worstMs.toFixed(1) + " ms";
            const dropped = kind.dropped;
            const FRAME_BUDGET_MS = outer1_0(outer1_1[4]).FRAME_BUDGET_MS;
            const _HermesInternal3 = HermesInternal;
            obj.subLabel = "" + dropped + "/" + kind.frames + " frames over " + FRAME_BUDGET_MS.toFixed(1) + " ms";
            tmp5 = outer1_2(outer1_0(outer1_1[3]).TableRow, obj, kind.id);
          }
          return tmp5;
        }),

    ];
    obj = { label: "Clear results", variant: "danger", arrow: true, onPress: tmp };
    items[1] = callback(require(5165) /* TableRowInner */.TableRow, obj);
    obj.children = items;
    tmp2 = callback2(require(5501) /* TableRowGroupTitle */.TableRowGroup, obj);
  }
  return tmp2;
};

// Module ID: 15337
// Function ID: 15338
// Name: BenchmarkResultsList
// Dependencies: [19, 21, 5999, 5917, 15333, 2]
// Exports: default

// Module 15337 (BenchmarkResultsList)
import TableRow3 from "TableRow" /* 5917 */;
import TableRowGroup2 from "TableRowGroup" /* 5999 */;
import startFrameMonitor from "startFrameMonitor" /* 15333 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ jsx: c2, jsxs: c3 } = Fragment);
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/performance/BenchmarkResultsList.tsx");

export default function BenchmarkResultsList(results) {
  let items;
  results = results.results;
  let tmp2 = null;
  if (0 !== results.length) {
    let tmp5 = dependencyMap;
    let obj = { title: "Results (newest first)", hasIcons: false, children: items };
    const TableRowGroup = TableRowGroup2.TableRowGroup;
    items = [
      results.map((kind) => {
          let FRAME_BUDGET_MS;
          let dropped;
          let elapsedMs;
          let frames;
          let tmp5;
          let toFixedResult;
          let worstMs;
          if ("mount" === kind.kind) {
            const obj = { label: null, subLabel: "" + elapsedMs.toFixed(1) + " ms total" };
            ({ label: obj.label, elapsedMs } = kind);
            const TableRow = TableRow3.TableRow;
            const _HermesInternal = HermesInternal;
            tmp5 = closure_1_2(TableRow, obj, kind.id);
          } else {
            const meanMs = kind.meanMs;
            const obj2 = { label: "Scroll \u00B7 mean " + toFixedResult + " ms \u00B7 worst " + worstMs.toFixed(1) + " ms", subLabel: "" + dropped + "/" + frames + " frames over " + FRAME_BUDGET_MS.toFixed(1) + " ms" };
            const TableRow2 = TableRow3.TableRow;
            worstMs = kind.worstMs;
            const _HermesInternal2 = HermesInternal;
            ({ dropped, frames } = kind);
            toFixedResult = meanMs.toFixed(1);
            FRAME_BUDGET_MS = startFrameMonitor.FRAME_BUDGET_MS;
            const _HermesInternal3 = HermesInternal;
            tmp5 = closure_1_2(TableRow2, obj2, kind.id);
          }
          return tmp5;
        }),

    ];
    let obj2 = { label: "Clear results", variant: "danger", arrow: true, onPress: tmp };
    items[1] = React2(TableRow3.TableRow, obj2);
    tmp2 = _false(TableRowGroup, obj);
  }
  return tmp2;
};

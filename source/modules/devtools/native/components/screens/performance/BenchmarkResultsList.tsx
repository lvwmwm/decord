// Module ID: 14578
// Function ID: 109875
// Name: BenchmarkResultsList
// Dependencies: []
// Exports: default

// Module 14578 (BenchmarkResultsList)
importAll(dependencyMap[0]);
({ jsx: closure_2, jsxs: closure_3 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/devtools/native/components/screens/performance/BenchmarkResultsList.tsx");

export default function BenchmarkResultsList(results) {
  results = results.results;
  let tmp2 = null;
  if (0 !== results.length) {
    let obj = { "Bool(false)": 26, "Bool(false)": null };
    const items = [
      results.map((kind) => {
          let elapsedMs;
          if ("mount" === kind.kind) {
            let obj = {};
            ({ label: obj.label, elapsedMs } = kind);
            const _HermesInternal = HermesInternal;
            obj.subLabel = "" + elapsedMs.toFixed(1) + " ms total";
            let tmp5 = callback2(callback(closure_1[3]).TableRow, obj, kind.id);
          } else {
            obj = {};
            const meanMs = kind.meanMs;
            const toFixedResult = meanMs.toFixed(1);
            const worstMs = kind.worstMs;
            const _HermesInternal2 = HermesInternal;
            obj.label = "Scroll \u00B7 mean " + toFixedResult + " ms \u00B7 worst " + worstMs.toFixed(1) + " ms";
            const dropped = kind.dropped;
            const FRAME_BUDGET_MS = callback(closure_1[4]).FRAME_BUDGET_MS;
            const _HermesInternal3 = HermesInternal;
            obj.subLabel = "" + dropped + "/" + kind.frames + " frames over " + FRAME_BUDGET_MS.toFixed(1) + " ms";
            tmp5 = callback2(callback(closure_1[3]).TableRow, obj, kind.id);
          }
          return tmp5;
        }),

    ];
    obj = { onPress: tmp };
    items[1] = callback(arg1(dependencyMap[3]).TableRow, obj);
    obj.children = items;
    tmp2 = callback2(arg1(dependencyMap[2]).TableRowGroup, obj);
  }
  return tmp2;
};

// Module ID: 17284
// Function ID: 17285
// Name: ConjurePerfTraceList
// Dependencies: [2]
// Exports: filterPerfTraces, perfTraceExport

// Module 17284 (ConjurePerfTraceList)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/debug/perf_trace/ConjurePerfTraceList.tsx");

export const filterPerfTraces = function filterPerfTraces(stateFromStoresArray, first1) {
  let str = first1.trim();
  const formatted = str.toLowerCase();
  let found = stateFromStoresArray;
  if ("" !== formatted) {
    found = stateFromStoresArray.filter((item) => {
      function perfTraceText(item) {
        let spans;
        const items = [];
        ({ name: arr[0], spans } = item);
        const iter = spans[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp3 = nextResult;
          let str = nextResult.error;
          let push = items.push;
          let name = nextResult.name;
          if (str == null) {
            str = "";
          }
          let arr2 = push(name, str);
          let attrs = tmp3.attrs;
          let _Object = Object;
          if (attrs == null) {
            attrs = {};
          }
          let items1 = [];
          let arraySpreadResult = HermesBuiltin.arraySpread(items1, values(attrs), 0);
          let details = tmp3.details;
          let _Object2 = Object;
          let values2 = Object.values;
          if (details == null) {
            details = {};
          }
          let arraySpreadResult2 = HermesBuiltin.arraySpread(items1, values2(details), arraySpreadResult);
          for (const item10039 of items1) {
            let _String = String;
            let arr4 = items.push(String(item10039));
            continue;
          }
          continue;
        }
        const str2 = items.join(" ");
        return str2.toLowerCase();
      }
      const obj = perfTraceText(item);
      return obj.includes(formatted);
    });
  }
  return found;
};
export const perfTraceExport = function perfTraceExport(projectId, memo, date) {
  const obj = { kind: "conjure.timing_traces", version: 1, project_id: projectId, exported_at: date, traces: memo };
  return JSON.stringify(obj);
};
